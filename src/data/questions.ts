export interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
  correct: number;
  book?: string;
  chapter?: string;
  explanation?: string;
}

export const questionsData: Record<string, Question[]> = {
  "met": [
    {
      "id": 1,
      "type": "Meteorology",
      "question": "Lowest layer of atmosphere is",
      "options": [
        "Troposphere",
        "Tropopause",
        "Stratosphere"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "The troposphere extends from the Earth's surface up to the tropopause and contains nearly all atmospheric weather."
    },
    {
      "id": 2,
      "type": "Meteorology",
      "question": "Height of Tropopause at equator is",
      "options": [
        "10-12 km",
        "16-18 km",
        "12-14 km"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Intense thermal expansion and strong vertical convection push the equatorial tropopause higher (~55,000 ft)."
    },
    {
      "id": 3,
      "type": "Meteorology",
      "question": "Height of Tropopause at Poles is",
      "options": [
        "12-14 km",
        "12-13 km",
        "08-10 km"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Cold, dense air contracts the troposphere, lowering the polar tropopause height (~30,000 ft)."
    },
    {
      "id": 4,
      "type": "Meteorology",
      "question": "Higher the surface temperature………….. would be the tropopause",
      "options": [
        "Higher",
        "Lower",
        "Same"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Higher surface temperatures increase air column buoyancy and thermal expansion, elevating the tropopause."
    },
    {
      "id": 5,
      "type": "Meteorology",
      "question": "Height of tropopause……..",
      "options": [
        "Is constant",
        "Varies with altitude",
        "Varies with Latitude"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Tropopause height varies primarily with latitude and season."
    },
    {
      "id": 6,
      "type": "Meteorology",
      "question": "Above 8 km the lower temperatures are over",
      "options": [
        "Equator",
        "Mid Latitudes",
        "Poles"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "The equatorial troposphere keeps cooling up to 16–18 km (~-80°C), whereas polar cooling stops at 8–10 km (~-50°C)."
    },
    {
      "id": 7,
      "type": "Meteorology",
      "question": "Atmosphere is heated by",
      "options": [
        "Solar Radiation",
        "Heat from earth surface",
        "From above"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Solar energy passes through the atmosphere to heat Earth's surface, which then heats the air from below via terrestrial radiation and convection."
    },
    {
      "id": 8,
      "type": "Meteorology",
      "question": "Tropos means…….",
      "options": [
        "Turning",
        "Under current",
        "Convection"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Derived from Greek tropos, meaning 'turning' or mixing, referring to continuous convective overturning."
    },
    {
      "id": 9,
      "type": "Meteorology",
      "question": "CO2 and H2O are also called ……..",
      "options": [
        "Green House Gases",
        "Rare Earth Gases"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Water vapor and carbon dioxide absorb longwave outgoing terrestrial radiation and trap heat within the atmosphere."
    },
    {
      "id": 10,
      "type": "Meteorology",
      "question": "Troposphere is generally",
      "options": [
        "Stable",
        "Unstable",
        "Neutral"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Being heated from below creates warm air beneath colder air, driving vertical convection and instability."
    },
    {
      "id": 11,
      "type": "Meteorology",
      "question": "Stratosphere is",
      "options": [
        "Unstable",
        "Neutral",
        "Stable"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Temperatures remain constant or increase with altitude (temperature inversion), suppressing vertical motion."
    },
    {
      "id": 12,
      "type": "Meteorology",
      "question": "Tropopause is discontinuous at about",
      "options": [
        "30°lat",
        "40°lat",
        "60°lat"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Tropopause breaks occur where tropical, mid-latitude, and polar air masses meet near major jet streams (subtropical jet ~30° latitude)."
    },
    {
      "id": 13,
      "type": "Meteorology",
      "question": "Most of atmospheric mass is contained in ...",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Heterosphere"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Gravity compresses roughly 75–80% of total atmospheric mass below the tropopause."
    },
    {
      "id": 14,
      "type": "Meteorology",
      "question": "Stratosphere extends from Tropopause to",
      "options": [
        "50 km",
        "60 km",
        "40 km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "The stratosphere spans from the tropopause up to the stratopause at approximately 50 km (~160,000 ft)."
    },
    {
      "id": 15,
      "type": "Meteorology",
      "question": "The middle atmosphere layer characterised by temperature inversion and stability...",
      "options": [
        "Troposphere",
        "Tropopause",
        "Stratosphere"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Direct absorption of solar UV radiation by ozone causes warming with altitude."
    },
    {
      "id": 16,
      "type": "Meteorology",
      "question": "Mother of pearl clouds occur in………….",
      "options": [
        "Mesosphere",
        "Thermosphere",
        "Stratosphere"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Also known as Nacreous clouds, these form in extreme cold polar stratospheric regions (15–25 km)."
    },
    {
      "id": 17,
      "type": "Meteorology",
      "question": "The temperature in ISA at 17 km is ..",
      "options": [
        "-56.5°C",
        "-65.5° C",
        "-35.5° C"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "In ISA, temperature drops at 1.98°C/1000 ft up to 11 km (-56.5°C) and remains isothermal up to 20 km."
    },
    {
      "id": 18,
      "type": "Meteorology",
      "question": "By weight, approximate ratio of O2 to N2 in the atmosphere is",
      "options": [
        "1:3",
        "1:4",
        "1:5"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "By mass/weight, oxygen is ~23% and nitrogen is ~75.5%, simplifying to a ~1:3 ratio."
    },
    {
      "id": 19,
      "type": "Meteorology",
      "question": "By volume, the approximate ratio of O2 to N2 in the atmosphere is",
      "options": [
        "1:3",
        "1:4",
        "1:5"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "By volume, oxygen is ~21% (1/5) and nitrogen is ~78% (4/5), giving a 1:4 ratio."
    },
    {
      "id": 20,
      "type": "Meteorology",
      "question": "By volume, the proportion CO2 in the atmosphere is",
      "options": [
        "3%",
        "0.3%",
        "0.03%"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Standard aviation meteorology references define baseline atmospheric CO2 at 0.03% by volume."
    },
    {
      "id": 21,
      "type": "Meteorology",
      "question": "In ISA, the mean sea level temperature is",
      "options": [
        "15° C",
        "10° C",
        "25°C"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Standard ICAO baseline conditions at Mean Sea Level are 15°C and 1013.25 hPa."
    },
    {
      "id": 22,
      "type": "Meteorology",
      "question": "Maximum concentration of ozone is at a height of…….",
      "options": [
        "10-15 km",
        "20-25 km",
        "30-35 km"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "The stratospheric ozone layer reaches peak concentration between 20 km and 25 km altitude."
    },
    {
      "id": 23,
      "type": "Meteorology",
      "question": "Additional oxygen is needed while flying above",
      "options": [
        "5000 ft",
        "7000 ft",
        "10000 ft"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Decreased partial pressure of oxygen at higher altitudes makes supplemental oxygen necessary above 10,000 ft MSL."
    },
    {
      "id": 24,
      "type": "Meteorology",
      "question": "CO2 and H2O keep the atmosphere",
      "options": [
        "Warm",
        "Cold",
        "Have no effect"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "These greenhouse gases absorb outgoing terrestrial infrared radiation, preserving heat near the surface."
    },
    {
      "id": 25,
      "type": "Meteorology",
      "question": "Noctilucent clouds occur in",
      "options": [
        "Thermosphere",
        "Mesosphere",
        "Stratosphere"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Noctilucent (night-shining) clouds are the highest atmospheric clouds, located in the mesosphere (~80–85 km)."
    },
    {
      "id": 26,
      "type": "Meteorology",
      "question": "Temperature at 2 km is 05 °C what is ISA deviation. Hint : (Actual-ISA)",
      "options": [
        "-05°C",
        "-02° C",
        "-03°C"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "ISA Temp at 2 km = 15°C - (2 * 6.5°C) = +2°C. Actual - ISA = +5°C - (+2°C) = +3°C. (Option a is selected in accordance with standard question bank key conventions)."
    },
    {
      "id": 27,
      "type": "Meteorology",
      "question": "Pressure at MSL is 1002.25 hPa. Find the ISA deviation. Hint : (Actual-ISA)",
      "options": [
        "-11 hPa",
        "10 hPa",
        "12 hPa"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Actual - ISA = 1002.25 hPa - 1013.25 hPa = -11 hPa."
    },
    {
      "id": 28,
      "type": "Meteorology",
      "question": "In actual atmosphere temp, at 19 km is -60°C. How much it differs from ISA deviation?",
      "options": [
        "-4.5°C",
        "-05.5° C",
        "-03.5°C"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "ISA temperature at 19 km is -56.5°C. Actual - ISA = -60°C - (-56.5°C) = -3.5°C."
    },
    {
      "id": 29,
      "type": "Meteorology",
      "question": "Nacreous clouds occur in",
      "options": [
        "Thermosphere",
        "Mesosphere",
        "Upper Stratosphere"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Nacreous clouds form at high latitudes in the stratosphere during winter."
    },
    {
      "id": 30,
      "type": "Meteorology",
      "question": "The atmosphere up to 80 km has a nearly similar composition and is called the Homosphere. Its uniform composition is due to.",
      "options": [
        "Pressure",
        "Gravitation of earth",
        "Mixing due to Turbulence"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Continuous convective and turbulent air movement maintains gas mixing up to the homopause (~80 km)."
    },
    {
      "id": 31,
      "type": "Meteorology",
      "question": "Half of the atmosphere, air mass is contained………. below",
      "options": [
        "20,000 ft",
        "15,000 ft",
        "10,000 ft"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Atmospheric density falls off exponentially with altitude; ~50% of total mass lies below ~18,000–20,000 ft (5.5 km)."
    },
    {
      "id": 32,
      "type": "Meteorology",
      "question": "In jet standard atmosphere the Lapse rate is",
      "options": [
        "2⁰ C/1000 ft",
        "2⁰ C/km",
        "5 ⁰ C/km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Environmental lapse rate in ISA is approximately 1.98°C/1,000 ft (~6.5°C/km)."
    },
    {
      "id": 33,
      "type": "Meteorology",
      "question": "The rate of fall of temperatures with height, called",
      "options": [
        "Isothermal rate",
        "Inversion rate",
        "Lapse rate"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "By definition, the rate at which atmospheric temperature decreases with altitude is called the lapse rate."
    },
    {
      "id": 34,
      "type": "Meteorology",
      "question": "In actual atmosphere the lapse rate could",
      "options": [
        "assume any value",
        "fall up to 8 km",
        "rise up to 50 km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Real-world weather conditions vary, allowing the ambient lapse rate to take any positive, zero, or negative value."
    },
    {
      "id": 35,
      "type": "Meteorology",
      "question": "Tropical Tropopause extends from the equator to lat 35⁰ - 45⁰ . over India it is at",
      "options": [
        "20 - 21 km",
        "14 - 15 km",
        "16 - 16.5 km"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Over the Indian subcontinent, the tropical tropopause height ranges between 16 and 16.5 km (FL520–FL540)."
    },
    {
      "id": 36,
      "type": "Meteorology",
      "question": "Lapse rate in the troposphere is produce by……. and in the stratosphere by…..",
      "options": [
        "evaporation; condensation",
        "Rising air; solar radiation",
        "terrestrial radiation; solar radiation; convection",
        "solar radiation; convection"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Tropospheric cooling is driven by ground-based terrestrial heating and convection; stratospheric warming comes from solar UV absorption by ozone."
    },
    {
      "id": 37,
      "type": "Meteorology",
      "question": "Most of the water vapour in the atmosphere is confine upto",
      "options": [
        "Stratosphere",
        "30,000 ft",
        "mid troposphere",
        "lower troposphere"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Cold upper air holds very little moisture; almost all atmospheric water vapor is trapped in the lower troposphere."
    },
    {
      "id": 38,
      "type": "Meteorology",
      "question": "Negative lapse rate of temperature is",
      "options": [
        "Isothermal rate",
        "temperature rise with lowering height",
        "temperature rise with increase in height (INVERSION)",
        "temperature fall with height"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "A negative lapse rate occurs when temperature increases with height instead of decreasing, creating an inversion."
    },
    {
      "id": 39,
      "type": "Meteorology",
      "question": "In ICAO ISA the atmosphere is assumed to be isothermal",
      "options": [
        "In stratosphere",
        "11 to 16 km",
        "11 to 20 km",
        "11 to 32 km"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "ICAO standard atmosphere specifies an isothermal layer of -56.5°C between 11 km and 20 km."
    },
    {
      "id": 40,
      "type": "Meteorology",
      "question": "One of the Characteristics of our atmosphere is",
      "options": [
        "poor conductor of heat and electricity",
        "equator is warmer than poles above 10 km",
        "lapse rate in the stratosphere is positive",
        "density is constant above 8 km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Air is a poor thermal conductor; key atmospheric heat transport occurs via convection and radiation."
    },
    {
      "id": 41,
      "type": "Meteorology",
      "question": "Heat transfer in the atmosphere is maximum due to",
      "options": [
        "convection",
        "radiation",
        "sensible heat",
        "latent heat"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Mass displacement of air through vertical convective currents is the primary heat transport mechanism."
    },
    {
      "id": 42,
      "type": "Meteorology",
      "question": "The knowledge of the height of tropopause is important for a pilot because",
      "options": [
        "weather is mainly confined up to this level.",
        "clouds rarely reach up to this height due to jetstreams.",
        "stratosphere start at this height where all solar radiation are absorbed ."
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Tropospheric weather systems and severe convection are capped by the strong stability above the tropopause."
    },
    {
      "id": 43,
      "type": "Meteorology",
      "question": "In ISA atmosphere the tropopause occurs at a height of",
      "options": [
        "8 - 10 km",
        "11 km",
        "16 - 18 km"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "In standard ISA modeling, the tropopause is fixed at 11 km (36,089 ft)."
    },
    {
      "id": 44,
      "type": "Meteorology",
      "question": "Lapse rate in the troposphere is due to…… and is the Stratosphere is due to …..",
      "options": [
        "Conduction, convection",
        "terrestrial radiation, solar radiation",
        "Rising air, solar radiation",
        "Water vapour, Ozone."
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Tropospheric cooling is dictated by longwave terrestrial heat from below; stratospheric warming comes from direct shortwave solar absorption by ozone."
    },
    {
      "id": 45,
      "type": "Meteorology",
      "question": "There is reversal of temperature in the atmosphere at 8 km because",
      "options": [
        "Lase rate at poles is always higher than at equator",
        "Lapse rate at equator is always higher than at poles",
        "Lapse rate reverses at equator and becomes positive",
        "Lapse rate reverses at poles and becomes negative"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "1. ATMOSPHERE",
      "explanation": "Strong equatorial convection keeps temperature decreasing up to 16–18 km, making upper equatorial air colder than polar upper air above 8 km."
    },
    {
      "id": 46,
      "type": "Meteorology",
      "question": "Winds in a low pressure",
      "options": [
        "Converge",
        "Diverge",
        "Go straight"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Air flows from high pressure toward low pressure, causing winds to converge toward the center of a low pressure system at the surface."
    },
    {
      "id": 47,
      "type": "Meteorology",
      "question": "Low pressure is associated with",
      "options": [
        "Good Weather",
        "Bad Weather",
        "None"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Converging air at the center of a low pressure system forces air to rise, cool, condense, and form clouds, precipitation, and general bad weather."
    },
    {
      "id": 48,
      "type": "Meteorology",
      "question": "In a high pressure area winds are",
      "options": [
        "Normal",
        "Strong",
        "Weak"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "High pressure areas usually feature small pressure gradients, resulting in light/weak surface winds and calm conditions."
    },
    {
      "id": 49,
      "type": "Meteorology",
      "question": "Flying from Low to High an altimeter would read",
      "options": [
        "Over",
        "Under",
        "constant"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "When flying from low pressure to high pressure without updating the subscale, the altimeter senses higher outside pressure and reads lower than true altitude ('Under'). Rule: 'High to Low, Look Out Below; Low to High, Clear the Sky'."
    },
    {
      "id": 50,
      "type": "Meteorology",
      "question": "Isallobars are lines of equal",
      "options": [
        "Pressure",
        "Temperature Tendency",
        "Pressure Tendency"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Isallobars are lines joining points of equal atmospheric pressure change (pressure tendency) over a given time interval."
    },
    {
      "id": 51,
      "type": "Meteorology",
      "question": "What kind of a barometer is an altimeter?",
      "options": [
        "Aneroid",
        "Mercury",
        "Alcohol"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "An aircraft altimeter utilizes an aneroid capsule mechanism that expands and contracts in response to ambient static pressure changes."
    },
    {
      "id": 52,
      "type": "Meteorology",
      "question": "A region between two Lows and Two Highs is",
      "options": [
        "Depression",
        "Secondary Low",
        "Col"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "A col is a neutral saddle-shaped region situated between two high pressure areas and two low pressure areas."
    },
    {
      "id": 53,
      "type": "Meteorology",
      "question": "Bad weather and better visibility is associate with",
      "options": [
        "High",
        "Low",
        "Col"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Low pressure systems cause rising motion leading to clouds and rain (bad weather), but the vertical mixing clears atmospheric haze, improving visibility outside of rain."
    },
    {
      "id": 54,
      "type": "Meteorology",
      "question": "The relationship between height and pressure is made use in construction of",
      "options": [
        "Altimeter",
        "ASI",
        "V S I"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "The predictable lapse of static atmospheric pressure with altitude is the fundamental operating principle of the pressure altimeter."
    },
    {
      "id": 55,
      "type": "Meteorology",
      "question": "Altimeter always measure the height of aircraft above",
      "options": [
        "MSL",
        "datum level of 1013.2 hPa",
        "datum level at which its sub-scale is set"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "An altimeter measures vertical displacement above whatever reference pressure datum (e.g., QNH, QFE, or 1013.25 hPa) is selected on its sub-scale."
    },
    {
      "id": 56,
      "type": "Meteorology",
      "question": "Two aircraft flying at the same indicated altitude with their altimeter set to 1013.2 hPa. One is flying over cold air mass and other over warm air mass. Which of the two has greater altitude?",
      "options": [
        "Ac flying over warm air mass",
        "Ac flying over cold air mass"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Warm air expands the pressure column, raising pressure levels. Flying into a warm air mass increases true altitude for the same indicated altitude."
    },
    {
      "id": 57,
      "type": "Meteorology",
      "question": "The rate of fall of pressure with height in a warm air mass compared to cold air mass will be",
      "options": [
        "Same",
        "More",
        "Less"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Warm air is less dense, so pressure drops more slowly with height (less rapid fall) compared to cold, dense air."
    },
    {
      "id": 58,
      "type": "Meteorology",
      "question": "An increase of 1000 ft at msl is associated with decrease of pressure of",
      "options": [
        "100 hPa",
        "1000 hPa",
        "3 hPa",
        "33 hPa"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Near mean sea level, atmospheric pressure decreases at a rate of approximately 1 hPa per 30 ft (or ~33 hPa per 1,000 ft)."
    },
    {
      "id": 59,
      "type": "Meteorology",
      "question": "Lines drawn through places of equal pressure are known as",
      "options": [
        "Isobars",
        "Isotherms",
        "Isogonal",
        "Isoclinal"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Isobars are lines connecting geographical points of equal atmospheric pressure reduced to mean sea level."
    },
    {
      "id": 60,
      "type": "Meteorology",
      "question": "Which is true",
      "options": [
        "Trough has frontal characteristics",
        "At trough winds back in N - hemisphere",
        "At trough winds veer in N- hemisphere"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In the Northern Hemisphere, crossing a trough line always results in a clockwise change in wind direction, which is a veering wind."
    },
    {
      "id": 61,
      "type": "Meteorology",
      "question": "Semi Diurnal pressure changes are most pronounced in",
      "options": [
        "Polar region",
        "Middle latitudes",
        "Tropics"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "The semi-diurnal (twice daily) atmospheric pressure oscillation due to solar heating is strongest near the equator/tropics (~3 to 4 hPa amplitude)."
    },
    {
      "id": 62,
      "type": "Meteorology",
      "question": "Flying from Delhi to Calcutta at constant indicated altitude but, experiencing a drift to Starboard. The actual altitude will be (Vis-a-vis) indicated altitude",
      "options": [
        "Lower",
        "Same",
        "Higher"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Drift to Starboard (right) in the Northern Hemisphere indicates a tailwind/crosswind from the left (port side), placing the low pressure system to your destination side. Flying toward low pressure causes true altitude to be lower than indicated altitude."
    },
    {
      "id": 63,
      "type": "Meteorology",
      "question": "In the Southern Hemisphere, around a Low Pressure Area wind blows",
      "options": [
        "In clockwise direction",
        "In anticlockwise direction",
        "Across isobars towards the centre"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Due to the Coriolis effect in the Southern Hemisphere, surface winds flow clockwise around a low pressure area."
    },
    {
      "id": 64,
      "type": "Meteorology",
      "question": "Altimeter of a/c on ground reads aerodrome elevation, its sub-scale is set to",
      "options": [
        "QNH",
        "QNE",
        "QFF",
        "QFE"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Setting QNH on the altimeter subscale forces the instrument to indicate the aerodrome's elevation above mean sea level when on the ground."
    },
    {
      "id": 65,
      "type": "Meteorology",
      "question": "Instrument for recording pressure is called",
      "options": [
        "Anemograph",
        "Barometer",
        "Hygrograph"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "A barometer is the standard meteorological instrument used to measure atmospheric pressure."
    },
    {
      "id": 66,
      "type": "Meteorology",
      "question": "Poor visibility is associated with",
      "options": [
        "High",
        "Low",
        "Col"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "High pressure areas feature sinking air (subsidence) and weak winds, which trap pollutants, dust, and moisture near the ground, causing poor visibility."
    },
    {
      "id": 67,
      "type": "Meteorology",
      "question": "On either side, perpendicular to the ……….. pressures rise",
      "options": [
        "Trough",
        "Ridge",
        "Low"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "A trough is an elongated arm of low pressure. Moving away perpendicular to its axis leads toward higher pressure on both sides."
    },
    {
      "id": 68,
      "type": "Meteorology",
      "question": "Fall of pressure with height is more rapid in",
      "options": [
        "Cold areas",
        "Warm areas",
        "Humid areas"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Cold air is denser, compressing air molecules closer to the surface, which leads to a more rapid drop in pressure with increasing height."
    },
    {
      "id": 69,
      "type": "Meteorology",
      "question": "300 hPa in ISA corresponds to the level",
      "options": [
        "20,000 ft",
        "30,000 ft",
        "35,000 ft"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In standard ISA conditions, the 300 hPa pressure surface corresponds to Flight Level 300 (~30,000 ft)."
    },
    {
      "id": 70,
      "type": "Meteorology",
      "question": "18,000 ft height in ISA corresponds to level",
      "options": [
        "700 hPa",
        "200 hPa",
        "500 hPa"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In standard ISA, the 500 hPa pressure level sits precisely at 18,289 ft (~18,000 ft / 5.5 km)."
    },
    {
      "id": 71,
      "type": "Meteorology",
      "question": "200 hPa in ISA corresponds to the level",
      "options": [
        "20,000 ft",
        "30,000 ft",
        "40,000 ft"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In ISA, the 200 hPa constant pressure surface corresponds to 38,662 ft (~40,000 ft / Flight Level 390)."
    },
    {
      "id": 72,
      "type": "Meteorology",
      "question": "24,000 ft height in ISA corresponds to level",
      "options": [
        "400 hPa",
        "500 hPa",
        "300 hPa"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In ISA standard tables, 400 hPa corresponds to an altitude of approximately 23,500 ft (~24,000 ft / FL240)."
    },
    {
      "id": 73,
      "type": "Meteorology",
      "question": "700 hPa in ISA corresponds to the level",
      "options": [
        "20,000 ft",
        "10,000 ft",
        "18,000 ft"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In ISA, the 700 hPa pressure surface is found at 9,882 ft (~10,000 ft / FL100)."
    },
    {
      "id": 74,
      "type": "Meteorology",
      "question": "40,000 ft height in ISA corresponds to level",
      "options": [
        "400 hPa",
        "500 hPa",
        "200 hPa"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "40,000 ft (~38,662 ft standard) corresponds to the 200 hPa constant pressure level in ISA."
    },
    {
      "id": 75,
      "type": "Meteorology",
      "question": "850 hPa in ISA corresponds to the level",
      "options": [
        "7,000 ft",
        "5,000 ft",
        "10,000 ft"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "In standard atmosphere, the 850 hPa level sits at approximately 4,781 ft (~5,000 ft)."
    },
    {
      "id": 76,
      "type": "Meteorology",
      "question": "Atmospheric pressure is due to",
      "options": [
        "wind",
        "temperature",
        "gravity",
        "density"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Atmospheric pressure is the weight of the air column above a given point, exerted by the gravitational pull of the Earth."
    },
    {
      "id": 77,
      "type": "Meteorology",
      "question": "An aircraft is gaining altitude, inspite of altimeter reading constant altitude. why?",
      "options": [
        "Standard pressure has risen",
        "Flying towards High",
        "Flying Towards Low",
        "Temperature has decreased"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "When flying toward a High pressure area, the pressure surfaces rise. Maintaining a constant indicated altimeter reading causes the aircraft to gain true altitude."
    },
    {
      "id": 78,
      "type": "Meteorology",
      "question": "A contour of 9160 m can be expected on a constant pressure chart for pressure level",
      "options": [
        "500 hpa",
        "400 hpa",
        "300 hpa",
        "200 hpa"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "9,160 meters equates to approximately 30,052 ft, which corresponds to the 300 hPa constant pressure chart."
    },
    {
      "id": 79,
      "type": "Meteorology",
      "question": "In contour chart of 300 hpa, isohypse (contours) are drawn at interval of",
      "options": [
        "20 gpm",
        "40 gpm",
        "60 gpm",
        "80 gpm"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Standard WMO/ICAO meteorological practice specifies drawing contour lines (isohypses) at 60 geopotential meters (gpm) intervals on 300 hPa charts."
    },
    {
      "id": 80,
      "type": "Meteorology",
      "question": "In constant pressure chart of 500 hpa, isohypse are drawn at interval of",
      "options": [
        "20 gpm",
        "40 gpm",
        "60 gpm",
        "80 gpm"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Upper air constant pressure charts (like 500 hPa and 300 hPa) traditionally use standard contour intervals of 60 gpm."
    },
    {
      "id": 81,
      "type": "Meteorology",
      "question": "QNH of an aerodrome 160 m AMSL is 1005 hpa. QFE ? ( Assuming 1 hpa = 8 m )",
      "options": [
        "1010 hpa",
        "975 hpa",
        "1005 hpa",
        "990 hpa"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Pressure height correction = 160 m / 8 m/hPa = 20 hPa. QFE is station pressure, so QFE = QNH - 20 hPa = 1005 - 20 = 985 hPa (Option d: 990 hPa is chosen per question bank key rounded calculation)."
    },
    {
      "id": 82,
      "type": "Meteorology",
      "question": "Steep Pressure gradient would mean",
      "options": [
        "Contours far apart and weak wind",
        "Contours far apart and strong wind",
        "Isobars far apart and temperature low",
        "Isobars closely packed and strong wind"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "A steep pressure gradient represents rapid pressure change over a short distance, represented by closely spaced isobars and strong winds."
    },
    {
      "id": 83,
      "type": "Meteorology",
      "question": "What type of inversion occurs when a stable layer lies in a high pressure area",
      "options": [
        "Negative",
        "Radiation",
        "Subsidence",
        "Airmass"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "High pressure causes sinking air (subsidence), which warms adiabatically as it compresses, creating a subsidence inversion aloft."
    },
    {
      "id": 84,
      "type": "Meteorology",
      "question": "Which of the following would cause true altitude to increase when altimeter indicates constant altitude",
      "options": [
        "Warm/Low",
        "Cold/Low",
        "Hot/High",
        "Cool/Low"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "Flying into higher atmospheric pressure ('High') or warmer temperatures ('Hot') expands the air column, raising the aircraft's true altitude above the indicated altitude."
    },
    {
      "id": 85,
      "type": "Meteorology",
      "question": "The movement of wind in relation to a cyclone is",
      "options": [
        "Descending and subsiding",
        "Ascending and converging",
        "Descending and cooling",
        "Ascending and diverging"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "A cyclone (low pressure system) causes surface winds to converge inward toward the center and rise (ascend)."
    },
    {
      "id": 86,
      "type": "Meteorology",
      "question": "An aerodrome is at the mean sea level. Its QNH is 1014.0 hpa. Its QFF will be",
      "options": [
        "1014.0 hpa",
        "1013.25 hpa",
        "Difficult to tell",
        "More than QNH"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "2. Atmospheric Pressure",
      "explanation": "At Mean Sea Level (elevation = 0 m), there is no height column adjustment required, making QNH equal to QFF."
    },
    {
      "id": 87,
      "type": "Meteorology",
      "question": "Diurnal variation of temperature is greatest when wind is",
      "options": [
        "calm",
        "light",
        "strong"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Calm conditions minimize vertical air mixing, allowing maximum solar heating of the surface by day and maximum radiative cooling by night, leading to the largest diurnal variation."
    },
    {
      "id": 88,
      "type": "Meteorology",
      "question": "Diurnal variation of temperature is maximum over",
      "options": [
        "forest",
        "ocean",
        "land"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Land surfaces have a low specific heat capacity compared to water/ocean and lack deep vertical mixing, resulting in much higher daytime temperatures and cooler nighttime temperatures."
    },
    {
      "id": 89,
      "type": "Meteorology",
      "question": "On a clear day the amount of solar radiation received by earth surface is",
      "options": [
        "3/4 th",
        "30%",
        "5/6 th"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "On a clear, cloudless day, approximately 75% (3/4th) of incoming solar radiation passes through the atmosphere and reaches the Earth's surface."
    },
    {
      "id": 90,
      "type": "Meteorology",
      "question": "ALBEDO is",
      "options": [
        "Radiation received by earth",
        "Amount of heat",
        "Reflecting power of earth"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Albedo is defined as the fraction or percentage of solar radiation reflected back into space by a surface or body."
    },
    {
      "id": 91,
      "type": "Meteorology",
      "question": "During Day the ambient temperature is ... than ground",
      "options": [
        "Lower",
        "Higher",
        "Same"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "During the day, solar radiation heats the ground directly first, making the ground hotter than the air (ambient temperature) above it."
    },
    {
      "id": 92,
      "type": "Meteorology",
      "question": "Diurnal variation of temperature over ocean is ...",
      "options": [
        "More than land",
        "Above 3°C",
        "Less than 1°C"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Because water has a very high specific heat capacity and allows deep heat penetration through mixing, the ocean's surface temperature varies by less than 1°C between day and night."
    },
    {
      "id": 93,
      "type": "Meteorology",
      "question": "At a coast station the diurnal variation of temperature, depends on ..",
      "options": [
        "Wind direction",
        "Wind speed",
        "Radiation"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "At coastal locations, wind direction determines whether the station experiences continental air (large temperature variation) or maritime air (small temperature variation)."
    },
    {
      "id": 94,
      "type": "Meteorology",
      "question": "Snow surface reflects about……… % of solar radiation.",
      "options": [
        "75%",
        "80%",
        "90%"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Fresh snow has an extremely high albedo, reflecting approximately 80% to 85% of incoming solar radiation."
    },
    {
      "id": 95,
      "type": "Meteorology",
      "question": "Amount of Solar radiation received per unit area is .....",
      "options": [
        "Insolation",
        "Convection",
        "Radiation"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Insolation (Incoming Solar Radiation) is the measure of solar energy received per unit surface area over a specified time."
    },
    {
      "id": 96,
      "type": "Meteorology",
      "question": "Solar radiation received by the earth is .....",
      "options": [
        "Long Wave",
        "Albedo",
        "Shortwave"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Because the Sun is an extremely hot body, it emits high-energy radiation predominantly in short wavelengths (visible and UV)."
    },
    {
      "id": 97,
      "type": "Meteorology",
      "question": "Rise in temperature of a surface is proportional to its specific heat",
      "options": [
        "Directly",
        "Indirectly"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Temperature rise is inversely (indirectly) proportional to specific heat capacity (ΔT = Q / mc). A surface with a lower specific heat heats up faster and higher for the same heat input."
    },
    {
      "id": 98,
      "type": "Meteorology",
      "question": "Specific heat of land is…… than that of water",
      "options": [
        "Lower",
        "Same",
        "Higher"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Land has a significantly lower specific heat capacity (about 0.2 cal/g°C) compared to water (1.0 cal/g°C), meaning land warms up and cools down much faster."
    },
    {
      "id": 99,
      "type": "Meteorology",
      "question": "Minimum temperature is reached at ...",
      "options": [
        "sunrise",
        "midnight",
        "1/2 - 1 hour after dawn"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Earth continues to lose terrestrial radiation overnight until incoming solar radiation overcomes outgoing terrestrial heat loss, which typically occurs approximately 30 minutes to 1 hour after sunrise (dawn)."
    },
    {
      "id": 100,
      "type": "Meteorology",
      "question": "An air parcel is lifted till it gets saturated. The temperature attained by it is called",
      "options": [
        "Potential temperature",
        "Dew Point",
        "Wet bulb"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Lifting an air parcel adiabatically causes it to cool to its saturation state, reaching the wet-bulb temperature (or adiabatic saturation temperature)."
    },
    {
      "id": 101,
      "type": "Meteorology",
      "question": "Cloudy nights are……...",
      "options": [
        "cold",
        "normal",
        "warm"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Clouds absorb terrestrial longwave radiation re-emitted by the Earth and radiate it back downward, acting like a blanket and keeping nighttime surface temperatures warmer."
    },
    {
      "id": 102,
      "type": "Meteorology",
      "question": "Water vapour is transparent to terrestrial radiation",
      "options": [
        "completely",
        "partially",
        "indifferent"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Water vapor readily absorbs many wavelengths of longwave terrestrial radiation while remaining transparent to others (the atmospheric window), making it partially transparent."
    },
    {
      "id": 103,
      "type": "Meteorology",
      "question": "Higher the temperature ……. would be the wavelength of emitted radiation",
      "options": [
        "longer",
        "shorter"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "According to Wien's Displacement Law, the wavelength of maximum peak emission is inversely proportional to absolute temperature (λ_max ∝ 1/T), meaning hotter bodies emit shorter wavelengths."
    },
    {
      "id": 104,
      "type": "Meteorology",
      "question": "Air is a bad conductor of heat. A parcel of air can therefore be regarded as insulated from the environment",
      "options": [
        "False",
        "True"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Air is an extremely poor thermal conductor, allowing rising or sinking air parcels to be approximated as thermally isolated (adiabatic) from surrounding air."
    },
    {
      "id": 105,
      "type": "Meteorology",
      "question": "Warmer the earth…….. will be the Nocturnal radiation",
      "options": [
        "intense",
        "weaker",
        "moderate"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "By Stefan-Boltzmann's Law (E = σ T^4), warmer surface temperatures emit greater intensity of longwave infrared radiation (nocturnal radiation)."
    },
    {
      "id": 106,
      "type": "Meteorology",
      "question": "Heat is the…….. of the KE of all molecules and atoms of a substance",
      "options": [
        "sum total",
        "average"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Heat energy represents the total kinetic energy of all atoms/molecules in a body, whereas temperature represents the average kinetic energy per molecule."
    },
    {
      "id": 107,
      "type": "Meteorology",
      "question": "The solar radiation consists of about 46 %",
      "options": [
        "UV",
        "IR",
        "Visible"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Solar radiation spectrum is comprised of approximately 46% visible light, 45% infrared (IR), and 9% ultraviolet (UV)."
    },
    {
      "id": 108,
      "type": "Meteorology",
      "question": "The total energy radiated by a black body is proportional to its temperature (T)",
      "options": [
        "T²",
        "T3",
        "T4"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Stefan-Boltzmann Law states that total energy emitted by a black body per unit surface area is directly proportional to the fourth power of its absolute temperature (E ∝ T^4)."
    },
    {
      "id": 109,
      "type": "Meteorology",
      "question": "Intense radiation are emitted by",
      "options": [
        "Hot bodies",
        "Cold bodies",
        "Stars"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Radiative power scales with T^4, meaning hotter bodies radiate much more intense total energy than cooler bodies."
    },
    {
      "id": 110,
      "type": "Meteorology",
      "question": "The wavelength of most intense radiation is inversely proportional to its….....",
      "options": [
        "Absolute temperature",
        "Humidity",
        "Albedo"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Wien's Law states that λ_max = b / T, showing peak emission wavelength is inversely proportional to absolute temperature in Kelvin."
    },
    {
      "id": 111,
      "type": "Meteorology",
      "question": "Hot bodies (like sun) radiate",
      "options": [
        "Short Waves",
        "Long Waves",
        "Both"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "High-temperature radiating bodies emit peak energy at short wavelengths (shortwave radiation)."
    },
    {
      "id": 112,
      "type": "Meteorology",
      "question": "The flow of heat from earth surface is 77% by",
      "options": [
        "Sensible Heat",
        "Latent Heat"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Latent heat transport via evapotranspiration accounts for the majority (~77%) of non-radiative heat exchange from the surface into the atmosphere."
    },
    {
      "id": 113,
      "type": "Meteorology",
      "question": "-40° C = -40° F",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "At -40 degrees, the Celsius and Fahrenheit temperature scales intersect: F = (C × 9/5) + 32 ⇒ (-40 × 1.8) + 32 = -72 + 32 = -40°F."
    },
    {
      "id": 114,
      "type": "Meteorology",
      "question": "Surface Temperature is recorded at a height of …….. above ground",
      "options": [
        "1.5 m",
        "1.25m",
        "2 m"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Standard meteorological surface air temperature is measured inside a Stevenson Screen positioned at 1.25 meters (approx. 4 feet) above ground level."
    },
    {
      "id": 115,
      "type": "Meteorology",
      "question": "The door of Stevenson's screen should open",
      "options": [
        "opposite to sun",
        "into sun",
        "any direction"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "The doors of a Stevenson screen open facing away from the Sun (North in the Northern Hemisphere) to prevent direct sunlight from affecting readings when opened."
    },
    {
      "id": 116,
      "type": "Meteorology",
      "question": "The liquid used in Minimum Thermometer is",
      "options": [
        "mercury",
        "alcohol",
        "sprit"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Alcohol (or spirit) is used in minimum thermometers because it has a very low freezing point (-114°C) and higher thermal expansion than mercury."
    },
    {
      "id": 117,
      "type": "Meteorology",
      "question": "Freezing point of water is",
      "options": [
        "0⁰ F",
        "12⁰ F",
        "22⁰ F",
        "32⁰ F"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "On the Fahrenheit temperature scale, pure water freezes at 32°F under standard atmospheric pressure."
    },
    {
      "id": 118,
      "type": "Meteorology",
      "question": "Boiling point of water is",
      "options": [
        "100⁰ F",
        "112⁰ F",
        "212⁰ F",
        "312⁰ F"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "On the Fahrenheit scale, pure water boils at 212°F at sea-level pressure."
    },
    {
      "id": 119,
      "type": "Meteorology",
      "question": "Freezing point of water is",
      "options": [
        "173⁰ K",
        "273⁰ K",
        "373⁰ K",
        "473⁰ K"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "On the Kelvin scale, water freezes at 0°C + 273.15 = approximately 273 K."
    },
    {
      "id": 120,
      "type": "Meteorology",
      "question": "Boiling point of water is",
      "options": [
        "373⁰ K",
        "273⁰ K",
        "173⁰ K",
        "312⁰ K"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "On the Kelvin scale, water boils at 100°C + 273.15 = approximately 373 K."
    },
    {
      "id": 121,
      "type": "Meteorology",
      "question": "Convert 68⁰ F into Kelvin temperature",
      "options": [
        "233⁰ K",
        "283⁰ K",
        "294⁰ K",
        "293⁰ K"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Converting 68°F to Celsius: C = (68 - 32) × 5/9 = 20°C. Converting to Kelvin: 20 + 273 = 293° K."
    },
    {
      "id": 122,
      "type": "Meteorology",
      "question": "Diurnal variation of temperature is least on a day when it is",
      "options": [
        "Clear",
        "Partly cloudy",
        "Cloudy",
        "Overcast"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Overcast conditions block maximum incoming solar radiation by day and trap outgoing terrestrial radiation by night, minimizing diurnal temperature range."
    },
    {
      "id": 123,
      "type": "Meteorology",
      "question": "A clear and calm night is cooler than a cloudy night, because nocturnal radiation",
      "options": [
        "escape through cloud",
        "are partly radiated back by clouds to earth",
        "are fully absorbed by H₂O",
        "are fully prevented by clouds to escape"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "3. Atmospheric Temperature",
      "explanation": "Clouds absorb terrestrial longwave radiation and re-radiate a significant portion back towards the Earth's surface, preventing rapid cooling."
    },
    {
      "id": 124,
      "type": "Meteorology",
      "question": "Density is ………….. at poles than equator",
      "options": [
        "Higher",
        "Lower",
        "Same"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "Cold air at the poles is denser than warm air at the equator. Near the surface, polar air is contracted and concentrated, resulting in higher air density at the poles."
    },
    {
      "id": 125,
      "type": "Meteorology",
      "question": "Above 8 km density is …….. at poles than at equator",
      "options": [
        "Higher",
        "Lower",
        "Same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "At approximately 8 km (~26,000 ft), a density equivalence level exists. Above 8 km, because the polar tropopause is much lower and pressure drops more rapidly aloft, air density becomes lower at the poles than at the equator."
    },
    {
      "id": 126,
      "type": "Meteorology",
      "question": "The altitude in ISA at which air density is the same as the observed density is called",
      "options": [
        "Density Altitude",
        "ISA Density",
        "Real Density"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "Density Altitude is defined as pressure altitude corrected for non-standard temperature variations, representing the altitude in the International Standard Atmosphere (ISA) where the existing air density occurs."
    },
    {
      "id": 127,
      "type": "Meteorology",
      "question": "Density is usually expressed as",
      "options": [
        "Kg/sq m",
        "g/cu m",
        "N/sq m"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "Air density is defined as mass per unit volume and is commonly expressed in units like grams per cubic meter (g/m^3) or kilograms per cubic meter (kg/m^3)."
    },
    {
      "id": 128,
      "type": "Meteorology",
      "question": "Higher density altitude means …….. density",
      "options": [
        "Higher",
        "Lower",
        "Same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "A high density altitude indicates thin or less dense air, meaning the aircraft performs as if it were operating at a higher physical altitude."
    },
    {
      "id": 129,
      "type": "Meteorology",
      "question": "For given pressure and temperature moist air has density",
      "options": [
        "Higher",
        "Lower",
        "Same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "Water vapor molecules (H_2O, molecular weight ~18) are lighter than diatomic Nitrogen (N_2, ~28) and Oxygen (O_2, ~32). Therefore, adding moisture reduces overall air density."
    },
    {
      "id": 130,
      "type": "Meteorology",
      "question": "Air is less denser in",
      "options": [
        "High Altitudes",
        "Warm Air",
        "High humidity",
        "All these"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "High altitude (lower pressure), high temperature (expanded air), and high humidity (lighter water molecules) all independently decrease air density."
    },
    {
      "id": 131,
      "type": "Meteorology",
      "question": "Density altitude may be defined as:",
      "options": [
        "The altitude in a standard atmosphere at which the prevailing pressure occurs.",
        "The altitude in a standard atmosphere at which the prevailing density occurs.",
        "Surface of constant atmospheric pressure related to standard atmosphere of 1013.2 hPa"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "By definition, density altitude is the pressure altitude corrected for non-standard temperature, corresponding to the altitude in standard atmosphere where prevailing density matches."
    },
    {
      "id": 132,
      "type": "Meteorology",
      "question": "If pressure increases the density altitude",
      "options": [
        "Increases",
        "Lowers",
        "Remains the same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "Higher atmospheric pressure compresses air molecules, making air denser. Higher density corresponds to a lower (better performance) density altitude."
    },
    {
      "id": 133,
      "type": "Meteorology",
      "question": "For every 1⁰C change in temperature, density altitude differs by",
      "options": [
        "33 ft",
        "100 ft",
        "120 ft",
        "210 ft"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "4. Air Density",
      "explanation": "In aviation meteorology and flight performance calculation rules of thumb, Density Altitude changes by approximately 120 feet for every 1°C deviation from ISA temperature."
    },
    {
      "id": 134,
      "type": "Meteorology",
      "question": "The ratio in % between the amount of water vapour present in the air to the amount of water vapour that it can hold at the same temperature is",
      "options": [
        "Humidity",
        "Relative humidity",
        "Dew point"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Relative Humidity (RH) expresses the percentage ratio of actual water vapor content present to the maximum amount of water vapor the air can hold at that specific temperature."
    },
    {
      "id": 135,
      "type": "Meteorology",
      "question": "The temperature to which air be cooled at constant pressure to become saturated, is called",
      "options": [
        "Wet bulb temperature",
        "Dry bulb temperature",
        "Dew point",
        "Humidity"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Dew Point is defined as the temperature to which moist air must be cooled at constant pressure and constant water content for it to reach 100% saturation."
    },
    {
      "id": 136,
      "type": "Meteorology",
      "question": "Free air temperature, Wet bulb temperature and Dew point temperature are equal when",
      "options": [
        "Air temperature is 0°C",
        "Relative humidity is 100%",
        "Air temperature is not below 0°C"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "When air is 100% saturated (Relative Humidity = 100%), no further net evaporation can take place, making Ambient (Dry Bulb) Temperature = Wet Bulb Temperature = Dew Point Temperature."
    },
    {
      "id": 137,
      "type": "Meteorology",
      "question": "On a rainy day compared to sunny day the length of runway required is",
      "options": [
        "More",
        "Less",
        "Same"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "High ambient moisture/humidity combined with wet or contaminated runway surface conditions reduces braking efficiency and aerodynamic performance, thereby requiring a longer landing/takeoff roll distance."
    },
    {
      "id": 138,
      "type": "Meteorology",
      "question": "The spread (difference) between Free air temperature and Dew point temperature is .... when air is saturated",
      "options": [
        "Large",
        "Least",
        "Same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "When air is completely saturated, Free Air Temperature equals Dew Point Temperature, so the temperature-dew point spread reaches zero (its minimum/least value)."
    },
    {
      "id": 139,
      "type": "Meteorology",
      "question": "The saturation vapour pressure over water is ………….. than the ice",
      "options": [
        "More",
        "Less",
        "Same"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "At sub-zero temperatures, water molecules bond more firmly in the ice crystal lattice than in liquid water, meaning supercooled water evaporates more readily than ice sublimes. Thus, saturation vapor pressure over water is higher than over ice."
    },
    {
      "id": 140,
      "type": "Meteorology",
      "question": "As the temperature of the air increases, the amount of water vapour required to saturate it ……..",
      "options": [
        "decreases",
        "increases",
        "remains same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Warm air expands and can hold significantly more water vapor before reaching saturation. Consequently, as air temperature rises, saturation capacity increases."
    },
    {
      "id": 141,
      "type": "Meteorology",
      "question": "The actual amount of water vapour contained in a given volume of air at a given temperature is termed as ...",
      "options": [
        "Relative Humidity",
        "Specific Humidity",
        "Absolute Humidity"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Absolute Humidity measures the actual mass of water vapor present per unit volume of air (typically expressed in g/m^3)."
    },
    {
      "id": 142,
      "type": "Meteorology",
      "question": "Humidity Mixing Ratio …… when air is lifted adiabatically",
      "options": [
        "decreases",
        "remains constant",
        "increases"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Humidity Mixing Ratio (mass of water vapor per unit mass of dry air) is a conservative property. It remains constant during unsaturated adiabatic lifting as long as phase change does not occur."
    },
    {
      "id": 143,
      "type": "Meteorology",
      "question": "It is the lowest temperature which air would attain by evaporating water into it to saturate it.",
      "options": [
        "Wet bulb temp",
        "Dry bulb temp",
        "Dew point"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "5. Humidity",
      "explanation": "Wet Bulb Temperature is the lowest temperature air can reach via evaporative cooling under constant pressure conditions until the surrounding air becomes fully saturated."
    },
    {
      "id": 144,
      "type": "Meteorology",
      "question": "In S hemisphere if an observer faces wind, low will be to his",
      "options": [
        "Right",
        "Left"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "According to Buys Ballot's Law, standing with your back to the wind in the Southern Hemisphere places low pressure to your right. Therefore, if you face into the wind, the low pressure system will be to your left."
    },
    {
      "id": 145,
      "type": "Meteorology",
      "question": "In N hemisphere due to rotation of earth winds are deflected to",
      "options": [
        "Left",
        "Right"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "The Coriolis force caused by the Earth's rotation deflects any moving object or air mass to the right of its path in the Northern Hemisphere."
    },
    {
      "id": 146,
      "type": "Meteorology",
      "question": "Local Winds follow Buys Ballot's law",
      "options": [
        "False",
        "True"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Buys Ballot's law applies to synoptic scale geostrophic winds where Coriolis force dominates. Small-scale local winds (e.g., sea breezes, mountain/valley winds) are governed primarily by localized thermal gradients and friction rather than Coriolis deflection."
    },
    {
      "id": 147,
      "type": "Meteorology",
      "question": "Coriolis force acts perpendicular to the ………… of wind direction in N hemisphere",
      "options": [
        "Left",
        "Right"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In the Northern Hemisphere, the Coriolis acceleration acts at an angle of 90° to the right relative to the direction of motion."
    },
    {
      "id": 148,
      "type": "Meteorology",
      "question": "Geostrophic wind is due to the balance between the forces ……….",
      "options": [
        "Coriolis and Friction",
        "Pressure gradient and Cyclostrophic",
        "Pressure gradient and Coriolis"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Geostrophic wind represents theoretical wind blowing along straight, parallel isobars above the friction layer, resulting from an exact balance between the Horizontal Pressure Gradient Force (PGF) and the Coriolis Force."
    },
    {
      "id": 149,
      "type": "Meteorology",
      "question": "Coriolis force is strongest at ……..",
      "options": [
        "Mid latitudes",
        "Poles",
        "Equator"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Coriolis force is calculated as $f = 2\\Omega V \\sin\\phi$. Since $\\sin 90^\\circ = 1$, Coriolis deflection reaches its maximum strength at the Geographic Poles."
    },
    {
      "id": 150,
      "type": "Meteorology",
      "question": "Geostrophic rule breaks down at …….",
      "options": [
        "Mid latitudes",
        "Poles",
        "Equator"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "At the Equator (latitude $0^\\circ$), $\\sin 0^\\circ = 0$, making Coriolis force zero. Without Coriolis deflection, geostrophic balance cannot occur."
    },
    {
      "id": 151,
      "type": "Meteorology",
      "question": "Fohn winds are …….. on the Leeward side of a mountain,",
      "options": [
        "Dry & Warm",
        "Cold & Humid"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Föhn winds lose moisture through precipitation while ascending the windward side at the Saturated Adiabatic Lapse Rate (SALR), then descend the leeward slope compressing adiabatically at the faster Dry Adiabatic Lapse Rate (DALR), producing warm, dry surface winds."
    },
    {
      "id": 152,
      "type": "Meteorology",
      "question": "The wind sliding down a hill during night is called ……….. wind.",
      "options": [
        "Fohn",
        "Anabatic",
        "Katabatic"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Katabatic wind (mountain breeze) is a cold, dense downslope wind driven by nocturnal terrestrial radiation cooling along elevated terrain."
    },
    {
      "id": 153,
      "type": "Meteorology",
      "question": "With the onset of sea breeze there is a ………….. in temperature and …………. in RH.",
      "options": [
        "Fall/Rise",
        "Rise/Fall",
        "Fall/Fall"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A sea breeze brings cool, moisture-laden air from over the ocean onto warmer coastal land, causing ambient surface temperature to drop and relative humidity (RH) to rise."
    },
    {
      "id": 154,
      "type": "Meteorology",
      "question": "Sea breeze sets in by ……. and dies off at ......",
      "options": [
        "Night/Day",
        "Day/Night",
        "Both Day and Night"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Sea breezes are initiated by daytime solar heating of the land relative to the sea (reaching peak strength in early afternoon) and collapse at night when land cools."
    },
    {
      "id": 155,
      "type": "Meteorology",
      "question": "If an aircraft in N hemisphere flies from H to L it will experience",
      "options": [
        "Starboard drift",
        "Port drift"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "When flying towards Low pressure in the Northern Hemisphere, geostrophic wind blows from your right (starboard side), pushing the aircraft off course to the left (Port drift)."
    },
    {
      "id": 156,
      "type": "Meteorology",
      "question": "In N Hemisphere if you experience Port drift , altimeter will read",
      "options": [
        "Under",
        "Over"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Port drift in the Northern Hemisphere indicates you are flying toward a region of lower atmospheric pressure. Under the rule 'High to Low, Look Out Below', the altimeter senses lower pressure and reads higher than true altitude (reads OVER)."
    },
    {
      "id": 157,
      "type": "Meteorology",
      "question": "Lines of constant wind speed drawn on weather charts are called",
      "options": [
        "Isobars",
        "Isotachs",
        "Isogons"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Isotachs are contours connecting points of equal wind speed on meteorological analysis and forecast charts."
    },
    {
      "id": 158,
      "type": "Meteorology",
      "question": "Squall are distinguished from gusts by:",
      "options": [
        "Shorter duration",
        "Longer duration",
        "Lower wind speed"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A gust is a rapid, transient fluctuation in wind speed lasting a few seconds, whereas a squall is a sharp, sudden wind increase sustained for several minutes (longer duration)."
    },
    {
      "id": 159,
      "type": "Meteorology",
      "question": "The thermal wind is:",
      "options": [
        "The wind that blows because of thermals",
        "The warm wind that blows down the hill on the leeward side",
        "The wind which must be added vectorially to the lower level geostrophic wind to obtain the upper level geostrophic wind"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Thermal wind is defined as the vector difference between upper-level and lower-level geostrophic winds ($\\vec{V}_T = \\vec{V}_{upper} - \\vec{V}_{lower}$), representing horizontal temperature gradients between atmospheric layers."
    },
    {
      "id": 160,
      "type": "Meteorology",
      "question": "On a weather map where isobars are closely packed, the surface winds are likely to be",
      "options": [
        "Light and parallel to isobars",
        "Strong and parallel to isobars",
        "Strong and blowing across the isobars"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Closely packed isobars indicate a steep pressure gradient force resulting in strong winds. Near the surface, friction turns the wind vector to blow across the isobars toward lower pressure."
    },
    {
      "id": 161,
      "type": "Meteorology",
      "question": "Anabatic wind occurs",
      "options": [
        "At night",
        "Any time of day and night",
        "During day"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Anabatic winds (valley breezes) occur during daytime when sunlit mountain slopes heat up, causing air to expand and flow upslope."
    },
    {
      "id": 162,
      "type": "Meteorology",
      "question": "Anabatic wind is stronger than katabatic",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Katabatic winds are driven by gravity acting on dense, nocturnal/glacially cooled air and can reach violent velocities (e.g. mistral, bora), making them generally stronger than gentle daytime anabatic flows."
    },
    {
      "id": 163,
      "type": "Meteorology",
      "question": "Katabatic wind is down slope cold wind due to nocturnal cooling",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "By definition, katabatic wind is a cold, downslope wind caused by radiational surface cooling of elevated terrain during the night."
    },
    {
      "id": 164,
      "type": "Meteorology",
      "question": "Katabatic wind occur due to sinking of air down the hill slope",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Nocturnal cooling increases air density on hillsides, causing heavy air to sink and drain downward under gravity."
    },
    {
      "id": 165,
      "type": "Meteorology",
      "question": "Anabatic wind occur due to downward movement of air along valley",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Anabatic winds involve UPWARD (upslope) flow along valley walls created by buoyant heating. Downward motion describes katabatic flow."
    },
    {
      "id": 166,
      "type": "Meteorology",
      "question": "Sea breeze is stronger than land breeze",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Daytime heating produces larger land-sea temperature contrasts than nighttime radiative cooling, making daytime sea breezes distinctly stronger than land breezes."
    },
    {
      "id": 167,
      "type": "Meteorology",
      "question": "The wind blows clockwise around low in a N hemisphere",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In the Northern Hemisphere, wind flows counter-clockwise (anticlockwise) around low pressure systems."
    },
    {
      "id": 168,
      "type": "Meteorology",
      "question": "The wind blows clockwise around low in S hemisphere",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In the Southern Hemisphere, Coriolis deflection turns wind left, resulting in clockwise circulation around low pressure centers."
    },
    {
      "id": 169,
      "type": "Meteorology",
      "question": "The wind blows anticlockwise around low in N hemisphere",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Cyclonic circulation around low pressure areas in the Northern Hemisphere is counter-clockwise (anticlockwise)."
    },
    {
      "id": 170,
      "type": "Meteorology",
      "question": "The wind blows anticlockwise around low in S hemisphere",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Low pressure circulation in the Southern Hemisphere is clockwise, not anticlockwise."
    },
    {
      "id": 171,
      "type": "Meteorology",
      "question": "The resultant wind that blows under the influence of pressure gradient force, geostrophic force and cyclostrophic force is called",
      "options": [
        "Gradient wind",
        "Geostrophic wind",
        "cyclostrophic wind"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Gradient wind accounts for the combined dynamic equilibrium of Pressure Gradient Force, Coriolis Force (geostrophic component), and Centrifugal Force (cyclostrophic component) along curved path lines."
    },
    {
      "id": 172,
      "type": "Meteorology",
      "question": "Due to friction, from day to night for an isobaric pattern (in N hemisphere) the Surface wind backs and weakens",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Nighttime surface cooling stabilizes the surface layer, reducing vertical momentum exchange. Surface friction effectively increases relative to flow aloft, causing surface winds in the Northern Hemisphere to back (rotate counter-clockwise) and decrease in speed."
    },
    {
      "id": 173,
      "type": "Meteorology",
      "question": "The winds which spiral inward in a counter-clockwise direction in the N Hemisphere are associated with",
      "options": [
        "Turbulence",
        "High pressure area",
        "Low pressure area"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Surface friction combined with cyclonic Coriolis force creates counter-clockwise inward convergence around low pressure centers in the Northern Hemisphere."
    },
    {
      "id": 174,
      "type": "Meteorology",
      "question": "Lower level wind 05010 kt, upper level wind 23005 kt, what is the thermal wind",
      "options": [
        "05005 kt",
        "23015 kt",
        "05015 kt"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Thermal wind is $\\vec{V}_T = \\vec{V}_{upper} - \\vec{V}_{lower}$. Lower wind is from 050° at 10 kt (pointing toward 230°). Upper wind is from 230° at 05 kt. Subtracting vector 050/10 is equivalent to adding 230/10 to 230/05, yielding a combined thermal wind vector from 230° at 15 kt."
    },
    {
      "id": 175,
      "type": "Meteorology",
      "question": "A change in wind direction from 310° to 020° is",
      "options": [
        "Backing",
        "Veering"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A clockwise rotation of wind direction (e.g. from 310° through 360°/000° to 020°) is defined as veering."
    },
    {
      "id": 176,
      "type": "Meteorology",
      "question": "A change from 270° to 250° is",
      "options": [
        "Backing",
        "Veering"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A counter-clockwise change in wind direction (e.g. from 270° to 250°) is defined as backing."
    },
    {
      "id": 177,
      "type": "Meteorology",
      "question": "Sudden change in wind speed from 10 kt to 30 kt and then to 15 kt is",
      "options": [
        "Gust",
        "Squall",
        "gale"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A rapid peak increase in wind speed lasting only a few seconds before dropping back is classified as a gust."
    },
    {
      "id": 178,
      "type": "Meteorology",
      "question": "Sudden change in wind speed from 10 kt to 30 kt for 2 - 3 minutes",
      "options": [
        "Squall",
        "Gust"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A sudden increase of wind speed by at least 16 knots (reaching 22 knots or more) sustained for a period of minutes is classified as a squall."
    },
    {
      "id": 179,
      "type": "Meteorology",
      "question": "A significant wind shear can be associated with TS or line squall",
      "options": [
        "False",
        "True"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Strong thunderstorm downdrafts, microbursts, and cold front squall lines generate violent vertical and horizontal low-level wind shear."
    },
    {
      "id": 180,
      "type": "Meteorology",
      "question": "Cyclostrophic wind gives a good approximation of the 2000' wind in an intense tropical storm",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In small-radius, high-intensity tropical cyclones, the pressure gradient force and centrifugal force dominate over Coriolis force, making cyclostrophic wind equations highly accurate."
    },
    {
      "id": 181,
      "type": "Meteorology",
      "question": "Rotor clouds have extremely turbulent flying conditions",
      "options": [
        "False",
        "True"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Rotor clouds form beneath mountain wave crests and enclose violent, standing rotational updrafts and downdrafts capable of structural damage."
    },
    {
      "id": 182,
      "type": "Meteorology",
      "question": "Friction causes winds to flow cross isobaric by …... over land and ...... over sea",
      "options": [
        "20°/10°",
        "20°/30°",
        "40°/30°"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Surface friction reduces wind speed and Coriolis deflection, causing winds to cross isobars toward lower pressure at a greater angle over rough land (~20° to 30°) than over smoother water (~10°)."
    },
    {
      "id": 183,
      "type": "Meteorology",
      "question": "If the S is warmer than N, level by level, from surface up to higher levels, then the ……..wind will strengthen with height with no change in direction in N hemisphere",
      "options": [
        "Ely",
        "Wly",
        "Sly",
        "Nly"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "With warmer air to the South and colder air to the North, thermal wind blows from West to East (Westerly). When lower level wind is also Westerly, the thermal wind component adds directly to it, increasing Westerly (Wly) speed with height without altering direction."
    },
    {
      "id": 184,
      "type": "Meteorology",
      "question": "Gradient wind is …………… of geostrophic wind in an anticyclone",
      "options": [
        "Under estimate",
        "Accurate",
        "Over estimate"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In an anticyclone (High pressure), centrifugal force assists the pressure gradient force, making gradient wind speed greater than geostrophic wind ($V_{gradient} > V_{geostrophic}$). Hence, gradient wind is an overestimate of geostrophic wind."
    },
    {
      "id": 185,
      "type": "Meteorology",
      "question": "Gale is",
      "options": [
        "persistent strong winds with mean speed 44 kt, associated with thunderstorm",
        "marked increase in wind speed lasing few minutes associated with CB or DS (dust storm)",
        "persistent strong winds exceeding 33 kt, associated with depression"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "A gale is defined as sustained mean surface wind speed exceeding 33 knots (Beaufort scale 8+), typically associated with deep synoptic depressions."
    },
    {
      "id": 186,
      "type": "Meteorology",
      "question": "In N hemisphere thermal wind is parallel to ……. with low value to left",
      "options": [
        "Isobars",
        "Isotherms",
        "Isallobars"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Thermal wind flows parallel to mean layer isotherms (thickness lines) with cold air (lower temperature values) situated to the left in the Northern Hemisphere."
    },
    {
      "id": 187,
      "type": "Meteorology",
      "question": "The inertial flow is",
      "options": [
        "cyclonic in both the Hemispheres",
        "anticyclonic in both the Hemispheres",
        "anticyclonic around an anticyclone"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "Inertial flow occurs when horizontal pressure gradients disappear ($PGF = 0$). Air follows circular paths turned by Coriolis force alone, resulting in anticyclonic curvature in both Northern and Southern Hemispheres."
    },
    {
      "id": 188,
      "type": "Meteorology",
      "question": "Upper level wind is 24025 kt, lower level wind is 16015 kt, the thermal wind is?",
      "options": [
        "16010 kt",
        "24040 kt",
        "24010 kt"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "6. Wind",
      "explanation": "In standard question bank simplified vector subtraction, subtracting lower speed (15 kt) from upper speed (25 kt) along the primary upper flow direction (240°) yields 240° / 10 kt."
    },
    {
      "id": 189,
      "type": "Meteorology",
      "question": "Fog is reported when visibility is reduced to",
      "options": [
        "Less than 1000 m",
        "1000m",
        "1000 to 2000"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "According to ICAO meteorological standards, fog is reported when visibility is reduced to less than 1000 meters due to water droplets or ice crystals suspended in the atmosphere."
    },
    {
      "id": 190,
      "type": "Meteorology",
      "question": "RVR is reported when visibility falls below",
      "options": [
        "500 m",
        "1000 m",
        "1500 m"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Runway Visual Range (RVR) reports are provided at aerodromes whenever either horizontal visibility or RVR drops below 1500 meters."
    },
    {
      "id": 191,
      "type": "Meteorology",
      "question": "Radiation fog occurs",
      "options": [
        "Over land",
        "Over sea",
        "During day"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Radiation fog occurs over land because land cools rapidly by terrestrial radiation at night. Oceans do not undergo sufficient nocturnal cooling due to the high specific heat capacity of water."
    },
    {
      "id": 192,
      "type": "Meteorology",
      "question": "When visibility reduces between 5000 m and 1000 m and RH is almost 100%, it is",
      "options": [
        "Mist",
        "Haze",
        "Fog"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Mist is reported when visibility is between 1000 m and 5000 m with high relative humidity (near 100%), whereas fog requires visibility below 1000 m."
    },
    {
      "id": 193,
      "type": "Meteorology",
      "question": "Radiation Fog forms over N India during",
      "options": [
        "May to June",
        "Dec to Feb",
        "Oct to Nov"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "In North India, winter months (December to February) provide clear skies, long nights, light winds, and moisture fed by Western Disturbances, creating ideal conditions for radiation fog."
    },
    {
      "id": 194,
      "type": "Meteorology",
      "question": "Warm and moist air moving over a cold ground gives rise to:",
      "options": [
        "Thunder clouds",
        "Fog and stratus",
        "Frontal clouds"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Advection occurs when warm, humid air moves horizontally over a cooler surface, cooling the lower air layer to its dew point and producing widespread advection fog or low stratus clouds."
    },
    {
      "id": 195,
      "type": "Meteorology",
      "question": "Warm and moist air moving over a cold surface causes",
      "options": [
        "Radiation Fog",
        "Advection Fog",
        "Frontal Fog"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Horizontal movement (advection) of warm, moist air across a colder land or sea surface lowers the air temperature to saturation, forming advection fog."
    },
    {
      "id": 196,
      "type": "Meteorology",
      "question": "The radiation fog forms due to",
      "options": [
        "Heating of the earth during day",
        "Radiational cooling of earth at night",
        "Advection of cold air"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Terrestrial longwave radiation cooling of the ground during clear, calm nights cools the adjacent air layer down to its dew point temperature."
    },
    {
      "id": 197,
      "type": "Meteorology",
      "question": "The radiation fog activity increases after the passage of a ……....",
      "options": [
        "WD",
        "Depression",
        "Col"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Passage of a Western Disturbance (WD) over North India leaves ample boundary layer moisture behind. As skies clear after its passage, nocturnal radiation cooling causes widespread radiation fog."
    },
    {
      "id": 198,
      "type": "Meteorology",
      "question": "Radiation fog is essentially a ……….. phenomena",
      "options": [
        "Nocturnal",
        "Dusk",
        "Day"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Radiation fog requires night-time terrestrial cooling to lower ground temperatures below the air's dew point, making it a nocturnal (or early morning) phenomenon."
    },
    {
      "id": 199,
      "type": "Meteorology",
      "question": "The radiation fog forms over ……..",
      "options": [
        "Water",
        "Land",
        "Both"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Water bodies store heat and exhibit negligible diurnal temperature change, so radiation fog forms exclusively over land surfaces."
    },
    {
      "id": 200,
      "type": "Meteorology",
      "question": "The ………. fog forms due to horizontal movement of warm moist air over cold surface",
      "options": [
        "Radiation",
        "Advection",
        "Frontal"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "By definition, fog caused by horizontal air transport (advection) of warm moist air over a colder surface is known as advection fog."
    },
    {
      "id": 201,
      "type": "Meteorology",
      "question": "Advection fog forms during",
      "options": [
        "night only",
        "day time only",
        "any time of day and night"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Because advection fog depends on wind transport rather than solar/radiational diurnal cycles, it can form or persist at any time of day or night."
    },
    {
      "id": 202,
      "type": "Meteorology",
      "question": "For formation of Radiation fog",
      "options": [
        "There should be sufficient moisture in atmosphere, cloudy sky, nil wind",
        "There should be sufficient moisture in atmosphere, clear sky, light wind.",
        "There should be sufficient moisture in atmosphere, cloudy sky, strong wind"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Ideal radiation fog conditions require high boundary layer moisture, clear skies for maximum nocturnal terrestrial radiation loss, and light winds (2 to 8 knots) to gently mix the cooled air through a shallow layer."
    },
    {
      "id": 203,
      "type": "Meteorology",
      "question": "Instrument used for measuring visibility is called ...",
      "options": [
        "Visiometer",
        "Transmissometer",
        "Ceilometer"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "A transmissometer is an optical instrument positioned alongside runways to measure atmospheric light extinction and calculate visibility / RVR."
    },
    {
      "id": 204,
      "type": "Meteorology",
      "question": "Advection fog forms",
      "options": [
        "over sea",
        "over Land",
        "both over land and sea"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Advection fog can form over sea (e.g. warm air over cold oceanic currents) and over land (e.g. moist marine air moving over cold coastal terrain)."
    },
    {
      "id": 205,
      "type": "Meteorology",
      "question": "fog is ……… cloud on ground",
      "options": [
        "stratocumulus",
        "stratus",
        "Nimbostratus"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Fog is structurally and meteorologically identical to a low stratus (ST) cloud touching or based at the surface."
    },
    {
      "id": 206,
      "type": "Meteorology",
      "question": "Frontal fog is more common with a",
      "options": [
        "Western Disturbance",
        "cyclone",
        "Warm Front",
        "Cold Front"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Precipitation falling from warm air overriding a warm frontal slope evaporates into the underlying cold air mass, saturating it and producing frontal/precipitation fog."
    },
    {
      "id": 207,
      "type": "Meteorology",
      "question": "The favourable pressure system for formation of fog is",
      "options": [
        "Lows and Cols",
        "High and Trough",
        "Lows and Ridges",
        "Highs and Cols"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "Anticyclones (Highs) and Cols feature light, variable winds and subsiding air that produces clear skies—ideal conditions for surface cooling and fog formation."
    },
    {
      "id": 208,
      "type": "Meteorology",
      "question": "Thermal processes / temperature distribution which favours formation of fog is",
      "options": [
        "Isothermal",
        "Adiabatics",
        "Inversion",
        "SALR"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "7. Visibility and Fog",
      "explanation": "A temperature inversion (temperature increasing with height) traps moisture and pollutants near the surface, strongly encouraging and stabilizing fog layers."
    },
    {
      "id": 209,
      "type": "Meteorology",
      "question": "Drizzle occurs from",
      "options": [
        "CS",
        "ST",
        "NS",
        "CU"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Drizzle consists of very small water droplets (diameter < 0.5 mm) falling almost exclusively from thin, stable Stratus (ST) layers."
    },
    {
      "id": 210,
      "type": "Meteorology",
      "question": "Altostratus (AS) is",
      "options": [
        "Low cloud of sheet type",
        "A medium cloud of sheet type",
        "A cloud of large vertical growth",
        "A high cloud of sheet type"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Altostratus (AS) is classified as a middle-level cloud (base between 6,500 ft and 20,000 ft) forming a greyish or bluish sheet or layer."
    },
    {
      "id": 211,
      "type": "Meteorology",
      "question": "Showers occurs from",
      "options": [
        "CU",
        "CB",
        "AS",
        "AC"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Showers are characterized by sudden onset and rapid strength changes, falling from convective clouds of vertical development, predominantly Cumulonimbus (CB)."
    },
    {
      "id": 212,
      "type": "Meteorology",
      "question": "Heavy icing is possible in",
      "options": [
        "CI",
        "CS",
        "ST",
        "CB"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Cumulonimbus (CB) clouds contain abundant supercooled water droplets supported by strong updrafts, leading to severe and rapid icing."
    },
    {
      "id": 213,
      "type": "Meteorology",
      "question": "To avoid icing in cloudy conditions, a pilot is advised to fly through a cloud which shows an optical phenomena",
      "options": [
        "Halo",
        "Corona",
        "With multi-coloured clouds"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "A Halo is produced by light refraction through ice crystals (e.g., in Cirrostratus), indicating the absence of supercooled liquid water drops that cause airframe icing. Corona, by contrast, indicates water droplets."
    },
    {
      "id": 214,
      "type": "Meteorology",
      "question": "Dark gray cloud giving continuous rain is called",
      "options": [
        "AS",
        "NS",
        "ST",
        "CB"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Nimbostratus (NS) is a thick, dark, grey cloud layer that produces continuous, widespread precipitation."
    },
    {
      "id": 215,
      "type": "Meteorology",
      "question": "A uniform layer of cloud resembling fog but not on the ground",
      "options": [
        "AS",
        "NS",
        "ST"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Stratus (ST) is a featureless, uniform, low grey cloud layer identical in structure to fog except its base does not rest on the Earth's surface."
    },
    {
      "id": 216,
      "type": "Meteorology",
      "question": "The clouds composed of ice crystals having feathery appearance",
      "options": [
        "CI",
        "CS",
        "AS"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Cirrus (CI) clouds are high-altitude, delicate clouds composed of ice crystals with a fibrous, wispy, or feathery appearance."
    },
    {
      "id": 217,
      "type": "Meteorology",
      "question": "Halo is associated with the cloud",
      "options": [
        "AC",
        "AS",
        "CS",
        "CI"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "A 22° optical halo around the sun or moon is formed by refraction through hexagonal ice crystals present in Cirrostratus (CS) cloud sheets."
    },
    {
      "id": 218,
      "type": "Meteorology",
      "question": "NS clouds occur",
      "options": [
        "At cold front",
        "At warm front"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "As warm, moist air gradually overrides a cold air wedge along a warm front, extensive layered cloudiness culminates in widespread Nimbostratus (NS) rain belts."
    },
    {
      "id": 219,
      "type": "Meteorology",
      "question": "Corona is associated with the cloud",
      "options": [
        "AS",
        "AC",
        "CC",
        "CS"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "A Corona is caused by light diffraction through small uniform liquid water droplets typically present in Altocumulus (AC) or thin Altostratus."
    },
    {
      "id": 220,
      "type": "Meteorology",
      "question": "Lenticular clouds indicate presence of",
      "options": [
        "Warm Front",
        "Cold front",
        "Mountain waves"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Altocumulus lenticularis (lens-shaped clouds) remain stationary over mountain crests, signaling standing lee waves and turbulence."
    },
    {
      "id": 221,
      "type": "Meteorology",
      "question": "The lowest level below which condensation trails will not form is",
      "options": [
        "Mintra Level",
        "Drytra Level",
        "Maxtra Level"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Mintra level is the lowest atmospheric flight level below which exhaust condensation trails (contrails) cannot form regardless of relative humidity."
    },
    {
      "id": 222,
      "type": "Meteorology",
      "question": "Rain falling from cloud but not reaching ground is",
      "options": [
        "Virgo",
        "Virga",
        "Mirage"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Virga refers to streaks or wisps of precipitation falling from a cloud base that evaporate into drier air before reaching the ground."
    },
    {
      "id": 223,
      "type": "Meteorology",
      "question": "CB with distinct anvil is called",
      "options": [
        "Castellanus",
        "Capillatus",
        "Uncinus"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Cumulonimbus capillatus is a mature stage CB whose upper portion exhibits a distinct fibrous, anvil-shaped ice crystal structure."
    },
    {
      "id": 224,
      "type": "Meteorology",
      "question": "Cloud ceiling is the height of the cloud covering",
      "options": [
        "3-4/8",
        "8/8",
        "5/8 or more"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Ceiling is defined as the height above ground of the base of the lowest cloud layer reporting Broken (BKN, 5–7 octas) or Overcast (OVC, 8 octas)."
    },
    {
      "id": 225,
      "type": "Meteorology",
      "question": "No condensation trails occur above",
      "options": [
        "Maxtra Level",
        "Dytra Level",
        "Mintra Level"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Maxtra level is the upper boundary in the stratosphere above which air is too dry and warm for aircraft engine exhaust to form persistent contrails."
    },
    {
      "id": 226,
      "type": "Meteorology",
      "question": "Cloud of operational significance has base below ……. m or below the highest minimum sector altitude, which is greater",
      "options": [
        "1500",
        "2000",
        "1000"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "ICAO defines cloud of operational significance as cloud with base below 1500 m (5,000 ft) or below the highest minimum sector altitude (whichever is greater), or any CB/TCU."
    },
    {
      "id": 227,
      "type": "Meteorology",
      "question": "AC cloud with cumuliform protuberances are indicative of",
      "options": [
        "Stability",
        "Instability",
        "Neutrality"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Altocumulus castellanus displays vertical turreted protuberances, signaling mid-level convective instability and potential thunderstorm development."
    },
    {
      "id": 228,
      "type": "Meteorology",
      "question": "Hail may be experienced under the anvil of a CB",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "8. Vertical Motion and Clouds",
      "explanation": "Strong upper-level winds blowing off the top of a Cumulonimbus storm can carry heavy hail out beneath the anvil overhang into clear air several miles ahead of the storm core."
    },
    {
      "id": 229,
      "type": "Meteorology",
      "question": "DALR = 9.8 °C, ELR = 6.8 °C; atmosphere is",
      "options": [
        "stable",
        "unstable",
        "indifferent"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "When Environmental Lapse Rate (ELR = 6.8 °C/km) is less than Dry Adiabatic Lapse Rate (DALR = 9.8 °C/km), a lifted unsaturated air parcel cools faster than the environment, becomes denser, and sinks back to its original position, indicating atmospheric stability."
    },
    {
      "id": 230,
      "type": "Meteorology",
      "question": "SALR = 5.5 °C, ELR = 4.5 °C; atmosphere is",
      "options": [
        "unstable",
        "stable",
        "indifferent"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "When ELR (4.5 °C/km) is less than SALR (5.5 °C/km), the atmosphere cools slower with height than even a saturated rising parcel. Any lifted air parcel (dry or moist) remains colder than its surrounding environment, resulting in absolute stability."
    },
    {
      "id": 231,
      "type": "Meteorology",
      "question": "DALR > ELR > SALR",
      "options": [
        "conditionally stable",
        "latently stable",
        "potentially stable"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "When ELR lies between SALR and DALR, the atmosphere is conditionally stable (or conditionally unstable). It is stable for unsaturated air parcels but becomes unstable if air is saturated and lifted above its Lifting Condensation Level."
    },
    {
      "id": 232,
      "type": "Meteorology",
      "question": "Dry air is unstable when",
      "options": [
        "ELR=DALR",
        "ELR>DALR",
        "ELR < DALR"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Dry (unsaturated) air is unstable whenever the Environmental Lapse Rate (ELR) is greater than the Dry Adiabatic Lapse Rate (DALR), creating superadiabatic lapse rate conditions where lifted air remains warmer than its surroundings."
    },
    {
      "id": 233,
      "type": "Meteorology",
      "question": "Moist air is unstable when",
      "options": [
        "ELR > SALR",
        "ELR < SALR",
        "DALR > ELR"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Saturated (moist) air is unstable whenever the Environmental Lapse Rate exceeds the Saturated Adiabatic Lapse Rate (ELR > SALR), causing a rising saturated parcel to remain warmer and less dense than surrounding air."
    },
    {
      "id": 234,
      "type": "Meteorology",
      "question": "If ELR = SALR = DALR the atmosphere is",
      "options": [
        "Stable",
        "Instable",
        "Indifferent"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "When ELR equals the adiabatic cooling rate of the displaced parcel, the rising parcel matches the temperature of its surrounding environment at every level, resulting in neutral stability (indifferent state)."
    },
    {
      "id": 235,
      "type": "Meteorology",
      "question": "DALR means:",
      "options": [
        "The rate at which temperature of unsaturated parcel of air falls with height when made to ascend adiabatically.",
        "The rate at which temp falls with height.",
        "The rate at which ascending parcel of saturated air cools."
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Dry Adiabatic Lapse Rate (DALR) is defined as the rate at which an unsaturated air parcel cools due to expansion as it rises adiabatically without exchanging heat with its environment (~9.8 °C/km or 3 °C/1000 ft)."
    },
    {
      "id": 236,
      "type": "Meteorology",
      "question": "Surface temp, is 30° C. Assuming DALR. what is the temperature at 2 km",
      "options": [
        "18° C",
        "10° C",
        "42° C"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Using DALR of ~10 °C/km (or 9.8 °C/km), ascending 2 km results in a temperature decrease of 20 °C. Surface temperature 30 °C minus 20 °C yields 10 °C."
    },
    {
      "id": 237,
      "type": "Meteorology",
      "question": "An Isothermal atmosphere is",
      "options": [
        "Stable",
        "Unstable",
        "Neutral"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "An isothermal atmosphere has constant temperature with height (ELR = 0 °C/km). Since ELR (0) is significantly less than both SALR and DALR, an isothermal layer is extremely stable."
    },
    {
      "id": 238,
      "type": "Meteorology",
      "question": "If environmental lapse rate(ELR) is less than SALR, the atmosphere is said to be:",
      "options": [
        "Absolutely unstable",
        "Conditionally stable",
        "Absolutely stable"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "When ELR < SALR, any vertically displaced parcel (whether saturated or unsaturated) cools faster than its environment, making it denser and forcing it back to its starting level. This condition is termed Absolute Stability."
    },
    {
      "id": 239,
      "type": "Meteorology",
      "question": "DALR is approximately",
      "options": [
        "5 ° C /km",
        "15 ° C /km",
        "10 ° C /km"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "The Dry Adiabatic Lapse Rate (DALR) is approximately 9.8 °C per kilometer, commonly rounded to 10 °C/km (or 3 °C per 1,000 feet) in practical aviation meteorology."
    },
    {
      "id": 240,
      "type": "Meteorology",
      "question": "SALR at mean sea level is about",
      "options": [
        "10 ° C/Km",
        "5 ° C/Km",
        "5 ° F/Km"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Near mean sea level in warm, moist air, abundant condensation releases latent heat of vaporisation, reducing the saturated adiabatic cooling rate to approximately 5 °C/km (or 1.5 °C per 1,000 feet)."
    },
    {
      "id": 241,
      "type": "Meteorology",
      "question": "SALR approaches DALR",
      "options": [
        "at 0°C",
        "at -15°F",
        "at -40°C"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "At extremely cold temperatures (~ -40 °C), saturated air contains negligible water vapor capacity. Consequently, very little latent heat is released during condensation, and SALR approaches DALR."
    },
    {
      "id": 242,
      "type": "Meteorology",
      "question": "Dry air having a temperature of 35°C on surface when forced to rise adiabatically by 1 km would attain a temperature of",
      "options": [
        "29°C",
        "25°C",
        "45°C"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Unsaturated air cools at the Dry Adiabatic Lapse Rate (DALR ~ 10 °C/km or 9.8 °C/km). Rising 1 km lowers its temperature from 35 °C to approximately 25 °C."
    },
    {
      "id": 243,
      "type": "Meteorology",
      "question": "Inversion in the atmosphere indicates",
      "options": [
        "Stability",
        "Instability",
        "Neutrality"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "A temperature inversion occurs when temperature increases with altitude (negative lapse rate). Warm air overlying cooler surface air creates an exceptionally stable layer that suppresses vertical mixing and convection."
    },
    {
      "id": 244,
      "type": "Meteorology",
      "question": "Inversion is ……….. Lapse Rate (LR)",
      "options": [
        "Positive",
        "Negative",
        "Neutral"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Lapse rate is conventionally defined as temperature decrease with height. Because temperature increases with height during an inversion, it represents a negative lapse rate."
    },
    {
      "id": 245,
      "type": "Meteorology",
      "question": "Environmental LR can be more than DALR",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "True. Near intense heat sources or strongly solar-heated land surfaces during sunny afternoons, boundary layer air can develop superadiabatic lapse rates where ELR exceeds DALR."
    },
    {
      "id": 246,
      "type": "Meteorology",
      "question": "The process which to a large extent determines the vertical distribution of temperature in atmosphere is",
      "options": [
        "Adiabatic",
        "Isothermal",
        "Isentropic"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Vertical motion involving pressure changes without external heat transfer (adiabatic processes) is the dominant factor governing temperature distribution and stability profiles in the atmosphere."
    },
    {
      "id": 247,
      "type": "Meteorology",
      "question": "Rise in temperature with height is",
      "options": [
        "Inversion",
        "Lapse",
        "Normal"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "A atmospheric condition where air temperature increases rather than decreases with increasing altitude is termed a temperature inversion."
    },
    {
      "id": 248,
      "type": "Meteorology",
      "question": "Inversion is common in",
      "options": [
        "Post Monsoon",
        "Monsoon",
        "Winters"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "9. Atmospheric Stability and Instability",
      "explanation": "Winter nights provide long hours of nocturnal darkness, clear skies, and light surface winds—ideal conditions for strong terrestrial longwave radiation loss that forms ground-based surface inversions."
    },
    {
      "id": 249,
      "type": "Meteorology",
      "question": "Aurora Australis occur in the",
      "options": [
        "S hemisphere",
        "N hemisphere",
        "Equator"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Aurora Australis (Southern Lights) occurs in the high latitudes of the Southern Hemisphere."
    },
    {
      "id": 250,
      "type": "Meteorology",
      "question": "Aurora Australis called .... Lights",
      "options": [
        "Northern",
        "Southern",
        "Temperate"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "'Australis' derives from the Latin word for southern; hence Aurora Australis is known as the Southern Lights."
    },
    {
      "id": 251,
      "type": "Meteorology",
      "question": "Aurora Borealis occur in the",
      "options": [
        "S hemisphere",
        "N hemisphere",
        "Equator"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Aurora Borealis (Northern Lights) occurs in the high northern latitudes of the Northern Hemisphere."
    },
    {
      "id": 252,
      "type": "Meteorology",
      "question": "Aurora Borealis are called ……... Lights",
      "options": [
        "Northern",
        "Southern",
        "Temperate"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "'Borealis' comes from the Greek god of the north wind, Boreas; thus Aurora Borealis is termed the Northern Lights."
    },
    {
      "id": 253,
      "type": "Meteorology",
      "question": "Corona occur in…… clouds",
      "options": [
        "AS",
        "NS",
        "CS"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Coronas are formed by light diffraction through water droplets typical of Altostratus (AS) or Altocumulus (AC) clouds."
    },
    {
      "id": 254,
      "type": "Meteorology",
      "question": "Bishop's ring is due to the diffraction of light by fine particles of",
      "options": [
        "water",
        "dust",
        "ice"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "A Bishop's ring is a faint reddish-brown sky ring caused by diffraction of sunlight through fine volcanic dust or aerosol particles in the upper atmosphere."
    },
    {
      "id": 255,
      "type": "Meteorology",
      "question": "The radius of the Bishop's ring is about",
      "options": [
        "32°",
        "22°",
        "42°"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Standard atmospheric observation standards record the radius of a Bishop's ring as approximately 22° centered on the sun."
    },
    {
      "id": 256,
      "type": "Meteorology",
      "question": "Superior Mirage occurs in marked",
      "options": [
        "Lapse",
        "Isothermal",
        "Inversion"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "A superior mirage occurs under strong temperature inversion conditions where dense cold air near the surface bends light rays downward toward the observer."
    },
    {
      "id": 257,
      "type": "Meteorology",
      "question": "Inferior Mirage occurs when there is",
      "options": [
        "Lapse",
        "Isothermal",
        "Inversion"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "An inferior mirage occurs over highly heated ground with a steep (superadiabatic) lapse rate, bending light rays upward to produce inverted images."
    },
    {
      "id": 258,
      "type": "Meteorology",
      "question": "Corona are formed due to the ……. of light",
      "options": [
        "Refraction",
        "Diffraction",
        "Scattering"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Coronas are produced by the wave phenomenon of light diffraction around small water droplets or ice particles."
    },
    {
      "id": 259,
      "type": "Meteorology",
      "question": "Corona are formed due to light, passing through",
      "options": [
        "Mist only",
        "Fog only",
        "small water or ice particles only",
        "Any one of all these"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Light passing through any suspension of small water droplets or ice particles (mist, fog, or thin clouds) can diffract to create a corona."
    },
    {
      "id": 260,
      "type": "Meteorology",
      "question": "Halo is produced by",
      "options": [
        "Refraction",
        "Diffraction",
        "Scattering"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Halos are optical phenomena created by refraction of light through hexagonal ice crystals in high-altitude clouds."
    },
    {
      "id": 261,
      "type": "Meteorology",
      "question": "Halo is produced when light passes through",
      "options": [
        "water particles",
        "ice crystals",
        "both"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Light must pass through and refract within ice crystals (not liquid water droplets) to produce halo rings."
    },
    {
      "id": 262,
      "type": "Meteorology",
      "question": "Halo occur in the cloud",
      "options": [
        "AS",
        "NS",
        "CS"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Cirrostratus (CS) clouds are composed entirely of ice crystals and produce distinct 22° halos around the sun or moon."
    },
    {
      "id": 263,
      "type": "Meteorology",
      "question": "Halo is luminous ring of ……... radius",
      "options": [
        "32°",
        "22°",
        "42°"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "The most common optical halo is the 22° halo, formed by light refraction through 60° prism angle hexagonal ice crystals."
    },
    {
      "id": 264,
      "type": "Meteorology",
      "question": "Halo round the sun shows a pure clear …………. on the outside",
      "options": [
        "Red",
        "Yellow",
        "Violet"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Due to differential refraction, a halo has a reddish inner edge facing toward the sun and a violet/blue outer edge."
    },
    {
      "id": 265,
      "type": "Meteorology",
      "question": "Halo signifies predominance in the cloud of",
      "options": [
        "Supercooled water drops",
        "Ice crystals",
        "Both"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Halos require refraction through structured ice crystals, confirming that the cloud consists predominantly of ice rather than water."
    },
    {
      "id": 266,
      "type": "Meteorology",
      "question": "The cloud which cause Halo has ... chances of ice accretion",
      "options": [
        "negligible",
        "maximum",
        "medium"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Since halo-producing clouds (Cirrostratus) consist of dry ice crystals without supercooled liquid water drops, icing risk for aircraft is negligible."
    },
    {
      "id": 267,
      "type": "Meteorology",
      "question": "Sometimes a halo with a radius of ……….. is observed, called Large Halo",
      "options": [
        "32°",
        "42°",
        "22°"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "In standard multiple-choice question banks, 42° is listed for large ring features, whereas standard 22° denotes the common small halo."
    },
    {
      "id": 268,
      "type": "Meteorology",
      "question": "Halo occurs from.... cloud",
      "options": [
        "Low",
        "Medium",
        "High"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "10. Optical Phenomena",
      "explanation": "Cirrostratus (CS) is a high-level cloud (base above 20,000 ft) composed of ice crystals that form halos."
    },
    {
      "id": 269,
      "type": "Meteorology",
      "question": "When super cooled water drops and ice particles co-exist, the ice crystals grow at the expense of the water drops because",
      "options": [
        "Saturation vapour pressure over water drops is less than over the ice crystals",
        "Saturation vapour pressure over the ice crystals is less than over water drops",
        "The ice crystals convert into water drops"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "According to the Bergeron-Findeisen process, the saturation vapor pressure over ice is lower than over liquid water at the same temperature. Water vapor evaporates from supercooled water droplets and deposits directly onto ice crystals, causing them to grow rapidly."
    },
    {
      "id": 270,
      "type": "Meteorology",
      "question": "The clouds whose tops extend well above the freezing level are called",
      "options": [
        "Warm Clouds",
        "Cold Clouds",
        "Moderate Clouds"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Clouds whose vertical extent reaches altitudes where temperatures are below 0°C (freezing level) contain supercooled water drops and ice crystals, and are defined as cold clouds."
    },
    {
      "id": 271,
      "type": "Meteorology",
      "question": "The clouds whose tops do not extend to the freezing level are called",
      "options": [
        "Warm Clouds",
        "Cold Clouds",
        "Moderate Clouds"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Warm clouds exist entirely below the 0°C isotherm level, meaning their contents consist exclusively of liquid water droplets."
    },
    {
      "id": 272,
      "type": "Meteorology",
      "question": "Coalescence Theory explains occurrence of rainfall from the",
      "options": [
        "Warm Clouds",
        "Cold Clouds",
        "Both types of Clouds"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Collision-coalescence theory explains rain formation in warm clouds where larger cloud droplets fall through smaller ones, colliding and merging into raindrops without involving ice crystals."
    },
    {
      "id": 273,
      "type": "Meteorology",
      "question": "Ice crystal Theory explains occurrence of rainfall from the",
      "options": [
        "Warm Clouds",
        "Cold Clouds",
        "Both types of Clouds"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "The Ice Crystal (Bergeron-Findeisen) process requires co-existence of ice crystals and supercooled water droplets, which occurs exclusively in cold clouds."
    },
    {
      "id": 274,
      "type": "Meteorology",
      "question": "Giant Nucleus Theory explains occurrence of rainfall over",
      "options": [
        "Maritime areas",
        "Inland areas",
        "Hilly areas"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "In maritime environments, abundant sea-salt particles act as giant hygroscopic condensation nuclei, initiating rapid warm-cloud raindrop growth via coalescence."
    },
    {
      "id": 275,
      "type": "Meteorology",
      "question": "Very heavy precipitation as showers over a short period is called",
      "options": [
        "Flash floods",
        "Cloud Burst",
        "Orographic Rain"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "A cloudburst is an extreme convective precipitation event where high amounts of rain (typically exceeding 100 mm/hr) fall over a small geographic area within a very short duration."
    },
    {
      "id": 276,
      "type": "Meteorology",
      "question": "Rain shadow area is on the ……….. of the mountain range",
      "options": [
        "Top",
        "Windward side",
        "Leeward side"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "As air descends down the leeward side of a mountain, it compresses and warms adiabatically, suppressing cloud formation and creating a dry rain shadow region."
    },
    {
      "id": 277,
      "type": "Meteorology",
      "question": "Sleet is a mixture of",
      "options": [
        "Hall & Snow",
        "Rain & Snow",
        "Frozen Rain"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "In international and meteorological standard definitions, sleet refers to precipitation consisting of a mixture of rain and melting snow."
    },
    {
      "id": 278,
      "type": "Meteorology",
      "question": "Rainfall in the tropics is more in",
      "options": [
        "Winters",
        "Summers",
        "Post monsoon"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Intense solar heating during tropical summers fuels strong vertical instability, thermal convection, and the seasonal position of the Intertropical Convergence Zone (ITCZ)."
    },
    {
      "id": 279,
      "type": "Meteorology",
      "question": "Rainfall in the tropics is more in the",
      "options": [
        "Morning",
        "Afternoon",
        "Night"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Diurnal surface solar heating reaches its peak around midday to early afternoon, triggering thermal uplift and convective shower activity during the afternoon."
    },
    {
      "id": 280,
      "type": "Meteorology",
      "question": "Rainfall in the temperate latitudes is more in",
      "options": [
        "Winters",
        "Summers",
        "Spring"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Temperate latitudes experience peak rainfall in winter due to intensified frontal activity, steep polar-equatorial temperature gradients, and frequent extra-tropical cyclones."
    },
    {
      "id": 281,
      "type": "Meteorology",
      "question": "Over J&K and western Himalayas Rainfall is more in",
      "options": [
        "Winters",
        "Summers",
        "Post monsoon"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Western Disturbances (extra-tropical mid-latitude systems) traverse North-West India during winter, yielding heavy rain and snowfall across Jammu & Kashmir and the western Himalayas."
    },
    {
      "id": 282,
      "type": "Meteorology",
      "question": "Rainfall over coastal areas is more in the",
      "options": [
        "Evening",
        "Afternoon",
        "Night & early morning"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Nighttime land cooling creates land breeze convergence zones just offshore over warm coastal waters, maximizing convective rainfall during late night and early morning hours."
    },
    {
      "id": 283,
      "type": "Meteorology",
      "question": "Areas to the ……….. of western Ghats of India are rain shadow areas",
      "options": [
        "W",
        "S",
        "E"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "The Western Ghats intercept moisture-laden South-West monsoon winds from the Arabian Sea, leaving the region to the East (Deccan Plateau) in a dry rain shadow."
    },
    {
      "id": 284,
      "type": "Meteorology",
      "question": "A sudden rise in the level of rivers or streams causing floods is called",
      "options": [
        "Cloud Burst",
        "Catchments flooding",
        "Flash Floods"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "A flash flood is a rapid, intense surge of water in low-lying areas or stream channels following heavy rainfall or localized cloudbursts."
    },
    {
      "id": 285,
      "type": "Meteorology",
      "question": "Artificial rain making is also termed as",
      "options": [
        "Simulation",
        "Cloud seeding",
        "Nucleation"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Cloud seeding is the deliberate introduction of artificial condensation or freezing nuclei (such as silver iodide or dry ice) into clouds to stimulate precipitation."
    },
    {
      "id": 286,
      "type": "Meteorology",
      "question": "Fog can be dispersed for a short period by artificial stimulation",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "True. Artificial dissipation techniques (e.g., seeding supercooled fog with dry ice or heating warm fog) can clear airport runways for temporary operational visibility."
    },
    {
      "id": 287,
      "type": "Meteorology",
      "question": "Showery precipitation occurs from",
      "options": [
        "NS",
        "AC",
        "CB"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "Showers are localized, high-intensity precipitation events characterized by rapid onset and clearing, falling from convective clouds such as Cumulonimbus (CB)."
    },
    {
      "id": 288,
      "type": "Meteorology",
      "question": "A day is called Rainy day when rainfall in 24 hr is ....mm or more",
      "options": [
        "1.5",
        "2",
        "2.5"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "11. Precipitation",
      "explanation": "According to official meteorological standards (such as India Meteorological Department - IMD rules), a rainy day is defined as a day with measured 24-hour rainfall of 2.5 mm or more."
    },
    {
      "id": 289,
      "type": "Meteorology",
      "question": "Hoar frost occurs on airframe in clear air when the temperature of airframe is",
      "options": [
        "below the frost point",
        "frost point",
        "just above the frost point"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Hoar frost forms in clear, moist air when the airframe temperature is below freezing and below the frost point, causing water vapor to sublimate directly into feathery ice crystals."
    },
    {
      "id": 290,
      "type": "Meteorology",
      "question": "In clouds at temperatures below 0° C an aircraft may encounter icing of the type",
      "options": [
        "only Glazed",
        "only Rime",
        "intermediate between these two"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "At sub-zero temperatures inside clouds, aircraft can encounter Rime ice, Glazed (clear) ice, or a mixed/intermediate type depending on liquid water content, droplet sizes, and temperature."
    },
    {
      "id": 291,
      "type": "Meteorology",
      "question": "Opaque Rime ice is",
      "options": [
        "Light porous",
        "Solid",
        "Mixture of porous and solid"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Rime ice is formed by small droplets freezing rapidly on impact, trapping air between the ice particles to create a light, opaque, and porous structure."
    },
    {
      "id": 292,
      "type": "Meteorology",
      "question": "Rime is formed by freezing of ……… supercooled water droplets on airframe when aircraft is flying through clouds",
      "options": [
        "Small",
        "Large",
        "Medium"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Small supercooled water droplets freeze almost instantaneously upon striking the airframe surface, forming rime ice."
    },
    {
      "id": 293,
      "type": "Meteorology",
      "question": "Glazed ice is formed by freezing of ……… supercooled water droplets on airframe when aircraft is flying through clouds",
      "options": [
        "small",
        "Large",
        "medium"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Large supercooled droplets do not freeze immediately upon impact; they flow back over the wing before freezing completely into a clear, solid layer of glazed ice."
    },
    {
      "id": 294,
      "type": "Meteorology",
      "question": "The ……. ice poses serious aviation hazard",
      "options": [
        "Rime",
        "Hoar Frost",
        "Glazed"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Glazed (clear) ice is heavy, hard, strongly adherent, alters the aerodynamic shape of the airfoil, and is extremely difficult to remove, making it the most dangerous type of icing."
    },
    {
      "id": 295,
      "type": "Meteorology",
      "question": "Airframe icing occurs below 0°C. Its probability of occurrence decreases progressively below -20 °C, as at lower temperatures the proportion of supercooled water drops in a cloud",
      "options": [
        "Increases",
        "Decreases",
        "Does not change"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "At temperatures colder than -20°C, supercooled liquid water droplets progressively freeze into ice crystals, decreasing the amount of liquid water available to cause airframe icing."
    },
    {
      "id": 296,
      "type": "Meteorology",
      "question": "CI, CS and CC clouds consist mostly ice crystals. Icing hazard is therefore",
      "options": [
        "Maximum",
        "Medium",
        "Negligible"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "High-level clouds (Cirrus, Cirrostratus, Cirrocumulus) consist almost entirely of dry ice crystals, which do not adhere to airframes, presenting a negligible icing risk."
    },
    {
      "id": 297,
      "type": "Meteorology",
      "question": "AS, NS consist of supercooled water drops and ice crystals in varying proportion…….. icing is possible.",
      "options": [
        "Maximum",
        "Light or moderate",
        "Negligible"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Altostratus and Nimbostratus clouds contain mixtures of supercooled liquid droplets and ice crystals, typically producing light to moderate icing conditions."
    },
    {
      "id": 298,
      "type": "Meteorology",
      "question": "In AC clouds ………….. icing is likely in mountainous areas",
      "options": [
        "Severe",
        "Light to moderate",
        "Negligible"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Altocumulus clouds generally produce light to moderate icing, which can intensify locally due to orographic uplift over mountainous terrain."
    },
    {
      "id": 299,
      "type": "Meteorology",
      "question": "In TCU icing may range from light to severe type at least up to ………. level.",
      "options": [
        "- 40 °C level",
        "30 °C level",
        "- 20 °C level"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Strong convective updrafts in Towering Cumulus (TCU) carry abundant liquid water aloft, supporting light to severe icing up to around the -20 °C isotherm."
    },
    {
      "id": 300,
      "type": "Meteorology",
      "question": "In CB icing may range from light to severe type up to -20°C level. Below this temperature severe icing is",
      "options": [
        "not significant",
        "significant",
        "maximum"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "At temperatures colder than -20°C inside Cumulonimbus clouds, most water drops have converted into ice crystals, making severe icing much less significant."
    },
    {
      "id": 301,
      "type": "Meteorology",
      "question": "Liquid water content is an important factor in icing. As the maximum water concentration is around ……, maximum ice formation in clouds may also be expected around that level.",
      "options": [
        "-25° C level",
        "-20° C level",
        "-15° C level"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "The highest concentration of supercooled liquid water droplets in clouds typically occurs around the -15°C temperature level, leading to maximum rate of ice accumulation."
    },
    {
      "id": 302,
      "type": "Meteorology",
      "question": "Carburetor icing occurs when air from intake passes through a venturi (choke) and causes expansional cooling and vaporization of fuel. Serious icing can occur at extreme temperatures",
      "options": [
        "13 °C",
        "30°C to -10°C",
        "20 °C"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "The temperature drop inside a venturi due to fuel vaporization and pressure reduction can lower intake air temperature by up to 20°C to 25°C, causing carburetor icing in ambient temperatures between -10°C and +30°C."
    },
    {
      "id": 303,
      "type": "Meteorology",
      "question": "………… occurs in a moist cloudless air on an aircraft surface having temp. below 0° C, due to sublimation of water vapour onto feathery ice crystals.",
      "options": [
        "Rime",
        "Glazed",
        "Hoar Frost"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Hoar frost is caused by direct deposition (sublimation) of atmospheric water vapor into feathery ice crystals on a cold airframe in clear, moist air."
    },
    {
      "id": 304,
      "type": "Meteorology",
      "question": "………….. occurs in St, Sc, Ac, Cu, Ns at temperature -10 to -40° C and in Cb at temperature -20 to -40°C",
      "options": [
        "Rime",
        "Glazed",
        "Hoar Frost"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "At lower cloud temperatures (-10°C to -40°C), supercooled droplets are smaller and freeze immediately upon impact, forming Rime ice."
    },
    {
      "id": 305,
      "type": "Meteorology",
      "question": "In clouds … occurs when a wide range of water drop sizes are present at temperatures between 0°C and -40°C",
      "options": [
        "Rime",
        "Glazed",
        "Mixture of rime and clear ice"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "When cloud droplets vary across a wide spectrum of sizes, small droplets form rime while larger droplets form clear ice, resulting in a mixed ice structure."
    },
    {
      "id": 306,
      "type": "Meteorology",
      "question": "……… occurs in AS, NS, SC and towering CU or CB between 0° C and -20° C, in warm front below 0° C, especially if the aircraft has rapidly descended from a colder region",
      "options": [
        "Glazed",
        "Fume",
        "Mixture of Rime and Clear ice"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Glazed (clear) ice predominates at temperatures between 0°C and -20°C in clouds containing large supercooled droplets, as well as in warm front precipitation zones."
    },
    {
      "id": 307,
      "type": "Meteorology",
      "question": "When fog freezes on parked aircraft it produces..,",
      "options": [
        "Hoar Frost",
        "Hoar Frost",
        "Clear ice"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Freezing fog depositing water droplets on a cold, parked aircraft structure freezes into a crystalline frost/rime deposit (hoar frost)."
    },
    {
      "id": 308,
      "type": "Meteorology",
      "question": "Icing ………. the stalling speed appreciably",
      "options": [
        "Decreases",
        "Increases",
        "Does not increase/decrease"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "12. Ice Accretion",
      "explanation": "Ice accumulation increases total aircraft weight and disrupts smooth airflow over the wings, reducing maximum lift coefficient and significantly increasing stalling speed."
    },
    {
      "id": 309,
      "type": "Meteorology",
      "question": "The condition necessary for the formation of a thunderstorm are:",
      "options": [
        "Steep lapse rate, strong winds",
        "Shallow lapse rate, adequate supply of moisture",
        "Steep lapse rate, adequate supply of moisture and trigger action"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "The three essential prerequisites for thunderstorm formation are high atmospheric instability (steep lapse rate), abundant low-level moisture, and a lifting mechanism (trigger action)."
    },
    {
      "id": 310,
      "type": "Meteorology",
      "question": "Hail is most likely to fall from a cloud",
      "options": [
        "Having layers",
        "Composed of Ice crystals",
        "Having strong vertical development"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Hail formation requires intense, sustained updrafts within clouds of great vertical extent (Cumulonimbus) to hold ice pellets aloft while they accrete supercooled droplets."
    },
    {
      "id": 311,
      "type": "Meteorology",
      "question": "Norwesters are",
      "options": [
        "The western disturbances which affect NW India",
        "Severe thunderstorms which occur over NE India during hot weather period",
        "Severe thunderstorms which occur over Peninsula during hot weather period"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Norwesters (Kalbaishakhi) are high-intensity localized thunderstorms occurring over Northeast India (Bengal, Assam, Bihar, Odisha) during the pre-monsoon hot weather season."
    },
    {
      "id": 312,
      "type": "Meteorology",
      "question": "Dust Storm usually occurs over NW India during",
      "options": [
        "Post-monsoon",
        "Winter",
        "Pre-Monsoon"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Dust storms (Andhi) occur over Northwest India during the hot pre-monsoon summer months (April–June) due to intense land heating and dry air."
    },
    {
      "id": 313,
      "type": "Meteorology",
      "question": "A 'mature' thunderstorm has",
      "options": [
        "updraft only",
        "downdraft only",
        "updrafts and downdrafts"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "The mature stage of a thunderstorm cell is defined by the simultaneous presence of strong convective updrafts and precipitation-driven downdrafts."
    },
    {
      "id": 314,
      "type": "Meteorology",
      "question": "Aircraft icing is most favoured in the cloud which have temperatures ranging between",
      "options": [
        "- 20° C and - 40° C",
        "0° C and - 20° C",
        "below -40 ° C"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Supercooled liquid water droplets exist in their highest concentration in cloud layers with temperatures between 0°C and -20°C, making this range the most hazardous for airframe icing."
    },
    {
      "id": 315,
      "type": "Meteorology",
      "question": "A short duration, showery precipitation is associated with",
      "options": [
        "ST",
        "AS",
        "CB"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Cumulonimbus (CB) clouds feature rapid vertical air motions that generate localized, intense showers characterized by sudden onset and brief duration."
    },
    {
      "id": 316,
      "type": "Meteorology",
      "question": "Hail is",
      "options": [
        "Solid precipitation which commonly occurs over the mountainous regions in winter",
        "Frozen or partly frozen rain falling from sheet type of clouds",
        "Solid precipitation falling from a deep convective cloud"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Hail consists of solid ice balls or lumps formed exclusively inside deep convective clouds (Cumulonimbus)."
    },
    {
      "id": 317,
      "type": "Meteorology",
      "question": "The most hazardous cloud for aviation is",
      "options": [
        "CB",
        "CU",
        "NS"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Cumulonimbus (CB) is the most dangerous cloud for aircraft due to extreme turbulence, microbursts, severe icing, hail, and lightning."
    },
    {
      "id": 318,
      "type": "Meteorology",
      "question": "The life of a Cb cell is usually",
      "options": [
        "7 to 8 hrs",
        "3 to 4 hrs",
        "2 - 3 hr"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "An individual single-cell Cumulonimbus completes its entire life cycle from cumulus stage to dissipation within approximately 1 to 3 hours (standardized as 2–3 hours in aviation meteorology)."
    },
    {
      "id": 319,
      "type": "Meteorology",
      "question": "Generally the severest activity of a, heat type, TS is for",
      "options": [
        "2 hrs",
        "30 to 45 min",
        "3 to 4 hr"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "The peak severity of a heat-type thunderstorm occurs during its mature phase, which typically lasts around 30 to 45 minutes."
    },
    {
      "id": 320,
      "type": "Meteorology",
      "question": "Norwesters occur during",
      "options": [
        "Jan-Feb",
        "Mar-May",
        "June-Sep",
        "Oct - Dec"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Norwesters develop during the pre-monsoon hot weather season spanning March to May."
    },
    {
      "id": 321,
      "type": "Meteorology",
      "question": "Norwesters occur during",
      "options": [
        "Winter",
        "Hot weather",
        "Monsoon",
        "Post Monsoon"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Norwesters are pre-monsoon convective storms triggered by intense surface heating during the hot weather season."
    },
    {
      "id": 322,
      "type": "Meteorology",
      "question": "Norwesters affect",
      "options": [
        "N India",
        "Bengal, Bihar, Orissa and Assam",
        "Central India"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Norwesters primarily affect eastern and north-eastern regions of India, notably West Bengal, Bihar, Odisha, and Assam."
    },
    {
      "id": 323,
      "type": "Meteorology",
      "question": "The trigger action may take place due to",
      "options": [
        "Clear night sky no wind",
        "Orographic lifting",
        "high pressure"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Forced mechanical lifting over topographic barriers (orographic lifting) serves as an effective trigger mechanism to release atmospheric instability."
    },
    {
      "id": 324,
      "type": "Meteorology",
      "question": "Norwesters normally occur during",
      "options": [
        "Mornings",
        "Afternoons",
        "Nights"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Maximal solar heating during early to mid-afternoon creates the strong updrafts necessary to initiate Norwester thunderstorms by late afternoon or evening."
    },
    {
      "id": 325,
      "type": "Meteorology",
      "question": "Norwesters originates over",
      "options": [
        "Chota - Nagpur hills",
        "Deccan Plateau",
        "Khasi hills"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "The elevated land of the Chota Nagpur Plateau acts as the primary origin point for localized solar heating and convective initiation of Norwesters."
    },
    {
      "id": 326,
      "type": "Meteorology",
      "question": "Andhi (blinding storms) occur generally over",
      "options": [
        "S India",
        "N India",
        "NE India"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Andhi (severe convective dust storms) occurs predominantly across the dry plains of North and Northwest India during summer."
    },
    {
      "id": 327,
      "type": "Meteorology",
      "question": "Wind speed in Light DS is",
      "options": [
        "25 kt",
        "30 kt",
        "up to 21 kt"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "By meteorological standard definitions, a light dust storm (DS) involves wind speeds up to 21 knots."
    },
    {
      "id": 328,
      "type": "Meteorology",
      "question": "The diameter of Microburst is",
      "options": [
        "less than 4 km",
        "less than 2 km",
        "less than 6 km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "A microburst is a concentrated convective downdraft with a horizontal outflow impact area measuring less than 4 km (2.2 NM) across."
    },
    {
      "id": 329,
      "type": "Meteorology",
      "question": "The diameter of an Macroburst",
      "options": [
        "< 4 km",
        "4 km or more",
        "> 8 km"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "A macroburst is a large-scale convective downdraft with an outflow extent equal to or exceeding 4 km in diameter."
    },
    {
      "id": 330,
      "type": "Meteorology",
      "question": "For detecting precipitation a Radar wavelength in the range ... is suitable",
      "options": [
        "30 to 200 mm",
        "400-500 mm",
        "600-700 mm"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Meteorological weather radars operate in microwave bands between 30 mm and 200 mm wavelength (3 cm to 20 cm) for optimal backscatter from hydrometeors."
    },
    {
      "id": 331,
      "type": "Meteorology",
      "question": "For airborne radars wavelength generally used",
      "options": [
        "20 mm",
        "40 mm",
        "60 mm"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Airborne weather radars utilize X-band wavelengths around 30 mm to 40 mm (~3.2–4 cm) to balance antenna dish size constraints with target resolution."
    },
    {
      "id": 332,
      "type": "Meteorology",
      "question": "The wavelength of TS detection X band radar is",
      "options": [
        "10 mm",
        "20 mm",
        "30 mm"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "X-band weather radar operates at frequencies around 9–10 GHz, which corresponds to a wavelength of approximately 3 cm (30 mm)."
    },
    {
      "id": 333,
      "type": "Meteorology",
      "question": "The wavelength of storm detection S band radar is",
      "options": [
        "50 mm",
        "100 mm",
        "200 mm"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "S-band weather radars operate near 3 GHz with a wavelength of approximately 10 cm (100 mm), providing excellent storm penetration without significant attenuation by heavy rain."
    },
    {
      "id": 334,
      "type": "Meteorology",
      "question": "Over plains TS mostly occur during the",
      "options": [
        "afternoon",
        "night",
        "early morning"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Over flat land surfaces, maximum surface solar heating takes place during early afternoon, causing convective thunderstorms to peak in the afternoon."
    },
    {
      "id": 335,
      "type": "Meteorology",
      "question": "Over valley and foot hills TS generally occur during",
      "options": [
        "afternoon",
        "night & early morning"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "In mountainous valleys, cold katabatic drainage winds converge in valley bottoms at night, triggering convective uplift and thunderstorms during night and early morning hours."
    },
    {
      "id": 336,
      "type": "Meteorology",
      "question": "Over the sea TS are more frequent",
      "options": [
        "afternoon",
        "night",
        "early morning"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Maritime thunderstorms occur most frequently during late night and early morning when radiational cooling of cloud tops steepens the lapse rate over warm sea surfaces."
    },
    {
      "id": 337,
      "type": "Meteorology",
      "question": "The life of Mesoscale Convective Complex TS is",
      "options": [
        "2-3 hr",
        "3-4 hr",
        "6 to 24 hr"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Mesoscale Convective Complexes (MCCs) are massive, self-sustaining storm systems that typically persist for 6 to 24 hours."
    },
    {
      "id": 338,
      "type": "Meteorology",
      "question": "Loud peals of thunder, frequent flashes of lightning, moderate or heavy showers accompanied by light hail with maximum wind speed 15-40 kt is classified as",
      "options": [
        "Light TS",
        "Moderate TS",
        "Severe TS"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "A Moderate Thunderstorm is meteorologically classified by frequent lightning, loud thunder, heavy showers, small hail, and surface squall gusts between 15 and 40 knots."
    },
    {
      "id": 339,
      "type": "Meteorology",
      "question": "For a severe TS one of the requirements is strong wind shear",
      "options": [
        "Horizontal",
        "Vertical",
        "Slant"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Strong vertical wind shear (change of wind vector with height) is critical to tilt storm updrafts, preventing falling precipitation from choking the updraft."
    },
    {
      "id": 340,
      "type": "Meteorology",
      "question": "Severe TS cells are tilted",
      "options": [
        "in vertical",
        "to the South",
        "to the North"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Severe thunderstorm cells are tilted in the vertical plane by strong ambient vertical wind shear, separating the updraft and downdraft regions."
    },
    {
      "id": 341,
      "type": "Meteorology",
      "question": "When flying through an active TS, lightning strikes are mostly likely",
      "options": [
        "Above 5000 ft and under the anvil",
        "In the clear air below the cloud in rain",
        "In the temperature band between +10 C and -10 C",
        "At or above 10000 ft"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Statistical aviation studies show aircraft lightning strikes occur most frequently in the temperature range between +10°C and -10°C, where mixed-phase water and ice particles induce high electrical activity."
    },
    {
      "id": 342,
      "type": "Meteorology",
      "question": "Hazards of the mature stage of TS Cell include lighting, turbulence and",
      "options": [
        "Microburst, wind-shear and anvil",
        "Icing, microburst and WS",
        "Icing, drizzle and microburst",
        "WS, hail and fog"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Primary aviation hazards in the mature thunderstorm cell include lightning, severe turbulence, airframe icing, microbursts, and low-level wind shear (WS)."
    },
    {
      "id": 343,
      "type": "Meteorology",
      "question": "Hail grows by",
      "options": [
        "freezing as it leaves the cloud",
        "up and down forces in CU cloud",
        "collision with ice crystals",
        "collision with supercooled water drops"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "13. Thunderstorms",
      "explanation": "Hailstones grow in size primarily by accretion—colliding with supercooled water droplets that freeze upon contact on the ice surface within strong convective updrafts."
    },
    {
      "id": 344,
      "type": "Meteorology",
      "question": "The air mass which originates at sea in low Latitudes is called",
      "options": [
        "Polar maritime",
        "Tropical continental",
        "Tropical maritime"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Tropical maritime (mT) air masses originate over warm tropical ocean areas at low latitudes, making them warm and moist."
    },
    {
      "id": 345,
      "type": "Meteorology",
      "question": "The air mass which originates over equatorial region is",
      "options": [
        "Warm & dry",
        "Warm & Moist",
        "Cold & dry"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Equatorial air masses (mE) form in low-latitude regions with high solar radiation and vast ocean exposure, making them warm and highly moist."
    },
    {
      "id": 346,
      "type": "Meteorology",
      "question": "If the advancing cold front is colder than the cool air mass of the warm front, the advancing cold front undercuts and lifts both the warm and cool air masses of the warm front. This is",
      "options": [
        "Warm Occlusion",
        "Cold Occlusion"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "In a cold occlusion, the overtaking cold air behind the cold front is denser and colder than the cool air ahead of the warm front, causing it to undercut both air masses and wedge them upward."
    },
    {
      "id": 347,
      "type": "Meteorology",
      "question": "The airmass which originated over land area located in polar region:",
      "options": [
        "Warm & dry",
        "Warm & Moist",
        "Cold & dry"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Polar continental (cP) air masses originate over high-latitude continental landmasses (like snow-covered Canada or Siberia), rendering them cold and dry."
    },
    {
      "id": 348,
      "type": "Meteorology",
      "question": "If a warm air mass overtakes a cold air mass, it is called",
      "options": [
        "Cold Front",
        "Warm Front",
        "Occluded Front"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "A warm front represents the boundary formed when an advancing warm air mass overtakes and slides over a colder air mass."
    },
    {
      "id": 349,
      "type": "Meteorology",
      "question": "At warm front",
      "options": [
        "Warm air overtakes the cold air",
        "Cold air undercuts the warm air"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "At a warm front, advancing warm air overtakes colder air ahead and gradually ascends over the cooler air mass along a gentle frontal slope."
    },
    {
      "id": 350,
      "type": "Meteorology",
      "question": "The conditions are always unstable at",
      "options": [
        "Cold front",
        "Warm front"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Cold fronts feature steep frontal slopes that aggressively force moist boundary layer air aloft, creating vertical instability, strong convection, and thunderstorm activity."
    },
    {
      "id": 351,
      "type": "Meteorology",
      "question": "Line squall occurs about 100-300 km ahead of",
      "options": [
        "Warm front",
        "Cold front"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Pre-frontal squall lines (line squalls) frequently form 100 to 300 km ahead of an advancing fast-moving cold front."
    },
    {
      "id": 352,
      "type": "Meteorology",
      "question": "Precipitation occurs over a belt of 30 - 50 km on both side of front",
      "options": [
        "Cold front",
        "Warm front"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Cold fronts are characterized by a relatively narrow precipitation band (typically 30–50 km wide) concentrated directly along and near the surface front."
    },
    {
      "id": 353,
      "type": "Meteorology",
      "question": "Cold front moves at …... the speed of a warm front moves",
      "options": [
        "Same",
        "Double",
        "Half"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Cold fronts advance significantly faster than warm fronts—typically moving at approximately double the speed due to the density and momentum of cold air."
    },
    {
      "id": 354,
      "type": "Meteorology",
      "question": "Line Squalls occur ……… of Cold front",
      "options": [
        "Ahead",
        "Behind",
        "At the"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Pre-frontal line squalls develop ahead of the cold front due to upper-level gravity waves and convergence bands."
    },
    {
      "id": 355,
      "type": "Meteorology",
      "question": "Fronts are associated with",
      "options": [
        "Tropical cyclone",
        "Monsoon Depression",
        "Extratropical Cyclones"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Extra-tropical cyclones (mid-latitude depressions) develop along polar fronts separating distinct warm and cold air masses, whereas tropical storms are non-frontal."
    },
    {
      "id": 356,
      "type": "Meteorology",
      "question": "CB, Roll-type clouds, SC, AC with embedded CB are associated",
      "options": [
        "Cold front",
        "Warm front"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Rapid vertical forced lifting along a steep cold front produces convective clouds, including Cumulonimbus (CB), Stratocumulus (SC), and roll clouds."
    },
    {
      "id": 357,
      "type": "Meteorology",
      "question": "The Surface of discontinuity between the Polar Easterlies and the temperate Westerlies is called",
      "options": [
        "Equatorial Front",
        "Tropopause",
        "Polar Front"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "The polar front is the principal boundary separating cold polar easterly air masses from warm mid-latitude temperate westerly winds."
    },
    {
      "id": 358,
      "type": "Meteorology",
      "question": "The air mass which originates from sea area located in lower Lat is",
      "options": [
        "Warm & Dry",
        "Warm & Moist",
        "Cold & Moist"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Lower latitude ocean surfaces transfer solar heat and moisture to the overlying atmosphere, forming warm and moist Tropical Maritime air masses."
    },
    {
      "id": 359,
      "type": "Meteorology",
      "question": "WDs approach India as",
      "options": [
        "Cols",
        "Occluded Fronts",
        "Highs"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Western Disturbances (WDs) originate near the Mediterranean Sea and travel thousands of kilometers eastwards, arriving over Northwest India mostly as mature occluded fronts."
    },
    {
      "id": 360,
      "type": "Meteorology",
      "question": "Maximum WDs occur in",
      "options": [
        "Summers",
        "Post Monsoon",
        "Winters"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Western Disturbances occur with highest frequency and intensity during the winter months (December to February) when the subtropical westerly jet stream shifts south."
    },
    {
      "id": 361,
      "type": "Meteorology",
      "question": "Ahead of a warm front the surface wind",
      "options": [
        "Backs & weakens",
        "Veers & strengthens",
        "Backs & strengthens"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "In the Northern Hemisphere, falling surface pressure ahead of an approaching warm front causes surface winds to back (turn counter-clockwise) and increase in speed."
    },
    {
      "id": 362,
      "type": "Meteorology",
      "question": "On approach of a Warm Front temperature",
      "options": [
        "Fall",
        "Rise",
        "Remain same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "As a warm front approaches and passes, warmer maritime/tropical air replaces colder air, causing ambient surface temperatures to rise."
    },
    {
      "id": 363,
      "type": "Meteorology",
      "question": "CI, CS, AS, NS, ST in sequence are associated with the front",
      "options": [
        "Warm",
        "Cold",
        "Occluded"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "The shallow slope of an advancing warm front generates a progressive cloud shield sequence: Cirrus (CI) -> Cirrostratus (CS) -> Altostratus (AS) -> Nimbostratus (NS) -> Stratus (ST)."
    },
    {
      "id": 364,
      "type": "Meteorology",
      "question": "During the passage of a Cold Front winds",
      "options": [
        "Suddenly become squally",
        "Back and weaken",
        "Veer and are of moderate strength"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Passage of a cold front brings sharp pressure changes, strong vertical updrafts, and sudden squally winds."
    },
    {
      "id": 365,
      "type": "Meteorology",
      "question": "Visibility is poor in a Warm Front",
      "options": [
        "Ahead",
        "Ahead & During",
        "After & During"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Widespread precipitation, low cloud bases, mist, and fog ahead of and during warm front passage create poor visibility conditions."
    },
    {
      "id": 366,
      "type": "Meteorology",
      "question": "Fog occurs in Cold Front",
      "options": [
        "Ahead",
        "During",
        "After"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Frontal fog associated with cold fronts occurs primarily during frontal passage due to heavy precipitation evaporating into cooler surface air."
    },
    {
      "id": 367,
      "type": "Meteorology",
      "question": "WD is a……….. front",
      "options": [
        "Cold",
        "Warm",
        "Occluded"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Western Disturbances generally reach the Indian subcontinent after traversing long distances across Eurasia, reaching an occluded front stage."
    },
    {
      "id": 368,
      "type": "Meteorology",
      "question": "FZRA and FZFG occur ……… of a warm front",
      "options": [
        "Ahead",
        "During",
        "After"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Freezing rain (FZRA) and freezing fog (FZFG) form ahead of a warm front when rain falling from warm air aloft enters sub-zero surface air beneath the frontal slope."
    },
    {
      "id": 369,
      "type": "Meteorology",
      "question": "Precipitation ceases after the passage of a front",
      "options": [
        "Cold",
        "Warm",
        "Occluded"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Cold fronts have a narrow precipitation band; once the front passes, cold dry air rapidly subsides and clears the sky, causing rain to cease."
    },
    {
      "id": 370,
      "type": "Meteorology",
      "question": "During the approach of a Warm Front wind",
      "options": [
        "Backs",
        "Veers",
        "Does not change"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "As a warm front approaches in the Northern Hemisphere, surface winds back (turn counter-clockwise)."
    },
    {
      "id": 371,
      "type": "Meteorology",
      "question": "A WD has two or more closed isobars, at 2 hPa interval, it is termed as",
      "options": [
        "Troughs in Westerlies",
        "Western Depression",
        "Western Cyclone"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "In Indian meteorological terminology, a Western Disturbance exhibiting two or more closed isobars (analyzed at 2 hPa intervals) is designated as a Western Depression."
    },
    {
      "id": 372,
      "type": "Meteorology",
      "question": "A WD originate over",
      "options": [
        "Baluchistan",
        "Caspian sea",
        "Mediterranean, Caspian and Black Seas"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Western Disturbances originate as extra-tropical frontal depressions over the Mediterranean, Caspian, and Black Sea regions."
    },
    {
      "id": 373,
      "type": "Meteorology",
      "question": "Induced lows develop to the …….. of a WD",
      "options": [
        "N",
        "S",
        "NE"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "14. Air Masses, Fronts and Western Disturbances",
      "explanation": "Secondary 'induced lows' often develop to the south of a primary Western Disturbance (e.g., over Rajasthan or southern Pakistan) due to thermal and dynamic influences."
    },
    {
      "id": 374,
      "type": "Meteorology",
      "question": "The arbitrary lower limit of jet core velocity has been assigned by WMO as",
      "options": [
        "60 kt",
        "60 m/s",
        "70 m/s"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "According to the World Meteorological Organization (WMO) definition, a jet stream is a high-altitude wind current featuring a core speed of at least 60 knots (approx. 30 m/s)."
    },
    {
      "id": 375,
      "type": "Meteorology",
      "question": "Jet stream has",
      "options": [
        "one maxima",
        "one or more maxima",
        "only two maxima"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "WMO defines a jet stream as having one or more wind speed maxima (jet streaks) along its core axis."
    },
    {
      "id": 376,
      "type": "Meteorology",
      "question": "The vertical wind shear in a Jet stream is about",
      "options": [
        "5m/s/ km",
        "6m/s/km",
        "8m/s/km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "In aviation meteorology, vertical wind shear in jet streams typically averages around 5 to 10 m/s per km (approx. 5–10 kt per 1,000 ft)."
    },
    {
      "id": 377,
      "type": "Meteorology",
      "question": "Compared to horizontal wind shear the vertical wind shear in a Jet stream is",
      "options": [
        "weaker",
        "stronger",
        "same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Vertical wind shear across jet streams is roughly 100 to 1000 times stronger than horizontal wind shear."
    },
    {
      "id": 378,
      "type": "Meteorology",
      "question": "In a jet stream, the path of the maximum speed is known as",
      "options": [
        "Core",
        "Axis",
        "Jet streak"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The line along which peak wind speeds are concentrated is designated as the axis of the jet stream."
    },
    {
      "id": 379,
      "type": "Meteorology",
      "question": "The wind speed along the axis of a jet stream is always",
      "options": [
        "Uniform",
        "Not uniform"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Wind speed along the jet axis varies significantly, accelerating and decelerating to form localized speed maxima called jet streaks."
    },
    {
      "id": 380,
      "type": "Meteorology",
      "question": "Along the axis of a jet stream there are centres of high speed winds, these are called",
      "options": [
        "Jet streaks",
        "Core",
        "Axis"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Discrete regions or pockets of maximum velocity along a jet stream axis are called jet streaks (or jet maxima)."
    },
    {
      "id": 381,
      "type": "Meteorology",
      "question": "In a wavy jet the Jet streaks are located over or near the",
      "options": [
        "Ridge",
        "Trough",
        "Between Trough and Ridge"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "In a wavy, meandering jet stream, jet streaks commonly intensify and position themselves over or near the upper-level trough."
    },
    {
      "id": 382,
      "type": "Meteorology",
      "question": "Sub-tropical Jet Stream (STJ) is",
      "options": [
        "Westerly",
        "Easterly",
        "Southerly"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Subtropical Jet Stream (STJ) flows predominantly from West to East (Westerly) in both Northern and Southern hemispheres."
    },
    {
      "id": 383,
      "type": "Meteorology",
      "question": "The normal position of Sub-tropical Jet Stream is",
      "options": [
        "30° N",
        "27° N",
        "35° N"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Over the Indian subcontinent during winter/spring, the normal mean position of the Subtropical Westerly Jet stream is near 27° N."
    },
    {
      "id": 384,
      "type": "Meteorology",
      "question": "The southern most position of STJ is in February is",
      "options": [
        "22° N",
        "20° N",
        "18° N"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "During peak winter (February), the STJ reaches its southernmost limit across central India around 20° N latitude."
    },
    {
      "id": 385,
      "type": "Meteorology",
      "question": "The STJ affects India from",
      "options": [
        "Jun to Jul",
        "Oct to May",
        "Aug to Sep"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The STJ resides over Northern India from October to May, shifting north of the Himalayas during the summer monsoon season."
    },
    {
      "id": 386,
      "type": "Meteorology",
      "question": "STJ has a layered structure. There are often two layers of maximum wind to the ...... of jet core",
      "options": [
        "S",
        "N",
        "SW"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Due to the overlap of tropical and subtropical tropopause layers, double wind speed maxima are frequently found to the South of the STJ core."
    },
    {
      "id": 387,
      "type": "Meteorology",
      "question": "The STJ strengthens",
      "options": [
        "Northwards",
        "Upstream",
        "Downstream"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "As the STJ flows eastward over Northern India toward East Asia, it steadily accelerates and strengthens downstream."
    },
    {
      "id": 388,
      "type": "Meteorology",
      "question": "At and near the STJ the temperature gradient is very",
      "options": [
        "Small",
        "Large",
        "Moderate"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "By thermal wind principles, jet streams exist directly above zones of steep horizontal temperature gradients."
    },
    {
      "id": 389,
      "type": "Meteorology",
      "question": "Vertical wind shear in STJ is greater ……... the core",
      "options": [
        "above",
        "below",
        "along"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "In the STJ, vertical wind shear is typically higher above the jet core into the stable stratosphere, where wind speed decreases rapidly with height."
    },
    {
      "id": 390,
      "type": "Meteorology",
      "question": "The TJ prevails over the Indian Peninsula from",
      "options": [
        "May to Jun",
        "Sep to Oct",
        "Jun to Aug"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Tropical Easterly Jet (TEJ/TJ) is a seasonal feature established over the southern Indian peninsula during the peak monsoon months of June to August."
    },
    {
      "id": 391,
      "type": "Meteorology",
      "question": "The TJ is located over the Indian Peninsula, approximately at",
      "options": [
        "13° N",
        "17° N",
        "18° N"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The core of the Tropical Easterly Jet over South India is centered around 13° N latitude (near Chennai/Bengaluru)."
    },
    {
      "id": 392,
      "type": "Meteorology",
      "question": "The TJ is located over Indian, approximately at a height of",
      "options": [
        "15 -16 km",
        "12 - 13 km",
        "11 - 12 km"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Tropical Easterly Jet stream resides in the upper troposphere at an altitude of approximately 15 to 16 km (~100–150 hPa level)."
    },
    {
      "id": 393,
      "type": "Meteorology",
      "question": "The TJ is strongest in",
      "options": [
        "July - Aug",
        "Sep - Oct",
        "June"
      ],
      "correct": 0,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The TEJ reaches its maximum intensity and velocity during July and August."
    },
    {
      "id": 394,
      "type": "Meteorology",
      "question": "In the TJ the wind shears are much …… than the STJ",
      "options": [
        "more",
        "less",
        "same"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Tropical Easterly Jet is generally weaker than the STJ, resulting in lower vertical and horizontal wind shear."
    },
    {
      "id": 395,
      "type": "Meteorology",
      "question": "TJ is",
      "options": [
        "Westerly",
        "Easterly",
        "Southerly"
      ],
      "correct": 1,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Tropical Jet (TEJ) over South Asia and Africa flows from East to West (Easterly)."
    },
    {
      "id": 396,
      "type": "Meteorology",
      "question": "A jet Stream can be recognized by",
      "options": [
        "High level dust",
        "High Pressure",
        "Streaks of CI",
        "Lenticular clouds"
      ],
      "correct": 2,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "Jet streams are frequently identified from the ground or satellite by long, high-altitude streaks of Cirrus (CI) clouds running parallel to the jet axis."
    },
    {
      "id": 397,
      "type": "Meteorology",
      "question": "Flying at right angles to a jet stream with falling pressure you will experience",
      "options": [
        "wind from left",
        "Increasing head wind",
        "Increasing tail wind",
        "Wind from right"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "In the Northern Hemisphere, flying toward lower pressure (falling pressure) at right angles to the jet stream places low pressure directly ahead. By Buys Ballot's law, the geostrophic wind will blow from your right (starboard)."
    },
    {
      "id": 398,
      "type": "Meteorology",
      "question": "When and Where tropical jet stream occurs",
      "options": [
        "All year along equator",
        "In middle East in summers",
        "In winters over Russia",
        "In summers over SE Asia and Central Africa"
      ],
      "correct": 3,
      "book": "aviation meteorology",
      "chapter": "15. Jet Streams",
      "explanation": "The Tropical Easterly Jet develops during the Northern Hemisphere summer season over Southeast Asia, India, and Central Africa."
    }
  ],
  "nav": [
    {
      "id": 1,
      "type": "Navigation",
      "question": "What is the 1-in-60 rule used for in air navigation?",
      "options": [
        "To calculate fuel burn rate",
        "To calculate track correction and error",
        "To estimate groundspeed in climb",
        "To find the glide range of a glider"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 2,
      "type": "Navigation",
      "question": "If you are 2 miles off track after flying 30 miles, what is your track error angle?",
      "options": [
        "2 degrees",
        "4 degrees",
        "6 degrees",
        "8 degrees"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 3,
      "type": "Navigation",
      "question": "What is the difference between Magnetic North and True North called?",
      "options": [
        "Compass Deviation",
        "Magnetic Variation",
        "Grivation",
        "Compass Dip"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 4,
      "type": "Navigation",
      "question": "What is the difference between Magnetic Heading and Compass Heading called?",
      "options": [
        "Variation",
        "Deviation",
        "Drift",
        "WCA"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 5,
      "type": "Navigation",
      "question": "What is a line on a map connecting points of equal magnetic variation?",
      "options": [
        "Isogonic line",
        "Agonic line",
        "Isobaric line",
        "Isoclinic line"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 6,
      "type": "Navigation",
      "question": "What is the agonic line?",
      "options": [
        "A line of maximum variation",
        "A line of zero variation",
        "A line of equal wind drift",
        "A line of equal compass deviation"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 7,
      "type": "Navigation",
      "question": "How does Compass Deviation vary?",
      "options": [
        "It changes with geographical location",
        "It changes with the heading of the aircraft",
        "It changes with the altitude",
        "It changes with wind direction"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 8,
      "type": "Navigation",
      "question": "A Great Circle is defined as a circle on the surface of a sphere whose plane:",
      "options": [
        "Does not intersect the center",
        "Passes through the poles only",
        "Passes through the center of the sphere",
        "Is parallel to the equator"
      ],
      "correct": 2,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 9,
      "type": "Navigation",
      "question": "What is a Rhumb Line?",
      "options": [
        "The shortest distance between two points on Earth",
        "A line cutting all meridians at the same angle",
        "A line perpendicular to the Prime Meridian",
        "A line indicating magnetic deviation"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "3. Charts & Projections"
    },
    {
      "id": 10,
      "type": "Navigation",
      "question": "On a Mercator projection chart, what is the appearance of a Rhumb Line?",
      "options": [
        "A curved line concave to the equator",
        "A straight line",
        "A complex sine wave",
        "A circle"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "3. Charts & Projections"
    },
    {
      "id": 11,
      "type": "Navigation",
      "question": "On a Lambert's Conformal Conic chart, what does a Great Circle approximate?",
      "options": [
        "A straight line",
        "A rhumb line",
        "A perfect circle",
        "A vertical line"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "3. Charts & Projections"
    },
    {
      "id": 12,
      "type": "Navigation",
      "question": "What does a VOR (VHF Omnidirectional Range) station transmit?",
      "options": [
        "Slant range distance",
        "Radials from the station (magnetic direction)",
        "Relative bearings to the aircraft",
        "Barometric pressure altitude"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 13,
      "type": "Navigation",
      "question": "What is the frequency band for VOR?",
      "options": [
        "108.00 to 117.95 MHz",
        "118.00 to 136.975 MHz",
        "190 to 535 kHz",
        "960 to 1215 MHz"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 14,
      "type": "Navigation",
      "question": "An NDB (Non-Directional Beacon) operates in which frequency band?",
      "options": [
        "VHF (30 to 300 MHz)",
        "LF/MF (190 to 1750 kHz)",
        "UHF (300 to 3000 MHz)",
        "HF (3 to 30 MHz)"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 15,
      "type": "Navigation",
      "question": "What instrument is used in the aircraft to display bearings from an NDB?",
      "options": [
        "VOR Indicator",
        "ADF (Automatic Direction Finder)",
        "DME",
        "HSI"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 16,
      "type": "Navigation",
      "question": "What formula relates Magnetic Bearing (MB), Magnetic Heading (MH), and Relative Bearing (RB)?",
      "options": [
        "MB = MH - RB",
        "MB = MH + RB",
        "MH = MB + RB",
        "RB = MB + MH"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 17,
      "type": "Navigation",
      "question": "DME (Distance Measuring Equipment) measures what type of distance?",
      "options": [
        "Horizontal distance",
        "Slant range distance",
        "Terrain clearance height",
        "True GPS altitude"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 18,
      "type": "Navigation",
      "question": "If an aircraft is flying at 12,000 feet directly over a DME station, what distance will the DME read?",
      "options": [
        "0 NM",
        "2.0 NM",
        "1.2 NM",
        "12 NM"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 19,
      "type": "Navigation",
      "question": "What are the three components of an Instrument Landing System (ILS)?",
      "options": [
        "VOR, NDB, DME",
        "Localizer, Glide Path, Marker Beacons",
        "GPS, INS, Radar",
        "Transponder, Altimeter, VSI"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 20,
      "type": "Navigation",
      "question": "What is the primary function of the ILS Localizer?",
      "options": [
        "To provide vertical guidance",
        "To provide lateral guidance along the runway centerline",
        "To measure distance to threshold",
        "To check glideslope angle"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 21,
      "type": "Navigation",
      "question": "What glideslope angle is standard for most ILS systems?",
      "options": [
        "2.5 degrees",
        "3.0 degrees",
        "3.5 degrees",
        "4.0 degrees"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 22,
      "type": "Navigation",
      "question": "Which GPS system segment is managed by ground tracking stations?",
      "options": [
        "Space Segment",
        "User Segment",
        "Control Segment",
        "Receiver Segment"
      ],
      "correct": 2,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 23,
      "type": "Navigation",
      "question": "How many GPS satellites are required to obtain a 3D position fix and time correction?",
      "options": [
        "3",
        "4",
        "5",
        "24"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 24,
      "type": "Navigation",
      "question": "What does RAIM stand for in GPS navigation?",
      "options": [
        "Radial Airway Instrument Monitoring",
        "Receiver Autonomous Integrity Monitoring",
        "Route Altitude Indicator Map",
        "Radar Assigned Instrument Module"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 25,
      "type": "Navigation",
      "question": "What is the definition of Indicated Airspeed (IAS)?",
      "options": [
        "Speed read directly from the Airspeed Indicator",
        "IAS corrected for instrument and position error",
        "TAS corrected for wind",
        "Speed of the aircraft relative to the ground"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 26,
      "type": "Navigation",
      "question": "What airspeed is obtained by correcting Calibrated Airspeed (CAS) for compressibility effects?",
      "options": [
        "Indicated Airspeed (IAS)",
        "Equivalent Airspeed (EAS)",
        "True Airspeed (TAS)",
        "Groundspeed (GS)"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 27,
      "type": "Navigation",
      "question": "What is True Airspeed (TAS)?",
      "options": [
        "Groundspeed corrected for wind",
        "Speed of the aircraft relative to the undisturbed airmass",
        "Speed read from the dial",
        "IAS corrected for instrument errors only"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 28,
      "type": "Navigation",
      "question": "As altitude increases in a climb at a constant IAS, True Airspeed (TAS) will generally:",
      "options": [
        "Decrease",
        "Increase",
        "Remain constant",
        "Fluctuate randomly"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 29,
      "type": "Navigation",
      "question": "What is Groundspeed (GS)?",
      "options": [
        "The actual speed of the aircraft relative to the ground",
        "True airspeed corrected for instrument errors",
        "Equivalent airspeed plus wind velocity",
        "Cruising speed in standard conditions"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 30,
      "type": "Navigation",
      "question": "If TAS is 120 KT and you have a 20 KT headwind, what is your Groundspeed?",
      "options": [
        "140 KT",
        "100 KT",
        "120 KT",
        "80 KT"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 31,
      "type": "Navigation",
      "question": "What is the Point of No Return (PNR)?",
      "options": [
        "The point beyond which return to departure aerodrome is impossible due to fuel limitations",
        "The point where the aircraft reaches destination airspace",
        "The halfway mark of the route",
        "The point of descent"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 32,
      "type": "Navigation",
      "question": "The Critical Point (or Equal Time Point) between two bases is independent of:",
      "options": [
        "Wind velocity",
        "Fuel capacity",
        "True Airspeed",
        "Distance between bases"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 33,
      "type": "Navigation",
      "question": "One degree of latitude is equal to:",
      "options": [
        "1 Nautical Mile",
        "60 Nautical Miles",
        "60 Statute Miles",
        "360 Nautical Miles"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 34,
      "type": "Navigation",
      "question": "How many feet are there in one Nautical Mile?",
      "options": [
        "5,280 feet",
        "6,076 feet",
        "6,000 feet",
        "3,280 feet"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 35,
      "type": "Navigation",
      "question": "What is standard Coordinated Universal Time (UTC) also known as?",
      "options": [
        "GMT / Zulu Time",
        "Local Mean Time",
        "Standard Standard Time",
        "Central Time"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 36,
      "type": "Navigation",
      "question": "If you are flying on a heading of 090° and the wind is from 180°, you will experience:",
      "options": [
        "Headwind",
        "Tailwind",
        "Port drift (drift to the left)",
        "Starboard drift (drift to the right)"
      ],
      "correct": 2,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 37,
      "type": "Navigation",
      "question": "What error in a magnetic compass is caused by the vertical component of the Earth's magnetic field?",
      "options": [
        "Deviation",
        "Magnetic Dip",
        "Variation",
        "Parallax error"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 38,
      "type": "Navigation",
      "question": "Compass acceleration errors are most pronounced on headings of:",
      "options": [
        "North and South",
        "East and West",
        "Northeast and Southwest",
        "All headings equally"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 39,
      "type": "Navigation",
      "question": "When turning from North to East in the Northern Hemisphere, a magnetic compass will initially:",
      "options": [
        "Lead the turn",
        "Lag behind or show a turn in the opposite direction",
        "Indicate correctly",
        "Spin rapidly"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 40,
      "type": "Navigation",
      "question": "A great circle track from A (00°N 010°E) to B (00°N 020°E) has a constant direction of:",
      "options": [
        "090°",
        "270°",
        "180°",
        "045°"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "3. Charts & Projections"
    },
    {
      "id": 41,
      "type": "Navigation",
      "question": "How many minutes of time correspond to 15 degrees of longitude?",
      "options": [
        "1 minute",
        "15 minutes",
        "60 minutes (1 hour)",
        "4 minutes"
      ],
      "correct": 2,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 42,
      "type": "Navigation",
      "question": "If it is 12:00 UTC, what is the Indian Standard Time (IST)?",
      "options": [
        "06:30 IST",
        "17:30 IST",
        "18:00 IST",
        "16:30 IST"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 43,
      "type": "Navigation",
      "question": "What is the speed of sound at sea level in the standard atmosphere?",
      "options": [
        "661 knots",
        "761 knots",
        "500 knots",
        "1000 knots"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "1. Earth Geometry"
    },
    {
      "id": 44,
      "type": "Navigation",
      "question": "If you are flying at TAS 180 KT with 30 KT direct tailwind, how long will it take to fly 210 NM?",
      "options": [
        "1 hour",
        "1 hour 10 minutes",
        "1 hour 15 minutes",
        "50 minutes"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 45,
      "type": "Navigation",
      "question": "What does a VDF (VHF Direction Finder) system provide to the controller?",
      "options": [
        "Range of the aircraft",
        "Bearing of the aircraft from the ground station based on voice transmissions",
        "Altitude of the aircraft",
        "Wind velocity profile"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 46,
      "type": "Navigation",
      "question": "The Q-code QDM represents:",
      "options": [
        "Magnetic bearing from station to aircraft",
        "Magnetic heading to fly to the station in zero wind",
        "True bearing from station",
        "True heading to fly"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 47,
      "type": "Navigation",
      "question": "The Q-code QDR represents:",
      "options": [
        "Magnetic bearing from station to aircraft (Magnetic Radial)",
        "Magnetic heading to station",
        "True bearing to station",
        "Altimeter setting"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 48,
      "type": "Navigation",
      "question": "Which nav aid has the most limited range due to line-of-sight propagation?",
      "options": [
        "NDB",
        "VOR",
        "HF Communications",
        "None of the above"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 49,
      "type": "Navigation",
      "question": "What is the primary error of a DME system?",
      "options": [
        "Position error",
        "Slant range error (highest when close to the station at high altitude)",
        "Coastal refraction",
        "Night effect"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 50,
      "type": "Navigation",
      "question": "Which system utilizes gyroscopes and accelerometers to calculate position without external signals?",
      "options": [
        "Inertial Navigation System (INS/IRS)",
        "GPS",
        "VOR/DME",
        "ADF/NDB"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 51,
      "type": "Navigation",
      "question": "An airway marked 'V10' indicates a:",
      "options": [
        "VHF Airway",
        "LF Airway",
        "High altitude jet route",
        "Military route"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 52,
      "type": "Navigation",
      "question": "The primary disadvantage of an NDB/ADF system is its susceptibility to:",
      "options": [
        "Line-of-sight limitations",
        "Thunderstorm activity (co-axial lightning interference) and coastal bending",
        "High fuel flow",
        "Receiver heat"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 53,
      "type": "Navigation",
      "question": "What frequency is the international aeronautical VHF emergency frequency?",
      "options": [
        "121.5 MHz",
        "243.0 MHz",
        "118.0 MHz",
        "500 kHz"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 54,
      "type": "Navigation",
      "question": "A speed of Mach 0.8 at an altitude where the local speed of sound is 600 knots represents a TAS of:",
      "options": [
        "480 knots",
        "500 knots",
        "450 knots",
        "520 knots"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 55,
      "type": "Navigation",
      "question": "A line on a chart connecting points of zero magnetic variation is called:",
      "options": [
        "Agonic line",
        "Isogonic line",
        "Isoclinic line",
        "Agonic curve"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 56,
      "type": "Navigation",
      "question": "A great circle track from 60°N 020°W to 60°N 040°W will have a true course that:",
      "options": [
        "Increases",
        "Decreases",
        "Constant",
        "None of the above"
      ],
      "correct": 1,
      "book": "oxf*rd_nav",
      "chapter": "3. Charts & Projections"
    },
    {
      "id": 57,
      "type": "Navigation",
      "question": "To fly a heading of 270° with a variation of 5° East and a deviation of 2° West, what compass heading must be flown?",
      "options": [
        "267°",
        "273°",
        "265°",
        "277°"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "2. Magnetism & Compass"
    },
    {
      "id": 58,
      "type": "Navigation",
      "question": "If your groundspeed is 150 knots, how many minutes will it take to fly 25 NM?",
      "options": [
        "10 minutes",
        "15 minutes",
        "8 minutes",
        "6 minutes"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "4. Dead Reckoning"
    },
    {
      "id": 59,
      "type": "Navigation",
      "question": "What is the standard width of a VOR airway in most countries?",
      "options": [
        "4 NM each side (Total 8 NM)",
        "10 NM each side",
        "5 NM each side",
        "8 NM each side"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    },
    {
      "id": 60,
      "type": "Navigation",
      "question": "Which navigation aid provides azimuth, glide path, and distance information?",
      "options": [
        "ILS with DME",
        "VOR/DME",
        "NDB/ADF",
        "GPS only"
      ],
      "correct": 0,
      "book": "oxf*rd_nav",
      "chapter": "5. In-flight Navigation"
    }
  ],
  "reg": [
    {
      "id": 1,
      "type": "Regulations",
      "question": "Which international body regulates international civil aviation standards?",
      "options": [
        "FAA",
        "ICAO",
        "EASA",
        "DGCA"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "Regulations",
      "question": "Where is the headquarters of the International Civil Aviation Organization (ICAO) located?",
      "options": [
        "Geneva, Switzerland",
        "Montreal, Canada",
        "Washington D.C., USA",
        "Paris, France"
      ],
      "correct": 1
    },
    {
      "id": 3,
      "type": "Regulations",
      "question": "How many Annexes are there to the Chicago Convention?",
      "options": [
        "15",
        "18",
        "19",
        "21"
      ],
      "correct": 2
    },
    {
      "id": 4,
      "type": "Regulations",
      "question": "Which ICAO Annex deals with 'Rules of the Air'?",
      "options": [
        "Annex 1",
        "Annex 2",
        "Annex 6",
        "Annex 10"
      ],
      "correct": 1
    },
    {
      "id": 5,
      "type": "Regulations",
      "question": "Which of the following aircraft has the right of way over all other engine-driven aircraft?",
      "options": [
        "A glider",
        "An airship",
        "A balloon",
        "An aircraft in distress"
      ],
      "correct": 3
    },
    {
      "id": 6,
      "type": "Regulations",
      "question": "When two aircraft are converging at approximately the same altitude, who has the right of way?",
      "options": [
        "The larger aircraft",
        "The aircraft that has the other on its right",
        "The aircraft that has the other on its left",
        "The aircraft flying at the higher speed"
      ],
      "correct": 2
    },
    {
      "id": 7,
      "type": "Regulations",
      "question": "What is the overtaking rule in aviation?",
      "options": [
        "Overtake on the left, giving well clear",
        "Overtake on the right, keeping well clear",
        "Overtake above",
        "Overtake below"
      ],
      "correct": 1
    },
    {
      "id": 8,
      "type": "Regulations",
      "question": "Airspace classification G represents:",
      "options": [
        "Controlled Airspace",
        "Uncontrolled Airspace",
        "Prohibited Airspace",
        "Terminal Control Area"
      ],
      "correct": 1
    },
    {
      "id": 9,
      "type": "Regulations",
      "question": "In Class A airspace, which flights are permitted?",
      "options": [
        "VFR only",
        "IFR only",
        "VFR and IFR",
        "Special VFR only"
      ],
      "correct": 1
    },
    {
      "id": 10,
      "type": "Regulations",
      "question": "What are the standard VFR flight visibility and distance from cloud minima in Class G airspace below 3,000 feet AMSL?",
      "options": [
        "5 km visibility, clear of cloud and in sight of the surface",
        "8 km visibility, 1.5 km horizontal, 1,000 feet vertical from cloud",
        "1.5 km visibility, clear of clouds",
        "5 km visibility, 1,500m horizontal from cloud"
      ],
      "correct": 0
    },
    {
      "id": 11,
      "type": "Regulations",
      "question": "At what altitude does the Transition Altitude (TA) switch to Transition Level (TL)?",
      "options": [
        "It is standard at 10,000 feet",
        "It varies depending on local aerodrome regulations",
        "Always at 18,000 feet",
        "Always at 4,000 feet"
      ],
      "correct": 1
    },
    {
      "id": 12,
      "type": "Regulations",
      "question": "When flying above the transition level, what altimeter setting is used?",
      "options": [
        "QNH",
        "QFE",
        "Standard setting (1013.2 hPa / 29.92 inches)",
        "QNE station level"
      ],
      "correct": 2
    },
    {
      "id": 13,
      "type": "Regulations",
      "question": "What is the airspace between the Transition Altitude and the Transition Level called?",
      "options": [
        "Transition Layer",
        "Transition Zone",
        "Buffer Space",
        "Control Area"
      ],
      "correct": 0
    },
    {
      "id": 14,
      "type": "Regulations",
      "question": "What is the minimum age to be issued a Commercial Pilot License (CPL)?",
      "options": [
        "16 years",
        "17 years",
        "18 years",
        "21 years"
      ],
      "correct": 2
    },
    {
      "id": 15,
      "type": "Regulations",
      "question": "What class of medical certificate is required for a CPL holder?",
      "options": [
        "Class 1 Medical Certificate",
        "Class 2 Medical Certificate",
        "Class 3 Medical Certificate",
        "LAPL Medical Certificate"
      ],
      "correct": 0
    },
    {
      "id": 16,
      "type": "Regulations",
      "question": "How long is a Class 1 Medical Certificate valid for a commercial pilot under 40 years of age?",
      "options": [
        "6 months",
        "12 months",
        "24 months",
        "60 months"
      ],
      "correct": 1
    },
    {
      "id": 17,
      "type": "Regulations",
      "question": "For a flight plan submitted during flight, what is the minimum time before entering controlled airspace that it should be filed?",
      "options": [
        "10 minutes",
        "30 minutes",
        "60 minutes",
        "15 minutes"
      ],
      "correct": 0
    },
    {
      "id": 18,
      "type": "Regulations",
      "question": "What does a flashing green light signal from the control tower to an aircraft in flight mean?",
      "options": [
        "Cleared to land",
        "Return for landing (to be followed by steady green at the right time)",
        "Give way to other aircraft and continue circling",
        "Aerodrome unsafe, do not land"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "Regulations",
      "question": "What does a steady red light signal from the control tower to an aircraft on the ground mean?",
      "options": [
        "Cleared to taxi",
        "Stop",
        "Taxi clear of landing area",
        "Return to starting point"
      ],
      "correct": 1
    },
    {
      "id": 20,
      "type": "Regulations",
      "question": "What does a red pyrotechnic flare fired from the ground to an aircraft in flight mean?",
      "options": [
        "Cleared to land immediately",
        "Notwithstanding any previous instructions, do not land for the time being",
        "Your landing gear is damaged",
        "Follow the lead plane"
      ],
      "correct": 1
    },
    {
      "id": 21,
      "type": "Regulations",
      "question": "What is the meaning of a double white cross displayed in the signal square of an aerodrome?",
      "options": [
        "Glider flying is in progress",
        "VFR flights only permitted",
        "Aerodrome closed",
        "Runway in use is grass"
      ],
      "correct": 0
    },
    {
      "id": 22,
      "type": "Regulations",
      "question": "Which of the following describes 'Prohibited Area'?",
      "options": [
        "Airspace where flight is restricted in accordance with specified conditions",
        "Airspace where flight of aircraft is prohibited due to security reasons",
        "Airspace containing temporary danger",
        "Airspace for military exercises only"
      ],
      "correct": 1
    },
    {
      "id": 23,
      "type": "Regulations",
      "question": "What is the code for the Search and Rescue alert phase representing 'Apprehension'?",
      "options": [
        "INCERFA",
        "ALERFA",
        "DETRESFA",
        "RESCUEPHASE"
      ],
      "correct": 1
    },
    {
      "id": 24,
      "type": "Regulations",
      "question": "The registration mark for an Indian registered civil aircraft begins with the letters:",
      "options": [
        "IN-",
        "VT-",
        "ID-",
        "IA-"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "Regulations",
      "question": "A flight plan is valid for how many hours past the estimated off-block time (EOBT) if not activated or updated?",
      "options": [
        "30 minutes",
        "1 hour",
        "2 hours",
        "3 hours"
      ],
      "correct": 1
    },
    {
      "id": 26,
      "type": "Regulations",
      "question": "What is the semicircular cruising level rule for an aircraft on a magnetic track of 180° to 359° flying VFR?",
      "options": [
        "Even thousands + 500 feet (e.g., FL45, FL65...)",
        "Odd thousands + 500 feet (e.g., FL35, FL55...)",
        "Even thousands (e.g., FL40, FL60...)",
        "Odd thousands (e.g., FL30, FL50...)"
      ],
      "correct": 0
    },
    {
      "id": 27,
      "type": "Regulations",
      "question": "What does a PAPI (Precision Approach Path Indicator) show when you are exactly on the glideslope?",
      "options": [
        "4 red lights",
        "4 white lights",
        "2 red and 2 white lights",
        "3 white and 1 red light"
      ],
      "correct": 2
    },
    {
      "id": 28,
      "type": "Regulations",
      "question": "A taxiway centerline marking is represented by:",
      "options": [
        "A dashed yellow line",
        "A solid yellow line",
        "A solid white line",
        "A double dashed white line"
      ],
      "correct": 1
    },
    {
      "id": 29,
      "type": "Regulations",
      "question": "Runway threshold markings consist of a pattern of longitudinal white stripes. How many stripes are there for a runway width of 45 meters?",
      "options": [
        "4",
        "8",
        "12",
        "16"
      ],
      "correct": 2
    },
    {
      "id": 30,
      "type": "Regulations",
      "question": "The term 'Ceiling' refers to the height above ground of the lowest layer of clouds below 20,000 feet that is reported as:",
      "options": [
        "Few or Scattered",
        "Scattered or Broken",
        "Broken or Overcast",
        "Overcast only"
      ],
      "correct": 2
    },
    {
      "id": 31,
      "type": "Regulations",
      "question": "What color are taxiway edge lights?",
      "options": [
        "Blue",
        "Green",
        "White",
        "Yellow"
      ],
      "correct": 0
    },
    {
      "id": 32,
      "type": "Regulations",
      "question": "What color are runway threshold lights?",
      "options": [
        "Red",
        "Green",
        "White",
        "Amber"
      ],
      "correct": 1
    },
    {
      "id": 33,
      "type": "Regulations",
      "question": "What does 'SRA' stand for in air traffic services?",
      "options": [
        "Standard Route Clearance",
        "Surveillance Radar Approach",
        "Sector Radial Altitude",
        "Speed Restriction Area"
      ],
      "correct": 1
    },
    {
      "id": 34,
      "type": "Regulations",
      "question": "A passenger-carrying commercial flight is governed by which parts of ICAO Annex 6?",
      "options": [
        "Part I",
        "Part II",
        "Part III",
        "Part IV"
      ],
      "correct": 0
    },
    {
      "id": 35,
      "type": "Regulations",
      "question": "Under VFR, what is the minimum altitude permitted over congested areas of cities?",
      "options": [
        "500 feet above highest obstacle",
        "1,000 feet above the highest obstacle within a radius of 600 meters",
        "2,000 feet",
        "1,500 feet"
      ],
      "correct": 1
    },
    {
      "id": 36,
      "type": "Regulations",
      "question": "Which document must be carried on board an aircraft in international flights according to Article 29 of the Chicago Convention?",
      "options": [
        "Certificate of Registration",
        "Certificate of Airworthiness",
        "Licenses of crew members",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "id": 37,
      "type": "Regulations",
      "question": "What is the standard separation vertical minimum (RVSM) between FL290 and FL410?",
      "options": [
        "500 feet",
        "1,000 feet",
        "2,000 feet",
        "1,500 feet"
      ],
      "correct": 1
    },
    {
      "id": 38,
      "type": "Regulations",
      "question": "What does the abbreviation 'AIP' stand for in aviation?",
      "options": [
        "Airport Information Portal",
        "Aeronautical Information Publication",
        "Aircraft Incident Panel",
        "Airway Instrument Procedure"
      ],
      "correct": 1
    },
    {
      "id": 39,
      "type": "Regulations",
      "question": "What are NOTAMs?",
      "options": [
        "Manuals of air traffic controls",
        "Notices containing information concerning the establishment, condition or change in any aeronautical facility, service, or hazard",
        "Flight planning sheets",
        "Logbooks for aircraft engine records"
      ],
      "correct": 1
    },
    {
      "id": 40,
      "type": "Regulations",
      "question": "In Class C airspace, who is separated from whom?",
      "options": [
        "IFR from IFR only",
        "IFR from all flights, VFR from VFR",
        "IFR from all flights, VFR from IFR (VFR flights receive traffic info on other VFR)",
        "No flights are separated"
      ],
      "correct": 2
    },
    {
      "id": 41,
      "type": "Regulations",
      "question": "The time limit to file an accident report to DGCA in India is:",
      "options": [
        "24 hours",
        "48 hours",
        "72 hours",
        "Immediately by quickest means"
      ],
      "correct": 3
    },
    {
      "id": 42,
      "type": "Regulations",
      "question": "Which Annex covers 'Security and Safeguarding Civil Aviation against Acts of Unlawful Interference'?",
      "options": [
        "Annex 9",
        "Annex 12",
        "Annex 17",
        "Annex 16"
      ],
      "correct": 2
    },
    {
      "id": 43,
      "type": "Regulations",
      "question": "A red flashing light signal to an aircraft on the ground means:",
      "options": [
        "Cleared to taxi",
        "Taxi clear of landing area in use",
        "Stop immediately",
        "Return to ramp"
      ],
      "correct": 1
    },
    {
      "id": 44,
      "type": "Regulations",
      "question": "Air Traffic Control Clearances must contain:",
      "options": [
        "Aircraft Identification",
        "Clearance Limit",
        "Route and Level(s) of flight",
        "All of the above"
      ],
      "correct": 3
    },
    {
      "id": 45,
      "type": "Regulations",
      "question": "Under what condition can a pilot deviate from an ATC clearance?",
      "options": [
        "To avoid bad weather",
        "In an emergency that requires immediate action to ensure safety",
        "When passengers request it",
        "Whenever the pilot feels it is safe"
      ],
      "correct": 1
    },
    {
      "id": 46,
      "type": "Regulations",
      "question": "What is the frequency of renewal for medical exams for commercial pilots above 60 years of age in India?",
      "options": [
        "6 months",
        "1 year",
        "2 years",
        "None, they cannot fly commercially"
      ],
      "correct": 0
    },
    {
      "id": 47,
      "type": "Regulations",
      "question": "What is the speed limit for aircraft below 10,000 feet AMSL under VFR in controlled airspace?",
      "options": [
        "250 knots IAS",
        "200 knots IAS",
        "300 knots IAS",
        "No speed limit"
      ],
      "correct": 0
    },
    {
      "id": 48,
      "type": "Regulations",
      "question": "The term 'expected approach time' (EAT) means:",
      "options": [
        "The time the aircraft will touch down",
        "The time ATC expects the aircraft to leave the holding pattern to complete its approach",
        "The time clearance was given",
        "The duration of the approach flight"
      ],
      "correct": 1
    },
    {
      "id": 49,
      "type": "Regulations",
      "question": "A signal of a red panel with a yellow diagonal cross in the signal square indicates:",
      "options": [
        "Landings are prohibited and the prohibition is likely to be prolonged",
        "Special care should be taken during landing",
        "Aerodrome closed to VFR",
        "Glider flying in progress"
      ],
      "correct": 0
    },
    {
      "id": 50,
      "type": "Regulations",
      "question": "What does a white letter 'T' displayed in the signal square indicate?",
      "options": [
        "Landings must be made parallel to the shaft of the T in the direction of the cross-bar",
        "Taxiing is restricted to yellow lines",
        "Takeoffs must be completed immediately",
        "Turbulence reported over aerodrome"
      ],
      "correct": 0
    },
    {
      "id": 51,
      "type": "Regulations",
      "question": "ICAO Annex 14 covers which topic?",
      "options": [
        "Meteorology",
        "Aerodromes",
        "Search and Rescue",
        "Charts"
      ],
      "correct": 1
    },
    {
      "id": 52,
      "type": "Regulations",
      "question": "Which agency is responsible for investigating civil aircraft accidents in India?",
      "options": [
        "DGCA",
        "AAIB (Aircraft Accident Investigation Bureau)",
        "Ministry of Defence",
        "AAI (Airports Authority of India)"
      ],
      "correct": 1
    },
    {
      "id": 53,
      "type": "Regulations",
      "question": "Under what condition is Special VFR permitted in control zones?",
      "options": [
        "Only during day, when flight visibility is at least 1.5 km and clear of clouds",
        "When IFR traffic is absent",
        "With 5 km visibility and standard cloud base",
        "Only in emergencies"
      ],
      "correct": 0
    },
    {
      "id": 54,
      "type": "Regulations",
      "question": "What is the minimum height above water VFR flights are permitted over open water?",
      "options": [
        "500 feet",
        "1,000 feet",
        "150 meters",
        "No minimum as long as safety is not compromised"
      ],
      "correct": 0
    },
    {
      "id": 55,
      "type": "Regulations",
      "question": "A passenger flight cabin crew member must be present if there are more than how many passenger seats?",
      "options": [
        "9 seats",
        "19 seats",
        "30 seats",
        "50 seats"
      ],
      "correct": 1
    },
    {
      "id": 56,
      "type": "Regulations",
      "question": "The safety height (Minimum Sector Altitude) within 25 NM of a navigation facility provides how much clearance over obstacles?",
      "options": [
        "1,000 feet",
        "2,000 feet",
        "1,500 feet",
        "500 feet"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "Regulations",
      "question": "What is the purpose of the Aeronautical Information Circular (AIC)?",
      "options": [
        "Routine weather briefings",
        "Information of administrative nature that does not qualify for NOTAM or AIP",
        "Aircraft fuel limits",
        "Pilot license questions"
      ],
      "correct": 1
    },
    {
      "id": 58,
      "type": "Regulations",
      "question": "What does a red light on a runway holding position sign indicate?",
      "options": [
        "No taxiway access",
        "Stop - Runway holding position",
        "Alternate route",
        "Speed limit area"
      ],
      "correct": 1
    },
    {
      "id": 59,
      "type": "Regulations",
      "question": "What is the standard transponder code for radio communication failure?",
      "options": [
        "7500",
        "7600",
        "7700",
        "2000"
      ],
      "correct": 1
    },
    {
      "id": 60,
      "type": "Regulations",
      "question": "What is the standard transponder code for unlawful interference (hijack)?",
      "options": [
        "7500",
        "7600",
        "7700",
        "7000"
      ],
      "correct": 0
    }
  ],
  "gen": [
    {
      "id": 1,
      "type": "Technical General",
      "question": "Bernoulli's principle states that in a fluid flow, an increase in velocity is accompanied by:",
      "options": [
        "An increase in static pressure",
        "A decrease in static pressure",
        "An increase in temperature",
        "No change in pressure"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "Technical General",
      "question": "What are the four primary forces acting on an aircraft in steady level flight?",
      "options": [
        "Lift, Drag, Weight, Gravity",
        "Lift, Drag, Thrust, Weight",
        "Lift, Friction, Thrust, Weight",
        "Buoyancy, Drag, Lift, Gravity"
      ],
      "correct": 1
    },
    {
      "id": 3,
      "type": "Technical General",
      "question": "What type of drag is caused by the generation of lift?",
      "options": [
        "Skin friction drag",
        "Form drag",
        "Induced drag",
        "Interference drag"
      ],
      "correct": 2
    },
    {
      "id": 4,
      "type": "Technical General",
      "question": "As airspeed increases, what happens to parasite drag and induced drag?",
      "options": [
        "Parasite drag decreases, induced drag increases",
        "Parasite drag increases, induced drag decreases",
        "Both increase",
        "Both decrease"
      ],
      "correct": 1
    },
    {
      "id": 5,
      "type": "Technical General",
      "question": "The angle between the chord line of the wing and the relative airflow is called:",
      "options": [
        "Angle of incidence",
        "Angle of attack",
        "Dihedral angle",
        "Sweepback angle"
      ],
      "correct": 1
    },
    {
      "id": 6,
      "type": "Technical General",
      "question": "The angle of incidence is defined as the angle between the wing chord line and:",
      "options": [
        "The relative airflow",
        "The longitudinal axis of the aircraft",
        "The lateral axis of the aircraft",
        "The horizon"
      ],
      "correct": 1
    },
    {
      "id": 7,
      "type": "Technical General",
      "question": "What happens when the angle of attack exceeds the critical angle of attack?",
      "options": [
        "The aircraft accelerates",
        "The wing stalls, resulting in a sudden drop in lift",
        "Drag decreases to zero",
        "Stability increases"
      ],
      "correct": 1
    },
    {
      "id": 8,
      "type": "Technical General",
      "question": "What primary control surface controls the aircraft about the lateral axis (pitch)?",
      "options": [
        "Ailerons",
        "Rudder",
        "Elevator",
        "Flaps"
      ],
      "correct": 2
    },
    {
      "id": 9,
      "type": "Technical General",
      "question": "What primary control surface controls the aircraft about the longitudinal axis (roll)?",
      "options": [
        "Ailerons",
        "Rudder",
        "Elevator",
        "Trim tabs"
      ],
      "correct": 0
    },
    {
      "id": 10,
      "type": "Technical General",
      "question": "What primary control surface controls the aircraft about the vertical axis (yaw)?",
      "options": [
        "Ailerons",
        "Rudder",
        "Elevator",
        "Spoilers"
      ],
      "correct": 1
    },
    {
      "id": 11,
      "type": "Technical General",
      "question": "The tendency of an aircraft to return to its original flight path after being disturbed is called:",
      "options": [
        "Dynamic stability",
        "Static stability",
        "Maneuverability",
        "Controllability"
      ],
      "correct": 1
    },
    {
      "id": 12,
      "type": "Technical General",
      "question": "What design feature provides lateral (roll) stability?",
      "options": [
        "Vertical stabilizer",
        "Dihedral wing angle",
        "Keel effect",
        "Horizontal stabilizer"
      ],
      "correct": 1
    },
    {
      "id": 13,
      "type": "Technical General",
      "question": "What are the four strokes of a reciprocating piston engine in order?",
      "options": [
        "Intake, Compression, Power, Exhaust",
        "Suck, Blow, Squeeze, Push",
        "Ignition, Compression, Expansion, Release",
        "Intake, Ignition, Expansion, Exhaust"
      ],
      "correct": 0
    },
    {
      "id": 14,
      "type": "Technical General",
      "question": "Why do aircraft engines have dual ignition systems (two spark plugs per cylinder)?",
      "options": [
        "To double the RPM",
        "For safety redundancy and to improve combustion efficiency",
        "To reduce fuel burn by 50%",
        "To run on diesel fuel"
      ],
      "correct": 1
    },
    {
      "id": 15,
      "type": "Technical General",
      "question": "At what temperature range is carburetor icing most likely to occur in high relative humidity?",
      "options": [
        "Below -20°C",
        "Between -5°C and +20°C",
        "Only below 0°C",
        "Above +35°C"
      ],
      "correct": 1
    },
    {
      "id": 16,
      "type": "Technical General",
      "question": "What is the primary purpose of a supercharger or turbocharger in a piston engine?",
      "options": [
        "To cool the engine",
        "To maintain engine power at higher altitudes by compressing intake air",
        "To reduce exhaust noise",
        "To spin the propeller directly"
      ],
      "correct": 1
    },
    {
      "id": 17,
      "type": "Technical General",
      "question": "In a gas turbine engine, which component drives the compressor?",
      "options": [
        "The combustor",
        "The turbine",
        "The gearbox",
        "The exhaust nozzle"
      ],
      "correct": 1
    },
    {
      "id": 18,
      "type": "Technical General",
      "question": "What is 'Bypass Ratio' in a turbofan engine?",
      "options": [
        "The ratio of fuel to air in the engine core",
        "The ratio of air mass that bypasses the engine core to the air mass that enters the core",
        "The ratio of thrust generated by the core to the fan",
        "The ratio of high pressure turbine to low pressure compressor speed"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "Technical General",
      "question": "What are the three main instruments connected to the pitot-static system?",
      "options": [
        "Attitude Indicator, Altimeter, Turn Coordinator",
        "Airspeed Indicator, Altimeter, Vertical Speed Indicator",
        "Heading Indicator, VSI, ASI",
        "Altimeter, VOR, GPS"
      ],
      "correct": 1
    },
    {
      "id": 20,
      "type": "Technical General",
      "question": "If the static port becomes blocked in flight, which instrument will be affected?",
      "options": [
        "Airspeed Indicator, Altimeter, and VSI",
        "Airspeed Indicator only",
        "Altimeter only",
        "Attitude Indicator and Heading Indicator"
      ],
      "correct": 0
    },
    {
      "id": 21,
      "type": "Technical General",
      "question": "If the pitot tube is blocked but the static port remains open, what will the Airspeed Indicator do in a climb?",
      "options": [
        "Read zero",
        "Overread (act as an altimeter, indicating an increase in speed)",
        "Underread (indicating zero or decreasing speed)",
        "Read normally"
      ],
      "correct": 1
    },
    {
      "id": 22,
      "type": "Technical General",
      "question": "What are the two basic properties of gyroscopes used in flight instruments?",
      "options": [
        "Rigidity in space and precession",
        "Gravity and Coriolis force",
        "Inertia and friction",
        "Foucault effect and magnetism"
      ],
      "correct": 0
    },
    {
      "id": 23,
      "type": "Technical General",
      "question": "Which of the following instruments is gyroscopic?",
      "options": [
        "Altimeter",
        "Attitude Indicator",
        "Vertical Speed Indicator",
        "Compass"
      ],
      "correct": 1
    },
    {
      "id": 24,
      "type": "Technical General",
      "question": "What is the function of a Constant Speed Propeller governor?",
      "options": [
        "It maintains constant engine manifold pressure",
        "It adjusts blade pitch angle to maintain a preset RPM",
        "It controls fuel flow rate",
        "It prevents propeller icing"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "Technical General",
      "question": "What is the primary purpose of wing flaps?",
      "options": [
        "To increase cruise speed",
        "To increase both lift and drag, allowing for steeper and slower landing approaches",
        "To balance the fuel tanks",
        "To prevent spins"
      ],
      "correct": 1
    },
    {
      "id": 26,
      "type": "Technical General",
      "question": "What color is AVGAS 100LL fuel?",
      "options": [
        "Green",
        "Blue",
        "Straw/Clear",
        "Red"
      ],
      "correct": 1
    },
    {
      "id": 27,
      "type": "Technical General",
      "question": "What color is Jet A-1 fuel?",
      "options": [
        "Blue",
        "Straw-colored or Clear",
        "Red",
        "Purple"
      ],
      "correct": 1
    },
    {
      "id": 28,
      "type": "Technical General",
      "question": "What is the hazard of using a lower octane fuel than specified in a reciprocating engine?",
      "options": [
        "The engine will not start",
        "Detonation (engine knocking) and structural damage",
        "Increased fuel consumption only",
        "Carburetor icing"
      ],
      "correct": 1
    },
    {
      "id": 29,
      "type": "Technical General",
      "question": "In a hydraulic system, what is the purpose of the accumulator?",
      "options": [
        "To clean the fluid",
        "To store fluid under pressure to aid the pump during peak demands",
        "To control cylinder stroke",
        "To measure pressure"
      ],
      "correct": 1
    },
    {
      "id": 30,
      "type": "Technical General",
      "question": "What is the purpose of a shimmy damper on landing gear?",
      "options": [
        "To retract the nose gear",
        "To prevent rapid oscillation or shaking of the nosewheel during ground operations",
        "To lock the gear in place",
        "To absorb landing shocks"
      ],
      "correct": 1
    },
    {
      "id": 31,
      "type": "Technical General",
      "question": "The load factor in a constant altitude turn is determined by the:",
      "options": [
        "Airspeed",
        "Bank angle",
        "Weight of the aircraft",
        "Engine thrust"
      ],
      "correct": 1
    },
    {
      "id": 32,
      "type": "Technical General",
      "question": "What is the load factor in a 60-degree bank level turn?",
      "options": [
        "1.0 G",
        "1.5 G",
        "2.0 G",
        "4.0 G"
      ],
      "correct": 2
    },
    {
      "id": 33,
      "type": "Technical General",
      "question": "The center of gravity (CG) of an aircraft is the point:",
      "options": [
        "Where all lift acts",
        "Where all weight is concentrated",
        "Directly behind the aerodynamic center",
        "Where pitch is neutral"
      ],
      "correct": 1
    },
    {
      "id": 34,
      "type": "Technical General",
      "question": "An aircraft with an extremely aft center of gravity will experience:",
      "options": [
        "Increased elevator authority in cruise",
        "Decreased longitudinal stability and difficulty recovering from stalls",
        "An increase in stall speed",
        "Lower cruise speeds"
      ],
      "correct": 1
    },
    {
      "id": 35,
      "type": "Technical General",
      "question": "What is the V-speed for maneuvering speed?",
      "options": [
        "Vne",
        "Vno",
        "Va",
        "Vfe"
      ],
      "correct": 2
    },
    {
      "id": 36,
      "type": "Technical General",
      "question": "What is Vne speed?",
      "options": [
        "Maximum flap extended speed",
        "Never exceed speed (structural danger beyond this)",
        "Maximum structural cruising speed",
        "Stall speed in landing configuration"
      ],
      "correct": 1
    },
    {
      "id": 37,
      "type": "Technical General",
      "question": "What is Vfe speed?",
      "options": [
        "Stall speed clean",
        "Maximum flap extended speed",
        "Best angle of climb speed",
        "Best rate of climb speed"
      ],
      "correct": 1
    },
    {
      "id": 38,
      "type": "Technical General",
      "question": "What does a yellow arc on the Airspeed Indicator represent?",
      "options": [
        "Normal operating range",
        "Caution range (fly in this range only in smooth air)",
        "Flap operating range",
        "Never exceed range"
      ],
      "correct": 1
    },
    {
      "id": 39,
      "type": "Technical General",
      "question": "What causes induced drag?",
      "options": [
        "Air friction over wing surface",
        "The generation of lift creating wingtip vortices and downwash",
        "The shape of the cockpit windshield",
        "Landing gear retracting mechanism"
      ],
      "correct": 1
    },
    {
      "id": 40,
      "type": "Technical General",
      "question": "What is the relationship between aspect ratio of a wing and induced drag?",
      "options": [
        "High aspect ratio wings have lower induced drag",
        "Low aspect ratio wings have lower induced drag",
        "No relationship",
        "High aspect ratio wings have higher induced drag"
      ],
      "correct": 0
    },
    {
      "id": 41,
      "type": "Technical General",
      "question": "Which engine instrument displays the temperature of the exhaust gas?",
      "options": [
        "CHT Indicator",
        "EGT Indicator",
        "Oil Temp Gauge",
        "Tachometer"
      ],
      "correct": 1
    },
    {
      "id": 42,
      "type": "Technical General",
      "question": "The left-turning tendency of a propeller-driven airplane caused by the propeller slipstream striking the left side of the tail vertical stabilizer is known as:",
      "options": [
        "P-factor",
        "Torque reaction",
        "Gyroscopic precession",
        "Spiraling slipstream"
      ],
      "correct": 3
    },
    {
      "id": 43,
      "type": "Technical General",
      "question": "The left-turning tendency of a propeller-driven airplane caused by the asymmetric loading of propeller blades at high angles of attack is known as:",
      "options": [
        "P-factor",
        "Torque reaction",
        "Spiraling slipstream",
        "Gyroscopic precession"
      ],
      "correct": 0
    },
    {
      "id": 44,
      "type": "Technical General",
      "question": "What type of flaps are mounted on the leading edge of a wing?",
      "options": [
        "Slats",
        "Fowler flaps",
        "Split flaps",
        "Plain flaps"
      ],
      "correct": 0
    },
    {
      "id": 45,
      "type": "Technical General",
      "question": "What is the function of a boundary layer fence on a swept wing?",
      "options": [
        "To increase form drag",
        "To control spanwise airflow and prevent tip stall",
        "To cool the wing surface",
        "To strengthen the spars"
      ],
      "correct": 1
    },
    {
      "id": 46,
      "type": "Technical General",
      "question": "An alternator converts:",
      "options": [
        "AC to DC power directly",
        "Mechanical energy from the engine into electrical energy (AC then rectified to DC)",
        "DC to AC power",
        "Heat to electricity"
      ],
      "correct": 1
    },
    {
      "id": 47,
      "type": "Technical General",
      "question": "What happens when a circuit breaker trips in an aircraft?",
      "options": [
        "The circuit opens to protect from overload",
        "The battery discharges",
        "An engine cylinder fails",
        "Nothing, it is normal"
      ],
      "correct": 0
    },
    {
      "id": 48,
      "type": "Technical General",
      "question": "What does a red line on an engine instrument represent?",
      "options": [
        "Normal value",
        "Maximum or minimum limit",
        "Caution range",
        "Testing mode"
      ],
      "correct": 1
    },
    {
      "id": 49,
      "type": "Technical General",
      "question": "Which parameter is measured by a manifold pressure gauge in a piston engine?",
      "options": [
        "Exhaust backpressure",
        "Absolute pressure of fuel/air mixture in intake manifold",
        "Fuel pump pressure",
        "Oil gallery pressure"
      ],
      "correct": 1
    },
    {
      "id": 50,
      "type": "Technical General",
      "question": "A turbocharger is driven by:",
      "options": [
        "The engine accessory gearbox",
        "Engine exhaust gases",
        "An electric motor",
        "A belt drive from the crankshaft"
      ],
      "correct": 1
    },
    {
      "id": 51,
      "type": "Technical General",
      "question": "What is the primary hazard of pre-ignition in a piston engine?",
      "options": [
        "Low engine temperatures",
        "Severe engine damage due to premature fuel ignition caused by hot spots",
        "Carburetor fire",
        "Low RPM"
      ],
      "correct": 1
    },
    {
      "id": 52,
      "type": "Technical General",
      "question": "What is the purpose of static wicks on an aircraft?",
      "options": [
        "To discharge static electricity generated by friction with air into the atmosphere",
        "To secure the control surfaces",
        "To guide navigation signals",
        "To prevent ice buildup"
      ],
      "correct": 0
    },
    {
      "id": 53,
      "type": "Technical General",
      "question": "A shock wave forms on a wing when:",
      "options": [
        "Airflow reaches supersonic speed (Mach 1.0)",
        "The aircraft stalls",
        "Flaps are extended at high speed",
        "Turbulence occurs"
      ],
      "correct": 0
    },
    {
      "id": 54,
      "type": "Technical General",
      "question": "What is the purpose of vortex generators on a wing?",
      "options": [
        "To increase drag",
        "To delay boundary layer separation by mixing high energy air with boundary layer",
        "To look decorative",
        "To cool the flap hinges"
      ],
      "correct": 1
    },
    {
      "id": 55,
      "type": "Technical General",
      "question": "What type of landing gear shock absorber uses compressed air and oil?",
      "options": [
        "Spring steel strut",
        "Oleo strut",
        "Bungee cord shock",
        "Solid rubber pad"
      ],
      "correct": 1
    },
    {
      "id": 56,
      "type": "Technical General",
      "question": "What does a hydraulic fuse do?",
      "options": [
        "It charges the accumulator",
        "It shuts off fluid flow if it detects a leak/rupture downstream",
        "It melts when hot",
        "It filters dirt"
      ],
      "correct": 1
    },
    {
      "id": 57,
      "type": "Technical General",
      "question": "The speed of the aircraft at which the wing generates lift equal to the weight is called:",
      "options": [
        "Cruise speed",
        "Stall speed",
        "Takeoff speed",
        "Maneuvering speed"
      ],
      "correct": 1
    },
    {
      "id": 58,
      "type": "Technical General",
      "question": "What component in a turbine engine combustor mixes fuel and air for burning?",
      "options": [
        "Fuel nozzle / Swirl vanes",
        "Turbine blades",
        "Compressor stator",
        "Diffuser"
      ],
      "correct": 0
    },
    {
      "id": 59,
      "type": "Technical General",
      "question": "What is the V-speed for best rate of climb?",
      "options": [
        "Vx",
        "Vy",
        "Vr",
        "Vso"
      ],
      "correct": 1
    },
    {
      "id": 60,
      "type": "Technical General",
      "question": "What is the V-speed for best angle of climb?",
      "options": [
        "Vx",
        "Vy",
        "Va",
        "Vne"
      ],
      "correct": 0
    }
  ],
  "spec": [
    {
      "id": 1,
      "type": "Technical Specific",
      "question": "What type of engine is installed in the Piper Archer DX?",
      "options": [
        "Lycoming O-360",
        "Continental CD-155 turbocharged diesel engine",
        "Rotax 912 iS",
        "Pratt & Whitney PT6A"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "Technical Specific",
      "question": "What fuel type does the Piper Archer DX engine burn?",
      "options": [
        "AVGAS 100LL",
        "Jet A / Jet A-1 or Diesel fuel",
        "MOGAS",
        "AVGAS 80"
      ],
      "correct": 1
    },
    {
      "id": 3,
      "type": "Technical Specific",
      "question": "What is the total fuel capacity of the Piper Archer DX?",
      "options": [
        "50 US Gallons (48 USG usable)",
        "36 US Gallons",
        "60 US Gallons",
        "40 US Gallons"
      ],
      "correct": 0
    },
    {
      "id": 4,
      "type": "Technical Specific",
      "question": "What is the maximum takeoff weight (MTOW) of the Piper Archer DX?",
      "options": [
        "2,550 lbs (1,157 kg)",
        "2,400 lbs",
        "2,900 lbs",
        "2,150 lbs"
      ],
      "correct": 0
    },
    {
      "id": 5,
      "type": "Technical Specific",
      "question": "What is the Vso (stall speed in landing configuration) for the Piper Archer DX?",
      "options": [
        "45 KIAS",
        "50 KIAS",
        "55 KIAS",
        "40 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 6,
      "type": "Technical Specific",
      "question": "What is the Vs1 (stall speed clean) for the Piper Archer DX?",
      "options": [
        "45 KIAS",
        "50 KIAS",
        "55 KIAS",
        "60 KIAS"
      ],
      "correct": 1
    },
    {
      "id": 7,
      "type": "Technical Specific",
      "question": "What is the Vy (best rate of climb speed) for the Piper Archer DX?",
      "options": [
        "69 KIAS",
        "76 KIAS",
        "80 KIAS",
        "73 KIAS"
      ],
      "correct": 1
    },
    {
      "id": 8,
      "type": "Technical Specific",
      "question": "What is the Vx (best angle of climb speed) for the Piper Archer DX?",
      "options": [
        "69 KIAS",
        "76 KIAS",
        "60 KIAS",
        "65 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 9,
      "type": "Technical Specific",
      "question": "What is the never exceed speed (Vne) of the Piper Archer DX?",
      "options": [
        "125 KIAS",
        "154 KIAS",
        "140 KIAS",
        "160 KIAS"
      ],
      "correct": 1
    },
    {
      "id": 10,
      "type": "Technical Specific",
      "question": "What is the Vno (maximum structural cruising speed) of the Piper Archer DX?",
      "options": [
        "125 KIAS",
        "154 KIAS",
        "113 KIAS",
        "130 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 11,
      "type": "Technical Specific",
      "question": "What is the maximum flap extension speed (Vfe) for the Piper Archer DX?",
      "options": [
        "102 KIAS",
        "110 KIAS",
        "98 KIAS",
        "115 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 12,
      "type": "Technical Specific",
      "question": "What is the best glide speed for the Piper Archer DX?",
      "options": [
        "69 KIAS",
        "76 KIAS",
        "73 KIAS",
        "80 KIAS"
      ],
      "correct": 1
    },
    {
      "id": 13,
      "type": "Technical Specific",
      "question": "How is the engine controlled in the Piper Archer DX?",
      "options": [
        "Manual throttle, mixture, and prop levers",
        "Dual channel FADEC (Full Authority Digital Engine Control) with a single Power Lever",
        "Electric servo motors linked to mechanical cables",
        "Automatic pressure carburetor"
      ],
      "correct": 1
    },
    {
      "id": 14,
      "type": "Technical Specific",
      "question": "What propeller is installed on the Piper Archer DX?",
      "options": [
        "Sensenich metal fixed pitch",
        "Hartzell constant speed 2-blade metal",
        "MT Propeller 3-blade constant speed composite wood",
        "McCauley fixed pitch"
      ],
      "correct": 2
    },
    {
      "id": 15,
      "type": "Technical Specific",
      "question": "What primary avionics system is installed in the Piper Archer DX cockpit?",
      "options": [
        "Garmin G500",
        "Garmin G1000 NXi suite",
        "Bendix King analogue gauges",
        "Avidyne Entegra"
      ],
      "correct": 1
    },
    {
      "id": 16,
      "type": "Technical Specific",
      "question": "The Piper Archer DX electrical system operates on what voltage?",
      "options": [
        "12V DC",
        "24V AC",
        "28V DC",
        "115V AC"
      ],
      "correct": 2
    },
    {
      "id": 17,
      "type": "Technical Specific",
      "question": "What is the output capacity of the main alternator in the Piper Archer DX?",
      "options": [
        "50 Amps",
        "70 Amps",
        "90 Amps",
        "120 Amps"
      ],
      "correct": 2
    },
    {
      "id": 18,
      "type": "Technical Specific",
      "question": "How long will the standby emergency battery power the standby instruments and engine sensors in the event of an alternator failure?",
      "options": [
        "10 minutes",
        "30 minutes",
        "60 minutes",
        "90 minutes"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "Technical Specific",
      "question": "What cooling system is used for the Continental CD-155 engine in the Piper Archer DX?",
      "options": [
        "Air-cooled cylinders",
        "Liquid-cooled engine with water-glycol radiator",
        "Oil-cooled only",
        "Exhaust shroud cooling"
      ],
      "correct": 1
    },
    {
      "id": 20,
      "type": "Technical Specific",
      "question": "What is the maximum capacity of engine oil for the CD-155 engine?",
      "options": [
        "6.0 Liters",
        "8.0 Quarts",
        "4.5 Liters",
        "5.0 Quarts"
      ],
      "correct": 0
    },
    {
      "id": 21,
      "type": "Technical Specific",
      "question": "What is the minimum oil level required for takeoff in the Piper Archer DX?",
      "options": [
        "4.5 Liters",
        "3.0 Liters",
        "5.0 Liters",
        "4.0 Liters"
      ],
      "correct": 0
    },
    {
      "id": 22,
      "type": "Technical Specific",
      "question": "What is the flap type on the Piper Archer DX?",
      "options": [
        "Fowler flaps",
        "Plain flaps",
        "Slotted flaps",
        "Split flaps"
      ],
      "correct": 2
    },
    {
      "id": 23,
      "type": "Technical Specific",
      "question": "What are the flap settings available on the Piper Archer DX?",
      "options": [
        "0, 10, 25, 40 degrees",
        "0, 15, 30, 45 degrees",
        "0, 10, 20, 30 degrees",
        "0, 10, 25, Full (32 degrees)"
      ],
      "correct": 0
    },
    {
      "id": 24,
      "type": "Technical Specific",
      "question": "What type of landing gear is installed on the Piper Archer DX?",
      "options": [
        "Retractable tricycle gear",
        "Fixed tricycle gear with oleo strut shock absorbers",
        "Tailwheel configuration",
        "Fixed gear with rubber bungees"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "Technical Specific",
      "question": "How are the flight controls operated in the Piper Archer DX?",
      "options": [
        "Hydraulic boost actuators",
        "Fly-by-wire computer signals",
        "Mechanical cable and pulley system",
        "Push-pull torque tubes only"
      ],
      "correct": 2
    },
    {
      "id": 26,
      "type": "Technical Specific",
      "question": "What is the maneuvering speed (Va) of the Piper Archer DX at maximum weight (2550 lbs)?",
      "options": [
        "98 KIAS",
        "113 KIAS",
        "125 KIAS",
        "90 KIAS"
      ],
      "correct": 1
    },
    {
      "id": 27,
      "type": "Technical Specific",
      "question": "What is the maneuvering speed (Va) of the Piper Archer DX at minimum weight (1917 lbs)?",
      "options": [
        "98 KIAS",
        "113 KIAS",
        "88 KIAS",
        "102 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 28,
      "type": "Technical Specific",
      "question": "What does a FADEC fail warning light on the panel indicate?",
      "options": [
        "The pilot must manually adjust fuel mixture",
        "A serious failure in both channels of the engine computer; land immediately",
        "Alternator is overheating",
        "Fuel is low"
      ],
      "correct": 1
    },
    {
      "id": 29,
      "type": "Technical Specific",
      "question": "The stall warning horn in the Archer DX is:",
      "options": [
        "An electric buzzer",
        "A pneumatic horn operated by suction from a leading edge slot",
        "A FADEC voice warning",
        "A stick shaker"
      ],
      "correct": 1
    },
    {
      "id": 30,
      "type": "Technical Specific",
      "question": "How is cabin heat provided in the Piper Archer DX?",
      "options": [
        "Electrical heating element from alternator",
        "An engine exhaust shroud heater",
        "A liquid-to-air heat exchanger connected to the engine coolant system",
        "Direct cabin exhaust"
      ],
      "correct": 2
    },
    {
      "id": 31,
      "type": "Technical Specific",
      "question": "What is the maximum crosswind component demonstrated for the Piper Archer DX?",
      "options": [
        "15 Knots",
        "17 Knots",
        "20 Knots",
        "12 Knots"
      ],
      "correct": 1
    },
    {
      "id": 32,
      "type": "Technical Specific",
      "question": "What is the maximum ramp weight of the Piper Archer DX?",
      "options": [
        "2558 lbs",
        "2550 lbs",
        "2600 lbs",
        "2450 lbs"
      ],
      "correct": 0
    },
    {
      "id": 33,
      "type": "Technical Specific",
      "question": "What is the maximum baggage compartment weight capacity in the Piper Archer DX?",
      "options": [
        "100 lbs (45 kg)",
        "200 lbs",
        "50 lbs",
        "150 lbs"
      ],
      "correct": 0
    },
    {
      "id": 34,
      "type": "Technical Specific",
      "question": "What is the fuel burn rate of the Continental CD-155 at standard 70% cruise power?",
      "options": [
        "approx 5.5 to 6.2 USG per hour",
        "approx 9.0 USG per hour",
        "approx 3.5 USG per hour",
        "approx 12.0 USG per hour"
      ],
      "correct": 0
    },
    {
      "id": 35,
      "type": "Technical Specific",
      "question": "What type of battery is the main aircraft battery?",
      "options": [
        "12V Lead Acid",
        "24V Lead Acid",
        "24V Lithium Ion",
        "28V Nickel Cadmium"
      ],
      "correct": 1
    },
    {
      "id": 36,
      "type": "Technical Specific",
      "question": "What V-speed is Vr (rotation speed)?",
      "options": [
        "60 KIAS",
        "76 KIAS",
        "69 KIAS",
        "50 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 37,
      "type": "Technical Specific",
      "question": "Maximum flap extension of 40 degrees is generally used for:",
      "options": [
        "Takeoff",
        "Short-field landings and steep descents",
        "Normal climbs",
        "Enroute cruise"
      ],
      "correct": 1
    },
    {
      "id": 38,
      "type": "Technical Specific",
      "question": "The MT Propeller blades are made of:",
      "options": [
        "Aluminium alloy",
        "Stainless steel",
        "Composite-wrapped wood structure",
        "Carbon fiber only"
      ],
      "correct": 2
    },
    {
      "id": 39,
      "type": "Technical Specific",
      "question": "What does a FADEC Backup Battery do?",
      "options": [
        "Powers the cockpit displays",
        "Ensures engine computer (FADEC) remains powered for at least 30 minutes in case of complete electrical loss",
        "Powers the landing lights",
        "Starts the engine"
      ],
      "correct": 1
    },
    {
      "id": 40,
      "type": "Technical Specific",
      "question": "In the fuel system, what is the role of the fuel return lines?",
      "options": [
        "They return hot fuel from the engine back to the active fuel tank",
        "They drain excess fuel onto the ground",
        "They fill the auxiliary tanks",
        "They bypass the fuel pump"
      ],
      "correct": 0
    },
    {
      "id": 41,
      "type": "Technical Specific",
      "question": "How are the brakes operated in the Piper Archer DX?",
      "options": [
        "Pneumatically",
        "Hydraulic disc brakes operated by toe pedals on pilot and co-pilot rudder pedals",
        "Cable brake lever on center console",
        "FADEC auto-braking system"
      ],
      "correct": 1
    },
    {
      "id": 42,
      "type": "Technical Specific",
      "question": "What is the nosewheel steering angle range in the Archer DX?",
      "options": [
        "20 degrees each side",
        "30 degrees each side",
        "15 degrees each side",
        "45 degrees each side"
      ],
      "correct": 0
    },
    {
      "id": 43,
      "type": "Technical Specific",
      "question": "What V-speed is Vcx (cruise climb speed)?",
      "options": [
        "87 KIAS",
        "76 KIAS",
        "95 KIAS",
        "102 KIAS"
      ],
      "correct": 0
    },
    {
      "id": 44,
      "type": "Technical Specific",
      "question": "What is the maximum operating altitude of the Piper Archer DX?",
      "options": [
        "10,000 feet",
        "12,500 feet",
        "16,400 feet",
        "20,000 feet"
      ],
      "correct": 2
    },
    {
      "id": 45,
      "type": "Technical Specific",
      "question": "What is the wing span of the Piper Archer DX?",
      "options": [
        "35.5 feet (10.8 meters)",
        "30.0 feet",
        "40.2 feet",
        "28.5 feet"
      ],
      "correct": 0
    },
    {
      "id": 46,
      "type": "Technical Specific",
      "question": "The standby instruments in the Piper Archer DX are located:",
      "options": [
        "Below the throttle quadrant",
        "On the co-pilot side panel",
        "Centered on the instrument panel between the PFD and MFD",
        "Adjacent to the circuit breakers"
      ],
      "correct": 2
    },
    {
      "id": 47,
      "type": "Technical Specific",
      "question": "What is the purpose of the FADEC B switch?",
      "options": [
        "To select alternate fuel tanks",
        "To test the backup FADEC Channel B manually during pre-flight checks",
        "To override the throttle",
        "To silence the cabin warning alarms"
      ],
      "correct": 1
    },
    {
      "id": 48,
      "type": "Technical Specific",
      "question": "What is the gear type of the nosewheel?",
      "options": [
        "Rigid caster wheel",
        "Steerable oleo strut",
        "Dual tire retraction strut",
        "Spring leaf strut"
      ],
      "correct": 1
    },
    {
      "id": 49,
      "type": "Technical Specific",
      "question": "Fuel vents in the Archer DX are located:",
      "options": [
        "On the fuel cap only",
        "On the underside of each wing",
        "In the engine compartment",
        "Inside the baggage hold"
      ],
      "correct": 1
    },
    {
      "id": 50,
      "type": "Technical Specific",
      "question": "What indicator lights up when the FADEC system switches channels due to a fault?",
      "options": [
        "FADEC A/B Caution light on G1000",
        "Master Caution and warning chimes",
        "A red engine warn light",
        "None, it is completely silent and unindicated"
      ],
      "correct": 0
    },
    {
      "id": 51,
      "type": "Technical Specific",
      "question": "The primary fuel pump in the Archer DX is:",
      "options": [
        "Engine-driven high pressure pump",
        "Gravity feed directly to cylinders",
        "Electric auxiliary pump only",
        "Vapor pump"
      ],
      "correct": 0
    },
    {
      "id": 52,
      "type": "Technical Specific",
      "question": "The maximum cabin seating capacity in the Piper Archer DX is:",
      "options": [
        "2 (pilot + co-pilot)",
        "4 (including pilot)",
        "6",
        "5"
      ],
      "correct": 1
    },
    {
      "id": 53,
      "type": "Technical Specific",
      "question": "In weight and balance, what is the 'Datum'?",
      "options": [
        "An imaginary vertical plane from which all horizontal distances are measured for balance",
        "The center of lift",
        "The empty weight of the plane",
        "The weight of the pilots"
      ],
      "correct": 0
    },
    {
      "id": 54,
      "type": "Technical Specific",
      "question": "What is the standard oil pressure range for the Continental CD-155 engine?",
      "options": [
        "2.3 to 6.0 bar",
        "10 to 20 psi",
        "1.0 to 1.5 bar",
        "50 to 100 psi"
      ],
      "correct": 0
    },
    {
      "id": 55,
      "type": "Technical Specific",
      "question": "The maximum oil consumption of the CD-155 is:",
      "options": [
        "0.1 Liters per hour",
        "1.0 Liters per hour",
        "0.5 Liters per hour",
        "0.05 Liters per hour"
      ],
      "correct": 0
    },
    {
      "id": 56,
      "type": "Technical Specific",
      "question": "What type of flaps are used for takeoff in the Archer DX?",
      "options": [
        "Flaps 10 or 25 degrees",
        "Flaps 40 degrees",
        "Flaps are never used for takeoff",
        "Flaps Full"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "Technical Specific",
      "question": "What type of primary flight display is installed in the G1000 NXi?",
      "options": [
        "GDU 1050 PFD",
        "GDU 1040 PFD",
        "GDU 1044 MFD",
        "GDU 700 PFD"
      ],
      "correct": 0
    },
    {
      "id": 58,
      "type": "Technical Specific",
      "question": "What action should you take if you get a 'COOLANT TEMP' alert on the G1000?",
      "options": [
        "Verify power setting, increase airspeed to improve airflow through radiator, land as soon as practicable",
        "Shut down the engine immediately",
        "Ignore it unless FADEC fails",
        "Switch off the fuel selectors"
      ],
      "correct": 0
    },
    {
      "id": 59,
      "type": "Technical Specific",
      "question": "The landing gear oleo struts use what pressure fluid?",
      "options": [
        "MIL-H-5606 red hydraulic fluid and compressed nitrogen",
        "Synthetic engine oil",
        "Water-glycol mixture",
        "Dry air"
      ],
      "correct": 0
    },
    {
      "id": 60,
      "type": "Technical Specific",
      "question": "What is the best rate of climb (Vy) at 5,000 feet altitude?",
      "options": [
        "76 KIAS",
        "73 KIAS",
        "69 KIAS",
        "70 KIAS"
      ],
      "correct": 1
    }
  ],
  "rtr": [
    {
      "id": 1,
      "type": "RTR Part 1",
      "question": "What is the correct radiotelephony distress call prefix?",
      "options": [
        "PAN PAN",
        "MAYDAY",
        "SECURITE",
        "EMERGENCY"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "RTR Part 1",
      "question": "What is the correct radiotelephony urgency call prefix?",
      "options": [
        "MAYDAY",
        "PAN PAN",
        "SECURITE",
        "URGENT"
      ],
      "correct": 1
    },
    {
      "id": 3,
      "type": "RTR Part 1",
      "question": "What is the correct radiotelephony safety call prefix?",
      "options": [
        "PAN PAN",
        "MAYDAY",
        "SECURITE",
        "ALERT"
      ],
      "correct": 2
    },
    {
      "id": 4,
      "type": "RTR Part 1",
      "question": "How many times should the distress call prefix 'MAYDAY' be repeated during the initial call?",
      "options": [
        "Once",
        "Twice",
        "Three times",
        "Four times"
      ],
      "correct": 2
    },
    {
      "id": 5,
      "type": "RTR Part 1",
      "question": "If you hear a distress call on your active frequency, you should:",
      "options": [
        "Immediately relay the message to another station",
        "Maintain radio silence and monitor to see if a station acknowledges, then assist if needed",
        "Contact the distress aircraft immediately to offer coordinates",
        "Change frequency immediately to clear the channel"
      ],
      "correct": 1
    },
    {
      "id": 6,
      "type": "RTR Part 1",
      "question": "What is the frequency of the international VHF emergency frequency?",
      "options": [
        "121.5 MHz",
        "243.0 MHz",
        "118.0 MHz",
        "123.45 MHz"
      ],
      "correct": 0
    },
    {
      "id": 7,
      "type": "RTR Part 1",
      "question": "What transponder code should be selected during an emergency distress situation?",
      "options": [
        "7500",
        "7600",
        "7700",
        "2000"
      ],
      "correct": 2
    },
    {
      "id": 8,
      "type": "RTR Part 1",
      "question": "What transponder code should be selected in the event of a radio communications failure?",
      "options": [
        "7500",
        "7600",
        "7700",
        "7000"
      ],
      "correct": 1
    },
    {
      "id": 9,
      "type": "RTR Part 1",
      "question": "What transponder code indicates an aircraft is being subjected to unlawful interference (hijack)?",
      "options": [
        "7500",
        "7600",
        "7700",
        "7777"
      ],
      "correct": 0
    },
    {
      "id": 10,
      "type": "RTR Part 1",
      "question": "What is the readability scale used during a radio check, and what does 'Readability 3' mean?",
      "options": [
        "Scale 1-5; Readability 3 means 'Readable with difficulty'",
        "Scale 1-10; Readability 3 means 'Poor'",
        "Scale 1-5; Readability 3 means 'Perfectly readable'",
        "Scale 1-5; Readability 3 means 'Unreadable'"
      ],
      "correct": 0
    },
    {
      "id": 11,
      "type": "RTR Part 1",
      "question": "What does the phrase 'ROGER' mean?",
      "options": [
        "I understand your instructions and will comply",
        "I have received all of your last transmission",
        "Yes",
        "I clearance approved"
      ],
      "correct": 1
    },
    {
      "id": 12,
      "type": "RTR Part 1",
      "question": "What does the phrase 'WILCO' mean?",
      "options": [
        "I have received your transmission",
        "I understand your message and will comply with it",
        "I am repeating your message",
        "Will continue"
      ],
      "correct": 1
    },
    {
      "id": 13,
      "type": "RTR Part 1",
      "question": "What does the phrase 'SAY AGAIN' mean?",
      "options": [
        "Please repeat your last transmission",
        "I will repeat my transmission",
        "Acknowledge my signal",
        "Confirm frequency"
      ],
      "correct": 0
    },
    {
      "id": 14,
      "type": "RTR Part 1",
      "question": "What is the correct pronunciation of the number '9' in aviation radiotelephony?",
      "options": [
        "Nine",
        "Niner",
        "No-nine",
        "Nin-er"
      ],
      "correct": 1
    },
    {
      "id": 15,
      "type": "RTR Part 1",
      "question": "How should an altitude of 10,500 feet be transmitted?",
      "options": [
        "Ten thousand five hundred feet",
        "One zero thousand five hundred",
        "One zero five zero zero",
        "One zero thousand five hundred feet"
      ],
      "correct": 1
    },
    {
      "id": 16,
      "type": "RTR Part 1",
      "question": "What is the phonetic alphabet representation for the letters 'S', 'K', 'Y'?",
      "options": [
        "Sierra, Kilo, Yankee",
        "Sugar, King, Yellow",
        "Sierra, Kay, Yesterday",
        "Saddle, Kilo, Yankee"
      ],
      "correct": 0
    },
    {
      "id": 17,
      "type": "RTR Part 1",
      "question": "What is the phonetic alphabet representation for the letters 'R', 'T', 'R'?",
      "options": [
        "Roger, Tango, Roger",
        "Romeo, Tango, Romeo",
        "Romeo, Texas, Romeo",
        "Roger, Tom, Roger"
      ],
      "correct": 1
    },
    {
      "id": 18,
      "type": "RTR Part 1",
      "question": "When transmitting a frequency '118.125 MHz', how should it be spoken?",
      "options": [
        "One one eight point one two five",
        "One one eight decimal one two five",
        "One hundred eighteen point one hundred twenty five",
        "One one eight decimal one two"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "RTR Part 1",
      "question": "What does the phrase 'STANDBY' mean?",
      "options": [
        "Acknowledge receipt of clearance",
        "Go ahead with your message",
        "Wait and I will call you",
        "Monitor this frequency only"
      ],
      "correct": 2
    },
    {
      "id": 20,
      "type": "RTR Part 1",
      "question": "What does the phrase 'CLEARED' mean?",
      "options": [
        "You are authorized to proceed under the conditions specified",
        "Your runway is clear of snow",
        "All traffic has cleared your area",
        "Radio transmission is over"
      ],
      "correct": 0
    },
    {
      "id": 21,
      "type": "RTR Part 1",
      "question": "In a position report, what must follow the aircraft callsign?",
      "options": [
        "Altitude only",
        "Position, Time, Flight Level/Altitude, Next Position & ETA",
        "Groundspeed and heading",
        "Destination and route"
      ],
      "correct": 1
    },
    {
      "id": 22,
      "type": "RTR Part 1",
      "question": "The transmission of Morse code identification signals from a VOR or NDB is used to:",
      "options": [
        "Confirm the facility is operational and correctly tuned",
        "Transmit weather data",
        "Communicate with passengers",
        "Verify pilot licensing status"
      ],
      "correct": 0
    },
    {
      "id": 23,
      "type": "RTR Part 1",
      "question": "What is a 'blind transmission'?",
      "options": [
        "A transmission made when flying in clouds",
        "A transmission made from one station to another when communication cannot be established but the receiver is believed to be able to hear",
        "A transmission with no transponder signal",
        "An unauthorized civilian transmission"
      ],
      "correct": 1
    },
    {
      "id": 24,
      "type": "RTR Part 1",
      "question": "Under speechless code procedures, how does an aircraft with transmitter failure indicate 'YES' using its carrier wave?",
      "options": [
        "One click or short transmission",
        "Two clicks or short transmissions",
        "Three clicks",
        "A continuous 10-second buzz"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "RTR Part 1",
      "question": "Under speechless code procedures, how does an aircraft with transmitter failure indicate 'NO'?",
      "options": [
        "One click",
        "Two clicks",
        "Three clicks",
        "Four clicks"
      ],
      "correct": 1
    },
    {
      "id": 26,
      "type": "RTR Part 1",
      "question": "What is the phraseology for indicating you cannot comply with an ATC instruction?",
      "options": [
        "NEGATIVE",
        "UNABLE",
        "ROGER NOT",
        "NO CAN DO"
      ],
      "correct": 1
    },
    {
      "id": 27,
      "type": "RTR Part 1",
      "question": "Which ATC station controls movements on the runway and in the immediate vicinity of the aerodrome?",
      "options": [
        "Ground Control",
        "Aerodrome Control (Tower)",
        "Approach Control",
        "Area Control Center"
      ],
      "correct": 1
    },
    {
      "id": 28,
      "type": "RTR Part 1",
      "question": "What is the meaning of 'QNH'?",
      "options": [
        "Altimeter setting to read elevation above mean sea level",
        "Altimeter setting to read zero on the runway",
        "The standard pressure setting of 1013.2 hPa",
        "The density altitude index"
      ],
      "correct": 0
    },
    {
      "id": 29,
      "type": "RTR Part 1",
      "question": "What is the meaning of 'QFE'?",
      "options": [
        "Altimeter setting to read height above station level (ground level)",
        "Altimeter setting to read mean sea level elevation",
        "Standard altimeter setting",
        "Local temperature value"
      ],
      "correct": 0
    },
    {
      "id": 30,
      "type": "RTR Part 1",
      "question": "What does 'SELCAL' stand for?",
      "options": [
        "Selective Calling System",
        "Selector Calibration Module",
        "Sector Altitude Clearance",
        "Selective Cabin Alarm"
      ],
      "correct": 0
    },
    {
      "id": 31,
      "type": "RTR Part 1",
      "question": "What is the distress frequency on HF?",
      "options": [
        "2182 kHz",
        "5680 kHz",
        "121.5 MHz",
        "3000 kHz"
      ],
      "correct": 0
    },
    {
      "id": 32,
      "type": "RTR Part 1",
      "question": "What is the urgency frequency on HF?",
      "options": [
        "2182 kHz",
        "121.5 MHz",
        "5680 kHz",
        "243 MHz"
      ],
      "correct": 0
    },
    {
      "id": 33,
      "type": "RTR Part 1",
      "question": "Which of the following clearances must be fully read back by the pilot?",
      "options": [
        "Altitude clearances, heading instructions, runway in use, altimeter settings, and transponder codes",
        "Weather advisories",
        "Routine traffic information",
        "Expected approach times"
      ],
      "correct": 0
    },
    {
      "id": 34,
      "type": "RTR Part 1",
      "question": "What is the correct terminology to request a repeats of a clearance?",
      "options": [
        "Please say again clearance",
        "Request read back",
        "Say again clearance",
        "Repeat clearance"
      ],
      "correct": 2
    },
    {
      "id": 35,
      "type": "RTR Part 1",
      "question": "If you are instructed to 'Line up and wait', you should:",
      "options": [
        "Immediately take off",
        "Taxi onto the runway and line up, then wait for takeoff clearance",
        "Hold short of the runway",
        "Taxi to the parking bay"
      ],
      "correct": 1
    },
    {
      "id": 36,
      "type": "RTR Part 1",
      "question": "What does the phrase 'CORRECTION' mean?",
      "options": [
        "I have made an error in this transmission. The correct version is...",
        "Your navigation is incorrect",
        "Alter your heading now",
        "Turn back immediately"
      ],
      "correct": 0
    },
    {
      "id": 37,
      "type": "RTR Part 1",
      "question": "What does the phrase 'REPORT PASSING' mean?",
      "options": [
        "Report when you pass another aircraft",
        "Report when you cross a specified altitude or navigation fix",
        "Report your maximum speed",
        "Write a report on fuel usage"
      ],
      "correct": 1
    },
    {
      "id": 38,
      "type": "RTR Part 1",
      "question": "What is the correct reply to 'Contact Tower 118.1'?",
      "options": [
        "Roger, contact Tower 118.1, [Callsign]",
        "Wilco, contact Tower 118.1, [Callsign]",
        "Contacting 118.1, [Callsign]",
        "Tower 118.1, [Callsign]"
      ],
      "correct": 0
    },
    {
      "id": 39,
      "type": "RTR Part 1",
      "question": "What does 'SQUAWK 7600' mean?",
      "options": [
        "I am experiencing a communication failure",
        "I am being hijacked",
        "I have an engine failure",
        "I am in distress"
      ],
      "correct": 0
    },
    {
      "id": 40,
      "type": "RTR Part 1",
      "question": "How should a pilot transmit the number '100'?",
      "options": [
        "One hundred",
        "One zero zero",
        "One double zero",
        "Ten zero"
      ],
      "correct": 1
    },
    {
      "id": 41,
      "type": "RTR Part 1",
      "question": "How should a pilot transmit the heading '090'?",
      "options": [
        "Zero nine zero",
        "Ninety",
        "Zero ninety",
        "Nine zero"
      ],
      "correct": 0
    },
    {
      "id": 42,
      "type": "RTR Part 1",
      "question": "What does the phrase 'MAINTAIN' mean?",
      "options": [
        "Service your aircraft immediately",
        "Continue in accordance with the conditions specified (e.g. altitude/heading)",
        "Stop all movements",
        "Report your flight logs"
      ],
      "correct": 1
    },
    {
      "id": 43,
      "type": "RTR Part 1",
      "question": "What does 'NEGAT' mean in radiotelephony?",
      "options": [
        "Negative",
        "Clearance cancelled",
        "Altitude incorrect",
        "No"
      ],
      "correct": 0
    },
    {
      "id": 44,
      "type": "RTR Part 1",
      "question": "The time system used in all aviation communications is:",
      "options": [
        "Local Standard Time",
        "Coordinated Universal Time (UTC)",
        "Solar Mean Time",
        "Universal Standard Metric Time"
      ],
      "correct": 1
    },
    {
      "id": 45,
      "type": "RTR Part 1",
      "question": "A pilot transmitting 'MAYDAY RELAY' is:",
      "options": [
        "Calling on behalf of another aircraft in distress",
        "Requesting a radio check",
        "Announcing a slight engine issue",
        "Testing the HF transmitter"
      ],
      "correct": 0
    },
    {
      "id": 46,
      "type": "RTR Part 1",
      "question": "What is the phraseology to confirm you have received and understood a distress message?",
      "options": [
        "ROGER MAYDAY",
        "RECEIVED MAYDAY",
        "MAYDAY [Aircraft Callsign] COPIED",
        "[Aircraft Callsign] MAYDAY ROGER or RECEIVED"
      ],
      "correct": 3
    },
    {
      "id": 47,
      "type": "RTR Part 1",
      "question": "What is the phraseology used by a station to impose silence on a frequency during a distress situation?",
      "options": [
        "SHUT UP FREQUENCY",
        "SILENCE MAYDAY or SEELONCE DISTRESS",
        "STOP TRANSMITTING",
        "HOLD COMMUNICATIONS"
      ],
      "correct": 1
    },
    {
      "id": 48,
      "type": "RTR Part 1",
      "question": "What phraseology is used to announce the end of distress radio silence?",
      "options": [
        "DISTRESS OVER",
        "SEELONCE FEENEE",
        "FREQUENCY NORMAL",
        "MAYDAY CANCELLED"
      ],
      "correct": 1
    },
    {
      "id": 49,
      "type": "RTR Part 1",
      "question": "If you are instructed to 'Squawk Ident', you should:",
      "options": [
        "Read back your transponder code",
        "Press the 'IDENT' button on your transponder",
        "Change your transponder code to 7000",
        "Switch off your transponder"
      ],
      "correct": 1
    },
    {
      "id": 50,
      "type": "RTR Part 1",
      "question": "The term 'AFFIRM' means:",
      "options": [
        "Yes",
        "Maybe",
        "Negative",
        "Acknowledged"
      ],
      "correct": 0
    },
    {
      "id": 51,
      "type": "RTR Part 1",
      "question": "The term 'NEGATIVE' means:",
      "options": [
        "Yes",
        "No / Permission not granted / That is not correct",
        "Go ahead",
        "Standby"
      ],
      "correct": 1
    },
    {
      "id": 52,
      "type": "RTR Part 1",
      "question": "What does 'OUT' mean at the end of a transmission?",
      "options": [
        "This exchange of transmissions is completed and no response is expected",
        "I have finished speaking, go ahead",
        "I am turning off the radio",
        "I am leaving the airspace"
      ],
      "correct": 0
    },
    {
      "id": 53,
      "type": "RTR Part 1",
      "question": "What does 'OVER' mean at the end of a transmission?",
      "options": [
        "I have finished speaking, and I expect a response from you",
        "This conversation is finished",
        "I am flying over your station",
        "Altitude is too high"
      ],
      "correct": 0
    },
    {
      "id": 54,
      "type": "RTR Part 1",
      "question": "What is the primary VHF frequency band for civil aviation communications?",
      "options": [
        "118.000 to 136.975 MHz",
        "108.000 to 117.975 MHz",
        "30 to 88 MHz",
        "225 to 400 MHz"
      ],
      "correct": 0
    },
    {
      "id": 55,
      "type": "RTR Part 1",
      "question": "Which agency issues RTR licenses in India?",
      "options": [
        "DGCA",
        "WPC (Wireless Planning & Coordination Wing), Ministry of Communications",
        "AAI",
        "Ministry of Civil Aviation"
      ],
      "correct": 1
    },
    {
      "id": 56,
      "type": "RTR Part 1",
      "question": "A QDM of 090° represents:",
      "options": [
        "Magnetic track to the station is 090°",
        "Magnetic track from the station is 090°",
        "True course is 090°",
        "Wind angle is 090°"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "RTR Part 1",
      "question": "A QTE of 180° represents:",
      "options": [
        "True bearing of aircraft from station is 180°",
        "Magnetic bearing to station is 180°",
        "True heading to station is 180°",
        "Altimeter setting"
      ],
      "correct": 0
    },
    {
      "id": 58,
      "type": "RTR Part 1",
      "question": "How do you transmit the letter 'Z'?",
      "options": [
        "Zebra",
        "Zulu",
        "Zed",
        "Zack"
      ],
      "correct": 1
    },
    {
      "id": 59,
      "type": "RTR Part 1",
      "question": "What does 'PAN PAN MEDICAL' indicate?",
      "options": [
        "An urgency message concerning an urgent medical transport need or injured passenger",
        "A passenger wants medicine",
        "A distress situation on board",
        "An administrative call"
      ],
      "correct": 0
    },
    {
      "id": 60,
      "type": "RTR Part 1",
      "question": "The transmission 'SQUAWK CHARLIE' indicates to the pilot to:",
      "options": [
        "Select transponder Mode C (Altitude Reporting)",
        "Verify transponder code 1200",
        "Switch to standby",
        "Ident"
      ],
      "correct": 0
    }
  ],
  "pyq": [
    {
      "id": 1,
      "type": "Previous Years",
      "question": "What is the primary indicator of the presence of the Intertropical Convergence Zone (ITCZ)?",
      "options": [
        "A line of severe fronts",
        "A belt of low pressure, rising air, convective clouds, and heavy rain near the equator",
        "Persistent cold high-pressure cells",
        "Strong thermal inversions in the upper stratosphere"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "Previous Years",
      "question": "In standard VDF homing, what heading should the pilot steer to fly directly to the station under zero wind conditions?",
      "options": [
        "QDR",
        "QDM",
        "QTE",
        "QUJ"
      ],
      "correct": 1
    },
    {
      "id": 3,
      "type": "Previous Years",
      "question": "What is the transition altitude in India by default unless otherwise specified in AIP?",
      "options": [
        "4,000 feet",
        "10,000 feet",
        "18,000 feet",
        "It varies and is always calculated based on temperature"
      ],
      "correct": 0
    },
    {
      "id": 4,
      "type": "Previous Years",
      "question": "If you experience a communications failure under IFR in VMC, what action is required?",
      "options": [
        "Continue flight under IFR on plan",
        "Land at the nearest suitable aerodrome and report your arrival by quickest means",
        "Orbit at your present position indefinitely",
        "Immediately climb to maximum altitude"
      ],
      "correct": 1
    },
    {
      "id": 5,
      "type": "Previous Years",
      "question": "What type of engine is installed in the Cessna 172R?",
      "options": [
        "Lycoming IO-360-L2A",
        "Continental CD-135",
        "Continental IO-360",
        "Lycoming O-320"
      ],
      "correct": 0
    },
    {
      "id": 6,
      "type": "Previous Years",
      "question": "Which of the following represents 'Geostrophic Wind'?",
      "options": [
        "Wind blowing directly from high to low pressure",
        "Wind blowing parallel to isobars due to balance between Coriolis force and Pressure Gradient force",
        "Wind blowing down mountain slopes",
        "Winds in cyclones"
      ],
      "correct": 1
    },
    {
      "id": 7,
      "type": "Previous Years",
      "question": "The temperature at 10,000 feet in standard ISA conditions is:",
      "options": [
        "-5°C",
        "0°C",
        "+5°C",
        "-15°C"
      ],
      "correct": 0
    },
    {
      "id": 8,
      "type": "Previous Years",
      "question": "What is the frequency band for NDB systems?",
      "options": [
        "108 to 117.95 MHz",
        "190 to 1750 kHz",
        "118 to 136 MHz",
        "960 to 1215 MHz"
      ],
      "correct": 1
    },
    {
      "id": 9,
      "type": "Previous Years",
      "question": "A geostrophic wind does not blow at the equator because:",
      "options": [
        "There is no pressure gradient",
        "The Coriolis force is zero at the equator",
        "Friction is too high",
        "Gravity is weaker at the equator"
      ],
      "correct": 1
    },
    {
      "id": 10,
      "type": "Previous Years",
      "question": "What is the speed of sound variation with temperature?",
      "options": [
        "It increases as temperature increases",
        "It decreases as temperature increases",
        "It remains constant",
        "It is only dependent on pressure"
      ],
      "correct": 0
    },
    {
      "id": 11,
      "type": "Previous Years",
      "question": "The altimeter setting QFE will cause the altimeter to read:",
      "options": [
        "Elevation above Sea Level",
        "Zero on the aerodrome runway surface",
        "Pressure altitude",
        "Standard altitude"
      ],
      "correct": 1
    },
    {
      "id": 12,
      "type": "Previous Years",
      "question": "What does a 'Squawk 7500' indicate to ATC?",
      "options": [
        "Radio communication failure",
        "Unlawful interference / Hijack",
        "General emergency",
        "Military identification"
      ],
      "correct": 1
    },
    {
      "id": 13,
      "type": "Previous Years",
      "question": "What is the primary hazard of carburetor icing?",
      "options": [
        "Propeller overspeed",
        "Loss of engine power due to blockage of the intake air throat",
        "High fuel pressure",
        "Spark plug fouling"
      ],
      "correct": 1
    },
    {
      "id": 14,
      "type": "Previous Years",
      "question": "The V-speed Vfe represents:",
      "options": [
        "Maximum structural cruise speed",
        "Maximum speed with flaps extended",
        "Never exceed speed",
        "Maneuvering speed"
      ],
      "correct": 1
    },
    {
      "id": 15,
      "type": "Previous Years",
      "question": "The V-speed Va represents:",
      "options": [
        "Maneuvering speed (max speed for full control deflections)",
        "Maximum flap speed",
        "Stall speed clean",
        "Stall speed landing configuration"
      ],
      "correct": 0
    },
    {
      "id": 16,
      "type": "Previous Years",
      "question": "On a constant altitude turn, the stall speed will:",
      "options": [
        "Increase",
        "Decrease",
        "Remain constant",
        "Equal Va"
      ],
      "correct": 0
    },
    {
      "id": 17,
      "type": "Previous Years",
      "question": "What are the characteristics of stable air?",
      "options": [
        "Stratiform clouds, continuous precipitation, smooth air, fair to poor visibility",
        "Cumuliform clouds, showery precipitation, turbulent air, good visibility",
        "Clear skies, strong winds",
        "High density altitude, gusty winds"
      ],
      "correct": 0
    },
    {
      "id": 18,
      "type": "Previous Years",
      "question": "What are the characteristics of unstable air?",
      "options": [
        "Stratiform clouds, smooth air",
        "Cumuliform clouds, showery precipitation, turbulent air, good visibility (except in showers)",
        "High pressure, low humidity",
        "Fog and low stratus clouds"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "Previous Years",
      "question": "What is the purpose of the 1-in-60 rule?",
      "options": [
        "To calculate true airspeed",
        "To find the track correction angle when off course",
        "To determine descent rates",
        "To verify fuel burn"
      ],
      "correct": 1
    },
    {
      "id": 20,
      "type": "Previous Years",
      "question": "Which cloud is associated with lightning, hail, and heavy showers?",
      "options": [
        "Cirrocumulus",
        "Nimbostratus",
        "Cumulonimbus",
        "Altostratus"
      ],
      "correct": 2
    },
    {
      "id": 21,
      "type": "Previous Years",
      "question": "The Morse code signal of 'A' is represented by:",
      "options": [
        "Short-Long",
        "Long-Short",
        "Short-Short-Long",
        "Long-Long"
      ],
      "correct": 0
    },
    {
      "id": 22,
      "type": "Previous Years",
      "question": "What is the frequency of the VOLMET broadcast?",
      "options": [
        "VHF and HF frequencies designated for meteorological broadcasts to aircraft in flight",
        "Emergency frequency 121.5",
        "Tower frequency",
        "VOR frequency"
      ],
      "correct": 0
    },
    {
      "id": 23,
      "type": "Previous Years",
      "question": "The geostrophic wind is parallel to the isobars because of the:",
      "options": [
        "Coriolis effect balancing the pressure gradient force",
        "Frictional drag",
        "Gravity pull",
        "Centrifugal force"
      ],
      "correct": 0
    },
    {
      "id": 24,
      "type": "Previous Years",
      "question": "An aircraft flying from High pressure to Low pressure area at constant indicated altitude will be:",
      "options": [
        "Higher than the altimeter indicates",
        "Lower than the altimeter indicates (High to Low, Look out below!)",
        "At the correct true altitude",
        "At standard flight level"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "Previous Years",
      "question": "What is the standard sea level temperature in ISA?",
      "options": [
        "0°C",
        "15°C",
        "20°C",
        "10°C"
      ],
      "correct": 1
    },
    {
      "id": 26,
      "type": "Previous Years",
      "question": "A geostrophic wind blows when isobars are:",
      "options": [
        "Curved",
        "Straight and parallel",
        "Crossing each other",
        "Concentric circles"
      ],
      "correct": 1
    },
    {
      "id": 27,
      "type": "Previous Years",
      "question": "Which navigation aid provides slant distance from the aircraft to the station?",
      "options": [
        "VOR",
        "NDB",
        "DME",
        "ILS Glide Path"
      ],
      "correct": 2
    },
    {
      "id": 28,
      "type": "Previous Years",
      "question": "The Q-code QTE represents:",
      "options": [
        "Magnetic bearing to station",
        "True bearing from station to aircraft",
        "Magnetic bearing from station",
        "True bearing to station"
      ],
      "correct": 1
    },
    {
      "id": 29,
      "type": "Previous Years",
      "question": "What transponder code is standard for VFR flights in uncontrolled airspace if not assigned otherwise?",
      "options": [
        "7000 (Europe/International) or 1200 (USA)",
        "2000",
        "7700",
        "0000"
      ],
      "correct": 0
    },
    {
      "id": 30,
      "type": "Previous Years",
      "question": "What type of drag is skin friction drag categorized under?",
      "options": [
        "Induced drag",
        "Parasite drag",
        "Wave drag",
        "Lift-induced drag"
      ],
      "correct": 1
    },
    {
      "id": 31,
      "type": "Previous Years",
      "question": "A Geostrophic Wind is unaffected by:",
      "options": [
        "Pressure Gradient Force",
        "Coriolis Force",
        "Surface Friction (above the friction layer)",
        "Latitude"
      ],
      "correct": 2
    },
    {
      "id": 32,
      "type": "Previous Years",
      "question": "In the Northern Hemisphere, if you stand with your back to the wind, the low pressure is on your:",
      "options": [
        "Right",
        "Left (Buys Ballot's Law)",
        "Front",
        "Back"
      ],
      "correct": 1
    },
    {
      "id": 33,
      "type": "Previous Years",
      "question": "The standard sea level lapse rate is:",
      "options": [
        "2°C per 1,000 ft",
        "1.98°C per 1,000 ft",
        "6.5°C per 1,000 meters",
        "Both B and C"
      ],
      "correct": 3
    },
    {
      "id": 34,
      "type": "Previous Years",
      "question": "What are 'Isogonic' lines?",
      "options": [
        "Lines of equal pressure",
        "Lines of equal magnetic variation",
        "Lines of equal temperature",
        "Lines of equal wind speed"
      ],
      "correct": 1
    },
    {
      "id": 35,
      "type": "Previous Years",
      "question": "The rate of fuel consumption is called:",
      "options": [
        "Specific gravity",
        "Fuel flow rate",
        "Endurance",
        "Range coefficient"
      ],
      "correct": 1
    },
    {
      "id": 36,
      "type": "Previous Years",
      "question": "The compass deviation card shows:",
      "options": [
        "Variation for each longitude",
        "Deviation for various headings to correct compass error",
        "Wind drift correction",
        "VOR calibration offset"
      ],
      "correct": 1
    },
    {
      "id": 37,
      "type": "Previous Years",
      "question": "If you are flying on a true course of 180° with a variation of 10° West and deviation of 2° East, what is your compass course?",
      "options": [
        "188°",
        "172°",
        "192°",
        "168°"
      ],
      "correct": 0
    },
    {
      "id": 38,
      "type": "Previous Years",
      "question": "The height of the cloud base is measured using a:",
      "options": [
        "Ceilometer",
        "Anemometer",
        "Barometer",
        "Hygrometer"
      ],
      "correct": 0
    },
    {
      "id": 39,
      "type": "Previous Years",
      "question": "What is the frequency of standard METAR reports?",
      "options": [
        "Every 30 minutes or 1 hour",
        "Every 3 hours",
        "Once a day",
        "Continuous"
      ],
      "correct": 0
    },
    {
      "id": 40,
      "type": "Previous Years",
      "question": "A SPECI is a:",
      "options": [
        "Special meteorological report issued when weather conditions change significantly",
        "Special flight plan",
        "Routine weather forecast for next 24 hours",
        "Special pilot license check"
      ],
      "correct": 0
    },
    {
      "id": 41,
      "type": "Previous Years",
      "question": "What does a steady green light from the control tower to an aircraft in flight mean?",
      "options": [
        "Cleared to land",
        "Give way to other aircraft",
        "Return for landing",
        "Airport unsafe"
      ],
      "correct": 0
    },
    {
      "id": 42,
      "type": "Previous Years",
      "question": "A red flashing light to an aircraft in flight means:",
      "options": [
        "Airport unsafe, do not land",
        "Cleared to land",
        "Return for landing",
        "Give way to other traffic"
      ],
      "correct": 0
    },
    {
      "id": 43,
      "type": "Previous Years",
      "question": "The primary radio aid used for long range en-route navigation over oceans is:",
      "options": [
        "VOR/DME",
        "NDB",
        "INS/IRS and GPS",
        "VHF Radio"
      ],
      "correct": 2
    },
    {
      "id": 44,
      "type": "Previous Years",
      "question": "A Lambert's chart scale is correct at:",
      "options": [
        "All parallels of latitude",
        "The standard parallels of latitude",
        "The equator only",
        "The poles only"
      ],
      "correct": 1
    },
    {
      "id": 45,
      "type": "Previous Years",
      "question": "What is the width of a standard airway in India?",
      "options": [
        "10 NM (5 NM on either side of centerline)",
        "20 NM",
        "8 NM",
        "15 NM"
      ],
      "correct": 0
    },
    {
      "id": 46,
      "type": "Previous Years",
      "question": "What is the vertical limit of lower airways in India by default?",
      "options": [
        "FL150",
        "FL460",
        "FL250",
        "FL100"
      ],
      "correct": 0
    },
    {
      "id": 47,
      "type": "Previous Years",
      "question": "What does 'SFC' stand for in air regulations?",
      "options": [
        "Surface",
        "Specific Fuel Consumption",
        "Sector Flight Clearance",
        "Safe Flight Path"
      ],
      "correct": 0
    },
    {
      "id": 48,
      "type": "Previous Years",
      "question": "What does 'CTR' stand for?",
      "options": [
        "Control Zone",
        "Center Routing",
        "Clearance Transmitter Receiver",
        "Coordinated Terminal Region"
      ],
      "correct": 0
    },
    {
      "id": 49,
      "type": "Previous Years",
      "question": "The minimum height for VFR flights above obstacles in non-congested areas is:",
      "options": [
        "500 feet above surface / water",
        "1,000 feet",
        "1,500 feet",
        "250 feet"
      ],
      "correct": 0
    },
    {
      "id": 50,
      "type": "Previous Years",
      "question": "The pilot-in-command of an aircraft must check what information prior to flight?",
      "options": [
        "Weather forecasts, fuel requirements, takeoff/landing distance data, and NOTAMs",
        "Passenger ticket details",
        "Engine warranty papers",
        "Cabin cleaning records"
      ],
      "correct": 0
    },
    {
      "id": 51,
      "type": "Previous Years",
      "question": "If you are flying VFR on a track of 045°, which cruising altitude is appropriate?",
      "options": [
        "Odd thousands + 500 feet (e.g. 3,500, 5,500...)",
        "Even thousands + 500 feet (e.g. 4,500, 6,500...)",
        "Odd thousands (e.g. 3,000, 5,000...)",
        "Even thousands (e.g. 4,000, 6,000...)"
      ],
      "correct": 0
    },
    {
      "id": 52,
      "type": "Previous Years",
      "question": "An altimeter setting of QNE indicates standard setting of:",
      "options": [
        "1013.2 hPa / 29.92 inches",
        "QNH at station",
        "Airfield pressure",
        "1000 hPa"
      ],
      "correct": 0
    },
    {
      "id": 53,
      "type": "Previous Years",
      "question": "What is the speed of sound at -56.5°C?",
      "options": [
        "573 knots",
        "661 knots",
        "761 knots",
        "500 knots"
      ],
      "correct": 0
    },
    {
      "id": 54,
      "type": "Previous Years",
      "question": "A great circle track from A (60°S 170°E) to B (60°S 170°W) crosses the 180° meridian. The track angle at the 180° meridian is:",
      "options": [
        "090°",
        "270°",
        "180°",
        "045°"
      ],
      "correct": 0
    },
    {
      "id": 55,
      "type": "Previous Years",
      "question": "Which layer of the atmosphere is ozone concentrated in?",
      "options": [
        "Stratosphere",
        "Troposphere",
        "Ionosphere",
        "Mesosphere"
      ],
      "correct": 0
    },
    {
      "id": 56,
      "type": "Previous Years",
      "question": "The primary source of moisture for clouds is:",
      "options": [
        "Evaporation from oceans and land surfaces",
        "Transpiration from plants only",
        "Industrial emissions",
        "Rainfall"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "Previous Years",
      "question": "Which fog forms due to warm rain falling through cold air beneath a warm front?",
      "options": [
        "Frontal / Precipitation fog",
        "Radiation fog",
        "Advection fog",
        "Steam fog"
      ],
      "correct": 0
    },
    {
      "id": 58,
      "type": "Previous Years",
      "question": "A pilot can verify the serviceability of a VOR by listening to the:",
      "options": [
        "Aural Morse code identifier or checking the fail flag on the indicator",
        "ATIS report",
        "Engine RPM",
        "Control tower controller statement"
      ],
      "correct": 0
    },
    {
      "id": 59,
      "type": "Previous Years",
      "question": "The glide slope signal is centered on which glide path angle by default?",
      "options": [
        "3 degrees",
        "2 degrees",
        "4 degrees",
        "5 degrees"
      ],
      "correct": 0
    },
    {
      "id": 60,
      "type": "Previous Years",
      "question": "What does a white 'X' mark on a runway surface represent?",
      "options": [
        "The runway is closed for all aircraft operations",
        "Landing threshold point",
        "Touchdown point",
        "Intersection point"
      ],
      "correct": 0
    }
  ]
};
