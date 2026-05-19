export const site = {
  name: "Life-Line-Trainingen",
  url: "https://life-line-training.nl",
  email: "info@life-line-trainingen.nl",
  address: ["Sleeg 1", "6905 BH Zevenaar"],
  description: "Praktijkgerichte trainingen in reanimatie, eerste hulp en waterveiligheid."
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-life-line-trainingen/" },
  { label: "Trainingen", href: "/trainingen/" },
  { label: "BLS", href: "/bls/" },
  { label: "PBLS", href: "/pbls/" },
  { label: "Instructeurs", href: "/instructeursopleidingen/" },
  { label: "Waterveiligheid", href: "/waterveiligheid/" },
  { label: "Contact", href: "/contact/" }
];

export const trainingCards = [
  { title: "BLS", href: "/bls/", eyebrow: "Reanimatie en AED", description: "Leer volwassenen reanimeren en een AED veilig inzetten volgens de richtlijnen van de Nederlandse Reanimatie Raad.", image: "/assets/photos/bls-reanimatie-aed.jpg" },
  { title: "PBLS", href: "/pbls/", eyebrow: "Kinderen en baby's", description: "Praktische training voor hulpverlening aan kinderen en baby's, met aandacht voor handelen onder druk.", image: "/assets/photos/bls-aed-training-breed.jpg" },
  { title: "Instructeursopleidingen", href: "/instructeursopleidingen/", eyebrow: "NRR en didactiek", description: "Word BLS- of PBLS-instructeur en ontwikkel naast technische vaardigheden ook je didactische kracht.", image: "/assets/photos/instructie-aan-bad.jpg" },
  { title: "Waterveiligheid", href: "/waterveiligheid/", eyebrow: "Zwembadbranche", description: "Trainingen voor zwembadmedewerkers en professionals die verdrinkingsongevallen willen voorkomen.", image: "/assets/photos/waterveiligheid-rescue-tube.jpg" }
];

