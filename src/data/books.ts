export interface Book {
  id: string;
  name: string;
  desc: string;
  chaptersCount: number;
  bg: string; // Tailwind/CSS color gradients
}

export interface Chapter {
  id: string;
  name: string;
  questionsCount: number;
}

export interface SubjectBooks {
  title: string;
  badge: string;
  desc: string;
  books: Book[];
}

export const booksData: Record<string, SubjectBooks> = {
  met: {
    title: "Meteorology",
    badge: "METEOROLOGY",
    desc: "Choose a meteorology reference book to start learning weather science.",
    books: [
      { 
        id: "icjoshi", 
        name: "Aviation Meteorology", 
        chaptersCount: 15, 
        bg: "from-blue-600/30 via-indigo-600/10 to-transparent", 
        desc: "The standard textbook covering Indian subcontinental aviation weather systems." 
      },
      { 
        id: "oxf*rd_met", 
        name: "Oxf*rd Meteorology", 
        chaptersCount: 3, 
        bg: "from-purple-600/30 via-pink-600/10 to-transparent", 
        desc: "Comprehensive global meteorology standards, flight hazards, and thermodynamics." 
      }
    ]
  },
  nav: {
    title: "Air Navigation",
    badge: "AIR NAVIGATION",
    desc: "Choose an air navigation reference book to start learning logs and charts.",
    books: [
      { 
        id: "oxf*rd_nav", 
        name: "Oxf*rd Air Navigation", 
        chaptersCount: 5, 
        bg: "from-emerald-600/30 via-teal-600/10 to-transparent", 
        desc: "Covers earth geometry, magnetism, navigation logs, charts, and flight planning." 
      }
    ]
  }
};

export const chaptersData: Record<string, Record<string, Chapter[]>> = {
  met: {
    icjoshi: [
      { id: "ch1", name: "1. Atmosphere", questionsCount: 60 },
      { id: "ch2", name: "2. Atmospheric Pressure", questionsCount: 50 },
      { id: "ch3", name: "3. Atmospheric Temperature", questionsCount: 40 },
      { id: "ch4", name: "4. Air Density", questionsCount: 30 },
      { id: "ch5", name: "5. Humidity", questionsCount: 75 },
      { id: "ch6", name: "6. Wind", questionsCount: 50 },
      { id: "ch7", name: "7. Visibility and Fog", questionsCount: 40 },
      { id: "ch8", name: "8. Vertical Motion and Clouds", questionsCount: 60 },
      { id: "ch9", name: "9. Atmospheric Stability and Instability", questionsCount: 25 },
      { id: "ch10", name: "10. Optical Phenomena", questionsCount: 50 },
      { id: "ch11", name: "11. Precipitation", questionsCount: 40 },
      { id: "ch12", name: "12. Ice Accretion", questionsCount: 30 },
      { id: "ch13", name: "13. Thunderstorms", questionsCount: 60 },
      { id: "ch14", name: "14. Air Masses, Fronts and Western Disturbances", questionsCount: 50 },
      { id: "ch15", name: "15. Jet Streams", questionsCount: 40 }
    ],
    "oxf*rd_met": [
      { id: "ch1", name: "1. Meteorological Information", questionsCount: 50 },
      { id: "ch2", name: "2. Wind & Pressure", questionsCount: 40 },
      { id: "ch3", name: "3. Altimetry & Flight Level", questionsCount: 30 }
    ]
  },
  nav: {
    "oxf*rd_nav": [
      { id: "ch1", name: "1. Earth Geometry", questionsCount: 7 },
      { id: "ch2", name: "2. Magnetism & Compass", questionsCount: 10 },
      { id: "ch3", name: "3. Charts & Projections", questionsCount: 5 },
      { id: "ch4", name: "4. Dead Reckoning", questionsCount: 14 },
      { id: "ch5", name: "5. In-flight Navigation", questionsCount: 24 }
    ]
  }
};
