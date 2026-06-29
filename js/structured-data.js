// =============================
// structured-data.js
// Optional structured data enhancements
// =============================

const structuredData = {

  // Additional schema for specific posts
  posts: {

    "growth-areas": {
      faq: [
        {
          question: "What are growth areas?",
          answer:
            "Growth areas are a personal system for deliberately focusing on a small number of areas of life that feel most valuable to improve."
        },
        {
          question: "How many growth areas should you have?",
          answer:
            "For me, three areas provides enough variety to stay motivated without becoming overwhelming."
        }
      ]
    },

    "sourdough-bread": {
      faq: [
        {
          question: "Can overproofed sourdough be saved?",
          answer:
            "Yes. Instead of baking it as a traditional loaf, overproofed dough can often be successfully turned into focaccia."
        }
      ]
    },

    "sourdough-starter": {
      faq: [
        {
          question: "How long does a sourdough starter take to make?",
          answer:
            "A new sourdough starter typically takes around one to two weeks to become active and reliable."
        }
      ]
    }

  },

  // Additional schema for updates
  updates: {

    "75-soft-update-2": {
      faq: [
        {
          question: "Should you quit a challenge after an injury?",
          answer:
            "Not necessarily. It can be more useful to preserve the objective while adapting the implementation."
        },
        {
          question: "Does breaking a streak mean failure?",
          answer:
            "No. Breaking a streak can provide useful information and opportunities to adapt rather than representing failure."
        }
      ]
    },

    "kombucha-update-1": {
      faq: [
        {
          question: "Why didn't my kombucha grow a SCOBY?",
          answer:
            "Possible causes include poor quality starter liquid, low temperatures, or contamination."
        }
      ]
    }

  }

};

// Node export for build.js
if (typeof module !== "undefined") {
  module.exports = structuredData;
}