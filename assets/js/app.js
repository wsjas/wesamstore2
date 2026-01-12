// عناصر DOM
        const elements = {
            firebaseLoading: document.getElementById('firebaseLoading'),
            firebaseErrorBanner: document.getElementById('firebaseErrorBanner'),
            errorMessage: document.getElementById('errorMessage'),
            connectionStatus: document.getElementById('connectionStatus'),
            categoriesGrid: document.getElementById('categoriesGrid'),
            productsGrid: document.getElementById('productsGrid'),
            searchInput: document.getElementById('searchInput'),
            sortOptions: document.getElementById('sortOptions'),
            loading: document.getElementById('loading'),
            noProducts: document.getElementById('noProducts'),
            cartIcon: document.getElementById('cartIcon'),
            cartCount: document.getElementById('cartCount'),
            mCartBtn: document.getElementById('mCartBtn'),
            mCartCount: document.getElementById('mCartCount'),
            cartModal: document.getElementById('cartModal'),
            closeCart: document.getElementById('closeCart'),
            cartItems: document.getElementById('cartItems'),
            customerName: document.getElementById('customerName'),
            customerPhone: document.getElementById('customerPhone'),
            customerAddress: document.getElementById('customerAddress'),
            deliveryAddress: document.getElementById('deliveryAddress'),
            pickupOption: document.getElementById('pickupOption'),
            deliveryOption: document.getElementById('deliveryOption'),
            subtotalPrice: document.getElementById('subtotalPrice'),
            shippingFee: document.getElementById('shippingFee'),
            totalPrice: document.getElementById('totalPrice'),
            whatsappOrderBtn: document.getElementById('whatsappOrderBtn'),
            emailOrderBtn: document.getElementById('emailOrderBtn'),
            overlay: document.getElementById('overlay'),

            // Service Request (New)
            serviceHome: document.getElementById('serviceHome'),
            navServiceBtn: document.getElementById('navServiceBtn'),
            navShopBtn: document.getElementById('navShopBtn'),
            navWhatsApp: document.getElementById('navWhatsApp'),
            navEmail: document.getElementById('navEmail'),
            openServiceRequestBtn: document.getElementById('openServiceRequestBtn'),
            scrollToShopBtn: document.getElementById('scrollToShopBtn'),
            serviceRequestModal: document.getElementById('serviceRequestModal'),
            closeServiceRequestModal: document.getElementById('closeServiceRequestModal'),
            serviceRequestForm: document.getElementById('serviceRequestForm'),
            srCustomerName: document.getElementById('srCustomerName'),
            srCustomerPhone: document.getElementById('srCustomerPhone'),
            srDeviceType: document.getElementById('srDeviceType'),
            srDeviceSize: document.getElementById('srDeviceSize'),
            srFaultDesc: document.getElementById('srFaultDesc'),
            srFaultImage: document.getElementById('srFaultImage'),
            srUploadImageBtn: document.getElementById('srUploadImageBtn'),
            srClearImageBtn: document.getElementById('srClearImageBtn'),
            srUploadStatus: document.getElementById('srUploadStatus'),
            srImageLink: document.getElementById('srImageLink'),
            srGetLocationBtn: document.getElementById('srGetLocationBtn'),
            srClearLocationBtn: document.getElementById('srClearLocationBtn'),
            srLocationLink: document.getElementById('srLocationLink'),
            srAddressText: document.getElementById('srAddressText'),
            srEmailBtn: document.getElementById('srEmailBtn'),

            // Service Requests Admin (New)
            refreshServiceRequestsBtn: document.getElementById('refreshServiceRequestsBtn'),
            serviceRequestsTableBody: document.getElementById('serviceRequestsTableBody'),
            adminLoginBtn: document.getElementById('adminLoginBtn'),
            loginModal: document.getElementById('loginModal'),
            closeLoginModal: document.getElementById('closeLoginModal'),
            adminPassword: document.getElementById('adminPassword'),
            loginBtn: document.getElementById('loginBtn'),
            loginError: document.getElementById('loginError'),
            adminPanel: document.getElementById('adminPanel'),
            adminLogoutBtn: document.getElementById('adminLogoutBtn'),
            adminTabs: document.querySelectorAll('.admin-tab'),
            adminSections: document.querySelectorAll('.admin-section'),
            addProductForm: document.getElementById('addProductForm'),
            productsTableBody: document.getElementById('productsTableBody'),
            productImageUrl: document.getElementById('productImageUrl'),
            productDescription: document.getElementById('productDescription'),
            productVideoUrl: document.getElementById('productVideoUrl'),
            additionalImagesContainer: document.getElementById('additionalImagesContainer'),
            addImageBtn: document.getElementById('addImageBtn'),
            imagePreviewContainer: document.getElementById('imagePreviewContainer'),
            galleryModal: document.getElementById('galleryModal'),
            closeGalleryModal: document.getElementById('closeGalleryModal'),
            galleryProductName: document.getElementById('galleryProductName'),
            galleryMainImage: document.getElementById('galleryMainImage'),
            galleryThumbnails: document.getElementById('galleryThumbnails'),
            galleryProductDetails: document.getElementById('galleryProductDetails'),
            socialLinks: document.getElementById('socialLinks'),
            footerSocialLinks: document.getElementById('footerSocialLinks'),
            storeSettingsForm: document.getElementById('storeSettingsForm'),
            whatsappLink: document.getElementById('whatsappLink'),
            facebookLink: document.getElementById('facebookLink'),
            googleMapsLink: document.getElementById('googleMapsLink'),
            youtubeLink: document.getElementById('youtubeLink'),
            storeEmailSettings: document.getElementById('storeEmailSettings'),
            saveSettingsBtn: document.getElementById('saveSettingsBtn'),
            openAdminAccess: document.getElementById('openAdminAccess'),
            adminAccessModal: document.getElementById('adminAccessModal'),
            closeAdminAccess: document.getElementById('closeAdminAccess'),
            accessShowBtn: document.getElementById('accessShowBtn'),
            accessHideBtn: document.getElementById('accessHideBtn'),
            accessDirectLoginBtn: document.getElementById('accessDirectLoginBtn'),
            storeName: document.getElementById('storeName'),
            wesamLogoText: document.getElementById('wesamLogoText'),
            storeSlogan: document.getElementById('storeSlogan'),
            phoneNumber: document.getElementById('phoneNumber'),
            storeAddress: document.getElementById('storeAddress'),
            storeTagline: document.getElementById('storeTagline'),
            specializationText: document.getElementById('specializationText'),
            footerAbout: document.getElementById('footerAbout'),
            storeEmail: document.getElementById('storeEmail'),
            workingHours: document.getElementById('workingHours'),
            servicesList: document.getElementById('servicesList'),
            savePageContentBtn: document.getElementById('savePageContentBtn'),
            footerAboutText: document.getElementById('footerAboutText'),
            footerAddress: document.getElementById('footerAddress'),
            footerPhone: document.getElementById('footerPhone'),
            footerHours: document.getElementById('footerHours'),
            footerEmail: document.getElementById('footerEmail'),
            footerServices: document.getElementById('footerServices'),
            productOrderList: document.getElementById('productOrderList'),
            saveProductOrderBtn: document.getElementById('saveProductOrderBtn'),
            categoryOrderList: document.getElementById('categoryOrderList'),
            saveCategoryOrderBtn: document.getElementById('saveCategoryOrderBtn'),
            productCategory: document.getElementById('productCategory'),
            wesamLogo: document.getElementById('wesamLogo'),
            addCategoryForm: document.getElementById('addCategoryForm'),
            newCategoryName: document.getElementById('newCategoryName'),
            newCategoryIcon: document.getElementById('newCategoryIcon'),
            categoriesList: document.getElementById('categoriesList')
        };

window.elements = elements;


        // حالة التطبيق
        const state = {
            currentCategory: "all",
            cart: JSON.parse(localStorage.getItem('wassam_cart')) || [],
            products: [],
            filteredProducts: [],
            isAdmin: false,
            adminButtonVisible: false,
            isFirebaseConnected: false,
            shippingMethod: 'pickup',
            currentGalleryProduct: null,
            storeSettings: JSON.parse(localStorage.getItem('wassam_settings')) || {
                whatsappLink: 'https://wa.me/962790781206',
                storeEmail: 'wesamelectronics@gmail.com',
                facebookLink: '',
                googleMapsLink: '',
                youtubeLink: ''
            },
            pageContent: JSON.parse(localStorage.getItem('wassam_page_content')) || {
                storeName: 'وسام للالكترونيات',
                wesamLogoText: 'wesam',
                storeSlogan: 'متخصصون في أجهزة TV-LCD-LED والإلكترونيات',
                phoneNumber: '0790781206',
                storeAddress: 'عمان - شفابدران',
                storeTagline: 'أفضل المنتجات الإلكترونية بأفضل الأسعار - جودة واستبدال فوري',
                specializationText: 'TV - LCD - LED - إلكترونيات',
                footerAbout: 'متجر وسام للإلكترونيات هو الوجهة المفضلة في عمان لشراء جميع المنتجات الإلكترونية والاكسسوارات ذات الجودة العالية. نقدم أفضل الأسعار مع استبدال فوري.',
                storeEmail: 'wesamelectronics@gmail.com',
                workingHours: '9:00 ص - 10:00 م',
                servicesList: [
                    'توصيل سريع لجميع مناطق عمان',
                    'دفع عند الاستلام',
                    'استبدال فوري في حالة وجود عيب',
                    'أسعار تنافسية وجودة عالية'
                ]
            },
            siteSettings: JSON.parse(localStorage.getItem('wassam_site_settings')) || {
                productOrder: [],
                categoryOrder: []
            },
            draggedProduct: null,
            draggedCategory: null,
            categories: [
                { id: "all", name: "المنتجات المختارة والأفضل", icon: "fas fa-star" },
                { id: "سماعات", name: "سماعات", icon: "fas fa-headphones" },
                { id: "ريموتات", name: "ريموتات", icon: "fas fa-tv" },
                { id: "رسيفرات", name: "رسيفرات", icon: "fas fa-satellite-dish" },
                { id: "شواحن وأسلاك", name: "شواحن وأسلاك", icon: "fas fa-charging-station" },
                { id: "إكسسوارات", name: "إكسسوارات", icon: "fas fa-microchip" }
            ]
        };

