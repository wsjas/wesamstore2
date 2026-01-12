function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                background-color: ${type === 'success' ? '#4caf50' : '#f44336'};
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                z-index: 3000;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;
            
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => document.body.removeChild(notification), 300);
            }, 3000);
        }

function escapeHtml(input) {
    if (input === null || input === undefined) return '';
    return String(input)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/* ===== Video Popup (works for YouTube/Facebook/TikTok/Instagram) ===== */
function openVideoPopup(url){
  url = (url || "").trim();
  if(!url){
    alert("لا يوجد رابط فيديو لهذا المنتج");
    return;
  }
  const w = Math.min(980, screen.width - 40);
  const h = Math.min(620, screen.height - 80);
  const left = Math.max(0, (screen.width - w) / 2);
  const top  = Math.max(0, (screen.height - h) / 2);

  const features =
    `width=${w},height=${h},left=${left},top=${top},` +
    `resizable=yes,scrollbars=yes,noopener,noreferrer`;

  const win = window.open(url, "productVideoPopup", features);
  if(!win){
    window.open(url, "_blank", "noopener,noreferrer");
  }else{
    win.focus();
  }
}

// Delegated click for any video buttons
document.addEventListener('click', function(e){
  const btn = e.target.closest('.video-btn-card, .video-btn');
  if(!btn) return;
  e.preventDefault();
  e.stopPropagation();
  const url = btn.dataset.videoUrl || btn.getAttribute('data-video-url') || btn.getAttribute('href') || '';
  openVideoPopup(url);
}, true);

/* ===== Detect platform and color video button ===== */
(function(){
    function detectPlatform(url){
        url = (url || "").toLowerCase();
        if(url.includes("youtube") || url.includes("youtu.be")) return "video-youtube";
        if(url.includes("facebook") || url.includes("fb.watch")) return "video-facebook";
        if(url.includes("tiktok")) return "video-tiktok";
        if(url.includes("instagram")) return "video-instagram";
        return "video-youtube";
    }

    function applyPlatformColors(){
        document.querySelectorAll(".video-btn-card").forEach(btn=>{
            const url = btn.dataset.videoUrl || "";
            const cls = detectPlatform(url);
            btn.classList.add(cls);
        });
    }

    document.addEventListener("DOMContentLoaded", applyPlatformColors);
    setTimeout(applyPlatformColors, 500);
})();

/* REMOVED */
document.addEventListener("DOMContentLoaded", function(){
    const socialBox = document.getElementById("socialLinks");
    const navEmail = document.getElementById("navEmail");

    if(socialBox && navEmail){
        const parent = navEmail.parentElement;

        while(socialBox.firstChild){
            const el = socialBox.firstChild;
            el.classList.add("nav-social-inline");
            parent.appendChild(el);
        }

        socialBox.style.display = "none";
    }
});

/* ===== Move social buttons next to WhatsApp & Email buttons ===== */
document.addEventListener("DOMContentLoaded", function(){
    const socialBox = document.getElementById("socialLinks");
    const navWhatsApp = document.getElementById("navWhatsApp");
    const navEmail = document.getElementById("navEmail");

    if(!socialBox || !navWhatsApp || !navEmail) return;

    const parent = navWhatsApp.parentElement;

    // insert after email button
    let insertAfter = navEmail.nextSibling;

    while(socialBox.firstChild){
        const el = socialBox.firstChild;
        el.classList.add("nav-social-inline");
        parent.insertBefore(el, insertAfter);
    }

    socialBox.style.display = "none";
});

/* ===== Social buttons beside WhatsApp/Email (MutationObserver) ===== */
(function(){
  function navCtaContainer(){
    const wa = document.getElementById("navWhatsApp");
    const email = document.getElementById("navEmail");
    if(!wa || !email) return null;
    return wa.parentElement;
  }

  function getSourceLinks(){
    const box1 = document.getElementById("socialLinks");
    const box2 = document.getElementById("footerSocialLinks");
    const list = [];
    [box1, box2].forEach(box=>{
      if(!box) return;
      box.querySelectorAll("a").forEach(a=>list.push(a));
    });
    return list;
  }

  function alreadyInserted(href){
    const cta = navCtaContainer();
    if(!cta) return false;
    return Array.from(cta.querySelectorAll("a.nav-social-inline")).some(a => (a.getAttribute("href")||"") === href);
  }

  function insertNow(){
    const cta = navCtaContainer();
    const email = document.getElementById("navEmail");
    if(!cta) return false;

    const links = getSourceLinks();
    if(!links.length) return false;

    links.forEach(a=>{
      const href = a.getAttribute("href") || "";
      if(!href) return;
      if(alreadyInserted(href)) return;

      const clone = a.cloneNode(true);
      clone.classList.add("nav-social-inline");

      // Keep platform classes (youtube/facebook/maps/whatsapp) if any
      const cls = a.className || "";
      cls.split(/\s+/).forEach(c=>{
        if(c && c !== "nav-social-inline") clone.classList.add(c);
      });

      clone.removeAttribute("id");
      cta.insertBefore(clone, email ? email.nextSibling : null);
    });

    // hide original containers to "remove" old buttons
    const box1 = document.getElementById("socialLinks");
    const box2 = document.getElementById("footerSocialLinks");
    if(box1) box1.style.display = "none";
    if(box2) box2.style.display = "none";

    return true;
  }

  // Try immediately + retries
  function scheduleTries(){
    let tries = 0;
    const iv = setInterval(()=>{
      tries++;
      if(insertNow() || tries > 20){
        clearInterval(iv);
      }
    }, 500);
  }

  // Observe changes (social links might be created after Firebase/settings load)
  function observe(){
    const targets = [document.body];
    const obs = new MutationObserver(()=>{
      insertNow();
    });
    obs.observe(document.body, {subtree:true, childList:true});
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    scheduleTries();
    observe();
  });

  // also expose for manual call if needed
  window.__insertSocialButtonsToNav = insertNow;
})();

(function(){
  function setLinks(){
    const phone = (document.getElementById('phoneNumberHeader')?.textContent || '0790781206').replace(/\D/g,'');
    const wa = 'https://wa.me/962' + (phone.startsWith('0') ? phone.slice(1) : phone);

    const fb = document.querySelector('.social-links a.facebook')?.href || 'https://facebook.com';
    const maps = document.querySelector('.social-links a.map')?.href || 'https://maps.google.com';
    const emailMatch = document.body.innerText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    const email = emailMatch ? 'mailto:' + emailMatch[0] : 'mailto:wesamelectronics@gmail.com';

    const set = (id, link) => { const el = document.getElementById(id); if(el) el.href = link; };

    set('mQSWhatsApp', wa);
    set('mQSFb', fb);
    set('mQSMaps', maps);
    set('mQSEmail', email);

    set('mWhatsAppLink', wa);
    set('mFacebookLink', fb);
    set('mMapsLink', maps);
    set('mEmailLink', email);
  }

  document.addEventListener('DOMContentLoaded', setLinks);
})();