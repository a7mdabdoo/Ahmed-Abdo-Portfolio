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

const bundledTranslations = {
  ar: {
  "nav_home": "الرئيسية",
  "nav_about": "نبذة عني",
  "nav_skills": "الخبرات والمهارات",
  "nav_projects": "أعمالي ومشاريعي",
  "nav_contact": "تواصل معي",
  "nav_cv": "السيرة الذاتية",
  "hero_badge": "مهندس برمجيات | مطور تطبيقات جوال",
  "hero_greeting_prefix": "أهلاً بك",
  "hero_greeting_suffix": "، معك",
  "hero_name": "أحمد محمد عبده",
  "hero_subtitle": "مطور تطبيقات Flutter | مهندس واجهات أمامية و WordPress",
  "hero_desc": "طالب علوم الحاسب والذكاء الاصطناعي بجامعة جنوب الوادي الأهلية. متخصص في هندسة وبناء تطبيقات الجوال المتقدمة بمعمارية Clean Architecture، وشغوف بحل التحديات البرمجية المعقدة بالخوارزميات و ++C.",
  "hero_btn_contact": "تواصل معي",
  "hero_btn_cv": "تحميل السيرة الذاتية (CV)",
  "hero_status": "متاح للفرص الوظيفية والمشاريع",
  "about_badge": "نبذة عني",
  "about_title_1": "هندسة وبناء برمجيات متكاملة بمعمارية ",
  "about_title_2": "Clean Architecture",
  "about_lead_1": "أنا مهندس برمجيات و",
  "about_lead_2": "مطور تطبيقات Flutter",
  "about_lead_3": "، أدرس حالياً ",
  "about_lead_4": "علوم الحاسب والذكاء الاصطناعي",
  "about_lead_5": " بجامعة جنوب الوادي الأهلية (SVNU) بمصر.",
  "about_p2": "أؤمن بأن البرمجة الحقيقية تبدأ من فهم عميق للأسس الأكاديمية وربطها بالتنفيذ العملي المتقن؛ حيث أركز على تطوير تطبيقات جوال متعددة المنصات (Android & iOS) بأداء استثنائي وتصميم معماري نظيف (Clean Architecture)، مع إدارة محكمة للحالة عبر BLoC / Cubit، وتخزين أوفلاين ذكي (Hive NoSQL)، وكتابة خوارزميات عالية الكفاءة بلغة ++C.",
  "about_p3_prefix": "إلى جانب تطبيقات الجوال، أمتلك خبرة عملية في تصميم وتطوير مواقع ومنصات ووردبريس كاملة—أبرزها ",
  "about_p3_suffix": "—مع شغف دائم بالتطوير الذاتي وحل أكثر من 500 مسألة برمجية وخوارزمية على منصة Codeforces.",
  "about_metric_1": "علوم الحاسب والذكاء الاصطناعي",
  "about_metric_2": "مسألة محلولة (Codeforces ++C)",
  "about_metric_3": "<strong>Clean Architecture</strong> &bull; BLoC / Cubit",
  "about_metric_4": "<strong>مشاريع حية بالإنتاج</strong> &bull; الفجر و APKPure",
  "about_skills_heading": "أبرز المهارات والأدوات البرمجية:",
  "skills_badge": "ما أتقنه",
  "skills_title_1": "مجالات ",
  "skills_title_2": "خبرتي",
  "skills_card1_title": "تطوير تطبيقات الجوال والواجهات التفاعلية",
  "skills_card1_p1": "بناء تطبيقات هجينة متطورة وسريعة لنظامي Android و iOS باستخدام Flutter و Dart.",
  "skills_card1_p2": "تطبيق معمارية الكود النظيف (Clean Architecture) وفصل الطبقات مع BLoC و Cubit لإدارة مستقرة وقابلة للتوسع للحالة.",
  "skills_card1_p3": "ربط خدمات الصوت في الخلفية (Background Services)، وتخزين البيانات محلياً للعمل دون إنترنت، والتكامل التام مع REST APIs عبر Dio.",
  "skills_card1_p4": "تصميم حركات وتأثيرات انسيابية فائقة (60/120 إطاراً في الثانية)، مع خبرة كاملة في تجهيز ونشر التطبيقات للمتاجر والمنصات مثل APKPure.",
  "skills_card2_title": "البرمجة التنافسية وهندسة الخوارزميات بلغة ++C",
  "skills_card2_p1_prefix": "ممارس نشط لحل المسائل والتحديات البرمجية على منصة Codeforces (",
  "skills_card2_p1_suffix": ") برصيد يتجاوز 500 مسألة محلولة بكفاءة عالية.",
  "skills_card2_p2": "إتقان متقدم لهياكل البيانات المعقدة: Segment Trees، و Disjoint Set Union (DSU)، والأشجار، و Graphs، و Hash Maps.",
  "skills_card2_p3": "تطبيق أحدث الأنماط الخوارزمية: البرمجة الديناميكية (Dynamic Programming)، والمسارات (BFS/DFS, Dijkstra)، ونظرية الأعداد.",
  "skills_card2_p4": "تركيز استثنائي على كفاءة التنفيذ واستهلاك الذاكرة: كتابة كود بأمثل تعقيد زمني ممكن \\(\\mathcal{O}(N \\log N)\\) ومنطق برمجي خالٍ من الثغرات.",
  "skills_card3_title": "تطوير مواقع ووردبريس والمنصات التعليمية",
  "skills_card3_p1": "تطوير وبرمجة مواقع ووردبريس مخصصة بالكامل، وبناء قوالب برمجية خاصة، وهندسة أكاديميات ومنصات تعليمية إلكترونية متطورة.",
  "skills_card3_p2_prefix": "تصميم وتطوير وإطلاق ",
  "skills_card3_p2_suffix": ": منصة تعليمية إلكترونية متكاملة تعمل حالياً وتخدم طلاباً فعليين بكفاءة عالية.",
  "skills_card3_p3": "بناء المتاجر الإلكترونية عبر WooCommerce، وربط بوابات الدفع الإلكتروني، وأنظمة إدارة التعلم (LMS) ولوحات تحكم الطلاب.",
  "skills_card3_p4": "تحسين سرعة التصفح وتوافق محركات البحث (Technical & On-page SEO)، وحلول التخزين المؤقت وشبكات التوزيع السريع (CDN & Caching).",
  "projects_badge": "معرض الأعمال",
  "projects_title_1": "أبرز ",
  "projects_title_2": "المشاريع",
  "projects_subtitle": "نماذج لمشاريع حقيقية تم إطلاقها؛ تشمل تطبيقات جوال في الإنتاج، منصات تعليمية حية، وتحديات خوارزمية متقدمة.",
  "p1_category": "تطبيق جوال في الإنتاج",
  "p1_title": "جامع تلاوات المنشاوي",
  "p1_desc": "تطبيق قرآني متكامل ومبني بفلاتر لتلاوات الشيخ محمد صديق المنشاوي. يدعم الاستماع المستمر في الخلفية عبر audio_service، وتكرار الآيات والفقرات بدقة (A-B Repeat) للمساعدة على الحفظ، وتخزين التلاوات محلياً بـ Hive NoSQL، مع هندسة برمجية نظيفة Clean Architecture و Cubit.",
  "p1_btn_screens": "معاينة لقطات الشاشة (5)",
  "p2_category": "منصة تعليمية حية",
  "p2_title": "أكاديمية الفجر الإلكترونية",
  "p2_desc": "أكاديمية تعليمية متكاملة تعمل حالياً لخدمة طلاب حقيقيين. صُممت ببنية ووردبريس مخصصة مع نظام متجر متكامل (WooCommerce)، ولوحات متابعة المقررات، واختبارات تفاعلية، وسرعة استجابة فائقة مع تهيئة شاملة للسيو.",
  "p2_btn_visit": "معاينة المنصة مباشرة",
  "p3_category": "هندسة تطبيقات الجوال",
  "p3_title": "متجر إلكتروني متعدد التجار",
  "p3_desc": "تطبيق تجارة إلكترونية احترافي متعدد المتاجر مبني بـ Flutter وفق أعلى معايير الـ Clean Architecture. يشمل استعراض المتاجر والمنتجات، وإدارة سلة الشراء ومزامنتها عبر BLoC، وتوثيق دخول المستخدمين والتكامل مع REST APIs بواسطة مكتبة Dio.",
  "p3_btn_screens": "معاينة لقطات الشاشة (6)",
  "p4_category": "البرمجة التنافسية والخوارزميات",
  "p4_title": "الخوارزميات وحل المشكلات البرمجية",
  "p4_desc_prefix": "سجل تنافسي نشط في حل المسائل على منصة Codeforces (",
  "p4_desc_suffix": "). يضم أكثر من 500 مسألة محلولة بلغة ++C20 تغطي خوارزميات Graphs، البرمجة الديناميكية، Segment Trees، ونظرية الأعداد.",
  "p4_btn_profile": "الملف الشخصي على Codeforces",
  "contact_badge": "تواصل معي",
  "contact_title_1": "يسعدني ",
  "contact_title_2": "تواصلك",
  "contact_sub1": "جاهز لتحويل فكرتك إلى تطبيق أو مشروع حقيقي؟",
  "contact_sub2": "أرحب دائماً بمناقشة مشاريع تطبيقات الجوال، الفرص الوظيفية والتقنية، أو التعاون البرمجي المستقل.",
  "contact_lbl_email": "البريد الإلكتروني",
  "contact_lbl_whatsapp": "واتساب",
  "contact_lbl_codeforces": "كودفورسيز",
  "contact_lbl_resume": "السيرة الذاتية",
  "contact_val_download_cv": "تحميل الـ CV",
  "contact_form_heading": "أرسل رسالتك وسأتواصل معك في أقرب وقت",
  "contact_lbl_name": "الاسم الكريم",
  "ph_name": "أحمد محمد",
  "contact_lbl_email_field": "البريد الإلكتروني",
  "ph_email": "name@example.com",
  "contact_lbl_msg": "تفاصيل الرسالة أو المشروع",
  "ph_msg": "اكتب فكرة مشروعك، أو متطلبات العمل، أو أي استفسار ترغب في مناقشته...",
  "contact_btn_send": "إرسال الرسالة",
  "contact_success_msg": "شكراً لتواصلك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً جداً.",
  "footer_p_prefix": "صُمم ونُفّذ هذا الموقع بكل",
  "footer_p_suffix": "بواسطة أحمد محمد عبده",
  "modal_minshawi_subtitle": "تطبيق Flutter متكامل في الإنتاج",
  "modal_ecom_subtitle": "تطبيق متجر إلكتروني بمعمارية Clean Architecture",
  "modal_download_apk": "تحميل عبر APKPure",
  "modal_repo": "المستودع البرمجي على GitHub",
  "contact_sending": "جاري إرسال الرسالة...",
  "contact_feedback_success": "شكراً لتواصلك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً جداً.",
  "contact_feedback_activation": "تم إرسال رابط تأكيد إلى البريد الإلكتروني. يُرجى التحقق من صندوق الوارد والضغط على تفعيل.",
  "contact_feedback_error": "تعذر إرسال الرسالة تلقائياً. يُرجى مراسلتي مباشرة عبر البريد: ahmed@mohamed-abdo.me",
  "modal_counter_of": "من",
  "minshawi_captions": [
    "الواجهة الرئيسية (الوضع الداكن)",
    "الواجهة الرئيسية (الوضع الفاتح)",
    "مشغل التلاوات المتقدم وضبط الصوت",
    "خاصية تكرار المقاطع والحفظ (A-B Repeat)",
    "إدارة القوائم والتلاوات المفضلة"
  ],
  "ecom_captions": [
    "الصفحة الرئيسية واستعراض المتاجر (الداكن)",
    "تصفح الأقسام ودليل المنتجات (الفاتح)",
    "البحث السريع وتصفية التصنيفات",
    "دليل المتاجر وصفحات البائعين",
    "سلة المشتريات مجمعة حسب المتجر",
    "إتمام الطلب وتأكيد عملية الشراء"
  ],
  "p1_tab_title": "جامع تلاوات المنشاوي",
  "p2_tab_title": "أكاديمية الفجر",
  "p3_tab_title": "متجر إلكتروني",
  "p4_tab_title": "البرمجة التنافسية",
  "projects_nav_prev": "المشروع السابق",
  "projects_nav_next": "المشروع التالي",
  "projects_nav_hint": "استخدم الأسهم ← → للتنقل"
},
  en: {
  "nav_home": "Home",
  "nav_about": "About me",
  "nav_skills": "What I Do",
  "nav_projects": "Project",
  "nav_contact": "Contact",
  "nav_cv": "CV / Resume",
  "hero_badge": "Software Engineer & Mobile Specialist",
  "hero_greeting_prefix": "Hello",
  "hero_greeting_suffix": ", I'm",
  "hero_name": "Ahmed Mohamed Abdo",
  "hero_subtitle": "Flutter Developer | Front-End & WordPress Developer",
  "hero_desc": "Computer Science & Artificial Intelligence student at South Valley National University (SVNU), Egypt. Dedicated to engineering scalable mobile applications with Clean Architecture and algorithmic problem solving in C++.",
  "hero_btn_contact": "Contact",
  "hero_btn_cv": "Download CV",
  "hero_status": "Available for Tech Roles",
  "about_badge": "About Me",
  "about_title_1": "Building Scalable Mobile & Web Systems With ",
  "about_title_2": "Clean Architecture",
  "about_lead_1": "I'm a passionate ",
  "about_lead_2": "Flutter Developer",
  "about_lead_3": " and software engineer currently pursuing my degree in ",
  "about_lead_4": "Computer Science & Artificial Intelligence",
  "about_lead_5": " at South Valley National University (SVNU), Qena, Egypt.",
  "about_p2": "My engineering philosophy merges rigorous computer science theory with production-grade execution: developing scalable cross-platform mobile apps with <strong>Clean Architecture</strong>, modular BLoC/Cubit state management, offline-first caching (Hive), and high-performance algorithms in C++.",
  "about_p3_prefix": "Beyond mobile systems, I design and deploy full-stack <strong>WordPress platforms</strong>—most notably ",
  "about_p3_suffix": "—and actively solve algorithmic problems on Codeforces with <strong>500+ problems solved</strong>.",
  "about_metric_1": "Computer Science & AI",
  "about_metric_2": "Problems Solved (Codeforces C++)",
  "about_metric_3": "<strong>Clean Architecture</strong> &bull; BLoC / Cubit",
  "about_metric_4": "<strong>Production Deployments</strong> &bull; Alfjr & APKPure",
  "about_skills_heading": "Core Technical Stack & Tools:",
  "skills_badge": "My Capabilities",
  "skills_title_1": "What ",
  "skills_title_2": "I Do?",
  "skills_card1_title": "Mobile App & Front-End Development",
  "skills_card1_p1": "Building high-performance, cross-platform Android & iOS mobile apps using Flutter & Dart.",
  "skills_card1_p2": "Implementing Clean Architecture (Data, Domain, Presentation) with BLoC and Cubit for scalable state management.",
  "skills_card1_p3": "Integration of offline-first caching (Hive NoSQL), background audio services, REST APIs via Dio, and responsive UIs.",
  "skills_card1_p4": "Smooth 60/120 FPS animations, clean code standards, and production release to stores such as APKPure.",
  "skills_card2_title": "Competitive Programming & Algorithmic C++",
  "skills_card2_p1_prefix": "Active problem solver on Codeforces (",
  "skills_card2_p1_suffix": ") with 500+ solved algorithmic challenges.",
  "skills_card2_p2": "Deep mastery of Data Structures: Segment Trees, Disjoint Set Union (DSU), Trees, Graphs, and Hash Maps.",
  "skills_card2_p3": "Algorithmic paradigms: Dynamic Programming, Graph Traversal (BFS/DFS, Dijkstra), Greedy algorithms, and Number Theory.",
  "skills_card2_p4": "Obsession with asymptotic efficiency: writing optimal \\(\\mathcal{O}(N \\log N)\\) code, memory management, and bug-free logic.",
  "skills_card3_title": "WordPress Development & Web Platforms",
  "skills_card3_p1": "Full-cycle custom WordPress development, theme customization, and educational academy architectures.",
  "skills_card3_p2_prefix": "Architected and launched ",
  "skills_card3_p2_suffix": ": a fully operational e-learning academy.",
  "skills_card3_p3": "WooCommerce e-commerce store implementation, custom payment gateways, LMS setups, and student portals.",
  "skills_card3_p4": "On-page SEO optimization, responsive layout precision, caching, CDN delivery, and page speed tuning.",
  "projects_badge": "Featured Portfolio",
  "projects_title_1": "Featured ",
  "projects_title_2": "Projects",
  "projects_subtitle": "A selection of production-ready mobile apps, live web portals, and software engineering work.",
  "p1_category": "Production Mobile App",
  "p1_title": "جامع تلاوات المنشاوي (Al-Minshawi App)",
  "p1_desc": "High-performance Flutter Quran audio application dedicated to Sheikh Mohamed Siddiq El-Minshawi. Features seamless background audio playback (audio_service), precision A-B repeat looping, offline-first caching via Hive NoSQL, and Clean Architecture with Cubit.",
  "p1_btn_screens": "Browse Screenshots (5)",
  "p2_category": "Live E-Learning Platform",
  "p2_title": "Alfjr Academy (أكاديمية الفجر)",
  "p2_desc": "Full-scale educational platform deployed for real students. Built on custom WordPress architecture with WooCommerce integration, course dashboards, interactive assessments, high-speed caching, and complete on-page SEO optimization.",
  "p2_btn_visit": "Visit Live Platform",
  "p3_category": "Mobile Architecture",
  "p3_title": "Multi-Vendor E-Commerce App",
  "p3_desc": "Scalable mobile commerce client engineered with Flutter and strict Clean Architecture. Includes catalog browsing, category filtering, dynamic cart state management with BLoC, authentication flow, and robust REST API data integration with Dio.",
  "p3_btn_screens": "Browse Screenshots (6)",
  "p4_category": "Competitive Programming",
  "p4_title": "Algorithms & Problem Solving",
  "p4_desc_prefix": "Active competitive programming profile on Codeforces (",
  "p4_desc_suffix": "). Repository of 500+ solved algorithmic challenges in C++20 covering Graph Algorithms, Dynamic Programming, Segment Trees, and Number Theory.",
  "p4_btn_profile": "View Codeforces Profile",
  "contact_badge": "Let's Connect",
  "contact_title_1": "Get In ",
  "contact_title_2": "Touch",
  "contact_sub1": "Ready to get started on your project?",
  "contact_sub2": "Contact me now for mobile engineering opportunities, freelance collaborations, or algorithmic challenges.",
  "contact_lbl_email": "Email",
  "contact_lbl_whatsapp": "WhatsApp",
  "contact_lbl_codeforces": "Codeforces",
  "contact_lbl_resume": "Resume",
  "contact_val_download_cv": "Download CV",
  "contact_form_heading": "Send a message to get started",
  "contact_lbl_name": "Your Name",
  "ph_name": "Ahmed Mohamed",
  "contact_lbl_email_field": "Your Email Address",
  "ph_email": "name@example.com",
  "contact_lbl_msg": "Your Message",
  "ph_msg": "Describe your project, role, or collaboration inquiry...",
  "contact_btn_send": "Send Message",
  "contact_success_msg": "Thank you! Your message has been sent successfully.",
  "footer_p_prefix": "This website was made with",
  "footer_p_suffix": "by Ahmed Mohamed Abdo",
  "modal_minshawi_subtitle": "Production Flutter Mobile Application",
  "modal_ecom_subtitle": "Production-Grade Clean Architecture App",
  "modal_download_apk": "Download APKPure",
  "modal_repo": "Repository",
  "contact_sending": "Sending...",
  "contact_feedback_success": "Thank you! Your message has been sent successfully. I will get back to you soon.",
  "contact_feedback_activation": "Activation email sent to ahmed@mohamed-abdo.me. Please check your inbox and click activate to enable direct messages.",
  "contact_feedback_error": "Unable to send message directly. Please contact me at ahmed@mohamed-abdo.me",
  "modal_counter_of": "/",
  "minshawi_captions": [
    "Home Screen (Dark Theme)",
    "Home Screen (Light Theme)",
    "Advanced Recitation Player",
    "Precision Memorization Looping (A-B)",
    "Custom Playlists & Favorites"
  ],
  "ecom_captions": [
    "Home & Featured Vendors (Dark Mode)",
    "Home & Catalog (Light Material 3)",
    "Live Search & Filter Catalog",
    "Verified Vendor Storefront Directory",
    "Vendor-Grouped Cart with Subtotals",
    "Order Confirmation & Checkout Receipt"
  ],
  "p1_tab_title": "Al-Minshawi Quran",
  "p2_tab_title": "Alfjr Academy",
  "p3_tab_title": "E-Commerce App",
  "p4_tab_title": "Algorithms & C++",
  "projects_nav_prev": "Previous Project",
  "projects_nav_next": "Next Project",
  "projects_nav_hint": "Use ← → arrow keys"
}
};

