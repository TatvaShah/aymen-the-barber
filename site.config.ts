import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Aymen the Barber",
  tagline: "Mobile barber in Mississauga and the GTA. Fresh cuts at your home, office, or hotel.",
  category: "Mobile barber",
  schemaType: "HairSalon",
  area: "Mississauga, ON",
  siteUrl: "https://aymen-the-barber.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c9a45c" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Mobile barber, Mississauga and GTA",
    headline: "The barbershop comes to you",
    subhead:
      "No driving. No waiting. Fades, tapers, beard work, and mens and kids haircuts at your home, office, or hotel. DM BOOK to schedule.",
    images: [
      { src: "/images/post-5.jpg", alt: "Mobile barber setup ready for a home visit", width: 1080, height: 1080 },
      { src: "/images/post-2.jpg", alt: "Fresh and clean haircut by Aymen", width: 1080, height: 1920 },
      { src: "/images/post-6.jpg", alt: "The barbershop comes to you", width: 621, height: 828 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Mobile in Mississauga and the GTA",
    "Home, office, or hotel",
    "Mens and kids haircuts",
    "Book by Instagram DM",
  ],

  about: {
    title: "Fresh cuts at your doorstep",
    body: [
      "Aymen the Barber brings the chair to you across Mississauga and the GTA. Stay home, stay at the office, or book a hotel visit and get a sharp cut without the drive or the wait.",
      "Fades, tapers, beard work, and mens and kids haircuts. Send a DM with BOOK and your preferred time to schedule.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Barber van and tools ready for a mobile cut", width: 1080, height: 1080 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Mobile cuts at your place. Ask in your DM for current pricing.",
    variant: "list",
    showPrices: false,
    priceNote: "Message for pricing on your cut and location.",
    groups: [
      {
        title: "Cuts",
        items: [
          { name: "Fades" },
          { name: "Tapers" },
          { name: "Beard" },
          { name: "Mens haircuts" },
          { name: "Kids haircuts" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/post-5.jpg", width: 1080, height: 1080, alt: "Mobile barber pulled up for a home cut", caption: "Your barber just pulled up", href: "https://www.instagram.com/p/DeGSIZiRhky/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1920, alt: "Fresh and clean haircut", caption: "Fresh and clean", href: "https://www.instagram.com/p/DeYHpufR3Bk/" },
      { src: "/images/post-6.jpg", width: 621, height: 828, alt: "Mobile barber service promo", caption: "The barbershop comes to you", href: "https://www.instagram.com/p/DeGQ0qUxKBd/" },
      { src: "/images/post-1.jpg", width: 640, height: 1136, alt: "Book now haircut reel still", caption: "Book now", href: "https://www.instagram.com/p/DeaGy2NxIRb/" },
      { src: "/images/post-3.jpg", width: 676, height: 1200, alt: "Professional haircut at the doorstep", caption: "At your doorstep", href: "https://www.instagram.com/p/DeKs-XpRNxy/" },
      { src: "/images/post-4.jpg", width: 576, height: 1024, alt: "Your cut, your style, your place", caption: "Your place", href: "https://www.instagram.com/p/DeHt8kHRr6P/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "thebarberaymen.ca",
    embeds: [
      "https://www.instagram.com/p/DeGSIZiRhky/",
      "https://www.instagram.com/p/DeYHpufR3Bk/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book a mobile cut",
    intro: "Appointments are booked through Instagram. Tap below to open a chat with a starter message, or DM BOOK.",
    dmMessage:
      "Hi Aymen! I would like to book a mobile haircut.\nPreferred date:\nPreferred time:\nLocation type (home / office / hotel):\nArea in Mississauga or GTA:\nStyle (fade, taper, beard, mens, kids):\nNotes:",
    links: [],
    note: "Serving Mississauga and the GTA at home, office, or hotel.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram DM with BOOK, your preferred date and time, and whether you need a home, office, or hotel visit." },
    { q: "Where do you come to?", a: "Mobile service across Mississauga and the GTA. Home, office, and hotel visits." },
    { q: "What services do you offer?", a: "Fades, tapers, beard work, and mens and kids haircuts." },
    { q: "Do you have a shop I need to drive to?", a: "No. The barbershop comes to you so there is no driving and no waiting room." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga and the GTA, Ontario",
  },

  seo: {
    title: "Aymen the Barber | Mobile barber in Mississauga",
    description: "Mobile barber in Mississauga and the GTA. Fades, tapers, beard, mens and kids haircuts at your home, office, or hotel. Book by Instagram DM.",
    keywords: ["mobile barber Mississauga", "home barber GTA", "fade haircut Mississauga", "kids haircut Mississauga"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
