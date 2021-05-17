describe('generateID()', function () {
    it('should return an ID of default length', function () {
        const id = generateID();
        assert.isTrue(id.length == 8);
    });
    it('should return an ID of any given length', function () {
        for (let length = 2; length < 1e2; length++) {
            const id = generateID(length);
            assert.isTrue(id.length == length);
        }
    });
    it('should return a valid ID of a large given length', function () {
        const length = 1e2;
        const regex = /^[a-z0-9]+$/i;
        const id = generateID(length);
        assert.isTrue(id.length == length);
        assert.isTrue(regex.test(id));
    });
});
