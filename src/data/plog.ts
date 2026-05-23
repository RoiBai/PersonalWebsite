export type PlogImage = {
  src: string;
  alt: string;
};

export type PlogItem = {
  id: string;
  period: string;
  title: string;
  location?: string;
  kind: "academic" | "life" | "travel" | "making";
  description: string;
  images: PlogImage[];
};

export const plogItems: PlogItem[] = [
  {
    id: "barcelona",
    period: "Apr 2026",
    title: "Barcelona: Color, Light, and CHI Traces",
    location: "Spain",
    kind: "travel",
    description:
      "A small travel archive of museum walls, Sagrada Familia light, SIGCHI traces, and ceiling geometry.",
    images: [
      { src: "/images/plog/barcelona-01.jpg", alt: "Ruiyuan Bai standing beside a large museum wall painting in Barcelona" },
      { src: "/images/plog/barcelona-02.jpg", alt: "Sagrada Familia exterior detail in warm orange light" },
      { src: "/images/plog/barcelona-03.jpg", alt: "Ruiyuan Bai inside Sagrada Familia with stained glass light" },
      { src: "/images/plog/barcelona-04.jpg", alt: "SIGCHI sign reading CHI loves everyone" },
      { src: "/images/plog/barcelona-05.jpg", alt: "Decorated dome ceiling in Barcelona" },
    ],
  },
  {
    id: "sustech-prechi-2026",
    period: "Mar 2026",
    title: "SUSTECH Pre-CHI Poster Share",
    location: "Shenzhen",
    kind: "academic",
    description:
      "Poster sharing at SUSTECH Pre-CHI, showing early HCI research work on character-mediated reflection.",
    images: [
      {
        src: "/images/plog/2026-03-sustech-prechi.jpg",
        alt: "Ruiyuan Bai standing in front of a Pre-CHI poster at SUSTECH",
      },
    ],
  },
  {
    id: "polyu-graduation-2025",
    period: "Nov 2025",
    title: "Undergraduate Graduation",
    location: "The Hong Kong Polytechnic University",
    kind: "academic",
    description:
      "Bachelor of Science in Financial Technology and Artificial Intelligence graduation ceremony, with one very serious dog graduate nearby.",
    images: [
      {
        src: "/images/plog/2025-11-polyu-graduation-stage.jpg",
        alt: "Ruiyuan Bai at the Hong Kong Polytechnic University graduation ceremony",
      },
      {
        src: "/images/plog/2025-11-polyu-dog-graduation.jpg",
        alt: "Ruiyuan Bai's dog wearing a graduation cap",
      },
    ],
  },
  {
    id: "beach-dog-2025",
    period: "Jun 2025",
    title: "Beach Walk With My Dog",
    location: "Hong Kong",
    kind: "life",
    description:
      "A soft personal marker: dog walking, sea wind, and the part of life that keeps the research brain human.",
    images: [
      {
        src: "/images/plog/2025-06-beach-dog.jpg",
        alt: "Ruiyuan Bai holding a smiling Shiba Inu at the beach",
      },
    ],
  },
  {
    id: "disney-anxiety-2024",
    period: "Oct 31, 2024",
    title: "Cosplay as Anxiety From Inside Out",
    location: "Hong Kong Disneyland",
    kind: "life",
    description:
      "Halloween at Disneyland, dressed as Anxiety from Inside Out. A surprisingly accurate HCI research mood board.",
    images: [
      {
        src: "/images/plog/2024-10-31-disney-inside-out-01.jpg",
        alt: "Ruiyuan Bai cosplaying Anxiety from Inside Out at Hong Kong Disneyland",
      },
      {
        src: "/images/plog/2024-10-31-disney-inside-out-02.jpg",
        alt: "Ruiyuan Bai cosplay image with I'm not good enough text",
      },
      {
        src: "/images/plog/2024-10-31-disney-inside-out-03.jpg",
        alt: "Ruiyuan Bai sitting on a prop block in Anxiety cosplay",
      },
    ],
  },
  {
    id: "xinjiang-2024",
    period: "Aug 2024",
    title: "Xinjiang: Mountains, Water, and Strange Scale",
    location: "Xinjiang",
    kind: "travel",
    description:
      "Travel notes in landscape form: snow mountains, grasslands, water, sun, and the feeling of being very small in a very large system.",
    images: [
      { src: "/images/plog/2024-08-xinjiang-01.jpg", alt: "Snow mountains in Xinjiang" },
      { src: "/images/plog/2024-08-xinjiang-02.jpg", alt: "Ruiyuan Bai lying on a grassland in Xinjiang" },
      { src: "/images/plog/2024-08-xinjiang-03.jpg", alt: "Ruiyuan Bai standing in front of mountains in Xinjiang" },
      { src: "/images/plog/2024-08-xinjiang-04.jpg", alt: "Ruiyuan Bai raising a cup in front of mountains" },
      { src: "/images/plog/2024-08-xinjiang-05.jpg", alt: "Ruiyuan Bai looking at a desert landscape in Xinjiang" },
      { src: "/images/plog/2024-08-xinjiang-06.jpg", alt: "Sunlight reflected on water through leaves" },
      { src: "/images/plog/2024-08-xinjiang-07.jpg", alt: "Ruiyuan Bai standing beside the sea during travel" },
      { src: "/images/plog/2024-08-xinjiang-08.jpg", alt: "Ruiyuan Bai near ocean waves and rocks" },
    ],
  },
];
