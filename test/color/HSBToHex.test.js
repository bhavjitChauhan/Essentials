describe('HSBToHex()', function () {
    it('should convert HSB values as arguments', function () {
        const h = 360, s = 100, b = 100;
        assert.equal(HSBToHex(h, s, b), '#F00');
    });
    it('should convert HSBA values as arguments', function () {
        const h = 360, s = 100, b = 100, a = 50;
        assert.equal(HSBToHex(h, s, b, a), '#FF000080');
    });
    it('should convert integer colors', function () {
        const col = GREEN;
        assert.equal(HSBToHex(col), '#008000');
    });
    it('should convert integer colors with transparency', function () {
        const col = p.color(GREEN, 100);
        assert.equal(HSBToHex(col), '#00800064');
    });
    it('should respect the octothorpe argument', function () {
        const col = GREEN;
        assert.equal(HSBToHex(col, true, false), '008000');
    });
    it('should convert HSB to shorthand hexadecimal values', function () {
        const col = RED;
        assert.equal(HSBToHex(col), '#F00');
    });
    it('should convert HSBA to shorthand hexadecimal values', function () {
        const col = p.color(RED, 238);
        assert.equal(HSBToHex(col), '#F00E');
    });
    it('should respect the shorthand argument', function () {
        const col = RED;
        assert.equal(HSBToHex(col, false), '#FF0000');
    });
});
