function buildServiceRequestMessage(data) {
    const lines = [];
    lines.push('🛠️ طلب صيانة جديد');
    lines.push('==========================');
    lines.push(`🧾 رقم الطلب: ${data.requestId}`);
    lines.push(`👤 الاسم: ${data.customerName}`);
    lines.push(`📞 الهاتف: ${data.customerPhone}`);
    lines.push(`🧰 الجهاز: ${data.deviceType}`);
    lines.push(`📏 الحجم: ${data.deviceSize}`);
    lines.push('');
    lines.push('📝 وصف العطل:');
    lines.push(data.faultDesc);
    lines.push('');

    if (data.imageLink) {
        lines.push(`🖼️ رابط صورة العطل: ${data.imageLink}`);
    }
    if (data.locationLink) {
        lines.push(`📍 الموقع (خرائط): ${data.locationLink}`);
    }
    if (data.addressText) {
        lines.push(`🏠 العنوان المختصر: ${data.addressText}`);
    }

    lines.push('');
    lines.push('✅ تم إرسال الطلب من موقع وسام للإلكترونيات');
    return lines.join('\n');
}

async function saveServiceRequestToFirestore(docData) {
    if (!firebaseInitialized || !db) return; // allow graceful fallback
    try {
        // Prefer server timestamps for consistent ordering
        const ts = getServerTimestamp();

        const payload = {
            ...docData,
            createdAt: docData.createdAt || ts,
            updatedAt: ts
        };

        await db.collection('service_requests').doc(docData.requestId).set(payload, { merge: true });
        return true;
    } catch (e) {
        console.warn('Firestore save service request failed:', e);
        return false;
    }
}

async function refreshServiceRequests() {
    if (!elements.serviceRequestsTableBody) return;

    // If Firebase not available, show message
    if (!firebaseInitialized || !db) {
        elements.serviceRequestsTableBody.innerHTML = `
            <tr><td colspan="7" style="text-align:center; padding:18px;">
                Firebase غير متصل. لا يمكن عرض طلبات الصيانة الآن.
            </td></tr>`;
        return;
    }

    elements.serviceRequestsTableBody.innerHTML = `
        <tr><td colspan="7" style="text-align:center; padding:18px;">جاري التحميل...</td></tr>`;

    const renderError = (msg) => {
        elements.serviceRequestsTableBody.innerHTML = `
            <tr><td colspan="7" style="text-align:center; padding:18px;">
                ${msg}
            </td></tr>`;
    };

    try {
        // 1) Try ordered query (fast + correct)
        let docs = [];
        try {
            const snap = await db.collection('service_requests')
                .orderBy('createdAt', 'desc')
                .limit(200)
                .get();
            snap.forEach(d => docs.push({ id: d.id, data: d.data() || {} }));
        } catch (orderErr) {
            // 2) Fallback: if createdAt has inconsistent type or missing index, fetch without orderBy and sort in JS
            console.warn('service_requests orderBy failed, falling back to unordered get():', orderErr);
            const snap = await db.collection('service_requests')
                .limit(200)
                .get();
            snap.forEach(d => docs.push({ id: d.id, data: d.data() || {} }));
        }

        if (!docs.length) {
            elements.serviceRequestsTableBody.innerHTML = `
                <tr><td colspan="7" style="text-align:center; padding:18px;">لا توجد طلبات صيانة بعد</td></tr>`;
            return;
        }

        // Normalize + sort (newest first)
        docs = docs.map(x => {
            const d = x.data || {};
            const created =
                d.createdAt && d.createdAt.toDate ? d.createdAt.toDate() :
                (typeof d.createdAt === 'number' ? new Date(d.createdAt) :
                 (d.createdAt ? new Date(d.createdAt) : null));
            return { ...x, created };
        }).sort((a,b) => {
            const ta = a.created ? a.created.getTime() : 0;
            const tb = b.created ? b.created.getTime() : 0;
            return tb - ta;
        });

        const rows = [];
        for (const item of docs) {
            const d = item.data || {};
            const created = item.created;
            const createdStr = created ? created.toLocaleString('ar-JO') : '-';
            const status = d.status || 'جديد';

            rows.push(`
                <tr data-id="${escapeHtml(d.requestId || item.id)}">
                    <td>${createdStr}</td>
                    <td>${escapeHtml(d.customerName || '')}</td>
                    <td>${escapeHtml(d.customerPhone || '')}</td>
                    <td>${escapeHtml(d.deviceType || '')}</td>
                    <td>${escapeHtml(d.deviceSize || '')}</td>
                    <td>
                        <select class="sr-status-select" style="padding:8px; border-radius:10px; border:1px solid rgba(0,0,0,0.12);">
                            ${['جديد','تم التواصل','قيد التجهيز','تم الإصلاح','تم التسليم','ملغي'].map(s => `<option value="${s}" ${s===status?'selected':''}>${s}</option>`).join('')}
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary sr-view-btn" type="button">عرض</button>
                        <button class="btn btn-sm btn-outline-danger sr-delete-btn" type="button">حذف</button>
                    </td>
                </tr>
            `);
        }

        elements.serviceRequestsTableBody.innerHTML = rows.join('');

        // Wire actions
        elements.serviceRequestsTableBody.querySelectorAll('tr').forEach(row => {
            const id = row.getAttribute('data-id');

            const statusSel = row.querySelector('.sr-status-select');
            if (statusSel) {
                statusSel.addEventListener('change', async () => {
                    const newStatus = statusSel.value;
                    try {
                        await db.collection('service_requests').doc(id).set({ status: newStatus, updatedAt: new Date() }, { merge: true });
                    } catch (e) {
                        alert('تعذر تحديث الحالة. تأكد من الاتصال.');
                        console.error(e);
                    }
                });
            }

            const viewBtn = row.querySelector('.sr-view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', async () => {
                    try {
                        const doc = await db.collection('service_requests').doc(id).get();
                        if (!doc.exists) return;
                        const d = doc.data() || {};
                        const msg = buildServiceRequestMessage(d);
                        const wa = normalizeWaLink(state.storeSettings.whatsappLink || 'https://wa.me/962790781206');
                        window.open(`${wa}?text=${encodeURIComponent(msg)}`, '_blank');
                    } catch (e) {
                        console.error(e);
                        alert('تعذر فتح تفاصيل الطلب.');
                    }
                });
            }

            const delBtn = row.querySelector('.sr-delete-btn');
            if (delBtn) {
                delBtn.addEventListener('click', async () => {
                    if (!confirm('هل تريد حذف هذا الطلب؟')) return;
                    try {
                        await db.collection('service_requests').doc(id).delete();
                        refreshServiceRequests();
                    } catch (e) {
                        console.error(e);
                        alert('تعذر حذف الطلب.');
                    }
                });
            }
        });

    } catch (e) {
        console.error(e);
        const code = e && (e.code || e.message) ? (e.code || e.message) : '';
        renderError(`حدث خطأ أثناء تحميل الطلبات. ${code ? `<div style="margin-top:8px; opacity:.75; font-size:.9em;">${escapeHtml(String(code))}</div>` : ''}`);
    }
}