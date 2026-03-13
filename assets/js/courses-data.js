'use strict';

var COURSE_DATA = (function () {

  function deepFreeze(o) {
    if (o === null || typeof o !== 'object') return o;
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (p) {
      var v = o[p];
      if (v !== null && typeof v === 'object' && !Object.isFrozen(v)) deepFreeze(v);
    });
    return o;
  }

  var sharedObjectives = [
    "Understand core concepts and foundational principles",
    "Apply practical techniques through hands-on exercises",
    "Build real-world projects from scratch",
    "Master industry-standard tools and workflows",
    "Develop problem-solving skills for complex scenarios",
    "Prepare for professional certification exams"
  ];

  var sharedCurriculum = [
    {
      title: "Getting Started",
      lessons: [
        { title: "Course Introduction & Overview", duration: "05:30", preview: true },
        { title: "Setting Up Your Environment",    duration: "12:00", preview: true },
        { title: "Understanding Key Terminology",  duration: "08:45", preview: false }
      ]
    },
    {
      title: "Core Concepts",
      lessons: [
        { title: "Fundamental Principles Explained",      duration: "15:20", preview: false },
        { title: "Working with Essential Tools",          duration: "18:00", preview: false },
        { title: "Practical Application Exercise",        duration: "22:10", preview: false },
        { title: "Common Mistakes and How to Avoid Them", duration: "10:30", preview: false }
      ]
    },
    {
      title: "Advanced Techniques",
      lessons: [
        { title: "Deep Dive into Advanced Features", duration: "20:00", preview: false },
        { title: "Real-World Case Study",            duration: "25:15", preview: false },
        { title: "Performance Optimization Tips",    duration: "14:40", preview: false }
      ]
    },
    {
      title: "Final Project & Wrap-Up",
      lessons: [
        { title: "Project Requirements & Planning", duration: "08:00", preview: false },
        { title: "Building the Final Project",      duration: "35:00", preview: false },
        { title: "Course Summary & Next Steps",     duration: "06:20", preview: true  }
      ]
    }
  ];

  var sharedFaq = [
    {
      question: "Do I need prior experience to take this course?",
      answer: "This depends on the course level. Beginner courses require no prior experience, while Intermediate and Advanced courses assume foundational knowledge in the subject area."
    },
    {
      question: "How long do I have access to the course materials?",
      answer: "Once purchased, you have lifetime access to all course materials including future updates and additions."
    },
    {
      question: "Is there a certificate upon completion?",
      answer: "Yes, you will receive a certificate of completion that you can share on your professional profiles."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course, contact us via WhatsApp for a full refund."
    },
    {
      question: "How do I access the course after purchase?",
      answer: "After confirming your payment via WhatsApp, you will receive access credentials to use on the course page."
    }
  ];

  var courses = [
    {
      id: 1,
      title: "DataMap Pro — Business Data Intelligence",
      category: "Marketing",
      level: "Beginner",
      price: 49.00,
      originalPrice: 99.00,                          // ← الإضافة الوحيدة
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2025-02-21",
      language: "ar",
      description: "استخراج وتنظيف وتحليل بيانات الأنشطة التجارية من جوجل ماب مباشرة. أداة ذكية تعمل بالكامل في متصفحك بدون خوادم. بيانات نظيفة + تحليل ذكي + تصدير Excel جاهز للاستخدام. وصول مدى الحياة + تحديثات مستمرة.",
      image: "dg-image.png",
      instructor: "DataMap Team",
      tags: ["data", "business", "google maps", "excel", "analytics"],
      driveUrl: "",
      learningObjectives: [
        "استخراج بيانات أنشطة تجارية من جوجل ماب مباشرة",
        "تنظيف البيانات وكشف التكرارات تلقائياً",
        "تحليل البيانات مع رسوم بيانية وتقارير",
        "تصدير البيانات بصيغ متعددة (Excel/CSV)",
        "استخدام الاستنتاجات الذكية لفهم السوق",
        "بناء قائمة عملاء مؤهلين جاهزة للبيع"
      ],
      curriculum: [
        {
          title: "البدء السريع",
          lessons: [
            { title: "مقدمة الأداة والمميزات", duration: "03:00", preview: true },
            { title: "خطوات الاستخراج الأول", duration: "05:00", preview: true },
            { title: "الإعدادات الأساسية", duration: "04:00", preview: false }
          ]
        },
        {
          title: "التنظيف والتحليل",
          lessons: [
            { title: "فهم التكرارات والدمج", duration: "08:00", preview: false },
            { title: "الفلاتر والبحث المتقدم", duration: "10:00", preview: false },
            { title: "الرسوم البيانية والتقارير", duration: "07:00", preview: false }
          ]
        },
        {
          title: "التصدير والاستخدام",
          lessons: [
            { title: "تصدير Excel/CSV", duration: "05:00", preview: false },
            { title: "استخدام البيانات في التسويق", duration: "06:00", preview: false }
          ]
        }
      ],
      faq: [
        {
          question: "هل الأداة حقاً مجانية أم في تكاليف مخفية؟",
          answer: "49 دولار سنويا = كل شيء. لا تكاليف إضافية. الوصول مدى الحياة والتحديثات مستمرة."
        },
        {
          question: "كم بيانات أقدر أستخرج؟",
          answer: "بدون حد. الأداة تحمل ملايين السجلات. الحد الوحيد هو حجم ملف الاستيراد (50MB أقصى)."
        },
        {
          question: "البيانات آمنة؟",
          answer: "100% آمنة. الأداة تعمل بالكامل في متصفحك. لا خوادم، لا تحميل سحابي. بيانات حساسة تبقى عندك."
        },
        {
          question: "أقدر أستخدمها بدون إنترنت؟",
          answer: "بعد التحميل الأول نعم. الأداة PWA — تعمل offline بالكامل عبر Service Worker."
        },
        {
          question: "في نسخة تجريبية؟",
          answer: "نعم، جرّب الأداة مجاناً للمدينة الأولى. بدون بطاقة ائتمان. كل شيء متاح."
        },
        {
          question: "كام عميل دفع بالفعل؟",
          answer: "أنت أول العملاء! 🎉 الأداة جديدة وقيمتها عالية جداً. كن من الأول."
        }
      ]
    },
    {
      id: 2,
      title: "CourseBase — Your Course Website Platform",
      category: "Business",
      level: "Beginner",
      price: 399.00,
      students: 0,
      lessons: 1,
      rating: 0,
      date: "2026-02-23",
      language: "ar",
      description: "منصة كورسات كاملة جاهزة للإطلاق — موقع احترافي باسمك ودومينك الخاص. تحصل على الكود الكامل + دليل تنفيذ خطوة بخطوة. بدون اشتراكات شهرية، بدون نسبة من مبيعاتك، بدون أي تكاليف تشغيل. استضافة مجانية على Cloudflare + نظام حماية محتوى متكامل + نظام تقييمات + تصميم احترافي داكن. كل الأرباح ليك 100%.",
      image: "co-image.png",
      instructor: "Ai8V Team",
      tags: ["website", "course platform", "business", "cloudflare", "Google Apps", "bootstrap", "white-label", "sell courses"],
      driveUrl: "",
      learningObjectives: [
        "الحصول على منصة كورسات كاملة جاهزة للتخصيص والإطلاق",
        "ربط المنصة بدومينك الخاص واستضافة مجانية على Cloudflare",
        "إعداد نظام حماية المحتوى المدفوع (Worker + Apps Script + Google Sheets)",
        "تخصيص الهوية البصرية — الاسم والألوان والشعار والوصف من ملف واحد",
        "إدارة الطلاب والكورسات يدوياً بدون أي تكاليف تشغيل",
        "إطلاق موقعك بالكامل — من الدومين للنشر على Cloudflare Pages"
      ],
      curriculum: [
        {
          title: "ملفات المشروع والتجهيز",
          lessons: [
            { title: "محتويات الحزمة — كل اللي هتحصل عليه", duration: "05:00", preview: true },
            { title: "المتطلبات — حساب GitHub + Cloudflare + Google (كلهم مجاناً)", duration: "03:00", preview: true },
            { title: "هيكل الملفات وشرح كل مجلد", duration: "08:00", preview: false }
          ]
        },
        {
          title: "التخصيص — خلّي المنصة باسمك",
          lessons: [
            { title: "تعديل بيانات الكورسات — الاسم والدومين والواتساب والوصف", duration: "10:00", preview: false },
            { title: "تغيير الألوان والشعار والصور", duration: "07:00", preview: false },
            { title: "إضافة كورساتك الخاصة — البيانات والمنهج والأسئلة", duration: "12:00", preview: false },
            { title: "تعديل صفحات About والسياسات باسم مشروعك", duration: "06:00", preview: false }
          ]
        },
        {
          title: "الباك إند — نظام الحماية والتقييمات",
          lessons: [
            { title: "إنشاء ملف اكسيل بسيط  لإدارة الطلبة المسجلين", duration: "05:00", preview: false },
            { title: " ربط الـ باك إند بالـ Sheet", duration: "08:00", preview: false },
            { title: "إعداد Cloudflare Worker — الأسرار والمتغيرات والروابط", duration: "10:00", preview: false },
            { title: "اختبار نظام الدخول والتقييمات", duration: "06:00", preview: false }
          ]
        },
        {
          title: "النشر والإطلاق",
          lessons: [
            { title: "رفع المشروع على GitHub", duration: "04:00", preview: false },
            { title: "ربط GitHub بـ Cloudflare Pages", duration: "05:00", preview: false },
            { title: "إعداد الدومين الخاص وشهادة SSL", duration: "06:00", preview: false },
            { title: "اختبار الموقع بالكامل قبل الإطلاق", duration: "05:00", preview: false }
          ]
        },
        {
          title: "إدارة المنصة بعد الإطلاق",
          lessons: [
            { title: "إضافة طالب جديد — للـ Sheet", duration: "04:00", preview: false },
            { title: "إضافة كورس جديد وتحديث المحتوى", duration: "06:00", preview: false },
            { title: "التعامل مع المشاكل الشائعة وحلولها", duration: "05:00", preview: false }
          ]
        }
      ],
      faq: [
        {
          question: "إيه اللي هحصل عليه بالظبط؟",
          answer: "كود المشروع الكامل + كود Cloudflare Worker + كود Google Apps + دليل تنفيذ تفصيلي خطوة بخطوة. كل حاجة تحتاجها لإطلاق منصتك."
        },
        {
          question: "محتاج خبرة برمجة؟",
          answer: "لا. الدليل مصمم لأي حد يقدر يستخدم الكمبيوتر. كل خطوة موضحة بالتفصيل. التخصيص الأساسي هو تعديل ملف واحد فيه بياناتك."
        },
        {
          question: "فيه تكاليف شهرية أو مخفية؟",
          answer: "صفر. الاستضافة مجانية على Cloudflare. الباك إند مجاني على Google Apps. التكلفة الوحيدة هي الدومين (حوالي $10-15 سنوياً) — وده اختيارك أنت."
        },
        {
          question: "هتاخدوا نسبة من مبيعاتي؟",
          answer: "لا. المنصة ملكك 100%. كل الأرباح ليك. بتبيع بالسعر اللي أنت عايزه وبتقبض الفلوس مباشرة."
        },
        {
          question: "أقدر أبيع كورسات بأي سعر؟",
          answer: "أيوا. مفيش حد أدنى أو أقصى. أنت بتحدد أسعارك بالكامل."
        },
        {
          question: "أقدر أضيف كام كورس؟",
          answer: "بدون حد. تضيف كورسات في ملف البيانات وكل حاجة بتتحدث تلقائياً — الكتالوج والصفحة الرئيسية والفلاتر."
        },
        {
          question: "لو واجهتني مشكلة في التنفيذ؟",
          answer: "تواصل معانا على واتساب. هنساعدك توصل لحل لأي مشكلة تقنية تواجهك."
        },
        {
          question: "المنصة بتدعم عربي وإنجليزي؟",
          answer: "أيوا. المنصة بتدعم المحتوى العربي والإنجليزي . تقدر تضيف كورسات بأي لغة."
        }
      ]
    },
    /*
    {
      id: 3,
      title: "Nutrition Basics - Healthy Living Made Simple",
      category: "Health",
      level: "Intermediate",
      price: 19.99,
      students: 120,
      lessons: 13,
      rating: 3,
      date: "2025-05-03",
      language: "en",
      description: "Understand nutrition principles and create healthy meal plans.",
      image: "example.png",
      instructor: "Maria Garcia",
      tags: ["nutrition", "diet", "health"],
      driveUrl: "",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    },
    {
      id: 4,
      title: "Network Mastery - Advanced IT Skills",
      category: "IT",
      level: "Advanced",
      price: 99.00,
      students: 800,
      lessons: 13,
      rating: 4,
      date: "2025-03-18",
      language: "en",
      description: "Master advanced networking concepts and become an IT professional.",
      image: "example.png",
      instructor: "Michael Chen",
      tags: ["networking", "it", "technology"],
      driveUrl: "",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    },
    {
      id: 5,
      title: "Digital Marketing Fundamentals",
      category: "Marketing",
      level: "Beginner",
      price: 0.00,
      students: 60,
      lessons: 13,
      rating: 2,
      date: "2024-12-01",
      language: "en",
      description: "Learn the basics of digital marketing and online advertising.",
      image: "example.png",
      instructor: "Alex Johnson",
      tags: ["marketing", "digital", "advertising"],
      driveUrl: "https://docs.google.com/document/d/1uq6g64ZqdSfhB5kldtXjT6_vuI30BPYdJK4-ceQqWeA/edit?usp=drive_link",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    },
    {
      id: 6,
      title: "Mobile Photography Masterclass",
      category: "Photography",
      level: "Beginner",
      price: 39.00,
      students: 1200,
      lessons: 13,
      rating: 5,
      date: "2025-08-05",
      language: "en",
      description: "Create stunning photos with just your smartphone.",
      image: "example.png",
      instructor: "Lisa Park",
      tags: ["photography", "mobile", "creativity"],
      driveUrl: "",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    },
    {
      id: 7,
      title: "Color Theory for Designers",
      category: "Design",
      level: "Beginner",
      price: 9.00,
      students: 20,
      lessons: 13,
      rating: 1,
      date: "2024-10-11",
      language: "en",
      description: "Understand color principles and create harmonious designs.",
      image: "example.png",
      instructor: "David Kim",
      tags: ["design", "color", "theory"],
      driveUrl: "",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    },
    {
      id: 8,
      title: "JavaScript Essentials - Modern Development",
      category: "Developer",
      level: "Intermediate",
      price: 29.00,
      students: 340,
      lessons: 13,
      rating: 4,
      date: "2025-01-22",
      language: "en",
      description: "Master JavaScript fundamentals and modern ES6+ features.",
      image: "example.png",
      instructor: "Emma Watson",
      tags: ["javascript", "programming", "web-development"],
      driveUrl: "",
      learningObjectives: sharedObjectives,
      curriculum: sharedCurriculum,
      faq: sharedFaq
    }
    */
  ];

  var categories = {
    "Business":     { color: "teal" },
    "Marketing":    { color: "emerald" },
/*    "Photography":  { color: "teal"    },
    "Health":       { color: "teal"    },
    "IT":           { color: "cyan"    },
    "Design":       { color: "cyan"    },*/
    "Developer":    { color: "emerald" }
  };

  var WHATSAPP_NUMBER = "201556450850";
  var BRAND_NAME      = "Ai8V | Mind & Machine";
  var DOMAIN          = "ai8v.com";

  // Auto-derive lessons count from curriculum before freezing
  courses.forEach(function (c) {
    if (c.curriculum && c.curriculum.length) {
      c.lessons = c.curriculum.reduce(function (sum, section) {
        return sum + (section.lessons ? section.lessons.length : 0);
      }, 0);
    }
  });

  return deepFreeze({
    courses:         courses,
    categories:      categories,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    BRAND_NAME:      BRAND_NAME,
    DOMAIN:          DOMAIN,

    META: {
      tagline: 'Ai8V | Where Mind Meets Machine',

      description: 'نؤمن أن الذكاء الاصطناعي ليس أداة دعم، بل شريك استراتيجي يعيد تعريف طريقة التنفيذ واتخاذ القرار. ' +
                   'في Ai8V نعيد هندسة العلاقة بين الإنسان والآلة، بحيث يقود الإنسان الرؤية، وتُسرّع النماذج الذكية الأداء — ' +
                   'لنصل معًا إلى مستوى جديد من الكفاءة والابتكار.',

      descriptionShort: 'في Ai8V نعيد هندسة العلاقة بين الإنسان والآلة — ' +
                        'كورسات متخصصة في الذكاء الاصطناعي بوصول مدى الحياة ودعم شخصي.',

      ogImage:      '/assets/img/og-image.png',

      supportEmail: 'amr.omar304@gmail.com',

      foundingYear: '2025',

      whatsappDefaultMessage: 'مرحباً! عندي سؤال عن الكورسات.',

      logoPath: '/assets/img/fav180.png',

      legalLastUpdated: '2026-02-20',
      chatBotName:        'مساعد الكورس',
      chatWelcomeMessage: 'مرحباً! أنا هنا عشان أساعدك بأي سؤال عن الكورس. اسألني أي حاجة!',
      chatPlaceholder:    'اكتب سؤالك هنا...',
      chatErrorMessage:   'حصل مشكلة في الاتصال. جرّب تاني.'
    }
  });

})();

if (typeof window !== 'undefined') window.COURSE_DATA = COURSE_DATA;

