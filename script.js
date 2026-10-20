const themeToggleBtn = document.getElementById('themeToggleBtn');
const langToggleBtn = document.getElementById('langToggleBtn');
const langCodeLabel = document.getElementById('langCodeLabel');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
    document.body.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
    document.body.classList.remove('light-theme');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    document.documentElement.classList.toggle('light-theme', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

initTheme();

const translationsCache = {};
let currentLang = localStorage.getItem('lang') || 'en';

async function fetchTranslation(lang) {
  if (translationsCache[lang]) {
    return translationsCache[lang];
  }
  try {
    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    translationsCache[lang] = data;
    return data;
  } catch (err) {
    console.warn(`Could not load locales/${lang}.json:`, err);
    return null;
  }
}

async function setLanguage(lang) {
  currentLang = (lang === 'ar') ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  document.documentElement.setAttribute('lang', currentLang);

  const isRtl = currentLang === 'ar';
  if (isRtl) {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl-mode');
    document.body.classList.add('rtl-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.setAttribute('dir', 'ltr');
    document.documentElement.classList.remove('rtl-mode');
    document.body.classList.remove('rtl-mode');
  }

  if (langCodeLabel) {
    langCodeLabel.textContent = isRtl ? 'EN' : 'AR';
  }
  if (langToggleBtn) {
    langToggleBtn.setAttribute('title', isRtl ? 'Switch to English (التحويل للإنجليزية)' : 'تغيير إلى اللغة العربية (Switch to Arabic)');
    langToggleBtn.setAttribute('aria-label', isRtl ? 'Switch to English' : 'Switch to Arabic');
  }

  const dict = await fetchTranslation(currentLang);
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (typeof dict[key] === 'string' && dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  if (typeof updateModalCaptions === 'function') {
    updateModalCaptions();
  }
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });
}

setLanguage(currentLang);
fetchTranslation('en');
fetchTranslation('ar');

    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    const navbarLinks = document.getElementById('navbar-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuBtn && menuIcon && navbarLinks) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menuIcon.classList.toggle('active');
        navbarLinks.classList.toggle('active');
        document.body.style.overflow = navbarLinks.classList.contains('active') ? 'hidden' : 'auto';
      });

      document.addEventListener('click', (e) => {
        if (navbarLinks.classList.contains('active') && !navbarLinks.contains(e.target) && !menuBtn.contains(e.target)) {
          menuIcon.classList.remove('active');
          navbarLinks.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });

      navItems.forEach(item => {
        item.addEventListener('click', () => {
          menuIcon.classList.remove('active');
          navbarLinks.classList.remove('active');
          document.body.style.overflow = 'auto';
        });
      });
    }

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const headerFixed = document.querySelector('header.header-fixed');
    const trackedSections = document.querySelectorAll('section[id]');

    function updateScrollspy() {
      const scrollY = window.scrollY;
      const headerOffset = 160;
      let activeId = '';

      trackedSections.forEach(section => {
        const top = section.offsetTop - headerOffset;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          activeId = section.getAttribute('id');
        }
      });

      if (activeId) {
        navItems.forEach(item => {
          const href = item.getAttribute('href');
          if (href === `#${activeId}`) {
            item.classList.add('active');
          } else if (href && href.startsWith('#')) {
            item.classList.remove('active');
          }
        });
      }
    }

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (headerFixed) {
        if (scrollY > 40) {
          headerFixed.classList.add('header-scrolled');
        } else {
          headerFixed.classList.remove('header-scrolled');
        }
      }

      if (scrollTopBtn) {
        if (scrollY > 400) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      }

      updateScrollspy();
    }, { passive: true });

    updateScrollspy();

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    document.documentElement.classList.add('js-ready');

    function initScrollReveal() {
      const elementsToReveal = document.querySelectorAll(`
        #home .hero-text .hero-badge,
        #home .hero-text p.greeting,
        #home .hero-text h1,
        #home .hero-text h3,
        #home .hero-text p.small-resume,
        #home .hero-text .hero-actions,
        #home .hero-image,
        .section-tag,
        .about-header,
        .about-clean-container,
        .about-main-card,
        .skills-header,
        .skills-main-div,
        .projects-header,
        .projects-grid .project-card,
        #contact header,
        .contacts-bar .contact-strip-item,
        .contact-form-container
      `);

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px'
        });

        elementsToReveal.forEach(el => {
          el.classList.add('reveal-on-scroll');
          observer.observe(el);
        });
      } else {
        elementsToReveal.forEach(el => el.classList.add('in-view'));
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
      initScrollReveal();
    }
    async function handleFormSubmit(e) {
      e.preventDefault();
      const form = document.getElementById('contact-form');
      const submitBtn = document.getElementById('submit-btn');
      const feedback = document.getElementById('form-feedback');
      const feedbackText = feedback.querySelector('span');
      const feedbackIcon = feedback.querySelector('i');

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) return;

      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.75';
      const originalBtnHTML = submitBtn.innerHTML;
      const dict = translationsCache[currentLang];
      const sendingText = (dict && dict.contact_sending) || (currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...');
      submitBtn.innerHTML = `<span></span><span></span><span></span><span></span><i class="fa-solid fa-spinner fa-spin mr-2"></i> ${sendingText}`;

      feedback.classList.add('hidden');

      try {
        const response = await fetch('https://formsubmit.co/ajax/ahmed@mohamed-abdo.me', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `New Portfolio Message from ${name}`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json();

        if (response.ok || data.success === 'true' || data.success === true) {
          form.reset();
          feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base text-[var(--green)] bg-[#212121] border border-[var(--green)]/30';
          feedbackIcon.className = 'fa-solid fa-check-circle mr-2';
          feedbackText.textContent = (dict && dict.contact_feedback_success) || (currentLang === 'ar'
            ? 'شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.'
            : 'Thank you! Your message has been sent successfully. I will get back to you soon.');
          feedback.classList.remove('hidden');
        } else if (data.message && data.message.includes('Activation')) {
          form.reset();
          feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base text-yellow-300 bg-[#212121] border border-yellow-500/30';
          feedbackIcon.className = 'fa-solid fa-envelope mr-2';
          feedbackText.textContent = (dict && dict.contact_feedback_activation) || (currentLang === 'ar'
            ? 'تم إرسال رسالة تفعيل إلى البريد الإلكتروني. يرجى التحقق من صندوق الوارد والضغط على تفعيل.'
            : 'Activation email sent to ahmed@mohamed-abdo.me. Please check your inbox and click activate to enable direct messages.');
          feedback.classList.remove('hidden');
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base text-red-400 bg-[#212121] border border-red-500/30';
        feedbackIcon.className = 'fa-solid fa-circle-exclamation mr-2';
        feedbackText.textContent = (dict && dict.contact_feedback_error) || (currentLang === 'ar'
          ? 'تعذر إرسال الرسالة مباشرة. يُرجى مراسلتي عبر البريد ahmed@mohamed-abdo.me'
          : 'Unable to send message directly. Please contact me at ahmed@mohamed-abdo.me');
        feedback.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = originalBtnHTML;
      }
    }

    let currentScreenshotIdx = 1;
    const totalScreenshots = 5;
    const minshawiCaptionsEn = [
      "Home Screen (Dark Theme)",
      "Home Screen (Light Theme)",
      "Advanced Recitation Player",
      "Precision Memorization Looping (A-B)",
      "Custom Playlists & Favorites"
    ];

    function openScreenshotsModal(index = 1) {
      setScreenshot(index);
      document.getElementById('screenshotModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModalDirect() {
      document.getElementById('screenshotModal').classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function closeScreenshotsModal(e) {
      if (e.target.id === 'screenshotModal') {
        closeModalDirect();
      }
    }

    function setScreenshot(index) {
      currentScreenshotIdx = index;
      const img = document.getElementById('activeScreenshotImg');
      if (img) img.src = `assests/screenshot_${index}.png`;
      const dict = translationsCache[currentLang];
      const captions = (dict && dict.minshawi_captions) || minshawiCaptionsEn;
      const title = captions[index - 1] || `Screenshot ${index}`;
      const counterEl = document.getElementById('screenCounter');
      if (counterEl) {
        const separator = (dict && dict.modal_counter_of) || (currentLang === 'ar' ? 'من' : '/');
        counterEl.textContent = `${title} (${index} ${separator} ${totalScreenshots})`;
      }

      document.querySelectorAll('.thumb-item').forEach((thumb, idx) => {
        if (idx + 1 === index) {
          thumb.classList.add('border-[var(--green)]', 'scale-105');
          thumb.classList.remove('border-white/20');
        } else {
          thumb.classList.remove('border-[var(--green)]', 'scale-105');
          thumb.classList.add('border-white/20');
        }
      });
    }

    function nextScreenshot() {
      let next = currentScreenshotIdx + 1;
      if (next > totalScreenshots) next = 1;
      setScreenshot(next);
    }

    function prevScreenshot() {
      let prev = currentScreenshotIdx - 1;
      if (prev < 1) prev = totalScreenshots;
      setScreenshot(prev);
    }

    let currentEcomIdx = 1;
    const totalEcomScreens = 6;
    const ecomFiles = [
      'assests/ecommerce/01_home_dark.png',
      'assests/ecommerce/02_home_light.png',
      'assests/ecommerce/03_catalog_search.png',
      'assests/ecommerce/04_vendors_directory.png',
      'assests/ecommerce/05_cart_grouped.png',
      'assests/ecommerce/06_order_success.png'
    ];
    const ecomCaptionsEn = [
      "Home & Featured Vendors (Dark Mode)",
      "Home & Catalog (Light Material 3)",
      "Live Search & Filter Catalog",
      "Verified Vendor Storefront Directory",
      "Vendor-Grouped Cart with Subtotals",
      "Order Confirmation & Checkout Receipt"
    ];

    function openEcomModal(index = 1) {
      setEcomScreenshot(index);
      document.getElementById('ecomModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeEcomDirect() {
      document.getElementById('ecomModal').classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    function closeEcomModal(e) {
      if (e.target.id === 'ecomModal') {
        closeEcomDirect();
      }
    }

    function setEcomScreenshot(index) {
      currentEcomIdx = index;
      const img = document.getElementById('activeEcomImg');
      if (img) img.src = ecomFiles[index - 1];
      const dict = translationsCache[currentLang];
      const captions = (dict && dict.ecom_captions) || ecomCaptionsEn;
      const title = captions[index - 1] || `Screenshot ${index}`;
      const counterEl = document.getElementById('ecomCounter');
      if (counterEl) {
        const separator = (dict && dict.modal_counter_of) || (currentLang === 'ar' ? 'من' : '/');
        counterEl.textContent = `${title} (${index} ${separator} ${totalEcomScreens})`;
      }

      document.querySelectorAll('.ecom-thumb-item').forEach((thumb, idx) => {
        if (idx + 1 === index) {
          thumb.classList.add('border-[var(--green)]', 'scale-105');
          thumb.classList.remove('border-white/20');
        } else {
          thumb.classList.remove('border-[var(--green)]', 'scale-105');
          thumb.classList.add('border-white/20');
        }
      });
    }

    function updateModalCaptions() {
      const modal1 = document.getElementById('screenshotModal');
      if (modal1 && modal1.classList.contains('active')) {
        setScreenshot(currentScreenshotIdx);
      }
      const modal2 = document.getElementById('ecomModal');
      if (modal2 && modal2.classList.contains('active')) {
        setEcomScreenshot(currentEcomIdx);
      }
    }

    function nextEcomScreenshot() {
      let next = currentEcomIdx + 1;
      if (next > totalEcomScreens) next = 1;
      setEcomScreenshot(next);
    }

    function prevEcomScreenshot() {
      let prev = currentEcomIdx - 1;
      if (prev < 1) prev = totalEcomScreens;
      setEcomScreenshot(prev);
    }

    let touchStartX = 0;
    let touchStartY = 0;

    function handleTouchStart(e) {
      if (e.touches && e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }

    function handleTouchEnd(e, isEcom) {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          isEcom ? nextEcomScreenshot() : nextScreenshot();
        } else {
          isEcom ? prevEcomScreenshot() : prevScreenshot();
        }
      }
    }

    const minshawiModal = document.getElementById('screenshotModal');
    if (minshawiModal) {
      minshawiModal.addEventListener('touchstart', handleTouchStart, { passive: true });
      minshawiModal.addEventListener('touchend', (e) => handleTouchEnd(e, false), { passive: true });
    }

    const ecomModalElem = document.getElementById('ecomModal');
    if (ecomModalElem) {
      ecomModalElem.addEventListener('touchstart', handleTouchStart, { passive: true });
      ecomModalElem.addEventListener('touchend', (e) => handleTouchEnd(e, true), { passive: true });
    }

    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('screenshotModal');
      if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') closeModalDirect();
        if (e.key === 'ArrowRight') nextScreenshot();
        if (e.key === 'ArrowLeft') prevScreenshot();
      }
      const ecomModal = document.getElementById('ecomModal');
      if (ecomModal && ecomModal.classList.contains('active')) {
        if (e.key === 'Escape') closeEcomDirect();
        if (e.key === 'ArrowRight') nextEcomScreenshot();
        if (e.key === 'ArrowLeft') prevEcomScreenshot();
      }
    });

    (function initParticles() {
      const canvas = document.getElementById('tsparticles');
      const ctx = canvas.getContext('2d');

      let width, height;
      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      const particles = [];
      const particleCount = Math.floor(Math.min(window.innerWidth / 28, 40));

      const mouse = {
        x: null,
        y: null,
        radius: 140
      };

      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
      });

      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 1.2;
          this.vy = (Math.random() - 0.5) * 1.2;
          this.radius = Math.random() * 2 + 1;
          this.color = Math.random() > 0.4 ? '#b31b38' : '#ffffff';
          this.baseAlpha = Math.random() * 0.4 + 0.2;
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;

          if (this.x < 0) this.x = width;
          if (this.x > width) this.x = 0;
          if (this.y < 0) this.y = height;
          if (this.y > height) this.y = 0;
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
              const force = (mouse.radius - dist) / mouse.radius;
              const angle = Math.atan2(dy, dx);
              this.x -= Math.cos(angle) * force * 2;
              this.y -= Math.sin(angle) * force * 2;
            }
          }
        }

        draw() {
          const isLight = document.body.classList.contains('light-theme');
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? '#800020' : this.color;
          ctx.globalAlpha = isLight ? (this.baseAlpha * 0.45) : this.baseAlpha;
          ctx.fill();
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      function animate() {
        ctx.clearRect(0, 0, width, height);
        const isLight = document.body.classList.contains('light-theme');
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const maxDist = width < 768 ? 90 : 130;
            if (dist < maxDist) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = isLight ? '#800020' : '#b31b38';
              ctx.globalAlpha = (1 - dist / maxDist) * (isLight ? 0.12 : 0.22);
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
        particles.forEach(p => {
          p.update();
          p.draw();
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
      }

      animate();
    })();
