_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Shape Essentials depends on the Essentials Core.');
} else {
    SHAPE_ESSENTIALS = true;
    if (!_silent_ && !_shape_initialized_) console.info(
        '%cShape Essentials',
        _console_style_
    );
}

/**
 * Gets current stroke cap.
 * 
 * @category Shape
 * 
 * @returns {string}
 * 
 * @example
 * strokeCap(SQUARE);
 * println(getStrokeCap() == SQUARE);
 * // expected output: true
 */
getStrokeCap = () => ctx.lineCap;

/**
 * Gets current stroke join.
 * 
 * @category Shape
 * 
 * @returns {string}
 * 
 * @example
 * strokeJoin(SQUARE);
 * println(getStrokeJoin() == SQUARE);
 * // expected output: true
 */
getStrokeJoin = () => ctx.lineJoin;

/**
 * Gets current stroke weight.
 * 
 * @category Shape
 * 
 * @returns {number}
 * 
 * @example
 * strokeWeight(5);
 * println(getStrokeWeight());
 * // expected output: 5
 */
getStrokeWeight = () => ctx.lineWidth;

/**
 * Removes line dash pattern.
 * 
 * @category Shape
 * 
 * @example
 * strokeDash(1, 20);
 * noStrokeDash();
 * line(50, 50, 350, 50);
 * // expected outcome: regular line
 * 
 * @see {@link strokeDash}
 */
noStrokeDash = () => strokeDash();

/**
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 *
 */
circle = (x, y, radius) => p.ellipse(x, y, radius, radius);

/**
 * Draws a 2D cylinder.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/5157537806548992
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of cylinder
 * @param {number} y y-coordinate of cylinder
 * @param {number} width
 * @param {number} height
 *
 * @example
 * cylinder(100, 100, 100, 50);
 */
cylinder = (x, y, width, height) => {
    width = Math.abs(width);
    height = Math.abs(height);
    p.pushMatrix();
    p.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
        p.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const central = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            p.vertex(z, -r);
            p.bezierVertex(z + central, -r, z + r, -central, z + r, 0);
            p.bezierVertex(z + r, central, z + central, r, z, r);
            p.vertex(-z, r);
            p.bezierVertex(-z - central, r, -z - r, central, -z - r, 0);
            p.bezierVertex(-z - r, -central, -z - central, -r, -z, -r);
        }, true);
    }
    p.popMatrix();
};

/**
 * Draws a donut.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the donut
 * @param {number} y y-coordinate of the donut
 * @param {number} majorDiameter Diameter of outer circle
 * @param {number} minorDiameter Diameter of inner circle
 *
 * @example
 * donut(100, 100, 100, 50);
 */
donut = (x, y, majorDiameter, minorDiameter) => {
    const kappa = 4 / 3 * (Math.sqrt(2) - 1);
    p.pushMatrix();
    p.translate(x, y);
    p.pushStyle();
    p.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, central, central, radius, 0, radius);
        p.bezierVertex(-central, radius, -radius, central, -radius, 0);
        p.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        p.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        p.vertex(radius, 0);
        p.bezierVertex(radius, -central, central, -radius, 0, -radius);
        p.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        p.bezierVertex(-radius, central, -central, radius, 0, radius);
        p.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    p.popStyle();

    p.pushStyle();
    p.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    p.popStyle();
    p.popMatrix();
};

/**
 * Alternative for `beginShape()`/`endShape()`.
 * 
 * @category Shape
 *
 * @param {Function} fn Shape function
 * @param {CLOSE|boolean} [close] Whether to close the shape
 * @param {POINTS|LINES|TRIANGLES|TRIANGLE_FAN|TRIANGLE_STRIP|QUADS|QUAD_STRIP}
 * [mode] Shape mode
 *
 * @example
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, CLOSE);
 * // expected outcome: square
 *
 * @example
 * strokeWeight(5);
 * drawShape(function() {
 *     vertex(100, 100);
 *     vertex(200, 100);
 *     vertex(200, 200);
 *     vertex(100, 200);
 * }, false, POINTS);
 * // expected outcome: points in a square formation
 */
drawShape = (fn, close, mode) => {
    close = close && p.CLOSE;
    p.beginShape(mode);
    fn();
    p.endShape(close);
};

/**
 * Draws a line of a given length and at a given angle.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of start point
 * @param {number} y y-coordinate of start point
 * @param {number} length length of line
 * @param {number} [angle=0] rotation of line
 *
 * @example
 * angleMode = 'degrees';
 * edge(50, 50, 300, 0);
 * // expected outcome: horizontal line of length 300
 *
 * @example
 * edge(50, 75, 100, 45);
 * // expected outcome: line of length 100 rotated 45 degrees
 *
 * @example
 * angleMode = 'radians';
 * edge(200, 75, 100, PI / 4);
 * // expected outcome: line of length 100 rotated 45 degrees
 */
