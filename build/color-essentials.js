_color_initialized_ = typeof COLOR_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Color Essentials depends on the Essentials Core.');
} else {
    COLOR_ESSENTIALS = true;
    if (!_silent_ && !_color_initialized_) console.info(
        '%cColor Essentials',
        _console_style_
    );
}

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
BRIGHTNESS = 'brightness';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
LUMINANCE = 'brightness';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
CONTRAST = 'contrast';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
DROP_SHADOW = 'drop-shadow';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
GRAYSCALE = p.GRAY;

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
HUE_ROTATE = 'hue-rotate';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
OPACITY = 'opacity';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
SATURATE = 'saturate';

/**
 * Constant for the `effect` function.
 *
 * @private
 * 
 * @constant {string}
 */
SEPIA = 'sepia';

/**
 * Default RGBA color range.
 * 
 * @constant {Array.<number>}
 * 
 * @category Color
 */
RGB_COLOR_RANGE = [255, 255, 255, 255];

/**
 * Default HSBA color range.
 * 
 * @constant {Array.<number>}
 * 
 * @category Color
 */
HSB_COLOR_RANGE = [360, 100, 100, 100];

// Pinks {
/**
 * Alias for `color(199, 21, 133)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_VIOLET_RED = 0xFFC71585;

/**
 * Alias for `color(255, 20, 147)`.
 *
 * @private
 *
 * @constant {color}
 */
DEEP_PINK = 0xFFFF1493;

/**
 * Alias for `color(219, 112, 147)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_VIOLET_RED = 0xFFDB7093;

/**
 * Alias for `color(255, 105, 180)`.
 *
 * @private
 *
 * @constant {color}
 */
HOT_PINK = 0xFFFF69B4;

/**
 * Alias for `color(255, 182, 193)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_PINK = 0xFFFFB6C1;

/**
 * Alias for `color(255, 192, 203)`.
 *
 * @private
 *
 * @constant {color}
 */
PINK = 0xFFFFC0CB;
// }

// Reds {
/**
 * Alias for `color(139, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_RED = 0xFF8B0000;

/**
 * Alias for `color(255, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
RED = 0xFFFF0000;

/**
 * Alias for `color(178, 34, 34)`.
 *
 * @private
 *
 * @constant {color}
 */
FIRE_BRICK = 0xFFB22222;

/**
 * Alias for `color(220, 20, 60)`.
 *
 * @private
 *
 * @constant {color}
 */
CRIMSON = 0xFFDC143C;

/**
 * Alias for `color(205, 92, 92)`.
 *
 * @private
 *
 * @constant {color}
 */
INDIAN_RED = 0xFFCD5C5C;

/**
 * Alias for `color(240, 128, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_CORAL = 0xFFF08080;

/**
 * Alias for `color(250, 128, 114)`.
 *
 * @private
 *
 * @constant {color}
 */
SALMON = 0xFFFA8072;

/**
 * Alias for `color(233, 150, 122)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SALMON = 0xFFE9967A;

/**
 * Alias for `color(255, 160, 122)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SALMON = 0xFFFFA07A;
// }

// Oranges {
/**
 * Alias for `color(255, 69, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
ORANGE_RED = 0xFFFF4500;

/**
 * Alias for `color(255, 99, 71)`.
 *
 * @private
 *
 * @constant {color}
 */
TOMATO = 0xFFFF6347;

/**
 * Alias for `color(255, 140, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_ORANGE = 0xFFFF8C00;

/**
 * Alias for `color(255, 127, 80)`.
 *
 * @private
 *
 * @constant {color}
 */
CORAL = 0xFFFF7F50;

/**
 * Alias for `color(255, 165, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
ORANGE = 0xFFFFA500;
// }

// Yellows {
/**
 * Alias for `color(189, 183, 107)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_KHAKI = 0xFFBDB76B;

/**
 * Alias for `color(255, 215, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
GOLD = 0xFFFFD700;

/**
 * Alias for `color(240, 230, 140)`.
 *
 * @private
 *
 * @constant {color}
 */
KHAKI = 0xFFF0E68C;

/**
 * Alias for `color(255, 218, 185)`.
 *
 * @private
 *
 * @constant {color}
 */
PEACH_PUFF = 0xFFFFDAB9;

/**
 * Alias for `color(255, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
YELLOW = 0xFFFFFF00;

/**
 * Alias for `color(238, 232, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_GOLDENROD = 0xFFEEE8AA;

/**
 * Alias for `color(255, 228, 181)`.
 *
 * @private
 *
 * @constant {color}
 */
MOCCASIN = 0xFFFFE4B5;

/**
 * Alias for `color(255, 239, 213)`.
 *
 * @private
 *
 * @constant {color}
 */
PAPAYA_WHIP = 0xFFFFEFD5;

/**
 * Alias for `color(250, 250, 210)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GOLDENROD_YELLOW = 0xFFFAFAD2;

/**
 * Alias for `color(255, 250, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
LEMON_CHIFFON = 0xFFFFFACD;

/**
 * Alias for `color(255, 255, 224)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_YELLOW = 0xFFFFFFE0;
// }

// Browns {
/**
 * Alias for `color(128, 0, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
MAROON = 0xFF800000;

/**
 * Alias for `color(165, 42, 42)`.
 *
 * @private
 *
 * @constant {color}
 */
BROWN = 0xFFA52A2A;

/**
 * Alias for `color(139, 69, 19)`.
 *
 * @private
 *
 * @constant {color}
 */
SADDLE_BROWN = 0xFF8B4513;

/**
 * Alias for `color(160, 82, 45)`.
 *
 * @private
 *
 * @constant {color}
 */
SIENNA = 0xFFA0522D;

/**
 * Alias for `color(210, 105, 30)`.
 *
 * @private
 *
 * @constant {color}
 */
CHOCOLATE = 0xFFD2691E;

/**
 * Alias for `color(184, 134, 11)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GOLDENROD = 0xFFB8860B;

/**
 * Alias for `color(205, 133, 63)`.
 *
 * @private
 *
 * @constant {color}
 */
PERU = 0xFFCD853F;

/**
 * Alias for `color(188, 143, 143)`.
 *
 * @private
 *
 * @constant {color}
 */
ROSY_BROWN = 0xFFBC8F8F;

/**
 * Alias for `color(218, 165, 32)`.
 *
 * @private
 *
 * @constant {color}
 */
GOLDENROD = 0xFFDAA520;

/**
 * Alias for `color(244, 164, 96)`.
 *
 * @private
 *
 * @constant {color}
 */
SANDY_BROWN = 0xFFF4A460;

/**
 * Alias for `color(210, 180, 140)`.
 *
 * @private
 *
 * @constant {color}
 */
TAN = 0xFFD2B48C;

/**
 * Alias for `color(222, 184, 135)`.
 *
 * @private
 *
 * @constant {color}
 */
BURLY_WOOD = 0xFFDEB887;

