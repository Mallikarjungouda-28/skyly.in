export interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
  correct: number;
}

export const questionsData: Record<string, Question[]> = {
  "met": [
    {
      "id": 1,
      "type": "Meteorology",
      "question": "Which atmospheric layer contains the majority of the Earth's weather?",
      "options": [
        "Stratosphere",
        "Troposphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "correct": 1
    },
    {
      "id": 2,
      "type": "Meteorology",
      "question": "What is the standard temperature lapse rate in the International Standard Atmosphere (ISA) below the tropopause?",
      "options": [
        "1.98\u00b0C per 1,000 feet",
        "3\u00b0C per 1,000 feet",
        "1.5\u00b0C per 1,000 feet",
        "2\u00b0C per 1,000 meters"
      ],
      "correct": 0
    },
    {
      "id": 3,
      "type": "Meteorology",
      "question": "What type of cloud is associated with heavy rain, thunderstorms, and hail?",
      "options": [
        "Cumulus",
        "Altostratus",
        "Cumulonimbus",
        "Cirrus"
      ],
      "correct": 2
    },
    {
      "id": 4,
      "type": "Meteorology",
      "question": "Which force is responsible for the deflection of wind to the right in the Northern Hemisphere?",
      "options": [
        "Frictional force",
        "Centrifugal force",
        "Pressure gradient force",
        "Coriolis force"
      ],
      "correct": 3
    },
    {
      "id": 5,
      "type": "Meteorology",
      "question": "A geostrophic wind is a wind that blows when which two forces are in balance?",
      "options": [
        "Coriolis force and pressure gradient force",
        "Gravity and friction",
        "Centrifugal force and Coriolis force",
        "Friction and pressure gradient force"
      ],
      "correct": 0
    },
    {
      "id": 6,
      "type": "Meteorology",
      "question": "What is the dry adiabatic lapse rate (DALR)?",
      "options": [
        "1.5\u00b0C per 1,000 feet",
        "3.0\u00b0C per 1,000 feet",
        "1.98\u00b0C per 1,000 feet",
        "2.5\u00b0C per 1,000 feet"
      ],
      "correct": 1
    },
    {
      "id": 7,
      "type": "Meteorology",
      "question": "What is the saturated adiabatic lapse rate (SALR) on average?",
      "options": [
        "1.5\u00b0C per 1,000 feet",
        "3.0\u00b0C per 1,000 feet",
        "1.98\u00b0C per 1,000 feet",
        "0.5\u00b0C per 1,000 feet"
      ],
      "correct": 0
    },
    {
      "id": 8,
      "type": "Meteorology",
      "question": "What weather phenomenon is characterized by an increase in temperature with altitude?",
      "options": [
        "Lapse rate",
        "Thermal inversion",
        "Adiabatic heating",
        "Subsided convection"
      ],
      "correct": 1
    },
    {
      "id": 9,
      "type": "Meteorology",
      "question": "What is the primary cause of radiation fog?",
      "options": [
        "Warm moist air moving over a cold surface",
        "Rapid cooling of the Earth's surface on a clear night",
        "Warm rain falling through cold air",
        "Moist air forced up a mountain slope"
      ],
      "correct": 1
    },
    {
      "id": 10,
      "type": "Meteorology",
      "question": "Which type of fog is formed when warm, moist air moves horizontally over a cooler surface?",
      "options": [
        "Radiation fog",
        "Advection fog",
        "Steam fog",
        "Upslope fog"
      ],
      "correct": 1
    },
    {
      "id": 11,
      "type": "Meteorology",
      "question": "What must be true about the temperature and dewpoint spread for fog to form?",
      "options": [
        "The spread must be at least 10\u00b0C",
        "The spread must be within 3\u00b0C or less",
        "The temperature must be below 0\u00b0C",
        "The dewpoint must be higher than temperature"
      ],
      "correct": 1
    },
    {
      "id": 12,
      "type": "Meteorology",
      "question": "What are the three stages of a thunderstorm's lifecycle?",
      "options": [
        "Cumulus, Mature, Dissipating",
        "Developing, Rain, Wind",
        "Incipient, Active, Dying",
        "Convective, Orographic, Frontal"
      ],
      "correct": 0
    },
    {
      "id": 13,
      "type": "Meteorology",
      "question": "In which stage of a thunderstorm lifecycle do updrafts and downdrafts coexist?",
      "options": [
        "Cumulus stage",
        "Mature stage",
        "Dissipating stage",
        "Anvil stage"
      ],
      "correct": 1
    },
    {
      "id": 14,
      "type": "Meteorology",
      "question": "What is the main hazard associated with flight in or near a cumulonimbus cloud?",
      "options": [
        "High pressure zones",
        "Low visibility only",
        "Severe turbulence, wind shear, and icing",
        "Reduced fuel efficiency"
      ],
      "correct": 2
    },
    {
      "id": 15,
      "type": "Meteorology",
      "question": "Which code in a METAR indicates Wind Shear?",
      "options": [
        "WS",
        "WINDSHR",
        "SHEAR",
        "WSHR"
      ],
      "correct": 0
    },
    {
      "id": 16,
      "type": "Meteorology",
      "question": "What does 'CAVOK' stand for in aviation weather reports?",
      "options": [
        "Clear Air Velocity Okay",
        "Clouds and Visibility Okay",
        "Ceiling and Visibility Okay",
        "Clouds and Visibility Over 10km"
      ],
      "correct": 2
    },
    {
      "id": 17,
      "type": "Meteorology",
      "question": "In a METAR, what does the code 'TEMPO 1214 3000' mean?",
      "options": [
        "Temperature between 12\u00b0C and 14\u00b0C at 3,000 feet",
        "Temporary fluctuations between 1200Z and 1400Z with 3,000 meters visibility",
        "Temporary wind of 12 to 14 knots at 3,000 meters",
        "Visibility is 3,000 meters until 1214Z"
      ],
      "correct": 1
    },
    {
      "id": 18,
      "type": "Meteorology",
      "question": "Which type of ice is glassy, hard, and forms when large supercooled water droplets freeze slowly?",
      "options": [
        "Rime ice",
        "Clear ice",
        "Mixed ice",
        "Frost"
      ],
      "correct": 1
    },
    {
      "id": 19,
      "type": "Meteorology",
      "question": "Which cloud type is most likely to produce severe aircraft structural icing?",
      "options": [
        "Cirrus",
        "Stratus",
        "Cumulonimbus",
        "Altocumulus"
      ],
      "correct": 2
    },
    {
      "id": 20,
      "type": "Meteorology",
      "question": "What is a microburst?",
      "options": [
        "A small localized tornado",
        "A severe localized downdraft with strong wind shear",
        "A sudden increase in atmospheric pressure",
        "A minor convective storm"
      ],
      "correct": 1
    },
    {
      "id": 21,
      "type": "Meteorology",
      "question": "What does the abbreviation 'BECMG' in a TAF signify?",
      "options": [
        "Beginning of weather changes",
        "Becoming, indicating a gradual change in weather conditions",
        "Beacon operating mode",
        "Below ceiling minimums"
      ],
      "correct": 1
    },
    {
      "id": 22,
      "type": "Meteorology",
      "question": "What is the primary wind system during the Indian South-West Monsoon?",
      "options": [
        "Easterly Jet Stream",
        "North-Westerly winds",
        "South-Westerly moist winds from the Indian Ocean",
        "Warm dry winds from Tibet"
      ],
      "correct": 2
    },
    {
      "id": 23,
      "type": "Meteorology",
      "question": "What is the approximate height of the tropopause in the equatorial regions?",
      "options": [
        "8 km",
        "11 km",
        "16-18 km",
        "25 km"
      ],
      "correct": 2
    },
    {
      "id": 24,
      "type": "Meteorology",
      "question": "Which of the following is associated with Clear Air Turbulence (CAT)?",
      "options": [
        "Active thunderstorms",
        "Mountain waves and jet streams in cloudless skies",
        "Low-level fog",
        "High-pressure maritime cells"
      ],
      "correct": 1
    },
    {
      "id": 25,
      "type": "Meteorology",
      "question": "What is the pressure at MSL in the International Standard Atmosphere?",
      "options": [
        "1013.25 hPa",
        "29.92 inches of mercury",
        "Both A and B",
        "1000 hPa"
      ],
      "correct": 2
    },
    {
      "id": 26,
      "type": "Meteorology",
      "question": "An altimeter setting of QNH indicates:",
      "options": [
        "Altimeter will read zero on landing",
        "Altimeter will read airfield elevation on landing",
        "Pressure at station level",
        "Pressure at the transition level"
      ],
      "correct": 1
    },
    {
      "id": 27,
      "type": "Meteorology",
      "question": "An altimeter setting of QFE indicates:",
      "options": [
        "Altimeter will read airfield elevation on landing",
        "Altimeter will read height above airfield on landing (zero on landing)",
        "Pressure altitude",
        "Standard atmosphere pressure"
      ],
      "correct": 1
    },
    {
      "id": 28,
      "type": "Meteorology",
      "question": "What weather chart shows predictions of turbulences, icing, and cloud heights for flight planning?",
      "options": [
        "Synoptic Chart",
        "Significant Weather (SIGWX) Chart",
        "Constant Pressure Chart",
        "METAR Chart"
      ],
      "correct": 1
    },
    {
      "id": 29,
      "type": "Meteorology",
      "question": "The Intertropical Convergence Zone (ITCZ) is characterized by:",
      "options": [
        "High pressure and clear skies",
        "Low pressure, convergence of trade winds, and frequent thunderstorms",
        "Persistent westerly jet streams",
        "Strong temperature inversions"
      ],
      "correct": 1
    },
    {
      "id": 30,
      "type": "Meteorology",
      "question": "Which type of wind blows down a mountain slope during the night due to cooling?",
      "options": [
        "Anabatic wind",
        "Katabatic wind",
        "F\u00f6hn wind",
        "Monsoon wind"
      ],
      "correct": 1
    },
    {
      "id": 31,
      "type": "Meteorology",
      "question": "What happens to the density of the air as temperature and humidity increase?",
      "options": [
        "Air density increases",
        "Air density decreases",
        "Air density remains constant",
        "Air density fluctuates unpredictably"
      ],
      "correct": 1
    },
    {
      "id": 32,
      "type": "Meteorology",
      "question": "What type of precipitation falls as very small, uniform water droplets that seem to float?",
      "options": [
        "Drizzle",
        "Rain",
        "Sleet",
        "Hail"
      ],
      "correct": 0
    },
    {
      "id": 33,
      "type": "Meteorology",
      "question": "What is the main characteristic of a stable atmosphere?",
      "options": [
        "Vertical motions are resisted",
        "Convective clouds form quickly",
        "Clear skies and high winds",
        "Frequent squall lines"
      ],
      "correct": 0
    },
    {
      "id": 34,
      "type": "Meteorology",
      "question": "What clouds are typical of an unstable atmosphere?",
      "options": [
        "Stratus and Nimbostratus",
        "Cirrostratus",
        "Cumuliform clouds",
        "Fog"
      ],
      "correct": 2
    },
    {
      "id": 35,
      "type": "Meteorology",
      "question": "In a METAR, 'FZRA' stands for:",
      "options": [
        "Frozen Rain",
        "Freezing Rain",
        "Fine Rain",
        "Foggy Rain"
      ],
      "correct": 1
    },
    {
      "id": 36,
      "type": "Meteorology",
      "question": "The transition boundary between the Troposphere and Stratosphere is called:",
      "options": [
        "Mesopause",
        "Stratopause",
        "Tropopause",
        "Thermopause"
      ],
      "correct": 2
    },
    {
      "id": 37,
      "type": "Meteorology",
      "question": "A line of active, violent thunderstorms stretching ahead of a cold front is called a:",
      "options": [
        "Squall Line",
        "Warm Front",
        "Gust Front",
        "Dryline"
      ],
      "correct": 0
    },
    {
      "id": 38,
      "type": "Meteorology",
      "question": "What does a 'SIGMET' weather advisory contain?",
      "options": [
        "Routine airport observations",
        "Forecasts for small private flights",
        "Information on severe weather hazards like turbulence, icing, and volcanic ash",
        "Local wind trends for next 2 hours"
      ],
      "correct": 2
    },
    {
      "id": 39,
      "type": "Meteorology",
      "question": "The sea breeze is caused by:",
      "options": [
        "The ocean cooling faster than land at night",
        "The land heating faster than the sea during the day",
        "The rotation of the earth",
        "Pressure drops in the upper atmosphere"
      ],
      "correct": 1
    },
    {
      "id": 40,
      "type": "Meteorology",
      "question": "What is the primary indicator of the presence of wind shear?",
      "options": [
        "Sudden changes in wind direction and/or speed",
        "A high relative humidity",
        "Thick low stratiform clouds",
        "A high altimeter setting"
      ],
      "correct": 0
    },
    {
      "id": 41,
      "type": "Meteorology",
      "question": "What is the temperature at tropopause according to ISA?",
      "options": [
        "0\u00b0C",
        "-56.5\u00b0C",
        "-40\u00b0C",
        "-100\u00b0C"
      ],
      "correct": 1
    },
    {
      "id": 42,
      "type": "Meteorology",
      "question": "Which of the following describes 'Advection'?",
      "options": [
        "Vertical movement of air",
        "Horizontal movement of air",
        "Expansion of air",
        "Condensation of moisture"
      ],
      "correct": 1
    },
    {
      "id": 43,
      "type": "Meteorology",
      "question": "A METAR reading '00000KT' indicates:",
      "options": [
        "Calm winds",
        "Variable winds",
        "Wind speed is unknown",
        "100 knots winds"
      ],
      "correct": 0
    },
    {
      "id": 44,
      "type": "Meteorology",
      "question": "What does the code 'BKN015' in a METAR mean?",
      "options": [
        "Broken clouds at 150 feet",
        "Broken clouds at 1,500 feet",
        "Broken clouds at 15,000 feet",
        "Clear skies above 1,500 feet"
      ],
      "correct": 1
    },
    {
      "id": 45,
      "type": "Meteorology",
      "question": "What weather hazard is associated with flying near mountains in high winds?",
      "options": [
        "High-level jet streams",
        "Mountain waves containing severe downdrafts and rotors",
        "Radiation fog",
        "Tropical monsoons"
      ],
      "correct": 1
    },
    {
      "id": 46,
      "type": "Meteorology",
      "question": "What does the weather code 'TSRA' represent in METAR?",
      "options": [
        "Tropical Storm Warning",
        "Thunderstorm with Rain",
        "Temperature Surface Range",
        "Tornado Status Active"
      ],
      "correct": 1
    },
    {
      "id": 47,
      "type": "Meteorology",
      "question": "Which of the following is true regarding pressure systems?",
      "options": [
        "Low pressure systems rotate clockwise in the Northern Hemisphere",
        "High pressure systems rotate counter-clockwise in the Northern Hemisphere",
        "Low pressure systems rotate counter-clockwise in the Northern Hemisphere",
        "High pressure systems have ascending air"
      ],
      "correct": 2
    },
    {
      "id": 48,
      "type": "Meteorology",
      "question": "What is the primary driver of the Earth's global wind patterns?",
      "options": [
        "Coriolis effect only",
        "Unequal heating of the Earth's surface by the Sun",
        "Ocean currents",
        "Volcanic eruptions"
      ],
      "correct": 1
    },
    {
      "id": 49,
      "type": "Meteorology",
      "question": "What are 'supercooled' water droplets?",
      "options": [
        "Water droplets below 0\u00b0C that remain liquid",
        "Ice crystals that have melted",
        "Droplets in high-pressure centers",
        "Droplets that freeze instantly in air"
      ],
      "correct": 0
    },
    {
      "id": 50,
      "type": "Meteorology",
      "question": "What is the main hazard of rime ice on an aircraft?",
      "options": [
        "Increases thrust",
        "Disrupts airflow over wings, decreasing lift and increasing drag/weight",
        "Improves fuel flow",
        "Decreases stall speed"
      ],
      "correct": 1
    },
    {
      "id": 51,
      "type": "Meteorology",
      "question": "What does 'VV002' in a METAR indicate?",
      "options": [
        "Vertical Visibility of 200 feet",
        "Vertical Velocity of 2 knots",
        "Horizontal Visibility of 2 miles",
        "Volume Vector of 2 units"
      ],
      "correct": 0
    },
    {
      "id": 52,
      "type": "Meteorology",
      "question": "A sudden, brief increase in wind speed is called a:",
      "options": [
        "Squall",
        "Gust",
        "Lull",
        "Gale"
      ],
      "correct": 1
    },
    {
      "id": 53,
      "type": "Meteorology",
      "question": "Which instrument is used to measure atmospheric pressure?",
      "options": [
        "Anemometer",
        "Hygrometer",
        "Barometer",
        "Thermometer"
      ],
      "correct": 2
    },
    {
      "id": 54,
      "type": "Meteorology",
      "question": "What does a rapidly falling barometer indicate?",
      "options": [
        "Approaching high-pressure and fair weather",
        "Approaching low-pressure and worsening weather",
        "No change in weather",
        "Calm wind conditions"
      ],
      "correct": 1
    },
    {
      "id": 55,
      "type": "Meteorology",
      "question": "What type of clouds look like high-altitude wispy curls?",
      "options": [
        "Stratus",
        "Cumulus",
        "Cirrus",
        "Altocumulus"
      ],
      "correct": 2
    },
    {
      "id": 56,
      "type": "Meteorology",
      "question": "What is 'Dew Point'?",
      "options": [
        "The temperature at which air must be cooled to become saturated",
        "The temperature of morning condensation",
        "The freezing point of vapor",
        "The absolute humidity index"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "Meteorology",
      "question": "Which wind is a hot, dry wind blowing down the leeward side of the Alps?",
      "options": [
        "Mistral",
        "Scirocco",
        "F\u00f6hn",
        "Bora"
      ],
      "correct": 2
    },
    {
      "id": 58,
      "type": "Meteorology",
      "question": "What does the code 'SQ' stand for in a weather report?",
      "options": [
        "Squall",
        "Snow Quake",
        "Severe Quick Change",
        "Status Quo"
      ],
      "correct": 0
    },
    {
      "id": 59,
      "type": "Meteorology",
      "question": "What is the standard ISA tropopause height?",
      "options": [
        "36,089 feet (11,000 meters)",
        "50,000 feet",
        "20,000 feet",
        "29,920 feet"
      ],
      "correct": 0
    },
    {
      "id": 60,
      "type": "Meteorology",
      "question": "What type of ice is milky white, opaque, and forms when small droplets freeze rapidly upon contact?",
      "options": [
        "Clear ice",
        "Rime ice",
        "Glaze ice",
        "Frost"
      ],
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 2
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 2
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
    },
    {
      "id": 36,
      "type": "Navigation",
      "question": "If you are flying on a heading of 090\u00b0 and the wind is from 180\u00b0, you will experience:",
      "options": [
        "Headwind",
        "Tailwind",
        "Port drift (drift to the left)",
        "Starboard drift (drift to the right)"
      ],
      "correct": 2
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
      "correct": 1
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
      "correct": 1
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
      "correct": 1
    },
    {
      "id": 40,
      "type": "Navigation",
      "question": "A great circle track from A (00\u00b0N 010\u00b0E) to B (00\u00b0N 020\u00b0E) has a constant direction of:",
      "options": [
        "090\u00b0",
        "270\u00b0",
        "180\u00b0",
        "045\u00b0"
      ],
      "correct": 0
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
      "correct": 2
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
      "correct": 1
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
      "correct": 0
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 1
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
      "correct": 1
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
      "correct": 0
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
      "correct": 0
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
      "correct": 1
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
      "correct": 0
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
      "correct": 0
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
      "correct": 0
    },
    {
      "id": 56,
      "type": "Navigation",
      "question": "A great circle track from 60\u00b0N 020\u00b0W to 60\u00b0N 040\u00b0W will have a true course that:",
      "options": [
        "Increases",
        "Decreases",
        "Constant",
        "None of the above"
      ],
      "correct": 1
    },
    {
      "id": 57,
      "type": "Navigation",
      "question": "To fly a heading of 270\u00b0 with a variation of 5\u00b0 East and a deviation of 2\u00b0 West, what compass heading must be flown?",
      "options": [
        "267\u00b0",
        "273\u00b0",
        "265\u00b0",
        "277\u00b0"
      ],
      "correct": 0
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
      "correct": 0
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
      "correct": 0
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
      "correct": 0
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
      "question": "What is the semicircular cruising level rule for an aircraft on a magnetic track of 180\u00b0 to 359\u00b0 flying VFR?",
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
        "Below -20\u00b0C",
        "Between -5\u00b0C and +20\u00b0C",
        "Only below 0\u00b0C",
        "Above +35\u00b0C"
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
      "question": "A QDM of 090\u00b0 represents:",
      "options": [
        "Magnetic track to the station is 090\u00b0",
        "Magnetic track from the station is 090\u00b0",
        "True course is 090\u00b0",
        "Wind angle is 090\u00b0"
      ],
      "correct": 0
    },
    {
      "id": 57,
      "type": "RTR Part 1",
      "question": "A QTE of 180\u00b0 represents:",
      "options": [
        "True bearing of aircraft from station is 180\u00b0",
        "Magnetic bearing to station is 180\u00b0",
        "True heading to station is 180\u00b0",
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
        "-5\u00b0C",
        "0\u00b0C",
        "+5\u00b0C",
        "-15\u00b0C"
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
        "0\u00b0C",
        "15\u00b0C",
        "20\u00b0C",
        "10\u00b0C"
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
        "2\u00b0C per 1,000 ft",
        "1.98\u00b0C per 1,000 ft",
        "6.5\u00b0C per 1,000 meters",
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
      "question": "If you are flying on a true course of 180\u00b0 with a variation of 10\u00b0 West and deviation of 2\u00b0 East, what is your compass course?",
      "options": [
        "188\u00b0",
        "172\u00b0",
        "192\u00b0",
        "168\u00b0"
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
      "question": "If you are flying VFR on a track of 045\u00b0, which cruising altitude is appropriate?",
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
      "question": "What is the speed of sound at -56.5\u00b0C?",
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
      "question": "A great circle track from A (60\u00b0S 170\u00b0E) to B (60\u00b0S 170\u00b0W) crosses the 180\u00b0 meridian. The track angle at the 180\u00b0 meridian is:",
      "options": [
        "090\u00b0",
        "270\u00b0",
        "180\u00b0",
        "045\u00b0"
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
