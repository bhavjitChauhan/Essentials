/**
 * Removes line dash pattern.
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
* Gets current stroke weight.
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
 * Gets current stroke cap.
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
* @returns {string}
* 
* @example
* strokeJoin(SQUARE);
* println(getStrokeJoin() == SQUARE);
* // expected output: true
*/
getStrokeJoin = () => ctx.lineJoin;
