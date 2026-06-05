import { ExperienceItem, SkillItem, BeadProduct, ProjectItem, TestimonialItem, EducationItem } from "./types";

import portraitImg from "./assets/images/angela_portrait_1779668426902.png";
import africanBeadsImg from "./assets/images/african_beads_1779668446282.png";
import beadDetailsImg from "./assets/images/bead_details_1779668466335.png";

export const PORTRAIT_IMAGE = portraitImg;
export const BEADS_HERO_IMAGE = africanBeadsImg;
export const CRAFT_DETAIL_IMAGE = beadDetailsImg;

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Data Annotator & AI Trainer",
    company: "Global Remote Platforms & Freelance",
    location: "Accra, Ghana (Remote)",
    period: "2022 - Present",
    description: [
      "Categorized and annotated massive textual, visual, and audio datasets for machine learning models and large language models (LLMs).",
      "Specialized in high-precision semantic labeling, named entity recognition (NER), intent parsing, and search relevance classification.",
      "Conducted prompt engineering and evaluation of chatbot response accuracy, toxic content flags, and alignment with safety policies.",
      "Achieved a consistent 99.4% quality assurance rating, recognized for parsing nuanced linguistic contexts and African pidgins/dialects."
    ],
    skills: ["Data Annotation", "LLM Evaluation", "Quality Assurance", "Linguistic Classification", "Prompt Engineering"]
  },
  {
    id: "exp-2",
    role: "Digital Operations & Material Sourcing Coordinator",
    company: "Bead Craftsmanship & Creative Ventures",
    location: "Accra, Ghana",
    period: "2020 - Present",
    description: [
      "Direct the digital branding, inventory management, and online operations of handmade waist and wrist beads e-commerce.",
      "Curate raw beads from traditional makers across Ghana (such as the Krobo bead markets), sorting materials for premium luxury collections.",
      "Design and execute client consultation workflows, organizing customized orders tailored to diverse waist measurements, skin tones, and styling preferences."
    ],
    skills: ["E-commerce Management", "Ghanaian Craft Sourcing", "Visual Arts", "Direct-to-Consumer Sales", "Earthy Brand Identity"]
  },
  {
    id: "exp-3",
    role: "Technical Support & Data Entry Associate",
    company: "Local Tech Partnerships",
    location: "Accra, Ghana",
    period: "2019 - 2021",
    description: [
      "Collaborated with local small enterprises to organize spreadsheets, clean raw transactional datasets, and structure metadata.",
      "Troubleshot technical synchronization issues across collaborative tools, increasing team administrative efficiency by 25%."
    ],
    skills: ["Microsoft Office", "Spreadsheet Automation", "Data Cleansing", "Project Synchronization", "Teamwork"]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "Data Annotation & Labeling",
    category: "Technical",
    percentage: 98,
    description: "Deep expertise in visual bounding boxes, text categorization, entity tagging, and semantic segmentation."
  },
  {
    name: "AI Training & LLM Fine-Tuning",
    category: "Technical",
    percentage: 94,
    description: "Evaluating conversational tone, flagging safety violations, and guiding model reinforcements."
  },
  {
    name: "Attention to Detail",
    category: "Professional",
    percentage: 99,
    description: "Meticulous parsing of complex labeling rubrics and bead string alignment to guarantee flawless execution."
  },
  {
    name: "Bead Craftsmanship",
    category: "Creative",
    percentage: 96,
    description: "Authentic Ghanaian bead weaving, stringing, and color pairing referencing physical proportions and cultural meaning."
  },
  {
    name: "Time Management & Autonomy",
    category: "Professional",
    percentage: 92,
    description: "Excellent tracking of deadlines for multi-project pipelines in fast-paced database annotation sprints."
  },
  {
    name: "Creative Entrepreneurship",
    category: "Creative",
    percentage: 95,
    description: "Managing packaging luxury aesthetic, sourcing Krobo glass beads, and storytelling across cultural digital spaces."
  },
  {
    name: "Microsoft Suite & Sheets",
    category: "Professional",
    percentage: 88,
    description: "Structuring inventory registers, material logs, and client data metrics utilizing clean spreadsheets."
  },
  {
    name: "Team Collaboration",
    category: "Professional",
    percentage: 90,
    description: "Communicating project metrics and coordinating with remote annotations teams globally."
  }
];

