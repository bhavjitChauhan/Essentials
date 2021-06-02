describe('printf()', function () {
    it('should correctly print strings', function () {
        const str = generateUUID();
        printf(str);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${str}\n`);
    });
    it('should correctly print multiple strings', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf(strA);
        printf(strB);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${strA}\n${strB}\n`);
    });
    it('should mimic `println` behaviour', function () {
        const strA = generateUUID(),
            strB = generateUUID(),
            strC = generateUUID(),
            strD = generateUUID();
        printf(strA);
        e.println(strB);
        printf(strC);
        e.println(strD);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${strA}\n${strB}\n${strC}\n${strD}\n`);
    });
    it('should format variables', function () {
        const str = generateUUID();
        printf('%', str);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${str}\n`);
    });
    it('should format multiple variables', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf('% %', strA, strB);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${strA} ${strB}\n`);
    });
    it('should escape the "%" character', function () {
        const str = generateUUID();
        printf('\\% %', str);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `% ${str}\n`);
    });
    it('should correctly handle newlines', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf('%\n%', strA, strB);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, `${strA} ${strB}\n`);
    });
    it('should correctly handle non-string arguments', function () {
        const n = Math.random();
        printf(n);
        const loggerText = getLoggerText();
        clearLogger();
        assert.equal(loggerText, n);
    });
});
