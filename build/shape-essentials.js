/** @module Shape */

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
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 *
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 *
 */
circle = (x, y, radius) => e.ellipse(x, y, radius, radius);

/**
 * Faster blur effect on a rectangular selection.
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width of the rectangle
 * @param {number} height height of the rectangle
 * @param {number} size intensity of blur
 */
blurRect = (x, y, width, height, size) => {
    if (size <= 0) return;
    size = e.constrain(size, 0, Math.min(width, height));
    e.image(e.get(x, y, width, height), x, y, width / size, height / size);
    e.image(e.get(x, y, width / size, height / size), x, y, width, height);
};

/**
 * Draws a 2D cylinder.
 *
 * @link https://www.khanacademy.org/cs/-/5157537806548992
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
    push();
    e.translate(x, y);
    if (height > width) {
        const _TAU = (Math.cos(Math.PI) < 0) ? e.TWO_PI : 360;
        e.rotate(_TAU / 4);
        cylinder(0, 0, height, width);
    } else {
        const r = height / 2;
        const z = (width - height) / 2;
        const central = 4 / 3 * (Math.sqrt(2) - 1) * r;
        drawShape(() => {
            e.vertex(z, -r);
            e.bezierVertex(z + central, -r, z + r, -central, z + r, 0);
            e.bezierVertex(z + r, central, z + central, r, z, r);
            e.vertex(-z, r);
            e.bezierVertex(-z - central, r, -z - r, central, -z - r, 0);
            e.bezierVertex(-z - r, -central, -z - central, -r, -z, -r);
        }, true);
    }
    pop();
};

/**
 * @summary
 * Draws a dashed line.
 *
 * @description
 * If `endDash` is true, a dash will be drawn of smaller length than defined by
 * `dashLength` to finish the line. If `endPoint` is true, a point will be drawn
 * at (x2, y2). Use the `smooth` function to prevent jagged dashes.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 * @param {boolean} [endDash=true] draw dash at end
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(3);
 * dashedLine(50, 50, 350, 50);
 * // expected outcome: straight dashed line
 *
 * @example
 * dashedLine(50, 75, 350, 75, 5, 10);
 * // expected outcome: straight dashed line with a dash length of 5 and spacing of 10
 *
 * @example
 * dashedLine(50, 100, 350, 100, 5, 10, false, false);
 * // expected outcome: straight dashed line and no end point
 *
 * @example
 * dashedLine(50, 125, 352.5, 125, 10, 5);
 * // expected outcome: straight dashed line and an end dash
 *
 * @example
 * dashedLine(50, 150, 352.5, 150, 10, 5, false);
 * // expected outcome: straight dashed line and no end dash
 *
 * @see {@link dottedLine}
 */
dashedLine = (x1, y1, x2, y2, dashLength = 10, spacing = 10, endDash = true, endPoint = true) => {
    const length = e.dist(x1, y1, x2, y2);
    let i = 0;
    for (; i <= length - dashLength; i += dashLength + 2 * spacing) {
        e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), e.map(i + dashLength, 0, length, x1, x2), e.map(i + dashLength, 0, length, y1, y2));
    }
    if (endDash && i < length) e.line(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2), x2, y2);
    if (endPoint && i >= length) e.point(x2 + 0.5, y2 + 0.5);
};

/**
 * @summary
 * Draws a dashed line of a given length and at a given angle.
 *
 * @description
 * If `endDash` is true, a dash will be drawn of smaller length than defined by
 * `dashLength` to finish the line. If `endPoint` is true, a point will be drawn
 * at the end point. Use the `smooth` function to prevent jagged dashes.
 *
 * @param {number} x x-coordinate of the start point
 * @param {number} y y-coordinate of the start point
 * @param {number} length length of line
 * @param {number} [angle=0] angle of line
 * @param {number} [dashLength=10] length of dash
 * @param {number} [spacing=10] spacing between points
 * @param {boolean} [endDash=true] draw dash at end
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(3);
 * dashedEdge(50, 50, 300, 0);
 * // expected outcome: straight dashed edge
 * 
 * @example
 * dashedEdge(50, 75, 300, 0, 5, 10);
 * // expected outcome: straight dashed edge with a dash length of 5 and spacing of 10
 * 
 * @example
 * dashedEdge(50, 100, 300, 0, 5, 10, false, false);
 * // expected outcome: straight dashed edge and no end point
 * 
 * @example
 * dashedEdge(50, 125, 302.5, 0, 10, 5);
 * // expected outcome: straight dashed edge and an end dash
 * 
 * @example
 * dashedEdge(50, 150, 302.5, 0, 10, 5, false);
 * // expected outcome: straight dashed edge and no end dash
 *
 * @see {@link dottedEdge}
 * @see {@link edge}
 */
dashedEdge = (x, y, length, angle = 0, dashLength = 10, spacing = 10, endDash = true, endPoint = true) => {
    if (angleMode == 'degrees') angle = e.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    dashedLine(x, y, x2, y2, dashLength, spacing, endDash, endPoint);
};