window.state = state;


        // ========== وظائف المساعدة ==========

        function showFirebaseLoading(show) {
            elements.firebaseLoading.style.display = show ? 'flex' : 'none';
        }

        function showFirebaseError(show, message = '') {
            if (show) {
                elements.errorMessage.textContent = message || 'فشل الاتصال بقاعدة البيانات';
                elements.firebaseErrorBanner.classList.add('show');
            } else {
                elements.firebaseErrorBanner.classList.remove('show');
            }
        }

        window.retryFirebaseConnection = async function() {
            showFirebaseError(false);
            showConnectionMessage('info', 'جاري إعادة الاتصال...');
            
            try {
                const connection = await window.testFirebaseConnection();
                
                if (connection.success) {
                    await loadProducts();
                    showConnectionMessage('success', 'تمت إعادة الاتصال بنجاح');
                } else {
                    showFirebaseError(true, 'فشل إعادة الاتصال. تحقق من اتصال الإنترنت.');
                }
            } catch (error) {
                showFirebaseError(true, 'خطأ في إعادة الاتصال: ' + error.message);
            }
        };

        // [moved to separate file] showNotification


        // ========== إدارة إعدادات الموقع ==========

        async // [moved to separate file] loadSiteSettings


        // ========== إدارة ترتيب المنتجات والتصنيفات ==========

        async // [moved to separate file] loadProductOrder


        function displayProductOrderList() {
            elements.productOrderList.innerHTML = '';
            
            const orderedProducts = [...state.products].sort((a, b) => {
                const indexA = state.siteSettings.productOrder.indexOf(a.id);
                const indexB = state.siteSettings.productOrder.indexOf(b.id);
                return indexA - indexB;
            });
            
            orderedProducts.forEach(product => {
                const orderItem = document.createElement('div');
                orderItem.className = 'product-order-item';
                orderItem.draggable = true;
                orderItem.dataset.id = product.id;
                
                orderItem.innerHTML = `
                    <i class="fas fa-grip-vertical"></i>
                    <img src="${product.image}" alt="${product.name}" class="product-order-item-image" 
                         onerror="this.src='https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'">
                    <div class="product-order-item-details">
                        <div class="product-order-item-name">${product.name}</div>
                        <div class="product-order-item-category">${product.category}</div>
                    </div>
                    <div class="product-order-item-price">${product.sell} دينار</div>
                `;
                
                orderItem.addEventListener('dragstart', handleProductDragStart);
                orderItem.addEventListener('dragover', handleProductDragOver);
                orderItem.addEventListener('drop', handleProductDrop);
                orderItem.addEventListener('dragend', handleProductDragEnd);
                
                elements.productOrderList.appendChild(orderItem);
            });
        }

        function displayCategoryOrderList() {
            elements.categoryOrderList.innerHTML = '';
            
            const orderedCategories = [...state.categories].sort((a, b) => {
                const indexA = state.siteSettings.categoryOrder.indexOf(a.id);
                const indexB = state.siteSettings.categoryOrder.indexOf(b.id);
                return indexA - indexB;
            });
            
            orderedCategories.forEach(category => {
                const categoryCount = category.id === "all" 
                    ? state.products.length 
                    : state.products.filter(p => p.category === category.id).length;
                
                const orderItem = document.createElement('div');
                orderItem.className = 'category-order-item';
                orderItem.draggable = true;
                orderItem.dataset.id = category.id;
                
                orderItem.innerHTML = `
                    <i class="fas fa-grip-vertical"></i>
                    <i class="${category.icon}"></i>
                    <div class="category-order-item-name">${category.name}</div>
                    <div class="category-order-item-count">${categoryCount}</div>
                `;
                
                orderItem.addEventListener('dragstart', handleCategoryDragStart);
                orderItem.addEventListener('dragover', handleCategoryDragOver);
                orderItem.addEventListener('drop', handleCategoryDrop);
                orderItem.addEventListener('dragend', handleCategoryDragEnd);
                
                elements.categoryOrderList.appendChild(orderItem);
            });
        }

        function displayCategoriesList() {
            elements.categoriesList.innerHTML = '';
            
            state.categories.forEach(category => {
                if (category.id === "all") return;
                
                const categoryCount = state.products.filter(p => p.category === category.id).length;
                
                const listItem = document.createElement('div');
                listItem.className = 'category-list-item';
                listItem.innerHTML = `
                    <div>
                        <i class="${category.icon}"></i>
                        <strong>${category.name}</strong>
                        <span style="color: #666; font-size: 0.9rem; margin-right: 10px;">(${categoryCount} منتج)</span>
                    </div>
                    <button class="delete-btn delete-category-btn" data-category="${category.id}">
                        <i class="fas fa-trash"></i> حذف
                    </button>
                `;
                
                elements.categoriesList.appendChild(listItem);
            });
            
            // إضافة أحداث الحذف
            elements.categoriesList.querySelectorAll('.delete-category-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const categoryId = this.dataset.category;
                    deleteCategory(categoryId);
                });
            });
        }

        async function deleteCategory(categoryId) {
            if (!confirm(`هل أنت متأكد من حذف التصنيف "${categoryId}"؟ سيتم حذف جميع المنتجات في هذا التصنيف.`)) {
                return;
            }
            
            try {
                // حذف جميع المنتجات في هذا التصنيف
                const productsToDelete = state.products.filter(p => p.category === categoryId);
                for (const product of productsToDelete) {
                    await deleteProduct(product.id);
                }
                
                // إزالة التصنيف من القائمة
                state.categories = state.categories.filter(c => c.id !== categoryId);
                
                // تحديث واجهة المستخدم
                updateCategoryDropdown();
                displayCategoriesList();
                updateUI();
                
                showNotification(`✅ تم حذف التصنيف ${categoryId} وجميع منتجاته`);
                
            } catch (error) {
                console.error('❌ خطأ في حذف التصنيف:', error);
                alert(`❌ خطأ في حذف التصنيف: ${error.message}`);
            }
        }

        // أحداث السحب والإفلات للمنتجات
        function handleProductDragStart(e) {
            state.draggedProduct = this;
            this.classList.add('dragging');
        }

        function handleProductDragOver(e) {
            e.preventDefault();
        }

        function handleProductDrop(e) {
            e.preventDefault();
            if (state.draggedProduct !== this) {
                const allItems = Array.from(elements.productOrderList.children);
                const draggedIndex = allItems.indexOf(state.draggedProduct);
                const targetIndex = allItems.indexOf(this);
                
                if (draggedIndex < targetIndex) {
                    this.parentNode.insertBefore(state.draggedProduct, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(state.draggedProduct, this);
                }
            }
        }

        function handleProductDragEnd(e) {
            this.classList.remove('dragging');
            
            const newOrder = Array.from(elements.productOrderList.children).map(item => item.dataset.id);
            state.siteSettings.productOrder = newOrder;
        }

        // أحداث السحب والإفلات للتصنيفات
        function handleCategoryDragStart(e) {
            state.draggedCategory = this;
            this.classList.add('dragging');
        }

        function handleCategoryDragOver(e) {
            e.preventDefault();
        }

        function handleCategoryDrop(e) {
            e.preventDefault();
            if (state.draggedCategory !== this) {
                const allItems = Array.from(elements.categoryOrderList.children);
                const draggedIndex = allItems.indexOf(state.draggedCategory);
                const targetIndex = allItems.indexOf(this);
                
                if (draggedIndex < targetIndex) {
                    this.parentNode.insertBefore(state.draggedCategory, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(state.draggedCategory, this);
                }
            }
        }

        function handleCategoryDragEnd(e) {
            this.classList.remove('dragging');
            
            const newOrder = Array.from(elements.categoryOrderList.children).map(item => item.dataset.id);
            state.siteSettings.categoryOrder = newOrder;
        }

        async function saveProductOrder() {
            try {
                if (!window.firebaseInitialized) {
                    throw new Error("Firebase غير متصل");
                }
                
                const db = getDbSafe();
                if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                showFirebaseLoading(true);
                
                await db.collection('settings').doc('ordering').set({
                    productOrder: state.siteSettings.productOrder,
                    categoryOrder: state.siteSettings.categoryOrder,
                    lastUpdated: getServerTimestamp()
                }, { merge: true });
                
                showNotification('✅ تم حفظ ترتيب المنتجات');
                
            } catch (error) {
                console.error('❌ خطأ في حفظ ترتيب المنتجات:', error);
                alert(`❌ خطأ في حفظ الترتيب: ${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }

        async function saveCategoryOrder() {
            try {
                if (!window.firebaseInitialized) {
                    throw new Error("Firebase غير متصل");
                }
                
                const db = getDbSafe();
                if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                showFirebaseLoading(true);
                
                await db.collection('settings').doc('ordering').set({
                    categoryOrder: state.siteSettings.categoryOrder,
                    lastUpdated: getServerTimestamp()
                }, { merge: true });
                
                showNotification('✅ تم حفظ ترتيب التصنيفات');
                
                displayCategories();
                
            } catch (error) {
                console.error('❌ خطأ في حفظ ترتيب التصنيفات:', error);
                alert(`❌ خطأ في حفظ الترتيب: ${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }

        // ========== إضافة تصنيفات جديدة ==========

        async function addNewCategory(categoryName, icon) {
            try {
                // التحقق من عدم وجود التصنيف مسبقاً
                const existingCategory = state.categories.find(c => c.id === categoryName);
                if (existingCategory) {
                    alert('هذا التصنيف موجود مسبقاً');
                    return;
                }
                
                // إضافة التصنيف الجديد
                const newCategory = {
                    id: categoryName,
                    name: categoryName,
                    icon: icon
                };
                
                state.categories.push(newCategory);
                
                // إضافة التصنيف إلى قائمة الترتيب
                state.siteSettings.categoryOrder.push(categoryName);
                
                // حفظ في Firebase إذا كان متصلاً
                if (window.firebaseInitialized && window.db) {
                    const db = getDbSafe();
                    if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                    await db.collection('settings').doc('ordering').set({
                        categoryOrder: state.siteSettings.categoryOrder,
                        lastUpdated: getServerTimestamp()
                    }, { merge: true });
                }
                
                // تحديث واجهة المستخدم
                updateCategoryDropdown();
                displayCategoriesList();
                updateUI();
                
                // مسح الحقول
                elements.newCategoryName.value = '';
                elements.newCategoryIcon.value = 'fas fa-headphones';
                
                showNotification(`✅ تم إضافة التصنيف "${categoryName}" بنجاح`);
                
            } catch (error) {
                console.error('❌ خطأ في إضافة التصنيف:', error);
                alert(`❌ خطأ في إضافة التصنيف: ${error.message}`);
            }
        }

        // ========== إعدادات المتجر ==========

        async function loadStoreSettings() {
            elements.whatsappLink.value = state.storeSettings.whatsappLink || '';
            if (elements.storeEmailSettings) elements.storeEmailSettings.value = state.storeSettings.storeEmail || 'wesamelectronics@gmail.com';
            elements.facebookLink.value = state.storeSettings.facebookLink || '';
            elements.googleMapsLink.value = state.storeSettings.googleMapsLink || '';
            elements.youtubeLink.value = state.storeSettings.youtubeLink || '';
            updateContactLinksUI();
            
            elements.storeName.value = state.pageContent.storeName;
            elements.wesamLogoText.value = state.pageContent.wesamLogoText;
            elements.storeSlogan.value = state.pageContent.storeSlogan;
            elements.phoneNumber.value = state.pageContent.phoneNumber;
            elements.storeAddress.value = state.pageContent.storeAddress;
            elements.storeTagline.value = state.pageContent.storeTagline;
            elements.specializationText.value = state.pageContent.specializationText;
            elements.footerAbout.value = state.pageContent.footerAbout;
            elements.storeEmail.value = state.pageContent.storeEmail;
            elements.workingHours.value = state.pageContent.workingHours;
            elements.servicesList.value = Array.isArray(state.pageContent.servicesList) 
                ? state.pageContent.servicesList.join('\n') 
                : state.pageContent.servicesList;
            
            updatePageContentUI();
            updateSocialLinks();
        }

        async function saveStoreSettings() {
            try {
                const settings = {
                    whatsappLink: elements.whatsappLink.value.trim(),
                    facebookLink: elements.facebookLink.value.trim(),
                    googleMapsLink: elements.googleMapsLink.value.trim(),
                    youtubeLink: elements.youtubeLink.value.trim(),
                    storeEmail: (elements.storeEmailSettings ? elements.storeEmailSettings.value.trim() : '')
                };
                
                state.storeSettings = settings;
                
                showFirebaseLoading(true);
                
                if (window.firebaseInitialized && window.db) {
                    const db = getDbSafe();
                    if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                    await db.collection('settings').doc('store').set({
                        ...settings,
                        updatedAt: getServerTimestamp()
                    }, { merge: true });
                }
                
                localStorage.setItem('wassam_settings', JSON.stringify(settings));
                updateSocialLinks();
                showNotification('✅ تم حفظ إعدادات المتجر');
                
            } catch (error) {
                console.error('❌ خطأ في حفظ إعدادات المتجر:', error);
                alert(`❌ خطأ في حفظ الإعدادات: ${error.code ? (error.code + ' - ') : ''}${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }

        async function savePageContent() {
            try {
                const pageContent = {
                    storeName: elements.storeName.value.trim(),
                    wesamLogoText: elements.wesamLogoText.value.trim(),
                    storeSlogan: elements.storeSlogan.value.trim(),
                    phoneNumber: elements.phoneNumber.value.trim(),
                    storeAddress: elements.storeAddress.value.trim(),
                    storeTagline: elements.storeTagline.value.trim(),
                    specializationText: elements.specializationText.value.trim(),
                    footerAbout: elements.footerAbout.value.trim(),
                    storeEmail: elements.storeEmail.value.trim(),
                    workingHours: elements.workingHours.value.trim(),
                    servicesList: elements.servicesList.value.trim().split('\n').filter(line => line.trim() !== ''),
                    updatedAt: getServerTimestamp()
                };
                
                state.pageContent = pageContent;
                
                showFirebaseLoading(true);
                
                if (window.firebaseInitialized && window.db) {
                    const db = getDbSafe();
                    if (!db) throw new Error('قاعدة البيانات غير جاهزة');
                    await db.collection('settings').doc('page_content').set(pageContent, { merge: true });
                }
                
                localStorage.setItem('wassam_page_content', JSON.stringify(pageContent));
                updatePageContentUI();
                showNotification('✅ تم حفظ محتوى الصفحة');
                
            } catch (error) {
                console.error('❌ خطأ في حفظ محتوى الصفحة:', error);
                alert(`❌ خطأ في حفظ المحتوى: ${error.code ? (error.code + ' - ') : ''}${error.message}`);
            } finally {
                showFirebaseLoading(false);
            }
        }

        function updatePageContentUI() {
            document.querySelector('.logo-subtext').textContent = state.pageContent.storeName;
            elements.wesamLogo.textContent = state.pageContent.wesamLogoText;
            document.querySelector('.logo-slogan').textContent = state.pageContent.storeSlogan;
            document.querySelector('.phone-number').innerHTML = `<i class="fas fa-phone"></i> ${state.pageContent.phoneNumber}`;
            
            const addressElement = document.querySelector('.contact-info div:nth-child(2)');
            addressElement.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${state.pageContent.storeAddress}`;
            
            document.querySelector('.tagline').textContent = state.pageContent.storeTagline;
            document.querySelector('.specialization').innerHTML = `<i class="fas fa-tv"></i> ${state.pageContent.specializationText}`;
            
            elements.footerAboutText.textContent = state.pageContent.footerAbout;
            elements.footerAddress.textContent = state.pageContent.storeAddress;
            elements.footerPhone.textContent = state.pageContent.phoneNumber;
            elements.footerHours.textContent = state.pageContent.workingHours;
            elements.footerEmail.textContent = state.pageContent.storeEmail;
            
            elements.footerServices.innerHTML = '';
            if (Array.isArray(state.pageContent.servicesList)) {
                state.pageContent.servicesList.forEach(service => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-chevron-left"></i> ${service}`;
                    elements.footerServices.appendChild(li);
                });
            }
        }

        
        // Normalize external links to ensure they open correctly (adds https:// when missing)
        function normalizeUrl(url) {
            try {
                if (!url) return '';
                url = String(url).trim();
                if (!url) return '';
                // allow special schemes
                if (/^(https?:\/\/|mailto:|tel:|whatsapp:)/i.test(url)) return url;
                // allow wa.me direct
                if (/^(wa\.me\/)/i.test(url)) return 'https://' + url;
                // if starts with // treat as https
                if (/^\/\//.test(url)) return 'https:' + url;
                // default
                return 'https://' + url;
            } catch (e) {
                return url || '';
            }
        }

function updateSocialLinks() {
            elements.socialLinks.innerHTML = '';
            
            if (state.storeSettings.whatsappLink) {
                const whatsappLink = document.createElement('a');
                whatsappLink.href = normalizeUrl(state.storeSettings.whatsappLink);
                whatsappLink.target = '_blank';
                whatsappLink.className = 'social-link whatsapp';
                whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
                whatsappLink.title = 'تواصل معنا على واتساب';
                elements.socialLinks.appendChild(whatsappLink);
            }
            
            if (state.storeSettings.facebookLink) {
                const facebookLink = document.createElement('a');
                facebookLink.href = normalizeUrl(state.storeSettings.facebookLink);
                facebookLink.target = '_blank';
                facebookLink.className = 'social-link facebook';
                facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
                facebookLink.title = 'صفحتنا على الفيسبوك';
                elements.socialLinks.appendChild(facebookLink);
            }
            
            if (state.storeSettings.googleMapsLink) {
                const mapLink = document.createElement('a');
                mapLink.href = normalizeUrl(state.storeSettings.googleMapsLink);
                mapLink.target = '_blank';
                mapLink.className = 'social-link map';
                mapLink.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
                mapLink.title = 'موقعنا على خرائط جوجل';
                elements.socialLinks.appendChild(mapLink);
            }
            
            if (state.storeSettings.youtubeLink) {
                const youtubeLink = document.createElement('a');
                youtubeLink.href = normalizeUrl(state.storeSettings.youtubeLink);
                youtubeLink.target = '_blank';
                youtubeLink.className = 'social-link youtube';
                youtubeLink.innerHTML = '<i class="fab fa-youtube"></i>';
                youtubeLink.title = 'قناتنا على اليوتيوب';
                elements.socialLinks.appendChild(youtubeLink);
            }
            
            elements.footerSocialLinks.innerHTML = '';
            
            if (state.storeSettings.whatsappLink) {
                const footerWhatsapp = document.createElement('a');
                footerWhatsapp.href = state.storeSettings.whatsappLink;
                footerWhatsapp.target = '_blank';
                footerWhatsapp.className = 'footer-social-link';
                footerWhatsapp.innerHTML = '<i class="fab fa-whatsapp"></i>';
                footerWhatsapp.title = 'واتساب';
                elements.footerSocialLinks.appendChild(footerWhatsapp);
            }
            
            if (state.storeSettings.facebookLink) {
                const footerFacebook = document.createElement('a');
                footerFacebook.href = state.storeSettings.facebookLink;
                footerFacebook.target = '_blank';
                footerFacebook.className = 'footer-social-link';
                footerFacebook.innerHTML = '<i class="fab fa-facebook-f"></i>';
                footerFacebook.title = 'فيسبوك';
                elements.footerSocialLinks.appendChild(footerFacebook);
            }
            
            if (state.storeSettings.googleMapsLink) {
                const footerMap = document.createElement('a');
                footerMap.href = state.storeSettings.googleMapsLink;
                footerMap.target = '_blank';
                footerMap.className = 'footer-social-link';
                footerMap.innerHTML = '<i class="fas fa-map-marker-alt"></i>';
                footerMap.title = 'خرائط جوجل';
                elements.footerSocialLinks.appendChild(footerMap);
            }
            
            if (state.storeSettings.youtubeLink) {
                const footerYoutube = document.createElement('a');
                footerYoutube.href = state.storeSettings.youtubeLink;
                footerYoutube.target = '_blank';
                footerYoutube.className = 'footer-social-link';
                footerYoutube.innerHTML = '<i class="fab fa-youtube"></i>';
                footerYoutube.title = 'يوتيوب';
                elements.footerSocialLinks.appendChild(footerYoutube);
            }
            /* sync mobile quickstrip links */
            const mW = document.getElementById('mQSWhatsApp');
            const mF = document.getElementById('mQSFb');
            const mM = document.getElementById('mQSMaps');
            const mY = document.getElementById('mQSYt');
            const mE = document.getElementById('mQSEmail');

            if (mW) mW.href = normalizeUrl(state.storeSettings.whatsappLink) || 'https://wa.me/962790781206';
            if (mE) mE.href = (state.storeSettings.storeEmail ? ('mailto:' + String(state.storeSettings.storeEmail).trim()) : 'mailto:wesamelectronics@gmail.com');
            if (mF) mF.href = normalizeUrl(state.storeSettings.facebookLink) || 'https://facebook.com';
            if (mM) mM.href = normalizeUrl(state.storeSettings.googleMapsLink) || 'https://maps.google.com';
            if (mY) mY.href = normalizeUrl(state.storeSettings.youtubeLink) || 'https://youtube.com';


        }

        // ========== إدارة المنتجات ==========

        async function loadProducts() {
            try {
                elements.loading.style.display = 'flex';
                
                if (!window.firebaseInitialized) {
                    throw new Error("Firebase غير متصل. تحقق من اتصال الإنترنت والإعدادات.");
                }
                
                const db = window.db;
                if (!db) {
                    throw new Error("Firestore غير متوفر");
                }
                
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error("انتهت مهلة الاتصال")), 10000)
                );
                
                const queryPromise = db.collection('products').orderBy('createdAt', 'desc').get();
                
                const querySnapshot = await Promise.race([queryPromise, timeoutPromise]);
                
                const products = [];
                
                querySnapshot.forEach(doc => {
                    const product = doc.data();
                    product.id = doc.id;
                    if (!product.additionalImages) product.additionalImages = [];
                    if (!product.videoUrl) product.videoUrl = '';
                    products.push(product);
                });
                
                state.products = products;
                state.filteredProducts = [...products];
                
                console.log(`✅ تم تحميل ${products.length} منتج من قاعدة البيانات`);
                showConnectionMessage('success', `تم تحميل ${products.length} منتج`);
                
                state.isFirebaseConnected = true;
                showFirebaseError(false);
                
            } catch (error) {
                console.error('❌ خطأ في تحميل المنتجات:', error);
                
                if (state.products.length === 0) {
                    state.products = getSampleProducts();
                    state.filteredProducts = [...state.products];
                    console.log(`⚠️ استخدام ${state.products.length} منتج تجريبي`);
                    showConnectionMessage('warning', 'فشل الاتصال، استخدام بيانات تجريبية');
                }
                
                state.isFirebaseConnected = false;
                showFirebaseError(true, `فشل الاتصال: ${error.message}`);
                
            } finally {
                elements.loading.style.display = 'none';
                updateUI();
            }
        }

        function getSampleProducts() {
            return [
                {
                    id: '1',
                    name: 'سماعة بلوتوث لاسلكية',
                    category: 'سماعات',
                    sell: 25,
                    stock: 10,
                    description: 'سماعة بلوتوث عالية الجودة، بطارية تدوم 8 ساعات',
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    deliveryFee: 2,
                    videoUrl: '',
                    additionalImages: []
                },
                {
                    id: '2',
                    name: 'ريموت تلفزيون عالمي',
                    category: 'ريموتات',
                    sell: 15,
                    stock: 5,
                    description: 'ريموت يعمل مع معظم أنواع التلفزيونات',
                    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
                    deliveryFee: 2,
                    videoUrl: '',
                    additionalImages: []
                }
            ];
        }

        async // [moved to separate file] saveProduct


        async // [moved to separate file] deleteProduct


        function updateCategoryCounts() {
            state.categories.forEach(category => {
                category.count = category.id === "all" 
                    ? state.products.length 
                    : state.products.filter(p => p.category === category.id).length;
            });
        }

        function displayCategories() {
            elements.categoriesGrid.innerHTML = '';
            
            const orderedCategories = [...state.categories].sort((a, b) => {
                const indexA = state.siteSettings.categoryOrder.indexOf(a.id);
                const indexB = state.siteSettings.categoryOrder.indexOf(b.id);
                return indexA - indexB;
            });
            
            orderedCategories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = `category-card ${state.currentCategory === category.id ? 'active' : ''}`;
                categoryCard.dataset.category = category.id;
                
                categoryCard.innerHTML = `
                    <div class="category-icon">
                        <i class="${category.icon}"></i>
                    </div>
                    <div class="category-name">
                        ${category.name}
                        <div class="category-count">${category.count} منتج</div>
                    </div>
                `;
                
                categoryCard.addEventListener('click', () => {
                    state.currentCategory = category.id;
                    displayCategories();
                    filterProducts();
                });
                
                elements.categoriesGrid.appendChild(categoryCard);
            });
        }

        function truncateDescription(description, maxLength = 100) {
            if (!description) return '';
            if (description.length <= maxLength) return description;
            return description.substring(0, maxLength) + '...';
        }

        function displayProducts(products) {
            elements.productsGrid.innerHTML = '';
            
            if (products.length === 0) {
                elements.noProducts.style.display = 'block';
                return;
            }
            
            elements.noProducts.style.display = 'none';
            
            const orderedProducts = [...products].sort((a, b) => {
                const indexA = state.siteSettings.productOrder.indexOf(a.id);
                const indexB = state.siteSettings.productOrder.indexOf(b.id);
                
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                
                return indexA - indexB;
            });
            
            orderedProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                let stockClass = 'in-stock';
                let stockText = `متوفر (${product.stock})`;
                if (product.stock === 0) {
                    stockClass = 'out-of-stock';
                    stockText = 'غير متوفر';
                } else if (product.stock <= 2) {
                    stockClass = 'low-stock';
                    stockText = `كمية محدودة (${product.stock})`;
                }
                
                const hasAdditionalImages = product.additionalImages && product.additionalImages.length > 0;
                const allImages = [product.image, ...(product.additionalImages || [])].filter(img => img);
                const hasVideo = product.videoUrl && product.videoUrl.trim() !== '';
                
                productCard.innerHTML = `
                    <div class="product-image" data-product-id="${product.id}">
                        ${hasVideo ? `<button class="video-btn-card" data-video-url="${product.videoUrl}" onclick="if(event){event.stopPropagation();} openVideoPopup(this.dataset.videoUrl); return false;"><i class="fas fa-play"></i></button>` : ''}
                        <div class="product-category">${product.category}</div>
                        <img src="${product.image}" 
                             alt="${product.name}" 
                             onerror="this.src='https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'">
                        ${hasAdditionalImages ? 
                            `<div class="more-images-badge show">
                                <i class="fas fa-images"></i> ${allImages.length} صور
                            </div>` : ''
                        }
                    </div>
                    <div class="product-details">
                        <h3 class="product-name" data-product-id="${product.id}">${product.name}</h3>
                        ${product.description ? `
                            <div class="product-description" id="desc-${product.id}">
                                ${truncateDescription(product.description)}
                            </div>
                            ${product.description.length > 100 ? `
                                <button class="read-more" onclick="toggleDescription('${product.id}')">
                                    عرض المزيد
                                </button>
                            ` : ''}
                        ` : ''}
                        <div class="product-price">
                            <i class="fas fa-dollar-sign"></i>
                            ${product.sell} دينار
                        </div>
                        <div class="delivery-fee">
                            <i class="fas fa-truck"></i>
                            رسوم التوصيل: ${product.deliveryFee || 2} دينار
                        </div>
                        <div class="product-stock ${stockClass}">
                            <i class="fas ${product.stock > 0 ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                            ${stockText}
                        </div>
                        <div class="product-actions">
                            <button class="details-btn" title="عرض تفاصيل المنتج" onclick="openGallery('${product.id}')">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="buy-btn" ${product.stock === 0 ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i>
                                ${product.stock === 0 ? 'غير متوفر' : 'أضف إلى السلة'}
                            </button>
                        </div>
                    </div>
                `;
                
                const buyBtn = productCard.querySelector('.buy-btn');
                if (buyBtn && product.stock > 0) {
                    buyBtn.addEventListener('click', () => addToCart(product));
                }
                
                const productImage = productCard.querySelector('.product-image');
                productImage.addEventListener('click', () => openGallery(product.id));

                const videoBtn = productCard.querySelector('.video-btn-card');
                if (videoBtn) {
                    videoBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openVideoPopup(videoBtn.dataset.videoUrl);
                    });
                }

                
                const productName = productCard.querySelector('.product-name');
                productName.addEventListener('click', () => openGallery(product.id));
                
                elements.productsGrid.appendChild(productCard);
            });
        }

        // وظيفة لعرض/إخفاء الوصف
        

        // فتح فيديو المنتج في منصة خارجية (YouTube/Facebook/TikTok/Instagram)
        

        window.toggleDescription = function(productId) {
            const descElement = document.getElementById(`desc-${productId}`);
            const button = descElement.nextElementSibling;
            
            if (descElement.classList.contains('expanded')) {
                descElement.classList.remove('expanded');
                const product = state.products.find(p => p.id === productId);
                descElement.textContent = truncateDescription(product ? product.description : '');
                button.textContent = 'عرض المزيد';
            } else {
                const product = state.products.find(p => p.id === productId);
                descElement.classList.add('expanded');
                descElement.textContent = product ? product.description : '';
                button.textContent = 'عرض أقل';
            }
        };

        // وظيفة فتح معرض الصور
        window.openGallery = function(productId) {
            const product = state.products.find(p => p.id === productId);
            if (!product) return;
            
            state.currentGalleryProduct = product;
            
            elements.galleryProductName.textContent = product.name;
            elements.galleryMainImage.src = product.image;
            
            elements.galleryThumbnails.innerHTML = '';
            const allImages = [product.image, ...(product.additionalImages || [])].filter(img => img);
            
            allImages.forEach((imageUrl, index) => {
                const thumbnail = document.createElement('div');
                thumbnail.className = `gallery-thumbnail ${index === 0 ? 'active' : ''}`;
                thumbnail.innerHTML = `<img src="${imageUrl}" alt="صورة ${index + 1}">`;
                
                thumbnail.addEventListener('click', () => {
                    elements.galleryMainImage.src = imageUrl;
                    document.querySelectorAll('.gallery-thumbnail').forEach(t => t.classList.remove('active'));
                    thumbnail.classList.add('active');
                });
                
                elements.galleryThumbnails.appendChild(thumbnail);
            });
            
            let detailsHTML = `
                <h4>تفاصيل المنتج</h4>
                <p><strong>السعر:</strong> ${product.sell} دينار</p>
                <p><strong>رسوم التوصيل:</strong> ${product.deliveryFee || 2} دينار</p>
                <p><strong>المخزون:</strong> ${product.stock > 0 ? `متوفر (${product.stock})` : 'غير متوفر'}</p>
                <p><strong>الفئة:</strong> ${product.category}</p>
            `;
            
            if (product.videoUrl) {
                detailsHTML += `
                    <button class="video-btn" onclick="openVideoPopup('${product.videoUrl}');">
                        <i class="fab fa-youtube"></i> مشاهدة فيديو المنتج
                    </button>
                `;
            }
            
            if (product.description) {
                detailsHTML += `<div style="margin-top: 15px;"><strong>الوصف والمواصفات:</strong><p>${product.description}</p></div>`;
            }
            
            elements.galleryProductDetails.innerHTML = detailsHTML;
            
            elements.galleryModal.style.display = 'block';
            elements.overlay.classList.add('active');
        };

        function updateProductsSectionTitle() {
            const titleEl = document.getElementById('productsSectionTitle');
            if (!titleEl) return;
            const cat = state.categories.find(c => c.id === state.currentCategory);
            if (state.currentCategory === 'all') {
                titleEl.innerHTML = '<i class="fas fa-star"></i> المنتجات المختارة والأفضل';
            } else {
                titleEl.innerHTML = `<i class="fas fa-layer-group"></i> منتجات تصنيف: ${cat ? cat.name : state.currentCategory}`;
            }
        }

        function filterProducts() {
            const searchTerm = elements.searchInput.value.toLowerCase();
            const sortOption = elements.sortOptions.value;
            
            let filtered = state.products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                     (product.description && product.description.toLowerCase().includes(searchTerm));
                const matchesCategory = state.currentCategory === 'all' ? !!product.featured : (product.category === state.currentCategory);
                return matchesSearch && matchesCategory;
            });
            
            filtered.sort((a, b) => {
                const indexA = state.siteSettings.productOrder.indexOf(a.id);
                const indexB = state.siteSettings.productOrder.indexOf(b.id);
                
                if (indexA === -1 && indexB === -1) return 0;
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                
                return indexA - indexB;
            });
            
            filtered.sort((a, b) => {
                switch (sortOption) {
                    case 'price-low': return a.sell - b.sell;
                    case 'price-high': return b.sell - a.sell;
                    case 'name': return a.name.localeCompare(b.name, 'ar');
                    case 'stock': return b.stock - a.stock;
                    default: return 0;
                }
            });
            
            state.filteredProducts = filtered;
            displayProducts(filtered);
        }

        // ========== إدارة السلة ==========
        // مزامنة السلة من التخزين المحلي (مهم خصوصاً على الموبايل بعد إعادة تحميل الصفحة)
        function syncCartFromStorage() {
            try {
                const raw = localStorage.getItem('wassam_cart');
                const parsed = raw ? JSON.parse(raw) : [];
                state.cart = Array.isArray(parsed) ? parsed : [];
            } catch (e) {
                state.cart = [];
            }
        }

        function openCartModal() {
            // ✅ فتح السلة بشكل آمن (حتى لو تعطّل initApp أو فشل Firebase)
            syncCartFromStorage();

            const cartModal = (elements && elements.cartModal) ? elements.cartModal : document.getElementById('cartModal');
            const overlayEl = (elements && elements.overlay) ? elements.overlay : document.getElementById('overlay');

            if (!cartModal) {
                console.error('❌ Cart modal not found (#cartModal)');
                return;
            }

            // تحديث المراجع
            if (typeof elements === 'object' && elements) {
                elements.cartModal = cartModal;
                elements.overlay = overlayEl;
            }

            // محاولة تحديث السلة (بدون كسر الفتح لو حصل خطأ)
            try { updateCart(); } catch (e) { console.warn('⚠️ updateCart failed:', e); }

            cartModal.style.display = 'block';
            cartModal.classList.add('show');
            overlayEl && overlayEl.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal() {
            const cartModal = (elements && elements.cartModal) ? elements.cartModal : document.getElementById('cartModal');
            const overlayEl = (elements && elements.overlay) ? elements.overlay : document.getElementById('overlay');

            if (cartModal) {
                cartModal.style.display = 'none';
                cartModal.classList.remove('show');
            }
            overlayEl && overlayEl.classList.remove('active');
            document.body.style.overflow = '';
        }

        // ✅ ربط فتح السلة بشكل شامل (يعمل حتى لو تعطل initApp أو لم تُجهَّز events)
        function bindCartOpenAlways() {
            const tryBind = (el) => {
                if (!el || el.__cartBound) return;
                el.__cartBound = true;

                const handler = (ev) => {
                    try {
                        // منع التمرير/النقر الافتراضي على الموبايل
                        if (ev && typeof ev.preventDefault === 'function') ev.preventDefault();
                        if (ev && typeof ev.stopPropagation === 'function') ev.stopPropagation();
                    } catch (e) {}
                    openCartModal();
                };

                el.addEventListener('click', handler, { passive: false });
                el.addEventListener('touchend', handler, { passive: false });
                el.addEventListener('pointerup', handler, { passive: false });
            };

            // ربط الأزرار الأساسية
            tryBind(document.getElementById('mCartBtn'));
            tryBind(document.getElementById('cartIcon'));

            // Delegation: أيقونة سلة إضافية (إن وُجدت) داخل الهيدر أو الشريط العلوي
            if (!document.__cartDelegationBound) {
                document.__cartDelegationBound = true;

                const delegated = (ev) => {
                    const t = ev && ev.target ? ev.target.closest('#mCartBtn, #cartIcon, [data-open-cart], .m-cart-btn, .cart-icon, i.fa-shopping-cart, i.fa-cart-shopping') : null;
                    if (!t) return;
                    try {
                        if (typeof ev.preventDefault === 'function') ev.preventDefault();
                        if (typeof ev.stopPropagation === 'function') ev.stopPropagation();
                    } catch (e) {}
                    openCartModal();
                };

                document.addEventListener('click', delegated, { passive: false });
                document.addEventListener('touchend', delegated, { passive: false });
                document.addEventListener('pointerup', delegated, { passive: false });
            }
        }

        // نفّذ الربط مبكرًا (بدون الاعتماد على initApp)
        try { bindCartOpenAlways(); } catch (e) { console.warn(e); }
        document.addEventListener('DOMContentLoaded', () => {
            try { bindCartOpenAlways(); } catch (e) { console.warn(e); }
        });




        function addToCart(product) {
            const existingItem = state.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                if (existingItem.quantity < product.stock) {
                    existingItem.quantity += 1;
                } else {
                    alert(`عفواً، لا يمكن إضافة المزيد من هذا المنتج. الكمية المتاحة: ${product.stock}`);
                    return;
                }
            } else {
                state.cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            showNotification(`✅ تم إضافة ${product.name} إلى السلة`);
        }

        function updateCart() {
            localStorage.setItem('wassam_cart', JSON.stringify(state.cart));
            const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
            elements.cartCount.textContent = totalItems;
            if (elements.mCartCount) elements.mCartCount.textContent = totalItems;
            updateCartDisplay();
            updateOrderSummary();
        }

        function updateCartDisplay() {
            elements.cartItems.innerHTML = '';
            
            if (state.cart.length === 0) {
                elements.cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">سلة التسوق فارغة</p>';
                return;
            }
            
            state.cart.forEach(item => {
                const itemTotal = item.sell * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image || 'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}" 
                             alt="${item.name}" 
                             onerror="this.src='https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.sell} دينار</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}" title="إزالة من السلة">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                
                elements.cartItems.appendChild(cartItem);
            });
            
            // إضافة مستمعي الأحداث للأزرار الجديدة
            elements.cartItems.querySelectorAll('.decrease-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    updateCartItemQuantity(id, -1);
                });
            });
            
            elements.cartItems.querySelectorAll('.increase-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.closest('button').dataset.id;
                    updateCartItemQuantity(id, 1);
                });
            });
            
            elements.cartItems.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.closest('button').dataset.id;
                    removeFromCart(id);
                });
            });
        }

        function updateCartItemQuantity(id, change) {
            const item = state.cart.find(item => item.id === id);
            if (!item) return;
            
            const product = state.products.find(p => p.id === id);
            if (!product) return;
            
            const newQuantity = item.quantity + change;
            
            if (newQuantity < 1) {
                removeFromCart(id);
            } else if (newQuantity > product.stock) {
                alert(`عفواً، لا يمكن إضافة المزيد من هذا المنتج. الكمية المتاحة: ${product.stock}`);
            } else {
                item.quantity = newQuantity;
                updateCart();
            }
        }

        function removeFromCart(id) {
            state.cart = state.cart.filter(item => item.id !== id);
            updateCart();
            showNotification('✅ تم إزالة المنتج من السلة');
        }

        function updateOrderSummary() {
            const subtotal = state.cart.reduce((sum, item) => sum + (item.sell * item.quantity), 0);
            const shipping = state.shippingMethod === 'delivery' ? 2 : 0;
            const total = subtotal + shipping;
            
            elements.subtotalPrice.textContent = `${subtotal.toFixed(2)} دينار`;
            elements.shippingFee.textContent = `${shipping.toFixed(2)} دينار`;
            elements.totalPrice.textContent = `${total.toFixed(2)} دينار`;
        }

        function validateCustomerInfo() {
            const name = elements.customerName.value.trim();
            const phone = elements.customerPhone.value.trim();
            const address = elements.customerAddress.value.trim();
            
            if (!name) {
                alert('الرجاء إدخال اسمك الكامل');
                elements.customerName.focus();
                return false;
            }
            
            if (!phone || !/^07\d{8}$/.test(phone)) {
                alert('الرجاء إدخال رقم هاتف صحيح (يبدأ بـ 07 ويتكون من 10 أرقام)');
                elements.customerPhone.focus();
                return false;
            }
            
            if (state.shippingMethod === 'delivery' && !address) {
                alert('الرجاء إدخال عنوان التوصيل');
                elements.customerAddress.focus();
                return false;
            }
            
            return true;
        }

        function createOrderMessage() {
            const name = elements.customerName.value.trim();
            const phone = elements.customerPhone.value.trim();
            const address = elements.customerAddress.value.trim();
            const shippingMethod = state.shippingMethod === 'delivery' ? 'التوصيل للمنزل' : 'الاستلام من المتجر';
            
            let message = `📦 طلب جديد - وسام للالكترونيات\n`;
            message += `==========================\n\n`;
            message += `👤 معلومات العميل:\n`;
            message += `الاسم: ${name}\n`;
            message += `الهاتف: ${phone}\n`;
            message += `طريقة الاستلام: ${shippingMethod}\n`;
            
            if (state.shippingMethod === 'delivery' && address) {
                message += `العنوان: ${address}\n`;
            }
            
            message += `\n🛒 المنتجات المطلوبة:\n`;
            message += `==========================\n`;
            
            state.cart.forEach((item, index) => {
                const itemTotal = item.sell * item.quantity;
                message += `${index + 1}. ${item.name}\n`;
                message += `   الكمية: ${item.quantity}\n`;
                message += `   السعر: ${item.sell} دينار\n`;
                message += `   الإجمالي: ${itemTotal.toFixed(2)} دينار\n\n`;
            });
            
            const subtotal = state.cart.reduce((sum, item) => sum + (item.sell * item.quantity), 0);
            const shipping = state.shippingMethod === 'delivery' ? 2 : 0;
            const total = subtotal + shipping;
            
            message += `💰 ملخص الطلب:\n`;
            message += `==========================\n`;
            message += `سعر المنتجات: ${subtotal.toFixed(2)} دينار\n`;
            message += `رسوم التوصيل: ${shipping.toFixed(2)} دينار\n`;
            message += `المجموع الكلي: ${total.toFixed(2)} دينار\n\n`;
            
            message += `📞 للتواصل: 0790781206\n`;
            if (state.storeSettings.whatsappLink) {
                message += `💬 واتساب: ${state.storeSettings.whatsappLink}\n`;
            }
            message += `📍 العنوان: عمان - شفابدران\n`;
            message += `⏰ ساعات العمل: 9:00 ص - 10:00 م`;
            
            return message;
        }

        
