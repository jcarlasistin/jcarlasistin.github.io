/* =========================================================
   EDIT THIS FILE ONLY — everything on the site comes from here.
   ========================================================= */

window.PORTFOLIO = {
  name: "Jcarl Asistin",                      // shows in the nav + hero
  role: "AI Video Editor",
  headline: "Ads that stop thumbs and sell products.",
  intro:
    "I'm an AI video editor who turns one product into dozens of scroll-stopping ads: singing ads, 3D Pixar-style animation, AI dramas, UGC and long-form VSLs. Each one is built with multiple hooks, so you find your winner fast.",
  email: "jcarlasistin23@gmail.com",
  whatsapp: "https://wa.me/639387217202",  // international format: country code, no + or leading 0
  instagram: "",                          // full URL, or leave ""
  linkedin: "",                           // full URL, or leave ""
  available: true,                        // shows the green "Available for work" badge
};

/*  HOW TO ADD AN AD
    1. Put the video in the  videos/  folder (e.g. videos/my-ad.mp4)
       — or use a YouTube / Vimeo link in `embed` instead.
    2. Copy one block below, paste it at the TOP of the list, fill it in.

    Fields:
      title        name of the ad
      client       brand / client (or "Spec" for spec work)
      category     ONE of the filter buttons, e.g. "3D Animation", "Sitcom", "Song Ad", "UGC", "Product"
      video        path to an .mp4 in videos/   (optional if you use embed)
      embed        YouTube or Vimeo URL           (optional)
      poster       thumbnail image path           (optional — first frame is used if blank)
      format       "9:16", "1:1", "4:5" or "16:9"
      tools        list of tools you used
      description  one or two lines about the idea / result
      year         year made
      featured     true = bigger card at the top
      signature    true = puts the ad in the "Signature Work" section (your best ads)
      section      id of a section from SECTIONS below, e.g. "singing" (puts the ad there)
      preview      short silent clip that plays on hover (optional)
      length       running time shown on the card, e.g. "3:32" (optional)
*/

/*  SECTIONS — each one becomes its own part of the website (with a menu link).
    To make a new one, copy a block and give it a new id. */
window.SECTIONS = [
  {
    id: "singing",
    title: "Singing Ads",
    nav: "Singing",
    eyebrow: "♪ Original songs, fully animated",
    intro: "Story-driven song ads with 3D characters. The lyrics carry the problem, the product and the call to action, so people watch to the end.",
  },
  {
    id: "ugc",
    title: "UGC Ads",
    nav: "UGC",
    eyebrow: "● Real-feel creators, made with AI",
    intro: "Talking-to-camera ads that feel like a real customer sharing what worked, cut with 3D explainer shots that show how the product works.",
  },
  {
    id: "clay",
    title: "Claymation Ads",
    nav: "Claymation",
    eyebrow: "✦ Stop-motion style, made with AI",
    intro: "Handmade-looking clay worlds that feel warm and different in the feed. Every frame looks sculpted, so people stop and watch.",
  },
];

