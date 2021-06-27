describe('hexToHSB()', function () {
    it('should convert regular hexadecimal colors', function () {
        const hexA = '#FF0000';
        const hexB = 'FF0000';
        assert.equal(hexToHSB(hexA), -65536);
        assert.sameOrderedMembers(hexToHSB(hexA, false), [0, 100, 100, 100]);
        assert.equal(hexToHSB(hexB), -65536);
    });
    it('should convert hexadecimal colors with an alpha value', function () {
        const hexA = '#FF0000AA';
        const hexB = 'FF0000AA';
        assert.equal(hexToHSB(hexA), -1426128896);
        assert.sameOrderedMembers(hexToHSB(hexA, false), [0, 100, 100, 66.66666666666666]);
        assert.equal(hexToHSB(hexB), -1426128896);
    });
    it('should convert regular shorthand hexadecimal colors', function () {
        const hexA = '#F00';
        const hexB = 'F00';
        assert.equal(hexToHSB(hexA), -65536);
        assert.sameOrderedMembers(hexToHSB(hexA, false), [0, 100, 100, 100]);
        assert.equal(hexToHSB(hexB), -65536);
    });
    it('should convert shorthand hexadecimal colors with an alpha value', function () {
        const hexA = '#F00A';
        const hexB = 'F00A';
        assert.equal(hexToHSB(hexA), -1426128896);
        assert.sameOrderedMembers(hexToHSB(hexA, false), [0, 100, 100, 66.66666666666666]);
        assert.equal(hexToHSB(hexB), -1426128896);
    });
    it('should respect the current color range', function () {
        const hexA = '#F00';
        const hexB = 'F00';
        p.pushStyle();
        p.colorMode(p.HSB, 360, 1, 1, 1);
        assert.sameOrderedMembers(hexToHSB(hexA, false), [0, 1, 1, 1]);
        assert.sameOrderedMembers(hexToHSB(hexB, false), [0, 1, 1, 1]);
        p.popStyle();
    });
    it('should work in the RGB color mode', function () {
        const hex = '#F00';
        p.pushStyle();
        assert.sameOrderedMembers(hexToHSB(hex, false), [0, 100, 100, 100]);
        p.popStyle();
    });
    it('should work in the HSB color mode', function () {
        const hex = '#F00';
        p.pushStyle();
        presetColorMode(p.HSB);
        assert.sameOrderedMembers(hexToHSB(hex, false), [0, 100, 100, 100]);
        p.popStyle();
    });
});