// ========== الصيانة (New) ==========

function normalizeWaLink(input) {
    if (!input) return 'https://wa.me/962790781206';
    const trimmed = input.trim();
    // accept full wa.me link
    if (trimmed.startsWith('http')) return trimmed.replace('00962', '962').replace('+962', '962');
    // accept number formats
    let num = trimmed.replace(/\s+/g,'').replace(/^00/,'').replace(/^\+/,'');
    if (num.startsWith('0')) num = '962' + num.slice(1);
    if (!num.startsWith('962')) num = '962' + num;
    return `https://wa.me/${num}`;
}

function updateContactLinksUI() {
    const wa = normalizeWaLink(state.storeSettings.whatsappLink || 'https://wa.me/962790781206');
    const email = (state.storeSettings.storeEmail || 'wesamelectronics@gmail.com').trim() || 'wesamelectronics@gmail.com';

    if (elements.navWhatsApp) elements.navWhatsApp.href = wa;
    if (elements.navEmail) elements.navEmail.href = `mailto:${email}`;

    // Footer email
    const footerEmailEl = document.getElementById('footerEmail');
    if (footerEmailEl) footerEmailEl.textContent = email;
}

function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.style.display = 'block';
    elements.overlay && (elements.overlay.style.display = 'block');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.style.display = 'none';
    elements.overlay && (elements.overlay.style.display = 'none');
    document.body.style.overflow = '';
}