/**
 * Draws a donut.
 *
 * @link https://www.khanacademy.org/cs/-/4693526445719552
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
    push();
    e.translate(x, y);
    push();
    e.noStroke();
    drawShape(() => {
        let radius = minorDiameter / 2;
        let central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, central, central, radius, 0, radius);
        e.bezierVertex(-central, radius, -radius, central, -radius, 0);
        e.bezierVertex(-radius, -central, -central, -radius, 0, -radius);
        e.bezierVertex(central, -radius, radius, -central, radius, 0);
        radius = majorDiameter / 2;
        central = kappa * radius;
        e.vertex(radius, 0);
        e.bezierVertex(radius, -central, central, -radius, 0, -radius);
        e.bezierVertex(-central, -radius, -radius, -central, -radius, 0);
        e.bezierVertex(-radius, central, -central, radius, 0, radius);
        e.bezierVertex(central, radius, radius, central, radius, 0);
    }, true);
    pop();

    push();
    e.noFill();
    circle(0, 0, minorDiameter);
    circle(0, 0, majorDiameter);
    pop();
    pop();
};

/**
 * @summary
 * Draws a dotted line of a given length and at a given angle.
 *
 * @description
 * If `endPoint` is true, a point will be drawn at the end point. Use the `smooth`
 * function to prevent jagged points.
 *
 * @param {number} x x-coordinate of the start point
 * @param {number} y y-coordinate of the start point
 * @param {number} length length of line
 * @param {number} [angle=0] angle of line
 * @param {number} [spacing=10] gap between points
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(4);
 * dottedEdge(50, 50, 300, 0);
 * // expected outcome: straight dotted edge
 *
 * @example
 * dottedEdge(50, 75, 300, 0, 14);
 * // expected outcome: straight dotted edge with spacing of 14
 *
 * @example
 * dottedEdge(50, 100, 300, 0, 14, false);
 * // expected outcome: straight dotted edge with spacing of 14 and no end point
 *
 * @see {@link dashedEdge}
 * @see {@link edge}
 */
dottedEdge = (x, y, length, angle = 0, spacing = 10, endPoint = true) => {    
    if (angleMode == 'degrees') angle = e.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    dottedLine(x, y, x2, y2, spacing, endPoint);
};

/**
 * Alias for `beginShape()`/`endShape()`.
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
    close = close && e.CLOSE;
    e.beginShape(mode);
    fn();
    e.endShape(close);
};

/**
 * @summary
 * Draws a dotted line.
 *
 * @description
 * If `endPoint` is true, a point will be drawn at (x2, y2). Use the `smooth`
 * function to prevent jagged points.
 *
 * @param {number} x1 x-coordinate of the start point
 * @param {number} y1 y-coordinate of the start point
 * @param {number} x2 x-coordinate of the end point
 * @param {number} y2 y-coordinate of the end point
 * @param {number} [spacing=10] gap between points
 * @param {boolean} [endPoint=true] draw point at end point
 *
 * @example
 * strokeWeight(4);
 * dottedLine(50, 50, 350, 50);
 * // expected outcome: straight dotted line
 *
 * @example
 * dottedLine(50, 75, 350, 75, 14);
 * // expected outcome: straight dotted line with spacing of 14
 *
 * @example
 * dottedLine(50, 100, 350, 100, 14, false);
 * // expected outcome: straight dotted line with spacing of 14 and no end point
 *
 * @see {@link dashedLine}
 */
dottedLine = (x1, y1, x2, y2, spacing = 10, endPoint = true) => {
    const length = e.dist(x1, y1, x2, y2);
    for (let i = 0; i < length; i += spacing) {
        e.point(e.map(i, 0, length, x1, x2), e.map(i, 0, length, y1, y2));
    }
    if (endPoint) e.point(x2, y2);
};

/**
 * Draws a line of a given length and at a given angle.
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
    if (angleMode == 'degrees') angle = e.radians(angle);
    const x2 = x + length * Math.cos(angle);
    const y2 = y + length * Math.sin(angle);
    line(x, y, x2, y2);
};

/**
 * Draws a heart.
 *
 * @link https://www.khanacademy.org/cs/-/2085250861
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
        e.vertex(x, ay);
        e.bezierVertex(c1x, c1y, c2x, c2y, x, by);
        c1x = 2 * x - c1x;
        c2x = 2 * x - c2x;
        e.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
    }, true);
};

/**
 * Draws a polygon with _n_ sides.
 *
 * @link https://www.khanacademy.org/cs/-/1304459398
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
    push();
    e.translate(x, y);
    e.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            e.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    pop();
};

/**
 * Draws a parallelogram.
 *
 * @link https://www.khanacademy.org/cs/-/4747962019348480
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
    e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
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
    if (tl == undefined) e.rect(x, y, width, height);
    else if (tr == undefined) e.rect(x, y, width, height, tl);
    else if (br == undefined) e.rect(x, y, width, height, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, width, height, tl, tr, br, 0);
    else e.rect(x, y, width, height, tl, tr, br, bl);
};

/**
 * Draws a rhombus.
 *
 * @link https://khanacademy.org/cs/-/4747962019348480
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
    const r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
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
    if (tl == undefined) e.rect(x, y, side, side);
    else if (tr == undefined) e.rect(x, y, side, side, tl);
    else if (br == undefined) e.rect(x, y, side, side, tl, tl, tr, tr);
    else if (bl == undefined) e.rect(x, y, side, side, tl, tr, br, 0);
    else e.rect(x, y, side, side, tl, tr, br, bl);
};

/**
 * Draws a star with _n_ spikes.
 *
 * @link https://www.khanacademy.org/cs/-/1171581918
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
    const _TAU = (Math.cos(Math.PI) < 0) ? e.TWO_PI : 360;
    const interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
    push();
    e.translate(x, y);
    e.rotate((rotation == undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            e.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);

    pop();
};

/**
 * Draws a trapezoid.
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
    e.quad(x + (maxBase - topBase) / 2, y,
        x + (maxBase - topBase) / 2 + topBase - 1, y,
        x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1,
        x + (maxBase - bottomBase) / 2, y + height - 1);
};
