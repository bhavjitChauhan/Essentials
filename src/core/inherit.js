/**
 * Efficiently inherits properties from the parent class to the child class.
 * 
 * @category Core
 *
 * @param {Function} subClass Class to be inherited to
 * @param {Function} superClass Class to inherit from
 *
 * @example
 * const Element = function(x, y, w, h) {
 *     this.x = x;
 *     this.y = y;
 *     this.w = w;
 *     this.h = h;
 * };
 * Element.prototype.draw = function() {
 *     rect(this.x, this.y, this.w, this.h);
 * };
 * const Button = function(x, y, w, h) {
 *     Element.call(this, x, y, w, h);
 * };
 * inherit(Button, Element);
 *
 * const b = new Button(100, 100, 150, 50);
 * b.draw();
 * // expected outcome: rectangle with arguments (100, 100, 150, 50)
 */
inherit = (subClass, superClass) => {
    Object.setPrototypeOf(subClass.prototype, superClass.prototype);
    subClass.prototype.constructor = subClass;
    if (superClass.prototype.constructor === Object)
        superClass.prototype.constructor = superClass;
};