/**
 * Alias for `color(245, 222, 179)`.
 *
 * @private
 *
 * @constant {color}
 */
WHEAT = 0xFFF5DEB3;

/**
 * Alias for `color(255, 222, 173)`.
 *
 * @private
 *
 * @constant {color}
 */
NAVAJO_WHITE = 0xFFFFDEAD;

/**
 * Alias for `color(255, 228, 196)`.
 *
 * @private
 *
 * @constant {color}
 */
BISQUE = 0xFFFFE4C4;

/**
 * Alias for `color(255, 235, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
BLANCHED_ALMOND = 0xFFFFEBCD;

/**
 * Alias for `color(255, 248, 220)`.
 *
 * @private
 *
 * @constant {color}
 */
CORNSILK = 0xFFFFF8DC;
// }

// Greens {
/**
 * Alias for `color(0, 100, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GREEN = 0xFF006400;

/**
 * Alias for `color(0, 128, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
GREEN = 0xFF008000;

/**
 * Alias for `color(85, 107, 47)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_OLIVE_GREEN = 0xFF556B2F;

/**
 * Alias for `color(34, 139, 34)`.
 *
 * @private
 *
 * @constant {color}
 */
FOREST_GREEN = 0xFF228B22;

/**
 * Alias for `color(46, 139, 87)`.
 *
 * @private
 *
 * @constant {color}
 */
SEA_GREEN = 0xFF2E8B57;

/**
 * Alias for `color(128, 128, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
OLIVE = 0xFF808000;

/**
 * Alias for `color(107, 142, 35)`.
 *
 * @private
 *
 * @constant {color}
 */
OLIVE_DRAB = 0xFF6B8E23;

/**
 * Alias for `color(60, 179, 113)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SEA_GREEN = 0xFF3CB371;

/**
 * Alias for `color(50, 205, 50)`.
 *
 * @private
 *
 * @constant {color}
 */
LIME_GREEN = 0xFF32CD32;

/**
 * Alias for `color(0, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
LIME = 0xFF00FF00;

/**
 * Alias for `color(0, 255, 127)`.
 *
 * @private
 *
 * @constant {color}
 */
SPRING_GREEN = 0xFF00FF7F;

/**
 * Alias for `color(0, 250, 154)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SPRING_GREEN = 0xFF00FA9A;

/**
 * Alias for `color(143, 188, 143)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SEA_GREEN = 0xFF8FBC8F;

/**
 * Alias for `color(102, 205, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_AQUAMARINE = 0xFF66CDAA;

/**
 * Alias for `color(154, 205, 50)`.
 *
 * @private
 *
 * @constant {color}
 */
YELLOW_GREEN = 0xFF9ACD32;

/**
 * Alias for `color(124, 252, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
LAWN_GREEN = 0xFF7CFC00;

/**
 * Alias for `color(127, 255, 0)`.
 *
 * @private
 *
 * @constant {color}
 */
CHARTREUSE = 0xFF7FFF00;

/**
 * Alias for `color(144, 238, 144)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GREEN = 0xFF90EE90;

/**
 * Alias for `color(173, 255, 47)`.
 *
 * @private
 *
 * @constant {color}
 */
GREEN_YELLOW = 0xFFADFF2F;

/**
 * Alias for `color(152, 251, 152)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_GREEN = 0xFF98FB98;
// }

// Cyans {
/**
 * Alias for `color(0, 128, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
TEAL = 0xFF008080;

/**
 * Alias for `color(0, 139, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_CYAN = 0xFF008B8B;

/**
 * Alias for `color(32, 178, 170)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SEA_GREEN = 0xFF20B2AA;

/**
 * Alias for `color(95, 158, 160)`.
 *
 * @private
 *
 * @constant {color}
 */
CADET_BLUE = 0xFF5F9EA0;

/**
 * Alias for `color(0, 206, 209)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_TURQUOISE = 0xFF00CED1;

/**
 * Alias for `color(72, 209, 204)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_TURQUOISE = 0xFF48D1CC;

/**
 * Alias for `color(64, 224, 208)`.
 *
 * @private
 *
 * @constant {color}
 */
TURQUOISE = 0xFF40E0D0;

/**
 * Alias for `color(0, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
AQUA = 0xFF00FFFF;

/**
 * Alias for `color(0, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
CYAN = 0xFF00FFFF;

/**
 * Alias for `color(127, 255, 212)`.
 *
 * @private
 *
 * @constant {color}
 */
AQUAMARINE = 0xFF7FFFD4;

/**
 * Alias for `color(175, 238, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
PALE_TURQUOISE = 0xFFAFEEEE;

/**
 * Alias for `color(224, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_CYAN = 0xFFE0FFFF;
// }

// Blues {
/**
 * Alias for `color(0, 0, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
NAVY = 0xFF000080;

/**
 * Alias for `color(0, 0, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_BLUE = 0xFF00008B;

/**
 * Alias for `color(0, 0, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_BLUE = 0xFF0000CD;

/**
 * Alias for `color(0, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
BLUE = 0xFF0000FF;

/**
 * Alias for `color(25, 25, 112)`.
 *
 * @private
 *
 * @constant {color}
 */
MIDNIGHT_BLUE = 0xFF191970;

/**
 * Alias for `color(65, 105, 225)`.
 *
 * @private
 *
 * @constant {color}
 */
ROYAL_BLUE = 0xFF4169E1;

/**
 * Alias for `color(70, 130, 180)`.
 *
 * @private
 *
 * @constant {color}
 */
STEEL_BLUE = 0xFF4682B4;

/**
 * Alias for `color(30, 144, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
DODGER_BLUE = 0xFF1E90FF;

/**
 * Alias for `color(0, 191, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
DEEP_SKY_BLUE = 0xFF00BFFF;

/**
 * Alias for `color(100, 149, 237)`.
 *
 * @private
 *
 * @constant {color}
 */
CORNFLOWER_BLUE = 0xFF6495ED;

/**
 * Alias for `color(135, 206, 235)`.
 *
 * @private
 *
 * @constant {color}
 */
SKY_BLUE = 0xFF87CEEB;

/**
 * Alias for `color(135, 206, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SKY_BLUE = 0xFF87CEFA;

/**
 * Alias for `color(176, 196, 222)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_STEEL_BLUE = 0xFFB0C4DE;

/**
 * Alias for `color(173, 216, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_BLUE = 0xFFADD8E6;

/**
 * Alias for `color(176, 224, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
POWDER_BLUE = 0xFFB0E0E6;
// }

// Purples {
/**
 * Alias for `color(75, 0, 130)`.
 *
 * @private
 *
 * @constant {color}
 */
INDIGO = 0xFF4B0082;

/**
 * Alias for `color(128, 0, 128)`.
 *
 * @private
 *
 * @constant {color}
 */
PURPLE = 0xFF800080;

