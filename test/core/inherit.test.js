describe('inherit()', function () {
    it('should return a sub-class that whose prototype is an instance of the super-class', function () {
        const Element = function (x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        };
        Element.prototype.draw = function () {
            p.rect(this.x, this.y, this.w, this.h);
        };
        const Button = function (x, y, w, h) {
            Element.call(this, x, y, w, h);
        };
        inherit(Button, Element);
        assert.isTrue(Button.prototype instanceof Element);
    });
});