export const BEADS_GALLERY: BeadProduct[] = [
  {
    id: "bead-1",
    name: "Ohemaa Golden Waist Beads",
    category: "Waist Beads",
    image: BEADS_HERO_IMAGE,
    price: "₵180.00 / $15.00",
    meaning: "Ohemaa means 'Queen Mother' in Akan. These golden beads represent nobility, wealth, spiritual wisdom, and royal feminine grace.",
    materials: ["Traditional krobo glass beads", "Gold-foil Czech crystals", "Strong woven cotton thread", "Brass clasps"],
    description: "Meticulously designed to drape around the waist with comfortable flexibility. The golden hues capture Ghanaian sunlight, accentuating warmth, confidence, and natural posture."
  },
  {
    id: "bead-2",
    name: "Asase Yaa Emerald Comfort Set",
    category: "Waist Beads",
    image: CRAFT_DETAIL_IMAGE,
    price: "₵195.00 / $16.50",
    meaning: "Dedicated to Asase Yaa, the earth goddess. Deep emerald greens stand for fertile agriculture, personal regeneration, and safe growth.",
    materials: ["Recycled Ghanaian powder-glass beads", "Genuine emerald-colored glass spacers", "Hypoallergenic elastic string"],
    description: "Designed for everyday comfort and durability. The rich dark greens symbolize a deep connection to ancestry, balance, and the fertile soils of West Africa."
  },
  {
    id: "bead-3",
    name: "Sankofa Harmony Wrist Bead",
    category: "Wrist Beads",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    price: "₵75.00 / $6.00",
    meaning: "Features a centered Sankofa symbol, teaching us that there is no shame in going back to reclaim what we forgot.",
    materials: ["Carved wood core beads", "Hand-painted Krobo glass beads", "Gold-polished alloy spacer elements"],
    description: "A compact wrist accessory made for everyday wear. Fits snuggly, serving as an anchor of cultural alignment, historic appreciation, and modern resilience."
  },
  {
    id: "bead-4",
    name: "Kente Royal Choker",
    category: "Neck Beads",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    price: "₵220.00 / $18.00",
    meaning: "Mimics the vibrant and intricate weave lines of the national Kente cloth. Red represents passion and heritage, gold represents glory, and green represents renewal.",
    materials: ["Premium cylindrical glass tube beads", "Authentic bronze hook hardware", "Spun metallic fibers"],
    description: "A gorgeous statement neckpiece that sits elegantly above the collarbone. Designed to transform any simple look into a majestic celebration of Ghanaian identity."
  },
  {
    id: "bead-5",
    name: "Nsoromma Golden Wristlet",
    category: "Wrist Beads",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    price: "₵80.00 / $6.50",
    meaning: "Nsoromma represents the stars, symbolizing reliance on the Divine like stars shining in the dark night.",
    materials: ["Genuine Ghanaian cobalt beads", "Pyrite stone beads", "Silicone tension cord"],
    description: "A gorgeous wrist companion that plays beautifully under natural light. Perfect for stacking or wearing on its own to bring quiet elegance into daily work routines."
  },
  {
    id: "bead-6",
    name: "Akoben Fire Bead Collection",
    category: "Special Sets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
    price: "₵340.00 / $28.00",
    meaning: "Akoben (the war horn) signals a call to action, vigilance, and creative passion. These fiery red and bronze pieces make a bold personal statement.",
    materials: ["Hand-blown Krobo trade beads", "Earthy terracotta accent stones", "Durable thread knots"],
    description: "An exclusive matching set containing waist beads and a wrist accessory. Perfect for celebrating a milestone, birthday, or creative launch with unmatched personal flair."
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Virtual African Beads Museum",
    category: "Web Development & Culture",
    description: "A beautiful curated digital platform that celebrates the history, craftsmanship, and local symbolism of Ghanaian glass and Krobo beads. Features responsive galleries and symbolic definition cards.",
    image: BEADS_HERO_IMAGE,
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    demoUrl: "#",
    projectDetail: "The Beads Museum provides an archive where global viewers can learn about bead history, from colonial trade values to puberty rite ceremonies. It acts as an online hub to preserve ancient West African legacy."
  },
  {
    id: "proj-2",
    title: "Bespoke Expense Tracker & Material Planner",
    category: "Software Tool",
    description: "A custom designed financial tracker engineered for local bead makers. Helps track inventory of Krobo beads, threads, charms, shipping fees, and compares margins against remote data annotation revenue streams.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    technologies: ["TypeScript", "React", "LocalStorage", "Tailwind CSS"],
    demoUrl: "#",
    projectDetail: "Equipped with interactive currency conversion (GHS/USD), granular material logs, and visual split charts showing monthly business reinvestment rates versus personal savings."
  },
  {
    id: "proj-3",
    title: "Data Annotation Metrics Simulator",
    category: "Technical Project",
    description: "A dashboard showing mockup project completion metrics, semantic evaluation audits, LLM response grades, and pixel-accuracy charts representing daily digital annotation workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Lucide React", "Tailwind CSS", "Local State"],
    demoUrl: "#",
    projectDetail: "Designed to illustrate visual and linguistic dataset tagging. Demonstrates knowledge of machine learning dataset design, showcasing accuracy scores, annotation speeds, and quality reviews."
  },
  {
    id: "proj-4",
    title: "African Heritage Photo Portfolio",
    category: "Photography & Framing",
    description: "An elegant editorial design showcase emphasizing natural skin tones, soft linen textures, and high contrast close-ups of bead crafts captured in various workshops in Accra.",
    image: CRAFT_DETAIL_IMAGE,
    technologies: ["React", "Vite", "Tailwind Grid", "Lightbox Effects"],
    demoUrl: "#",
    projectDetail: "Showcases standard aspect ratio support (3:4, 1:1) and image rendering with rigid fallback strategies, prioritizing visual storytelling of local Ghanaian artisans."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Elijah K. Mensah",
    role: "Lead Researcher of Local AI Dialects",
    company: "Linguistic Tech Africa",
    text: "Angela's data annotation is incredibly meticulous. She has an instinctive eye for cultural context and local slang, which prevents machine learning models from misinterpreting West African conversations. She always delivers flawless spreadsheets and tags on schedule.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-2",
    name: "Naa Adjeley Laryea",
    role: "Loyal Custom Bead Client",
    company: "Accra, Ghana",
    text: "The Ohemaa golden waist beads are the most comfortable I have ever worn! Their visual weight, the authentic feel of the glass, and the story of resilience that Angela infuses in her beads make them a daily symbol of confidence for me. I feel beautiful, proud, and royal.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test-3",
    name: "Sophia Sterling",
    role: "Project Director",
    company: "ModelAlign AI Platform",
    text: "When compiling intricate image tagging datasets, you need individuals who don't rush. Angela excels here. Her accuracy index of 99.4% is the highest in our cohort, making her an invaluable quality assurance controller for our LLM reinforcement training loops.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Professional Training: LLM Fine-Tuning & Prompt Engineering",
    institution: "AI alignment initiatives & Remote Sourcing Partners",
    period: "2023",
    description: "Completed comprehensive training on advanced prompt techniques, preference tuning (RLHF datasets), linguistic tagging, and bias analysis in neural models."
  },
  {
    id: "edu-2",
    degree: "Data Science Prep & Business Spreadsheet Masterclass",
    institution: "Ghana Digital Skills Academy",
    period: "2021",
    description: "Mastered advanced formulas, data visualization protocols, structure validation, pivot reports, and metadata standards to systematically organize raw datasets."
  },
  {
    id: "edu-3",
    degree: "Traditional Ghanaian Bead Crafting & Cultural History",
    institution: "Accra Heritage Association & Local Krobo Craft Masters",
    period: "2019 - 2020",
    description: "Immersive mentorship studying antique beads, traditional firing methods, glass recycling in clay molds, string tensioning, and symbolic meaning of colors and beads in Ghanaian culture."
  },
  {
    id: "edu-4",
    degree: "Higher National Diploma / Degree Courses",
    institution: "University level preparation",
    period: "2016 - 2019",
    description: "Focused training in business communications, project coordination, research methodologies, and collaborative digital operations."
  }
];
