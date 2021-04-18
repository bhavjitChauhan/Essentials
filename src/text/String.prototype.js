String.prototype.format = function() {
    return format(this);
};

String.prototype.obfuscate = function () {
    return obfuscate(this);
};

String.prototype.removeNonASCII = function () {
    return removeNonASCII(this);
};

String.prototype.toTitleCase = function () {
    return toTitleCase(this);
};

String.prototype.toCamelCase = function () {
    return toCamelCase(this);
};

String.prototype.toKebabCase = function () {
    return toKebabCase(this);
};

String.prototype.toSnakeCase = function () {
    return toSnakeCase(this);
};
