/**
 * Sets the line dash pattern.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash}
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
