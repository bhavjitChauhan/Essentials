describe('generateUUID()', function () {
    it('should return a valid UUID', function () {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        assert.isTrue(regex.test(generateUUID()));
    });
});