window.ADS = [
  {
    title: "The Aged One",
    client: "Health supplement",
    category: "3D Animation",
    signature: true,
    video: "videos/signature/sig-1.mp4",
    preview: "videos/signature/sig-1-preview.mp4",
    poster: "videos/signature/sig-1.jpg",
    format: "9:16",
    length: "7:48",
    tools: [],
    description: "A long-form 3D animated family story with an original chimp cast. The product lives inside the story, so it plays like a short film, not an ad.",
    year: 2026,
  },
  {
    title: "168 Over 104",
    client: "Health supplement",
    category: "AI Drama",
    signature: true,
    video: "videos/signature/sig-2.mp4",
    preview: "videos/signature/sig-2-preview.mp4",
    poster: "videos/signature/sig-2.jpg",
    format: "9:16",
    length: "4:59",
    tools: [],
    description: "Photoreal AI drama: a doctor's warning, a blood-pressure scare and friends who've got his back. Real emotion, built entirely with AI.",
    year: 2026,
  },
  {
    title: "Two Years of Showing Up",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-1.mp4",
    preview: "videos/singing/singing-1-preview.mp4",
    poster: "videos/singing/singing-1.jpg",
    format: "9:16",
    length: "3:32",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "15 Years Younger",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-2.mp4",
    preview: "videos/singing/singing-2-preview.mp4",
    poster: "videos/singing/singing-2.jpg",
    format: "9:16",
    length: "8:14",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Back on the Clock",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-3.mp4",
    preview: "videos/singing/singing-3-preview.mp4",
    poster: "videos/singing/singing-3.jpg",
    format: "9:16",
    length: "4:07",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Back at 151",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-4.mp4",
    preview: "videos/singing/singing-4-preview.mp4",
    poster: "videos/singing/singing-4.jpg",
    format: "9:16",
    length: "3:39",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Stuck for Years",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-5.mp4",
    preview: "videos/singing/singing-5-preview.mp4",
    poster: "videos/singing/singing-5.jpg",
    format: "9:16",
    length: "3:24",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Same Gym",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-6.mp4",
    preview: "videos/singing/singing-6-preview.mp4",
    poster: "videos/singing/singing-6.jpg",
    format: "9:16",
    length: "3:39",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Fair Warning",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-7.mp4",
    preview: "videos/singing/singing-7-preview.mp4",
    poster: "videos/singing/singing-7.jpg",
    format: "9:16",
    length: "2:53",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Back Your Drive",
    client: "Health supplement",
    category: "Singing Ad",
    section: "singing",
    video: "videos/singing/singing-8.mp4",
    preview: "videos/singing/singing-8-preview.mp4",
    poster: "videos/singing/singing-8.jpg",
    format: "9:16",
    length: "3:49",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Stopped Drinking Beer",
    client: "Health supplement",
    category: "UGC",
    section: "ugc",
    video: "videos/ugc/ugc-1.mp4",
    preview: "videos/ugc/ugc-1-preview.mp4",
    poster: "videos/ugc/ugc-1.jpg",
    format: "9:16",
    length: "2:16",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Reading Hasn't Moved",
    client: "Health supplement",
    category: "UGC",
    section: "ugc",
    video: "videos/ugc/ugc-2.mp4",
    preview: "videos/ugc/ugc-2-preview.mp4",
    poster: "videos/ugc/ugc-2.jpg",
    format: "9:16",
    length: "3:23",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Grab Yourself Some",
    client: "Health supplement",
    category: "UGC",
    section: "ugc",
    video: "videos/ugc/ugc-3.mp4",
    preview: "videos/ugc/ugc-3-preview.mp4",
    poster: "videos/ugc/ugc-3.jpg",
    format: "9:16",
    length: "2:50",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Across 1,600 People",
    client: "Health supplement",
    category: "UGC",
    section: "ugc",
    video: "videos/ugc/ugc-4.mp4",
    preview: "videos/ugc/ugc-4-preview.mp4",
    poster: "videos/ugc/ugc-4.jpg",
    format: "9:16",
    length: "9:09",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "Permanent Numbness",
    client: "Health supplement",
    category: "Claymation",
    section: "clay",
    video: "videos/clay/clay-1.mp4",
    preview: "videos/clay/clay-1-preview.mp4",
    poster: "videos/clay/clay-1.jpg",
    format: "9:16",
    length: "1:20",
    tools: [],
    description: "",
    year: 2026,
  },
  {
    title: "True Ceylon",
    client: "Health supplement",
    category: "Claymation",
    section: "clay",
    video: "videos/clay/clay-2.mp4",
    preview: "videos/clay/clay-2-preview.mp4",
    poster: "videos/clay/clay-2.jpg",
    format: "9:16",
    length: "2:38",
    tools: [],
    description: "",
    year: 2026,
  },
];