/**
 * Alias for `color(139, 0, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_MAGENTA = 0xFF8B008B;

/**
 * Alias for `color(148, 0, 211)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_VIOLET = 0xFF9400D3;

/**
 * Alias for `color(72, 61, 139)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SLATE_BLUE = 0xFF483D8B;

/**
 * Alias for `color(138, 43, 226)`.
 *
 * @private
 *
 * @constant {color}
 */
BLUE_VIOLET = 0xFF8A2BE2;

/**
 * Alias for `color(153, 50, 204)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_ORCHID = 0xFF9932CC;

/**
 * Alias for `color(255, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
FUCHSIA = 0xFFFF00FF;

/**
 * Alias for `color(255, 0, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
MAGENTA = 0xFFFF00FF;

/**
 * Alias for `color(106, 90, 205)`.
 *
 * @private
 *
 * @constant {color}
 */
SLATE_BLUE = 0xFF6A5ACD;

/**
 * Alias for `color(123, 104, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_SLATE_BLUE = 0xFF7B68EE;

/**
 * Alias for `color(186, 85, 211)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_ORCHID = 0xFFBA55D3;

/**
 * Alias for `color(147, 112, 219)`.
 *
 * @private
 *
 * @constant {color}
 */
MEDIUM_PURPLE = 0xFF9370DB;

/**
 * Alias for `color(218, 112, 214)`.
 *
 * @private
 *
 * @constant {color}
 */
ORCHID = 0xFFDA70D6;

/**
 * Alias for `color(238, 130, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
VIOLET = 0xFFEE82EE;

/**
 * Alias for `color(221, 160, 221)`.
 *
 * @private
 *
 * @constant {color}
 */
PLUM = 0xFFDDA0DD;

/**
 * Alias for `color(216, 191, 216)`.
 *
 * @private
 *
 * @constant {color}
 */
THISTLE = 0xFFD8BFD8;

/**
 * Alias for `color(230, 230, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
LAVENDER = 0xFFE6E6FA;

/**
 * Alias for `color(102, 51, 153)`.
 *
 * @private
 *
 * @constant {color}
 */
REBECCA_PURPLE = 0xFF663399;
// }

// Whites {
/**
 * Alias for `color(255, 228, 225)`.
 *
 * @private
 *
 * @constant {color}
 */
MISTY_ROSE = 0xFFFFE4E1;

/**
 * Alias for `color(250, 235, 215)`.
 *
 * @private
 *
 * @constant {color}
 */
ANTIQUE_WHITE = 0xFFFAEBD7;

/**
 * Alias for `color(250, 240, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
LINEN = 0xFFFAF0E6;

/**
 * Alias for `color(245, 245, 220)`.
 *
 * @private
 *
 * @constant {color}
 */
BEIGE = 0xFFF5F5DC;

/**
 * Alias for `color(245)`.
 *
 * @private
 *
 * @constant {color}
 */
WHITE_SMOKE = 0xFFF5F5F5;

/**
 * Alias for `color(255, 240, 245)`.
 *
 * @private
 *
 * @constant {color}
 */
LAVENDER_BLUSH = 0xFFFFF0F5;

/**
 * Alias for `color(253, 245, 230)`.
 *
 * @private
 *
 * @constant {color}
 */
OLD_LACE = 0xFFFDF5E6;

/**
 * Alias for `color(240, 248, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
ALICE_BLUE = 0xFFF0F8FF;

/**
 * Alias for `color(255, 245, 238)`.
 *
 * @private
 *
 * @constant {color}
 */
SEASHELL = 0xFFFFF5EE;

/**
 * Alias for `color(248, 248, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
GHOST_WHITE = 0xFFF8F8FF;

/**
 * Alias for `color(240, 255, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
HONEYDEW = 0xFFF0FFF0;

/**
 * Alias for `color(255, 250, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
FLORAL_WHITE = 0xFFFFFAF0;

/**
 * Alias for `color(240, 255, 255)`.
 *
 * @private
 *
 * @constant {color}
 */
AZURE = 0xFFF0FFFF;

/**
 * Alias for `color(245, 255, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
MINT_CREAM = 0xFFF5FFFA;

/**
 * Alias for `color(255, 250, 250)`.
 *
 * @private
 *
 * @constant {color}
 */
SNOW = 0xFFFFFAFA;

/**
 * Alias for `color(255, 255, 240)`.
 *
 * @private
 *
 * @constant {color}
 */
IVORY = 0xFFFFFFF0;

/**
 * Alias for `color(255)`.
 *
 * @private
 *
 * @constant {color}
 */
WHITE = 0xFFFFFFFF;
// }

// Greys {
/**
 * Alias for `color(0)`.
 *
 * @private
 *
 * @constant {color}
 */
BLACK = 0xFF000000;

/**
 * Alias for `color(47, 79, 79)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_SLATE_GRAY = DARK_SLATE_GREY = 0xFF2F4F4F;

/**
 * Alias for `color(105, 105, 105)`.
 *
 * @private
 *
 * @constant {color}
 */
DIM_GRAY = DIM_GREY = 0xFF696969;

/**
 * Alias for `color(112, 128, 144)`.
 *
 * @private
 *
 * @constant {color}
 */
SLATE_GRAY = SLATE_GREY = 0xFF708090;

/**
 * Alias for `color(128,)`.
 *
 * @private
 *
 * @constant {color}
 */
GREY = 0xFF808080;

/**
 * Alias for `color(119, 136, 153)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_SLATE_GRAY = LIGHT_SLATE_GREY = 0xFF778899;

/**
 * Alias for `color(169)`.
 *
 * @private
 *
 * @constant {color}
 */
DARK_GRAY = DARK_GREY = 0xFFA9A9A9;

/**
 * Alias for `color(192,)`.
 *
 * @private
 *
 * @constant {color}
 */
SILVER = 0xFFC0C0C0;

/**
 * Alias for `color(211)`.
 *
 * @private
 *
 * @constant {color}
 */
LIGHT_GRAY = LIGHT_GREY = 0xFFD3D3D3;

/**
 * Alias for `color(220)`.
 *
 * @private
 *
 * @constant {color}
 */
GAINSBORO = 0xFFDCDCDC;

/**
 * Appends Canvas filter.
 * 
 * @private
 * 
 * @param {string} filter
 */
_appendFilter = filter => {
    if (ctx.filter == 'none') return ctx.filter = filter;
    ctx.filter += filter;
};

/**
 * Create color in given color mode.
 * 
 * @private
 * 
 * @param {Array|number} arr
 * @param {number} [colorMode=getColorMode()]
 * @param {number} [currentColorMode=colorMode]
 * 
 * @returns {number}
 */