function scrollToSection(sectionEl) {
    if (!sectionEl) return;
    sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setUploadStatus(text, ok=true) {
    if (!elements.srUploadStatus) return;
    elements.srUploadStatus.style.display = 'block';
    elements.srUploadStatus.textContent = text;
    elements.srUploadStatus.classList.remove('ok','err');
    elements.srUploadStatus.classList.add(ok ? 'ok' : 'err');
}

async function uploadImageExternal(file) {
    // رفع تلقائي غير مستخدم حالياً (تم اعتماد PostImages يدوياً)
    throw new Error('AUTO_UPLOAD_DISABLED');
}

// [moved to separate file] buildServiceRequestMessage


async // [moved to separate file] saveServiceRequestToFirestore



// ===== أدوات مساعدة (لمنع أخطاء HTML) =====
// [moved to separate file] escapeHtml


async // [moved to separate file] refreshServiceRequests



        // ========== إدارة لوحة التحكم ==========

        function switchTab(tabId) {
            elements.adminTabs.forEach(tab => {
                if (tab.dataset.tab === tabId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            elements.adminSections.forEach(section => {
                if (section.id === `${tabId}Section`) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
    // تحميل طلبات الصيانة عند فتح التبويب
    if (tabId === 'serviceRequests') {
        refreshServiceRequests();
    }
}

function updateProductsTable() {
            elements.productsTableBody.innerHTML = '';
            
            if (state.products.length === 0) {
                elements.productsTableBody.innerHTML = `
                    <tr>
                        <td colspan="7" style="text-align: center; padding: 20px;">
                            لا توجد منتجات
                        </td>
                    </tr>
                `;
                return;
            }
            
            state.products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        ${product.image ? 
                            `<img src="${product.image}" alt="${product.name}" class="product-image-small">` : 
                            '<i class="fas fa-image" style="color: #ccc; font-size: 1.5rem;"></i>'
                        }
                    </td>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.sell} دينار</td>
                    <td>${product.stock}</td>
                    <td>
                        ${product.videoUrl ? 
                            '<i class="fab fa-youtube" style="color: #FF0000;"></i>' : 
                            '<i class="fas fa-times" style="color: #ccc;"></i>'
                        }
                    </td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${product.id}">
                            <i class="fas fa-edit"></i> تعديل
                        </button>
                        <button class="action-btn remove-btn" data-id="${product.id}">
                            <i class="fas fa-trash"></i> حذف
                        </button>
                    </td>
                `;
                
                elements.productsTableBody.appendChild(row);
            });
            
            elements.productsTableBody.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = e.target.closest('button').dataset.id;
                    editProduct(productId);
                });
            });
            
            elements.productsTableBody.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = e.target.closest('button').dataset.id;
                    deleteProduct(productId);
                });
            });
        }

        function editProduct(productId) {
            const product = state.products.find(p => p.id === productId);
            if (!product) return;
            
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productPrice').value = product.sell;
            document.getElementById('productStock').value = product.stock;
            if (document.getElementById('productFeatured')) document.getElementById('productFeatured').checked = product.featured === true;
            const pf = document.getElementById('productFeatured');
            if (pf) pf.checked = !!product.featured;
            if (elements.productFeatured) elements.productFeatured.checked = !!product.featured;
            document.getElementById('productDescription').value = product.description || '';
            document.getElementById('productDeliveryFee').value = product.deliveryFee || 2;
            document.getElementById('productVideoUrl').value = product.videoUrl || '';
            document.getElementById('productImageUrl').value = product.image || '';
            
            elements.additionalImagesContainer.innerHTML = '';
            if (product.additionalImages && product.additionalImages.length > 0) {
                product.additionalImages.forEach(imageUrl => {
                    const inputDiv = document.createElement('div');
                    inputDiv.className = 'form-group additional-image-input';
                    inputDiv.innerHTML = `
                        <input type="url" class="additional-image-url" value="${imageUrl}" 
                               placeholder="https://example.com/image2.jpg">
                    `;
                    elements.additionalImagesContainer.appendChild(inputDiv);
                });
            } else {
                const inputDiv = document.createElement('div');
                inputDiv.className = 'form-group additional-image-input';
                inputDiv.innerHTML = `
                    <input type="url" class="additional-image-url" 
                           placeholder="https://example.com/image2.jpg">
                `;
                elements.additionalImagesContainer.appendChild(inputDiv);
            }
            
            updateImagePreviews();
            
            const saveBtn = elements.addProductForm.querySelector('.save-btn');
            saveBtn.innerHTML = '<i class="fas fa-save"></i> تحديث المنتج';
            saveBtn.dataset.productId = productId;
            
            switchTab('addProduct');
        }

        function clearForm() {
            elements.addProductForm.reset();
            document.getElementById('productDeliveryFee').value = 2;
            document.getElementById('productVideoUrl').value = '';
            elements.additionalImagesContainer.innerHTML = `
                <div class="form-group additional-image-input">
                    <input type="url" class="additional-image-url" 
                           placeholder="https://example.com/image2.jpg">
                </div>
            `;
            elements.imagePreviewContainer.innerHTML = '';
            
            const saveBtn = elements.addProductForm.querySelector('.save-btn');
            saveBtn.innerHTML = '<i class="fas fa-save"></i> حفظ المنتج';
            delete saveBtn.dataset.productId;
        }

        function updateImagePreviews() {
            elements.imagePreviewContainer.innerHTML = '';
            
            const mainImageUrl = document.getElementById('productImageUrl').value.trim();
            if (mainImageUrl && mainImageUrl.startsWith('http')) {
                const previewDiv = document.createElement('div');
                previewDiv.className = 'image-preview';
                previewDiv.innerHTML = `
                    <img src="${mainImageUrl}" alt="معاينة الصورة">
                    <button class="remove-image" onclick="removeImagePreview(this, 'main')">&times;</button>
                `;
                elements.imagePreviewContainer.appendChild(previewDiv);
            }
            
            const additionalInputs = document.querySelectorAll('.additional-image-url');
            additionalInputs.forEach((input, index) => {
                const imageUrl = input.value.trim();
                if (imageUrl && imageUrl.startsWith('http')) {
                    const previewDiv = document.createElement('div');
                    previewDiv.className = 'image-preview';
                    previewDiv.innerHTML = `
                        <img src="${imageUrl}" alt="معاينة الصورة الإضافية">
                        <button class="remove-image" onclick="removeImagePreview(this, ${index})">&times;</button>
                    `;
                    elements.imagePreviewContainer.appendChild(previewDiv);
                }
            });
        }

        window.removeImagePreview = function(button, type) {
            if (type === 'main') {
                document.getElementById('productImageUrl').value = '';
            } else {
                const inputs = document.querySelectorAll('.additional-image-url');
                if (inputs[type]) {
                    inputs[type].value = '';
                }
            }
            button.parentElement.remove();
        };

        // ========== تحديث واجهة المستخدم ==========

        function updateUI() {
            updateCategoryCounts();
            displayCategories();
            updateProductsSectionTitle();
            filterProducts();
            updateCart();
            
            if (state.isAdmin) {
                updateProductsTable();
                displayProductOrderList();
                displayCategoryOrderList();
                displayCategoriesList();
                updateCategoryDropdown();
            }
        }

        function updateCategoryDropdown() {
            elements.productCategory.innerHTML = '<option value="">اختر الفئة</option>';
            state.categories.forEach(category => {
                if (category.id !== "all") {
                    elements.productCategory.innerHTML += `<option value="${category.id}">${category.name}</option>`;
                }
            });
        }

        // ========== إدارة تسجيل الدخول ==========

        function handleAdminLogin() {
            const password = elements.adminPassword.value;
            const ADMIN_PASSWORD = "arduino"; // تم تغيير كلمة السر إلى arduino
            
            if (password === ADMIN_PASSWORD) {
                state.isAdmin = true;
                elements.adminPanel.style.display = 'block';
                elements.adminLoginBtn.style.display = 'none';
                elements.loginError.style.display = 'none';
                elements.adminPassword.value = '';
                elements.loginModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                
                updateProductsTable();
                loadStoreSettings();
                loadSiteSettings();
                displayProductOrderList();
                displayCategoryOrderList();
                displayCategoriesList();
                updateCategoryDropdown();
                showNotification('✅ مرحباً بك في لوحة التحكم');
            } else {
                elements.loginError.style.display = 'block';
            }
        }

        function handleAdminLogout() {
            state.isAdmin = false;
            elements.adminPanel.style.display = 'none';
            showNotification('✅ تم تسجيل الخروج بنجاح');
        }

        // ========== إعداد الأحداث ==========

        function setupEventListeners() {
            // البحث والفرز
            elements.searchInput.addEventListener('input', filterProducts);
            elements.sortOptions.addEventListener('change', filterProducts);
            
            // السلة
            elements.cartIcon.addEventListener('click', openCartModal);

            // زر السلة في الموبايل
            if (elements.mCartBtn) {
                elements.mCartBtn.addEventListener('click', openCartModal);
            }
            
            elements.closeCart.addEventListener('click', closeCartModal);
            
            elements.closeGalleryModal.addEventListener('click', () => {
                elements.galleryModal.style.display = 'none';
                elements.overlay.classList.remove('active');
            });
            
            elements.overlay.addEventListener('click', () => {
                closeCartModal();
                elements.galleryModal.style.display = 'none';
                elements.loginModal.style.display = 'none';
                elements.adminAccessModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            // خيارات الشحن
            elements.pickupOption.addEventListener('click', () => {
                state.shippingMethod = 'pickup';
                elements.pickupOption.classList.add('selected');
                elements.deliveryOption.classList.remove('selected');
                document.getElementById('pickup').checked = true;
                elements.deliveryAddress.classList.remove('show');
                updateOrderSummary();
            });
            
            elements.deliveryOption.addEventListener('click', () => {
                state.shippingMethod = 'delivery';
                elements.deliveryOption.classList.add('selected');
                elements.pickupOption.classList.remove('selected');
                document.getElementById('delivery').checked = true;
                elements.deliveryAddress.classList.add('show');
                updateOrderSummary();
            });
            
            // معاينة الصور
            elements.productImageUrl.addEventListener('input', updateImagePreviews);
            
            // إضافة صور إضافية
            elements.addImageBtn.addEventListener('click', () => {
                const inputDiv = document.createElement('div');
                inputDiv.className = 'form-group additional-image-input';
                inputDiv.innerHTML = `
                    <input type="url" class="additional-image-url" 
                           placeholder="https://example.com/image2.jpg">
                `;
                elements.additionalImagesContainer.appendChild(inputDiv);
                
                inputDiv.querySelector('input').addEventListener('input', updateImagePreviews);
            });
            
            // إرسال الطلب عبر واتساب
            elements.whatsappOrderBtn.addEventListener('click', () => {
                if (state.cart.length === 0) {
                    alert('سلة التسوق فارغة');
                    return;
                }
                
                if (!validateCustomerInfo()) return;
                
                const orderMessage = createOrderMessage();
                const whatsappUrl = state.storeSettings.whatsappLink || 'https://wa.me/962790781206';
                const finalUrl = `${whatsappUrl}?text=${encodeURIComponent(orderMessage)}`;
                window.open(finalUrl, '_blank');
                
                state.cart = [];
                updateCart();
                elements.addProductForm.reset();
                elements.deliveryAddress.classList.remove('show');
                elements.pickupOption.click();
                
                showNotification('✅ تم فتح واتساب لإرسال الطلب. شكراً لشرائك!');
            });
            
            // إرسال الطلب بالبريد
            elements.emailOrderBtn.addEventListener('click', () => {
                if (state.cart.length === 0) {
                    alert('سلة التسوق فارغة');
                    return;
                }
                
                if (!validateCustomerInfo()) return;
                
                const orderMessage = createOrderMessage();
                const emailAddress = 'wesamelectronics@gmail.com';
                const emailSubject = `طلب جديد من ${elements.customerName.value}`;
                const emailBody = orderMessage;
                const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
                
                window.location.href = mailtoUrl;
                
                showNotification('✅ تم فتح بريدك الإلكتروني لإرسال الطلب');
            });
            
            // تسجيل الدخول
            elements.adminLoginBtn.addEventListener('click', () => {
                elements.loginModal.style.display = 'block';
                elements.overlay.classList.add('active');
                            setTimeout(() => { try { elements.adminPassword && elements.adminPassword.focus(); } catch(e){} }, 80);
            });
            
            elements.closeLoginModal.addEventListener('click', () => {
                elements.loginModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                elements.loginError.style.display = 'none';
                elements.adminPassword.value = '';
            });
            
            elements.loginBtn.addEventListener('click', handleAdminLogin);
            
            // تسجيل الخروج
            elements.adminLogoutBtn.addEventListener('click', handleAdminLogout);
            
            // تحكم المدير
            document.addEventListener('keydown', function(event) {
                if (event.ctrlKey && (event.key === 'F7' || event.keyCode === 118)) {
                    event.preventDefault();
                    state.adminButtonVisible = !state.adminButtonVisible;
                    elements.adminLoginBtn.style.display = state.adminButtonVisible ? 'block' : 'none';
                    
                    if (state.adminButtonVisible) {
                        showNotification('🔓 زر دخول المدير ظاهر الآن. اضغط Esc لإخفائه.');
                    } else {
                        showNotification('🔒 تم إخفاء زر المدير');
                    }
                }
                
                if (event.key === 'Escape' || event.keyCode === 27) {
                    if (state.adminButtonVisible) {
                        state.adminButtonVisible = false;
                        elements.adminLoginBtn.style.display = 'none';
                    }
                }
                
                if ((event.key === 'F12' || event.keyCode === 123) && state.isAdmin) {
                    event.preventDefault();
                    handleAdminLogout();
                    showNotification('🔒 تم تسجيل الخروج من لوحة المدير');
                }
            });
            
            // تبويبات لوحة التحكم
            elements.adminTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    switchTab(tab.dataset.tab);
                });
            });
            
            // نموذج إضافة المنتج
            elements.addProductForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const productData = {};
                await saveProduct(productData);
            });
            
            // مسح النموذج
            document.getElementById('clearFormBtn').addEventListener('click', clearForm);
            
            // نموذج إضافة التصنيف الجديد
            elements.addCategoryForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const categoryName = elements.newCategoryName.value.trim();
                const categoryIcon = elements.newCategoryIcon.value;
                
                if (!categoryName) {
                    alert('الرجاء إدخال اسم التصنيف');
                    return;
                }
                
                await addNewCategory(categoryName, categoryIcon);
            });
            
            // حفظ إعدادات المتجر
            elements.storeSettingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                saveStoreSettings();
            });
            
            // حفظ محتوى الصفحة
            elements.savePageContentBtn.addEventListener('click', savePageContent);
            
            // حفظ ترتيب المنتجات
            elements.saveProductOrderBtn.addEventListener('click', saveProductOrder);
            
            // حفظ ترتيب التصنيفات
            elements.saveCategoryOrderBtn.addEventListener('click', saveCategoryOrder);
            
            // لوحة الوصول للمدير (الهاتف)
            elements.openAdminAccess.addEventListener('click', () => {
                elements.adminAccessModal.style.display = 'flex';
                elements.overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            elements.closeAdminAccess.addEventListener('click', () => {
                elements.adminAccessModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
            
            elements.accessShowBtn.addEventListener('click', () => {
                state.adminButtonVisible = true;
                elements.adminLoginBtn.style.display = 'block';
                elements.adminAccessModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                showNotification('🔓 تم إظهار زر المدير في الأعلى');
                
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            elements.accessHideBtn.addEventListener('click', () => {
                state.adminButtonVisible = false;
                elements.adminLoginBtn.style.display = 'none';
                elements.adminAccessModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                showNotification('🔒 تم إخفاء زر المدير');
            });
            
            elements.accessDirectLoginBtn.addEventListener('click', () => {
                elements.adminAccessModal.style.display = 'none';
                elements.overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                elements.loginModal.style.display = 'block';
                elements.overlay.classList.add('active');
                            setTimeout(() => { try { elements.adminPassword && elements.adminPassword.focus(); } catch(e){} }, 80);
            });
            
            elements.adminAccessModal.addEventListener('click', (e) => {
                if (e.target === elements.adminAccessModal) {
                    elements.adminAccessModal.style.display = 'none';
                    elements.overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // إضافة حدث للمعاينة عند كتابة رابط الصورة الإضافية
            document.addEventListener('input', function(e) {
                if (e.target.classList.contains('additional-image-url')) {
                    updateImagePreviews();
                }
            });
// ====== Service (New) ======
if (elements.navServiceBtn) {
    elements.navServiceBtn.addEventListener('click', () => {
        elements.navServiceBtn.classList.add('active');
        elements.navShopBtn && elements.navShopBtn.classList.remove('active');
        scrollToSection(elements.serviceHome);
    });
}
if (elements.navShopBtn) {
    elements.navShopBtn.addEventListener('click', () => {
        elements.navShopBtn.classList.add('active');
        elements.navServiceBtn && elements.navServiceBtn.classList.remove('active');
        const shopSection = document.querySelector('.categories-section') || document.querySelector('.products-section');
        scrollToSection(shopSection);
    });
}

if (elements.scrollToShopBtn) {
    elements.scrollToShopBtn.addEventListener('click', () => {
        elements.navShopBtn && elements.navShopBtn.click();
    });
}

if (elements.openServiceRequestBtn) {
    elements.openServiceRequestBtn.addEventListener('click', () => openModal(elements.serviceRequestModal));
}
if (elements.closeServiceRequestModal) {
    elements.closeServiceRequestModal.addEventListener('click', () => closeModal(elements.serviceRequestModal));
}
if (elements.overlay) {
    elements.overlay.addEventListener('click', () => {
        // close service modal if open
        if (elements.serviceRequestModal && elements.serviceRequestModal.style.display === 'block') {
            closeModal(elements.serviceRequestModal);
        }
    });
}

if (elements.srClearImageBtn) {
    elements.srClearImageBtn.addEventListener('click', () => {
        if (elements.srFaultImage) elements.srFaultImage.value = '';
        if (elements.srImageLink) elements.srImageLink.value = '';
        setUploadStatus('تم مسح الصورة/الرابط.', true);
    });
}

if (elements.srUploadImageBtn) {
    elements.srUploadImageBtn.addEventListener('click', () => {
        window.open('https://postimages.org/', '_blank', 'noopener');
        setUploadStatus('افتح PostImages، ارفع الصورة، ثم انسخ رابط (Hotlink for websites) والصقه في خانة رابط الصورة.', true);
    });
}

if (elements.srGetLocationBtn) {
    elements.srGetLocationBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
            alert('المتصفح لا يدعم تحديد الموقع.');
            return;
        }
        elements.srGetLocationBtn.disabled = true;
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                const gmaps = `https://www.google.com/maps?q=${lat},${lon}`;
                if (elements.srLocationLink) elements.srLocationLink.value = gmaps;
                if (elements.srLocationHint) elements.srLocationHint.textContent = 'تم تحديد الموقع بنجاح ✅';
                elements.srGetLocationBtn.disabled = false;
            },
            (err) => {
                console.warn(err);
                alert('تعذر الحصول على الموقع. يمكنك لصق رابط خرائط أو كتابة عنوان.');
                elements.srGetLocationBtn.disabled = false;
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
        );
    });
}

if (elements.srClearLocationBtn) {
    elements.srClearLocationBtn.addEventListener('click', () => {
        if (elements.srLocationLink) elements.srLocationLink.value = '';
        if (elements.srAddressText) elements.srAddressText.value = '';
        if (elements.srLocationHint) elements.srLocationHint.textContent = 'يمكنك أيضاً وضع رابط خرائط أو كتابة عنوان مختصر.';
    });
}

if (elements.serviceRequestForm) {
    elements.serviceRequestForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const customerName = (elements.srCustomerName.value || '').trim();
        const customerPhone = (elements.srCustomerPhone.value || '').trim();
        const deviceType = (elements.srDeviceType.value || '').trim();
        const deviceSize = (elements.srDeviceSize.value || '').trim();
        const faultDesc = (elements.srFaultDesc.value || '').trim();
        const imageLink = (elements.srImageLink ? (elements.srImageLink.value || '').trim() : '');
        const locationLink = (elements.srLocationLink ? (elements.srLocationLink.value || '').trim() : '');
        const addressText = (elements.srAddressText ? (elements.srAddressText.value || '').trim() : '');

        if (!customerName || !customerPhone || !deviceType || !deviceSize || !faultDesc) {
            alert('الرجاء تعبئة جميع الحقول الأساسية.');
            return;
        }

        const requestId = `SR-${Date.now()}`;
        const docData = {
            requestId,
            customerName,
            customerPhone,
            deviceType,
            deviceSize,
            faultDesc,
            imageLink,
            locationLink,
            addressText,
            status: 'جديد',
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const savedOk = await saveServiceRequestToFirestore(docData);
        if (!savedOk) {
            alert('تعذر حفظ طلب الصيانة على قاعدة البيانات. سيتم إرسال الطلب عبر واتساب/إيميل فقط.');
        }
        const msg = buildServiceRequestMessage(docData);
        const wa = normalizeWaLink(state.storeSettings.whatsappLink || 'https://wa.me/962790781206');
        window.open(`${wa}?text=${encodeURIComponent(msg)}`, '_blank');

        // reset form (keep link if you want? reset all)
        elements.serviceRequestForm.reset();
        if (elements.srUploadStatus) elements.srUploadStatus.style.display = 'none';
        closeModal(elements.serviceRequestModal);

        // refresh table if admin open
        if (state.isAdmin && elements.serviceRequestsTableBody) {
            refreshServiceRequests();
        }
    });
}

if (elements.srEmailBtn) {
    elements.srEmailBtn.addEventListener('click', async () => {
        const customerName = (elements.srCustomerName.value || '').trim();
        const customerPhone = (elements.srCustomerPhone.value || '').trim();
        const deviceType = (elements.srDeviceType.value || '').trim();
        const deviceSize = (elements.srDeviceSize.value || '').trim();
        const faultDesc = (elements.srFaultDesc.value || '').trim();
        const imageLink = (elements.srImageLink ? (elements.srImageLink.value || '').trim() : '');
        const locationLink = (elements.srLocationLink ? (elements.srLocationLink.value || '').trim() : '');
        const addressText = (elements.srAddressText ? (elements.srAddressText.value || '').trim() : '');

        if (!customerName || !customerPhone || !deviceType || !deviceSize || !faultDesc) {
            alert('الرجاء تعبئة جميع الحقول الأساسية.');
            return;
        }

        const requestId = `SR-${Date.now()}`;
        const msg = buildServiceRequestMessage({ requestId, customerName, customerPhone, deviceType, deviceSize, faultDesc, imageLink, locationLink, addressText });
        const email = (state.storeSettings.storeEmail || 'wesamelectronics@gmail.com').trim() || 'wesamelectronics@gmail.com';
        const subject = encodeURIComponent(`طلب صيانة جديد - ${requestId}`);
        const body = encodeURIComponent(msg);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
}

if (elements.refreshServiceRequestsBtn) {
    elements.refreshServiceRequestsBtn.addEventListener('click', refreshServiceRequests);
}


        }

        // ========== تهيئة التطبيق ==========

        async function initApp() {
    console.log("=== بدء تهيئة التطبيق ===");

    showConnectionMessage('info', 'جاري الاتصال بقاعدة البيانات...');

    // تحميل بيانات أساسية للزوار
    try { await loadSiteSettings(); } catch (e) { console.warn(e); }
    try { await loadStoreSettings(); } catch (e) { console.warn(e); }
    updateContactLinksUI();
    // ✅ اربط السلة مبكرًا دائماً
    try { bindCartOpenAlways(); } catch (e) { console.warn(e); }

    // تحميل المنتجات
    try { await loadProducts(); } catch (e) { console.warn('⚠️ loadProducts failed:', e); showConnectionMessage('warning', 'تعذر تحميل المنتجات، لكن الموقع يعمل'); }

    // بيانات إضافية للمدير
    if (state.isAdmin || localStorage.getItem('wassam_admin') === 'true') {
        try { await loadProductOrder(); } catch (e) { console.warn(e); }
        try { await loadSiteSettings(); } catch (e) { console.warn(e); }
        try { await loadStoreSettings(); } catch (e) { console.warn(e); }
    }

    setupEventListeners();
    updateUI();
    // مزامنة السلة فوراً عند فتح الموقع (حتى تظهر عناصر السلة على الموبايل)
    syncCartFromStorage();
    updateCart();
    elements.pickupOption && elements.pickupOption.click();

    console.log("✅ التطبيق جاهز للاستخدام");
}


        // بدء التطبيق عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', initApp);

// ===== PWA: Service Worker registration (static cache only) =====
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./sw.js");
      console.log("✅ Service Worker registered");
    } catch (e) {
      console.warn("SW registration failed:", e);
    }
  });
}
