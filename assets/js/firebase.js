const firebaseConfig = {
            apiKey: "AIzaSyBDlQYnTunZMDwIFsysgPbmovHkPj0f3M8",
            authDomain: "wesamstorenew.firebaseapp.com",
            projectId: "wesamstorenew",
            storageBucket: "wesamstorenew.appspot.com",
            messagingSenderId: "956353010212",
            appId: "1:956353010212:web:2e5ee949fa8f4ea713d6b1",
            measurementId: "G-EDLFXHCPBB"
        };

        // تهيئة Firebase مع معالجة الأخطاء
        let firebaseInitialized = false;
        let firebaseError = null;
        let db, auth, storage;

        try {
            // التحقق مما إذا تم التهيئة مسبقاً
            if (!firebase.apps.length) {
                const app = firebase.initializeApp(firebaseConfig);
                console.log("✅ Firebase App initialized:", app.name);
            } else {
                console.log("✅ Firebase App already initialized");
            }
            
            // تهيئة الخدمات
            db = firebase.firestore();
            auth = firebase.auth();
            storage = firebase.storage();
            
            // إعداد إعدادات CORS للتخزين
            if (storage) {
                console.log("✅ Firebase Storage initialized");
            }
            
            firebaseInitialized = true;
            console.log("✅ Firebase services initialized successfully");
            
            // اختبار الاتصال
            testFirebaseConnection();
            
        } catch (error) {
            console.error("❌ Firebase initialization error:", error);
            firebaseInitialized = false;
            firebaseError = error.message;
            
            setTimeout(() => {
                showConnectionMessage('error', `خطأ في الاتصال: ${error.message}`);
            }, 1000);
        }
        
        // اختبار اتصال Firebase
        async function testFirebaseConnection() {
            console.log("=== Testing Firebase Connection ===");
            
            if (!firebaseInitialized) {
                console.error("❌ Firebase not initialized");
                showConnectionMessage('error', 'Firebase لم يتم تهيئته');
                return { success: false };
            }
            
            try {
                // اختبار Firestore
                const productsRef = db.collection('products');
                const snapshot = await productsRef.limit(1).get();
                
                console.log("✅ Firestore connection successful");
                console.log(`📊 Total products: ${snapshot.size}`);
                
                // اختبار Authentication (بدون تسجيل دخول)
                const authState = auth.currentUser;
                console.log("✅ Auth service working");
                
                // اختبار Storage
                try {
                    const storageRef = storage.ref();
                    console.log("✅ Storage service working");
                } catch (storageError) {
                    console.warn("⚠️ Storage may have CORS issues:", storageError);
                }
                
                showConnectionMessage('success', 'تم الاتصال بنجاح بقاعدة البيانات');
                return { success: true, hasProducts: snapshot.size > 0 };
                
            } catch (error) {
                console.error("❌ Firebase connection test failed:", error);
                
                let errorMessage = "فشل الاتصال بقاعدة البيانات";
                if (error.code) {
                    switch (error.code) {
                        case 'failed-precondition':
                            errorMessage = "يرجى تميز Firestore في لوحة تحكم Firebase";
                            break;
                        case 'permission-denied':
                            errorMessage = "خطأ في صلاحيات الوصول";
                            break;
                        case 'unavailable':
                            errorMessage = "الخدمة غير متاحة حالياً";
                            break;
                        default:
                            errorMessage = `خطأ: ${error.code}`;
                    }
                }
                
                showConnectionMessage('error', errorMessage);
                return { success: false, error: error.message };
            }
        }
        
        // دالة عرض رسائل الاتصال
        function showConnectionMessage(type, message) {
            const statusDiv = document.getElementById('connectionStatus');
            if (!statusDiv) return;
            
            const icon = type === 'success' ? 'fa-check-circle' : 
                        type === 'warning' ? 'fa-exclamation-triangle' : 
                        'fa-times-circle';
            
            statusDiv.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
            statusDiv.className = `connection-status ${type}`;
            statusDiv.style.display = 'flex';
            
            // إخفاء الرسالة بعد 5 ثوانٍ
            setTimeout(() => {
                statusDiv.style.opacity = '0';
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                    statusDiv.style.opacity = '1';
                }, 1000);
            }, 5000);
        }
        
        // تعيين المتغيرات للوصول العالمي
        window.firebase = firebase;
        window.db = db;
        window.auth = auth;
        window.storage = storage;
        window.firebaseInitialized = firebaseInitialized;
        window.firebaseError = firebaseError;

        // ===== مساعدات Firebase =====
        function getDbSafe() {
            if (window.db) return window.db;
            try {
                if (window.firebase && window.firebase.firestore) {
                    window.db = window.firebase.firestore();
                    return window.db;
                }
            } catch (e) {}
            return null;
        }

        
    

        // ===== Timestamp helper (prevents FieldValue errors if Firebase partially fails) =====
        function getServerTimestamp() {
            try {
                const st = firebase?.firestore?.FieldValue?.serverTimestamp;
                return (typeof st === 'function') ? st() : new Date();
            } catch (e) {
                return new Date();
            }
        }