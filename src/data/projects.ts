export type ProjectType =
  | "research"
  | "art"
  | "game"
  | "ongoing"
  | "tangible"
  | "spatial-computing";

export type ProjectStatus = "published" | "released" | "ongoing" | "prototype";

export type ProjectSection = {
  title: string;
  body: string;
  items?: string[];
};

export type ProjectGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

export type ProjectVideo = {
  src: string;
  title: string;
  poster?: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  displayTitle?: string;
  year: number;
  type: ProjectType;
  venue?: string;
  authors?: string;
  doi?: string;
  role?: string;
  platform?: string;
  status?: ProjectStatus;
  statusLabel?: string;
  shortDescription: string;
  abstract?: string;
  tags: string[];
  links: {
    label: string;
    url: string;
  }[];
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  route?: string;
  featured?: boolean;
  whatIDid?: string[];
  whyItMatters?: string;
  sections?: ProjectSection[];
  gallery?: ProjectGalleryItem[];
  galleryTitle?: string;
  video?: ProjectVideo;
};

export const projects: Project[] = [
  {
    id: "bridge-reading",
    title: "Bridge Reading",
    displayTitle: "Bridge Reading",
    year: 2026,
    type: "ongoing",
    role:
      "Product concept, reading experience design, interaction design, visual direction, and front-end development",
    platform: "Next.js, React, TypeScript, responsive web",
    status: "ongoing",
    statusLabel: "Ongoing Project",
    shortDescription:
      "An English-first bilingual reading prototype that gradually moves from interactive scenes to independent reading, with optional Chinese translation and a clue-based case map.",
    abstract:
      "Bridge Reading explores how a digital interface can support readers through a mystery novel without permanently replacing the book. The experience begins with cinematic dialogue and guided investigation, then gradually removes visual scaffolding as the reader becomes more confident.\n\nEnglish remains visible by default, while Chinese translation appears sentence by sentence on request. Collectible evidence, a clue bag, and a case map turn close reading into an investigation while preserving a calm, book-like reading rhythm.",
    tags: [
      "Reading Experience",
      "Bilingual UI",
      "Interaction Design",
      "Narrative Interface",
      "Gamified Reading",
      "Responsive Web",
    ],
    links: [],
    image: "/images/bridge-reading/cover.png",
    imageAlt:
      "Bridge Reading cover for the A Good Girl’s Guide to Murder interactive reading prototype",
    imageFit: "cover",
    route: "/ongoing/bridge-reading",
    featured: true,
    whatIDid: [
      "Designed a four-stage reading journey that moves from cinematic guidance to independent, vertically scrolling reading.",
      "Created sentence-level translation controls so English stays primary and Chinese appears only when requested.",
      "Developed a clue bag and progressive case map that reward close reading without revealing future information.",
      "Built responsive desktop and mobile layouts with chapter navigation, saved progress, character context, and accessible controls.",
    ],
    whyItMatters:
      "The project treats reading support as temporary scaffolding: guidance is strongest at the beginning, then recedes as the reader develops confidence and begins making connections independently.",
    sections: [
      {
        title: "Progressive Reading",
        body:
          "The first 20% uses interactive scenes and character dialogue. Guided reading then introduces annotated names, character context, and reflective questions. Later chapters become single-column, vertically scrolling pages with fewer interruptions, while translation and clue collection remain available.",
      },
      {
        title: "Clue-Based Interaction",
        body:
          "Selected sentences can become collectible evidence. Readers place possible clues—including misleading ones—into a case bag and gradually light up a pre-structured case map as relationships become visible.",
      },
      {
        title: "English-First Bilingual Design",
        body:
          "The interface is written in English, and each sentence initially shows only the original text. A Translate control reveals the corresponding Chinese sentence in place, keeping both languages close without forcing readers to scroll between separate versions.",
      },
      {
        title: "Responsive Reading",
        body:
          "The same product adapts automatically across mobile and desktop. Character artwork stays inside the cinematic frame, guided pages preserve clear speaker identity, and later reading sections use a centred single column designed for vertical scrolling.",
      },
    ],
  },
  {
    id: "earth-is-not-humanitys-alone",
    title: "Earth Is Not Humanity’s Alone",
    displayTitle: "Earth Is Not Humanity’s Alone",
    year: 2026,
    type: "art",
    role:
      "Archival research, content strategy, interaction design, visual design, and front-end development",
    platform: "Next.js, React, TypeScript, Framer Motion",
    status: "ongoing",
    statusLabel: "Ongoing Project",
    shortDescription:
      "A bilingual, source-verified digital archive documenting animals whose deaths were caused by human actions.",
    abstract:
      "Earth Is Not Humanity’s Alone is a bilingual digital archive documenting individual animals whose deaths were caused by human actions. The current edition presents 191 verified fatal events involving 133 animal types from 1826 to 2026.\n\nVisitors move horizontally through time and open source-backed records about each animal’s life, location, circumstances, and outcome. Non-graphic portraits keep the experience reflective, asking visitors to see animals as fellow inhabitants rather than statistics.",
    tags: [
      "Animal Advocacy",
      "Digital Archive",
      "Data Storytelling",
      "Interaction Design",
      "Bilingual UI",
      "Creative Coding",
    ],
    links: [
      {
        label: "Open Project",
        url: "/art/Earth-is-not-humanitys-alone/demo",
      },
    ],
    image: "/images/earth-archive/01-home.png",
    imageAlt:
      "Opening screen of the Earth Is Not Humanity’s Alone bilingual animal archive",
    imageFit: "contain",
    route: "/art/Earth-is-not-humanitys-alone",
    featured: false,
    whatIDid: [
      "Reviewed 286 animal-related records and published 191 cases that met the fatal-causation standard.",
      "Verified every public case with at least two reliable sources while preserving conflicts and uncertainty.",
      "Designed and developed a bilingual, responsive horizontal timeline with previews, detailed records, and source lists.",
      "Created a non-graphic portrait system and ten-candle memorial to communicate individual identity and archival scale.",
    ],
    whyItMatters:
      "The archive asks visitors to recognize animals as individual inhabitants of a shared planet and treats evidence, uncertainty, and documentation as essential parts of responsible advocacy.",
    sections: [
      {
        title: "How the Archive Works",
        body:
          "Every public entry must meet a strict rule: the animal’s death must be documented and must have resulted from human action. Records involving survivors, natural deaths, or unconfirmed outcomes remain in the research archive rather than being presented as verified fatal events.\n\nEach case includes its source trail, verification status, and any unresolved differences between records. This approach treats uncertainty as part of responsible documentation rather than something to hide.",
      },
      {
        title: "Visual and Interaction Design",
        body:
          "The horizontal timeline transforms archival research into a journey through time. Visitors scroll down to move right, gradually encountering individual animals instead of viewing the archive as a conventional list of statistics.\n\nNon-realistic portraits replace graphic photographs, while muted archival colors and field-note typography create a reflective rather than sensational atmosphere. On mobile devices, the experience becomes a card-based, swipeable timeline.",
      },
      {
        title: "Call to Action",
        body:
          "The archive ends with ten memorial candles. One illuminated candle represents the 191 verified events currently published—roughly one tenth of a working estimate of approximately 2,000 historical records that may meet the same evidence standard. The nine unlit candles represent lives and records that remain outside the timeline.\n\nThis project calls for enforceable animal-protection laws that prohibit deliberate cruelty and killing, establish basic safeguards for companion, working, wild, and captive animals, and require meaningful investigation, enforcement, penalties, and public accountability.\n\nLighting a candle is only a symbolic gesture. Real protection requires legislation, enforcement, documentation, and the recognition that Earth does not belong to humanity alone.",
      },
    ],
    galleryTitle: "Archive interface and interactions",
    gallery: [
      {
        src: "/images/earth-archive/01-home.png",
        alt: "Opening screen showing the archive title, bilingual introduction, record count, animal types, and time span",
        caption: "Opening view: archive scope, bilingual introduction, and navigation instructions.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/02-timeline.png",
        alt: "Horizontal animal archive timeline showing illustrated records from 1826 to 1932",
        caption: "The horizontal timeline introduces individual animals across historical events.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/03-event-preview.png",
        alt: "Timeline with an archival preview card open for the last confirmed great auk pair",
        caption: "Event previews reveal key facts without interrupting the timeline.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/04-record-detail.png",
        alt: "Detailed archive record for the last confirmed great auk pair with illustration, evidence status, and full record",
        caption: "Detailed records bring together context, verification status, and source-backed documentation.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/05-timeline-2015.png",
        alt: "Horizontal archive timeline showing animal records from 2014 and 2015",
        caption: "A later section of the archive shows the density of documented events in 2015.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/06-timeline-2026.png",
        alt: "End of the public archive timeline showing animal records from 2025 and 2026",
        caption: "The current public timeline continues through 2026 while the wider record remains unfinished.",
        fit: "contain",
      },
      {
        src: "/images/earth-archive/07-memorial.png",
        alt: "Closing memorial view with ten candles and text explaining the scale of documented and undocumented animal records",
        caption: "The ten-candle memorial connects 191 published events to the larger undocumented archive.",
        fit: "contain",
      },
    ],
  },
  {
    id: "personamail",
    title:
      "Demonstrating PersonaMail: Learning and Adapting Personal Communication Preferences for Context-Aware Email Writing",
    displayTitle: "PersonaMail",
    year: 2026,
    type: "research",
    venue: "IUI Companion 2026 / ACM IUI 2026",
    authors:
      "Rui Yao, Ruiyuan Bai, Yang Chen, Qiuyuan Ren, Felicia Fang-Yi Tan, Xiaoyu Zhang, Shengdong Zhao",
    doi: "10.1145/3742414.3794765",
    shortDescription:
      "An AI-assisted, tone-sensitive email writing system that learns and adapts to users' personal communication preferences.",
    abstract:
      "PersonaMail is an AI-assisted, tone-sensitive email writing system that learns and adapts to users' personal communication preferences. The demo explores how AI can support context-aware email writing, especially in high-stakes communication where tone, relationship, and intention matter.",
    tags: [
      "Human-AI Interaction",
      "AI Writing",
      "Communication",
      "Personalization",
      "IUI",
    ],
    links: [
      {
        label: "SIGCHI Program",
        url: "https://programs.sigchi.org/iui/2026/program/content/226894",
      },
      { label: "DOI", url: "https://doi.org/10.1145/3742414.3794765" },
    ],
    // TODO: replace with paper or demo screenshot.
    image: "/images/personamail-placeholder.jpg",
    imageAlt: "PersonaMail demo placeholder",
    status: "published",
    featured: false,
    whyItMatters:
      "The project studies how writing assistance can adapt to personal tone, relationship, and communication context instead of treating email as generic text generation.",
  },
  {
    id: "cologene",
    title:
      "ColoGene: Empowering Designers with Genetic Narratives of Traditional Chinese Colors",
    displayTitle: "ColoGene",
    year: 2026,
    type: "research",
    venue: "CHI EA 2026 / ACM CHI 2026",
    authors: "Yue Gu, Yuxuan Li, Ruiyuan Bai, Zhiwei Yao, Shengdong Zhao",
    doi: "10.1145/3772363.3798765",
    shortDescription:
      "A creativity support tool for exploring traditional Chinese colors through cultural and narrative structures.",
    abstract:
      "ColoGene supports designers in exploring traditional Chinese colors through cultural and narrative structures. Rather than treating color as only a visual value, the project frames color selection as a culturally informed design process, helping designers connect palettes with meaning, heritage, and creative intent.",
    tags: [
      "HCI",
      "Color Design",
      "Cultural Computing",
      "Creativity Support Tools",
      "CHI",
    ],
    links: [
      {
        label: "SIGCHI Program",
        url: "https://programs.sigchi.org/chi/2026/program/content/229617",
      },
      { label: "DOI", url: "https://doi.org/10.1145/3772363.3798765" },
    ],
    image: "/images/cologene/teaser.png",
    imageAlt:
      "ColoGene teaser showing genetic narratives of traditional Chinese colors",
    status: "published",
    featured: false,
    whyItMatters:
      "ColoGene positions color as cultural material, helping designers work with narrative, heritage, and meaning rather than only visual preference.",
    gallery: [
      {
        src: "/images/cologene/procedure.png",
        alt: "ColoGene design procedure and workflow image",
        caption: "Design procedure showing how cultural color narratives are explored and transformed into palettes.",
      },
      {
        src: "/images/cologene/system.png",
        alt: "ColoGene system interface image",
        caption: "System interface supporting designers in exploring traditional Chinese colors through narrative structures.",
      },
    ],
  },
  {
    id: "forest-trending",
    title: "森林热搜 Forest Trending",
    displayTitle: "Forest Trending",
    year: 2026,
    type: "game",
    venue: "Agentland Game Jam · June 2026",
    role:
      "Creator — game design, interaction design, AI Agent system, visual design, and development",
    platform: "Web, AI Agents, PlayKit",
    status: "released",
    statusLabel: "Excellence Award",
    shortDescription:
      "A pixel-art AI Agent public-opinion simulation where five daily stories are discussed, distorted, amplified, and clarified by a society of forest animals.",
    abstract:
      "Forest Trending is a pixel-art AI Agent public-opinion simulation created for the Agentland Game Jam in June 2026, where it received an Excellence Award.\n\nEach morning, five stories arrive on the forest noticeboard. Players choose three animals for the daily duty team, then spend limited action points to amplify, cool down, fact-check, flag, protect, delay, or leave a story alone. Every intervention has trade-offs: verification may move slower than a rumor, while suppressing discussion can push speculation out of sight.\n\nThe goal is not to uncover one definitive truth. It is to care for a small society whose characters talk, misread, influence one another, and remember what happened—keeping fear from spreading too quickly without letting trust quietly disappear.",
    tags: [
      "AI Agents",
      "Social Simulation",
      "Media Literacy",
      "Pixel Art",
      "Web Game",
      "Game Jam",
    ],
    links: [
      {
        label: "Play on PlayKit",
        url: "https://space.playkit.ai/games/forest-trending",
      },
    ],
    image: "/images/forest-trending/cover.png",
    imageAlt:
      "Forest Trending pixel-art cover showing animals gathering around a forest noticeboard",
    route: "/games/forest-trending",
    featured: true,
    whatIDid: [
      "Designed a daily loop around five incoming stories, a three-animal duty team, limited action points, and an end-of-day forest report.",
      "Created intervention cards whose benefits and side effects turn moderation, verification, protection, and inaction into strategic choices.",
      "Built an AI Agent society in which animals respond through distinct personalities, emotions, relationships, trust levels, memories, and information-sharing tendencies.",
      "Developed the warm pixel-art forest, character cast, noticeboard, calendar, trending cards, and newspaper-like reporting interface.",
    ],
    whyItMatters:
      "The game makes media literacy and platform governance tangible by showing how ordinary information changes as it passes through anxiety, personality, relationships, moderation choices, and group attention.",
    sections: [
      {
        title: "Core Experience",
        body:
          "Every session represents one day in the forest. Five stories enter the noticeboard, and the player chooses three animals—such as the evidence-seeking owl, calming panda, rumor-amplifying crow, protective rabbit, or persuasive fox—to form the duty team.",
        items: [
          "Observe five daily trending stories and the reactions gathering around them.",
          "Use limited action points to shape the direction and reach of one story at a time.",
          "Watch the same message become interpreted, exaggerated, misread, or clarified.",
          "Read the end-of-day report to trace how an original message became its final rumor.",
        ],
      },
      {
        title: "An AI Agent Society",
        body:
          "The animals are driven by an AI Agent system rather than a fixed dialogue tree. Each character has a personality, mood, trust level, anxiety, influence, memory, and tendency to spread information. Their short comments, rumor variants, discussion paths, and daily report change with the story, the player's interventions, the duty team, and the state of the forest.",
      },
      {
        title: "Information Has Consequences",
        body:
          "Heat is not truth, suppression is not resolution, and fact-checking does not always catch up with a fast-moving rumor. A harmless tool announcement can become a fear of replacement; a service adjustment can become a story about exclusion. The game exposes each step in that transformation and asks the player to balance visibility, safety, trust, and uncertainty.",
      },
      {
        title: "A Playful Media-Literacy Game",
        body:
          "The warm pixel-art setting makes a complex subject approachable without turning it into a lecture. Players do not need to type: they click, observe, and choose. Even doing nothing changes the forest, making silence itself part of the simulation.",
      },
    ],
    galleryTitle: "Inside the forest",
    gallery: [
      {
        src: "/images/forest-trending/screenshot-01.png",
        alt: "Forest Trending opening screen with a June 2026 calendar and daily forest simulation controls",
        caption:
          "Each day begins with a new set of five stories and a forest whose trust can rise or fall.",
        fit: "contain",
      },
      {
        src: "/images/forest-trending/screenshot-02.png",
        alt: "Forest Trending animal duty team selection interface",
        caption:
          "Players select three animals whose abilities and personalities shape the day's response.",
        fit: "contain",
      },
      {
        src: "/images/forest-trending/screenshot-03.png",
        alt: "Forest Trending story detail showing the official notice, rumor versions, animal comments, and intervention cards",
        caption:
          "The detail view connects the official notice, the forest's interpretation, rumor versions, animal comments, and player actions.",
        fit: "contain",
      },
      {
        src: "/images/forest-trending/screenshot-04.png",
        alt: "Forest Trending forest playfield with animal reactions, trending stories, and intervention cards",
        caption:
          "Reactions surface across the forest while limited-action interventions cool down, verify, protect, delay, or amplify a story.",
        fit: "contain",
      },
      {
        src: "/images/forest-trending/screenshot-05.png",
        alt: "Forest Trending end-of-day forest newspaper and information transformation report",
        caption:
          "The daily report traces the day's biggest misunderstanding and how the original message changed.",
        fit: "contain",
      },
    ],
  },
  {
    id: "loofa-man",
    title: "Taste of Connection / Loofa Man / 丝瓜汤",
    displayTitle: "Taste of Connection",
    year: 2026,
    type: "game",
    role: "Programming integration, implementation support, gameplay iteration",
    platform: "Unity, HTML5, itch.io",
    shortDescription:
      "A narrative-driven puzzle game where dinner-table rotation becomes a system for social negotiation, family pressure, and self-determination.",
    abstract:
      "Taste of Connection is a narrative-driven puzzle game set in a post-radiation future where delicious food has become a social luxury. Players act as Lufa, a luffa-person and rookie Deliciousness Insurance salesperson, navigating dinner parties with limited Action Points, rotating-table puzzles, items, and branching choices. The project uses dining culture as a metaphor for social pressure, family expectation, and deciding who you want to become.",
    tags: [
      "Unity",
      "Web Game",
      "Narrative Puzzle",
      "Game Design",
      "Social Negotiation",
    ],
    links: [{ label: "Play on itch.io", url: "https://roibai.itch.io/loofa-man" }],
    image: "/images/loofa-man-cover.png",
    imageAlt: "Taste of Connection game map and storyline screen",
    route: "/games/loofa-man",
    status: "released",
    featured: false,
    whyItMatters:
      "The game turns social obligation into a playable system, asking players to think through personal agency inside family, work, and dining-table power dynamics.",
    sections: [
      {
        title: "Gameplay Concept",
        body:
          "Players rotate a dinner table to satisfy guests with different food preferences. Each turn uses a fixed Action Point budget, and items allow players to intervene in unfavorable situations without replacing the rotating-table core mechanic.",
        items: [
          "Mouse-only interaction: drag to rotate, click to use items, click to advance dialogue.",
          "Four playable demo levels with increasing mechanical and narrative complexity.",
          "An 11-item system grouped into spatial control, state modification, AP/dial, and NPC effects.",
        ],
      },
      {
        title: "Narrative Frame",
        body:
          "The game connects food, power, family, society, and freedom of choice. It uses a soft sci-fi food economy to amplify everyday social pressure around meals, work, and adulthood.",
      },
      {
        title: "Visual Direction",
        body:
          "The visual design uses bright yellow-green tones, thick outlines, polka dots, and cartoon-like characters to make a dark social premise approachable and playable.",
      },
    ],
    gallery: [
      {
        src: "/images/loofa-man/image29.png",
        alt: "Taste of Connection game map and branching storyline screen",
        caption: "Game map and branching storyline extracted from the project report.",
      },
      {
        src: "/images/loofa-man/image11.png",
        alt: "Taste of Connection character collection interface",
        caption: "Character collection and NPC narrative cards.",
      },
      {
        src: "/images/loofa-man/image31.png",
        alt: "Taste of Connection item reward and gameplay interface",
        caption: "Item reward screen and card-based interventions.",
      },
      {
        src: "/images/loofa-man/image26.png",
        alt: "Taste of Connection art assets and interface elements",
        caption: "Food, UI, character boards, and background art assets.",
      },
    ],
  },
  {
    id: "zoi",
    title: "Zoi: An AR Pet Assistant for Apple Vision Pro",
    displayTitle: "Zoi",
    year: 2025,
    type: "art",
    venue: "Graduation project / ongoing refinement",
    role:
      "Concept design, interaction design, development, user testing, narrative design",
    platform: "Apple Vision Pro, visionOS, Swift, RealityKit",
    shortDescription:
      "An Apple Vision Pro AR pet assistant that turns everyday recommendations and reminders into warm, character-mediated interactions with a virtual Shiba Inu companion.",
    abstract:
      "Zoi investigates how a pet-like AR assistant can combine emotional companionship, personalized recommendation, and practical task support in Apple Vision Pro. Instead of presenting assistance through a conventional chatbot or menu-based interface, Zoi uses a virtual Shiba Inu character as the interaction mediator. Users can talk with Zoi, ask for nearby restaurant or activity recommendations, save preferences over time, and add events directly to Apple Calendar. The system also includes playful interaction modes, such as a disco ball relaxation feature, to make the assistant feel less like a tool and more like a living companion. The project is framed by a narrative of adopting a stray dog, connecting the system's emotional design with the value of adoption rather than buying pets.",
    tags: [
      "Apple Vision Pro",
      "Spatial Computing",
      "AR Pet Assistant",
      "Emotional Design",
      "Recommendation Systems",
      "Human-AI Interaction",
      "Interaction Design",
      "Virtual Companion",
    ],
    links: [],
    image: "/images/zoi/cover.jpg",
    imageAlt: "Zoi Apple Vision Pro prototype with a virtual Shiba Inu companion",
    route: "/zoi",
    status: "prototype",
    featured: false,
    whyItMatters:
      "Zoi explores how spatial computing can support more emotionally engaging forms of everyday assistance through character, proximity, and embodied interaction.",
    whatIDid: [
      "Designed the pet-mediated assistant concept and adoption narrative.",
      "Built spatial interaction flows for recommendations, calendar events, preference memory, and playful relaxation.",
      "Tested the prototype with 8 participants and refined sound, animation, text, and spatial window placement.",
    ],
    gallery: [
      {
        src: "/images/zoi/cover.jpg",
        alt: "Zoi virtual Shiba Inu inside an Apple Vision Pro scene",
        caption: "Prototype homepage / in-headset scene.",
      },
      {
        src: "/images/zoi/testflight.jpg",
        alt: "Zoi TestFlight invitation screenshot",
        caption: "TestFlight testing screenshot for the Zoi Mate prototype.",
      },
    ],
  },
  {
    id: "newsgames-journalism",
    title: "It's all fun and games: Contemporary newsgames and journalism",
    displayTitle: "Contemporary Newsgames and Journalism",
    year: 2025,
    type: "research",
    venue: "Australian Journalism Review, 47(2), 173-196",
    authors:
      "Ben Stubbs, Nanditha Krishna, Ruiyuan Bai, Chensy (Xiaochen) Cao, Sabrina Jiang, Xingru (Winnie) Yi, Yihan Wang",
    doi: "10.1386/ajr_00184_1",
    shortDescription:
      "A journal article examining contemporary newsgames as meaningful interactive journalism.",
    abstract:
      "This article examines contemporary newsgames as a way to create meaningful engagement with journalism through interaction, procedural rhetoric, and playable systems. Part of the work discusses the development of Ramping Rush: Ambulance Rescue!, a newsgame about ambulance ramping that combines interactive storytelling, real-world social issues, and game-based public communication.",
    tags: [
      "Newsgames",
      "Journalism",
      "Serious Games",
      "Interactive Storytelling",
      "Unity",
    ],
    links: [
      {
        label: "AJR Article",
        url: "https://intellectdiscover.com/content/journals/10.1386/ajr_00184_1",
      },
      { label: "DOI", url: "https://doi.org/10.1386/ajr_00184_1" },
      { label: "Related Game", url: "/games/ambulance-rush" },
    ],
    image: "/images/ambulance-rush/cover.jpg",
    imageAlt: "Ramping Rush related newsgame cover placeholder",
    status: "published",
    featured: false,
  },
  {
    id: "wall",
    title: "SocialLayer: Real-time Image Collage Wall",
    displayTitle: "SocialLayer / Wall",
    year: 2025,
    type: "art",
    venue: "SM5312 Interactive Media I / Mid-Semester Project",
    authors: "BAI Ruiyuan & HUANG Tingting",
    role: "Creative coding, interaction design",
    platform: "JavaScript, HTML, CSS, camera access, Supabase",
    shortDescription:
      "A real-time image collage wall that transforms live camera fragments into personalized digital stickers.",
    abstract:
      "SocialLayer is a real-time image collage wall that transforms live camera fragments into personalized digital stickers. Inspired by the layered materiality of graffiti walls and the self-presentation logic of social media feeds, the project allows users to capture, filter, and stack slices of everyday life onto a shared canvas. Technically built with JavaScript, HTML, CSS, camera access, and Supabase, SocialLayer explores how visual traces can accumulate into a flowing social memory.",
    tags: [
      "Creative Coding",
      "Interactive Media",
      "Real-time Camera",
      "Collage",
      "Social Media",
      "Supabase",
      "Digital Identity",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/RoiBai/Wall" },
      {
        label: "Project drive",
        url: "https://drive.google.com/drive/folders/1pIe4j08ErWhlLTaDRUpCONsbC6hP6kV5",
      },
    ],
    image: "/images/wall/cover.png",
    imageAlt: "SocialLayer live camera collage wall interface preview",
    route: "/art/wall",
    status: "prototype",
    featured: true,
    whyItMatters:
      "The project connects physical traces and digital identity by asking how everyday image fragments can layer, cover, and accumulate like public graffiti and social media feeds.",
    sections: [
      {
        title: "Concept",
        body:
          "SocialLayer was inspired by two daily-life experiences: the layering of graffiti on walls and the use of filters to share moments of life on social media. It treats captured image fragments as visual traces that can be placed into a shared digital surface.",
      },
      {
        title: "Interaction",
        body:
          "Users transform the real-time scene in front of the camera into personalized sticker images through simple mouse operations, then freely collage and layer stickers on the canvas.",
      },
      {
        title: "Technical Implementation",
        body:
          "The project uses JavaScript, HTML, CSS, live camera data, and Supabase to capture real-time images and integrate user-generated clip art materials.",
      },
      {
        title: "References",
        body:
          "The project references Haus Schwarzenberg's graffiti alley in Berlin as a layered public wall, and Amalia Ulman's Excellences & Perfections as a performance of digital identity construction through continuous social media posting.",
      },
    ],
    gallery: [
      {
        src: "/images/wall/sociallayer-page-1.png",
        alt: "SocialLayer PDF page with project overview",
        caption: "Project overview from the SocialLayer report.",
      },
      {
        src: "/images/wall/sociallayer-page-2.png",
        alt: "SocialLayer PDF page about Haus Schwarzenberg and Amalia Ulman",
        caption: "Layering references: graffiti walls and Instagram performance.",
      },
      {
        src: "/images/wall/sociallayer-page-3.png",
        alt: "SocialLayer PDF visual documentation page",
        caption: "Visual documentation extracted from the PDF.",
      },
      {
        src: "/images/wall/sociallayer-page-4.png",
        alt: "SocialLayer PDF page about digital identity layering",
        caption: "Physical and digital layering as social memory.",
      },
    ],
  },
  {
    id: "space",
    title: "Words in Space",
    displayTitle: "Words in Space",
    year: 2025,
    type: "art",
    role: "Creative coding, interaction design",
    platform: "p5.js, Web Speech API, face tracking, hand tracking",
    shortDescription:
      "A browser-based artwork where spoken language becomes visible particles that move, collide, transform, and recolor the speaker's dotted portrait.",
    abstract:
      "Words in Space is an interactive browser-based artwork about how spoken language leaves the body and continues to act in shared space. A webcam turns participants into dotted portraits. When someone speaks, words burst from the mouth as moving text particles, collide with boundaries, change color and form, and can be pushed by hand gestures. When words touch the portrait, individual dots take on their colors, suggesting that speech can return to mark the speaker's visual identity.",
    tags: [
      "Creative Coding",
      "Interactive Typography",
      "Voice Interaction",
      "Spatial Interaction",
      "Browser-based Art",
      "p5.js",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/RoiBai/space" },
    ],
    image: "/images/space-cover.png",
    imageAlt: "Words in Space artwork placeholder",
    route: "/art/space",
    status: "prototype",
    featured: false,
    whyItMatters:
      "Words in Space makes conversation tangible by showing how speech can move through context, influence others, and return to change the speaker.",
    sections: [
      {
        title: "Interaction",
        body:
          "Words emerge as text particles from the participant's mouth, rebound from colored boundaries, transform through shifting, repetition, or letter removal, and can be scattered by hand tracking.",
      },
      {
        title: "Technical Implementation",
        body:
          "The project uses p5.js for canvas drawing and particle animation, browser speech recognition for voice input, and face/hand tracking to connect spoken words with body-based interaction.",
      },
      {
        title: "Reflection",
        body:
          "The project intentionally leaves room for imperfect recognition. Misheard or crowded words become part of the theme: digital communication is never captured perfectly.",
      },
    ],
    gallery: [
      {
        src: "/images/space/image1.png",
        alt: "Words in Space dotted portrait with moving words",
        caption: "Voice particles moving around a dotted body portrait.",
      },
      {
        src: "/images/space/image2.png",
        alt: "Words in Space interaction documentation image",
        caption: "Interaction documentation extracted from the Space report.",
      },
      {
        src: "/images/space/image3.png",
        alt: "Words in Space full-screen interaction view",
        caption: "Full-screen browser artwork view from the report.",
      },
    ],
  },
  {
    id: "with-me",
    title: "With Me - Intelligent Comfort Dog",
    displayTitle: "With Me",
    year: 2025,
    type: "tangible",
    role: "Concept design, physical prototyping, Arduino development",
    platform: "Arduino Nano, RGB LEDs, light sensor, temperature sensor, vibration motor, MP3 module",
    shortDescription:
      "A tangible companion toy that senses touch, warmth, and darkness, expressing comfort through LED eyes, heartbeat vibration, and sound.",
    abstract:
      "With Me is an interactive companion toy built from a traditional plush dog. The prototype replaces the original eyes with RGB LEDs and adds sensors and output units so the toy can sense light, react to touch and body warmth, and express emotion through color, vibration, and sound. It explores how a soft physical object can behave like a small companion: seeking attention, responding to the environment, and making the user feel accompanied.",
    tags: [
      "Tangible Interaction",
      "Physical Computing",
      "Interactive Product",
      "Emotional Design",
      "Companion Technology",
      "Arduino",
    ],
    links: [
      {
        label: "Watch video",
        url: "https://drive.google.com/file/d/19FqLemIntTb0TYQwsMrcNcvgl0jGMV4E/view?usp=sharing",
      },
    ],
    image: "/images/with-me/cover.png",
    imageAlt: "With Me cover showing a real dog and a plush prototype with glowing eyes",
    route: "/tangible/with-me",
    status: "prototype",
    featured: false,
    whyItMatters:
      "With Me explores how emotional support can be designed through softness, warmth, light, rhythm, and embodied presence rather than only through screen-based interaction.",
    sections: [
      {
        title: "Interaction Modes",
        body:
          "Daily Mode lets the toy seek warmth and attention through eye color and heartbeat vibration. Sleep Mode dims the eyes and slows the heartbeat after inactivity. Meditation Mode uses breathing light, vibration rhythm, and audio guidance.",
      },
      {
        title: "Sensors and Outputs",
        body:
          "A light sensor detects petting and room brightness, while a temperature sensor under the belly detects hugs. RGB LED eyes, a vibration motor, and an MP3 speaker communicate emotional states.",
      },
      {
        title: "Background",
        body:
          "The project began from the feeling of living away from a real dog and wanting a comforting object that could be held, noticed, and interacted with without pretending to replace a specific pet.",
      },
    ],
    gallery: [
      {
        src: "/images/with-me/cover.png",
        alt: "With Me cover showing a real dog and a plush prototype with glowing eyes",
        caption: "Cover image for With Me, connecting the real dog inspiration with the soft interactive prototype.",
      },
      {
        src: "/images/with-me/image3.png",
        alt: "With Me soft interactive plush dog robot concept diagram",
        caption: "Annotated concept diagram showing sensors, LEDs, vibration motor, and speaker.",
      },
      {
        src: "/images/with-me/image11.jpg",
        alt: "With Me prototype process photo",
        caption: "Prototype documentation extracted from the With Me report.",
      },
      {
        src: "/images/with-me/image9.jpg",
        alt: "With Me physical computing process image",
        caption: "Physical computing and assembly process.",
      },
      {
        src: "/images/with-me/image10.jpg",
        alt: "With Me plush dog interaction detail",
        caption: "Soft object interaction detail from the report.",
      },
    ],
  },
  {
    id: "monster-between-us",
    title: "Monster Between Us: A Tangible Prototype for Parent-Child Task Initiation",
    displayTitle: "Monster Between Us / MOMO",
    year: 2026,
    type: "tangible",
    role: "HCI concept, tangible interaction design, 3D modeling, Arduino prototyping",
    platform: "Arduino, NFC reader, keypad, DFPlayer, RGB LEDs, screen, Rhino, 3D printing",
    shortDescription:
      "A tangible monster prototype that helps parents and children turn task-starting conflict into a shared, visible, and celebratory first step.",
    abstract:
      "Monster Between Us, also called MOMO, is a desktop tangible interaction prototype for parent-child task initiation. The project focuses on the moment when a child cannot start homework or another task, reframing it not as laziness but as a state that may involve difficulty, tiredness, fear, distraction, overload, or resistance. Through NFC state tokens, a parent card, shared buttons, lights, sounds, a belly screen, and gacha reward progress, MOMO externalizes tension into a small monster that parent and child can help together.",
    tags: [
      "Tangible Interaction",
      "Parent-Child Interaction",
      "Physical Prototype",
      "Behavioral Support",
      "HCI",
      "Emotional Mediation",
    ],
    links: [
      {
        label: "Watch documentary",
        url: "https://drive.google.com/file/d/1pL__vnKU-uI8qOZcwbyiuMJnsHVQVgET/view?usp=sharing",
      },
    ],
    image: "/images/monster-between-us/cover.png",
    imageAlt: "MOMO tangible monster prototype with glowing eyes and token controls",
    route: "/tangible/monster-between-us",
    status: "prototype",
    featured: true,
    whyItMatters:
      "MOMO explores how tangible objects can mediate emotional tension, making a difficult starting moment visible, collaborative, and less blaming.",
    sections: [
      {
        title: "Interaction Flow",
        body:
          "The child places one NFC token to express their current state. The parent scans a parent card, then both people press buttons to begin a small starter task together. After completion, MOMO tracks reward progress toward gacha time.",
      },
      {
        title: "State Tokens",
        body:
          "The prototype uses eight states: too hard, too tired, stuck, off task, scared, don't want, too noisy, and too much. Each state maps to a low-threshold starter task.",
        items: [
          "Too hard -> First step",
          "Too tired -> Take a nap",
          "Stuck -> Start together",
          "Off task -> Put phone away",
          "Scared -> Bad first try",
          "Don't want -> Just 1 minute",
          "Too noisy -> Quiet space",
          "Too much -> Choose one",
        ],
      },
      {
        title: "Making Process",
        body:
          "The physical prototype combined Rhino modeling, AI-assisted monster concept generation, Tripo AI image-to-3D, 3D printing, Arduino wiring, NFC input, screen output, sound mapping, and iterative code debugging.",
      },
    ],
    gallery: [
      {
        src: "/images/monster-between-us/cover.png",
        alt: "MOMO tangible monster prototype on a yellow base with glowing eyes",
        caption: "MOMO prototype cover image.",
      },
      {
        src: "/images/monster-between-us/image18.png",
        alt: "MOMO parent-child task initiation concept illustration",
        caption: "Problem framing: parent-child task initiation and emotional tension.",
      },
      {
        src: "/images/monster-between-us/image16.png",
        alt: "MOMO 3D monster prototype model",
        caption: "3D model of the tangible monster prototype.",
      },
      {
        src: "/images/monster-between-us/image2.png",
        alt: "MOMO NFC state tokens",
        caption: "NFC state tokens for externalizing a child's task-starting state.",
      },
      {
        src: "/images/monster-between-us/image17.png",
        alt: "MOMO prototype generation and modeling process",
        caption: "AI-assisted 3D modeling process documentation.",
      },
    ],
  },
  {
    id: "killing-brain",
    title: "Killing Brain",
    displayTitle: "Killing Brain",
    year: 2025,
    type: "tangible",
    role: "Conceptual design, installation prototyping",
    platform: "Acrylic, mechanical assembly, sliding rail motor, physical blades",
    shortDescription:
      "A tangible installation translating mental pressure into blades, acrylic brain structures, and a critical third-person encounter.",
    abstract:
      "Killing Brain is a tangible installation project that reflects on the pressures, anxieties, and forces that 'cut into' the mind. Through physical blades, acrylic structures, and conceptual visual language, the work translates mental burden into an embodied interactive form. The project asks viewers to confront whether they would stop what is cutting the brain, or allow it to continue.",
    tags: [
      "Tangible Interaction",
      "Installation",
      "Physical Computing",
      "Critical Design",
      "Conceptual Design",
      "Interactive Art",
    ],
    links: [],
    image: "/images/killing-brain/cover.jpg",
    imageAlt: "Killing Brain acrylic brain and blade installation prototype",
    route: "/tangible/killing-brain",
    status: "prototype",
    featured: false,
    whyItMatters:
      "The project uses physical material and mechanical risk to make mental burden visible from the outside, turning inner pressure into an encounterable object.",
    sections: [
      {
        title: "Project Idea",
        body:
          "The project asks what happens when we observe something cutting our brain from a third-person perspective: would we stop it, run away, or let it continue? It provokes reflection on how we confront the things that feel like they are killing our brain in real life.",
      },
      {
        title: "Visual / Conceptual References",
        body:
          "The slide references Jakob Grosse-Ophoff and a work labelled 'Knife & Brian' in the source image. The project also uses a layered line-drawing brain / head visual and physical knife forms as conceptual anchors.",
      },
      {
        title: "Fabrication Process",
        body:
          "The visible process includes sketching the acrylic brain and mechanism, laser cutting acrylic pieces, preparing blade and rail components, working with Rhino, Adobe Illustrator, Visual Studio Code, and Adobe Photoshop, and assembling the sliding rail motor structure.",
        items: ["Sketch", "LaserCut", "Software", "Assemble"],
      },
      {
        title: "Challenges",
        body:
          "The acrylic brain pieces were difficult to assemble and stabilize. The base needed to be secured carefully so the blades could cut through without collisions. The sliding rail motor also required a motor driver, power supply, careful fastening, and repeated checks for material dimensions and mechanical interference.",
      },
      {
        title: "Lessons Learnt",
        body:
          "The knife emphasizes how aspects of life can attack our minds like sharp blades. The deeper realization is that the assault comes not only from the tangible knife itself, but from every design detail. The collision between thought processes and physical assembly challenges gradually revealed itself throughout the creation of the installation.",
      },
    ],
    video: {
      src: "/videos/killing-brain/demo.mp4",
      title: "Killing Brain prototype video",
      poster: "/images/killing-brain/cover.jpg",
      caption: "Short documentation video of the acrylic brain and blade mechanism.",
    },
    gallery: [
      {
        src: "/images/killing-brain/gallery-01.jpg",
        alt: "Killing Brain prototype with keyboard blade passing through acrylic brain",
        caption: "Prototype test with the keyboard-textured blade.",
      },
      {
        src: "/images/killing-brain/gallery-02.jpg",
        alt: "Killing Brain prototype with eye blade in front of acrylic brain",
        caption: "Blade variation with eye imagery.",
      },
      {
        src: "/images/killing-brain/gallery-03.jpg",
        alt: "Killing Brain prototype assembly with blade and rail motor",
        caption: "Assembly detail with rail motor and blade structure.",
      },
    ],
  },
  {
    id: "tarot-site",
    title: "Tarot Reflection Website",
    displayTitle: "Tarot Reflection Website",
    year: 2026,
    type: "art",
    role: "Web interaction design, React prototype development",
    platform: "React, Vite, TypeScript",
    shortDescription:
      "A bilingual reflective tarot web experience that uses cards as symbolic prompts for self-questioning, not fortune telling.",
    abstract:
      "Tarot Reflection Website is an interactive web prototype that turns tarot reading into a slow, reflective browser ritual. Instead of predicting the future, the system invites visitors to enter a personal question, choose or draw cards, and move through card-mediated prompts that help reframe what they are asking. The current demo supports bilingual interaction, simple and larger spreads, online card drawing, saved local sessions, and a warm conversational flow designed around symbolic anchors, pacing, and self-led reflection.",
    tags: [
      "Creative Coding",
      "Reflective Interaction",
      "Symbolic Interface",
      "React",
      "Bilingual UI",
      "Web Prototype",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/RoiBai/tarot" },
      { label: "Try Demo", url: "/art/tarot-site/demo/" },
      { label: "Open ongoing study page", url: "/tarot" },
    ],
    image: "/images/tarot-site/tarot1-1.png",
    imageAlt: "Tarot Reflection Website updated interface screenshot",
    route: "/art/tarot-site",
    status: "prototype",
    featured: false,
    whatIDid: [
      "Designed the website as a slow, symbolic interaction rather than a prediction tool.",
      "Built bilingual interface patterns, saved chat affordances, and card-mediated reflection flows.",
      "Kept API-key handling out of the public code path so public demos can remain safer.",
    ],
    sections: [
      {
        title: "Website Interaction",
        body:
          "The interface guides visitors from a personal question into card input, reflective prompts, and a summary-like ending. The design goal is not to answer for the user, but to give them language to continue thinking.",
      },
      {
        title: "Creative Coding Frame",
        body:
          "The web version focuses on atmosphere, pacing, bilingual readability, and symbolic anchors. The ongoing research framing lives on the testing route, while this page describes the website as an interactive object.",
      },
    ],
    gallery: [
      {
        src: "/images/tarot-site/tarot1-1.png",
        alt: "Tarot Reflection Website updated screenshot 1",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot2-2.png",
        alt: "Tarot Reflection Website updated screenshot 2",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot3-3.png",
        alt: "Tarot Reflection Website updated screenshot 3",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot4-4.png",
        alt: "Tarot Reflection Website updated screenshot 4",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot5-5.png",
        alt: "Tarot Reflection Website updated screenshot 5",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot6-6.png",
        alt: "Tarot Reflection Website updated screenshot 6",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot7-7.png",
        alt: "Tarot Reflection Website updated screenshot 7",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot8-8.png",
        alt: "Tarot Reflection Website updated screenshot 8",
        caption: "Updated Tarot Reflection Website project image.",
      },
      {
        src: "/images/tarot-site/tarot9-9.png",
        alt: "Tarot Reflection Website updated screenshot 9",
        caption: "Updated Tarot Reflection Website project image.",
      },
    ],
  },
  {
    id: "idea-weaver",
    title: "Idea Weaver",
    displayTitle: "Idea Weaver",
    year: 2026,
    type: "art",
    role: "Concept design, interaction design, prototype development",
    platform: "React, Vite, TypeScript, mobile swipe interaction, localStorage",
    shortDescription:
      "A cross-disciplinary research ideation platform that turns vague interests into swipeable research seed cards and stronger topic directions.",
    abstract:
      "IdeaWeaver is a cross-disciplinary research ideation platform that helps users turn vague interests into researchable directions. Instead of starting from a blank prompt, users build a research profile and casually swipe through research seed cards on mobile. Each card presents a possible idea, key concepts, search phrases, and suggested methods. Liked ideas are saved into an Idea Studio, where users can review, connect, and merge them into stronger topic directions. The system focuses on keywords first, allowing users to explore ideas freely before moving into paper search or literature mapping.",
    tags: [
      "Creative Coding",
      "Research Ideation",
      "AI-assisted Reflection",
      "Swipe Interaction",
      "Idea Studio",
      "Cross-disciplinary Research",
      "React",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/RoiBai/IdeaWeaver" },
      {
        label: "Open interactive demo",
        url: "/experiments/idea-weaver/index.html",
      },
    ],
    image: "/images/idea-weaver-cover.png",
    imageAlt: "Idea Weaver research seed card interface preview",
    route: "/art/idea-weaver",
    status: "prototype",
    featured: true,
    whatIDid: [
      "Designed a mobile-first swipe interaction for exploring early-stage research seeds.",
      "Built the Idea Studio flow where saved ideas can be reviewed, connected, and merged.",
      "Framed the system around keywords and research directions before formal literature mapping.",
    ],
    whyItMatters:
      "Idea Weaver explores how swipe-based interaction and AI-assisted reflection can support early-stage research ideation across different disciplines, not only HCI or design.",
    sections: [
      {
        title: "Interaction Concept",
        body:
          "Instead of asking users to begin with a polished research prompt, Idea Weaver lets them create a lightweight research profile and browse seed cards through casual swiping. The interaction lowers the pressure of ideation and makes topic discovery feel exploratory.",
      },
      {
        title: "Idea Studio",
        body:
          "Liked cards are saved into an Idea Studio where users can review, connect, and merge them. This turns scattered interests into stronger topic directions without forcing users into a linear paper-search workflow too early.",
      },
      {
        title: "Keyword-first Exploration",
        body:
          "The system emphasizes key concepts, search phrases, and suggested methods before full literature mapping, helping users move from vague curiosity toward researchable paths.",
      },
    ],
    gallery: [
      {
        src: "/images/idea-weaver/idea1.png",
        alt: "Idea Weaver cover screen and research seed card preview",
        caption: "Mobile-first research seed exploration preview.",
      },
      {
        src: "/images/idea-weaver/idea2.png",
        alt: "Idea Weaver research profile or card interaction screenshot",
        caption: "Research profile and early ideation flow.",
      },
      {
        src: "/images/idea-weaver/idea3.png",
        alt: "Idea Weaver Idea Studio screenshot",
        caption: "Idea Studio for reviewing, connecting, and merging liked directions.",
      },
      {
        src: "/images/idea-weaver/idea4.png",
        alt: "Idea Weaver keyword and search phrase interface",
        caption: "Keyword-first support before moving into paper search.",
      },
      {
        src: "/images/idea-weaver/idea5.png",
        alt: "Idea Weaver topic direction or literature grounding screenshot",
        caption: "Topic direction support for cross-disciplinary exploration.",
      },
    ],
  },
  {
    id: "tarot-reflection",
    title: "Card-Mediated Reflection / Tarot Reflection Demo",
    displayTitle: "Tarot Reflection Demo",
    year: 2026,
    type: "ongoing",
    role: "Interaction design, prototype development, user testing",
    platform: "React, Vite, TypeScript",
    shortDescription:
      "A physical-digital tarot chatbox for reflective questioning, question transformation, and symbolic AI conversation.",
    abstract:
      "A physical-digital tarot chatbox for reflective questioning. Users enter a question, draw or input tarot cards, and continue a reflective AI conversation. The system does not predict the future; it uses tarot cards as symbolic prompts for question transformation, self-reflection, and warm parchment-style summaries.",
    tags: [
      "Reflective Interaction",
      "Symbolic Interaction",
      "Human-AI Interaction",
      "Tarot",
      "Ongoing Prototype",
      "User Testing",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/RoiBai/tarot" },
      { label: "Try Demo", url: "/art/tarot-site/demo/" },
    ],
    // TODO: if the tarot app is later merged directly, replace this route shell with the full React flow.
    image: "/images/tarot-site/tarot1-1.png",
    imageAlt: "Tarot Reflection Demo updated interface screenshot",
    route: "/tarot",
    status: "ongoing",
    featured: true,
    whyItMatters:
      "The demo treats symbolic cards as interaction material for reflection rather than prediction, making the AI conversation slower, warmer, and more user-led.",
  },
  {
    id: "rewind-past-self",
    title: "Rewind: A Past-Self Intervention via Character-Mediated Regret Replay",
    displayTitle: "Rewind",
    year: 2026,
    type: "ongoing",
    venue: "SUSTECH Pre-CHI Poster Share 2026",
    role: "Concept design, HCI research framing, interaction design, poster presentation",
    platform: "Mobile concept prototype, character-mediated reflection, affective capture",
    shortDescription:
      "A character-mediated reflection concept that helps people interrupt repeated unwanted habits by replaying a past-self regret episode through a cat avatar.",
    abstract:
      "Rewind explores how a past-self intervention can help people pause before repeating unwanted habits. After a regret episode, the user captures a short reflection through voice and facial expression. The system encodes this moment into an emotion-encoded cat avatar episode and later replays it at a moment of temptation, creating a softer decision pause. The project asks how regret can be captured, transformed, and brought back at the right time in a less threatening and more approachable form.",
    tags: [
      "Human-AI Interaction",
      "Reflective Systems",
      "Behavior Change",
      "Character-Mediated Interaction",
      "Affective Capture",
      "Mobile HCI",
      "Ongoing Research",
    ],
    links: [
      { label: "Try Demo", url: "/rewind/demo/" },
      {
        label: "View poster PDF",
        url: "/files/rewind/BAI_Ruiyuan_Final_Poster.pdf",
      },
    ],
    image: "/images/rewind/before-after-loop.png",
    imageAlt:
      "Rewind before and after loop showing how past-self intervention interrupts the temptation-regret cycle",
    route: "/rewind",
    status: "ongoing",
    featured: false,
    whatIDid: [
      "Framed the research concept around past-self intervention, regret capture, and decision pauses.",
      "Designed the cat-avatar mediation flow that transforms a regret episode into a replayable reflective prompt.",
      "Prepared and presented the poster at SUSTECH Pre-CHI poster sharing.",
    ],
    whyItMatters:
      "Rewind treats regret as material for gentle reflection rather than punishment, using a character-mediated replay to make behavior change feel more approachable.",
    sections: [
      {
        title: "Overview",
        body:
          "The poster frames Rewind as a past-self intervention: instead of relying only on willpower at the moment of temptation, the system brings back a captured past-self episode to create a pause before an unwanted habit repeats.",
      },
      {
        title: "Aims",
        body:
          "Rewind aims to make regret usable without making it punishing. The concept explores whether a character-mediated replay can help users notice repeated behavior loops, reconnect with a past intention, and choose differently in the moment.",
        items: [
          "Capture a regret episode through voice and facial expression.",
          "Encode the episode into a cat-avatar-mediated memory.",
          "Retrieve and replay the episode at a later temptation moment.",
          "Create a gentle decision pause rather than a guilt-heavy warning.",
        ],
      },
      {
        title: "Mechanism",
        body:
          "The visible mechanism consists of three stages: affective capture, avatar encoding, and triggered replay. The poster describes audio capture, facial dynamics capture, episode logging, episode retrieval, and affective replay.",
      },
      {
        title: "SUSTECH Poster Share",
        body:
          "This ongoing concept was shown during the SUSTECH Pre-CHI poster sharing session in March 2026, where the work was presented as an early HCI research direction around reflective systems and character-mediated behavior support.",
      },
    ],
    gallery: [
      {
        src: "/images/rewind/before-after-loop.png",
        alt: "Rewind comparison between behavior loop without and with past-self intervention",
        caption:
          "Before / after loop: past-self intervention interrupts the temptation-regret cycle.",
      },
      {
        src: "/images/rewind/mechanism-overview.png",
        alt: "Rewind mechanism overview with affective capture, avatar encoding, and triggered replay",
        caption:
          "Mechanism overview: affective capture, avatar encoding, and triggered replay.",
      },
      {
        src: "/images/rewind/cat-avatar-expressions.png",
        alt: "Rewind black cat avatar facial expression variations",
        caption:
          "Cat avatar expression states used for character-mediated affective replay.",
      },
      {
        src: "/images/rewind/scenario-strip.png",
        alt: "Rewind scenario strip showing late-night scrolling, regret capture, cat avatar replay, and a better morning",
        caption:
          "Scenario strip: a regret episode becomes a replayable prompt for the next temptation moment.",
      },
    ],
  },
  {
    id: "ambulance-rush",
    title: "Ramping Rush: Ambulance Rescue!",
    displayTitle: "Ramping Rush",
    year: 2025,
    type: "game",
    role: "Team Coordinator and Programming / Main Programmer",
    platform: "Unity, HTML5",
    shortDescription:
      "A Unity-based newsgame about ambulance ramping, time pressure, traffic, and overloaded hospitals.",
    abstract:
      "Ramping Rush: Ambulance Rescue! is a Unity-based newsgame where players take the role of a paramedic in Australia, racing against time to rescue patients while navigating traffic, overcrowded hospitals, and ambulance ramping delays. The game uses real-world public issues as playable systems, asking players to make fast decisions under pressure.",
    tags: ["Unity", "Newsgame", "Serious Game", "Journalism", "Public Issue", "Game Design"],
    links: [
      {
        label: "Play on itch.io",
        url: "https://unisanewsgames.itch.io/ambulance-rush",
      },
      {
        label: "Related Paper",
        url: "https://intellectdiscover.com/content/journals/10.1386/ajr_00184_1",
      },
    ],
    image: "/images/ambulance-rush/cover.jpg",
    imageAlt: "Ramping Rush Ambulance Rescue title menu",
    route: "/games/ambulance-rush",
    status: "released",
    featured: true,
    whyItMatters:
      "The project uses procedural rhetoric to let players experience public infrastructure pressure through time, movement, and difficult choices.",
    gallery: [
      {
        src: "/images/ambulance-rush/description-context-01.jpg",
        alt: "Ramping Rush context screen explaining ambulance ramping in South Australia",
        caption: "Context screen introducing ambulance ramping as a public issue.",
      },
      {
        src: "/images/ambulance-rush/description-context-02.jpg",
        alt: "Ramping Rush context screen explaining longer-term healthcare system pressure",
        caption: "Context screen linking the newsgame to healthcare system pressure.",
      },
      {
        src: "/images/ambulance-rush/description-context-03.jpg",
        alt: "Ramping Rush game introduction screen describing the paramedic role",
        caption: "Game introduction screen framing the player as a paramedic.",
      },
      {
        src: "/images/ambulance-rush/gameplay.jpg",
        alt: "Ramping Rush first-person ambulance gameplay",
        caption: "Gameplay view from inside the ambulance.",
      },
      {
        src: "/images/ambulance-rush/cover.jpg",
        alt: "Ramping Rush title menu",
        caption: "Game title screen and level menu.",
      },
      {
        src: "/images/ambulance-rush/contribution.jpg",
        alt: "Ramping Rush contribution and credits screen",
        caption: "Contribution screen showing Ruiyuan Bai as team coordinator and programmer.",
      },
    ],
  },
];

export const projectsByNewest = [...projects].sort((a, b) => b.year - a.year);

export const getProjectsByType = (type: ProjectType) =>
  projectsByNewest.filter((project) => project.type === type);

export const getProjectById = (id: string) =>
  projects.find((project) => project.id.toLowerCase() === id.toLowerCase());

export const getProjectByRoute = (route: string) =>
  projects.find((project) => project.route === route);