_createColor = (arr, colorMode = getColorMode(), currentColorMode = colorMode) => {
    const oppositeColorMode = colorMode == p.RGB ? p.HSB : p.RGB;
    const isDifferentColorMode = currentColorMode == oppositeColorMode;
    let defaultAlpha = getAlphaRange();
    if (currentColorMode != colorMode) {
        if (colorMode == p.RGB) defaultAlpha = RGB_COLOR_RANGE[3];
        else defaultAlpha = HSB_COLOR_RANGE[3];
    }
    arr = _parseColorArray(arr, defaultAlpha);
    if (isDifferentColorMode) {
        p.pushStyle();
        presetColorMode(colorMode);
    }
    result = p.color.apply(null, arr);
    isDifferentColorMode && p.popStyle();
    return result;
};

/**
 * Parses color array.
 * 
 * @private
 * 
 * @param {Array} arr
 * @param {number} [defaultAlpha=getAlphaRange()]
 * @param {boolean} [range=false]
 */
_parseColorArray = (arr, defaultAlpha = getAlphaRange(), range = false) => {
    if (_.isNumber(arr)) arr = [arr];
    switch (arr.length) {
        case 1:
            arr = [arr[0], arr[0], arr[0], range ? arr[0] : defaultAlpha];
            break;
        case 2:
            arr = [arr[0], arr[0], arr[0], arr[1]];
            break;
        case 3:
            arr.push(defaultAlpha);
    }
    return arr;
};

/**
 * Clears all CSS effects from the canvas.
 * 
 * @category Color
 */
clearEffects = () => ctx.filter = 'none';

/**
 * Gets the color range for blue.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getBlueRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getBlueRange = () => p.blue(WHITE);

/**
 * Gets the color range for alpha.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 255, 255, 255, 1);
 * println(getAlphaRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getAlphaRange = () => p.alpha(WHITE);

/**
 * Gets the color range for brightness.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getBrightnessRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getBrightnessRange = () => getBlueRange();

/**
 * Gets the color range for green.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getGreenRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getGreenRange = () => p.green(WHITE);

/**
 * Gets the rounded color range for hue.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getHueRange());
 * // expected output: 360
 * 
 * @see {@link getColorRange}
 */
getHueRange = () => getRedRange();

/**
 * Gets the color range for red.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(RGB, 1, 1, 1);
 * println(getRedRange());
 * // expected output: 1
 * 
 * @see {@link getColorRange}
 */
getRedRange = () => p.red(WHITE);

/**
 * Gets the color range for saturation.
 * 
 * @category Color
 * 
 * @returns {number}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100);
 * println(getSaturationRange());
 * // expected output: 100
 * 
 * @see {@link getColorRange}
 */
getSaturationRange = () => getGreenRange();

/**
 * Gets current shadow blur strength.
 * 
 * @category Color
 * 
 * @returns {number}
 */
getShadowBlur = () => ctx.shadowBlur;

/**
 * Gets current shadow color.
 * 
 * @category Color
 * 
 * @returns {color}
 */
getShadow = () => hexToRGB(ctx.shadowColor);

/**
 * Checks if current color range is the default.
 * 
 * @category Color
 */
isDefaultColorRange = () => getColorRange() == RGB_COLOR_RANGE;

/**
 * Gets current shadow offset.
 * 
 * @category Color
 * 
 * @returns {Array.<number>}
 */
getShadowOffset = () => [ctx.shadowOffsetX, ctx.shadowOffsetY];

/**
 * Turns off shadow.
 * 
 * @category Color
 */
noShadow = () => shadow(TRANSPARENT);

/**
 * @summary
 * Draws an angular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * angularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: angular gradient from red to yellow
 *
 * @example
 * angularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: angular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * angularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: angular gradient from green to light blue in strips of thickness 25
 */
angularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    angle -= 90;
    // `atan` could be `asin`. See https://jsbench.me/mmklrhzgra/1 & https://www.khanacademy.org/cs/-/4713637410717696
    const dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    p.pushStyle();
    if (step == 1) {
        p.strokeWeight(1.5);
        for (let i = angle; i < angle + 359; i += dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, (i - angle) / 360));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        p.strokeWeight(1);
        for (let i = angle; i < angle + 359; i += dTheta) {
            const c = p.lerpColor(startColor, endColor, (i - angle) / 360);
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    p.popStyle();
};

/**
 * @summary
 * Draws an circular gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws triangles of base `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * Use the `smooth` function to prevent jagged edges.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the top-left corner the gradient
 * @param {number} y y-coordinate of the top-left corner the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [angle=0] start angle of the gradient in degrees
 * @param {number} [step=5] step size
 *
 * @example
 * circularGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: circular gradient from red to yellow
 *
 * @example
 * circularGradient(150, 25, 100, 100, PURPLE, PINK, 90);
 * // expected outcome: circular gradient from purple to pink rotated 90 degrees
 *
 * @example
 * circularGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, 0, 25);
 * // expected outcome: circular gradient from green to light blue in strips of thickness 25
 */
circularGradient = (x, y, width, height, startColor, endColor, angle = 0, step = 5) => {
    const dTheta = Math.ceil(p.degrees(Math.atan(step / Math.max(width, height))) * 10) / 10;
    p.pushStyle();
    if (step == 1) {
        p.strokeWeight(1.5);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            p.stroke(p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180)));
            r = p.radians(i);
            p.line(x + width / 2, y + height / 2,
                p.map(Math.cos(r), -1, 1, x, x + width),
                p.map(Math.sin(r), -1, 1, y, y + height));
        }
    } else {
        p.strokeWeight(1);
        for (let i = angle - 1; i < angle + 180; i += dTheta) {
            const c = p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
        // Temporary fix for missing triangle
        r1 = p.radians(angle - 180);
        r2 = p.radians(angle - 180 - dTheta);
        p.stroke(endColor);
        p.fill(endColor);
        p.triangle(x + width / 2, y + height / 2,
            p.map(Math.cos(r1), -1, 1, x, x + width),
            p.map(Math.sin(r1), -1, 1, y, y + height),
            p.map(Math.cos(r2), -1, 1, x, x + width),
            p.map(Math.sin(r2), -1, 1, y, y + height));
        for (let i = angle - 1; i > angle - 180; i -= dTheta) {
            const c = p.lerpColor(startColor, endColor, Math.abs((i - angle) / 180));
            p.stroke(c);
            p.fill(c);
            r1 = p.radians(i);
            r2 = p.radians(i - dTheta);
            p.triangle(x + width / 2, y + height / 2,
                p.map(Math.cos(r1), -1, 1, x, x + width),
                p.map(Math.sin(r1), -1, 1, y, y + height),
                p.map(Math.cos(r2), -1, 1, x, x + width),
                p.map(Math.sin(r2), -1, 1, y, y + height));
        }
    }
    p.popStyle();
};

/**
 * Applies a Gaussian blur of the canvas image.
 * 
 * @category Color
 * 
 * @param {number} [radius=5]
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * blur();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a Gaussian blur of radius 5 pixels
 */
p.blur = (radius = 5) => {
    if (_.isNumber(radius)) radius = `${radius}px`;
    _appendFilter(`blur(${radius})`);
};

