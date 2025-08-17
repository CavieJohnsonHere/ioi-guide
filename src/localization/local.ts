export const localization = {
  en: {
    dir: "ltr",
    local: new Map<string, string>([
      // localization for page names on the sidebar
      ["page-getting-started", "Getting Started"],
      ["page-about-combinatorics", "About Combinatorics"],
      ["page-rule-of-product", "Rule of Product"],

      // localization for the home page
      ["hp-desc", "The easiest way to learn Combinatorics, made by passionate teachers, for passionate learners."],
      ["hp-start-learning", "Start Learning."],
      ["hp-see-whats-up", "See What's Up"],

      // other localization that is not related to any particular article
      ["info-loading", "Loading..."],
    ]),
  },

  fa: {
    dir: "rtl",
    local: new Map<string, string>([
      // localization for page names on the sidebar
      ["page-getting-started", "شروع یادگیری"],
      ["page-about-combinatorics", "درباره ترکیبیات"],
      ["page-rule-of-product", "اصل ضرب"],

      // localization for the home page
      ["hp-desc", "راحت‌ترین روش برای یادگیری ترکیبیات؛ نوشته شده توسط معلم‌های پرشور برای یادگیرندگان پرشور."],
      ["hp-start-learning", "یادگیری رو شروع کن"],
      ["hp-see-whats-up", "ببین چه خبره"],
      
      // other localization that is not related to any particular article
      ["info-loading", "در حال بارگذاری..."],
    ]),
  },
};
