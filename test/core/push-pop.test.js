describe('push() and pop()', function () {
    const fixture = window.__fixtures__['push-pop'];
    prepare();

    it('should call `pushStyle()` and `popStyle()`', function () {
        p.translate(50, 50);
        p.rotate(45);
        p.fill(0xFF00FF00);
        p.stroke(0xFF00FF00);
        push();
        p.translate(25, 25);
        p.rotate(45);
        p.fill(0xFFFF0000);
        p.stroke(0xFFFF0000);
        pop();
        p.rect(-25, -25, 50, 50);
        assert.equal(hashImageData(), fixture.style);
    });
    it('should call `ctx.save()` and `ctx.restore()`', function () {
        p.fill(0xFF00FF00);
        push();
        shadow(0xFFFF0000);
        shadowBlur(10);
        pop();
        p.rect(25, 25, 50, 50);
        assert.equal(hashImageData(), fixture.canvas);
    });
});