export const pages = {
  "over-life-line-trainingen": {
    title: "Over Life-Line-Trainingen | Praktijkgerichte veiligheidstrainingen",
    description: "Maak kennis met Life-Line-Trainingen: specialist in eerste hulp, reanimatie en waterveiligheid.",
    eyebrow: "Over Life-Line-Trainingen",
    h1: "Expert in eerste hulpverlening in en rond het water.",
    intro: "Life-Line-Trainingen is ontstaan vanuit praktijkervaring in hulpverlening, zorg en onderwijs. Die combinatie zie je terug in trainingen die duidelijk, actief en afgestemd zijn op de mensen die ze volgen.",
    heroImage: "/assets/photos/over-instructeur-portret.jpg",
    heroAlt: "Instructeur van Life-Line-Trainingen in een zwembadomgeving.",
    gallery: [
      { src: "/assets/photos/zwembad-overzicht-rug.jpg", alt: "Life-Line instructeur kijkt uit over het zwembad." },
      { src: "/assets/photos/instructeur-zwembad-breed.jpg", alt: "Instructeur met reddingsmateriaal aan de rand van het zwembad." }
    ],
    sections: [
      { heading: "We trainen mensen in wat ze echt nodig hebben.", text: "De werkomstandigheden van de cursist staan centraal. Een zwembadteam heeft andere situaties, materialen en risico's dan een instructeur of hulpverlener. Daarom bereiden we trainingen zorgvuldig voor." },
      { heading: "Begonnen met eerste hulp, uitgegroeid tot specialist.", text: "Life-Line-Trainingen werd in 2003 opgericht. Vanuit reanimatie- en eerstehulptrainingen groeide de organisatie door naar een breed aanbod voor zwembadprofessionals, hulpverleners en instructeurs." }
    ]
  },
  trainingen: {
    title: "Trainingen | BLS, PBLS, instructeursopleidingen en waterveiligheid",
    description: "Bekijk de trainingen van Life-Line-Trainingen: BLS, PBLS, instructeursopleidingen en waterveiligheid.",
    eyebrow: "Trainingen",
    h1: "Praktische trainingen voor hulpverleners, instructeurs en zwembadteams.",
    intro: "Of je nu wilt leren reanimeren, instructeur wilt worden of een zwembadteam wilt trainen: Life-Line-Trainingen zorgt voor duidelijke inhoud, veel oefening en persoonlijke begeleiding.",
    heroImage: "/assets/photos/instructie-aan-bad.jpg",
    heroAlt: "Life-Line instructeur geeft aanwijzingen in een zwembad.",
    gallery: [
      { src: "/assets/photos/bls-reanimatie-aed.jpg", alt: "Reanimatietraining met AED naast het slachtoffer." },
      { src: "/assets/photos/waterveiligheid-rescue-tube.jpg", alt: "Reddingsmateriaal wordt klaargehouden bij het zwembad." },
      { src: "/assets/photos/instructeur-zwembad-breed.jpg", alt: "Life-Line instructeur tijdens een praktijktraining." }
    ],
    sections: [
      { heading: "Kies de training die past bij jouw situatie", text: "Alle trainingen zijn gericht op toepassen in de praktijk. Open inschrijving is mogelijk, en veel trainingen kunnen ook op locatie worden verzorgd." },
      { heading: "Voor organisaties, hulpverleners en instructeurs", text: "We stemmen trainingen af op locatie, branche, risico's, teamgrootte en leerdoelen." }
    ]
  },
  bls: {
    title: "BLS training | Reanimatie en AED volgens NRR-richtlijnen",
    description: "Volg een praktijkgerichte BLS training en leer volwassenen reanimeren en een AED gebruiken.",
    eyebrow: "BLS",
    h1: "Leer reanimeren en handelen met een AED.",
    intro: "Tijdens de BLS training leer je hoe je een volwassene reanimeert, hoe je een AED veilig inzet en hoe je rustig blijft handelen wanneer iedere seconde telt.",
    heroImage: "/assets/photos/bls-aed-training-breed.jpg",
    heroAlt: "BLS training met reanimatiepop en AED aan de badrand.",
    gallery: [
      { src: "/assets/photos/bls-reanimatie-aed.jpg", alt: "Borstcompressies oefenen op een reanimatiepop." },
      { src: "/assets/photos/bls-aed-training-breed.jpg", alt: "BLS training met reanimatiepop en AED." }
    ],
    sections: [
      { heading: "Praktisch oefenen volgens duidelijke stappen", text: "Je oefent borstcompressies, beademingen, AED-gebruik en samenwerking met omstanders in herkenbare scenario's." },
      { heading: "Meer zekerheid in een noodsituatie", text: "Na afloop weet je wat je moet doen bij een circulatiestilstand en heb je geoefend met de vaardigheden die daarbij horen." }
    ]
  },
  pbls: {
    title: "PBLS training | Reanimatie bij kinderen en baby's",
    description: "PBLS training voor hulpverlening aan kinderen en baby's. Praktisch oefenen met reanimatie, AED en handelen onder druk.",
    eyebrow: "PBLS",
    h1: "Reanimatie en eerste handelen bij kinderen en baby's.",
    intro: "PBLS vraagt om kennis, rust en veel oefening. In deze training leer je hoe je handelt bij levensbedreigende situaties bij kinderen en baby's.",
    heroImage: "/assets/photos/bls-aed-training-breed.jpg",
    heroAlt: "AED en reanimatiepop tijdens een praktijksituatie.",
    gallery: [
      { src: "/assets/photos/bls-reanimatie-aed.jpg", alt: "Reanimatievaardigheden worden praktisch geoefend." },
      { src: "/assets/photos/bls-aed-training-breed.jpg", alt: "AED en reanimatiepop tijdens een praktijksituatie." }
    ],
    sections: [
      { heading: "Voor professionals die met kinderen werken", text: "Relevant voor hulpverleners, instructeurs, kinderopvang, zwemscholen en organisaties waar kinderen aanwezig zijn." },
      { heading: "Veel oefenen, heldere feedback", text: "Scenario's helpen om overzicht te houden, de juiste stappen te zetten en effectief te blijven handelen." }
    ]
  },
  instructeursopleidingen: {
    title: "Instructeursopleidingen | BLS en PBLS instructeur worden",
    description: "Word reanimatie-instructeur bij Life-Line-Trainingen. Kleine groepen, persoonlijke aandacht en NRR-richtlijnen.",
    eyebrow: "Instructeursopleidingen",
    h1: "Word een betere instructeur in reanimatie en eerste hulp.",
    intro: "Bij Life-Line-Trainingen ontwikkel je niet alleen technische vaardigheden, maar ook je didactiek. Je leert cursisten begeleiden, feedback geven en trainingen betekenisvol maken.",
    heroImage: "/assets/photos/waterveiligheid-aanwijzen.jpg",
    heroAlt: "Instructeur wijst een aandachtspunt aan in de zwembadomgeving.",
    gallery: [
      { src: "/assets/photos/over-instructeur-portret.jpg", alt: "Portret van een Life-Line instructeur." },
      { src: "/assets/photos/instructie-aan-bad.jpg", alt: "Praktische instructie aan de badrand." }
    ],
    sections: [
      { heading: "Kleine groepen en persoonlijke begeleiding", text: "De opleiding wordt verzorgd volgens de richtlijnen van de Nederlandse Reanimatie Raad, met ruimte voor oefening, reflectie en persoonlijke groei." },
      { heading: "Meer dan instructie geven", text: "Een goede instructeur beheerst de vaardigheden, maar weet ook hoe mensen leren. Daarom is er aandacht voor leerprocessen, feedback en actuele ontwikkelingen." }
    ]
  },
  waterveiligheid: {
    title: "Waterveiligheid | Trainingen voor zwembadprofessionals",
    description: "Trainingen in waterveiligheid, eerste hulp en zwemmend redden voor zwembadteams.",
    eyebrow: "Waterveiligheid",
    h1: "Help verdrinkingsongevallen voorkomen in jouw zwembad.",
    intro: "Waterveiligheid vraagt om oplettendheid, kennis en daadkracht. Life-Line-Trainingen traint zwembadmedewerkers om risico's te herkennen, te voorkomen en effectief te handelen.",
    heroImage: "/assets/photos/waterredding-praktijk.jpg",
    heroAlt: "Praktijkoefening waterredding in het zwembad.",
    gallery: [
      { src: "/assets/photos/waterveiligheid-rescue-tube.jpg", alt: "Reddingsmateriaal bij het zwembad." },
      { src: "/assets/photos/reddingsmateriaal-bad.jpg", alt: "Instructeur met reddingsmateriaal aan de badrand." },
      { src: "/assets/photos/zwembad-overzicht-rug.jpg", alt: "Zwembadomgeving waar waterveiligheid wordt geoefend." }
    ],
    sections: [
      { heading: "Een jaarprogramma voor blijvende scherpte", text: "Het Lifesaverprogramma combineert eerste hulp, bedrijfshulpverlening en zwemmend redden in een actief programma voor zwembadorganisaties." },
      { heading: "Leren op locatie", text: "Bij voorkeur trainen we in de eigen omgeving, waar herkenbaarheid het grootst is en teamafspraken direct geoefend kunnen worden." }
    ]
  },
  contact: {
    title: "Contact | Life-Line-Trainingen",
    description: "Neem contact op met Life-Line-Trainingen voor vragen over BLS, PBLS, instructeursopleidingen en waterveiligheid.",
    eyebrow: "Contact",
    h1: "Vertel waar je mensen beter in wilt maken.",
    intro: "Heb je een vraag over een training, wil je een team opleiden of zoek je maatwerk? Stuur je vraag en we nemen zo snel mogelijk contact op.",
    heroImage: "/assets/photos/instructeur-zwembad-breed.jpg",
    heroAlt: "Life-Line instructeur met reddingsmateriaal in een zwembad.",
    sections: []
  }
};
