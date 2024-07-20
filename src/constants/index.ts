import { PawPrint, Search, Shirt, Store, Swords } from "lucide-react";

export const listItems = [
  {
    label: "Pets",
    icon: PawPrint,
    link: "/",
  },
  {
    label: "Gears",
    icon: Swords,
    link: "/gears",
  },
  {
    label: "Garments",
    icon: Shirt,
    link: "/garments",
  },
  {
    label: "Items",
    icon: Store,
    link: "/item",
  },
];

export const servers = [
  "NewYork_Toronto",
  "LA_LasVegas",
  "Cronus",
  "EveGarden",
  "ReturnHero",
  "Minotaur",
  "GreenMirage",
  "GloryHall",
  "SoulAltar",
  "London",
  "RoseHall",
  "Lyra",
  "Mocci",
  "Dimenspace",
  "Olympus",
  "Ceremony",
  "Jin",
  "ElvenCity",
  "Draconis",
  "HeartLake",
  "Avita",
  "LostLand",
];

export enum PetType {
  ZHAO_YUN = "ZHAO_YUN",
  ZHANG_FEI = "ZHANG_FEI",
  MA_CHAO = "MA_CHAO",
  HUANG_ZHONG = "HUANG_ZHONG",
  GUAN_YU = "GUAN_YU",
  SERAPHINA = "SERAPHINA",
  RAGNAR = "RAGNAR",
  MIGHTY_LORD_MINOTAUR = "MIGHTY_LORD_MINOTAUR",
  EOSTRE = "EOSTRE",
  YOUNG_PROPHET = "YOUNG_PROPHET",
  DRAGON_PROPHET = "DRAGON_PROPHET",
  DREAM_WIZARD_MOCCI = "DREAM_WIZARD_MOCCI",
  ETHEREAL_SPIRIT_MOCCI = "ETHEREAL_SPIRIT_MOCCI",
  DREAM_KEEPER = "DREAM_KEEPER",
  CHRONICLE_KEEPER = "CHRONICLE_KEEPER",
  FATED_SWORD = "FATED_SWORD",
  ROSE_KNIGHT_TIFA = "ROSE_KNIGHT_TIFA",
  IMAGINATION_CLOUD = "IMAGINATION_CLOUD",
  SPIRIT_DODO = "SPIRIT_DODO",
  GLORY_LULU = "GLORY_LULU",
  BAHAMUT = "BAHAMUT",
  MAGIC_WINGS_HILL = "MAGIC_WINGS_HILL",
  GLASS_LAURA = "GLASS_LAURA",
  EMERALD_PHIN = "EMERALD_PHIN",
  RAINBOW_DOG_SUGAR = "RAINBOW_DOG_SUGAR",
  BLACK_CHEETAH_CAESAR = "BLACK_CHEETAH_CAESAR",
  SOLAR_KING_THOR = "SOLAR_KING_THOR",
  FORESTWALKER = "FORESTWALKER",
  DREAMFAIRY_LILLA = "DREAMFAIRY_LILLA",
  DREAMFAIRY_RUBY = "DREAMFAIRY_RUBY",
  ABYSS_DRAGON_RAJON = "ABYSS_DRAGON_RAJON",
  SAGE_WUKONG = "SAGE_WUKONG",
  KING_WUKONG = "KING_WUKONG",
  FANTASY_CATCARDUS = "FANTASY_CATCARDUS",
  FROSTWOLF_GLADYS = "FROSTWOLF_GLADYS",
  FROSTWOLF_GHOST = "FROSTWOLF_GHOST",
  DRAGON_DANOS = "DRAGON_DANOS",
  PHOENIX_IRINA = "PHOENIX_IRINA",
  LION_KNIGHT_GRENTH = "LION_KNIGHT_GRENTH",
  DEVOURER_HARBI = "DEVOURER_HARBI",
  DEVIL_PUPPET = "DEVIL_PUPPET",
  LORD_ALLENTALE = "LORD_ALLENTALE",
  SWORDSOUL_ARAZO = "SWORDSOUL_ARAZO",
  DARK_SKULD = "DARK_SKULD",
  SKYROBBER_DAS = "SKYROBBER_DAS",
  WITCH_CELICE = "WITCH_CELICE",
  SHADOW_OF_KORD = "SHADOW_OF_KORD",
  GENERAL_SARVA = "GENERAL_SARVA",
  SILVER_KNIGHT_KUMMEL = "SILVER_KNIGHT_KUMMEL",
  WARLION_PHIL = "WARLION_PHIL",
  ALPACANEMO = "ALPACANEMO",
  ALPACANOVA = "ALPACANOVA",
  FROST_ANTELOPE_PAINE = "FROST_ANTELOPE_PAINE",
  STAR_ANTELOPE_FAHN = "STAR_ANTELOPE_FAHN",
  CHRISTMAS_BEAR_AKAR = "CHRISTMAS_BEAR_AKAR",
  SKYBREAKER = "SKYBREAKER",
  DRAGON_SOUL = "DRAGON_SOUL",
  DEFENDER_SAIVE = "DEFENDER_SAIVE",
  EAGLE_SORRONDA = "EAGLE_SORRONDA",
  APHRODITE_FOX_LUCRECIA = "APHRODITE_FOX_LUCRECIA",
  VENUS_FOX_ALEXIA = "VENUS_FOX_ALEXIA",
  GOLDEN_PEGASUS = "GOLDEN_PEGASUS",
  CRYSTAL_PEGASUS = "CRYSTAL_PEGASUS",
  PEGASUS_PUMPKIN_CARRIAGE = "PEGASUS_PUMPKIN_CARRIAGE",
  GLOOM_DIEGO = "GLOOM_DIEGO",
  GLORY_CITRA = "GLORY_CITRA",
  FEATHER_GALINA = "FEATHER_GALINA",
  SPIRIT_MICAH = "SPIRIT_MICAH",
  SPIRIT_SADIE = "SPIRIT_SADIE",
  AURORA_VIOLET = "AURORA_VIOLET",
  WARRIOR_EASTON = "WARRIOR_EASTON",
  MAGE_ARIA = "MAGE_ARIA",
  ELF_NEVAEH = "ELF_NEVAEH",
  PHANTOM_KUBY = "PHANTOM_KUBY",
  P_ATK_LAYLA = "P_ATK_LAYLA",
  M_ATK_LAYLA = "M_ATK_LAYLA",
  M_DEF_LAYLA = "M_DEF_LAYLA",
  P_DEF_LAYLA = "P_DEF_LAYLA",
  M_ATK_DEF_LAYLA = "M_ATK_DEF_LAYLA",
  P_ATK_DEF_LAYLA = "P_ATK_DEF_LAYLA",
  P_ATK_DYLAN = "P_ATK_DYLAN",
  M_ATK_DYLAN = "M_ATK_DYLAN",
  M_DEF_DYLAN = "M_DEF_DYLAN",
  P_DEF_DYLAN = "P_DEF_DYLAN",
  M_ATK_DEF_DYLAN = "M_ATK_DEF_DYLAN",
  P_ATK_DEF_DYLAN = "P_ATK_DEF_DYLAN",
  RAINBOW_PEGASUS = "RAINBOW_PEGASUS",
  GREEN_WINGED_SNAKE = "GREEN_WINGED_SNAKE",
  WHITE_WINGEDSNAKE = "WHITE_WINGEDSNAKE",
  BEAR_FINNA = "BEAR_FINNA",
  PUPPY_MARIO = "PUPPY_MARIO",
  SANA_SNOW = "SANA_SNOW",
  HERTZ_SNOW = "HERTZ_SNOW",
  DREAM_SLEIGH = "DREAM_SLEIGH",
  AIDOS = "AIDOS",
  LAIRD = "LAIRD",
  ECHO = "ECHO",
  JEWEL = "JEWEL",
  FERRIS = "FERRIS",
  EINAR = "EINAR",
  SAGAR = "SAGAR",
  SOCORRO = "SOCORRO",
  RADCLIFF = "RADCLIFF",
  DUKE_HEINZ = "DUKE_HEINZ",
  WIZARD_GAGE = "WIZARD_GAGE",
  BLOOD_SOUL = "BLOOD_SOUL",
  SACHA = "SACHA",
  WALLY = "WALLY",
  NECRO_SPIRIT = "NECRO_SPIRIT",
  YEDDA = "YEDDA",
  HADES_DEFENDER = "HADES_DEFENDER",
  HADES_HEIR = "HADES_HEIR",
  OPHIR = "OPHIR",
  FANTASY_EMISSARY = "FANTASY_EMISSARY",
  DRAGON_IAN = "DRAGON_IAN",
  AURORA_MOUNT = "AURORA_MOUNT",
  DRAGON_HALE = "DRAGON_HALE",
  LOOMING_EMISSARY = "LOOMING_EMISSARY",
  AZURE_MOUNT = "AZURE_MOUNT",
  FLAME_GUARDIAN = "FLAME_GUARDIAN",
  LIGHT_GUARDIAN = "LIGHT_GUARDIAN",
  FAIRY_OLIVIA = "FAIRY_OLIVIA",
  TIDAL_GUARDIAN = "TIDAL_GUARDIAN",
  EARTH_GUARDIAN = "EARTH_GUARDIAN",
  WATCHER_OREN = "WATCHER_OREN",
  PIXIE = "PIXIE",
  MAGE_PEPPY_LOVE_FALL = "MAGE_PEPPY_LOVE_FALL",
  SHADOW_MAGE_LIZ = "SHADOW_MAGE_LIZ",
  BLOOD_SAGE = "BLOOD_SAGE",
  MAGETINNA = "MAGETINNA",
  HELLFIRE_PIKE = "HELLFIRE_PIKE",
  SIZZLE = "SIZZLE",
  EUDEMON_DIANA = "EUDEMON_DIANA",
  EUDEMON_ADAM = "EUDEMON_ADAM",
  BLOOD_PHANTOM = "BLOOD_PHANTOM",
  MAGEGOS = "MAGEGOS",
  FAIRY_VANYA = "FAIRY_VANYA",
  MAGE_PIPY_LOVE_FALL = "MAGE_PIPY_LOVE_FALL",
  CALLANDRA = "CALLANDRA",
  VALKYRIE = "VALKYRIE",
  M_ATTACK = "M_ATTACK",
  M_DEFENSE = "M_DEFENSE",
  VANQUISHER = "VANQUISHER",
  GEPPY_LOVE_FALL = "GEPPY_LOVE_FALL",
  STORM_SOUL = "STORM_SOUL",
  WARRIOR_CUTE = "WARRIOR_CUTE",
  NANA_LOVE_FALL = "NANA_LOVE_FALL",
  BERSERKER_KAHN = "BERSERKER_KAHN",
  FAIRY_ROMAYN = "FAIRY_ROMAYN",
  VENUS_PHANTOM = "VENUS_PHANTOM",
  REX = "REX",
  NEIL = "NEIL",
  SCRUNCH = "SCRUNCH",
  AUSTIN = "AUSTIN",
  FLORA = "FLORA",
  LANIR = "LANIR",
  LOVEBIRD = "LOVEBIRD",
  VENUS_SAGE = "VENUS_SAGE",
  ATTACK_DEFENSE = "ATTACK_DEFENSE",
  P_DEFENSE = "P_DEFENSE",
  P_ATTACK = "P_ATTACK",
  P_DEFENSE_M_DEFENSE = "P_DEFENSE_M_DEFENSE",
  SAINT_DRAGON = "SAINT_DRAGON",
  UNIVERSAL_O = "UNIVERSAL_O",
  UNIVERSAL_XO = "UNIVERSAL_XO",
  SAINT_O = "SAINT_O",
  SAINT_XO = "SAINT_XO",
  EIDOLON_O = "EIDOLON_O",
  FIRE_RAPTOR = "FIRE_RAPTOR",
  REINDEER = "REINDEER",
  SNOW_RAPTOR = "SNOW_RAPTOR",
  RUBY_DINO = "RUBY_DINO",
  SAPPHIRE_DINO = "SAPPHIRE_DINO",
  FURIOUS_TIGER = "FURIOUS_TIGER",
  WHITE_TIGER = "WHITE_TIGER",
  COPPER_RHINO = "COPPER_RHINO",
  BRONZE_RHINO = "BRONZE_RHINO",
  BANE_JABBERWOCK = "BANE_JABBERWOCK",
  DREAD_JABBERWOCK = "DREAD_JABBERWOCK",
  FLORID_KYLIN = "FLORID_KYLIN",
  SAGE_KYLIN = "SAGE_KYLIN",
  ICY_UNICORN = "ICY_UNICORN",
  GOLDEN_UNICORN = "GOLDEN_UNICORN",
  SAINT_BEAR = "SAINT_BEAR",
  BLAZING_WING = "BLAZING_WING",
  GLACIAL_WING = "GLACIAL_WING",
  EMBER_WYVERN = "EMBER_WYVERN",
  JADE_WYVERN = "JADE_WYVERN",
  FROSTWIND = "FROSTWIND",
  EMBERHEART = "EMBERHEART",
  DRAGON_OZACHY = "DRAGON_OZACHY",
  IMMORTAL_PHOENIX = "IMMORTAL_PHOENIX",
  BELLE = "BELLE",
  GENE = "GENE",
  CYCLOPS = "CYCLOPS",
  AZURE_WHALE = "AZURE_WHALE",
  OCEANA = "OCEANA",
  WINGED_SANDLER = "WINGED_SANDLER",
  BEAR_ZORRO = "BEAR_ZORRO",
  PANDA_PANTICA = "PANDA_PANTICA",
  MINARRA = "MINARRA",
  KARAVOS = "KARAVOS",
  LULU = "LULU",
  MAGE_DODO = "MAGE_DODO",
  MERCUTIO = "MERCUTIO",
  OPHELIA = "OPHELIA",
  IMOGEN = "IMOGEN",
  BENVOLIO = "BENVOLIO",
  SWEET_CATTLE = "SWEET_CATTLE",
  DUKE_CATTLE = "DUKE_CATTLE",
  HAPPY_CATTLE = "HAPPY_CATTLE",
  JOY_CATTLE = "JOY_CATTLE",
  DAINTY_TIGER = "DAINTY_TIGER",
  BOOM_TIGER = "BOOM_TIGER",
  CUTE_TIGER = "CUTE_TIGER",
  SNOW_TIGER = "SNOW_TIGER",
  THUNDER_RABBIT = "THUNDER_RABBIT",
  JAZZY_RABBIT = "JAZZY_RABBIT",
  RABBIT_LORI = "RABBIT_LORI",
  MOONLIGHT_RABBIT = "MOONLIGHT_RABBIT",
  SCORPIO_SAPPHIRE = "SCORPIO_SAPPHIRE",
  SCORPIO_DAWN = "SCORPIO_DAWN",
  SCORPIO_GARTH = "SCORPIO_GARTH",
  SCORPIO_MILLO = "SCORPIO_MILLO",
  LIBRA_SNOW = "LIBRA_SNOW",
  LIBRA_FLAME = "LIBRA_FLAME",
  LIBRA_DEANE = "LIBRA_DEANE",
  LIBRA_DILLON = "LIBRA_DILLON",
  AQUARIUS_GALAXY = "AQUARIUS_GALAXY",
  AQUARIUS_CORAL = "AQUARIUS_CORAL",
  AQUARIUS_LAKI = "AQUARIUS_LAKI",
  AQUARIUS_NAYA = "AQUARIUS_NAYA",
  GEMINI_LIGHT = "GEMINI_LIGHT",
  GEMINI_DARK = "GEMINI_DARK",
  GEMINI_DOOM = "GEMINI_DOOM",
  GEMINI_GENESIS = "GEMINI_GENESIS",
  PISCES_RAINBOW = "PISCES_RAINBOW",
  PISCES_PHANTOM = "PISCES_PHANTOM",
  PISCES_KATI = "PISCES_KATI",
  PISCES_KAMI = "PISCES_KAMI",
  LEO_FLAME = "LEO_FLAME",
  LEO_ICE = "LEO_ICE",
  LEO_MAGE = "LEO_MAGE",
  LEO_BERSERKER = "LEO_BERSERKER",
  SAGITTARIUS_THUNDER = "SAGITTARIUS_THUNDER",
  SAGITTARIUS_BLIZZARD = "SAGITTARIUS_BLIZZARD",
  SAGITTARIUS_BEHEMOTH = "SAGITTARIUS_BEHEMOTH",
  SAGITTARIUS_BRUTE = "SAGITTARIUS_BRUTE",
  ASTRAL_CAPRICORN = "ASTRAL_CAPRICORN",
  CAPRICORN_DONNA = "CAPRICORN_DONNA",
  CAPRICORN_DINA = "CAPRICORN_DINA",
  PALE_CANCER = "PALE_CANCER",
  GOLDEN_CANCER = "GOLDEN_CANCER",
  CANCER_QUEEN = "CANCER_QUEEN",
  CANCER_PRINCESS = "CANCER_PRINCESS",
  TESTY_TAURUS = "TESTY_TAURUS",
  WINTRY_TAURUS = "WINTRY_TAURUS",
  TAURUS_FURIES = "TAURUS_FURIES",
  TAURUS_MARS = "TAURUS_MARS",
  VIRGO_PLUME = "VIRGO_PLUME",
  VIRGO_FROST = "VIRGO_FROST",
  VIRGO_SACHI = "VIRGO_SACHI",
  VIRGO_LENA = "VIRGO_LENA",
  TWILIGHT_ARIES = "TWILIGHT_ARIES",
  GLACIAL_ARIES = "GLACIAL_ARIES",
  ARIES_CARDY = "ARIES_CARDY",
  ARIES_MUBA = "ARIES_MUBA",
}

export const petTypeArray: string[] = Object.values(PetType);