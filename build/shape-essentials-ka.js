_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Shape Essentials depends on the Essentials Core.');
} else {
  SHAPE_ESSENTIALS = true;
  if (!_silent_ && !_shape_initialized_) console.info('%cShape Essentials', 'font-family:system-ui;font-size:0.75rem;');
}

blurRect = function (x, y, width, height, size) {
  if (size <= 0) return;
  size = e.constrain(size, 0, Math.min(width, height));
  e.image(e.get(x, y, width, height), x, y, width / size, height / size);
  e.image(e.get(x, y, width / size, height / size), x, y, width, height);
};

cylinder = function (x, y, width, height) {
  width = Math.abs(width);
  height = Math.abs(height);
  push();
  e.translate(x, y);

  if (height > width) {
    var _TAU = Math.cos(Math.PI) < 0 ? e.TWO_PI : 360;

    e.rotate(_TAU / 4);
    cylinder(0, 0, height, width);
  } else {
    var r = height / 2;
    var z = (width - height) / 2;
    var central = 4 / 3 * (Math.sqrt(2) - 1) * r;
    drawShape(function () {
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

circle = function (x, y, radius) {
  return e.ellipse(x, y, radius, radius);
};

donut = function (x, y, majorDiameter, minorDiameter) {
  var kappa = 4 / 3 * (Math.sqrt(2) - 1);
  push();
  e.translate(x, y);
  push();
  e.noStroke();
  drawShape(function () {
    var radius = minorDiameter / 2;
    var central = kappa * radius;
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

drawShape = function (fn, close, mode) {
  close = close && e.CLOSE;
  e.beginShape(mode);
  fn();
  e.endShape(close);
};

heart = function (x, y, radius) {
  var ay = y - 2 * radius / 5,
      by = y + radius,
      c1y = y - 6 * radius / 5,
      c2y = y - 2 * radius / 5;
  var c1x = x + radius / 2,
      c2x = x + 9 * radius / 5;
  drawShape(function () {
    e.vertex(x, ay);
    e.bezierVertex(c1x, c1y, c2x, c2y, x, by);
    c1x = 2 * x - c1x;
    c2x = 2 * x - c2x;
    e.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
  }, true);
};

parallelogram = function (ax, ay, bx, by, cx, cy) {
  var dx = bx - ax;
  var dy = by - ay;
  e.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

polygon = function (x, y, sides, radius, rotation) {
  var _TAU = Math.cos(Math.PI) < 0 ? 2 * Math.PI : 360;

  push();
  e.translate(x, y);
  e.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    for (var theta = 0; theta < _TAU; theta += _TAU / sides) {
      e.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
    }
  }, true);
  pop();
};

rectangle = function (x, y, width) {
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : width;
  var tl = arguments.length > 4 ? arguments[4] : undefined;
  var tr = arguments.length > 5 ? arguments[5] : undefined;
  var br = arguments.length > 6 ? arguments[6] : undefined;
  var bl = arguments.length > 7 ? arguments[7] : undefined;
  if (tl == undefined) e.rect(x, y, width, height);else if (tr == undefined) e.rect(x, y, width, height, tl);else if (br == undefined) e.rect(x, y, width, height, tl, tl, tr, tr);else if (bl == undefined) e.rect(x, y, width, height, tl, tr, br, 0);else e.rect(x, y, width, height, tl, tr, br, bl);
};

rhombus = function (ax, ay, bx, by, cx, cy) {
  var r = e.dist(ax, ay, bx, by) / e.dist(ax, ay, cx, cy);
  cx = ax + r * (cx - ax);
  cy = ay + r * (cy - ay);
  parallelogram(ax, ay, bx, by, cx, cy);
};

square = function (x, y, side, tl, tr, br, bl) {
  if (tl == undefined) e.rect(x, y, side, side);else if (tr == undefined) e.rect(x, y, side, side, tl);else if (br == undefined) e.rect(x, y, side, side, tl, tl, tr, tr);else if (bl == undefined) e.rect(x, y, side, side, tl, tr, br, 0);else e.rect(x, y, side, side, tl, tr, br, bl);
};

star = function (x, y, externalRadius) {
  var spikes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var rotation = arguments.length > 4 ? arguments[4] : undefined;

  var _TAU = Math.cos(Math.PI) < 0 ? e.TWO_PI : 360;

  var interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
  push();
  e.translate(x, y);
  e.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    var internalRadius;

    for (var theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
      internalRadius = internalRadius === externalRadius ? interior : externalRadius;
      e.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
    }
  }, true);
  pop();
};
