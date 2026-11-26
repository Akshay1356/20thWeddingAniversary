/**
 * Central Configuration File for M. Prakash & P. Anitha 20th Wedding Anniversary Celebration
 * "நூறு வருஷம்" (Nooru Varusham)
 * 
 * Easily change photo placements, captions, letter content, and milestones here.
 */

export interface PhotoItem {
  id: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'landscape' | 'portrait' | 'square';
  category: 'early_days' | 'couple' | 'family' | 'travel' | 'celebration' | 'spiritual';
  role: string[];
  caption: string;
  tag: string;
}

export const ANNIVERSARY_CONFIG = {
  couple: {
    husband: "M. Prakash",
    wife: "P. Anitha",
    weddingDate: "27 November 2006",
    anniversaryDate: "27 November 2026",
    milestoneYears: 20,
    tamilTheme: "நூறு வருஷம்",
    tamilThemeSubtitle: "Nooru Varusham",
    tamilBlessing: "இனிய திருமண நாள் வாழ்த்துகள்!",
    englishTagline: "Twenty years down, a lifetime to go.",
    sonTitle: "A surprise from your son",
  },

  audio: {
    title: "Nooru Varusham",
    src: "/audio/nooru-varusham.mp3",
    subtitle: "A melody of eternal love and hundred years of togetherness",
  },

  milestones: [
    {
      value: 20,
      suffix: "",
      label: "Beautiful Years",
      tamilLabel: "இருபது ஆண்டுகள்",
      description: "Two decades of unconditional love, laughter and shared dreams",
    },
    {
      value: 240,
      suffix: "",
      label: "Wonderful Months",
      tamilLabel: "இருநூற்று நாற்பது மாதங்கள்",
      description: "Walking hand in hand through every season of life",
    },
    {
      value: 7305,
      suffix: "+",
      label: "Days Together",
      tamilLabel: "ஏழாயிரத்து முந்நூறு நாட்கள்",
      description: "Days filled with kindness, companionship and mutual respect",
    },
    {
      value: 100,
      suffix: "%",
      label: "Countless Memories",
      tamilLabel: "எண்ணற்ற நினைவுகள்",
      description: "A treasure chest of unforgettable adventures and smiles",
    },
  ],

  letter: {
    heading: "A Little Letter for Amma & Appa",
    salutation: "Dear Amma and Appa,",
    paragraphs: [
      "Happy 20th Wedding Anniversary!",
      "Thank you for all the love, happiness and memories you've given me. Everything you do for our family means more to me than I can ever put into words.",
      "Today is a celebration not just of twenty years of marriage, but of the beautiful family and life you've built together.",
      "I hope the coming years bring you even more happiness, laughter, good health and unforgettable memories.",
      "Love you both so much.",
      "Happy Anniversary!",
    ],
    signoff: "With lots of love,",
    author: "Your Son",
  },

  // Curated photo references for specific sections
  heroPhotoId: "photo-26-couple-himachal-portrait",
  heroSecondaryPhotoId: "photo-02-couple-temple-garlands",
  
  thenAndNow: {
    thenId: "photo-08-couple-early-ferry",
    nowId: "photo-26-couple-himachal-portrait",
    altThenId: "photo-09-couple-coastal-fort",
    altNowId: "photo-02-couple-temple-garlands",
    quote: "Twenty years later, still writing your beautiful story together.",
  },

  whereItAllBegan: [
    "photo-08-couple-early-ferry",
    "photo-09-couple-coastal-fort",
    "photo-07-amma-early-flight",
    "photo-10-appa-in-flight-smile",
  ],

  familySection: {
    mainPhotoId: "photo-22-grand-family-wedding-stage",
    journeyPhotos: [
      "photo-11-appa-baby-car-roof",
      "photo-12-amma-baby-bridge-wind",
      "photo-13-amma-baby-sea-waves",
      "photo-15-family-kerala-houseboat",
      "photo-16-family-lush-garden",
      "photo-17-family-wooden-cottage",
      "photo-18-family-delhi-jama-masjid",
      "photo-21-amma-son-qutub-minar",
    ],
    quote: "Your greatest legacy isn't just the years you've spent together, but the love, happiness and memories you've given us along the way.",
  },

  grandFinale: {
    celebrationPhotoId: "photo-22-grand-family-wedding-stage",
    couplePhotoId: "photo-26-couple-himachal-portrait",
    title: "20 Years of Love. Here's to a Hundred More.",
    tamilTitle: "நூறு வருஷம்",
    tamilBlessing: "இனிய திருமண நாள் வாழ்த்துகள்!",
    tagline: "Happy Anniversary, Amma & Appa!",
  },

  photos: [
  {
    "id": "photo-01-appa-murugan-temple",
    "src": "/images/photo-01-appa-murugan-temple.jpg",
    "width": 1200,
    "height": 1600,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "spiritual",
    "role": [
      "gallery"
    ],
    "caption": "Appa seeking blessings at Thiruparankundram Murugan Temple in traditional veshti",
    "tag": "Spiritual Grace"
  },
  {
    "id": "photo-02-couple-temple-garlands",
    "src": "/images/photo-02-couple-temple-garlands.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "couple",
    "role": [
      "hero_candidate",
      "gallery",
      "then_and_now_now"
    ],
    "caption": "Amma & Appa garlanded with divine blessings outside the sanctum",
    "tag": "Sacred Blessings"
  },
  {
    "id": "photo-03-couple-anniversary-doorway",
    "src": "/images/photo-03-couple-anniversary-doorway.jpg",
    "width": 727,
    "height": 1599,
    "aspectRatio": 0.455,
    "orientation": "portrait",
    "category": "couple",
    "role": [
      "gallery",
      "couple"
    ],
    "caption": "Standing united in grace \u2014 rose and marigold garlands celebrating their bond",
    "tag": "Two Decades Together"
  },
  {
    "id": "photo-04-amma-navaratri-golu",
    "src": "/images/photo-04-amma-navaratri-golu.jpg",
    "width": 1200,
    "height": 1600,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "celebration",
    "role": [
      "gallery"
    ],
    "caption": "Amma illuminating the home in front of the festive Navaratri Golu",
    "tag": "Home & Tradition"
  },
  {
    "id": "photo-05-amma-pooja-prasadam",
    "src": "/images/photo-05-amma-pooja-prasadam.jpg",
    "width": 1156,
    "height": 867,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "celebration",
    "role": [
      "gallery"
    ],
    "caption": "Amma preparing sacred offerings and sweet festive feasts with unconditional love",
    "tag": "Festive Devotion"
  },
  {
    "id": "photo-06-family-temple-night",
    "src": "/images/photo-06-family-temple-night.jpg",
    "width": 1040,
    "height": 780,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Generations together on a peaceful temple evening under glowing temple spires",
    "tag": "Generations of Love"
  },
  {
    "id": "photo-07-amma-early-flight",
    "src": "/images/photo-07-amma-early-flight.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "early_days",
    "role": [
      "where_it_all_began",
      "gallery"
    ],
    "caption": "Amma with fresh jasmine blossoms on an early journey as their adventure began",
    "tag": "Where It Began"
  },
  {
    "id": "photo-08-couple-early-ferry",
    "src": "/images/photo-08-couple-early-ferry.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "early_days",
    "role": [
      "where_it_all_began",
      "then_and_now_then",
      "gallery"
    ],
    "caption": "Young and carefree \u2014 their very first travels across serene waters",
    "tag": "Then \u2014 2006 Era"
  },
  {
    "id": "photo-09-couple-coastal-fort",
    "src": "/images/photo-09-couple-coastal-fort.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "early_days",
    "role": [
      "where_it_all_began",
      "gallery"
    ],
    "caption": "Standing side by side on ancient fortress walls looking out onto the endless ocean",
    "tag": "Early Horizons"
  },
  {
    "id": "photo-10-appa-in-flight-smile",
    "src": "/images/photo-10-appa-in-flight-smile.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "early_days",
    "role": [
      "gallery"
    ],
    "caption": "Appa's bright smile on the flight towards new memories and adventures",
    "tag": "Joyful Journeys"
  },
  {
    "id": "photo-11-appa-baby-car-roof",
    "src": "/images/photo-11-appa-baby-car-roof.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Appa holding his little boy atop the road-trip car under the golden coastal sky",
    "tag": "Father's Strength"
  },
  {
    "id": "photo-12-amma-baby-bridge-wind",
    "src": "/images/photo-12-amma-baby-bridge-wind.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Amma carrying her infant son across Pamban bridge with the sea breeze dancing in her saree",
    "tag": "Mother's Warmth"
  },
  {
    "id": "photo-13-amma-baby-sea-waves",
    "src": "/images/photo-13-amma-baby-sea-waves.jpg",
    "width": 1200,
    "height": 1600,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Introducing her little boy to the gentle ocean waves \u2014 pure motherly love",
    "tag": "Tender Moments"
  },
  {
    "id": "photo-14-family-grandparents-beach",
    "src": "/images/photo-14-family-grandparents-beach.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Cherished family afternoon by the seaside with beloved grandparents",
    "tag": "Cherished Roots"
  },
  {
    "id": "photo-15-family-kerala-houseboat",
    "src": "/images/photo-15-family-kerala-houseboat.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Sailing together on a tranquil houseboat across the Kerala backwaters",
    "tag": "Quiet Waters"
  },
  {
    "id": "photo-16-family-lush-garden",
    "src": "/images/photo-16-family-lush-garden.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Surrounded by nature and warmth, enjoying precious family vacation days",
    "tag": "Nature & Smiles"
  },
  {
    "id": "photo-17-family-wooden-cottage",
    "src": "/images/photo-17-family-wooden-cottage.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "A cozy family portrait holding their young son close",
    "tag": "Family Harmony"
  },
  {
    "id": "photo-18-family-delhi-jama-masjid",
    "src": "/images/photo-18-family-delhi-jama-masjid.jpg",
    "width": 640,
    "height": 480,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "travel",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Historic explorations in Delhi \u2014 watching their son grow before their eyes",
    "tag": "Growing Years"
  },
  {
    "id": "photo-19-couple-delhi-gardens",
    "src": "/images/photo-19-couple-delhi-gardens.jpg",
    "width": 640,
    "height": 480,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "couple",
    "role": [
      "gallery",
      "couple"
    ],
    "caption": "A quiet moment together amidst the grand royal gardens of Delhi",
    "tag": "Enduring Bond"
  },
  {
    "id": "photo-20-couple-humayun-tomb",
    "src": "/images/photo-20-couple-humayun-tomb.jpg",
    "width": 640,
    "height": 480,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "couple",
    "role": [
      "gallery",
      "couple"
    ],
    "caption": "Standing united in front of the majestic Humayun's Tomb",
    "tag": "Timeless Romance"
  },
  {
    "id": "photo-21-amma-son-qutub-minar",
    "src": "/images/photo-21-amma-son-qutub-minar.jpg",
    "width": 480,
    "height": 640,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "family",
    "role": [
      "family",
      "gallery"
    ],
    "caption": "Mother and son walking together under the historic tower of Qutub Minar",
    "tag": "Guiding Light"
  },
  {
    "id": "photo-22-grand-family-wedding-stage",
    "src": "/images/photo-22-grand-family-wedding-stage.jpg",
    "width": 1600,
    "height": 1066,
    "aspectRatio": 1.501,
    "orientation": "landscape",
    "category": "celebration",
    "role": [
      "grand_finale",
      "family",
      "gallery"
    ],
    "caption": "The grand celebration of life \u2014 all generations united in happiness and honor",
    "tag": "The Beautiful Life Built"
  },
  {
    "id": "photo-23-couple-taj-mahal",
    "src": "/images/photo-23-couple-taj-mahal.jpg",
    "width": 480,
    "height": 640,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "couple",
    "role": [
      "gallery",
      "couple"
    ],
    "caption": "Celebrating true love in front of the world's eternal monument of devotion, the Taj Mahal",
    "tag": "Eternal Love"
  },
  {
    "id": "photo-24-couple-himachal-tradition",
    "src": "/images/photo-24-couple-himachal-tradition.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "couple",
    "role": [
      "gallery",
      "couple"
    ],
    "caption": "Dressed in vibrant mountain heritage attire, sharing boundless laughter in Himachal",
    "tag": "Mountain Joy"
  },
  {
    "id": "photo-25-couple-hotel-hallway",
    "src": "/images/photo-25-couple-hotel-hallway.jpg",
    "width": 1600,
    "height": 1200,
    "aspectRatio": 1.333,
    "orientation": "landscape",
    "category": "couple",
    "role": [
      "gallery"
    ],
    "caption": "Walking through life hand in hand, finding joy in every destination",
    "tag": "Life's Path"
  },
  {
    "id": "photo-26-couple-himachal-portrait",
    "src": "/images/photo-26-couple-himachal-portrait.jpg",
    "width": 1200,
    "height": 1600,
    "aspectRatio": 0.75,
    "orientation": "portrait",
    "category": "couple",
    "role": [
      "hero",
      "then_and_now_now",
      "gallery"
    ],
    "caption": "Radiant smiles and warm embrace \u2014 twenty glorious years of unwavering togetherness",
    "tag": "20 Glorious Years"
  }
] as PhotoItem[],
};
