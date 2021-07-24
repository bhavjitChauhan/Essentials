/**
 * @summary
 * Creates an HTML element and "draws" it on top of the canvas.
 * 
 * @description
 * If no jQuery object is provided an empty `<div>` element is created that
 * contains HTML provided in the `data` parameter.
 * 
 * By default, elements are interactive, meaning they block canvas interaction
 * directly under them. Set the `interactive` settings to `false` to allow for
 * click-through canvas interaction instead.
 * 
 * @category External
 * 
 * @param {jQuery} [el] jQuery object
 * @param {Object} [settings]
 * @param {string} [settings.data] HTML
 * @param {string} [settings.id] HTML id
 * @param {number} [settings.x=0] x-coordinate of the element
 * @param {number} [settings.y=0] y-coordinate of the element
 * @param {number} [settings.width='max-content'] width of element
 * @param {number} [settings.height='max-content'] height of element
 * @param {boolean} [settings.interactive=true]
 * @param {Object} [settings.css]
 * 
 * @returns {string} id
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World'
 * });
 * drawElement(el);
 * // expected outcome: 'Hello World' element drawn at the top-left corner
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World'
 * });
 * drawElement(el, {
 *     x: 100,
 *     y: 100
 * });
 * // expected outcome: 'Hello World' element drawn at (100, 100)
 * 
 * @example
 * drawElement({
 *     data: '<p>Hello World</p>',
 *     x: 100,
 *     y: 100
 * });
 * // expected outcome: 'Hello World' element drawn at (100, 100)
 * 
 * @example
 * const el = $('<p>', {
 *     text: 'Hello World',
 *     css: { color: 'red' }
 * });
 * drawElement(el);
 * // expected outcome: 'Hello World' element drawn at the top-left corner in red
 * 
 * @example
 * drawElement({
 *     data: '<p>Hello World</p>',
 *     css: { color: 'red' }
 * });
 * // expected outcome: 'Hello World' element drawn at the top-left corner in red
 * 
 * @see {@link removeElement}
 * @see {@link clearElements}
 */
drawElement = (el, settings = {}) => {
    if (!(el instanceof jQuery)) settings = el;
    let container = $('#essentials');
    if (!container.length) {
        const div = $('<div>', {
            id: 'essentials'
        });
        div.css({
            position: 'absolute',
            'pointer-events': 'none'
        });
        $(CANVAS).parent().prepend(div);
        container = $('#essentials');
    }
    const defaults = {
        data: null,
        id: generateID(),
        x: 0,
        y: 0,
        width: 'max-content',
        height: 'max-content',
        interactive: true
    };
    const { data, id, x, y, width, height, interactive } = _.defaults(settings, defaults);
    if (el instanceof jQuery) {
        data && el.append(data);
        (x !== 0 || y !== 0 ) && el.css('position', 'absolute');
        !el.attr('id') && el.attr('id', id);
        !el.css('left') && el.css('left', x);
        !el.css('top') && el.css('top', y);
        el.css('width') == '0px' && el.css('width', width);
        el.css('height') == '0px' && el.css('height', height);
        !el.css('pointer-events') && el.css('pointer-events', 'auto');
    } else {
        el = $('<div>', {
            html: data,
            id: id
        });
        el.css({
            position: 'absolute',
            left: x,
            top: y
        });
        width && el.css('width', width);
        height && el.css('height', height);
        interactive && el.css('pointer-events', 'auto');
    }
    Object.prototype.hasOwnProperty.call(settings, 'css') && el.css(settings.css);
    container.append(el);
    return id;
};