/**
 * Adjusts the contrast of the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * contrast(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150%
 */
contrast = amount => _appendFilter(`contrast(${amount}%)`);

/**
 * Applies a drop shadow to all objects.
 * 
 * @category Color
 * 
 * @param {number} x x offset
 * @param {number} [y=x] y offset
 * @param {number} [radius=5] blur radius
 * @param {color|string} [color=BLACK]
 * 
 * @example
 * push();
 * dropShadow(10);
 * printf('%', ctx.filter);
 * image(img, 20, 20, WIDTH - 40, HEIGHT - 40);
 * pop();
 * // expected outcome: a black drop shadow offset by 10 pixels
 */
dropShadow = (x, y = x, radius = 5, color = '#000') => {
    if (_.isNumber(color)) color = RGBToHex(color);
    _appendFilter(`drop-shadow(${x}px ${y}px ${radius}px ${color})`);
};

/**
 * @summary
 * Applies CSS effect on the canvas.
 * 
 * @description
 * The `effect` function is much more efficient than the Processing version.
 * Since Processing by default does not clear Canvas filters, wrap `effect`
 * calls in `push`/`pop`, or use the `clearEffects` function.
 * 
 * Unlike their Processing counterparts, effects are applied to everything
 * drawn _after_ the `effect` function is called.
 * 
 * To use CSS properties directly, see the MDN documentation on
 * [CanvasRenderingContext2D.filter]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter#browser_compatibility}.
 * 
 * @category Color
 * 
 * @param {string} filter Either `BLUR`, `BRIGHTNESS`, `LUMINANCE`, `CONTRAST`, `DROP_SHADOW`, `GRAY`, `GRAY_SCALE`, `HUE_ROTATE`, `INVERT`, `OPACITY`, `SATURATE` or `SEPIA`.
 * @param {...*} args
 */
effect = (filter, ...args) => {
    switch(filter) {
        case p.BLUR:
            return p.blur(...args);
        case BRIGHTNESS:
        case LUMINANCE:
            return luminance(...args);
        case CONTRAST:
            return contrast(...args);
        case DROP_SHADOW:
            return dropShadow(...args);
        case p.GRAY:
        case GRAYSCALE:
            return grayscale(...args);
        case HUE_ROTATE:
            return hueRotate(...args);
        case p.INVERT:
            return invert(...args);
        case OPACITY:
            return opacity(...args);
        case SATURATE:
            return saturate(...args);
        case SEPIA:
            return sepia(...args);
    }
    _appendFilter(filter);
};

/**
 * Faster blur on a rectangular selection.
 * 
 * @category Color
 *
 * @param {number} [strength=10]
 * @param {number} [x=0] x-coordinate of the rectangle
 * @param {number} [y=0] y-coordinate of the rectangle
 * @param {number} [width=WIDTH] width of the rectangle
 * @param {number} [height=width || HEIGHT] height of the rectangle
 */
fastBlur = (strength = 10, x = 0, y = 0, width = WIDTH, height = width || HEIGHT) => {
    if (x < 0) {
        width += x;
        x = 0;
    }
    if (y < 0) {
        height += y;
        y = 0;
    }
    strength = p.constrain(strength, 0, Math.min(width, height));
    p.image(p.get(x, y, width, height), x, y, width / strength, height / strength);
    p.image(p.get(x, y, width / strength, height / strength), x, y, width, height);
};

/**
 * Gets the color mode.
 * 
 * @category Color
 * 
 * @example
 * colorMode(RGB);
 * println(getColorMode() == RGB);
 * // expected output: true
 */
getColorMode = () => p.color(getRedRange(), 0, 0) == -0x10000 ? p.RGB : p.HSB;

/**
 * Gets current color range.
 * 
 * @category Color
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * console.log(getColorRange());
 * // expected output: [360, 100, 100, 100]
 */
getColorRange = () => [p.red, p.green, p.blue, p.alpha].map(fn => fn.call(null, WHITE));

/**
 * @summary
 * Gets current fill color.
 * 
 * @description
 * Processing will only update the current fill if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the fill value.
 * 
 * @category Color
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getFill = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.fillStyle);
};

/**
 * Converts to canvas image to grayscale.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% grayscale
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * grayscale(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% grayscale
 */
grayscale = (amount = 100) => _appendFilter(`grayscale(${amount}%)`);

/**
 * @summary
 * Gets current stroke color.
 * 
 * @description
 * Processing will only update the current stroke if specific functions are
 * called. To work around this, a "ghost" rectangle will be drawn to update
 * the stroke value.
 * 
 * @category Color
 * 
 * @param {boolean} [draw=true] draw ghost rectangle
 * 
 * @returns {color}
 */
getStroke = (draw = true) => {
    draw && p.rect(0, 0, '%');
    return hexToRGB(ctx.strokeStyle);
};

/**
 * Converts hex to RGB color type.
 * 
 * @category Color
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 */
hexToHSB = (hex, color = true) => {
    if (color) return hexToRGB(hex);
    return RGBToHSB.apply(p, hexToRGB(hex, false));
};

/**
 * Converts hex to RGB color type.
 * 
 * @category Color
 *
 * @param {string} hex hex color value
 * @param {boolean} [color=true] return color integer or array
 *
 * @returns {color|Array}
 *
 * @example
 * const col = hexToRGB('#006FDE');
 * println(hex(col, 6));
 * // expected output: '006FDE'
 * 
 * @example
 * println(hexToRGB('#AAAA', false));
 * // expected output: [170, 170, 170, 170]
 * 
 * @example
 * const hex = '#F00';
 * colorMode(RGB, 1, 1, 1, 1);
 * println(hexToRGB(hex, false));
 * // expected output: [1, 0, 0, 1]
 */
hexToRGB = (hex, color = true) => {
    const currentColorMode = getColorMode();
    hex = hex.replace('#', '');
    switch (hex.length) {
        case 3:
        case 6:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b) => r + r + g + g + b + b);
            break;
        case 4:
        case 8:
            hex = hex.replace(/^([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i, (_m, r, g, b, a) => r + r + g + g + b + b + a + a);
            break;
    }
    let arr = hex
        .match(/.{2}/g)
        .map(x => parseInt(x, 16));
    if (arr.length == 3) arr.push(RGB_COLOR_RANGE[3]);
    if (!isDefaultColorRange() && currentColorMode == p.RGB) {
        arr = mapColorRange(arr);
    }
    let result = arr;
    if (color) result = _createColor(arr, p.RGB, currentColorMode);
    return result;
};

/**
 * Converts RGB(A) to CSS hexadecimal values.
 * 
 * @category Color
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 */
HSBToHex = (...args) => {
    let shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    const notDefaultColorRange = !isDefaultColorRange();
    notDefaultColorRange && p.pushStyle();
    presetColorMode(p.RGB);
    const arr = HSBToRGB(...args).map(value => Math.round(value));
    notDefaultColorRange && p.popStyle();
    return RGBToHex(...arr, shorthand, octothorpe);
};

