_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';
_set_code_limit_ = typeof _set_code_limit_ !== 'undefined' ? _set_code_limit_ : 25;

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('External Essentials depends on the Essentials Core.');
} else {
  EXTERNAL_ESSENTIALS = true;
  if (!_silent_ && !_external_initialized_) console.info('%cExternal Essentials', _console_style_);
}

CANVAS = '#output-canvas';
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

_preventDefault = function (e) {
  return e.preventDefault();
};

allowScroll = function () {
  return $(CANVAS).off('wheel', _preventDefault);
};

closeLog = function () {
  return $('body > div:nth-child(1) > div:nth-child(3)').click();
};

exitPointerLock = function () {
  return document.exitPointerLock();
};

forceAllowScroll = function () {
  return $(CANVAS).off('wheel');
};

getSelectedText = function () {
  return window.getSelection().toString();
};

preventScroll = function () {
  return $(CANVAS).on('wheel', _preventDefault);
};

requestPointerLock = function () {
  return $(CANVAS)[0].requestPointerLock();
};

resizeLog = function (height) {
  return $('body > div:nth-child(1)').css('height', height);
};

supportsTouchEvents = function () {
  return 'ontouchstart' in window;
};

clearElements = function () {
  return $('#essentials').empty();
};

copyToClipboard = function (str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

detectDeviceType = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
};

detectLanguage = function () {
  var defaultLanguage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  return navigator.language || _.isArray(navigator.languages) && navigator.languages[0] || defaultLanguage;
};

allowBannedProperties = function () {
  if (!_.isEmpty(BabyHint.bannedProperties)) {
    console.warn('Restarting program to allow banned properties...');
    BabyHint.bannedProperties = {};
    restart();
    throw 'Restarting program to allow banned properties...';
  }
};

disableLoopProtector = function () {
  if (!isEmptyFunction(LoopProtector.prototype.leave)) {
    console.warn('Restarting program to disable loop protector...');
    LoopProtector.prototype.leave = noop;
    restart();
    throw 'Restarting program to disable loop protector...';
  }
};

drawElement = function (el) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(el instanceof jQuery)) settings = el;
  var container = $('#essentials');

  if (!container.length) {
    var div = $('<div>', {
      id: 'essentials'
    });
    div.css({
      position: 'absolute',
      'pointer-events': 'none'
    });
    $(CANVAS).parent().prepend(div);
    container = $('#essentials');
  }

  var defaults = {
    data: null,
    id: generateID(),
    x: 0,
    y: 0,
    width: 'max-content',
    height: 'max-content',
    interactive: true
  };

  var _$defaults = _.defaults(settings, defaults),
      data = _$defaults.data,
      id = _$defaults.id,
      x = _$defaults.x,
      y = _$defaults.y,
      width = _$defaults.width,
      height = _$defaults.height,
      interactive = _$defaults.interactive;

  if (el instanceof jQuery) {
    data && el.append(data);
    (x !== 0 || y !== 0) && el.css('position', 'absolute');
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

escapeHTML = function (str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '\'': '&#39;',
      '"': '&quot;'
    }[tag] || tag;
  });
};

getLog = function (i) {
  if (!Number.isInteger(i)) return;
  var keys = ['text', 'time'];
  var pair = [getLogsText(i), getLogsTime(i)];
  return _.object(keys, pair);
};

getCode = function () {
  var obj = arguments.callee;

  while (!(obj.arguments[0] instanceof Processing)) {
    obj = obj.caller;
    if (obj.arguments[0] instanceof MouseEvent || obj.arguments[0] instanceof KeyboardEvent) return console.warn('`getCode` is not supported in Processing event functions.');
  }

  return obj.caller.arguments[0];
};

getLogs = function () {
  var keys = ['text', 'time'],
      arr = [];

  var pairs = _.zip(getLogsText(), getLogsTime());

  pairs.forEach(function (pair) {
    arr.push(_.object(keys, pair));
  });
  return arr;
};

getLogsText = function (i) {
  var logs = $(CANVAS_LOG);

  if (Number.isInteger(i)) {
    if (logs.length <= i) return;
    return logs.eq(i).html();
  }

  return logs.toArray().map(function (el) {
    return $(el).html();
  });
};

getLogsTime = function (i) {
  var logs = $(CANVAS_LOG);

  if (Number.isInteger(i)) {
    if (logs.length <= i) return;
    var el = logs.eq(i);
    var date = new Date().toLocaleDateString();
    var time = el.parent().attr('title');
    return new Date("".concat(date, ", ").concat(time));
  }

  return logs.toArray().map(function (_el, i) {
    return getLogsTime(i);
  });
};

isBrowserTabFocused = function () {
  return !document.hidden;
};

isLocalStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

isSessionStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.sessionStorage.setItem(key, null);
    window.sessionStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

prefersDarkColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

prefersLightColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
};

printHTML = function (data) {
  data = data.replace(/<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g, '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>');
  p.println('');
  $(CANVAS_LOG).last().html(data);
};

printMD = function (data) {
  var str = '';
  var bold, italic;

  function formatMD(tag, open) {
    str += "<".concat(open ? '/' : '').concat(tag, ">");
  }

  for (var i = 0; i < data.length; i++) {
    switch (data[i]) {
      case '*':
        formatMD('b', bold);
        bold = !bold;
        break;

      case '_':
        formatMD('i', italic);
        italic = !italic;
        break;

      case '[':
        try {
          var substr = data.substr(i, data.length);
          var text = substr.match(/(?<=\[).+?(?=\])/)[0];
          var URL = substr.match(/(?<=\().+?(?=\))/)[0];
          str += "<a href=\"".concat(URL, "\">").concat(text, "</a>");
          i += text.length + URL.length + 3;
          break;
        } catch (err) {
          console.warn("Markdown error: ".concat(err));
        }

        break;

      default:
        str += data[i];
    }
  }

  printHTML(str);
};

removeElement = function (id) {
  $("#".concat(id)).remove();
};

__setCodeCallCount = typeof __setCodeCallCount !== 'undefined' ? __setCodeCallCount : 0;
__setCodeLastCall = typeof __setCodeLastCall !== 'undefined' ? __setCodeLastCall : 0;

setCode = function (code) {
  if (_.isNumber(_set_code_limit_)) {
    if (Date.now() - __setCodeLastCall < 75) __setCodeCallCount++;else __setCodeCallCount = 0;
    __setCodeLastCall = Date.now();
  }

  if (__setCodeCallCount > _set_code_limit_) return console.warn('`setCode` limit reached. Set the `_set_code_limit_` flag to `false` to disable this functionality.');
  window.top.postMessage(JSON.stringify({
    code: code
  }));
};

setLog = function (i, data) {
  var update = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var logs = $(CANVAS_LOG);
  if (logs.length <= i) return;
  var el = logs.eq(i);
  el.html(data);
  if (update) el.parent().attr('title', new Date().toLocaleTimeString());
};

unescapeHTML = function (str) {
  return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {
    return {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#39;': '\'',
      '&quot;': '"'
    }[tag] || tag;
  });
};
