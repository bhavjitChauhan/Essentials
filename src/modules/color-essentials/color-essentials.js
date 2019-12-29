/** @module colorEssentials */

// jshint ignore: start

const VERSION = '0.0.1';

// Color Names Object {
/**
 * Object containing CSS color values.
 * 
 * @constant
 * @type {object}
 * 
 * @example
 * stroke(WHITE);
 * fill(LIGHT_RED);
 * 
 * @link https://en.wikipedia.org/wiki/Lists_of_colors
 */
const colors = {
	'AIR_FORCE_BLUE_RAF': color(93, 138, 168),
	'AIR_FORCE_BLUE_USAF': color(0, 48, 143),
	'AIR_SUPERIORITY_BLUE': color(114, 160, 193),
	'ALABAMA_CRIMSON': color(163, 38, 56),
	'ALICE_BLUE': color(240, 248, 255),
	'ALIZARIN_CRIMSON': color(227, 38, 54),
	'ALLOY_ORANGE': color(196, 98, 16),
	'ALMOND': color(239, 222, 205),
	'AMARANTH': color(229, 43, 80),
	'AMBER': color(255, 191, 0),
	'AMBER_SAE_ECE': color(255, 126, 0),
	'AMERICAN_ROSE': color(255, 3, 62),
	'AMETHYST': color(153, 102, 204),
	'ANDROID_GREEN': color(164, 198, 57),
	'ANTI_FLASH_WHITE': color(242, 243, 244),
	'ANTIQUE_BRASS': color(205, 149, 117),
	'ANTIQUE_FUCHSIA': color(145, 92, 131),
	'ANTIQUE_RUBY': color(132, 27, 45),
	'ANTIQUE_WHITE': color(250, 235, 215),
	'AO_ENGLISH': color(0, 128, 0),
	'APPLE_GREEN': color(141, 182, 0),
	'APRICOT': color(251, 206, 177),
	'AQUA': color(0, 255, 255),
	'AQUAMARINE': color(127, 255, 212),
	'ARMY_GREEN': color(75, 83, 32),
	'ARSENIC': color(59, 68, 75),
	'ARYLIDE_YELLOW': color(233, 214, 107),
	'ASH_GREY': color(178, 190, 181),
	'ASPARAGUS': color(135, 169, 107),
	'ATOMIC_TANGERINE': color(255, 153, 102),
	'AUBURN': color(165, 42, 42),
	'AUREOLIN': color(253, 238, 0),
	'AUROMETALSAURUS': color(110, 127, 128),
	'AVOCADO': color(86, 130, 3),
	'AZURE': color(0, 127, 255),
	'AZURE_MIST_WEB': color(240, 255, 255),
	'BABY_BLUE': color(137, 207, 240),
	'BABY_BLUE_EYES': color(161, 202, 241),
	'BABY_PINK': color(244, 194, 194),
	'BALL_BLUE': color(33, 171, 205),
	'BANANA_MANIA': color(250, 231, 181),
	'BANANA_YELLOW': color(255, 225, 53),
	'BARN_RED': color(124, 10, 2),
	'BATTLESHIP_GREY': color(132, 132, 130),
	'BAZAAR': color(152, 119, 123),
	'BEAU_BLUE': color(188, 212, 230),
	'BEAVER': color(159, 129, 112),
	'BEIGE': color(245, 245, 220),
	'BIG_DIP_O_RUBY': color(156, 37, 66),
	'BISQUE': color(255, 228, 196),
	'BISTRE': color(61, 43, 31),
	'BITTERSWEET': color(254, 111, 94),
	'BITTERSWEET_SHIMMER': color(191, 79, 81),
	'BLACK': color(0, 0, 0),
	'BLACK_BEAN': color(61, 12, 2),
	'BLACK_LEATHER_JACKET': color(37, 53, 41),
	'BLACK_OLIVE': color(59, 60, 54),
	'BLANCHED_ALMOND': color(255, 235, 205),
	'BLAST_OFF_BRONZE': color(165, 113, 100),
	'BLEU_DE_FRANCE': color(49, 140, 231),
	'BLIZZARD_BLUE': color(172, 229, 238),
	'BLOND': color(250, 240, 190),
	'BLUE': color(0, 0, 255),
	'BLUE_BELL': color(162, 162, 208),
	'BLUE_CRAYOLA': color(31, 117, 254),
	'BLUE_GRAY': color(102, 153, 204),
	'BLUE_GREEN': color(13, 152, 186),
	'BLUE_MUNSELL': color(0, 147, 175),
	'BLUE_NCS': color(0, 135, 189),
	'BLUE_PIGMENT': color(51, 51, 153),
	'BLUE_RYB': color(2, 71, 254),
	'BLUE_SAPPHIRE': color(18, 97, 128),
	'BLUE_VIOLET': color(138, 43, 226),
	'BLUSH': color(222, 93, 131),
	'BOLE': color(121, 68, 59),
	'BONDI_BLUE': color(0, 149, 182),
	'BONE': color(227, 218, 201),
	'BOSTON_UNIVERSITY_RED': color(204, 0, 0),
	'BOTTLE_GREEN': color(0, 106, 78),
	'BOYSENBERRY': color(135, 50, 96),
	'BRANDEIS_BLUE': color(0, 112, 255),
	'BRASS': color(181, 166, 66),
	'BRICK_RED': color(203, 65, 84),
	'BRIGHT_CERULEAN': color(29, 172, 214),
	'BRIGHT_GREEN': color(102, 255, 0),
	'BRIGHT_LAVENDER': color(191, 148, 228),
	'BRIGHT_MAROON': color(195, 33, 72),
	'BRIGHT_PINK': color(255, 0, 127),
	'BRIGHT_TURQUOISE': color(8, 232, 222),
	'BRIGHT_UBE': color(209, 159, 232),
	'BRILLIANT_LAVENDER': color(244, 187, 255),
	'BRILLIANT_ROSE': color(255, 85, 163),
	'BRINK_PINK': color(251, 96, 127),
	'BRITISH_RACING_GREEN': color(0, 66, 37),
	'BRONZE': color(205, 127, 50),
	'BROWN_TRADITIONAL': color(150, 75, 0),
	'BROWN_WEB': color(165, 42, 42),
	'BUBBLE_GUM': color(255, 193, 204),
	'BUBBLES': color(231, 254, 255),
	'BUFF': color(240, 220, 130),
	'BULGARIAN_ROSE': color(72, 6, 7),
	'BURGUNDY': color(128, 0, 32),
	'BURLYWOOD': color(222, 184, 135),
	'BURNT_ORANGE': color(204, 85, 0),
	'BURNT_SIENNA': color(233, 116, 81),
	'BURNT_UMBER': color(138, 51, 36),
	'BYZANTINE': color(189, 51, 164),
	'BYZANTIUM': color(112, 41, 99),
	'CADET': color(83, 104, 114),
	'CADET_BLUE': color(95, 158, 160),
	'CADET_GREY': color(145, 163, 176),
	'CADMIUM_GREEN': color(0, 107, 60),
	'CADMIUM_ORANGE': color(237, 135, 45),
	'CADMIUM_RED': color(227, 0, 34),
	'CADMIUM_YELLOW': color(255, 246, 0),
	'CAF_AU_LAIT': color(166, 123, 91),
	'CAF_NOIR': color(75, 54, 33),
	'CAL_POLY_GREEN': color(30, 77, 43),
	'CAMBRIDGE_BLUE': color(163, 193, 173),
	'CAMEL': color(193, 154, 107),
	'CAMEO_PINK': color(239, 187, 204),
	'CAMOUFLAGE_GREEN': color(120, 134, 107),
	'CANARY_YELLOW': color(255, 239, 0),
	'CANDY_APPLE_RED': color(255, 8, 0),
	'CANDY_PINK': color(228, 113, 122),
	'CAPRI': color(0, 191, 255),
	'CAPUT_MORTUUM': color(89, 39, 32),
	'CARDINAL': color(196, 30, 58),
	'CARIBBEAN_GREEN': color(0, 204, 153),
	'CARMINE': color(150, 0, 24),
	'CARMINE_M_P': color(215, 0, 64),
	'CARMINE_PINK': color(235, 76, 66),
	'CARMINE_RED': color(255, 0, 56),
	'CARNATION_PINK': color(255, 166, 201),
	'CARNELIAN': color(179, 27, 27),
	'CAROLINA_BLUE': color(153, 186, 221),
	'CARROT_ORANGE': color(237, 145, 33),
	'CATALINA_BLUE': color(6, 42, 120),
	'CEIL': color(146, 161, 207),
	'CELADON': color(172, 225, 175),
	'CELADON_BLUE': color(0, 123, 167),
	'CELADON_GREEN': color(47, 132, 124),
	'CELESTE_COLOUR': color(178, 255, 255),
	'CELESTIAL_BLUE': color(73, 151, 208),
	'CERISE': color(222, 49, 99),
	'CERISE_PINK': color(236, 59, 131),
	'CERULEAN': color(0, 123, 167),
	'CERULEAN_BLUE': color(42, 82, 190),
	'CERULEAN_FROST': color(109, 155, 195),
	'CG_BLUE': color(0, 122, 165),
	'CG_RED': color(224, 60, 49),
	'CHAMOISEE': color(160, 120, 90),
	'CHAMPAGNE': color(250, 214, 165),
	'CHARCOAL': color(54, 69, 79),
	'CHARM_PINK': color(230, 143, 172),
	'CHARTREUSE_TRADITIONAL': color(223, 255, 0),
	'CHARTREUSE_WEB': color(127, 255, 0),
	'CHERRY': color(222, 49, 99),
	'CHERRY_BLOSSOM_PINK': color(255, 183, 197),
	'CHESTNUT': color(205, 92, 92),
	'CHINA_PINK': color(222, 111, 161),
	'CHINA_ROSE': color(168, 81, 110),
	'CHINESE_RED': color(170, 56, 30),
	'CHOCOLATE_TRADITIONAL': color(123, 63, 0),
	'CHOCOLATE_WEB': color(210, 105, 30),
	'CHROME_YELLOW': color(255, 167, 0),
	'CINEREOUS': color(152, 129, 123),
	'CINNABAR': color(227, 66, 52),
	'CINNAMON': color(210, 105, 30),
	'CITRINE': color(228, 208, 10),
	'CLASSIC_ROSE': color(251, 204, 231),
	'COBALT': color(0, 71, 171),
	'COCOA_BROWN': color(210, 105, 30),
	'COFFEE': color(111, 78, 55),
	'COLUMBIA_BLUE': color(155, 221, 255),
	'CONGO_PINK': color(248, 131, 121),
	'COOL_BLACK': color(0, 46, 99),
	'COOL_GREY': color(140, 146, 172),
	'COPPER': color(184, 115, 51),
	'COPPER_CRAYOLA': color(218, 138, 103),
	'COPPER_PENNY': color(173, 111, 105),
	'COPPER_RED': color(203, 109, 81),
	'COPPER_ROSE': color(153, 102, 102),
	'COQUELICOT': color(255, 56, 0),
	'CORAL': color(255, 127, 80),
	'CORAL_PINK': color(248, 131, 121),
	'CORAL_RED': color(255, 64, 64),
	'CORDOVAN': color(137, 63, 69),
	'CORN': color(251, 236, 93),
	'CORNELL_RED': color(179, 27, 27),
	'CORNFLOWER_BLUE': color(100, 149, 237),
	'CORNSILK': color(255, 248, 220),
	'COSMIC_LATTE': color(255, 248, 231),
	'COTTON_CANDY': color(255, 188, 217),
	'CREAM': color(255, 253, 208),
	'CRIMSON': color(220, 20, 60),
	'CRIMSON_GLORY': color(190, 0, 50),
	'CYAN': color(0, 255, 255),
	'CYAN_PROCESS': color(0, 183, 235),
	'DAFFODIL': color(255, 255, 49),
	'DANDELION': color(240, 225, 48),
	'DARK_BLUE': color(0, 0, 139),
	'DARK_BROWN': color(101, 67, 33),
	'DARK_BYZANTIUM': color(93, 57, 84),
	'DARK_CANDY_APPLE_RED': color(164, 0, 0),
	'DARK_CERULEAN': color(8, 69, 126),
	'DARK_CHESTNUT': color(152, 105, 96),
	'DARK_CORAL': color(205, 91, 69),
	'DARK_CYAN': color(0, 139, 139),
	'DARK_ELECTRIC_BLUE': color(83, 104, 120),
	'DARK_GOLDENROD': color(184, 134, 11),
	'DARK_GRAY': color(169, 169, 169),
	'DARK_GREEN': color(1, 50, 32),
	'DARK_IMPERIAL_BLUE': color(0, 65, 106),
	'DARK_JUNGLE_GREEN': color(26, 36, 33),
	'DARK_KHAKI': color(189, 183, 107),
	'DARK_LAVA': color(72, 60, 50),
	'DARK_LAVENDER': color(115, 79, 150),
	'DARK_MAGENTA': color(139, 0, 139),
	'DARK_MIDNIGHT_BLUE': color(0, 51, 102),
	'DARK_OLIVE_GREEN': color(85, 107, 47),
	'DARK_ORANGE': color(255, 140, 0),
	'DARK_ORCHID': color(153, 50, 204),
	'DARK_PASTEL_BLUE': color(119, 158, 203),
	'DARK_PASTEL_GREEN': color(3, 192, 60),
	'DARK_PASTEL_PURPLE': color(150, 111, 214),
	'DARK_PASTEL_RED': color(194, 59, 34),
	'DARK_PINK': color(231, 84, 128),
	'DARK_POWDER_BLUE': color(0, 51, 153),
	'DARK_RASPBERRY': color(135, 38, 87),
	'DARK_RED': color(139, 0, 0),
	'DARK_SALMON': color(233, 150, 122),
	'DARK_SCARLET': color(86, 3, 25),
	'DARK_SEA_GREEN': color(143, 188, 143),
	'DARK_SIENNA': color(60, 20, 20),
	'DARK_SLATE_BLUE': color(72, 61, 139),
	'DARK_SLATE_GRAY': color(47, 79, 79),
	'DARK_SPRING_GREEN': color(23, 114, 69),
	'DARK_TAN': color(145, 129, 81),
	'DARK_TANGERINE': color(255, 168, 18),
	'DARK_TAUPE': color(72, 60, 50),
	'DARK_TERRA_COTTA': color(204, 78, 92),
	'DARK_TURQUOISE': color(0, 206, 209),
	'DARK_VIOLET': color(148, 0, 211),
	'DARK_YELLOW': color(155, 135, 12),
	'DARTMOUTH_GREEN': color(0, 112, 60),
	'DAVY_S_GREY': color(85, 85, 85),
	'DEBIAN_RED': color(215, 10, 83),
	'DEEP_CARMINE': color(169, 32, 62),
	'DEEP_CARMINE_PINK': color(239, 48, 56),
	'DEEP_CARROT_ORANGE': color(233, 105, 44),
	'DEEP_CERISE': color(218, 50, 135),
	'DEEP_CHAMPAGNE': color(250, 214, 165),
	'DEEP_CHESTNUT': color(185, 78, 72),
	'DEEP_COFFEE': color(112, 66, 65),
	'DEEP_FUCHSIA': color(193, 84, 193),
	'DEEP_JUNGLE_GREEN': color(0, 75, 73),
	'DEEP_LILAC': color(153, 85, 187),
	'DEEP_MAGENTA': color(204, 0, 204),
	'DEEP_PEACH': color(255, 203, 164),
	'DEEP_PINK': color(255, 20, 147),
	'DEEP_RUBY': color(132, 63, 91),
	'DEEP_SAFFRON': color(255, 153, 51),
	'DEEP_SKY_BLUE': color(0, 191, 255),
	'DEEP_TUSCAN_RED': color(102, 66, 77),
	'DENIM': color(21, 96, 189),
	'DESERT': color(193, 154, 107),
	'DESERT_SAND': color(237, 201, 175),
	'DIM_GRAY': color(105, 105, 105),
	'DODGER_BLUE': color(30, 144, 255),
	'DOGWOOD_ROSE': color(215, 24, 104),
	'DOLLAR_BILL': color(133, 187, 101),
	'DRAB': color(150, 113, 23),
	'DUKE_BLUE': color(0, 0, 156),
	'EARTH_YELLOW': color(225, 169, 95),
	'EBONY': color(85, 93, 80),
	'ECRU': color(194, 178, 128),
	'EGGPLANT': color(97, 64, 81),
	'EGGSHELL': color(240, 234, 214),
	'EGYPTIAN_BLUE': color(16, 52, 166),
	'ELECTRIC_BLUE': color(125, 249, 255),
	'ELECTRIC_CRIMSON': color(255, 0, 63),
	'ELECTRIC_CYAN': color(0, 255, 255),
	'ELECTRIC_GREEN': color(0, 255, 0),
	'ELECTRIC_INDIGO': color(111, 0, 255),
	'ELECTRIC_LAVENDER': color(244, 187, 255),
	'ELECTRIC_LIME': color(204, 255, 0),
	'ELECTRIC_PURPLE': color(191, 0, 255),
	'ELECTRIC_ULTRAMARINE': color(63, 0, 255),
	'ELECTRIC_VIOLET': color(143, 0, 255),
	'ELECTRIC_YELLOW': color(255, 255, 0),
	'EMERALD': color(80, 200, 120),
	'ENGLISH_LAVENDER': color(180, 131, 149),
	'ETON_BLUE': color(150, 200, 162),
	'FALLOW': color(193, 154, 107),
	'FALU_RED': color(128, 24, 24),
	'FANDANGO': color(181, 51, 137),
	'FASHION_FUCHSIA': color(244, 0, 161),
	'FAWN': color(229, 170, 112),
	'FELDGRAU': color(77, 93, 83),
	'FERN_GREEN': color(79, 121, 66),
	'FERRARI_RED': color(255, 40, 0),
	'FIELD_DRAB': color(108, 84, 30),
	'FIRE_ENGINE_RED': color(206, 32, 41),
	'FIREBRICK': color(178, 34, 34),
	'FLAME': color(226, 88, 34),
	'FLAMINGO_PINK': color(252, 142, 172),
	'FLAVESCENT': color(247, 233, 142),
	'FLAX': color(238, 220, 130),
	'FLORAL_WHITE': color(255, 250, 240),
	'FLUORESCENT_ORANGE': color(255, 191, 0),
	'FLUORESCENT_PINK': color(255, 20, 147),
	'FLUORESCENT_YELLOW': color(204, 255, 0),
	'FOLLY': color(255, 0, 79),
	'FOREST_GREEN_TRADITIONAL': color(1, 68, 33),
	'FOREST_GREEN_WEB': color(34, 139, 34),
	'FRENCH_BEIGE': color(166, 123, 91),
	'FRENCH_BLUE': color(0, 114, 187),
	'FRENCH_LILAC': color(134, 96, 142),
	'FRENCH_LIME': color(204, 255, 0),
	'FRENCH_RASPBERRY': color(199, 44, 72),
	'FRENCH_ROSE': color(246, 74, 138),
	'FUCHSIA': color(255, 0, 255),
	'FUCHSIA_CRAYOLA': color(193, 84, 193),
	'FUCHSIA_PINK': color(255, 119, 255),
	'FUCHSIA_ROSE': color(199, 67, 117),
	'FULVOUS': color(228, 132, 0),
	'FUZZY_WUZZY': color(204, 102, 102),
	'GAINSBORO': color(220, 220, 220),
	'GAMBOGE': color(228, 155, 15),
	'GHOST_WHITE': color(248, 248, 255),
	'GINGER': color(176, 101, 0),
	'GLAUCOUS': color(96, 130, 182),
	'GLITTER': color(230, 232, 250),
	'GOLD_METALLIC': color(212, 175, 55),
	'GOLD_WEB_GOLDEN': color(255, 215, 0),
	'GOLDEN_BROWN': color(153, 101, 21),
	'GOLDEN_POPPY': color(252, 194, 0),
	'GOLDEN_YELLOW': color(255, 223, 0),
	'GOLDENROD': color(218, 165, 32),
	'GRANNY_SMITH_APPLE': color(168, 228, 160),
	'GRAY': color(128, 128, 128),
	'GRAY_ASPARAGUS': color(70, 89, 69),
	'GRAY_HTML_CSS_GRAY': color(128, 128, 128),
	'GRAY_X11_GRAY': color(190, 190, 190),
	'GREEN_COLOR_WHEEL_X11_GREEN': color(0, 255, 0),
	'GREEN_CRAYOLA': color(28, 172, 120),
	'GREEN_HTML_CSS_GREEN': color(0, 128, 0),
	'GREEN_MUNSELL': color(0, 168, 119),
	'GREEN_NCS': color(0, 159, 107),
	'GREEN_PIGMENT': color(0, 165, 80),
	'GREEN_RYB': color(102, 176, 50),
	'GREEN_YELLOW': color(173, 255, 47),
	'GRULLO': color(169, 154, 134),
	'GUPPIE_GREEN': color(0, 255, 127),
	'HALAY_BE': color(102, 56, 84),
	'HAN_BLUE': color(68, 108, 207),
	'HAN_PURPLE': color(82, 24, 250),
	'HANSA_YELLOW': color(233, 214, 107),
	'HARLEQUIN': color(63, 255, 0),
	'HARVARD_CRIMSON': color(201, 0, 22),
	'HARVEST_GOLD': color(218, 145, 0),
	'HEART_GOLD': color(128, 128, 0),
	'HELIOTROPE': color(223, 115, 255),
	'HOLLYWOOD_CERISE': color(244, 0, 161),
	'HONEYDEW': color(240, 255, 240),
	'HONOLULU_BLUE': color(0, 127, 191),
	'HOOKER_S_GREEN': color(73, 121, 107),
	'HOT_MAGENTA': color(255, 29, 206),
	'HOT_PINK': color(255, 105, 180),
	'HUNTER_GREEN': color(53, 94, 59),
	'ICEBERG': color(113, 166, 210),
	'ICTERINE': color(252, 247, 94),
	'IMPERIAL_BLUE': color(0, 35, 149),
	'INCHWORM': color(178, 236, 93),
	'INDIA_GREEN': color(19, 136, 8),
	'INDIAN_RED': color(205, 92, 92),
	'INDIAN_YELLOW': color(227, 168, 87),
	'INDIGO': color(111, 0, 255),
	'INDIGO_DYE': color(0, 65, 106),
	'INDIGO_WEB': color(75, 0, 130),
	'INTERNATIONAL_KLEIN_BLUE': color(0, 47, 167),
	'INTERNATIONAL_ORANGE_AEROSPACE': color(255, 79, 0),
	'INTERNATIONAL_ORANGE_ENGINEERING': color(186, 22, 12),
	'INTERNATIONAL_ORANGE_GOLDEN_GATE_BRIDGE': color(192, 54, 44),
	'IRIS': color(90, 79, 207),
	'ISABELLINE': color(244, 240, 236),
	'ISLAMIC_GREEN': color(0, 144, 0),
	'IVORY': color(255, 255, 240),
	'JADE': color(0, 168, 107),
	'JASMINE': color(248, 222, 126),
	'JASPER': color(215, 59, 62),
	'JAZZBERRY_JAM': color(165, 11, 94),
	'JET': color(52, 52, 52),
	'JONQUIL': color(250, 218, 94),
	'JUNE_BUD': color(189, 218, 87),
	'JUNGLE_GREEN': color(41, 171, 135),
	'KELLY_GREEN': color(76, 187, 23),
	'KENYAN_COPPER': color(124, 28, 5),
	'KHAKI_HTML_CSS_KHAKI': color(195, 176, 145),
	'KHAKI_X11_LIGHT_KHAKI': color(240, 230, 140),
	'KU_CRIMSON': color(232, 0, 13),
	'LA_SALLE_GREEN': color(8, 120, 48),
	'LANGUID_LAVENDER': color(214, 202, 221),
	'LAPIS_LAZULI': color(38, 97, 156),
	'LASER_LEMON': color(254, 254, 34),
	'LAUREL_GREEN': color(169, 186, 157),
	'LAVA': color(207, 16, 32),
	'LAVENDER_BLUE': color(204, 204, 255),
	'LAVENDER_BLUSH': color(255, 240, 245),
	'LAVENDER_FLORAL': color(181, 126, 220),
	'LAVENDER_GRAY': color(196, 195, 208),
	'LAVENDER_INDIGO': color(148, 87, 235),
	'LAVENDER_MAGENTA': color(238, 130, 238),
	'LAVENDER_MIST': color(230, 230, 250),
	'LAVENDER_PINK': color(251, 174, 210),
	'LAVENDER_PURPLE': color(150, 123, 182),
	'LAVENDER_ROSE': color(251, 160, 227),
	'LAVENDER_WEB': color(230, 230, 250),
	'LAWN_GREEN': color(124, 252, 0),
	'LEMON': color(255, 247, 0),
	'LEMON_CHIFFON': color(255, 250, 205),
	'LEMON_LIME': color(227, 255, 0),
	'LICORICE': color(26, 17, 16),
	'LIGHT_APRICOT': color(253, 213, 177),
	'LIGHT_BLUE': color(173, 216, 230),
	'LIGHT_BROWN': color(181, 101, 29),
	'LIGHT_CARMINE_PINK': color(230, 103, 113),
	'LIGHT_CORAL': color(240, 128, 128),
	'LIGHT_CORNFLOWER_BLUE': color(147, 204, 234),
	'LIGHT_CRIMSON': color(245, 105, 145),
	'LIGHT_CYAN': color(224, 255, 255),
	'LIGHT_FUCHSIA_PINK': color(249, 132, 239),
	'LIGHT_GOLDENROD_YELLOW': color(250, 250, 210),
	'LIGHT_GRAY': color(211, 211, 211),
	'LIGHT_GREEN': color(144, 238, 144),
	'LIGHT_KHAKI': color(240, 230, 140),
	'LIGHT_PASTEL_PURPLE': color(177, 156, 217),
	'LIGHT_PINK': color(255, 182, 193),
	'LIGHT_RED_OCHRE': color(233, 116, 81),
	'LIGHT_SALMON': color(255, 160, 122),
	'LIGHT_SALMON_PINK': color(255, 153, 153),
	'LIGHT_SEA_GREEN': color(32, 178, 170),
	'LIGHT_SKY_BLUE': color(135, 206, 250),
	'LIGHT_SLATE_GRAY': color(119, 136, 153),
	'LIGHT_TAUPE': color(179, 139, 109),
	'LIGHT_THULIAN_PINK': color(230, 143, 172),
	'LIGHT_YELLOW': color(255, 255, 224),
	'LILAC': color(200, 162, 200),
	'LIME_COLOR_WHEEL': color(191, 255, 0),
	'LIME_GREEN': color(50, 205, 50),
	'LIME_WEB_X11_GREEN': color(0, 255, 0),
	'LIMERICK': color(157, 194, 9),
	'LINCOLN_GREEN': color(25, 89, 5),
	'LINEN': color(250, 240, 230),
	'LION': color(193, 154, 107),
	'LITTLE_BOY_BLUE': color(108, 160, 220),
	'LIVER': color(83, 75, 79),
	'LUST': color(230, 32, 32),
	'MAGENTA': color(255, 0, 255),
	'MAGENTA_DYE': color(202, 31, 123),
	'MAGENTA_PROCESS': color(255, 0, 144),
	'MAGIC_MINT': color(170, 240, 209),
	'MAGNOLIA': color(248, 244, 255),
	'MAHOGANY': color(192, 64, 0),
	'MAIZE': color(251, 236, 93),
	'MAJORELLE_BLUE': color(96, 80, 220),
	'MALACHITE': color(11, 218, 81),
	'MANATEE': color(151, 154, 170),
	'MANGO_TANGO': color(255, 130, 67),
	'MANTIS': color(116, 195, 101),
	'MARDI_GRAS': color(136, 0, 133),
	'MAROON_CRAYOLA': color(195, 33, 72),
	'MAROON_HTML_CSS': color(128, 0, 0),
	'MAROON_X11': color(176, 48, 96),
	'MAUVE': color(224, 176, 255),
	'MAUVE_TAUPE': color(145, 95, 109),
	'MAUVELOUS': color(239, 152, 170),
	'MAYA_BLUE': color(115, 194, 251),
	'MEAT_BROWN': color(229, 183, 59),
	'MEDIUM_AQUAMARINE': color(102, 221, 170),
	'MEDIUM_BLUE': color(0, 0, 205),
	'MEDIUM_CANDY_APPLE_RED': color(226, 6, 44),
	'MEDIUM_CARMINE': color(175, 64, 53),
	'MEDIUM_CHAMPAGNE': color(243, 229, 171),
	'MEDIUM_ELECTRIC_BLUE': color(3, 80, 150),
	'MEDIUM_JUNGLE_GREEN': color(28, 53, 45),
	'MEDIUM_LAVENDER_MAGENTA': color(221, 160, 221),
	'MEDIUM_ORCHID': color(186, 85, 211),
	'MEDIUM_PERSIAN_BLUE': color(0, 103, 165),
	'MEDIUM_PURPLE': color(147, 112, 219),
	'MEDIUM_RED_VIOLET': color(187, 51, 133),
	'MEDIUM_RUBY': color(170, 64, 105),
	'MEDIUM_SEA_GREEN': color(60, 179, 113),
	'MEDIUM_SLATE_BLUE': color(123, 104, 238),
	'MEDIUM_SPRING_BUD': color(201, 220, 135),
	'MEDIUM_SPRING_GREEN': color(0, 250, 154),
	'MEDIUM_TAUPE': color(103, 76, 71),
	'MEDIUM_TURQUOISE': color(72, 209, 204),
	'MEDIUM_TUSCAN_RED': color(121, 68, 59),
	'MEDIUM_VERMILION': color(217, 96, 59),
	'MEDIUM_VIOLET_RED': color(199, 21, 133),
	'MELLOW_APRICOT': color(248, 184, 120),
	'MELLOW_YELLOW': color(248, 222, 126),
	'MELON': color(253, 188, 180),
	'MIDNIGHT_BLUE': color(25, 25, 112),
	'MIDNIGHT_GREEN_EAGLE_GREEN': color(0, 73, 83),
	'MIKADO_YELLOW': color(255, 196, 12),
	'MINT': color(62, 180, 137),
	'MINT_CREAM': color(245, 255, 250),
	'MINT_GREEN': color(152, 255, 152),
	'MISTY_ROSE': color(255, 228, 225),
	'MOCCASIN': color(250, 235, 215),
	'MODE_BEIGE': color(150, 113, 23),
	'MOONSTONE_BLUE': color(115, 169, 194),
	'MORDANT_RED_19': color(174, 12, 0),
	'MOSS_GREEN': color(173, 223, 173),
	'MOUNTAIN_MEADOW': color(48, 186, 143),
	'MOUNTBATTEN_PINK': color(153, 122, 141),
	'MSU_GREEN': color(24, 69, 59),
	'MULBERRY': color(197, 75, 140),
	'MUSTARD': color(255, 219, 88),
	'MYRTLE': color(33, 66, 30),
	'NADESHIKO_PINK': color(246, 173, 198),
	'NAPIER_GREEN': color(42, 128, 0),
	'NAPLES_YELLOW': color(250, 218, 94),
	'NAVAJO_WHITE': color(255, 222, 173),
	'NAVY_BLUE': color(0, 0, 128),
	'NEON_CARROT': color(255, 163, 67),
	'NEON_FUCHSIA': color(254, 65, 100),
	'NEON_GREEN': color(57, 255, 20),
	'NEW_YORK_PINK': color(215, 131, 127),
	'NON_PHOTO_BLUE': color(164, 221, 237),
	'NORTH_TEXAS_GREEN': color(5, 144, 51),
	'OCEAN_BOAT_BLUE': color(0, 119, 190),
	'OCHRE': color(204, 119, 34),
	'OFFICE_GREEN': color(0, 128, 0),
	'OLD_GOLD': color(207, 181, 59),
	'OLD_LACE': color(253, 245, 230),
	'OLD_LAVENDER': color(121, 104, 120),
	'OLD_MAUVE': color(103, 49, 71),
	'OLD_ROSE': color(192, 128, 129),
	'OLIVE': color(128, 128, 0),
	'OLIVE_DRAB_7': color(60, 52, 31),
	'OLIVE_DRAB_WEB_OLIVE_DRAB_3': color(107, 142, 35),
	'OLIVINE': color(154, 185, 115),
	'ONYX': color(53, 56, 57),
	'OPERA_MAUVE': color(183, 132, 167),
	'ORANGE_COLOR_WHEEL': color(255, 127, 0),
	'ORANGE_PEEL': color(255, 159, 0),
	'ORANGE_RED': color(255, 69, 0),
	'ORANGE_RYB': color(251, 153, 2),
	'ORANGE_WEB_COLOR': color(255, 165, 0),
	'ORCHID': color(218, 112, 214),
	'OTTER_BROWN': color(101, 67, 33),
	'OU_CRIMSON_RED': color(153, 0, 0),
	'OUTER_SPACE': color(65, 74, 76),
	'OUTRAGEOUS_ORANGE': color(255, 110, 74),
	'OXFORD_BLUE': color(0, 33, 71),
	'PAKISTAN_GREEN': color(0, 102, 0),
	'PALATINATE_BLUE': color(39, 59, 226),
	'PALATINATE_PURPLE': color(104, 40, 96),
	'PALE_AQUA': color(188, 212, 230),
	'PALE_BLUE': color(175, 238, 238),
	'PALE_BROWN': color(152, 118, 84),
	'PALE_CARMINE': color(175, 64, 53),
	'PALE_CERULEAN': color(155, 196, 226),
	'PALE_CHESTNUT': color(221, 173, 175),
	'PALE_COPPER': color(218, 138, 103),
	'PALE_CORNFLOWER_BLUE': color(171, 205, 239),
	'PALE_GOLD': color(230, 190, 138),
	'PALE_GOLDENROD': color(238, 232, 170),
	'PALE_GREEN': color(152, 251, 152),
	'PALE_LAVENDER': color(220, 208, 255),
	'PALE_MAGENTA': color(249, 132, 229),
	'PALE_PINK': color(250, 218, 221),
	'PALE_PLUM': color(221, 160, 221),
	'PALE_RED_VIOLET': color(219, 112, 147),
	'PALE_ROBIN_EGG_BLUE': color(150, 222, 209),
	'PALE_SILVER': color(201, 192, 187),
	'PALE_SPRING_BUD': color(236, 235, 189),
	'PALE_TAUPE': color(188, 152, 126),
	'PALE_VIOLET_RED': color(219, 112, 147),
	'PANSY_PURPLE': color(120, 24, 74),
	'PAPAYA_WHIP': color(255, 239, 213),
	'PARIS_GREEN': color(80, 200, 120),
	'PASTEL_BLUE': color(174, 198, 207),
	'PASTEL_BROWN': color(131, 105, 83),
	'PASTEL_GRAY': color(207, 207, 196),
	'PASTEL_GREEN': color(119, 221, 119),
	'PASTEL_MAGENTA': color(244, 154, 194),
	'PASTEL_ORANGE': color(255, 179, 71),
	'PASTEL_PINK': color(222, 165, 164),
	'PASTEL_PURPLE': color(179, 158, 181),
	'PASTEL_RED': color(255, 105, 97),
	'PASTEL_VIOLET': color(203, 153, 201),
	'PASTEL_YELLOW': color(253, 253, 150),
	'PATRIARCH': color(128, 0, 128),
	'PAYNE_S_GREY': color(83, 104, 120),
	'PEACH': color(255, 229, 180),
	'PEACH_CRAYOLA': color(255, 203, 164),
	'PEACH_ORANGE': color(255, 204, 153),
	'PEACH_PUFF': color(255, 218, 185),
	'PEACH_YELLOW': color(250, 223, 173),
	'PEAR': color(209, 226, 49),
	'PEARL': color(234, 224, 200),
	'PEARL_AQUA': color(136, 216, 192),
	'PEARLY_PURPLE': color(183, 104, 162),
	'PERIDOT': color(230, 226, 0),
	'PERIWINKLE': color(204, 204, 255),
	'PERSIAN_BLUE': color(28, 57, 187),
	'PERSIAN_GREEN': color(0, 166, 147),
	'PERSIAN_INDIGO': color(50, 18, 122),
	'PERSIAN_ORANGE': color(217, 144, 88),
	'PERSIAN_PINK': color(247, 127, 190),
	'PERSIAN_PLUM': color(112, 28, 28),
	'PERSIAN_RED': color(204, 51, 51),
	'PERSIAN_ROSE': color(254, 40, 162),
	'PERSIMMON': color(236, 88, 0),
	'PERU': color(205, 133, 63),
	'PHLOX': color(223, 0, 255),
	'PHTHALO_BLUE': color(0, 15, 137),
	'PHTHALO_GREEN': color(18, 53, 36),
	'PIGGY_PINK': color(253, 221, 230),
	'PINE_GREEN': color(1, 121, 111),
	'PINK': color(255, 192, 203),
	'PINK_LACE': color(255, 221, 244),
	'PINK_ORANGE': color(255, 153, 102),
	'PINK_PEARL': color(231, 172, 207),
	'PINK_SHERBET': color(247, 143, 167),
	'PISTACHIO': color(147, 197, 114),
	'PLATINUM': color(229, 228, 226),
	'PLUM_TRADITIONAL': color(142, 69, 133),
	'PLUM_WEB': color(221, 160, 221),
	'PORTLAND_ORANGE': color(255, 90, 54),
	'POWDER_BLUE_WEB': color(176, 224, 230),
	'PRINCETON_ORANGE': color(255, 143, 0),
	'PRUNE': color(112, 28, 28),
	'PRUSSIAN_BLUE': color(0, 49, 83),
	'PSYCHEDELIC_PURPLE': color(223, 0, 255),
	'PUCE': color(204, 136, 153),
	'PUMPKIN': color(255, 117, 24),
	'PURPLE_HEART': color(105, 53, 156),
	'PURPLE_HTML_CSS': color(128, 0, 128),
	'PURPLE_MOUNTAIN_MAJESTY': color(150, 120, 182),
	'PURPLE_MUNSELL': color(159, 0, 197),
	'PURPLE_PIZZAZZ': color(254, 78, 218),
	'PURPLE_TAUPE': color(80, 64, 77),
	'PURPLE_X11': color(160, 32, 240),
	'QUARTZ': color(81, 72, 79),
	'RACKLEY': color(93, 138, 168),
	'RADICAL_RED': color(255, 53, 94),
	'RAJAH': color(251, 171, 96),
	'RASPBERRY': color(227, 11, 93),
	'RASPBERRY_GLACE': color(145, 95, 109),
	'RASPBERRY_PINK': color(226, 80, 152),
	'RASPBERRY_ROSE': color(179, 68, 108),
	'RAW_UMBER': color(130, 102, 68),
	'RAZZLE_DAZZLE_ROSE': color(255, 51, 204),
	'RAZZMATAZZ': color(227, 37, 107),
	'RED': color(255, 0, 0),
	'RED_BROWN': color(165, 42, 42),
	'RED_DEVIL': color(134, 1, 17),
	'RED_MUNSELL': color(242, 0, 60),
	'RED_NCS': color(196, 2, 51),
	'RED_ORANGE': color(255, 83, 73),
	'RED_PIGMENT': color(237, 28, 36),
	'RED_RYB': color(254, 39, 18),
	'RED_VIOLET': color(199, 21, 133),
	'REDWOOD': color(171, 78, 82),
	'REGALIA': color(82, 45, 128),
	'RESOLUTION_BLUE': color(0, 35, 135),
	'RICH_BLACK': color(0, 64, 64),
	'RICH_BRILLIANT_LAVENDER': color(241, 167, 254),
	'RICH_CARMINE': color(215, 0, 64),
	'RICH_ELECTRIC_BLUE': color(8, 146, 208),
	'RICH_LAVENDER': color(167, 107, 207),
	'RICH_LILAC': color(182, 102, 210),
	'RICH_MAROON': color(176, 48, 96),
	'RIFLE_GREEN': color(65, 72, 51),
	'ROBIN_EGG_BLUE': color(0, 204, 204),
	'ROSE': color(255, 0, 127),
	'ROSE_BONBON': color(249, 66, 158),
	'ROSE_EBONY': color(103, 72, 70),
	'ROSE_GOLD': color(183, 110, 121),
	'ROSE_MADDER': color(227, 38, 54),
	'ROSE_PINK': color(255, 102, 204),
	'ROSE_QUARTZ': color(170, 152, 169),
	'ROSE_TAUPE': color(144, 93, 93),
	'ROSE_VALE': color(171, 78, 82),
	'ROSEWOOD': color(101, 0, 11),
	'ROSSO_CORSA': color(212, 0, 0),
	'ROSY_BROWN': color(188, 143, 143),
	'ROYAL_AZURE': color(0, 56, 168),
	'ROYAL_BLUE_TRADITIONAL': color(0, 35, 102),
	'ROYAL_BLUE_WEB': color(65, 105, 225),
	'ROYAL_FUCHSIA': color(202, 44, 146),
	'ROYAL_PURPLE': color(120, 81, 169),
	'ROYAL_YELLOW': color(250, 218, 94),
	'RUBINE_RED': color(209, 0, 86),
	'RUBY': color(224, 17, 95),
	'RUBY_RED': color(155, 17, 30),
	'RUDDY': color(255, 0, 40),
	'RUDDY_BROWN': color(187, 101, 40),
	'RUDDY_PINK': color(225, 142, 150),
	'RUFOUS': color(168, 28, 7),
	'RUSSET': color(128, 70, 27),
	'RUST': color(183, 65, 14),
	'RUSTY_RED': color(218, 44, 67),
	'SACRAMENTO_STATE_GREEN': color(0, 86, 63),
	'SADDLE_BROWN': color(139, 69, 19),
	'SAFETY_ORANGE_BLAZE_ORANGE': color(255, 103, 0),
	'SAFFRON': color(244, 196, 48),
	'SALMON': color(255, 140, 105),
	'SALMON_PINK': color(255, 145, 164),
	'SAND': color(194, 178, 128),
	'SAND_DUNE': color(150, 113, 23),
	'SANDSTORM': color(236, 213, 64),
	'SANDY_BROWN': color(244, 164, 96),
	'SANDY_TAUPE': color(150, 113, 23),
	'SANGRIA': color(146, 0, 10),
	'SAP_GREEN': color(80, 125, 42),
	'SAPPHIRE': color(15, 82, 186),
	'SAPPHIRE_BLUE': color(0, 103, 165),
	'SATIN_SHEEN_GOLD': color(203, 161, 53),
	'SCARLET': color(255, 36, 0),
	'SCARLET_CRAYOLA': color(253, 14, 53),
	'SCHOOL_BUS_YELLOW': color(255, 216, 0),
	'SCREAMIN_GREEN': color(118, 255, 122),
	'SEA_BLUE': color(0, 105, 148),
	'SEA_GREEN': color(46, 139, 87),
	'SEAL_BROWN': color(50, 20, 20),
	'SEASHELL': color(255, 245, 238),
	'SELECTIVE_YELLOW': color(255, 186, 0),
	'SEPIA': color(112, 66, 20),
	'SHADOW': color(138, 121, 93),
	'SHAMROCK_GREEN': color(0, 158, 96),
	'SHOCKING_PINK': color(252, 15, 192),
	'SHOCKING_PINK_CRAYOLA': color(255, 111, 255),
	'SIENNA': color(136, 45, 23),
	'SILVER': color(192, 192, 192),
	'SINOPIA': color(203, 65, 11),
	'SKOBELOFF': color(0, 116, 116),
	'SKY_BLUE': color(135, 206, 235),
	'SKY_MAGENTA': color(207, 113, 175),
	'SLATE_BLUE': color(106, 90, 205),
	'SLATE_GRAY': color(112, 128, 144),
	'SMALT_DARK_POWDER_BLUE': color(0, 51, 153),
	'SMOKEY_TOPAZ': color(147, 61, 65),
	'SMOKY_BLACK': color(16, 12, 8),
	'SNOW': color(255, 250, 250),
	'SPIRO_DISCO_BALL': color(15, 192, 252),
	'SPRING_BUD': color(167, 252, 0),
	'SPRING_GREEN': color(0, 255, 127),
	'ST_PATRICK_S_BLUE': color(35, 41, 122),
	'STEEL_BLUE': color(70, 130, 180),
	'STIL_DE_GRAIN_YELLOW': color(250, 218, 94),
	'STIZZA': color(153, 0, 0),
	'STORMCLOUD': color(79, 102, 106),
	'STRAW': color(228, 217, 111),
	'SUNGLOW': color(255, 204, 51),
	'SUNSET': color(250, 214, 165),
	'TAN': color(210, 180, 140),
	'TANGELO': color(249, 77, 0),
	'TANGERINE': color(242, 133, 0),
	'TANGERINE_YELLOW': color(255, 204, 0),
	'TANGO_PINK': color(228, 113, 122),
	'TAUPE': color(72, 60, 50),
	'TAUPE_GRAY': color(139, 133, 137),
	'TEA_GREEN': color(208, 240, 192),
	'TEA_ROSE_ORANGE': color(248, 131, 121),
	'TEA_ROSE_ROSE': color(244, 194, 194),
	'TEAL': color(0, 128, 128),
	'TEAL_BLUE': color(54, 117, 136),
	'TEAL_GREEN': color(0, 130, 127),
	'TELEMAGENTA': color(207, 52, 118),
	'TENN_TAWNY': color(205, 87, 0),
	'TERRA_COTTA': color(226, 114, 91),
	'THISTLE': color(216, 191, 216),
	'THULIAN_PINK': color(222, 111, 161),
	'TICKLE_ME_PINK': color(252, 137, 172),
	'TIFFANY_BLUE': color(10, 186, 181),
	'TIGER_S_EYE': color(224, 141, 60),
	'TIMBERWOLF': color(219, 215, 210),
	'TITANIUM_YELLOW': color(238, 230, 0),
	'TOMATO': color(255, 99, 71),
	'TOOLBOX': color(116, 108, 192),
	'TOPAZ': color(255, 200, 124),
	'TRACTOR_RED': color(253, 14, 53),
	'TROLLEY_GREY': color(128, 128, 128),
	'TROPICAL_RAIN_FOREST': color(0, 117, 94),
	'TRUE_BLUE': color(0, 115, 207),
	'TUFTS_BLUE': color(65, 125, 193),
	'TUMBLEWEED': color(222, 170, 136),
	'TURKISH_ROSE': color(181, 114, 129),
	'TURQUOISE': color(48, 213, 200),
	'TURQUOISE_BLUE': color(0, 255, 239),
	'TURQUOISE_GREEN': color(160, 214, 180),
	'TUSCAN_RED': color(124, 72, 72),
	'TWILIGHT_LAVENDER': color(138, 73, 107),
	'TYRIAN_PURPLE': color(102, 2, 60),
	'UA_BLUE': color(0, 51, 170),
	'UA_RED': color(217, 0, 76),
	'UBE': color(136, 120, 195),
	'UCLA_BLUE': color(83, 104, 149),
	'UCLA_GOLD': color(255, 179, 0),
	'UFO_GREEN': color(60, 208, 112),
	'ULTRA_PINK': color(255, 111, 255),
	'ULTRAMARINE': color(18, 10, 143),
	'ULTRAMARINE_BLUE': color(65, 102, 245),
	'UMBER': color(99, 81, 71),
	'UNBLEACHED_SILK': color(255, 221, 202),
	'UNITED_NATIONS_BLUE': color(91, 146, 229),
	'UNIVERSITY_OF_CALIFORNIA_GOLD': color(183, 135, 39),
	'UNMELLOW_YELLOW': color(255, 255, 102),
	'UP_FOREST_GREEN': color(1, 68, 33),
	'UP_MAROON': color(123, 17, 19),
	'UPSDELL_RED': color(174, 32, 41),
	'UROBILIN': color(225, 173, 33),
	'USAFA_BLUE': color(0, 79, 152),
	'USC_CARDINAL': color(153, 0, 0),
	'USC_GOLD': color(255, 204, 0),
	'UTAH_CRIMSON': color(211, 0, 63),
	'VANILLA': color(243, 229, 171),
	'VEGAS_GOLD': color(197, 179, 88),
	'VENETIAN_RED': color(200, 8, 21),
	'VERDIGRIS': color(67, 179, 174),
	'VERMILION_CINNABAR': color(227, 66, 52),
	'VERMILION_PLOCHERE': color(217, 96, 59),
	'VERONICA': color(160, 32, 240),
	'VIOLET': color(143, 0, 255),
	'VIOLET_BLUE': color(50, 74, 178),
	'VIOLET_COLOR_WHEEL': color(127, 0, 255),
	'VIOLET_RYB': color(134, 1, 175),
	'VIOLET_WEB': color(238, 130, 238),
	'VIRIDIAN': color(64, 130, 109),
	'VIVID_AUBURN': color(146, 39, 36),
	'VIVID_BURGUNDY': color(159, 29, 53),
	'VIVID_CERISE': color(218, 29, 129),
	'VIVID_TANGERINE': color(255, 160, 137),
	'VIVID_VIOLET': color(159, 0, 255),
	'WARM_BLACK': color(0, 66, 66),
	'WATERSPOUT': color(164, 244, 249),
	'WENGE': color(100, 84, 82),
	'WHEAT': color(245, 222, 179),
	'WHITE': color(255, 255, 255),
	'WHITE_SMOKE': color(245, 245, 245),
	'WILD_BLUE_YONDER': color(162, 173, 208),
	'WILD_STRAWBERRY': color(255, 67, 164),
	'WILD_WATERMELON': color(252, 108, 133),
	'WINE': color(114, 47, 55),
	'WINE_DREGS': color(103, 49, 71),
	'WISTERIA': color(201, 160, 220),
	'WOOD_BROWN': color(193, 154, 107),
	'XANADU': color(115, 134, 120),
	'YALE_BLUE': color(15, 77, 146),
	'YELLOW': color(255, 255, 0),
	'YELLOW_GREEN': color(154, 205, 50),
	'YELLOW_MUNSELL': color(239, 204, 0),
	'YELLOW_NCS': color(255, 211, 0),
	'YELLOW_ORANGE': color(255, 174, 66),
	'YELLOW_PROCESS': color(255, 239, 0),
	'YELLOW_RYB': color(254, 254, 51),
	'ZAFFRE': color(0, 20, 168),
	'ZINNWALDITE_BROWN': color(44, 22, 8),
};
// }
// Color Conversions {
/**
 * Converts RGB to hex color type
 * 
 * @param {(number|color)}  r  Red value or color
 * @param {number}  [g]  Green value
 * @param {number}  [b]  Blue value
 * 
 * @returns {string}  Hex color value
 * 
 * @example
 * println(rgbToHex(255, 0, 0));
 * // expected output: #ff0000
 * 
 * let c = color(255, 0, 0);
 * println(rgbToHex(c));
 * // expected output: #ff0000
 */
