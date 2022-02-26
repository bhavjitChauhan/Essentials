_shape_initialized_ = typeof SHAPE_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('Shape Essentials depends on the Essentials Core.');
} else {
  SHAPE_ESSENTIALS = true;
  if (!_silent_ && !_shape_initialized_) console.info('%cShape Essentials', _console_style_);
}

getStrokeCap = function () {
  return ctx.lineCap;
};

getStrokeJoin = function () {
  return ctx.lineJoin;
};

getStrokeWeight = function () {
  return ctx.lineWidth;
};

noStrokeDash = function () {
  return strokeDash();
};

circle = function (x, y, radius) {
  return p.ellipse(x, y, radius, radius);
};

cylinder = function (x, y, width, height) {
  width = Math.abs(width);
  height = Math.abs(height);
  p.pushMatrix();
  p.translate(x, y);

  if (height > width) {
    var _TAU = Math.cos(Math.PI) < 0 ? p.TWO_PI : 360;

    p.rotate(_TAU / 4);
    cylinder(0, 0, height, width);
  } else {
    var r = height / 2;
    var z = (width - height) / 2;
    var central = 4 / 3 * (Math.sqrt(2) - 1) * r;
    drawShape(function () {
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

donut = function (x, y, majorDiameter, minorDiameter) {
  var kappa = 4 / 3 * (Math.sqrt(2) - 1);
  p.pushMatrix();
  p.translate(x, y);
  p.pushStyle();
  p.noStroke();
  drawShape(function () {
    var radius = minorDiameter / 2;
    var central = kappa * radius;
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

drawShape = function (fn, close, mode) {
  close = close && p.CLOSE;
  p.beginShape(mode);
  fn();
  p.endShape(close);
};

edge = function (x, y, length) {
  var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  if (p.angleMode == 'degrees') angle = p.radians(angle);
  var x2 = x + length * Math.cos(angle);
  var y2 = y + length * Math.sin(angle);
  p.line(x, y, x2, y2);
};

getRotation = function () {
  var degrees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : p.angleMode == 'degrees';
  var matrix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ctx.getTransform();
  var angle = Math.atan2(matrix.b, matrix.a);
  if (angle < 0) angle += Math.PI * 2;
  return degrees ? p.degrees(angle) : angle;
};

heart = function (x, y, radius) {
  var ay = y - 2 * radius / 5,
      by = y + radius,
      c1y = y - 6 * radius / 5,
      c2y = y - 2 * radius / 5;
  var c1x = x + radius / 2,
      c2x = x + 9 * radius / 5;
  drawShape(function () {
    p.vertex(x, ay);
    p.bezierVertex(c1x, c1y, c2x, c2y, x, by);
    c1x = 2 * x - c1x;
    c2x = 2 * x - c2x;
    p.bezierVertex(c2x, c2y, c1x, c1y, x, ay);
  }, true);
};

parallelogram = function (ax, ay, bx, by, cx, cy) {
  var dx = bx - ax;
  var dy = by - ay;
  p.quad(ax, ay, bx, by, cx + dx, cy + dy, cx, cy);
};

polygon = function (x, y, sides, radius, rotation) {
  var _TAU = Math.cos(Math.PI) < 0 ? 2 * Math.PI : 360;

  p.pushMatrix();
  p.translate(x, y);
  p.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    for (var theta = 0; theta < _TAU; theta += _TAU / sides) {
      p.vertex(radius * Math.cos(theta), radius * Math.sin(theta));
    }
  }, true);
  p.popMatrix();
};

rectangle = function (x, y, width) {
  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : width;
  var tl = arguments.length > 4 ? arguments[4] : undefined;
  var tr = arguments.length > 5 ? arguments[5] : undefined;
  var br = arguments.length > 6 ? arguments[6] : undefined;
  var bl = arguments.length > 7 ? arguments[7] : undefined;
  if (tl == undefined) p.rect(x, y, width, height);else if (tr == undefined) p.rect(x, y, width, height, tl);else if (br == undefined) p.rect(x, y, width, height, tl, tl, tr, tr);else if (bl == undefined) p.rect(x, y, width, height, tl, tr, br, 0);else p.rect(x, y, width, height, tl, tr, br, bl);
};

rhombus = function (ax, ay, bx, by, cx, cy) {
  var r = p.dist(ax, ay, bx, by) / p.dist(ax, ay, cx, cy);
  cx = ax + r * (cx - ax);
  cy = ay + r * (cy - ay);
  parallelogram(ax, ay, bx, by, cx, cy);
};

square = function (x, y, side, tl, tr, br, bl) {
  if (tl == undefined) p.rect(x, y, side, side);else if (tr == undefined) p.rect(x, y, side, side, tl);else if (br == undefined) p.rect(x, y, side, side, tl, tl, tr, tr);else if (bl == undefined) p.rect(x, y, side, side, tl, tr, br, 0);else p.rect(x, y, side, side, tl, tr, br, bl);
};

star = function (x, y, externalRadius) {
  var spikes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
  var rotation = arguments.length > 4 ? arguments[4] : undefined;

  var _TAU = Math.cos(Math.PI) < 0 ? p.TWO_PI : 360;

  var interior = externalRadius * Math.sin(1 / 20 * _TAU) / Math.sin(7 / 20 * _TAU);
  p.pushMatrix();
  p.translate(x, y);
  p.rotate(rotation == undefined ? -_TAU / 4 : rotation);
  drawShape(function () {
    var internalRadius;

    for (var theta = 0; theta < _TAU; theta += _TAU / (2 * spikes)) {
      internalRadius = internalRadius === externalRadius ? interior : externalRadius;
      p.vertex(internalRadius * Math.cos(theta), internalRadius * Math.sin(theta));
    }
  }, true);
  p.popMatrix();
};

strokeDash = function () {
  for (var _len = arguments.length, segments = new Array(_len), _key = 0; _key < _len; _key++) {
    segments[_key] = arguments[_key];
  }

  return ctx.setLineDash(segments);
};

strokeDashOffset = function (offset) {
  return ctx.lineDashOffset = offset;
};

trapezoid = function (x, y, height, topBase, bottomBase) {
  var maxBase = Math.max(topBase, bottomBase);
  p.quad(x + (maxBase - topBase) / 2, y, x + (maxBase - topBase) / 2 + topBase - 1, y, x + (maxBase - bottomBase) / 2 + bottomBase - 1, y + height - 1, x + (maxBase - bottomBase) / 2, y + height - 1);
};