edge = (x, y, length, angle = 0) => {
    if (p.angleMode == 'degrees') angle = p.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    p.line(x, y, x2, y2);
};

/**
 * Gets current rotation transformation.
 * 
 * @category Shape
 * 
 * @param {boolean} [degrees=p.angleMode == 'degrees'] convert to degrees
 * @param {DOMMatrix} [matrix=ctx.getTransform()]
 * 
 * @returns {number}
 */
getRotation = (degrees = p.angleMode == 'degrees', matrix = ctx.getTransform()) => {
    let angle = Math.atan2(matrix.b, matrix.a);
    if (angle < 0) angle += Math.PI * 2;
    return degrees ? p.degrees(angle) : angle;
};

/**
 * Draws a heart.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/2085250861
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the heart
 * @param {number} y y-coordinate of the heart
 * @param {number} radius
 *
 * @example
 * heart(100, 100, 50);
 */
heart = (x, y, radius) => {
    const ay = y - 2 * radius / 5,
        by = y + radius,
        c1y = y - 6 * radius / 5,
        c2y = y - 2 * radius / 5;
    let c1x = x + radius / 2,
        c2x = x + 9 * radius / 5;

    drawShape(() => {
        p.vertex(x, ay);
        p.bezierVertex(c1x, c1y, c2x, c2y, x, by);
        c1x = 2 * x - c1x;
        c2x = 2 * x - c2x;
        p.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
    }, true);
};

/**
 * Draws a parallelogram.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/4747962019348480
 * 
 * @category Shape
 *
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 *
 * @example
 * parallelogram(50, 50, 200, 50, 100, 100);
 *
 * @see {@link rhombus}
 */
parallelogram = (ax, ay, bx, by, cx, cy) => {
    const dx = bx - ax;
    const dy = by - ay;
    p.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

/**
 * Draws a polygon with _n_ sides.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/1304459398
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of polygon's circumcircle
 * @param {number} y y-coordinate of polygon's circumcircle
 * @param {number} sides Number of sides
 * @param {number} radius Radius of circumcircle
 * @param {number} [rotation=0] Rotation of polygon in degrees or radians
 *
 * @example
 * polygon(100, 100, 5, 100);
 *
 * @example
 * polygon(100, 100, 5, 100, 180);
 *
 * // Alternative method
 * angleMode = 'radians';
 * polygon(100, 100, 5, 100, PI);
 */
polygon = (x, y, sides, radius, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? 2 * Math.PI : 360;
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            p.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};

/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults.
 *
 * @description
 * The rectangle will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * rectangle(50, 50, 100, 50);
 * // expected outcome: Rectangle with side lengths 100 and 50
 * @example
 * rectangle(150, 50, 100, 50, 10);
 * // expected outcome: Rectangle with radius 10 for all corners
 * @example
 * rectangle(250, 50, 100, 50, 10, 0);
 * // expected outcome: Rectangle with radius 10 for top corners
 * @example
 * rectangle(50, 150, 100, 50, 10, 10, 10); 
 * // expected outcome: Rectangle with radius 10 for all but bottom-left corner
 * @example
 * rectangle(150, 150, 100, 50, 10, 10, 0, 10);
 * // expected outcome: Rectangle with radius 10 for all but bottom-right corner
 *
 * @see {@link square}
 */
rectangle = (x, y, width, height = width, tl, tr, br, bl) => {
    if (tl == undefined) p.rect(x, y, width, height);
    else if (tr == undefined) p.rect(x, y, width, height, tl);
    else if (br == undefined) p.rect(x, y, width, height, tl, tl, tr, tr);
    else if (bl == undefined) p.rect(x, y, width, height, tl, tr, br, 0);
    else p.rect(x, y, width, height, tl, tr, br, bl);
};

/**
 * Draws a rhombus.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://khanacademy.org/cs/-/4747962019348480
 * 
 * @category Shape
 *
 * @param {number} ax x-coordinate of the first vertex
 * @param {number} ay y-coordinate of the first vertex
 * @param {number} bx x-coordinate of the second vertex
 * @param {number} by y-coordinate of the second vertex
 * @param {number} cx x-coordinate of the third vertex
 * @param {number} cy y-coordinate of the third vertex
 *
 * @example
 * rhombus(50, 100, 100, 50, 100, 100);
 *
 * @see {@link parallelogram}
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = p.dist(ax, ay, bx, by) / p.dist(ax, ay, cx, cy);
    cx = ax + r * (cx - ax);
    cy = ay + r * (cy - ay);
    parallelogram(ax, ay, bx, by, cx, cy);
};

/**
 * @summary
 * Alias for `rect` with smart radius parameter defaults and one `side`
 * parameter.
 *
 * @description
 * The square will have a default corner radius of 0, if one argument is
 * provided all corners are set to match that radius. If two arguments are
 * provided, the top two corners' radius is set to the first parameter and the
 * bottom two, the second. If three arguments are provided, the last
 * argument--bottom-left corner--is defaulted to 0. If all four radius arguments
 * are provided each corner will be set to it's corresponding parameter.
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of the square
 * @param {number} y y-coordinate of the square
 * @param {number} side side length of the square
 * @param {number} [tl=0] radius of top-left corner
 * @param {number} [tr=0] radius of top-right corner
 * @param {number} [br=0] radius of bottom-right corner
 * @param {number} [bl=0] radius of bottom-left corner
 *
 * @example
 * square(50, 50, 50);
 * // expected outcome: Square with side length 50
 * @example
 * square(150, 50, 50, 10);
 * // expected outcome: Square with radius 10 for all corners
 * @example
 * square(250, 50, 50, 10, 0);
 * // expected outcome: Square with radius 10 for top corners
 * @example
 * square(50, 150, 50, 10, 10, 10);
 * // expected outcome: Square with radius 10 for all but bottom-left corner
 * @example
 * square(150, 150, 50, 10, 10, 0, 10);
 * // expected outcome: Square with radius 10 for all but bottom-right corner
 *
 * @see {@link rectangle}
 */
square = (x, y, side, tl, tr, br, bl) => {
    if (tl == undefined) p.rect(x, y, side, side);
    else if (tr == undefined) p.rect(x, y, side, side, tl);
    else if (br == undefined) p.rect(x, y, side, side, tl, tl, tr, tr);
    else if (bl == undefined) p.rect(x, y, side, side, tl, tr, br, 0);
    else p.rect(x, y, side, side, tl, tr, br, bl);
};

/**
 * Draws a star with _n_ spikes.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 *
 * @link https://www.khanacademy.org/cs/-/1171581918
 * 
 * @category Shape
 *
 * @param {number} x x-coordinate of star
 * @param {number} y y-coordinate of star
 * @param {number} externalRadius External radius
 * @param {number} [spikes=5] Number of spikes
 * @param {number} [rotation=0] Rotation of star in degrees or radians
 *
 * @example
 * star(100, 100, 50);
 *
 * @example
 * star(100, 100, 50, 7, 10);
 */
star = (x, y, externalRadius, spikes = 5, rotation) => {
    const _TAU = (Math.cos(Math.PI) < 0) ? p.TWO_PI : 360;
    const interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
    p.pushMatrix();
    p.translate(x, y);
    p.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            p.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);
    p.popMatrix();
};