const rgbToHex = function(r, g, b) {
    if (arguments.length == 1) {
        c = r;
        r = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
/**
 * Converts hex to RGB color type
 * 
 * @param {string}  hex  Hex color value, optional `#`, can be shorthand
 * 
 * @returns {color}  RGB color value
 * 
 * @example
 * let c = hexToRgb('#fff');
 * println(c);
 * // expected output: -1
 * background(c);
 * // expected outcome: white background
 */
const hexToRgb = function(hex) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? result.splice(1).map(function(i) {
        return parseInt(i, 16)
    }) : null;
    push();
    colorMode(RGB);
    result = color.apply(this, result);
    pop();
    return result;
};
/**
 * Converts RGB to HSB color type
 * 
 * @param {(number|color)}  r  Red value or color
 * @param {number}  [g]  Green value
 * @param {number}  [b]  Blue value
 * 
 * @returns {string}  HSB color value
 * 
 * @example
 * let c = rgbToHsb(255, 0, 0);
 * println(c);
 * // expected output: -65536
 * colorMode(HSB);
 * background(c);
 * // expected outcome: red background
 */
const rgbToHsb = function(r, g, b) {
    if (arguments.length == 1) {
        c = r;
        r = c >> 16 & 0xFF, g = c >> 8 & 0xFF, b = c & 0xFF;
    }
    
    r /= 255, g /= 255, b /= 255;
    
    let maxValue = Math.max(r, g, b);
    let minValue = Math.min(r, g, b);
    let v = maxValue;

    let d = maxValue - minValue;
    let s = maxValue === 0 ? 0 : d / maxValue;

    if (maxValue === minValue) {
        h = 0;
    } else {
          switch (maxValue) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
    }
    
    let result = [h, s, v].map(function(i) {
        return i * 255;
    });
    push();
    colorMode(HSB);
    result = color.apply(this, result);
    pop();
    return result;
};
/**
 * Converts HSB to RGB color type
 * 
 * @param {(number|color)}  h  Hue value or color
 * @param {number}  [s]  Saturation value
 * @param {number}  [v]  Brightness value
 * 
 * @returns {string}  RGB color value
 * 
 * @example
 * let c = hsbToRgb(85, 255, 255);
 * println(c);
 * // expected output: -16711936
 * background(c);
 * // expected outcome: green background
 */
const hsbToRgb = function(h, s, v) {
    if (arguments.length == 1) {
        c = h;
        h = hue(c), s = saturation(c), v = brightness(c);
    }
    h /= 255, s /= 255, v /= 255;
    
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    
    let r, g, b;
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    
    let result = [r, g, b].map(function(i) {
        return i * 255;
    });
    
    return color.apply(this, result);
};
/**
 * Converts hex or HSB to RGB color value
 * 
 * @param {(string|color)}  x  Hex, hue or RGB color value
 * @param {number}  [s]  Saturation value
 * @param {number}  [v]  Brightness value
 * 
 * @returns {color|array}  RGB color value or RGB values array
 * 
 * @example
 * background(rgb('fff'));
 * // expected outcome: white background
 * 
 * background(rgb(0, 255, 255));
 * // expected outcome: red background
 * 
 * println(rgb(-1))
 * // expected output: [255, 255, 255]
 */
const rgb = function() {
    let args = arguments;
    if (args.length == 1) {
        let c = args[0];
        if (typeof c == "number") {
            return [red(c), green(c), blue(c)];
        } else {
            return hexToRgb(c);
        }
    } else if (args.length == 3) {
        return hsbToRgb.apply(this, args);
    }
};
/**
 * Converts hex or RGB to HSB color value
 * 
 * @param {(string|color)}  x  Hex, red or HSB color value
 * @param {number}  [g]  Green value
 * @param {number}  [b]  Blue value
 * 
 * @returns {color|array}  RGB color value or RGB values array
 * 
 * @example
 * colorMode(HSB);
 * 
 * background(hsb('fff'));
 * // expected outcome: white background
 * 
 * background(hsb(255, 0, 0));
 * // expected outcome: red background
 * 
 * println(hsb(-1))
 * // expected output: [0, 0, 255]
 */
const hsb = function() {
    let args = arguments;
    if (args.length == 1) {
        let c = args[0];
        if (typeof c == "number") {
            return [hue(c), saturation(c), brightness(c)];
        } else {
            return rgbToHsb.apply(this, rgb(hexToRgb(c)));
        }
    } else if (args.length == 3) {
        return rgbToHsb.apply(this, args);
    }
};
// }
// Exporting {
var export_module;
if (export_module) {
    let exports = Object.assign(colors, {
        'rgbToHex': rgbToHex,
        'hexToRgb': hexToRgb,
        'rgbToHsb': rgbToHsb,
        'hsbToRgb': hsbToRgb,
        'rgb': rgb,
        'hsb': hsb
    });
	export_module(exports);
} else {
    background(255);
    fill(0);
    textAlign(CENTER);
    textFont(createFont('monospace'), 15);
    text('Color Essentials' + '\nv' + VERSION, width / 2, height / 2);
}
// }