/**
 * Converts HSB to RGB.
 * 
 * @link https://stackoverflow.com/a/54070620
 * 
 * @category Color
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(HSBToRGB(0, 100, 100));
 * // expected outcome: [255, 0, 0, 255]
 * @example
 * println(HSBToRGB(BLUE));
 * // expected outcome: [0, 0, 255, 255]
 */
HSBToRGB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.RGB ? currentColorRange : RGB_COLOR_RANGE;
    let h, s, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.HSB);
            }
            [h, s, b, a] = toHSB(args[0]);
            notDefaultColorRange && p.popStyle();
            h /= 60, s /= 100, b /= 100, a /= 100;
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / HSB_COLOR_RANGE[3];
            h = args.shift() / 60;
            [s, b] = args.map((value, i) => value /= HSB_COLOR_RANGE[i + 1]);
    }
    f = (n, k = (n + h) % 6) => b - b * s * Math.max(Math.min(k, 4 - k, 1), 0);
    let arr = [f(5), f(3), f(1), a || 1];
    arr = arr.map((value, i) => value * mapColorRange[i]);
    return arr;
};

/**
 * Applies a hue rotation on the canvas image.
 * 
 * @category Color
 * 
 * @param {number} angle
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(90);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 * 
 * @example
 * angleMode = 'radians';
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * hueRotate(PI / 2);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: a 90 degrees change in hue
 */
hueRotate = angle => _appendFilter(`hue-rotate(${angle}${p.angleMode == 'degrees' ? 'deg' : 'rad'})`);

/**
 * Inverts the canvas image.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * invert();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: inverted
 */
invert = (amount = 100) => _appendFilter(`invert(${amount}%)`);

/**
 * @summary
 * Draws a linear gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @category Color
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.angle]
 * @param {number} [settings.x0] x-coordinate of gradient start point
 * @param {number} [settings.y0] y-coordinate of gradient start point
 * @param {number} [settings.x1] x-coordinate of gradient end point
 * @param {number} [settings.y1] y-coordinate of gradient end point
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: linear gradient from red to blue
 *
 * @example
 * linearGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     angle: 45,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: linear gradient from red to to green to blue
 */
linearGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, angle, x0, y0, x1, y1 } = settings;
    height = height || width;
    if (_.isNumber(angle)) {
        if (p.angleMode == 'degrees') angle = p.radians(angle);
        const result = _pointOnRect(width, height, angle);
        x0 = x0 || x + width - result.x;
        y0 = y0 || y + height - result.y;
        x1 = x1 || x + result.x;
        y1 = y1 || y + result.y;
    }
    push();
    const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};

/**
 * Adjusts brightness of the canvas image by applying a linear multiplier.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * luminance(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: brightness increased to 150%
 */
luminance = amount => _appendFilter(`brightness(${amount}%)`);

/**
 * Maps color range array to current or a custom color range.
 * 
 * @category Color
 * 
 * @param {Array.<number>|number} values
 * @param {Array.<number>|number} [colorRange] custom color range
 * 
 * @returns {Array.<number>}
 * 
 * @example
 * colorMode(HSB, 360, 100, 100, 100);
 * println(mapColorRange([255, 0, 0]));
 * // expected output: [360, 0, 0, 100]
 * 
 * @example
 * println(mapColorRange([255, 0, 0], [360, 100, 100, 100]));
 * // expected output: [360, 0, 0, 100]
 */
mapColorRange = (values, colorRange) => {
    const currentColorRange = getColorRange();
    if (colorRange) {
        colorRange = _parseColorArray(colorRange, currentColorRange[3], true);
        values = _parseColorArray(values, currentColorRange[3])
            .map((value, i) => p.map(value, 0, currentColorRange[i], 0, colorRange[i]));
    } else {
        values = _parseColorArray(values, 255)
            .map((value, i) => p.map(value, 0, 255, 0, currentColorRange[i]));
    }
    return values;
};

/**
 * Applies transparency to the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * opacity(50);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 50% opacity
 */
opacity = amount => _appendFilter(`opacity(${amount}%)`);

/**
 * Sets the color mode to selected preset.
 * 
 * @category Color
 * 
 * @param {number} [mode] `RGB` or `HSB`
 * 
 * @example
 * presetColorMode(HSB);
 * println(getColorRange());
 * // expected output: [360, 100, 100, 100]
 * presetColorMode();
 * println(getColorRange());
 * // expected output: [255, 255, 255, 255]
 * 
 * @see {@link getColorRange}
 */
presetColorMode = mode => {
    if (!mode)
        mode = getColorMode() == p.RGB ? p.HSB : p.RGB;
    switch (mode) {
        case p.RGB:
            p.colorMode(p.RGB, 255);
            break;
        case p.HSB:
            p.colorMode(p.HSB, 360, 100, 100, 100);
    }
};

/**
 * @summary
 * Draws a radial gradient.
 * 
 * @description
 * Colors may be a Processing color or a
 * [CSS color value]{@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
 * 
 * @category Color
 *
 * @param {Object} settings
 * @param {number} settings.x x-coordinate of the gradient
 * @param {number} settings.y y-coordinate of the gradient
 * @param {number} settings.width width of the gradient
 * @param {number} [settings.height=width] height of the gradient
 * @param {Array} settings.stops color stops
 * @param {number} [settings.x0=x + width / 2] x-coordinate of gradient start circle
 * @param {number} [settings.y0=y + height / 2] y-coordinate of gradient start circle
 * @param {number} [settings.r0=0] radius of gradient start circle
 * @param {number} [settings.x1=x + width / 2] x-coordinate of gradient end circle
 * @param {number} [settings.y1=y + height / 2] y-coordinate of gradient end circle
 * @param {number} [settings.r1=width / 2] radius of gradient end circle
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         RED,
 *         BLUE
 *     ]
 * });
 * // expected outcome: radial gradient from red to blue
 *
 * @example
 * radialGradient({
 *     x: 10,
 *     y: 10,
 *     width: 100,
 *     height: 100,
 *     stops: [
 *         [0, '#F00'],
 *         [.5, GREEN],
 *         [1, '#00F']
 *     ]
 * });
 * // expected outcome: radial gradient from red to to green to blue
 */
radialGradient = settings => {
    // eslint-disable-next-line prefer-const
    let { x, y, width, height, stops, x0, y0, r0, x1, y1, r1 } = settings;
    height = height || width;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    if (!_.isNumber(x0)) x0 = centerX;
    if (!_.isNumber(y0)) y0 = centerY;
    r0 = r0 || 0;
    if (!_.isNumber(x1)) x1 = centerX;
    if (!_.isNumber(y1)) y1 = centerY;
    r1 = r1 || width / 2;
    push();
    const gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    if (!_.every(stops, _.isArray)) stops = stops.map((color, i, arr) => [p.norm(i, 0, arr.length - 1), color]);
    for (const stop of stops) {
        if (_.isNumber(stop[1])) stop[1] = RGBToHex(stop[1], false);
        gradient.addColorStop(...stop);
    }
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
    pop();
};

