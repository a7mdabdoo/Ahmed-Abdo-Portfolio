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

/* ==========================================================================
   Internationalization (i18n) - English & Arabic
   ========================================================================== */
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About me",
    nav_skills: "What I Do",
    nav_projects: "Project",
    nav_contact: "Contact",
    nav_cv: "CV / Resume",

    hero_badge: "Software Engineer & Mobile Specialist",
    hero_greeting_prefix: "Hello",
    hero_greeting_suffix: ", I'm",
    hero_name: "Ahmed Mohamed Abdo",
    hero_subtitle: "Flutter Developer | Front-End & WordPress Developer",
    hero_desc: "Computer Science & Artificial Intelligence student at South Valley National University (SVNU), Egypt. Dedicated to engineering scalable mobile applications with Clean Architecture and algorithmic problem solving in C++.",
    hero_btn_contact: "Contact",
    hero_btn_cv: "Download CV",
    hero_status: "Available for Tech Roles",

    about_badge: "About Me",
    about_title_1: "Building Scalable Mobile & Web Systems With ",
    about_title_2: "Clean Architecture",
    about_lead_1: "I'm a passionate ",
    about_lead_2: "Flutter Developer",
    about_lead_3: " and software engineer currently pursuing my degree in ",
    about_lead_4: "Computer Science & Artificial Intelligence",
    about_lead_5: " at South Valley National University (SVNU), Qena, Egypt.",
    about_p2: "My engineering philosophy merges rigorous computer science theory with production-grade execution: developing scalable cross-platform mobile apps with <strong>Clean Architecture</strong>, modular BLoC/Cubit state management, offline-first caching (Hive), and high-performance algorithms in C++.",
    about_p3_prefix: "Beyond mobile systems, I design and deploy full-stack <strong>WordPress platforms</strong>—most notably ",
    about_p3_suffix: "—and actively solve algorithmic problems on Codeforces with <strong>500+ problems solved</strong>.",
    about_metric_1: "Computer Science & AI",
    about_metric_2: "Problems Solved (Codeforces C++)",
    about_metric_3: "<strong>Clean Architecture</strong> &bull; BLoC / Cubit",
    about_metric_4: "<strong>Production Deployments</strong> &bull; Alfjr & APKPure",
    about_skills_heading: "Core Technical Stack & Tools:",

    skills_badge: "My Capabilities",
    skills_title_1: "What ",
    skills_title_2: "I Do?",
    skills_card1_title: "Mobile App & Front-End Development",
    skills_card1_p1: "Building high-performance, cross-platform Android & iOS mobile apps using Flutter & Dart.",
    skills_card1_p2: "Implementing Clean Architecture (Data, Domain, Presentation) with BLoC and Cubit for scalable state management.",
    skills_card1_p3: "Integration of offline-first caching (Hive NoSQL), background audio services, REST APIs via Dio, and responsive UIs.",
    skills_card1_p4: "Smooth 60/120 FPS animations, clean code standards, and production release to stores such as APKPure.",

    skills_card2_title: "Competitive Programming & Algorithmic C++",
    skills_card2_p1_prefix: "Active problem solver on Codeforces (",
    skills_card2_p1_suffix: ") with 500+ solved algorithmic challenges.",
    skills_card2_p2: "Deep mastery of Data Structures: Segment Trees, Disjoint Set Union (DSU), Trees, Graphs, and Hash Maps.",
    skills_card2_p3: "Algorithmic paradigms: Dynamic Programming, Graph Traversal (BFS/DFS, Dijkstra), Greedy algorithms, and Number Theory.",
    skills_card2_p4: "Obsession with asymptotic efficiency: writing optimal \\(\\mathcal{O}(N \\log N)\\) code, memory management, and bug-free logic.",

    skills_card3_title: "WordPress Development & Web Platforms",
    skills_card3_p1: "Full-cycle custom WordPress development, theme customization, and educational academy architectures.",
    skills_card3_p2_prefix: "Architected and launched ",
    skills_card3_p2_suffix: ": a fully operational e-learning academy.",
    skills_card3_p3: "WooCommerce e-commerce store implementation, custom payment gateways, LMS setups, and student portals.",
    skills_card3_p4: "On-page SEO optimization, responsive layout precision, caching, CDN delivery, and page speed tuning.",

    projects_badge: "Featured Portfolio",
    projects_title_1: "Featured ",
    projects_title_2: "Projects",
    projects_subtitle: "A selection of production-ready mobile apps, live web portals, and software engineering work.",

    p1_category: "Production Mobile App",
    p1_title: "جامع تلاوات المنشاوي (Al-Minshawi App)",
    p1_desc: "High-performance Flutter Quran audio application dedicated to Sheikh Mohamed Siddiq El-Minshawi. Features seamless background audio playback (audio_service), precision A-B repeat looping, offline-first caching via Hive NoSQL, and Clean Architecture with Cubit.",
    p1_btn_screens: "Browse Screenshots (5)",

    p2_category: "Live E-Learning Platform",
    p2_title: "Alfjr Academy (أكاديمية الفجر)",
    p2_desc: "Full-scale educational platform deployed for real students. Built on custom WordPress architecture with WooCommerce integration, course dashboards, interactive assessments, high-speed caching, and complete on-page SEO optimization.",
    p2_btn_visit: "Visit Live Platform",

    p3_category: "Mobile Architecture",
    p3_title: "Multi-Vendor E-Commerce App",
    p3_desc: "Scalable mobile commerce client engineered with Flutter and strict Clean Architecture. Includes catalog browsing, category filtering, dynamic cart state management with BLoC, authentication flow, and robust REST API data integration with Dio.",
    p3_btn_screens: "Browse Screenshots (6)",

    p4_category: "Competitive Programming",
    p4_title: "Algorithms & Problem Solving",
    p4_desc_prefix: "Active competitive programming profile on Codeforces (",
    p4_desc_suffix: "). Repository of 500+ solved algorithmic challenges in C++20 covering Graph Algorithms, Dynamic Programming, Segment Trees, and Number Theory.",
    p4_btn_profile: "View Codeforces Profile",

    contact_badge: "Let's Connect",
    contact_title_1: "Get In ",
    contact_title_2: "Touch",
    contact_sub1: "Ready to get started on your project?",
    contact_sub2: "Contact me now for mobile engineering opportunities, freelance collaborations, or algorithmic challenges.",
    contact_lbl_email: "Email",
    contact_lbl_whatsapp: "WhatsApp",
    contact_lbl_codeforces: "Codeforces",
    contact_lbl_resume: "Resume",
    contact_val_download_cv: "Download CV",

    contact_form_heading: "Send a message to get started",
    contact_lbl_name: "Your Name",
    ph_name: "Ahmed Mohamed",
    contact_lbl_email_field: "Your Email Address",
    ph_email: "name@example.com",
    contact_lbl_msg: "Your Message",
    ph_msg: "Describe your project, role, or collaboration inquiry...",
    contact_btn_send: "Send Message",
    contact_success_msg: "Thank you! Your message has been sent successfully.",

    footer_p_prefix: "This website was made with",
    footer_p_suffix: "by Ahmed Mohamed Abdo",

    modal_minshawi_subtitle: "Production Flutter Mobile Application",
    modal_ecom_subtitle: "Production-Grade Clean Architecture App",
    modal_download_apk: "Download APKPure",
    modal_repo: "Repository"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "مجالات خبرتي",
    nav_projects: "المشاريع",
    nav_contact: "تواصل معي",
    nav_cv: "السيرة الذاتية",

    hero_badge: "مهندس برمجيات ومطور تطبيقات جوال",
    hero_greeting_prefix: "مرحباً",
    hero_greeting_suffix: "، أنا",
    hero_name: "أحمد محمد عبده",
    hero_subtitle: "مطور فلاتر | مطور واجهات أمامية وووردبريس",
    hero_desc: "طالب علوم الحاسب والذكاء الاصطناعي بجامعة جنوب الوادي الأهلية، مصر. متخصص في تطوير تطبيقات الجوال القابلة للتوسع باستخدام Clean Architecture وحل المسائل الخوارزمية بلغة ++C.",
    hero_btn_contact: "تواصل معي",
    hero_btn_cv: "تحميل السيرة الذاتية",
    hero_status: "متاح لفرص العمل والمشاريع",

    about_badge: "نبذة عني",
    about_title_1: "بناء تطبيقات وأنظمة ويب قابلة للتوسع بـ ",
    about_title_2: "Clean Architecture",
    about_lead_1: "أنا مهندس برمجيات و",
    about_lead_2: "مطور فلاتر",
    about_lead_3: " شغوف، أدرس حالياً ",
    about_lead_4: "علوم الحاسب والذكاء الاصطناعي",
    about_lead_5: " بجامعة جنوب الوادي الأهلية (SVNU)، قنا، مصر.",
    about_p2: "تعتمد فلسفتي الهندسية على دمج علوم الحاسب الأكاديمية الصارمة مع معايير الإنتاج الاحترافية: تطوير تطبيقات جوال هجينة عالية الأداء باستخدام <strong>Clean Architecture</strong>، وإدارة الحالة المرنة عبر BLoC / Cubit، والتخزين المحلي دون إنترنت (Hive NoSQL)، وتصميم الخوارزميات الفعالة بلغة ++C.",
    about_p3_prefix: "إلى جانب أنظمة الجوال، أصمم وأنشر منصات ووردبريس متكاملة—أبرزها ",
    about_p3_suffix: "—كما أحل المسائل الخوارزمية بنشاط على منصة Codeforces بأكثر من 500 مسألة تم حلها بنجاح.",
    about_metric_1: "علوم الحاسب والذكاء الاصطناعي",
    about_metric_2: "مسألة محلولة (كودفورسيز ++C)",
    about_metric_3: "<strong>Clean Architecture</strong> &bull; BLoC / Cubit",
    about_metric_4: "<strong>مشاريع في الإنتاج</strong> &bull; الفجر و APKPure",
    about_skills_heading: "التقنيات والأدوات الأساسية:",

    skills_badge: "قدراتي التقنية",
    skills_title_1: "ماذا ",
    skills_title_2: "أقدم؟",
    skills_card1_title: "تطوير تطبيقات الجوال والواجهات الأمامية",
    skills_card1_p1: "بناء تطبيقات عالية الأداء تعمل على Android و iOS باستخدام Flutter و Dart.",
    skills_card1_p2: "تطبيق معمارية الكود النظيف (Clean Architecture) وفصل الطبقات مع BLoC و Cubit لإدارة مرنة ومستقرة للحالة.",
    skills_card1_p3: "دمج قواعد البيانات المحلية (Hive NoSQL) للعمل دون إنترنت، خدمات الصوت بالخلفية، واجهات برمجة التطبيقات (REST APIs) عبر Dio، وتصاميم عصرية متجاوبة.",
    skills_card1_p4: "أنيميشن فائق السلاسة (60/120 إطاراً بالثانية)، معايير كود نظيفة، وخبرة نشر التطبيقات على المتاجر ومنصات مثل APKPure.",

    skills_card2_title: "البرمجة التنافسية وحل المشكلات بلغة ++C",
    skills_card2_p1_prefix: "ممارس نشط لحل المشكلات على منصة كودفورسيز (",
    skills_card2_p1_suffix: ") بأكثر من 500 مسألة خوارزمية تم حلها.",
    skills_card2_p2: "إتقان متقدم لهياكل البيانات المعقدة: Segment Trees، و Disjoint Set Union (DSU)، والأشجار، والرسوم البيانية (Graphs)، وجداول الهاش.",
    skills_card2_p3: "نماذج خوارزمية متقدمة: البرمجة الديناميكية (Dynamic Programming)، والبحث في الرسوم البيانية (BFS/DFS, Dijkstra)، والخوارزميات الجشعة (Greedy)، ونظرية الأعداد.",
    skills_card2_p4: "اهتمام دقيق بالكفاءة الزمنية والمكانية: كتابة كود بأمثل تعقيد حسابي O(N log N)، وإدارة استهلاك الذاكرة، ومنطق خالٍ تماماً من الأخطاء.",

    skills_card3_title: "تطوير مواقع ووردبريس والمنصات التعليمية",
    skills_card3_p1: "تطوير شامل ومخصص لمواقع ووردبريس، وتخصيص القوالب البرمجية، وهندسة الأكاديميات التعليمية الإلكترونية.",
    skills_card3_p2_prefix: "تصميم وتطوير وإطلاق ",
    skills_card3_p2_suffix: ": منصة تعليمية إلكترونية متكاملة تخدم طلاباً حقيقيين بفاعلية.",
    skills_card3_p3: "إنشاء متاجر إلكترونية عبر WooCommerce، وربط بوابات الدفع الإلكتروني، وأنظمة إدارة التعلم (LMS) ولوحات تحكم الطلاب.",
    skills_card3_p4: "تحسين محركات البحث الداخلي (On-page SEO)، ودقة التصاميم المتجاوبة، وحلول التخزين المؤقت وشبكات CDN لسرعة تصفح فائقة.",

    projects_badge: "معرض الأعمال المختار",
    projects_title_1: "المشاريع ",
    projects_title_2: "المميزة",
    projects_subtitle: "مجموعة مختارة من تطبيقات الجوال الجاهزة للإنتاج، والمنصات الحية، وأعمال الهندسة البرمجية.",

    p1_category: "تطبيق جوال في الإنتاج",
    p1_title: "جامع تلاوات المنشاوي (Al-Minshawi App)",
    p1_desc: "تطبيق قرآني متطور بلغة Flutter مخصص لتلاوات الشيخ محمد صديق المنشاوي. يتميز بتشغيل الصوت المستمر في الخلفية (audio_service)، وتكرار الآيات والفقرات بدقة (A-B Repeat)، والتخزين المحلي دون إنترنت (Hive NoSQL)، وتطبيق Clean Architecture مع Cubit.",
    p1_btn_screens: "معاينة لقطات الشاشة (5)",

    p2_category: "منصة تعليمية إلكترونية حية",
    p2_title: "أكاديمية الفجر (Alfjr Academy)",
    p2_desc: "منصة تعليمية إلكترونية شاملة مبنية لخدمة طلاب فعليين. طُوّرت ببنية ووردبريس مخصصة مع متجر WooCommerce، ولوحات تحكم للمقررات، واختبارات تفاعلية، وسرعة استجابة استثنائية مع سيو متكامل.",
    p2_btn_visit: "زيارة المنصة الحية",

    p3_category: "معمارية تطبيقات جوال",
    p3_title: "تطبيق متجر إلكتروني متعدد التجار",
    p3_desc: "تطبيق تجارة إلكترونية متكامل ومبني بفلاتر وأعلى معايير الـ Clean Architecture. يتضمن تصفح المنتجات وتصنيفها، وإدارة سلة الشراء التفاعلية عبر BLoC، وتوثيق المستخدمين وربط REST APIs بواسطة Dio.",
    p3_btn_screens: "معاينة لقطات الشاشة (6)",

    p4_category: "البرمجة التنافسية",
    p4_title: "الخوارزميات وحل المشكلات",
    p4_desc_prefix: "ملف نشط للبرمجة التنافسية على كودفورسيز (",
    p4_desc_suffix: "). مستودع يضم أكثر من 500 مسألة محلولة بلغة ++C20 تغطي خوارزميات الرسوم البيانية، والبرمجة الديناميكية، وSegment Trees، ونظرية الأعداد.",
    p4_btn_profile: "عرض الملف على Codeforces",

    contact_badge: "تواصل معي",
    contact_title_1: "دعنا ",
    contact_title_2: "نتحدث",
    contact_sub1: "هل أنت جاهز لبدء مشروعك القادم؟",
    contact_sub2: "تواصل معي الآن لمناقشة فرص العمل في تطوير الجوال، أو التعاون في المشاريع البرمجية الحرة، أو التحديات الخوارزمية.",
    contact_lbl_email: "البريد الإلكتروني",
    contact_lbl_whatsapp: "واتساب",
    contact_lbl_codeforces: "كودفورسيز",
    contact_lbl_resume: "السيرة الذاتية",
    contact_val_download_cv: "تحميل السيرة الذاتية",

    contact_form_heading: "أرسل رسالة للبدء مباشرة",
    contact_lbl_name: "الاسم الكريم",
    ph_name: "أحمد محمد",
    contact_lbl_email_field: "البريد الإلكتروني",
    ph_email: "name@example.com",
    contact_lbl_msg: "رسالتك",
    ph_msg: "اكتب تفاصيل مشروعك أو استفسارك هنا...",
    contact_btn_send: "إرسال الرسالة",
    contact_success_msg: "شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.",

    footer_p_prefix: "تم تصميم وتطوير هذا الموقع بكل",
    footer_p_suffix: "بواسطة أحمد محمد عبده",

    modal_minshawi_subtitle: "تطبيق جوال فلاتر جاهز للإنتاج",
    modal_ecom_subtitle: "تطبيق فلاتر احترافي بـ Clean Architecture",
    modal_download_apk: "تحميل من APKPure",
    modal_repo: "المستودع البرمجي"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = (lang === 'ar') ? 'ar' : 'en';
  localStorage.setItem('lang', currentLang);
  document.documentElement.setAttribute('lang', currentLang);

  const isRtl = currentLang === 'ar';
  if (isRtl) {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.classList.add('rtl-mode');
    document.body.classList.add('rtl-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
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

  const dict = translations[currentLang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<')) {
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

// Initialize language on script run
setLanguage(currentLang);

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
      submitBtn.innerHTML = '<span></span><span></span><span></span><span></span><i class="fa-solid fa-spinner fa-spin mr-2"></i> Sending...';

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
          feedbackText.textContent = currentLang === 'ar'
            ? 'شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.'
            : 'Thank you! Your message has been sent successfully. I will get back to you soon.';
          feedback.classList.remove('hidden');
        } else if (data.message && data.message.includes('Activation')) {
          form.reset();
          feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base text-yellow-300 bg-[#212121] border border-yellow-500/30';
          feedbackIcon.className = 'fa-solid fa-envelope mr-2';
          feedbackText.textContent = currentLang === 'ar'
            ? 'تم إرسال رسالة تفعيل إلى البريد الإلكتروني. يرجى التحقق من صندوق الوارد والضغط على تفعيل.'
            : 'Activation email sent to ahmed@mohamed-abdo.me. Please check your inbox and click activate to enable direct messages.';
          feedback.classList.remove('hidden');
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base text-red-400 bg-[#212121] border border-red-500/30';
        feedbackIcon.className = 'fa-solid fa-circle-exclamation mr-2';
        feedbackText.textContent = currentLang === 'ar'
          ? 'تعذر إرسال الرسالة مباشرة. يُرجى مراسلتي عبر البريد ahmed@mohamed-abdo.me'
          : 'Unable to send message directly. Please contact me at ahmed@mohamed-abdo.me';
        feedback.classList.remove('hidden');
      } finally {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.innerHTML = originalBtnHTML;
      }
    }

    let currentScreenshotIdx = 1;
    const totalScreenshots = 5;
    const minshawiCaptionsAr = [
      "الرئيسية (الوضع الليلي)",
      "الرئيسية (الوضع النهاري)",
      "مشغل التلاوات المتقدم",
      "تكرار الحفظ (A-B Repeat)",
      "قوائم التشغيل المخصصة"
    ];
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
      const captions = currentLang === 'ar' ? minshawiCaptionsAr : minshawiCaptionsEn;
      const title = captions[index - 1] || `Screenshot ${index}`;
      const counterEl = document.getElementById('screenCounter');
      if (counterEl) {
        counterEl.textContent = currentLang === 'ar'
          ? `${title} (${index} من ${totalScreenshots})`
          : `${title} (${index}/${totalScreenshots})`;
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
    const ecomCaptionsAr = [
      "الرئيسية والمتاجر المميزة (الوضع الليلي)",
      "الرئيسية ودليل المنتجات (الوضع النهاري)",
      "البحث المباشر وتصفية الفئات",
      "دليل المتاجر المعتمدة للبائعين",
      "سلة الشراء المصنفة حسب المتجر",
      "تأكيد الطلب وإيصال الدفع"
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
      const captions = currentLang === 'ar' ? ecomCaptionsAr : ecomCaptionsEn;
      const title = captions[index - 1] || `Screenshot ${index}`;
      const counterEl = document.getElementById('ecomCounter');
      if (counterEl) {
        counterEl.textContent = currentLang === 'ar'
          ? `${title} (${index} من ${totalEcomScreens})`
          : `${title} (${index}/${totalEcomScreens})`;
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

    // Touch swipe support for modals
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
          this.color = Math.random() > 0.4 ? '#8b5cf6' : '#ffffff';
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
          ctx.fillStyle = isLight ? '#7c3aed' : this.color;
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
              ctx.strokeStyle = isLight ? '#7c3aed' : '#8b5cf6';
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
