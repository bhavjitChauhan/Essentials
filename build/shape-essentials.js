/** @module Shape */

_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
    console.error('Shape Essentials depends on the Essentials Core.');
} else {
    SHAPE_ESSENTIALS = true;
    if (!_silent_ && !_shape_initialized_) console.info(
        '%cShape Essentials',
        'font-family:system-ui;font-size:0.75rem;'
    );
}

/**
 * Faster blur effect on a rectangular selection.
 *
 * @param {number} x x-coordinate of the rectangle
 * @param {number} y y-coordinate of the rectangle
 * @param {number} width width or the rectangle
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
 * Alias for `ellipse()` without the separate `width` and `height` parameters.
 * 
 * @param {number} x x-coordinate of the circle
 * @param {number} y y-coordinate of the circle
 * @param {number} radius radius of the circle
 * 
 */
circle = (x, y, radius) => e.ellipse(x, y, radius, radius);

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
 * @see rhombus
 */
parallelogram = (ax, ay, bx, by, cx, cy) => {
    const dx = bx - ax;
    const dy = by - ay;
    e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
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
    e.rotate((rotation === undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        for (let theta = 0; theta < _TAU; theta += _TAU / sides) {
            e.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
        }
    }, true);
    pop();
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
 * @see parallelogram
 */
rhombus = (ax, ay, bx, by, cx, cy) => {
    const r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
    cx = ax + r * (cx - ax);
    cy = ay + r * (cy - ay);
    parallelogram(ax, ay, bx, by, cx, cy);
};

/**
 * Alias for `rect()` without the separate `width` and `height` parameters.
 * 
 * @param {number} x x-coordinate of the square
 * @param {number} y y-coordinate of the square
 * @param {number} side side size of the square
 * @param {number} [radius=0] radius of corners
 * 
 */
square = (x, y, side, radius = 0) => e.rect(x, y, side, side, radius);

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
    e.rotate((rotation === undefined) ? -_TAU / 4 : rotation);
    drawShape(() => {
        let internalRadius;
        for (let theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
            internalRadius = (internalRadius === externalRadius) ? interior : externalRadius;
            e.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
        }
    }, true);

    pop();
};