/**
 * Converts RGB(A) to CSS hexadecimal values.
 * 
 * @category Color
 *
 * @param {...number} args
 * @param {boolean} [shorthand=true]
 * @param {boolean} [octothorpe=true]
 *
 * @returns {string} CSS hexadecimal value
 *
 * @example
 * console.log(RGBToHex(0, 111, 222));
 * // expected output: '#006FDE'
 *
 * @example
 * const col = GREEN;
 * console.log(RGBToHex(col));
 * // expected output: '#008000'
 * 
 * @example
 * const col = color(RED, 100);
 * console.log(RGBToHex(col));
 * // expected output: '#FF000064'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col), false);
 * // expected output: '#FF0000'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col));
 * // expected output: '#F00'
 * 
 * @example
 * const col = RED;
 * console.log(RGBToHex(col, false, false));
 * // expected output: 'FF0000'
 */
RGBToHex = (...args) => {
    let hexadecimal, shorthand = true, octothorpe = true;
    if (_.every(_.last(args, 2), _.isBoolean)) {
        octothorpe = args.pop();
        shorthand = args.pop();
    } else if (_.isBoolean(_.last(args))) shorthand = args.pop();
    switch (args.length) {
        case 1: {
            const a = p.alpha(args[0]);
            hexadecimal = p.hex(args[0], 6) + (a != RGB_COLOR_RANGE[3] ? a.toString(16).padStart(2, '0') : '');
            break;
        }
        case 3:
        case 4:
            hexadecimal = ((1 << 24) + (args[0] << 16) + (args[1] << 8) + args[2]).toString(16).slice(1);
            if (args.length == 4 && args[3] != RGB_COLOR_RANGE[3]) hexadecimal += args[3].toString(16).padStart(2, '0');
    }
    if (shorthand) {
        if (hexadecimal.length == 8) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3(\w)\4/, '$1$2$3$4');
        if (hexadecimal.length == 6) hexadecimal = hexadecimal.replace(/(\w)\1(\w)\2(\w)\3/, '$1$2$3');
    }
    return (octothorpe ? '#' : '') + hexadecimal.toUpperCase();
};

/**
 * Converts RGB to HSB.
 * 
 * @link https://stackoverflow.com/a/54070620
 * 
 * @category Color
 *
 * @param {...number} args
 *
 * @returns {Array}
 *
 * @example
 * println(RGBToHSB(0, 0, 255));
 * // expected outcome: [240, 100, 100, 100]
 * 
 * @example
 * println(RGBToHSB(BLUE));
 * // expected outcome: [240, 100, 100, 100]
 */
RGBToHSB = (...args) => {
    const currentColorRange = getColorRange();
    const mapColorRange = getColorMode() == p.HSB ? currentColorRange : HSB_COLOR_RANGE;
    const fns = [
        hue => p.map(hue, 0, 6, 0, mapColorRange[0]),
        saturation => saturation * mapColorRange[1],
        brightness => brightness * mapColorRange[2],
        alpha => alpha * mapColorRange[3]
    ];
    let r, g, b, a;
    switch (args.length) {
        case 1: {
            const notDefaultColorRange = !isDefaultColorRange();
            if (notDefaultColorRange) {
                p.pushStyle();
                presetColorMode(p.RGB);
            }
            [r, g, b, a] = toRGB(args[0]).map((value, i) => value /= RGB_COLOR_RANGE[i]);
            notDefaultColorRange && p.popStyle();
            break;
        }
        case 3:
        case 4:
            if (args.length == 4) a = args.pop() / RGB_COLOR_RANGE[3];
            [r, g, b] = args.map((value, i) => value /= RGB_COLOR_RANGE[i]);
    }
    const max = Math.max(r, g, b),
        chroma = max - Math.min(r, g, b);
    const hue = chroma && ((max == r) ? (g - b) / chroma : ((max == g) ? 2 + (b - r) / chroma : 4 + (r - g) / chroma));
    let arr = [hue < 0 ? hue + 6 : hue, max && chroma / max, max, a || 1];
    arr = arr.map((value, i) => fns[i](value));
    return arr;
};

/**
 * Saturates the canvas image.
 * 
 * @category Color
 * 
 * @param {number} amount percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * saturate(150);
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: contrast increased to 150% saturation
 */
saturate = amount => _appendFilter(`saturate(${amount}%)`);

/**
 * Converts the canvas image to sepia.
 * 
 * @category Color
 * 
 * @param {number} [amount=100] percentage
 * 
 * @example
 * const img = getImage('landscapes/beach-in-hawaii');
 * push();
 * sepia();
 * image(img, 0, 0, WIDTH, HEIGHT);
 * pop();
 * // expected outcome: 100% sepia
 */
sepia = (amount = 100) => _appendFilter(`sepia(${amount}%)`);

/**
 * Sets shadow color.
 * 
 * @category Color
 * 
 * @param {...number|color|string} args
 * 
 * @example
 * push();
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * pop();
 * // expected outcome: square with a black shadow
 * 
 * @example
 * push();
 * shadow(255, 0, 0);
 * shadowBlur(10);
 * circle(100, 100, 100);
 * pop();
 * // expected outcome: circle with a red shadow
 */
shadow = (...args) => {
    let color = args[0];
    if (args.length > 1) color = p.color.apply(null, args);
    if (_.isNumber(args[0])) color = RGBToHex(color, false);
    ctx.shadowColor = color;
};

/**
 * Sets shadow blur strength.
 * 
 * @category Color
 * 
 * @param {number} radius
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * square(100, 100, 100);
 * // expected outcome: square with a black shadow
 */
shadowBlur = radius => ctx.shadowBlur = radius;

/**
 * Sets shadow offset.
 * 
 * @category Color
 * 
 * @param {number} x
 * @param {number} [y=x]
 * 
 * @example
 * shadow(BLACK);
 * shadowBlur(10);
 * shadowOffset(10);
 * square(100, 100, 100);
 * // expected outcome: square with black shadow offset by 10px in both directions
 */
shadowOffset = (x, y = x) => {
    if (_.isNumber(x)) ctx.shadowOffsetX = x;
    ctx.shadowOffsetY = y;
};

/**
 * Converts color integers, hex or RGB values to HSB.
 * 
 * @category Color
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * println(toRGB(BLUE));
 * // expected output: [0, 0, 255, 255]
 * 
 * @example
 * const col = toRGB('#F00')
 * println(hex(col, 6));
 * // expected output: 'FF0000'
 * 
 * @example
 * println(toRGB(0, 100, 100));
 * // expected output: [255, 0, 0, 255]
 */
