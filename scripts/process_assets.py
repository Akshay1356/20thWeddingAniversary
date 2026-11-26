import os
import shutil
from PIL import Image

def process():
    raw_dir = r"c:\Users\Akshay\Desktop\projects\ammababa\raw_assets"
    public_img_dir = r"c:\Users\Akshay\Desktop\projects\ammababa\public\images"
    public_audio_dir = r"c:\Users\Akshay\Desktop\projects\ammababa\public\audio"
    
    os.makedirs(public_img_dir, exist_ok=True)
    os.makedirs(public_audio_dir, exist_ok=True)
    
    # 1. Copy Audio
    raw_audio = os.path.join(raw_dir, "Nooru Varusham (Male).mp3")
    dest_audio = os.path.join(public_audio_dir, "nooru-varusham.mp3")
    if os.path.exists(raw_audio):
        shutil.copy2(raw_audio, dest_audio)
        print(f"Copied audio to {dest_audio}")

    # 2. Map and rename images with clean, semantic identifiers
    # We maintain a mapping from raw filename to semantic name, category, title, description, and suggested sections
    photo_metadata = [
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.55.03 PM.jpeg",
            "id": "photo-01-appa-murugan-temple",
            "category": "spiritual",
            "role": ["gallery"],
            "caption": "Appa seeking blessings at Thiruparankundram Murugan Temple in traditional veshti",
            "tag": "Spiritual Grace"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.55.19 PM.jpeg",
            "id": "photo-02-couple-temple-garlands",
            "category": "couple",
            "role": ["hero_candidate", "gallery", "then_and_now_now"],
            "caption": "Amma & Appa garlanded with divine blessings outside the sanctum",
            "tag": "Sacred Blessings"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.55.50 PM.jpeg",
            "id": "photo-03-couple-anniversary-doorway",
            "category": "couple",
            "role": ["gallery", "couple"],
            "caption": "Standing united in grace — rose and marigold garlands celebrating their bond",
            "tag": "Two Decades Together"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.56.07 PM.jpeg",
            "id": "photo-04-amma-navaratri-golu",
            "category": "celebration",
            "role": ["gallery"],
            "caption": "Amma illuminating the home in front of the festive Navaratri Golu",
            "tag": "Home & Tradition"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.56.26 PM.jpeg",
            "id": "photo-05-amma-pooja-prasadam",
            "category": "celebration",
            "role": ["gallery"],
            "caption": "Amma preparing sacred offerings and sweet festive feasts with unconditional love",
            "tag": "Festive Devotion"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.56.54 PM.jpeg",
            "id": "photo-06-family-temple-night",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Generations together on a peaceful temple evening under glowing temple spires",
            "tag": "Generations of Love"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.57.08 PM (1).jpeg",
            "id": "photo-07-amma-early-flight",
            "category": "early_days",
            "role": ["where_it_all_began", "gallery"],
            "caption": "Amma with fresh jasmine blossoms on an early journey as their adventure began",
            "tag": "Where It Began"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.57.08 PM.jpeg",
            "id": "photo-08-couple-early-ferry",
            "category": "early_days",
            "role": ["where_it_all_began", "then_and_now_then", "gallery"],
            "caption": "Young and carefree — their very first travels across serene waters",
            "tag": "Then — 2006 Era"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.57.09 PM (1).jpeg",
            "id": "photo-09-couple-coastal-fort",
            "category": "early_days",
            "role": ["where_it_all_began", "gallery"],
            "caption": "Standing side by side on ancient fortress walls looking out onto the endless ocean",
            "tag": "Early Horizons"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.57.09 PM.jpeg",
            "id": "photo-10-appa-in-flight-smile",
            "category": "early_days",
            "role": ["gallery"],
            "caption": "Appa's bright smile on the flight towards new memories and adventures",
            "tag": "Joyful Journeys"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.58.18 PM (1).jpeg",
            "id": "photo-11-appa-baby-car-roof",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Appa holding his little boy atop the road-trip car under the golden coastal sky",
            "tag": "Father's Strength"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.58.18 PM.jpeg",
            "id": "photo-12-amma-baby-bridge-wind",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Amma carrying her infant son across Pamban bridge with the sea breeze dancing in her saree",
            "tag": "Mother's Warmth"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.58.24 PM.jpeg",
            "id": "photo-13-amma-baby-sea-waves",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Introducing her little boy to the gentle ocean waves — pure motherly love",
            "tag": "Tender Moments"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 7.58.58 PM.jpeg",
            "id": "photo-14-family-grandparents-beach",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Cherished family afternoon by the seaside with beloved grandparents",
            "tag": "Cherished Roots"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.00.06 PM (1).jpeg",
            "id": "photo-15-family-kerala-houseboat",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Sailing together on a tranquil houseboat across the Kerala backwaters",
            "tag": "Quiet Waters"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.00.06 PM (2).jpeg",
            "id": "photo-16-family-lush-garden",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Surrounded by nature and warmth, enjoying precious family vacation days",
            "tag": "Nature & Smiles"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.00.06 PM.jpeg",
            "id": "photo-17-family-wooden-cottage",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "A cozy family portrait holding their young son close",
            "tag": "Family Harmony"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.01.13 PM (1).jpeg",
            "id": "photo-18-family-delhi-jama-masjid",
            "category": "travel",
            "role": ["family", "gallery"],
            "caption": "Historic explorations in Delhi — watching their son grow before their eyes",
            "tag": "Growing Years"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.01.13 PM (2).jpeg",
            "id": "photo-19-couple-delhi-gardens",
            "category": "couple",
            "role": ["gallery", "couple"],
            "caption": "A quiet moment together amidst the grand royal gardens of Delhi",
            "tag": "Enduring Bond"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.01.13 PM (3).jpeg",
            "id": "photo-20-couple-humayun-tomb",
            "category": "couple",
            "role": ["gallery", "couple"],
            "caption": "Standing united in front of the majestic Humayun's Tomb",
            "tag": "Timeless Romance"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.01.13 PM.jpeg",
            "id": "photo-21-amma-son-qutub-minar",
            "category": "family",
            "role": ["family", "gallery"],
            "caption": "Mother and son walking together under the historic tower of Qutub Minar",
            "tag": "Guiding Light"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.01.53 PM.jpeg",
            "id": "photo-22-grand-family-wedding-stage",
            "category": "celebration",
            "role": ["grand_finale", "family", "gallery"],
            "caption": "The grand celebration of life — all generations united in happiness and honor",
            "tag": "The Beautiful Life Built"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.02.03 PM.jpeg",
            "id": "photo-23-couple-taj-mahal",
            "category": "couple",
            "role": ["gallery", "couple"],
            "caption": "Celebrating true love in front of the world's eternal monument of devotion, the Taj Mahal",
            "tag": "Eternal Love"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.02.58 PM.jpeg",
            "id": "photo-24-couple-himachal-tradition",
            "category": "couple",
            "role": ["gallery", "couple"],
            "caption": "Dressed in vibrant mountain heritage attire, sharing boundless laughter in Himachal",
            "tag": "Mountain Joy"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.02.59 PM (1).jpeg",
            "id": "photo-25-couple-hotel-hallway",
            "category": "couple",
            "role": ["gallery"],
            "caption": "Walking through life hand in hand, finding joy in every destination",
            "tag": "Life's Path"
        },
        {
            "raw": "WhatsApp Image 2026-11-26 at 8.02.59 PM.jpeg",
            "id": "photo-26-couple-himachal-portrait",
            "category": "couple",
            "role": ["hero", "then_and_now_now", "gallery"],
            "caption": "Radiant smiles and warm embrace — twenty glorious years of unwavering togetherness",
            "tag": "20 Glorious Years"
        }
    ]

    processed_data = []

    for item in photo_metadata:
        raw_path = os.path.join(raw_dir, item["raw"])
        if not os.path.exists(raw_path):
            print(f"Warning: {raw_path} not found!")
            continue
            
        dest_filename = f"{item['id']}.jpg"
        dest_path = os.path.join(public_img_dir, dest_filename)
        
        with Image.open(raw_path) as img:
            # Handle orientation if needed
            if hasattr(img, "_getexif"):
                exif = img._getexif()
                if exif:
                    orientation = exif.get(0x0112)
                    if orientation == 3:
                        img = img.rotate(180, expand=True)
                    elif orientation == 6:
                        img = img.rotate(270, expand=True)
                    elif orientation == 8:
                        img = img.rotate(90, expand=True)
            
            # Convert RGBA or Palette to RGB for JPEG saving
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
                
            orig_w, orig_h = img.size
            ar = round(orig_w / orig_h, 3)
            
            # High-res web optimization: max width 1600 or height 1600
            max_dim = 1600
            if max(orig_w, orig_h) > max_dim:
                scale = max_dim / max(orig_w, orig_h)
                new_size = (int(orig_w * scale), int(orig_h * scale))
                img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
            else:
                img_resized = img
                
            w, h = img_resized.size
            img_resized.save(dest_path, "JPEG", quality=90, optimize=True)
            size_kb = os.path.getsize(dest_path) / 1024
            print(f"Optimized: {dest_filename} ({w}x{h}, {ar}) -> {size_kb:.1f} KB")
            
            processed_data.append({
                "id": item["id"],
                "src": f"/images/{dest_filename}",
                "width": w,
                "height": h,
                "aspectRatio": ar,
                "orientation": "landscape" if ar > 1.15 else ("portrait" if ar < 0.88 else "square"),
                "category": item["category"],
                "role": item["role"],
                "caption": item["caption"],
                "tag": item["tag"]
            })
            
    # Write Central Configuration file in TypeScript
    src_config_dir = r"c:\Users\Akshay\Desktop\projects\ammababa\src\config"
    os.makedirs(src_config_dir, exist_ok=True)
    ts_file = os.path.join(src_config_dir, "anniversaryData.ts")
    
    import json
    
    ts_content = f'''/**
 * Central Configuration File for M. Prakash & P. Anitha 20th Wedding Anniversary Celebration
 * "நூறு வருஷம்" (Nooru Varusham)
 * 
 * Easily change photo placements, captions, letter content, and milestones here.
 */

export interface PhotoItem {{
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
}}

export const ANNIVERSARY_CONFIG = {{
  couple: {{
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
  }},

  audio: {{
    title: "Nooru Varusham",
    src: "/audio/nooru-varusham.mp3",
    subtitle: "A melody of eternal love and hundred years of togetherness",
  }},

  milestones: [
    {{
      value: 20,
      suffix: "",
      label: "Beautiful Years",
      tamilLabel: "இருபது ஆண்டுகள்",
      description: "Two decades of unconditional love, laughter and shared dreams",
    }},
    {{
      value: 240,
      suffix: "",
      label: "Wonderful Months",
      tamilLabel: "இருநூற்று நாற்பது மாதங்கள்",
      description: "Walking hand in hand through every season of life",
    }},
    {{
      value: 7305,
      suffix: "+",
      label: "Days Together",
      tamilLabel: "ஏழாயிரத்து முந்நூறு நாட்கள்",
      description: "Days filled with kindness, companionship and mutual respect",
    }},
    {{
      value: 100,
      suffix: "%",
      label: "Countless Memories",
      tamilLabel: "எண்ணற்ற நினைவுகள்",
      description: "A treasure chest of unforgettable adventures and smiles",
    }},
  ],

  letter: {{
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
  }},

  // Curated photo references for specific sections
  heroPhotoId: "photo-26-couple-himachal-portrait",
  heroSecondaryPhotoId: "photo-02-couple-temple-garlands",
  
  thenAndNow: {{
    thenId: "photo-08-couple-early-ferry",
    nowId: "photo-26-couple-himachal-portrait",
    altThenId: "photo-09-couple-coastal-fort",
    altNowId: "photo-02-couple-temple-garlands",
    quote: "Twenty years later, still writing your beautiful story together.",
  }},

  whereItAllBegan: [
    "photo-08-couple-early-ferry",
    "photo-09-couple-coastal-fort",
    "photo-07-amma-early-flight",
    "photo-10-appa-in-flight-smile",
  ],

  familySection: {{
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
  }},

  grandFinale: {{
    celebrationPhotoId: "photo-22-grand-family-wedding-stage",
    couplePhotoId: "photo-26-couple-himachal-portrait",
    title: "20 Years of Love. Here's to a Hundred More.",
    tamilTitle: "நூறு வருஷம்",
    tamilBlessing: "இனிய திருமண நாள் வாழ்த்துகள்!",
    tagline: "Happy Anniversary, Amma & Appa!",
  }},

  photos: {json.dumps(processed_data, indent=2)} as PhotoItem[],
}};
'''
    
    with open(ts_file, "w", encoding="utf-8") as f:
        f.write(ts_content)
    print(f"Generated {ts_file} successfully with {len(processed_data)} photos!")

if __name__ == "__main__":
    process()
