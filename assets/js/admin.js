async function loadSiteSettings() {
            try {
                if (!window.firebaseInitialized) {
                    console.warn('Firebase غير مهيأ، استخدام الإعدادات المحلية');
                    return;
                }
                
                const db = window.db;
                if (!db) {
                    console.warn('Firestore غير متوفر');
                    return;
                }
                
                showFirebaseLoading(true);
                
                let orderingDoc, storeDoc, pageContentDoc;
                
                try {
                    [orderingDoc, storeDoc, pageContentDoc] = await Promise.allSettled([
                        db.collection('settings').doc('ordering').get(),
                        db.collection('settings').doc('store').get(),
                        db.collection('settings').doc('page_content').get()
                    ]);
                    
                    const getData = (result) => result.status === 'fulfilled' && result.value.exists ? result.value.data() : null;
                    
                    const orderingData = getData(orderingDoc);
                    const storeData = getData(storeDoc);
                    const pageContentData = getData(pageContentDoc);
                    
                    if (orderingData) {
                        state.siteSettings.productOrder = orderingData.productOrder || [];
                        state.siteSettings.categoryOrder = orderingData.categoryOrder || state.categories.map(c => c.id);
                    } else {
                        state.siteSettings.categoryOrder = state.categories.map(c => c.id);
                    }
                    
                    if (storeData) {
                        state.storeSettings = {
                            ...state.storeSettings,
                            ...storeData
                        };
                    }
                    
                    if (pageContentData) {
                        state.pageContent = {
                            ...state.pageContent,
                            ...pageContentData
                        };
                    }
                    
                } catch (error) {
                    console.warn('❌ خطأ في تحميل بعض الإعدادات:', error);
                }
                
                localStorage.setItem('wassam_site_settings', JSON.stringify(state.siteSettings));
                localStorage.setItem('wassam_settings', JSON.stringify(state.storeSettings));
                localStorage.setItem('wassam_page_content', JSON.stringify(state.pageContent));
                
            } catch (error) {
                console.error('❌ خطأ في تحميل إعدادات الموقع:', error);
                showNotification('⚠️ تم تحميل الإعدادات من الذاكرة المحلية', 'warning');
            } finally {
                showFirebaseLoading(false);
            }
        }

async function loadProductOrder() {
            try {
                if (!window.firebaseInitialized || !window.db) {
                    console.warn('Firebase غير متصل، استخدام الترتيب المحلي');
                    state.siteSettings.productOrder = state.products.map(p => p.id);
                    state.siteSettings.categoryOrder = state.categories.map(c => c.id);
                    return;
                }
                
                const db = window.db;
                const doc = await db.collection('settings').doc('ordering').get();
                
                if (doc.exists) {
                    const data = doc.data();
                    state.siteSettings.productOrder = data.productOrder || [];
                    state.siteSettings.categoryOrder = data.categoryOrder || state.categories.map(c => c.id);
                } else {
                    state.siteSettings.categoryOrder = state.categories.map(c => c.id);
                }
                
                if (state.siteSettings.productOrder.length === 0) {
                    state.siteSettings.productOrder = state.products.map(p => p.id);
                }
                
                displayProductOrderList();
                displayCategoryOrderList();
                displayCategoriesList();
                
            } catch (error) {
                console.error('❌ خطأ في تحميل ترتيب المنتجات:', error);
                state.siteSettings.productOrder = state.products.map(p => p.id);
                state.siteSettings.categoryOrder = state.categories.map(c => c.id);
            }
        }

async function saveProduct(productData) {
            try {
                if (!window.firebaseInitialized) {
                    throw new Error("Firebase غير متصل");
                }
                
                const db = getDbSafe();
                if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                showFirebaseLoading(true);
                
                productData.name = document.getElementById('productName').value;
                productData.category = document.getElementById('productCategory').value;
                productData.sell = parseFloat(document.getElementById('productPrice').value);
                productData.stock = parseInt(document.getElementById('productStock').value);
                productData.featured = !!document.getElementById('productFeatured')?.checked;
                productData.description = document.getElementById('productDescription').value || '';
                productData.deliveryFee = parseFloat(document.getElementById('productDeliveryFee').value) || 2;
                productData.videoUrl = document.getElementById('productVideoUrl').value.trim() || '';
                
                const mainImageUrl = document.getElementById('productImageUrl').value.trim();
                if (!mainImageUrl.startsWith('http')) {
                    alert('الرجاء إدخال رابط صحيح للصورة الرئيسية يبدأ بـ http:// أو https://');
                    return;
                }
                productData.image = mainImageUrl;
                
                const additionalImageInputs = document.querySelectorAll('.additional-image-url');
                const additionalImages = [];
                additionalImageInputs.forEach(input => {
                    const url = input.value.trim();
                    if (url && url.startsWith('http')) {
                        additionalImages.push(url);
                    }
                });
                productData.additionalImages = additionalImages;
                
                productData.updatedAt = getServerTimestamp();
                
                if (!productData.createdAt) {
                    productData.createdAt = getServerTimestamp();
                }
                
                const saveBtn = elements.addProductForm.querySelector('.save-btn');
                if (saveBtn.dataset.productId) {
                    await db.collection('products').doc(saveBtn.dataset.productId).update(productData);
                    showNotification('✅ تم تحديث المنتج بنجاح');
                } else {
                    await db.collection('products').add(productData);
                    showNotification('✅ تم إضافة المنتج بنجاح');
                }
                
                await loadProducts();
                clearForm();
                
            } catch (error) {
                console.error('❌ خطأ في حفظ المنتج:', error);
                alert(`❌ خطأ في حفظ المنتج: ${error.code ? (error.code + ' - ') : ''}${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }

async function deleteProduct(productId) {
            if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
                return;
            }
            
            try {
                if (!window.firebaseInitialized) {
                    throw new Error("Firebase غير متصل");
                }
                
                const db = getDbSafe();
                if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                showFirebaseLoading(true);
                await db.collection('products').doc(productId).delete();
                showNotification('✅ تم حذف المنتج بنجاح');
                await loadProducts();
                
            } catch (error) {
                console.error('❌ خطأ في حذف المنتج:', error);
                alert(`❌ خطأ في حذف المنتج: ${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }