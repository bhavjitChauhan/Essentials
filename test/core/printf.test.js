describe('printf()', function () {
    it('should correctly print strings', function () {
        const str = generateUUID();
        printf(str);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, `${str}`);
    });
    it('should correctly print multiple strings', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf(strA);
        printf(strB);
        const loggerText = getLogsText().join('\n');
        clearLogs();
        assert.equal(loggerText, `${strA}\n${strB}`);
    });
    it('should mimic `println` behaviour', function () {
        const strA = generateUUID(),
            strB = generateUUID(),
            strC = generateUUID(),
            strD = generateUUID();
        printf(strA);
        p.println(strB);
        printf(strC);
        p.println(strD);
        const loggerText = getLogsText().join('\n');
        clearLogs();
        assert.equal(loggerText, `${strA}\n${strB}\n${strC}\n${strD}`);
    });
    it('should format variables', function () {
        const str = generateUUID();
        printf('%', str);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, `${str}`);
    });
    it('should format multiple variables', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf('% %', strA, strB);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, `${strA} ${strB}`);
    });
    it('should escape the "%" character', function () {
        const str = generateUUID();
        printf('\\% %', str);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, `% ${str}`);
    });
    it('should correctly handle newlines', function () {
        const strA = generateUUID(),
            strB = generateUUID();
        printf('%\n%', strA, strB);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, `${strA}\n${strB}`);
    });
    it('should correctly handle non-string arguments', function () {
        const n = Math.random();
        printf(n);
        const loggerText = getLogsText(0);
        clearLogs();
        assert.equal(loggerText, n);
    });
});