toHSB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isRGB = getColorMode() == p.RGB;
                if (isRGB) {
                    p.pushStyle();
                    presetColorMode(p.HSB);
                }
                const arr = [p.hue(col), p.saturation(col), p.brightness(col), p.alpha(col)];
                isRGB && p.popStyle();
                return arr;
            }
            return hexToHSB(col);
        }
        case 3:
        case 4:
            return RGBToHSB.apply(p, args);
    }
};

/**
 * Converts color integers, hex or HSB values to RGB.
 * 
 * @category Color
 *
 * @param {...*} args
 *
 * @returns {color|array}  RGB color value or RGB values array
 *
 * @example
 * background(toRGB('fff'));
 * // expected outcome: white background
 *
 * @example
 * background(toRGB(0, 255, 255));
 * // expected outcome: red background
 *
 * @example
 * println(toRGB(-1))
 * // expected output: [255, 255, 255]
 */
toRGB = (...args) => {
    switch (args.length) {
        case 1: {
            const col = args[0];
            if (_.isNumber(col)) {
                const isHSB = getColorMode() == p.HSB;
                if (isHSB) {
                    p.pushStyle();
                    presetColorMode(p.RGB);
                }
                const arr = [p.red(col), p.green(col), p.blue(col), p.alpha(col)];
                isHSB && p.popStyle();
                return arr;
            }
            return hexToRGB(col);
        }
        case 3:
        case 4:
            return HSBToRGB.apply(p, args);
    }
};

/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws a linear gradient from `startColor` to `endColor` in the form of a rectangle.
 *
 * @description
 * For a step size greater than 1, the function draws rectangles of width
 * `step`. Using a step size greater than 1 is faster for all but diagonal
 * gradients. It is highly advised to store drawn gradients in images using the
 * `get` function for use in a draw loop.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of the gradient
 * @param {number} y y-coordinate of the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param
 * {LEFT|RIGHT|TOP|UP|BOTTOM|DOWN|TOP_LEFT|TOP_RIGHT|BOTTOM_RIGHT|BOTTOM_LEFT}
 * [direction=RIGHT] direction of gradient
 * @param {number} [step=5] step size
 *
 * @example
 * linearGradient(25, 25, 100, 100, RED, YELLOW);
 * // expected outcome: linear gradient from left to right; red to yellow
 *
 * @example
 * linearGradient(150, 25, 100, 100, PURPLE, PINK, TOP_RIGHT);
 * // expected outcome: linear gradient from bottom-left to top-right; purple to pink
 *
 * @example
 * linearGradient(275, 25, 100, 100, GREEN, LIGHTBLUE, BOTTOM_RIGHT, 10);
 * // expected outcome: linear gradient from top-left to bottom-right; green to light blue in strips of thickness 10
 */
 linearGradientOld = (x, y, width, height, startColor, endColor, direction = RIGHT, step = 5) => {
    push();
    e.strokeWeight(1);
    switch (direction) {
        case LEFT:
        case RIGHT:
            if (direction == LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width));
                    e.line(x + i, y, x + i, y + height);
                }
            } else {
                for (let i = 0; i < width; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / width);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x + i, y, width - i, height); }
                    else { e.rect(x + i, y, step, height); }
                }
            }
            break;
        case TOP:
        case UP:
        case BOTTOM:
        case DOWN:
            if (direction == TOP || direction == UP) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < height; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / height));
                    e.line(x, y + i, x + width, y + i);
                }
            } else {
                for (let i = 0; i < height; i += step) {
                    const c = e.lerpColor(startColor, endColor, i / height);
                    e.stroke(c);
                    e.fill(c);
                    if (i + step > width) { e.rect(x, y + i, width, height - i); }
                    else { e.rect(x, y + i, width, step); }
                }
            }
            break;
        case TOP_LEFT:
        case BOTTOM_RIGHT:
            if (direction == TOP_LEFT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + i, y, x, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + i, y + height, x + width, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(-45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(-side / 2, i, side, side - i); }
                        else { this.rect(-side / 2, i, side, step); }
                    }
                });
            }
            break;
        case TOP_RIGHT:
        case BOTTOM_LEFT:
            if (direction == TOP_RIGHT) [startColor, endColor] = [endColor, startColor];
            if (step == 1) {
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2));
                    e.line(x + width - i, y, x + width, y + e.map(i, 0, width, 0, height));
                }
                for (let i = 0; i < width; i++) {
                    e.stroke(e.lerpColor(startColor, endColor, i / width / 2 + 0.5));
                    e.line(x + width - i, y + height, x, y + e.map(i, 0, width, 0, height));
                }
            } else {
                const side = Math.max(width, height) * Math.sqrt(2);
                showGraphics(x, y, width, height, function () {
                    this.angleMode = 'degrees';
                    this.rotate(45);
                    for (let i = 0; i < side; i += step) {
                        const c = this.lerpColor(startColor, endColor, i / side);
                        this.stroke(c);
                        this.fill(c);
                        if (i + step > side) { this.rect(0, i - side / 2, side, side - i); }
                        else { this.rect(0, i - side / 2, side, step); }
                    }
                });
            }
    }
    pop();
};

/**
 * @deprecated since 2.0.0
 * 
 * @summary
 * Draws a radial gradient from `startColor` to `endColor` in the form of an
 * ellipse.
 *
 * @description
 * For a step size greater than 1, the function draws ellipses of width `step`.
 * Using a step size greater than 1 is faster. It is highly advised to store
 * drawn gradients in images using the `get` function for use in a draw loop.
 * 
 * @category Color
 *
 * @param {number} x x-coordinate of center of the gradient
 * @param {number} y y-coordinate of center the gradient
 * @param {number} width width of the gradient
 * @param {number} height height of the gradient
 * @param {color} startColor starting color
 * @param {color} endColor ending color
 * @param {number} [step=5] step size
 *
 * @example
 * radialGradient(100, 100, 100, 100, RED, YELLOW);
 * // expected outcome: radial gradient from red to yellow
 *
 * @example
 * radialGradient(250, 100, 100, 100, PURPLE, PINK, 10);
 * // expected outcome: radial gradient from purple to pink with step size 10
 */
 radialGradientOld = (x, y, width, height, startColor, endColor, step = 5) => {
    push();
    e.strokeWeight(1);
    const maxRadius = Math.max(width, height);
    if (step == 1) {
        e.noFill();
        for (let i = 0; i < maxRadius; i++) {
            e.stroke(e.lerpColor(endColor, startColor, i / maxRadius));
            e.arc(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height),
                0, 360);
        }
    } else {
        for (let i = 0; i < maxRadius; i += step) {
            const c = e.lerpColor(endColor, startColor, i / maxRadius);
            e.stroke(c);
            e.fill(c);
            e.ellipse(x, y,
                width - e.map(i, 0, maxRadius, 0, width),
                height - e.map(i, 0, maxRadius, 0, height));
        }
    }
    pop();
};