/**
 * Sets the line dash pattern.
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
 * 
 * @category Shape
 * 
 * @param {...number} segment distances to alternately draw a line and a gap
 * 
 * @example
 * strokeDash(1, 20);
 * line(50, 50, 350, 50);
 * // expected outcome: dotted line with a gap of 50
 * 
 * @example
 * strokeDash(10, 5);
 * square(100, 100, 100);
 * // expected outcome: square with a dash length of 10 and spacing of 5
 * 
 * @example
 * strokeDash(5, 5, 20, 5);
 * square(100, 100, 100);
 * // expected outcome: square with a dash length alternating between 5 and 20 and spacing of 5
 * 
 * @see {@link noStrokeDash}
 */
strokeDash = (...segments) => ctx.setLineDash(segments);

/**
 * Sets the line dash offset.
 * 
 * @category Shape
 * 
 * @param {number} offset
 * 
 * @example
 * strokeDashOffset(0);
 * strokeDash(10, 10);
 * line(50, 50, 350, 50);
 * // expected outcome: dashed line
 * strokeDashOffset(5);
 * line(50, 100, 350, 100);
 * // expected outcome: dashed line offset by 5 pixels
 */
strokeDashOffset = offset => ctx.lineDashOffset = offset;

/**
 * Draws a trapezoid.
 * 
 * @author {@link https://www.khanacademy.org/profile/BobLyon/projects Bob Lyon}
 * 
 * @category Shape
 * 
 * @param {number} x x-coordinate of trapezoid
 * @param {number} y y-coordinate of trapezoid
 * @param {number} height height of trapezoid
 * @param {number} topBase width of top base
 * @param {number} bottomBase width of bottom base
 * 
 * @example
 * trapezoid(100, 100, 100, 150, 200);
 * // expected outcome: trapezoid 
 */
trapezoid = (x, y, height, topBase, bottomBase) => {
    const maxBase = Math.max(topBase, bottomBase);
    p.quad(x + (maxBase - topBase) / 2, y,
        x + (maxBase - topBase) / 2 + topBase - 1, y,
        x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1,
        x + (maxBase - bottomBase) / 2, y + height - 1);
};