const translationsCache = {
  ar: bundledTranslations.ar,
  en: bundledTranslations.en
};

let currentLang = localStorage.getItem('lang') || 'en';

async function fetchTranslation(lang) {
  try {
    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    translationsCache[lang] = data;
    return data;
  } catch (err) {
    return translationsCache[lang] || bundledTranslations[lang] || null;
  }
}

function applyTranslations(dict) {
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

function setLanguage(lang) {
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

  const dict = translationsCache[currentLang] || bundledTranslations[currentLang];
  applyTranslations(dict);

  fetchTranslation(currentLang).then(freshDict => {
    if (freshDict) applyTranslations(freshDict);
  });
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
        document.body.style.overflow = navbarLinks.classList.contains('active') ? 'hidden' : '';
      });

      document.addEventListener('click', (e) => {
        if (navbarLinks.classList.contains('active') && !navbarLinks.contains(e.target) && !menuBtn.contains(e.target)) {
          menuIcon.classList.remove('active');
          navbarLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      });

      navItems.forEach(item => {
        item.addEventListener('click', () => {
          menuIcon.classList.remove('active');
          navbarLinks.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const headerFixed = document.querySelector('header.header-fixed');
    const trackedSections = document.querySelectorAll('section[id]');

    function updateScrollspy() {
      const scrollY = window.scrollY;
      const headerOffset = 110;
      let activeId = '';

      trackedSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY - headerOffset;
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
          feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base form-feedback-alert feedback-success';
          feedbackIcon.className = 'fa-solid fa-check-circle mr-2';
          feedbackText.textContent = (dict && dict.contact_feedback_success) || (currentLang === 'ar'
            ? 'شكراً لك! تم استلام رسالتك بنجاح وسأتواصل معك قريباً.'
            : 'Thank you! Your message has been sent successfully. I will get back to you soon.');
          feedback.classList.remove('hidden');
        } else if (data.message && data.message.includes('Activation')) {
          form.reset();
          feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base form-feedback-alert feedback-warning';
          feedbackIcon.className = 'fa-solid fa-envelope mr-2';
          feedbackText.textContent = (dict && dict.contact_feedback_activation) || (currentLang === 'ar'
            ? 'تم إرسال رسالة تفعيل إلى البريد الإلكتروني. يرجى التحقق من صندوق الوارد والضغط على تفعيل.'
            : 'Activation email sent to ahmed@mohamed-abdo.me. Please check your inbox and click activate to enable direct messages.');
          feedback.classList.remove('hidden');
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        feedback.className = 'mt-4 p-4 rounded-xl text-center font-semibold text-base form-feedback-alert feedback-error';
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
      document.body.style.overflow = '';
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
      document.body.style.overflow = '';
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

    
    let currentProjectIdx = 0;
    const totalProjects = 4;

    function goToProject(index) {
      if (index < 0) index = totalProjects - 1;
      if (index >= totalProjects) index = 0;
      currentProjectIdx = index;

      document.querySelectorAll('.project-tab-btn').forEach((btn, idx) => {
        const isActive = idx === index;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      document.querySelectorAll('.project-panel').forEach((panel, idx) => {
        panel.classList.toggle('active', idx === index);
      });

      document.querySelectorAll('.project-dots .dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });

      const counterEl = document.getElementById('projectIndexCounter');
      if (counterEl) {
        const curSpan = counterEl.querySelector('.current');
        if (curSpan) curSpan.textContent = String(index + 1).padStart(2, '0');
      }

      const activeTab = document.querySelector(`.project-tab-btn[data-project-idx="${index}"]`);
      if (activeTab && typeof activeTab.scrollIntoView === 'function') {
        activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    function nextProject() {
      goToProject(currentProjectIdx + 1);
    }

    function prevProject() {
      goToProject(currentProjectIdx - 1);
    }

    document.querySelectorAll('.project-tab-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = Number(this.getAttribute('data-project-idx'));
        if (!isNaN(idx)) goToProject(idx);
      });
    });

    document.querySelectorAll('.project-dots .dot').forEach(dot => {
      dot.addEventListener('click', function() {
        const idx = Number(this.getAttribute('data-dot-idx'));
        if (!isNaN(idx)) goToProject(idx);
      });
    });

    const projPrevBtn = document.getElementById('projPrevBtn');
    const projNextBtn = document.getElementById('projNextBtn');
    if (projPrevBtn) projPrevBtn.addEventListener('click', prevProject);
    if (projNextBtn) projNextBtn.addEventListener('click', nextProject);

    const showcaseEl = document.getElementById('projectsShowcase');
    if (showcaseEl) {
      let touchStartX = 0;
      let touchStartY = 0;
      showcaseEl.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      showcaseEl.addEventListener('touchend', (e) => {
        if (!e.changedTouches || e.changedTouches.length === 0) return;
        const diffX = touchStartX - e.changedTouches[0].clientX;
        const diffY = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
          const isRtl = document.body.getAttribute('dir') === 'rtl' || document.body.classList.contains('rtl-mode');
          if (diffX > 0) {
            if (isRtl) prevProject();
            else nextProject();
          } else {
            if (isRtl) nextProject();
            else prevProject();
          }
        }
      }, { passive: true });
    }

window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('screenshotModal');
      const isModalActive = modal && modal.classList.contains('active');
      if (isModalActive) {
        if (e.key === 'Escape') closeModalDirect();
        if (e.key === 'ArrowRight') nextScreenshot();
        if (e.key === 'ArrowLeft') prevScreenshot();
        return;
      }
      const ecomModal = document.getElementById('ecomModal');
      const isEcomActive = ecomModal && ecomModal.classList.contains('active');
      if (isEcomActive) {
        if (e.key === 'Escape') closeEcomDirect();
        if (e.key === 'ArrowRight') nextEcomScreenshot();
        if (e.key === 'ArrowLeft') prevEcomScreenshot();
        return;
      }

      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      const isRtl = document.body.getAttribute('dir') === 'rtl' || document.body.classList.contains('rtl-mode');
      if (e.key === 'ArrowRight') {
        if (isRtl) prevProject();
        else nextProject();
      } else if (e.key === 'ArrowLeft') {
        if (isRtl) nextProject();
        else prevProject();
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
