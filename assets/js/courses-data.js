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
  students: 0,
  lessons: 1,
  rating: 0,
  date: "2025-02-21",
  description: "استخراج وتنظيف وتحليل بيانات الأنشطة التجارية من جوجل ماب مباشرة. أداة ذكية تعمل بالكامل في متصفحك بدون خوادم. بيانات نظيفة + تحليل ذكي + تصدير Excel جاهز للاستخدام. وصول مدى الحياة + تحديثات مستمرة.",
  image: "og-image.png",  
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
}
  ];

  var categories = {
    "Business":     { color: "emerald" },
    "Marketing":    { color: "emerald" },
    "Design":       { color: "cyan"    },
    "Developer":    { color: "emerald" }
  };

  var WHATSAPP_NUMBER = "201556450850";
  var BRAND_NAME      = "Ai8V | Mind & Machine";
  var DOMAIN          = "ai8v.com";

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

      foundingYear: '2025'
    }
  });

})();

if (typeof window !== 'undefined') window.COURSE_DATA = COURSE_DATA;
