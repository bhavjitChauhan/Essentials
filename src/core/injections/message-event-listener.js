/**
 * @function interacted
 * 
 * @summary
 * Editor message event handler.
 * 
 * @description
 * Called when the editor is interacted with. Specifically, when the code is
 * changed or the text cursor is moved.
 * 
 * @category Core
 * 
 * @example
 * function interacted() {
 *    console.log('Interacted');
 * }
 */
p.interacted = noop;

/**
 * @function restarted
 * 
 * @summary
 * Restart event handler.
 * 
 * @description
 * Called when the program is retarted via the "Restart" button or the code
 * being edited.
 * 
 * @category Core
 * 
 * @example
 * function restarted() {
 *    console.log('Restarted');
 * }
 */
p.restarted = noop;

_code_ = typeof _code_ == 'undefined' ? '' : _code_;
_cursor_start_ = typeof _cursor_start_ == 'undefined' ? 0 : _cursor_start_;
_cursor_end_ = typeof _cursor_end_ == 'undefined' ? 0 : _cursor_end_;

var ESSENTIALS_MESSAGE_LISTENER;
if (!ESSENTIALS_MESSAGE_LISTENER) {
    addEventListener('message', event => {        
        var data = JSON.parse(event.data);
        if ('code' in data) {
            _code_ = data.code;
        }
        if ('cursor' in data) {
            _cursor_start_ = data.cursor.start;
            _cursor_end_ = data.cursor.end;
        } else if ('setCursor' in data) {
            _cursor_start_ = data.setCursor.start;
            _cursor_end_ = data.setCursor.end;
        }
        if ('code' in data || 'setCursor' in data) {            
            typeof p.interacted == 'function' && p.interacted(event);
        }
        if ('code' in data || 'restart' in data) {
            restart();
            typeof p.restarted == 'function' && p.restarted(event);
        }
    });
    ESSENTIALS_MESSAGE_LISTENER = true;
}
