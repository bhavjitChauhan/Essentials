_external_initialized_ = typeof EXTERNAL_ESSENTIALS !== 'undefined';

if (typeof ESSENTIALS_CORE === 'undefined') {
  console.error('External Essentials depends on the Essentials Core.');
} else {
  EXTERNAL_ESSENTIALS = true;
  if (!_silent_ && !_external_initialized_) console.info('%cExternal Essentials', _console_style_);
}

_doc = _eval('documen' + 't');
CREATE_ELEMENT = 'createElemen' + 't';

_preventDefault = function (e) {
  return e.preventDefault();
};

CANVAS = '#output-canvas';
CANVAS_LOG = 'body div:first div:nth-child(2) div div';

supportsTouchEvents = function () {
  return 'ontouchstart' in window;
};

getSelectedText = function () {
  return window.getSelection().toString();
};

preventScroll = function () {
  return $(CANVAS).on('wheel', _preventDefault);
};

allowScroll = function () {
  return $(CANVAS).off('wheel', _preventDefault);
};

forceAllowScroll = function () {
  return $(CANVAS).off('wheel');
};

requestPointerLock = function () {
  return $(CANVAS)[0].requestPointerLock();
};

exitPointerLock = function () {
  return _doc.exitPointerLock();
};

resizeLog = function (height) {
  return $('body > div:nth-child(1)').css('height', height);
};

closeLog = function () {
  return $('body > div:nth-child(1) > div:nth-child(3)').click();
};

detectDeviceType = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
};

clearElements = function () {
  return $('#essentials').empty();
};

copyToClipboard = function (str) {
  var el = _doc[CREATE_ELEMENT]('textarea');

  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';

  _doc.body.appendChild(el);

  var selected = _doc.getSelection().rangeCount > 0 ? _doc.getSelection().getRangeAt(0) : false;
  el.select();

  _doc.execCommand('copy');

  _doc.body.removeChild(el);

  if (selected) {
    _doc.getSelection().removeAllRanges();

    _doc.getSelection().addRange(selected);
  }
};

detectLanguage = function () {
  var defaultLanguage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  return navigator.language || Array.isArray(navigator.languages) && navigator.languages[0] || defaultLanguage;
};

allowBannedProperties = function () {
  if (!_.isEmpty(BabyHint.bannedProperties)) {
    console.warn('Restarting program to allow banned properties...');
    BabyHint.bannedProperties = {};
    restart();
  }
};

disableLoopProtector = function () {
  if (!isEmptyFunction(LoopProtector.prototype.leave)) {
    console.warn('Restarting program to disable loop protector...');
    LoopProtector.prototype.leave = noop;
    restart();
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

isBrowserTabFocused = function () {
  return !_doc.hidden;
};

isSessionStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.sessionStorage.setItem(key, null);
    window.sessionStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

prefersDarkColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

isLocalStorageEnabled = function () {
  try {
    var key = generateUUID();
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

prefersLightColorScheme = function () {
  return window && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
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

printHTML = function (data) {
  data = data.replace(/<a href="([\w+:/.]+)">(?<=>)(.+?)(?=<)<\/a>/g, '<abbr title="Ctrl + Click"><a href="$1" target="_blank">$2</a></abbr>');
  var previousData = $(CANVAS_LOG).html();
  if (!previousData) e.println('');
  $(CANVAS_LOG).html((previousData && previousData + '<br>' || '') + data);
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

removeElement = function (id) {
  $("#".concat(id)).remove();
};
