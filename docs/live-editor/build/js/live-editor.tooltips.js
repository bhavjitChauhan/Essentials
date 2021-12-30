/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 *
 */
(function ($) {
    // We only use the more responsive touch events on iPad/iPhone
    //  because otherwise we also use touch on touch-enabled ChromeBooks,
    //  and students can no longer use their mouse.
    var isITouch = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			events = {
				start: isITouch ? "touchstart": "mousedown",
				end: isITouch ? "touchend" : "mouseup",
				move: isITouch ? "touchmove" : "mousemove"
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev, undoMode) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col), undoMode]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			getPagePos = function (ev) {
				var pageX = ev.pageX;
				var pageY = ev.pageY;
				if (!pageX && !pageY) {
					var targetTouches = ev.originalEvent.targetTouches;
					if (targetTouches && targetTouches[0]) {
						pageX = targetTouches[0].pageX;
						pageY = targetTouches[0].pageY;
					}
				}
				return {
					pageX: pageX,
					pageY: pageY
				};
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview
				};
				$(document).bind(events.end, current, upIncrement);
				$(document).bind(events.move, current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind(events.end, upIncrement);
				$(document).unbind(events.move, moveIncrement);
				return false;
			},
			downHue = function (ev) {
				ev.preventDefault();
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				ev.data = current;
				moveHue(ev, "startScrub");
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind(events.end, current, upHue);
				$(document).bind(events.move, current, moveHue);
			},
			moveHue = function (ev, undoMode) {
				var pos = getPagePos(ev);
				if (!pos.pageX && !pos.pageY) {
					return false;
				}
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(pos.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview, undoMode || "midScrub"]
				);
				return false;
			},
			upHue = function (ev) {
				moveHue(ev, "stopScrub");
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind(events.end, upHue);
				$(document).unbind(events.move, moveHue);
				return false;
			},
			downSelector = function (ev) {
				ev.preventDefault();
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				ev.data = current;
				moveSelector(ev, "startScrub");
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind(events.end, current, upSelector);
				$(document).bind(events.move, current, moveSelector);
			},
			moveSelector = function (ev, undoMode) {
				var pos = getPagePos(ev);
				if (!pos.pageX && !pos.pageY) {
					return false;
				}
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(pos.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(pos.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview, undoMode || "midScrub"]
				);
				return false;
			},
			upSelector = function (ev) {
				moveSelector(ev, "stopScrub");
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind(events.end, upSelector);
				$(document).unbind(events.move, moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el, cal.data('colorpicker').parent);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind(events.start, {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind(events.start, hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			},
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {

				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						options.parent = $(this);
						var cal = $(tpl).attr('id', id).attr('data-parent', $(this).attr('id'));
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind(events.start, downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						// Prevent any sort of native scrolling
						cal.bind(events.move, function(e) {
							e.preventDefault();
						});
						options.selector = cal.find('div.colorpicker_color').bind(events.start, downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind(events.start, downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery);

/**
 * Helper functionality for the Scratchpad auto suggest feature,
 * parameter information and live documentation.
 */
window.ScratchpadAutosuggest = {
    /**
     * Initializes the autosuggest functionality and adds/modifies the
     * completers to be applicable to KA.
     */
    init: function init(editor) {
        this.initialized = true;
        this.editor = editor;
        this.enableLiveCompletion(window.localStorage["autosuggest"] || true);
        var langTools = ace.require("ace/ext/language_tools");

        var customCompleters = [ScratchpadAutosuggestData._keywords, ScratchpadAutosuggestData._pjsFunctions, ScratchpadAutosuggestData._pjsVariables, ScratchpadAutosuggestData._pjsCallbacks, ScratchpadAutosuggestData._pjsObjectConstructors, ScratchpadAutosuggestData._pjsObjects];

        // Remove the default keywords completer, it includes a ton of
        // things we don't want to expose to the user like window,
        // document, etc...
        // Also remove the textCompleter. We'll use this wraped up in
        // our own completer for local variables.
        for (var i = editor.completers.length - 1; i >= 0; i--) {
            if (editor.completers[i] === langTools.keyWordCompleter) {
                editor.completers.splice(i, 1);
            } else if (editor.completers[i] === langTools.textCompleter) {
                this.internalTextCompleter = editor.completers[i];
                editor.completers.splice(i, 1);
            }
        }

        /*
        // Local completer is currently disabled because it doesn't work
        // perfectly, even with wrapping it.  I think implementing a custom
        // one before enabling would be best.
         // The internal local completer thinks numbers are identifiers
        // and suggests them if they are used, get rid of that by
        // wrapping the internal local completer in our own!
        this.localVariableCompleter = {
            getCompletions: function(editor, session, pos, prefix,
                                     callback) {
                if (prefix && isNaN(prefix[0])) {
                    this.internalTextCompleter.getCompletions(editor,
                        session, pos, prefix, callback);
                    return;
                }
                 if (prefix.length === 0) {
                    callback(null, []);
                }
            }.bind(this)
        };
        langTools.addCompleter(this.localVariableCompleter);
        */

        // Completer for keywords and pjs
        this.customCompleter = {
            getCompletions: function getCompletions(editor, session, pos, prefix, callback) {
                if (prefix.length === 0) {
                    callback(null, []);
                    return;
                }

                var completions = [];
                customCompleters.forEach((function (c) {
                    c.whitelist.forEach((function (o) {
                        // Completer entries can be simple strings or objects.
                        // If it's an object it usually has live documentation
                        // info inside of it.  Extract the name here.
                        var f = o;
                        if (_.isObject(o)) {
                            f = o.name;
                        }

                        // Only return a result if it's a prefix.
                        var funcName = f.split("(")[0];
                        if (funcName.indexOf(prefix) === -1) {
                            return;
                        }
                        completions.push({
                            // name can be anything unique
                            name: f + "-name",
                            // value is what's used for showing/autocompleting
                            value: funcName,
                            // We just rate everything the same for now. There's
                            // some basic internal matching based on keystrokes.
                            score: 299,
                            // The type to display next to the autosuggest
                            // This is a human readable short descriptive name
                            // such as: pjs function.
                            meta: c.type
                        });
                    }).bind(this));
                }).bind(this));
                callback(null, completions);
            }
        };

        langTools.addCompleter(this.customCompleter);
    },
    /**
     * It's sometimes useful to not have live completion. So expose a way to
     * enable and disable it. This is used for example when entering text
     * within a comment. The tooltips code tells us not to do autosuggest.
     * @param enable true to enable autosuggest
     */
    enableLiveCompletion: function enableLiveCompletion(enable) {
        // Ignore enableLiveCompletion calls if we're not initialized
        if (!this.initialized) {
            return;
        }
        this.editor.setOptions({
            // enable live popping up of the autosuggest
            enableLiveAutocompletion: enable
        });
    },
    /**
     * Returns the list of parameters for the specified function
     * This is used for the parameter info popup within lookupParamsSafeHTML.
     * @param lookup The function to lookup
     */
    lookupParams: function lookupParams(lookup) {
        // Ignore lookupParams calls if we're not initialized
        if (!this.initialized) {
            return;
        }
        var found = _.find(ScratchpadAutosuggestData._pjsFunctions.whitelist, function (o) {
            var f = o;
            if (_.isObject(o)) {
                f = o.name;
            }
            return f.split("(")[0] === lookup;
        });

        // If we don't have a funciton, check the keywords list
        // This feature isn't currently used but you can enable it
        // to give help for things like for loops by providing an
        // example of how it is used.
        if (!found) {
            found = _.find(ScratchpadAutosuggestData._keywords.whitelist, function (o) {
                if (_.isObject(o)) {
                    var f = o.name;
                    return f === lookup;
                }
                return false;
            });
        }

        if (!found) {
            return;
        }
        return found;
    },
    /**
     * Returns the list of parameters for the specified function in a safe
     * to present to user HTML formatted way.
     * @param f The function to lookup.
     * @param paramsToCursor The params specified so far. Used so the current
     *                       param can be marked up.
     */
    lookupParamsSafeHTML: function lookupParamsSafeHTML(f, paramsToCursor) {
        // Split up all the parameters the user specified sof far.
        var paramPositionLookup = paramsToCursor.split(",").length - 1;
        var found = this.lookupParams(f);
        if (!found) {
            return;
        }

        var f = found;
        var description,
            params,
            isFunction = true,
            exampleURL;
        var autosuggestDescription = $("<div class='autosuggest-info'/>").hide();

        // Autosuggest functions can be objects or simple strings.
        // When it's an object it has the extra live documentation info.
        // Either can be used, so handle both cases here.
        if (_.isObject(found)) {
            f = found.name;
            description = found.description;
            exampleURL = found.exampleURL;
            params = found.params;
            if (!_.isUndefined(found.isFunction)) {
                isFunction = found.isFunction;
            }
        }

        // Small helper that's used at various places below.
        // It obtains the parameter indexed at i or an empty string if none.
        var getParamInfo = function getParamInfo(i) {
            if (!params || i >= params.length) {
                return "";
            }
            return params[i];
        };

        // Setup the function name and if there's an example URL for how to
        // use this function, link it up.
        var fnParts = f.split("(");
        var fnName = $("<span class='autosuggest-function'/>").text(fnParts[0]);
        var descriptionElements = $();
        if (description) {
            descriptionElements = descriptionElements.add(fnName.data("param-info", description).data("exampleURL", exampleURL));
        }

        // Get plain text params, if there aren't any bail out here.
        var plainParams = fnParts.length > 1 ? fnParts[1].substring(0, fnParts[1].length - 1) : "";
        if (_.isUndefined(plainParams)) {
            return;
        }

        var lookupParams = plainParams.split(",");
        var returnParams = $("<span/>");
        var extraError;

        // Add a warning if too many params were specified
        if (paramPositionLookup >= lookupParams.length && fnName !== "debug") {
            paramPositionLookup = lookupParams.length - 1;
            extraError = $("  <span class='autosuggest-error'/>").text(" Too many arguments passed!");
        }

        // Add in the first params before the *current* one
        for (var i = 0; i < paramPositionLookup; i++) {
            if (returnParams.children().length) {
                returnParams.append($("<span/>").text(", "));
            }
            returnParams.append($("<span class='autosuggest-param-info'/>").text(lookupParams[i]).data("param-info", getParamInfo(i)));
        }
        if (returnParams.children().length) {
            returnParams.append($("<span>").text(", "));
        }

        // Add in the *current* param
        returnParams.append($("<span class='current-param autosuggest-param-info'/>").text(lookupParams[paramPositionLookup]).data("param-info", getParamInfo(i)));

        // Add in the params after the *current* param
        for (var i = paramPositionLookup + 1; i < lookupParams.length; i++) {
            if (returnParams.children().length) {
                returnParams.append($("<span/>").text(", "));
            }
            returnParams.append($("<span class='autosuggest-param-info'/>").text(lookupParams[i]).data("param-info", getParamInfo(i)));
        }

        // For each param, add some data with parameter info
        returnParams.find(".autosuggest-param-info").each(function () {
            if ($(this).data("param-info")) {
                descriptionElements = descriptionElements.add($(this));
            }
        });

        // If they hover over the name of functions or params,
        // then show the description!
        descriptionElements.mouseenter(function (e) {
            var data = $(e.target).addClass("autosuggest-highlight").data("param-info");
            autosuggestDescription.text("  " + data).show();
            $(".arrow").hide();
        }).mouseleave(function (e) {
            $(e.target).removeClass("autosuggest-highlight");
            autosuggestDescription.hide();
            $(".arrow").show();
        }).mousedown(function (e) {
            // If clicking on the function name, show the url in a new tab
            var exampleURL = $(e.target).addClass("autosuggest-highlight").data("exampleURL");
            if (exampleURL) {
                window.open(exampleURL, "_blank");
            }
        });

        // Return the HTML desription popup
        return $("<span/>").append(fnName).append(isFunction ? $("<span/>").text("(") : null).append(returnParams).append(isFunction ? $("<span/>").text(")") : null).append(extraError).append(autosuggestDescription);
    }
};
// Helper functionality for the Scratchpad auto suggest feature
window.ScratchpadAutosuggestData = {
    _keywords: {
        type: i18n._("keyword"),
        whitelist: ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally",
        /*
         * This is possible, but some may find it too annoying
        {
            name: "for",
            description: "Example: for (var x = 0; x < 10; x++) { }",
            isFunction: false
        },
        */
        "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with"]
    },
    _pjsFunctions: {
        type: i18n._("function"),
        whitelist: [{
            name: "rect(x, y, width, height, radius*)",
            exampleURL: "/cs/rectx-y-w-h/839496660",
            description: i18n._("Draws a rectangle, using the first two coordinates as the top left corner and the last two as the width/height. For alternate ways to position, see rectMode."),
            params: [i18n._("x: the x-coordinate of the top left corner"), i18n._("y: the y-coordinate of the top left corner"), i18n._("width: the width of the rectangle"), i18n._("height: the height of the rectangle"), i18n._("radius:(Optional) the radius of the corners, to round the rectangle")]
        }, {
            name: "ellipse(x, y, w, h)",
            exampleURL: "/cs/ellipsex-y-w-h/839435680",
            description: i18n._("Draws an ellipse, using the first two parameters as the center coordinates and the last two as the width/height. For alternate ways to position, see ellipseMode."),
            params: [i18n._("x: the x-coordinate of the center"), i18n._("y: the y-coordinate of the center"), i18n._("width: the width of the ellipse"), i18n._("height: the height of the ellipse")]
        }, {
            name: "triangle(x1, y1, x2, y2, x3, y3)",
            exampleURL: "/cs/trianglex1-y1-x2-y2-x3-y3/839546599",
            description: i18n._("Draws a triangle"),
            params: [i18n._("x1: the x-coordinate of the first vertex"), i18n._("y1: the y-coordinate of the first vertex"), i18n._("x2: the x-coordinate of the second vertex"), i18n._("y2: the y-coordinate of the second vertex"), i18n._("x3: the x-coordinate of the third vertex"), i18n._("y3: the y-coordinate of the third vertex")]
        }, {
            name: "line(x1, y1, x2, y2)",
            exampleURL: "/cs/linex1-y1-x2-y2/827916099",
            description: i18n._("Draws a line from one point to another. The color of the line is determined by the most recent stroke() call. The thickness of the line is determined by the most recent strokeWeight() call. The line ending style can be changed using strokeCap()."),
            params: [i18n._("x1: the x-coordinate of the first point"), i18n._("y1: the y-coordinate of the first point"), i18n._("x2: the x-coordinate of the second point"), i18n._("y2: the y-coordinate of the second point")]
        }, {
            name: "point(x, y)",
            exampleURL: "/cs/pointx-y/827809834",
            description: i18n._("Draws a point. The color is determined by the most recent stroke() call and the thickness is determined by the most recent strokeWeight() call."),
            params: [i18n._("x: the x-coordinate of the point"), i18n._("y: the y-coordinate of the point")]
        }, {
            name: "arc(x, y, w, h, start, stop)",
            exampleURL: "/cs/arcx-y-w-h-start-stop/1903619297",
            description: i18n._("Draws an arc.   It is very similar to an ellipse(), except that the final two parameters, start and stop, decide how much of the ellipse to draw."),
            params: [i18n._("x: The x-coordinate of the center of the complete ellipse derived from the arc"), i18n._("y: The y-coordinate of the center of the complete ellipse derived from the arc"), i18n._("width: The width of the complete ellipse formed by the partial arc"), i18n._("height: The height of the complete ellipse formed by the partial arc"), i18n._("start: The angle to start the arc at"), i18n._("stop: The angle to stop the arc at")]
        }, {
            name: "bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)",
            exampleURL: "/cs/bezierx1-y1-cx1-cy1-cx2-cy2-x2-y2/956920482",
            description: i18n._("Draws a bezier curve. To extract points and tangents after drawing the curve, use bezierPoint() and bezierTangent()."),
            params: [i18n._("x1: the x-coordinate of the first endpoint"), i18n._("y1: the y-coordinate of the first endpoint"), i18n._("cx1: the x-coordinate of the first control point"), i18n._("cy1: the y-coordinate of the first control point"), i18n._("cx2: the x-coordinate of the second control point"), i18n._("cy2: the y-coordinate of the second control point"), i18n._("x2: the x-coordinate of the second endpoint"), i18n._("y2: the y-coordinate of the second endpoint")]
        }, {
            name: "quad(x1, y1, x2, y2, x3, y3, x4, y4)",
            exampleURL: "/cs/quadx1-y1-x2-y2-x3-y3-x4-y4/1907244018",
            description: i18n._("Draws any quadrilateral, with the points listed as parameters in a clockwise or counter-clockwise direction."),
            params: [i18n._("x1: the x-coordinate of the first vertex"), i18n._("y1: the y-coordinate of the first vertex"), i18n._("x2: the x-coordinate of the second vertex"), i18n._("y2: the y-coordinate of the second vertex"), i18n._("x3: the x-coordinate of the third vertex"), i18n._("y3: the y-coordinate of the third vertex"), i18n._("x4: the x-coordinate of the fourth vertex"), i18n._("y4: the y-coordinate of the fourth vertex")]
        }, {
            name: "image(image, x, y, width*, height*)",
            exampleURL: "/cs/imageimage-x-y/937672662",
            description: i18n._("Draw an image on the canvas. The only allowed images are those that popup in the image picker when you use the getImage() method. The image is positioned using the x/y as the upper left corner. For alternate ways to position images, see imageMode."),
            params: [i18n._("image: an image returned by getImage()"), i18n._("x: the x-coordinate of the top left corner"), i18n._("y: the y-coordinate of the top left corner"), i18n._("width: (Optional) the width of the drawn image"), i18n._("height: (Optional) the height of the drawn image")]
        }, {
            name: "playSound(sound)",
            exampleURL: "/cs/playsoundsound/6655307787534336",
            description: i18n._("Plays a short sound. The only allowed sounds are those that popup in the picker when you use the getSound() method."),
            params: [i18n._("sound: a sound returned by getSound()")]
        }, {
            name: "rectMode(MODE)",
            exampleURL: "/cs/rectmodemode/4556457341091840",
            description: i18n._("Modifies the location from which rectangles draw."),
            params: [i18n._("MODE: The mode, either CORNER, CORNERS, CENTER, or RADIUS. The default is CORNER.")]
        }, {
            name: "ellipseMode(MODE)",
            exampleURL: "cs/ellipsemodemode/6709863212122112",
            description: i18n._("Changes how ellipses are drawn."),
            params: [i18n._("MODE: The mode, either CORNER, CORNERS, CENTER, or RADIUS. The default is CENTER.")]
        }, {
            name: "imageMode(MODE)",
            exampleURL: "/cs/imagemodemode/5295050787389440",
            description: i18n._("Modifies the location from which images are drawn."),
            params: [i18n._("MODE: Either CENTER, CORNERS, or CORNER. The default is CORNER.")]
        }, {
            name: "bezierPoint(a, b, c, d, t)",
            exampleURL: "/cs/bezierpointa-b-c-d-t/4551007698681856",
            description: i18n._("Evaluates the bezier curve at point t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a bezier curve at t."),
            params: [i18n._("a: coordinate of first point on the curve"), i18n._("b: coordinate of first control point"), i18n._("c: coordinate of second control point"), i18n._("d: coordinate of second point on the curve"), i18n._("t: value between 0 and 1")]
        }, {
            name: "bezierTangent(a, b, c, d, t)",
            exampleURL: "/cs/beziertangenta-b-c-d-t/4736929853603840",
            description: i18n._("Calculates the tangent of a point on a bezier curve. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points. This can be done once with the x coordinates and a second time with the y coordinates to get the tangent of a bezier curve at t."),
            params: [i18n._("a: coordinate of first point on the curve"), i18n._("b: coordinate of first control point"), i18n._("c: coordinate of second control point"), i18n._("d: coordinate of second point on the curve"), i18n._("t: value between 0 and 1")]
        }, {
            name: "bezierVertex(cx1, cy1, cx2, cy2, x, y)",
            exampleURL: "/cs/beziervertexcx1-cy1-cx2-cy2-x-y/5085481683386368",
            description: i18n._("Used in conjunction with beginShape() and endShape() to draw shapes with bezier curves for sides. Each call to bezierVertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape. The first time bezierVertex() is used within a beginShape() call, it must be prefaced with a call to vertex() to set the first anchor point. When using this function, do *not* specify a mode in beginShape()."),
            params: [i18n._("cx1: The x-coordinate of 1st control point"), i18n._("cy1: The y-coordinate of 1st control point"), i18n._("cx2: The x-coordinate of 2nd control point"), i18n._("cy2: The y-coordinate of 2nd control point"), i18n._("x: The x-coordinate of anchor point"), i18n._("y: The y-coordinate of anchor point")]
        }, {
            name: "curve(x1, y1, x2, y2, x3, y3, x4, y4)",
            exampleURL: "/cs/curve/5105742184972288",
            description: i18n._("Draws a curved line on the screen. The first and second parameters specify the first anchor point and the last two parameters specify the second anchor. The middle parameters specify the points for defining the shape of the curve. Longer curves can be created by putting a series of curve() functions together. An additional function called curveTightness() provides control for the visual quality of the curve. The curve() function is an implementation of Catmull-Rom splines."),
            params: [i18n._("x1: the x coordinate of first anchor point"), i18n._("y1: the y coordinate of first anchor point"), i18n._("x2: the x coordinate of first point"), i18n._("y2: the y coordinate of first point"), i18n._("x3: the x coordinate of second point"), i18n._("y3: the y coordinate of second point"), i18n._("x4: the x coordinate of second anchor point"), i18n._("y4: the y coordinate of second anchor point")]
        }, {
            name: "curvePoint(a, b, c, d, t)",
            exampleURL: "/cs/curvepointa-b-c-d-t/5879387094253568",
            description: i18n._("Evaluates the curve at point t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a curve at t."),
            params: [i18n._("a: the coordinate of the first point"), i18n._("b: the coordinate of the first control point"), i18n._("c: the coordinate of the second control point"), i18n._("d: the coordinate of the second point"), i18n._("t: the a value between 0 and 1")]
        }, {
            name: "curveTangent(a, b, c, d, t)",
            exampleURL: "/cs/curvetangenta-b-c-d-t/4708940860358656",
            description: i18n._("Calculates the tangent of a point on a curve. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points. This can be done once with the x coordinates and a second time with the y coordinates to get the tangent of a curve at t."),
            params: [i18n._("a: the coordinate of the first point"), i18n._("b: the coordinate of the first control point"), i18n._("c: the coordinate of the second control point"), i18n._("d: the coordinate of the second point"), i18n._("t: the a value between 0 and 1")]
        }, {
            name: "curveTightness(tightness)",
            exampleURL: "/cs/curvetightnesssquishy/4792873740402688",
            description: i18n._("Modifies the quality of forms created with curve() and curveVertex(). The tightness parameter determines how the curve fits to the vertex points."),
            params: [i18n._("tightness: amount of deformation from the original vertices")]
        }, {
            name: "curveVertex(x,y)",
            exampleURL: "/cs/curvevertexx-y/6499542019080192",
            description: i18n._("Used in conjunction with beginShape() and endShape() to draw shapes with bezier curves for sides. The first and last points in a series of curveVertex() lines will be used to guide the beginning and end of the curve."),
            params: [i18n._("x: the x-coordinate of the vertex"), i18n._("y: the y-coordinate of the vertex")]
        }, {
            name: "beginShape(MODE*)",
            exampleURL: "/cs/beginshapeendshape/5462945756610560",
            description: i18n._("Using the beginShape() and endShape() functions allow creating more complex forms. To start a form, call beginShape(), then use the vertex() command, then call endShape() to stop. By default, it creates an irregular polygon, but you can control that by sending a mode to beginShape().  Transformations such as translate(), rotate(), and scale() do not work within beginShape(). It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()."),
            params: [i18n._("MODE: (Optional) Shape mode. Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP")]
        }, {
            name: "endShape(MODE*)",
            exampleURL: "/cs/beginshapeendshape/5462945756610560",
            description: i18n._("Using the beginShape() and endShape() functions allow creating more complex forms. To start a form, call beginShape(), then use the vertex() command, then call endShape() to stop. By default, it creates an irregular polygon, but you can control that by sending a mode to beginShape().  Transformations such as translate(), rotate(), and scale() do not work within beginShape(). It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()."),
            params: [i18n._("MODE: (Optional) Specify CLOSE to close the shape.")]
        }, {
            name: "vertex(x, y)",
            exampleURL: "/cs/beginshapeendshape/5462945756610560",
            description: i18n._("Using the beginShape() and endShape() functions allow creating more complex forms. To start a form, call beginShape(), then use the vertex() command, then call endShape() to stop. By default, it creates an irregular polygon, but you can control that by sending a mode to beginShape().  Transformations such as translate(), rotate(), and scale() do not work within beginShape(). It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()."),
            params: [i18n._("x: the x-coordinate of the vertex"), i18n._("y: the y-coordinate of the vertex")]
        }, {
            name: "background(r, g, b, a*)",
            exampleURL: "/cs/backgroundr-g-b/839653892",
            description: i18n._("Sets the background color of the canvas. Note that calling this will color over anything drawn before the command."),
            params: [i18n._("r: amount of red, ranges from 0 to 255"), i18n._("g: amount of green, ranges from 0 to 255"), i18n._("b: amount of blue, ranges from 0 to 255"), i18n._("a: (Optional) transparency, ranges from 0 to 255")]
        }, {
            name: "fill(r, g, b, a*)",
            exampleURL: "/cs/fillr-g-b/839774957",
            description: i18n._("Sets the fill color for all shapes drawn after the function call."),
            params: [i18n._("r: amount of red, ranges from 0 to 255"), i18n._("g: amount of green, ranges from 0 to 255"), i18n._("b: amount of blue, ranges from 0 to 255"), i18n._("a: (Optional) transparency, ranges from 0 to 255")]
        }, {
            name: "stroke(r, g, b, a*)",
            exampleURL: "/cs/stroker-g-b/839545910",
            description: i18n._("Sets the outline color for all shapes drawn after the function call."),
            params: [i18n._("r: amount of red, ranges from 0 to 255"), i18n._("g: amount of green, ranges from 0 to 255"), i18n._("b: amount of blue, ranges from 0 to 255"), i18n._("a: (Optional) transparency, ranges from 0 to 255")]
        }, {
            name: "color(r, g, b, a*)",
            exampleURL: "/cs/colorr-g-b/957020020",
            description: i18n._("This function lets you store all three color components in a single variable. You can then pass that one variable to functions like background(), stroke(), and fill()."),
            params: [i18n._("r: amount of red, ranges from 0 to 255"), i18n._("g: amount of green, ranges from 0 to 255"), i18n._("b: amount of blue, ranges from 0 to 255"), i18n._("a: (Optional) transparency, ranges from 0 to 255")]
        }, {
            name: "noFill()",
            exampleURL: "/cs/nofill/877946290",
            description: i18n._("Makes all shapes drawn after this function call transparent.")
        }, {
            name: "noStroke()",
            exampleURL: "/cs/nostroke/839859412",
            description: i18n._("Disables outlines for all shapes drawn after the function call.")
        }, {
            name: "strokeWeight(thickness)",
            exampleURL: "/cs/strokeweightthickness/877859744",
            description: i18n._("Sets the thickness of all lines and outlines drawn after the function call."),
            params: [i18n._("thickness: a number specifying the thickness")]
        }, {
            name: "strokeJoin(MODE)",
            exampleURL: "/cs/strokejoinmode/5662070842327040",
            description: i18n._("Sets the style of the joints which connect line segments drawn with vertex(). These joints are either mitered, beveled, or rounded and specified with the corresponding parameters MITER, BEVEL, and ROUND."),
            params: [i18n._("MODE: Either MITER, BEVEL, or ROUND. The default is MITER.")]
        }, {
            name: "strokeCap(MODE)",
            exampleURL: "/cs/strokecapmode/5288182060941312",
            description: i18n._("Sets the style for rendering line endings. These ends are either squared, extended, or rounded and specified with the corresponding parameters SQUARE, PROJECT, and ROUND."),
            params: [i18n._("MODE: Either SQUARE, PROJECT, or ROUND. The default is ROUND")]
        }, {
            name: "blendColor(c1, c2, MODE)",
            exampleURL: "/cs/blendcolorc1-c2-mode/4530750216994816",
            description: i18n._("Blends two color values together based on the blending mode given as the MODE parameter."),
            params: [i18n._("c1: The first color to blend"), i18n._("c2: The second color to blend"), i18n._("MODE: Either BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, or BURN.")]
        }, {
            name: "lerpColor(c1, c2, amount)",
            exampleURL: "/cs/lerpcolorc1-c2-amount/4759935778816000",
            description: i18n._("Calculates a color between two colors at a specific increment. The amount parameter is the amount to interpolate between the two values where 0.0 equal to the first color, 0.1 is very near the first color, 0.5 is half-way in between, etc."),
            params: [i18n._("c1: Interpolate from this color"), i18n._("c2: Interpolate to this color")]
        }, {
            name: "colorMode(MODE)",
            exampleURL: "/cs/colormode/5833774306689024",
            description: i18n._("Changes the way that color values are interpreted when set by fill()/stroke()/background()."),
            params: [i18n._("MODE: Either RGB or HSB. The default is RGB.")]
        }, {
            name: "red(color)",
            exampleURL: "/cs/redcolor/5102159326609408",
            description: i18n._("Extracts the red value from a color, scaled to match current colorMode()."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "green(color)",
            exampleURL: "/cs/greencolor/5877638103040000",
            description: i18n._("Extracts the green value from a color, scaled to match current colorMode()."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "blue(color)",
            exampleURL: "/cs/bluecolor/5177743654256640",
            description: i18n._("Extracts the blue value from a color, scaled to match current colorMode()."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "alpha(color)",
            exampleURL: "/cs/alphacolor/6687311345483776",
            description: i18n._("Extracts the alpha value from a color."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "hue(color)",
            exampleURL: "/cs/huecolor/6620387366404096",
            description: i18n._("Extracts the hue value from a color."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "saturation(color)",
            exampleURL: "/cs/saturationcolor/6358678768713728",
            description: i18n._("Extracts the saturation value from a color."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "brightness(color)",
            exampleURL: "/cs/brightnesscolor/5888575639912448",
            description: i18n._("Extracts the brightness value from a color."),
            params: [i18n._("color: Any color data type")]
        }, {
            name: "text(message, x, y, width*, height*)",
            exampleURL: "/cs/texttext-x-y/937624625",
            description: i18n._("Draws a string of text at the specified location"),
            params: [i18n._("message: the string of text to display"), i18n._("x: the x-coordinate of the bottom left corner"), i18n._("y: the y-coordinate of the bottom left corner"), i18n._("width: (Optional) the width of the box for text to auto wrap inside"), i18n._("height: (Optional) the height of the box for text to auto wrap inside")]
        }, {
            name: "textFont(font, size*)",
            exampleURL: "/cs/textfontfont-size/940030209",
            description: i18n._("Using textFont() with createFont(), it's possible to change the font of text drawn."),
            params: [i18n._("font: A font returned by the createFont function"), i18n._("size: (Optional) The size of the font, in pixels")]
        }, {
            name: "createFont(name, size*)",
            exampleURL: "/cs/textfontfont-size/940030209",
            description: i18n._("Using textFont() with createFont(), it's possible to change the font of text drawn."),
            params: [i18n._("name: A font name, either \"sans-serif\", \"serif\", \"monospace\", \"fantasy\", or \"cursive\""), i18n._("size: (Optional) The size of the font, in pixels")]
        }, {
            name: "textSize(size)",
            exampleURL: "/cs/textsizesize/937728198",
            description: i18n._("Changes the size of text being drawn."),
            params: [i18n._("size: The size of the text, in pixels")]
        }, {
            name: "textWidth(str)",
            exampleURL: "/cs/textwidthstr/4799257177489408",
            description: i18n._("Calculates and returns the width of any string."),
            params: [i18n._("str: The string to calculate the width of")]
        }, {
            name: "textAscent()",
            exampleURL: "/cs/textascent/5975406490419200",
            description: i18n._("Returns the ascent of the current font at its current size. The ascent is the height of the font above the baseline.")
        }, {
            name: "textDescent()",
            exampleURL: "/cs/textdescent/5638769772331008",
            description: i18n._("Returns descent of the current font at its current size. The descent is the distance of the font below the baseline.")
        }, {
            name: "textLeading(dist)",
            exampleURL: "/cs/textleadingdist/6369013500215296",
            description: i18n._("Sets the spacing between lines of text in units of pixels. This setting will be used in all subsequent calls to the text() function."),
            params: [i18n._("dist: The size in pixels for spacing between lines")]
        }, {
            name: "textAlign(ALIGN, YALIGN)",
            exampleURL: "/cs/textalignalign-yalign/4508437190803456",
            description: i18n._("Sets the current alignment for drawing text. The first parameter is used to set the display characteristics of the letters in relation to the values for the x and y parameters of the text() function.  The second parameter is used to vertically align the text. BASELINE is the default setting, if textAlign is not used. The TOP and CENTER parameters are straightforward. The BOTTOM parameter offsets the line based on the current textDescent(). For multiple lines, the final line will be aligned to the bottom, with the previous lines appearing above it."),
            params: [i18n._("ALIGN: Horizontal alignment, either LEFT, CENTER, or RIGHT"), i18n._("YALIGN: Vertical alignment, either TOP, BOTTOM, CENTER, or BASELINE")]
        }, {
            name: "rotate(angle)",
            exampleURL: "/cs/rotateangle/6386091934351360",
            description: i18n._("Sets the rotation angle for any shapes drawn after the command. If called multiple times, the angle will be added to the previous angle (accumulative effect). To stop rotation, use pushMatrix()/popMatrix()."),
            params: [i18n._("angle: The number of degrees to rotate by. To specify in radians, use the angleMode() function.")]
        }, {
            name: "scale(amount, amountY*)",
            exampleURL: "/cs/scalex-y/6712922034143232",
            description: i18n._("Increases the size of shapes drawn after the command, by expanding and contracting vertices. For example, scale(2) makes it increase in size by 200%. If called multiple times, the sizes will multiply (accumulative effect). It can be called with one parameter to resize the same in both dimensions, or with two parameters to size differently in each dimension.  To stop resizing shapes, use pushMatrix()/popMatrix()."),
            params: [i18n._("amount: The amount to scale object in \"x\" and \"y\" axis"), i18n._("amountY: (Optional) The amount to scale object in \"y\" axis")]
        }, {
            name: "translate(x, y)",
            exampleURL: "/cs/translatex-y/6505693083336704",
            description: i18n._("Displaces the drawn shapes by a given amount in the x/y directions. If called multiple times, the offsets will be added to each other (accumulative effect). To stop translating shapes, use pushMatrix()/popMatrix()."),
            params: [i18n._("x: The amount to translate left/right."), i18n._("y: The amount to translate up/down.")]
        }, {
            name: "pushMatrix()",
            exampleURL: "/cs/pushmatrixpopmatrix/5505194477486080",
            description: i18n._("Remembers the current coordinate system (in the \"matrix stack\").")
        }, {
            name: "popMatrix()",
            exampleURL: "/cs/pushmatrixpopmatrix/5505194477486080",
            description: i18n._("Restores the previous coordinate system (from the \"matrix stack\") - whatever was most recently pushed.")
        }, {
            name: "resetMatrix()",
            exampleURL: "/cs/resetmatrix/4597705468805120",
            description: i18n._("Replaces the current transformation matrix with the identity matrix. This effectively clears all transformation functions set before it.")
        }, {
            name: "printMatrix()",
            exampleURL: "/cs/printmatrix/5934612152844288",
            description: i18n._("Prints the current transformation matrix to the console.")
        }, {
            name: "frameRate(fps)",
            exampleURL: "/cs/frameratefps/6427359154536448",
            description: i18n._("Specifies the number of frames to be displayed every second. If the processor is not fast enough to maintain the specified rate, it will not be achieved. For fluid animation, at least 24 frames per second is recommended."),
            params: [i18n._("fps: A whole number, number of frames per second")]
        }, {
            name: "loop()",
            exampleURL: "/cs/loop/5519218351013888",
            description: i18n._("Causes the program to continuously execute the code within draw(). If noLoop() is called, the code in draw() stops executing.")
        }, {
            name: "noLoop()",
            exampleURL: "/cs/noloop/6342789906300928",
            description: i18n._("Stops the program from continuously executing the code within draw(). If loop() is called, the code in draw() begin to run continuously again.")
        }, {
            name: "random(low, high)",
            exampleURL: "/cs/randomlow-high/827911487",
            description: i18n._("Returns a random number between low and high."),
            params: [i18n._("low: the lowest possible number returned"), i18n._("high: the highest possible number returned")]
        }, {
            name: "dist(x1, y1, x2, y2)",
            exampleURL: "/cs/distx1-y1-x2-y2/1917352082",
            description: i18n._("Calculates the distance between two points, (x1, y1) and (x2, y2)."),
            params: [i18n._("x1: the x-coordinate of the first point"), i18n._("y1: the y-coordinate of the first point"), i18n._("x2: the x-coordinate of the second point"), i18n._("y2: the y-coordinate of the second point")]
        }, {
            name: "constrain(value, min, max)",
            exampleURL: "/cs/constrainvalue-min-max/5870136103796736",
            description: i18n._("Constrains a value to not exceed a maximum and minimum value."),
            params: [i18n._("value: The value to constrain"), i18n._("min: The minimum limit"), i18n._("max: The maximum limit")]
        }, {
            name: "min(num1, num2)",
            exampleURL: "/cs/minnum1-num2/4693347713155072",
            description: i18n._("Returns the smallest value of all values passed in."),
            params: [i18n._("num1: The first value to compare, any number."), i18n._("num2: The second value to compare, any number.")]
        }, {
            name: "max(num1, num2)",
            exampleURL: "/cs/maxnum1-num2/4755409722146816",
            description: i18n._("Returns the greatest value of all values passed in."),
            params: [i18n._("num1: The first value to compare, any number."), i18n._("num2: The second value to compare, any number.")]
        }, {
            name: "abs(num)",
            exampleURL: "/cs/absnum/877930637",
            description: i18n._("Returns the absolute value of a number"),
            params: [i18n._("num: The number to take the absolute value of")]
        }, {
            name: "log(num)",
            exampleURL: "/cs/lognum/877921884",
            description: i18n._("Returns the the natural logarithm (base-e) of a number."),
            params: [i18n._("num: The number to take the log of")]
        }, {
            name: "pow(num, exponent)",
            exampleURL: "/cs/pownum-exponent/877858853",
            description: i18n._("Returns a number raised to an exponential power."),
            params: [i18n._("num: The base of the exponential expression"), i18n._("exponent: The power to which the num is raised")]
        }, {
            name: "sq(num)",
            exampleURL: "/cs/sqnum/6588187426160640",
            description: i18n._("Squares a number (multiplies a number by itself). The result is always a positive number, as multiplying two negative numbers always yields a positive result. For example, -1 * -1 = 1"),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "sqrt(num)",
            exampleURL: "/cs/sqrtnum/6473360267542528",
            description: i18n._("Calculates the square root of a number. The square root of a number is always positive, even though there may be a valid negative root. The square root s of number a is such that s*s = a. It is the opposite of squaring."),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "round(num)",
            exampleURL: "/cs/roundnum/5907281296228352",
            description: i18n._("Calculates the closest whole number that is closest to the value of the parameter."),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "ceil(num)",
            exampleURL: "/cs/ceil/5491781646942208",
            description: i18n._("Calculates the closest whole number that is greater than or equal to the value of the parameter."),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "floor(num)",
            exampleURL: "/cs/floornum/5703004061696000",
            description: i18n._("Calculates the closest whole number that is less than or equal to the value of the parameter."),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "mag(x1, y1)",
            exampleURL: "/cs/magx1-y1-not-working-yet/5983219002376192",
            description: i18n._("Calculates the magnitude (or length) of a vector. A vector is a direction in space commonly used in computer graphics and linear algebra. Because it has no \"start\" position, the magnitude of a vector can be thought of as the distance from coordinate (0,0) to its (x,y) value. Therefore, mag() is a shortcut for writing dist(0, 0, x, y)."),
            params: [i18n._("x: the x component"), i18n._("y: the y component")]
        }, {
            name: "exp(num)",
            exampleURL: "/cs/expvalue/5228990398726144",
            description: i18n._("Returns Euler's number e (2.71828...) raised to the power of the value parameter."),
            params: [i18n._("num: Any numeric value")]
        }, {
            name: "map(num, low1, high1, low2, high2)",
            exampleURL: "/cs/mapvalue-low1-high1-low2-high2/4587974079545344",
            description: i18n._("Re-maps a number from one range to another. Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful."),
            params: [i18n._("num: The incoming value to be converted"), i18n._("low1: Lower bound of the value's current range"), i18n._("high1: Upper bound of the value's current range"), i18n._("low2: Lower bound of the value's target range"), i18n._("high2: Upper bound of the value's target range")]
        }, {
            name: "norm(num, low, high)",
            exampleURL: "/cs/normvalue-low-high/6581050767572992",
            description: i18n._("Normalizes a number from another range into a value between 0 and 1. This is the same as using the map function with the last two parameters set to 0 and 1, i.e: map(value, low, high, 0, 1); Numbers outside the range are not clamped to 0 and 1, because out-of-range values are often intentional and useful."),
            params: [i18n._("num: The incoming value to be converted"), i18n._("low1: Lower bound of the value's current range"), i18n._("high1: Upper bound of the value's current range")]
        }, {
            name: "lerp(num1, num2, amount)",
            exampleURL: "/cs/lerpvalue1-value2-amount/6456916012171264",
            description: i18n._("Calculates a number between two numbers at a specific increment."),
            params: [i18n._("num1: The first number"), i18n._("num2: The second number"), i18n._("amount: A value between 0.0 and 1.0")]
        }, {
            name: "noise(x, y)",
            exampleURL: "/cs/noise/5618485581316096",
            description: i18n._("Returns the Perlin noise value at specified coordinates. The resulting value will always be between 0.0 and 1.0"),
            params: [i18n._("x: the x-coordinate in noise space"), i18n._("y: the y-coordinate in noise space (optional)")]
        }, {
            name: "noiseDetail(octaves, falloff)",
            exampleURL: "/cs/noisedetailoctaves-falloff/6549875814563840",
            description: i18n._("Adjusts the character and level of detail produced by the Perlin noise function."),
            params: [i18n._("octaves: The number of octaves to be used by the noise() function"), i18n._("falloff: The falloff factor for each octave")]
        }, {
            name: "sin(degrees)",
            exampleURL: "/cs/sindeg/948255306",
            description: i18n._("Return the sine of an angle."),
            params: [i18n._("deg: The angle, in degrees")]
        }, {
            name: "cos(degrees)",
            exampleURL: "/cs/cosdeg/948226821",
            description: i18n._("Return the cosine of an angle."),
            params: [i18n._("deg: The angle, in degrees")]
        }, {
            name: "tan(degrees)",
            exampleURL: "/cs/tandeg/948018680",
            description: i18n._("Return the tangent of an angle"),
            params: [i18n._("deg: The angle, in degrees")]
        }, {
            name: "acos(val)",
            exampleURL: "/cs/acosval/4542953527705600",
            description: i18n._("Returns the arc cosine (inverse cosine) of a value. Depending on the angle mode, it returns values from 0-180 or 0-PI."),
            params: [i18n._("val: The value whose arc cosine is to be returned.")]
        }, {
            name: "asin(val)",
            exampleURL: "/cs/asinval/5061655520083968",
            description: i18n._("Returns the arc sine (inverse sine) of a value. Depending on the angle mode, it returns values from -90 to 90 or -PI/2 to PI/2."),
            params: [i18n._("val: The value whose arc sine is to be returned.")]
        }, {
            name: "atan(val)",
            exampleURL: "/cs/atanval/4869834059808768",
            description: i18n._("Returns the arc tangent (inverse tangent) of a value. Depending on the angle mode, it returns values from -90 to 90 or -PI/2 to PI/2."),
            params: [i18n._("val: The value whose arc tangent is to be returned")]
        }, {
            name: "radians(angle)",
            exampleURL: "/cs/radiansangle/6628151023108096",
            description: i18n._("Converts a degree measurement to its corresponding value in radians."),
            params: [i18n._("angle: The angle in degrees")]
        }, {
            name: "degrees(angle)",
            exampleURL: "/cs/degreesangle/6674991668002816",
            description: i18n._("Converts a radians measurement to its corresponding value in degrees."),
            params: [i18n._("angle: The angle in radians")]
        }, {
            name: "day()",
            exampleURL: "/cs/day/4526347808407552",
            description: i18n._("Returns the current day of the month, between 1 and 31, according to the clock on the user's computer.")
        }, {
            name: "month()",
            exampleURL: "/cs/month/5388987023753216",
            description: i18n._("Returns the current month of the year, between 1-12, according to the clock on the user's computer.")
        }, {
            name: "year()",
            exampleURL: "/cs/year/6216887939629056",
            description: i18n._("Returns the current year according to the clock on the user's computer.")
        }, {
            name: "hour()",
            exampleURL: "/cs/hour/5806957302644736",
            description: i18n._("Returns the current hour as a value from 0 - 23, based on the user's computer clock.")
        }, {
            name: "minute()",
            exampleURL: "/cs/minute/6638408210317312",
            description: i18n._("Returns the current minute as a value from 0 - 59, based on the user's computer clock.")
        }, {
            name: "second()",
            exampleURL: "/cs/second/5743886110556160",
            description: i18n._("Returns the current second as a value from 0 - 59, based on the user's computer clock.")
        }, {
            name: "millis()",
            exampleURL: "/cs/millis/5970545493409792",
            description: i18n._("Returns the number of milliseconds (thousandths of a second) since starting the program. Useful for cyclic animations.")
        }, {
            name: "debug(arg1, ...",
            exampleURL: "/cs/debugarg1-arg2/939146973",
            description: i18n._("Log out any number of values to the browser console."),
            params: [i18n._("arg: The first value to log"), i18n._("...: (Optional)* any amount of extra arguments")]
        }, {
            name: "println(data)",
            exampleURL: "/cs/printlndata/6120466259378176",
            description: i18n._("Prints a line of data to the console that pops up over the canvas. Click the X to close the console."),
            params: [i18n._("data: The data to print")]
        }, {
            name: "print(data)",
            exampleURL: "/cs/printdata/5110798099677184",
            description: i18n._("Prints data to the console that pops up over the canvas, without creating a new line (like println does)."),
            params: [i18n._("data: The data to print")]
        }]
    },
    _pjsObjectConstructors: {
        type: i18n._("object constructor"),
        whitelist: ["PVector(x,y)"]
    },
    _pjsObjects: {
        type: i18n._("object"),
        whitelist: ["Random"]
    },
    _pjsVariables: {
        type: i18n._("variable"),
        whitelist: ["width", "height", "mouseIsPressed", "keyIsPressed", "frameCount", "key", "keyCode", "mouseButton", "mouseX", "mouseY", "pmouseX", "pmouseY", "angleMode"]
    },
    _pjsCallbacks: {
        type: i18n._("callback"),
        whitelist: ["draw", "mouseClicked", "mousePressed", "mouseReleased", "mouseMoved", "mouseDragged", "mouseOver", "mouseOut", "keyPressed", "keyReleased", "keyTyped"]
    }
};
window.TooltipEngine = Backbone.View.extend({
    initialize: function initialize(options) {
        this.options = options;
        this.editor = options.editor;
        this.enabled = true;
        var record = this.options.record;

        this.tooltips = {};
        var childOptions = _.defaults({
            parent: this
        }, options);

        _.each(options.tooltips, (function (name) {
            this.tooltips[name] = new TooltipEngine.classes[name](childOptions);
            this.tooltips[name].on("scrubbingStarted", (function () {
                this.trigger("scrubbingStarted", name);
            }).bind(this));
            this.tooltips[name].on("scrubbingEnded", (function () {
                this.trigger("scrubbingEnded", name);
            }).bind(this));
        }).bind(this));

        if (record && !record.handlers.hot) {
            record.handlers.hot = (function (e) {
                if (this.currentTooltip) {
                    TooltipBase.prototype.updateText.call(this.currentTooltip, e.hot);
                }
            }).bind(this);

            // disable autofill when playback or seeking has started
            ["playStarted", "runSeek"].forEach(function (event) {
                record.on(event, (function () {
                    _.values(this.tooltips).forEach(function (tooltip) {
                        tooltip.autofill = false;
                    });
                }).bind(this));
            }, this);

            // enable autofill when playback or seeking has stopped
            ["playPaused", "playStopped", "seekDone"].forEach(function (event) {
                record.on(event, (function () {
                    _.values(this.tooltips).forEach(function (tooltip) {
                        tooltip.autofill = true;
                    });
                }).bind(this));
            }, this);
        }

        this.currentTooltip = undefined;
        this.ignore = false;
        this.bind();
    },

    bind: function bind() {
        if (this.callbacks) {
            return;
        }

        var checkBlur = (function (e) {
            var inEditor = $.contains(this.editor.container, e.target);
            var inTooltip = this.currentTooltip && $.contains(this.currentTooltip.$el[0], e.target);
            var modalOpen = this.currentTooltip && this.currentTooltip.modal && this.currentTooltip.modal.$el.is(":visible");
            if (this.currentTooltip && !(inEditor || inTooltip || modalOpen)) {
                this.currentTooltip.$el.hide();
                this.currentTooltip = undefined;
            }
        }).bind(this);

        this.callbacks = [{
            target: this.editor.selection,
            event: "changeCursor",
            fn: this.doRequestTooltip.bind(this)
        }, {
            target: this.editor.session.getDocument(),
            event: "change",
            fn: (function (e) {
                if (this.enabled) {
                    this.doRequestTooltip(e.data);
                }
            }).bind(this)
        }, {
            target: this.editor.session,
            event: "changeScrollTop",
            fn: (function () {
                if (this.currentTooltip) {
                    this.currentTooltip.placeOnScreen();
                }
            }).bind(this)
        }, {
            target: $(document),
            event: "mousedown",
            fn: checkBlur
        }, {
            target: $(document),
            event: "contextmenu",
            fn: checkBlur
        }, {
            target: $(this.editor.container),
            event: "mousedown",
            fn: (function () {
                this.doRequestTooltip({
                    action: "click"
                });
            }).bind(this)
        }];

        _.each(this.callbacks, function (cb) {
            cb.target.on(cb.event, cb.fn);
        });

        this.requestTooltipDefaultCallback = (function () {
            //Fallback to hiding
            // We are disabling autosuggest for now until issue #408 is fixed
            // We may also consider doing A/B tests with partial lists of
            // commands in the autocomplete to new programmers
            ScratchpadAutosuggest.enableLiveCompletion(false);
            if (this.currentTooltip && this.currentTooltip.$el) {
                this.currentTooltip.$el.hide();
                this.currentTooltip = undefined;
            }
        }).bind(this);

        // Sets the live completion status to whatever value is passed in.
        this.setEnabledStatus = (function (status) {
            this.enabled = status;
        }).bind(this);

        this.editor.on("requestTooltip", this.requestTooltipDefaultCallback);
    },

    remove: function remove() {
        _.each(this.callbacks, function (cb) {
            cb.target.off(cb.event, cb.fn);
        });
        _.each(this.tooltips, function (tooltip) {
            tooltip.remove();
        });

        this.editor.off("requestTooltip", this.requestTooltipDefaultCallback);
    },

    doRequestTooltip: function doRequestTooltip(source) {
        if (this.ignore) {
            return;
        }

        this.last = this.last || {};

        var selection = this.editor.selection;
        var pos = selection.getCursor();
        var params = {
            col: pos.column,
            row: pos.row,
            line: this.editor.session.getDocument().getLine(pos.row),
            selections: selection.getAllRanges(),
            source: source
        };
        params.pre = params.line.slice(0, params.col);
        params.post = params.line.slice(params.col);

        var duplicate = params.col === this.last.col && params.row === this.last.row && params.line === this.last.line;

        if (duplicate && !source) {
            return false;
        }
        if (this.isWithinComment(params.pre)) {
            // if selected text is within a comment, hide current tooltip (if any) and return
            if (this.currentTooltip) {
                this.currentTooltip.$el.hide();
                this.currentTooltip = undefined;
            }
            return false;
        }
        this.last = params;

        this.editor._emit("requestTooltip", params);
    },

    // Returns true if we're inside a comment
    // This isn't a perfect check, but it is close enough.
    isWithinComment: function isWithinComment(text) {
        // Comments typically start with a / or a * (for multiline C style)
        return text.length && (text[0] === "/" || text[0] === "*");
    }
});

TooltipEngine.classes = {};

/*
 * This is the base that we build all of the tooltips on
 *
 * Every Tooltip has the following major parts:
 * - initialize(), just accepts options and then tries to attach
 *   the html for the tooltip by calling render() and bind() as required
 *
 * - render() and bind() to set up the HTML
 *
 * - A detector function. The detector functions are all bound to the
 *   requestTooltip event in their respective bind() method. They receive an event with
 *   information about where the cursor is and whether it got there because of a click,
 *   selection character added, etc. It chooses to either load its tooltip or let the
 *   event keep bubbling
 *   > The detector function also sets aceLocation, which saves what portion of the
 *     text the selector is active for.
 *
 * - updateText replaces whatever text is specified by the aceLocation
 *   with the new text. It is common for tooltips to override this function
 *   so that they can accept a value in a different format, make it into a string
 *   and then pass the formatted value back to the function defined in TooltipBase
 *   to do the actual replace
 *
 * - placeOnScreen which determines where the HTML needs to be moved to in order
 *   for it to show up on by the cursor. This also pulls information from aceLocation
 *
 */

window.TooltipBase = Backbone.View.extend({
    bindToRequestTooltip: function bindToRequestTooltip() {
        if (this.parent) {
            this.callback = this.detector.bind(this);
            this.parent.editor.on("requestTooltip", this.callback);
        }
    },

    unbindFromRequestTooltip: function unbindFromRequestTooltip() {
        if (this.parent) {
            this.parent.editor.off("requestTooltip", this.callback);
        }
    },

    placeOnScreen: function placeOnScreen() {
        // don't show tool tips when the editor is in readonly mode
        if (this.parent.editor.getReadOnly()) {
            return;
        }
        var parent = this.parent;
        if (parent.currentTooltip && parent.currentTooltip !== this) {
            parent.currentTooltip.$el.hide();
        }
        parent.currentTooltip = this;

        var editor = parent.editor;
        var loc = this.aceLocation;
        var editorBB = editor.renderer.scroller.getBoundingClientRect();
        var editorHeight = editorBB.height;
        if (typeof loc.tooltipCursor !== "number") {
            loc.tooltipCursor = loc.start + loc.length;
        }
        var coords = editor.renderer.textToScreenCoordinates(loc.row, loc.tooltipCursor);
        var relativePos = coords.pageY - editorBB.top;

        this.$el.css({
            top: $(window).scrollTop() + coords.pageY,
            left: coords.pageX
        }).toggle(!(relativePos < 0 || relativePos >= editorHeight));
    },

    // Third parameter, if true, tells ACE not to remember this update in the undo chain. Useful in
    // number-scrubbing.
    // THIS IS A PROBLEMATIC HACK.
    //  - If the undo chain and the editor's text are left in an inconsistent state, then
    //     future undo's will change the wrong text. I (ChrisJPhoenix) think this just means you need to
    //     put the editor's text back the way it was before letting anything else happen.
    //     This causes problems if the user hits the keyboard in the middle of a number-scrub: undo
    //     won't put things back correctly. Thus, use editor.setReadOnly(true) while using this hack.
    //  - I use the session's $fromUndo variable to tell the editor not to save undo's. This
    //     is undocumented. There's currently (7/25/15) a test for it in tooltips_test.js.
    updateText: function updateText(newText, customSelection, avoidUndo) {
        if (!this.parent || this.parent.options.record.playing) {
            return;
        }
        var parent = this.parent;
        var editor = parent.editor;

        parent.ignore = true;
        newText = newText.toString();
        var Range = ace.require("ace/range").Range;
        var loc = this.aceLocation;
        var range = new Range(loc.row, loc.start, loc.row, loc.start + loc.length);

        // We probably could just set it to false when we're done, but someone else might
        // be trying a similar hack, or... who knows?
        var undoState;
        if (avoidUndo) {
            undoState = editor.session.$fromUndo;
            editor.session.$fromUndo = true;
        }
        editor.session.replace(range, newText);
        if (avoidUndo) {
            editor.session.$fromUndo = undoState;
        }

        range.end.column = range.start.column + newText.length;
        if (customSelection) {
            range.start.column = loc.start + customSelection.offset;
            range.end.column = loc.start + customSelection.offset + customSelection.length;
        }
        editor.selection.setSelectionRange(range);

        parent.ignore = false;
        this.aceLocation.length = newText.length;
    },

    insert: function insert() {
        if (this.parent.options.record.playing) {
            return;
        }
        this.parent.editor.session.insert.apply(this.parent.editor.session, arguments);
    },

    parens: {
        "(": ")",
        "{": "}",
        "[": "]"
    },

    // Returns true if we're inside an open parenthesis
    isInParenthesis: function isInParenthesis(text) {
        var parenStack = [];
        for (var i = 0; i < text.length; i++) {
            if (text[i] in this.parens) {
                parenStack.unshift(text[i]);
            } else if (parenStack && text[i] === this.parens[parenStack[0]]) {
                parenStack.shift();
            }
        }
        return parenStack.length > 0;
    },

    // Returns true if we're after an `=` assignment
    isAfterAssignment: function isAfterAssignment(text) {
        return /(?:^|[^!=])=\s*$/.test(text);
    },

    // Returns true if we're inside a string
    isWithinString: function isWithinString(text) {
        var withinString = false;
        var lastQuoteChar;
        for (var i = 0; i < text.length; i++) {
            if (withinString && text[i] === lastQuoteChar) {
                withinString = false;
            } else if (!withinString && text[i] === "'" || text[i] === "\"") {
                lastQuoteChar = text[i];
                withinString = true;
            }
        }
        return withinString;
    }
});
// A description of general tooltip flow can be found in tooltip-engine.js
TooltipEngine.classes.autoSuggest = TooltipBase.extend({
    initialize: function initialize(options) {
        var _this = this;

        this.options = options;
        this.parent = options.parent;
        this.render();
        this.bind();
        this.mouse = false;

        document.addEventListener("mousedown", function () {
            _this.mouse = true;
        });
        document.addEventListener("mouseup", function () {
            _this.mouse = false;
        });
    },

    detector: function detector(event) {
        // TODO: update this to support auto-suggest tooltip for inner functions passed as params
        // this currently only allows displaying of the tooltip for the outside function, except in cases
        // where the inner function uses one of the other tooltips (e.g. image-picker)
        if (!/(\b[^\d\W][\w]*)\s*(\({1}\s*\){1})*\s*([^\]]*)$/.test(event.pre) || this.parent.options.record.playing) {
            return;
        }
        if (!this.isInParenthesis(RegExp.$3)) {
            return;
        }
        if (event.source && event.source.type === "changeCursor" && this.mouse) {
            // ignore changeCursor events when the mouse button is down
            return;
        }
        var functionCall = RegExp.$1;
        var paramsToCursor = RegExp.$3;
        var lookupParams = ScratchpadAutosuggest.lookupParamsSafeHTML(functionCall, paramsToCursor);
        if (lookupParams) {
            this.aceLocation = {
                start: event.col,
                length: 0,
                row: event.row
            };

            this.updateTooltip(lookupParams);
            this.placeOnScreen();
            event.stopPropagation();
            ScratchpadAutosuggest.enableLiveCompletion(false);
        }
    },

    render: function render() {
        this.$el = $("<div class='tooltip autosuggest hide-while-playing'><div class='hotsuggest'></div><div class='arrow'></div></div>").appendTo("body").hide();
    },

    bind: function bind() {
        this.$el.on("mousedown", (function () {
            this.$el.hide();
            this.options.editor.focus();
        }).bind(this));

        this.checkForEscape = (function (e) {
            if (e.which === 27 && this.$el) {
                this.$el.hide();
            }
        }).bind(this);

        $(document).on("keyup", this.checkForEscape);
        this.bindToRequestTooltip();
    },

    remove: function remove() {
        this.$el.remove();
        $(document).off("keyup", this.checkForEscape);
        this.unbindFromRequestTooltip();
    },

    updateTooltip: function updateTooltip(content) {
        this.$el.find(".hotsuggest").empty().append(content);
    }
});
// A description of general tooltip flow can be found in tooltip-engine.js
TooltipEngine.classes.colorPicker = TooltipBase.extend({
    initialize: function initialize(options) {
        this.options = options;
        this.parent = options.parent;

        var funcs = this.parent.options.type === "ace_webpage" ? "rgb|rgba" : "background|fill|stroke|color";
        this.regex = RegExp("(\\b(?:" + funcs + ")\\s*\\()[^\\)]*$");
        this.autofill = true;

        this.render();
        this.bind();
    },

    render: function render() {
        this.$el = $("<div class='tooltip picker'><div class='picker'>" + "</div><div class='arrow'></div></div>").appendTo("body").find(".picker").ColorPicker({
            flat: true,
            onChange: (function (hsb, hex, rgb, undoMode) {
                this.updateText(rgb, undoMode);
            }).bind(this)
        }).end().hide();
    },

    bind: function bind() {
        var over = false;
        var down = false;
        var self = this;

        this.$el.on("mouseenter", function () {
            over = true;
        }).on("mouseleave", function () {
            over = false;
            if (!down) {
                self.placeOnScreen();
            }
            self.options.editor.focus();
        }).on("mousedown", function () {
            var $picker = $(this);
            $picker.addClass("active");
            down = true;
            self.trigger("scrubbingStarted");

            $(document).one("mouseup", function () {
                $picker.removeClass("active");
                down = false;
                if (!over) {
                    self.placeOnScreen();
                }
                self.trigger("scrubbingEnded");
            });
        });
        this.bindToRequestTooltip();
    },

    remove: function remove() {
        this.$el.remove();
        this.unbindFromRequestTooltip();
    },

    detector: function detector(event) {
        if (!this.regex.test(event.pre)) {
            return;
        }
        var functionStart = event.col - RegExp.lastMatch.length;
        var paramsStart = functionStart + RegExp.$1.length;

        var pieces = /^(.*?)(\);?|$)/.exec(event.line.slice(paramsStart));
        var body = pieces[1];
        this.closing = pieces[2];
        var paramsEnd = paramsStart + body.length;
        var functionEnd = paramsStart + pieces[0].length;

        var allColors = _.map(body.split(","), parseFloat);
        if (allColors.length === 4 && !isNaN(allColors[3])) {
            body = body.slice(0, body.lastIndexOf(","));
            paramsEnd = paramsStart + body.length;
            this.closing = event.line.slice(paramsEnd, functionEnd);
        }

        var colors = _.map(body.split(","), function (c) {
            c = parseFloat(c);
            return isNaN(c) ? 0 : c;
        });
        var rgb = {
            r: Math.min(colors[0] || 0, 255),
            g: Math.min(colors[1] || 0, 255),
            b: Math.min(colors[2] || 0, 255)
        };

        this.aceLocation = {
            start: paramsStart,
            length: paramsEnd - paramsStart,
            row: event.row
        };
        this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + this.closing.length;

        var name = event.line.substring(functionStart, paramsStart - 1);
        var addSemicolon = this.isAfterAssignment(event.pre.slice(0, functionStart));
        if (["fill", "stroke", "background"].includes(name)) {
            addSemicolon = true;
        }

        if (event.source && event.source.action === "insertText" && event.source.text.length === 1 && this.parent.options.type === "ace_pjs" && this.autofill) {
            // Auto-close
            if (body.length === 0 && this.closing.length === 0) {
                this.closing = ")" + (addSemicolon ? ";" : "");
                this.insert({
                    row: event.row,
                    column: functionEnd
                }, this.closing);
            }

            // Auto-fill
            if (body.trim().length === 0) {
                var rgb = {
                    r: 255,
                    g: 0,
                    b: 0
                };
                this.updateText(rgb);
            }
        }

        this.updateTooltip(rgb);
        this.placeOnScreen();
        event.stopPropagation();
        ScratchpadAutosuggest.enableLiveCompletion(false);
    },

    updateTooltip: function updateTooltip(rgb) {
        this.$el.find(".picker").ColorPickerSetColor(rgb);
    },

    updateText: function updateText(rgb, undoMode) {
        var avoidUndo = false;
        if (undoMode === "startScrub") {
            // TODO: Next 4 lines of code needs refactoring with textAtAceLocation() in number-scrubber.js.
            // TODO: Sort out this, self, ace, to make it callable from both places, and put it in tooltip-engine.js.
            var Range = ace.require("ace/range").Range;
            var loc = this.aceLocation;
            var range = new Range(loc.row, loc.start, loc.row, loc.start + loc.length);
            this.originalText = this.parent.editor.getSession().getTextRange(range);
            this.wasReadOnly = this.parent.editor.getReadOnly();
            this.parent.editor.setReadOnly(true);
            avoidUndo = true;
        } else if (undoMode === "midScrub") {
            avoidUndo = true;
        } else if (undoMode === "stopScrub") {
            TooltipBase.prototype.updateText.call(this, this.originalText, undefined, true);
            this.parent.editor.setReadOnly(this.wasReadOnly);
        }
        TooltipBase.prototype.updateText.call(this, rgb.r + ", " + rgb.g + ", " + rgb.b, undefined, avoidUndo);
        this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + this.closing.length;
    }
});
/* This file contains both the imageModal and soundModal tooltip, which share
 the same Modal() View, but have fairly different ways that they hook into
 the editor and replace the code.
 The imageModal is currently used only by webpages,
 and the soundModal is currently used only by programs.
 In the future, the imageModal might also be used by programs,
 as students seem to prefer that UI to the imagePicker UI.
 */
(function () {
    var Modal = Backbone.View.extend({
        initialize: function initialize(options) {
            this.options = options;
            this.parent = options.parent;
            this.render();
            this.bind();
            TooltipUtils.setupScrollSpy(this.$(".mediapicker-modal-content"), function (content) {
                // This function finds the associated pills for a scrollable div.
                return $(content).closest(".tab-pane").find(".nav-pills");
            });
        },

        // There are more bindings below in events.
        // These are here because scroll events cannot be delegated
        bind: function bind() {
            // Handle the shadow which appears on scroll
            this.$(".mediapicker-modal-content").scroll(_.throttle(function (e) {
                var $target = $(e.currentTarget);
                if ($target.scrollTop() > 0) {
                    $target.addClass("top-shadow");
                } else {
                    $target.removeClass("top-shadow");
                }
            }, 100));

            // Lazy load on scroll
            this.$(".mediapicker-modal-content").scroll(_.throttle(function (e) {
                TooltipUtils.lazyLoadMedia(e.currentTarget);
            }, 200));

            // Treat playing an audio file like a selection
            // The play event can't be delegated, so we do it here.
            this.$(".mediapicker-modal-file audio").on("play", (function (e) {
                this.handleFileSelect(e);
            }).bind(this));
        },

        events: {
            // Highlight file when it is clicked
            "click .mediapicker-modal-file": "handleFileSelect",

            "click .nav-tabs a": function clickNavTabsA(e) {
                $(e.currentTarget).tab("show");
                e.preventDefault();
            },

            // Modal or tab
            "shown": function shown() {
                TooltipUtils.lazyLoadMedia(this.$(".tab-pane.active .mediapicker-modal-content"));
            },

            "hide.bs.modal": function hideBsModal() {
                this.scrollStart = undefined;
                $("body").css("overflow", "auto");
                this.logForRecording("hide");
            },

            // Update the url in ACE if someone clicks ok
            "click .mediapicker-modal-submit": function clickMediapickerModalSubmit(e) {
                var $active = this.$(".mediapicker-modal-file.active");
                if ($active.length !== 1) {
                    return;
                }
                // The update and preview path are same for images,
                //  but differ for sound by the addition of quotation marks
                this.parent.updateText($active.attr("data-update-path"));
                this.parent.updateTooltip($active.attr("data-preview-path"));
            }
        },

        // Normally we could just listen to the show event on the modal,
        // but an indistinguishable "show" event also bubbles from the tab.
        // Instead we call this show() event ourselves when the button is clicked.
        show: function show() {
            this.$el.modal();
            $("body").css("overflow", "hidden");
            this.$(".mediapicker-modal-file.active").removeClass("active");
            this.logForRecording("show");
        },

        handleFileSelect: function handleFileSelect(e) {
            this.$(".mediapicker-modal-file.active").removeClass("active");
            var $file = $(e.currentTarget).closest(".mediapicker-modal-file");
            $file.addClass("active");
            this.logForRecording("selectImg", $file.attr("data-path"));
        },

        selectFile: function selectFile(dataPath) {
            var $file = this.$(".mediapicker-modal-file[data-path='" + dataPath + "']");
            var $pane = $file.closest(".tab-pane");
            var $tab = this.$("a[href='#" + $pane.attr("id") + "']");
            $tab.tab("show");
            $pane.find(".mediapicker-modal-content").scrollTop($file.position().top - 100);
            return $file;
        },

        selectImg: function selectImg(dataPath) {
            var $file = this.selectFile(dataPath);
            $file.find("img").click();
        },

        logForRecording: function logForRecording(action, value) {
            var logPrefix = this.options.logPrefix || "mediamodal";
            var logAction = logPrefix + "." + action;
            this.options.record.log(logAction, value);
        },

        render: function render() {
            Handlebars.registerHelper("hasMultipleItems", this.hasMultipleItems);
            Handlebars.registerHelper("slugify", this.slugify);
            Handlebars.registerHelper("patchedEach", this.handlebarsPatchedEach);
            this.$el = $(Handlebars.templates["mediapicker-modal"]({
                imagesDir: this.options.imagesDir,
                soundsDir: this.options.soundsDir,
                classes: this.options.files,
                closeMsg: i18n._("Close"),
                okMsg: i18n._("Ok")
            }));
            this.$el.appendTo("body").hide();
        },

        hasMultipleItems: function hasMultipleItems(arr, options) {
            if (arr && arr.length > 1) {
                return options.fn(this);
            }
            return options.inverse(this);
        },

        slugify: function slugify(text) {
            return text.toLowerCase().match(/[a-z0-9_]+/g).join("-");
        },

        // This patches our super old version of Handlebars to
        // give us access to the iteration index inside an each loop.
        // This is exactly how it works in Handlebars 1.3+
        // except that they use @<value> instead of $<value>
        // when we upgrade Handlebars we can get rid of this.
        handlebarsPatchedEach: function handlebarsPatchedEach(arr, options) {
            return _.map(arr, function (item, index) {
                item.$index = index;
                item.$first = index === 0;
                item.$last = index === arr.length - 1;
                return options.fn(item);
            }).join("");
        }
    });

    TooltipEngine.classes.imageModal = TooltipBase.extend({
        initialize: function initialize(options) {
            this.options = options;
            this.options.files = ExtendedOutputImages;
            this.parent = options.parent;
            this.autofill = true;
            this.render();
            this.bindToRequestTooltip();
            _.extend(this.options.record.handlers, {
                "imagemodal.show": this.modal.show.bind(this.modal),
                "imagemodal.hide": (function () {
                    this.modal.$el.modal("hide");
                }).bind(this),
                "imagemodal.selectImg": this.modal.selectImg.bind(this.modal)
            });
        },

        detector: function detector(event) {
            if (!/<img\s+[^>]*?\s*src\s*=\s*["']([^"']*)$/.test(event.pre)) {
                return;
            }
            var urlStart = event.col - RegExp.$1.length;
            var url = event.line.slice(urlStart).match(/^[^"']*/)[0];
            this.aceLocation = {
                start: urlStart,
                length: url.length,
                row: event.row
            };
            this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + 1;

            this.updateTooltip(url);
            this.placeOnScreen();
            event.stopPropagation();
            ScratchpadAutosuggest.enableLiveCompletion(false);
        },

        updateTooltip: function updateTooltip(url) {
            if (url !== this.currentUrl) {
                this.currentUrl = url.trim();
                if (url === "") {
                    this.$(".thumb").hide();
                    this.$(".thumb-throbber").hide();
                    this.$(".thumb-error").text(i18n._("Enter an image URL.")).show();
                    return;
                }
                var allowedHosts = /(\.|^)?(khanacademy\.org|kastatic\.org|kasandbox\.org|ka-perseus-images\.s3\.amazonaws\.com|wikimedia\.org|localhost:\d+)$/i;
                var match = /\/\/([^\/]*)(?:\/|\?|#|$)/.exec(url);
                var host = match ? match[1] : "";
                if (!host || allowedHosts.test(host)) {
                    if (url !== this.$(".thumb").attr("src")) {
                        this.$(".thumb").attr("src", url);
                        this.$(".thumb-throbber").show();
                    }
                    if (this.$(".thumb-error").hasClass("domainError")) {
                        this.$(".thumb-error").removeClass("domainError").hide();
                        this.$(".thumb").show();
                    }
                } else {
                    this.$(".thumb").hide();
                    this.$(".thumb-error").text(i18n._("Sorry! That server is not permitted.")).addClass("domainError").show();
                    this.$(".thumb-throbber").hide();
                }
            }
        },

        render: function render() {
            var self = this;
            this.$el = $(Handlebars.templates["mediapicker-preview"]({ isAudio: false, pickMsg: i18n._("Pick file:") })).appendTo("body").hide();

            this.$(".thumb").on("load", function () {
                $(this).closest(".thumb-shell").find(".thumb-error").hide();
                $(this).show();
                self.$(".thumb-throbber").hide();
            }).on("error", function () {
                if (self.currentUrl !== $(this).attr("src")) {
                    return;
                }
                $(this).closest(".thumb-shell").find(".thumb-error").text(i18n._("That is not a valid image URL.")).show();
                $(this).hide();
                self.$(".thumb-throbber").hide();
            });

            this.$("button").on("click", function () {
                self.modal.show();
            });

            this.modal = new Modal(_.defaults({
                parent: this,
                logPrefix: "imagemodal"
            }, this.options));
        },

        remove: function remove() {
            this.$el.remove();
            this.modal.remove();
            this.unbindFromRequestTooltip();
        }
    });

    TooltipEngine.classes.soundModal = TooltipBase.extend({
        defaultFile: "\"rpg/metal-clink\"",
        initialize: function initialize(options) {
            this.options = options;
            this.options.files = OutputSounds;
            this.parent = options.parent;
            this.autofill = true;
            this.render();
            this.bindToRequestTooltip();
        },

        detector: function detector(event) {
            if (!/(\bgetSound\s*\()[^\)]*$/.test(event.pre)) {
                return;
            }
            // This is quite similar to code in image-picker.js,
            //  but my attempts to abstract it were thwarted by
            //  PhantomJS's inability to pass around RegEx objects in tests.
            //  That should be fixed in PhantomJS2.0, so we are eagerly
            //  awaiting the upgrade of gulp-mocha-phantomjs to that.
            var functionStart = event.col - RegExp.lastMatch.length;
            var paramsStart = functionStart + RegExp.$1.length;

            var pieces = /^(\s*)(["']?[^\)]*?["']?)\s*(\);?|$)/.exec(event.line.slice(paramsStart));
            var leading = pieces[1];
            var pathStart = paramsStart + leading.length;
            var path = pieces[2];
            var closing = pieces[3];

            if (leading.length === 0 && path.length === 0 && closing.length === 0 && event.source && event.source.action === "insertText" && event.source.text.length === 1 && this.autofill) {
                closing = ")" + (this.isInParenthesis(event.pre.slice(0, functionStart)) ? "" : ";");
                this.insert({
                    row: event.row,
                    column: pathStart
                }, closing);

                path = this.defaultFile;
                this.updateText(path);
            }

            this.aceLocation = {
                start: pathStart,
                length: path.length,
                row: event.row
            };
            this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + closing.length;

            this.updateTooltip(path);
            this.placeOnScreen();
            event.stopPropagation();
            ScratchpadAutosuggest.enableLiveCompletion(false);
        },

        updateTooltip: function updateTooltip(partialPath) {
            if (partialPath !== this.currentUrl) {
                partialPath = partialPath.replace(/\"/g, "");
                this.currentUrl = this.options.soundsDir + partialPath + ".mp3";
                if (partialPath === "") {
                    this.$(".thumb-error").text(i18n._("Invalid sound file.")).show();
                    return;
                } else {
                    this.$(".thumb-error").hide();
                }
            }
            this.$(".mediapicker-preview-file").attr("src", this.currentUrl);
        },

        render: function render() {
            var self = this;
            this.$el = $(Handlebars.templates["mediapicker-preview"]({ isAudio: true, pickMsg: i18n._("Pick file:") })).appendTo("body").hide();

            this.$("button").on("click", function () {
                self.modal.show();
            });

            this.modal = new Modal(_.defaults({
                parent: this
            }, this.options));
        },

        remove: function remove() {
            this.$el.remove();
            this.modal.remove();
            this.unbindFromRequestTooltip();
        }
    });
})();
// A description of general tooltip flow can be found in tooltip-engine.js
TooltipEngine.classes.imagePicker = TooltipBase.extend({
    defaultImage: "cute/None",

    initialize: function initialize(options) {
        this.options = options;
        this.parent = options.parent;
        this.autofill = true;
        this.render();
        this.bindToRequestTooltip();
    },

    detector: function detector(event) {
        if (!/(\bgetImage\s*\()[^\)]*$/.test(event.pre)) {
            return;
        }
        var functionStart = event.col - RegExp.lastMatch.length;
        var paramsStart = functionStart + RegExp.$1.length;

        var pieces = /^(\s*)(["']?[^\)]*?["']?)\s*(\);?|$)/.exec(event.line.slice(paramsStart));
        var leadingPadding = pieces[1];
        var pathStart = paramsStart + leadingPadding.length;
        var path = pieces[2];
        this.closing = pieces[3];

        this.aceLocation = {
            start: pathStart,
            length: path.length,
            row: event.row
        };
        this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + this.closing.length;

        // TODO(kevinb) extract this into a method on TooltipBase
        if (leadingPadding.length === 0 && path.length === 0 && this.closing.length === 0 && event.source && event.source.action === "insertText" && event.source.text.length === 1 && this.autofill) {

            this.closing = ")" + (this.isAfterAssignment(event.pre.slice(0, functionStart)) ? ";" : "");
            this.insert({
                row: event.row,
                column: pathStart
            }, this.closing);

            path = this.defaultImage;
            this.updateText(path);
        }
        this.updateTooltip(path);
        this.placeOnScreen();
        event.stopPropagation();
        ScratchpadAutosuggest.enableLiveCompletion(false);
    },

    render: function render() {
        var imagesDir = this.options.imagesDir;

        var results = Handlebars.templates["image-picker"]({
            imagesDir: imagesDir,
            groups: _.map(OutputImages, function (data) {
                data.imagesDir = imagesDir;
                return data;
            })
        });

        this.$el = $("<div class='tooltip mediapicker'>" + results + "<div class='arrow'></div></div>").appendTo("body").hide();

        this.bind();
    },

    bind: function bind() {
        var self = this;

        this.$(".media-groups").scroll(_.throttle(function () {
            TooltipUtils.lazyLoadMedia(this);
        }, 200, { leading: false }));

        this.$el.on("mouseenter", function () {
            TooltipUtils.lazyLoadMedia($(this));
        }).on("click", ".image", function () {
            $(this).parents(".mediapicker").find(".active").removeClass("active");
            $(this).addClass("active");
            var path = $(this).attr("data-path");
            self.updateText(path);
            self.updateTooltip("\"" + path + "\"");
        }).on("mouseleave", function () {
            self.options.editor.clearSelection();
            self.options.editor.focus();
        });
    },

    remove: function remove() {
        this.$el.remove();
        this.unbindFromRequestTooltip();
    },

    updateTooltip: function updateTooltip(rawPath) {
        var foundPath = this.defaultImage;

        var path = /^["']?(.*?)["']?$/.exec(rawPath)[1];
        var pathParts = path.split("/");
        var groupName = pathParts[0];
        var fileName = pathParts[1];
        _.each(OutputImages, function (group) {
            if (group.groupName === groupName) {
                _.each(group.images, function (imageName) {
                    if (imageName === fileName) {
                        foundPath = groupName + "/" + fileName;
                    }
                });
            }
        });

        var fullPath = this.parent.options.imagesDir + foundPath + ".png";
        this.$el.find(".current-media img").attr("src", fullPath);

        this.value = path;
    },

    updateText: function updateText(newPath) {
        var newText = "\"" + newPath + "\"";
        TooltipBase.prototype.updateText.call(this, newText);
        this.aceLocation.tooltipCursor = this.aceLocation.start + this.aceLocation.length + this.closing.length;
    }
});
TooltipEngine.classes.numberScrubberClick = TooltipBase.extend({
    initialize: function initialize(options) {
        this.options = options;
        this.parent = options.parent;
        this.bindToRequestTooltip();
    },

    remove: function remove() {
        this.unbindFromRequestTooltip();
    },

    detector: function detector(event) {
        if (event.source && event.source.action === "click") {
            if (this.parent.tooltips.numberScrubber) {
                this.parent.tooltips.numberScrubber.detector(event);
            } else {
                console.warn("FAIL: You loaded the numberScrubberClick tooltip, without the numberScrubber tooltip.");
            }
        }
    }
});
// A description of general tooltip flow can be found in tooltip-engine.js
TooltipEngine.classes.numberScrubber = TooltipBase.extend({
    initialize: function initialize(options) {
        this.options = options;
        this.parent = options.parent;
        this.render();
        this.bind();
    },

    render: function render() {
        var self = this;
        var clickOnly = self.options.clickOnly;

        // This function returns different values if alt and/or shift are
        // pressed: alt -> -1, shift -> 1, alt + shift -> 0.
        // If there no modifier keys are pressed, the result is based on the
        // number of decimal places.
        function getExponent(evt) {
            var exp = -self.decimals;
            if (evt.shiftKey && evt.altKey) {
                exp = 0;
            } else if (evt.shiftKey) {
                exp = 1;
            } else if (evt.altKey) {
                exp = -1;
            }
            return exp;
        }

        var baseSvg = "<svg width='12px' height='12px' viewBox='-25, -25, 150, 150'>";

        var leftArrow = clickOnly ? "-" : baseSvg + "<polygon points='0,50 100,0 100, 100' fill='white'/></svg>";
        var rightArrow = clickOnly ? "+" : baseSvg + "<polygon points='0,50 100,0 100, 100' fill='white'/></svg>";
        var center = clickOnly ? "" : baseSvg + "<polygon points='50,0 100,50 50,100 0,50' fill='white'/></svg>";

        var $leftButton = $("<span role='button'>" + leftArrow + "</span>");
        var $rightButton = $("<span role='button' class='flipped-arrow'>" + rightArrow + "</span>");
        var $center = $("<span>" + center + "</span>");

        var updateNumber = function updateNumber(num, evt) {
            var exp = evt ? getExponent(evt) : -self.decimals;
            self.decimals = Math.max(0, -exp);
            self.intermediateValue = self.value + num * Math.pow(10, exp);
            self.updateText(self.intermediateValue.toFixed(self.decimals));
            self.updateTooltip(self.intermediateValue, self.decimals);
        };

        $leftButton.on("click touchend", function (evt) {
            if (self.noClick) {
                self.noClick = false;
                return;
            }

            if (!self.dragged) {
                updateNumber(-1, evt);
            }
        });

        $rightButton.on("click touchend", function (evt) {
            if (self.noClick) {
                self.noClick = false;
                return;
            }

            if (!self.dragged) {
                updateNumber(1, evt);
            }
        });

        var $scrubberHandle = $("<div class='scrubber-handle'/>").append($leftButton).append($center).append($rightButton);

        var textAtAceLocation = function textAtAceLocation() {
            var Range = ace.require("ace/range").Range;
            var loc = self.aceLocation;
            var range = new Range(loc.row, loc.start, loc.row, loc.start + loc.length);
            return self.parent.editor.getSession().getTextRange(range);
        };

        if (!clickOnly) {
            $scrubberHandle.draggable({
                axis: "x",
                appendTo: "body",
                helper: function helper() {
                    return $(this).clone().css($(this).offset());
                },
                start: function start(e, ui) {
                    self.$el.addClass("dragging");
                    $(this).css("visibility", "hidden");
                    self.trigger("scrubbingStarted");
                    // The text-to-be-tweaked needs to be the same length at the start and end
                    // of the anti-undo changes.
                    // I could probably just remember the length, but I like putting back the
                    // original string. (It might even matter for i18n.)
                    self.originalString = textAtAceLocation();
                    self.wasReadOnly = self.parent.editor.getReadOnly();
                    self.parent.editor.setReadOnly(true);
                },
                drag: function drag(evt, ui) {
                    var thisOffset = ui.helper.offset();
                    var parentOffset = $(this).parent().offset();
                    var dx = thisOffset.left - parentOffset.left;

                    var exp = getExponent(evt);
                    self.decimals = Math.max(0, -exp);
                    self.intermediateValue = self.value + Math.round(dx / 2.0) * Math.pow(10, exp);
                    // Third parameter true means: Don't let this be remembered in the undo chain.
                    self.updateText(self.intermediateValue.toFixed(self.decimals), undefined, true);
                    self.dragged = true;
                },
                stop: function stop(evt, ui) {
                    self.$el.removeClass("dragging");
                    $(this).css("visibility", "visible");

                    var exp = getExponent(evt);
                    self.decimals = Math.max(0, -exp);
                    // put back the original string from before we started the un-undo manipulations
                    self.updateText(self.originalString, undefined, true);
                    // ...And this makes one undo-able replacement placing the drag's final value.
                    self.updateText(self.intermediateValue.toFixed(self.decimals));
                    self.updateTooltip(self.intermediateValue, self.decimals);
                    self.trigger("scrubbingEnded");

                    // use a timeout because $leftButton.click and $rightButton.click
                    // are called after stop
                    setTimeout(function () {
                        self.dragged = false;
                        self.parent.editor.setReadOnly(self.wasReadOnly);
                    }, 0);
                }
            });
        } else {
            var clickInterval;

            var numberUpdater = function numberUpdater(evt, rate) {
                var updateRate = 300;
                var start = new Date().getTime();

                if (self.setCurValue) {
                    self.setCurValue();
                }

                var update = function update() {
                    self.noClick = false;

                    clickInterval = setTimeout(function () {
                        self.noClick = true;
                        updateNumber(rate, evt);

                        var curTime = new Date().getTime() - start;

                        if (curTime >= 5000) {
                            rate = (rate < 1 ? -1 : 1) * 3;
                        } else if (curTime > 2000) {
                            rate = (rate < 1 ? -1 : 1) * 2;
                        }

                        updateRate = 16;

                        update();
                    }, updateRate);
                };

                update();
            };

            $leftButton.on("touchstart mousedown", function (evt) {
                numberUpdater(evt, -1);
                $(this).addClass("active");
                evt.preventDefault();
            });

            $leftButton.on("touchend touchleave mouseup mouseleave", function () {
                $(this).removeClass("active");
                clearInterval(clickInterval);
            });

            $rightButton.on("touchstart mousedown", function (evt) {
                numberUpdater(evt, 1);
                $(this).addClass("active");
                evt.preventDefault();
            });

            $rightButton.on("touchend touchleave mouseup mouseleave", function () {
                $(this).removeClass("active");
                clearInterval(clickInterval);
            });
        }

        this.$el = $("<div class='tooltip'><div class='scrubber'></div><div class='arrow'></div></div>").appendTo("body").find(".scrubber").append($scrubberHandle).end().hide();

        if (clickOnly) {
            this.$el.addClass("click-only");
        }
    },

    bind: function bind() {
        this.bindToRequestTooltip();
    },

    remove: function remove() {
        this.$el.remove();
        this.unbindFromRequestTooltip();
    },

    detector: function detector(event) {
        // Does not match letters followed by numbers "<h1", "var val2", etc.
        // Matches numbers in any other context. The cursor can be anywhere from just ahead
        // of the (optional) leading negative to just after the last digit.
        if (/[a-zA-Z]\d+$/.test(event.pre) || /[a-zA-Z]$/.test(event.pre) && /^\d/.test(event.post) || !(/\d$/.test(event.pre) || /^-?\d/.test(event.post))) {
            return;
        }
        var reversedPre = event.pre.split("").reverse().join("");
        var numberStart = event.col - /^[\d.]*(-(?!\s*\w))?/.exec(reversedPre)[0].length;
        var number = /^-?[\d.]+/.exec(event.line.slice(numberStart))[0];
        this.aceLocation = {
            start: numberStart,
            length: number.length,
            row: event.row
        };
        this.aceLocation.tooltipCursor = event.col;
        this.updateTooltip(parseFloat(number), this.decimalCount(number));
        this.placeOnScreen();
        event.stopPropagation();
        ScratchpadAutosuggest.enableLiveCompletion(false);
    },

    updateTooltip: function updateTooltip(value, decimals) {
        this.value = value;
        this.decimals = decimals <= 5 ? decimals : 5;
    },

    // Returns the number of decimal places shown in a string representation of
    // a number.
    decimalCount: function decimalCount(strNumber) {
        var decIndex = strNumber.indexOf(".");
        return decIndex === -1 ? 0 : strNumber.length - (decIndex + 1);
    }
});
window.TooltipUtils = {
    /**
     * This is a KA specific implementation of lazy loading:
     * It is targetted specifically at the modal in soundModal/imageModal
     * (although it is generally applicable to some degree)
     * It loads images as they are scrolled into view.
     * It makes the following assumptions
     * - All lazy-loading images have a "data-lazy-src" with the src
     *     we wish to load on-demand
     * - The div being scrolled is the offset parent of all the images
     *     (http://api.jquery.com/position/)
     * - If image A comes before image B in the source,
     *     then A is at least as high as B on the page.
     *
     */
    lazyLoadMedia: function lazyLoadMedia(container, tolerance) {
        tolerance = tolerance || 250;
        var self = this;
        $(container).each(function (i, elem) {
            var top = $(elem).scrollTop();
            var bottom = top + $(elem).height();
            top -= tolerance;
            bottom += tolerance;
            $(elem).find("[data-lazy-src]").each(function (j, elem) {
                var height = $(elem).position().top;
                if (height < top) {
                    return true; // continue;
                } else if (height < bottom) {
                    self.loadNow(elem);
                } else {
                    return false; // break;
                }
            });
        });
    },

    loadNow: function loadNow(elem) {
        $.each($(elem), function (i, elem) {
            $(elem).attr("src", $(elem).attr("data-lazy-src"));
            $(elem).removeAttr("data-lazy-src");
        });
    },

    /**
     * This is a KA specific implementation of scrollspy
     * The second argument can be one of two things:
     * - A function to determine the nav element.
     * - The word "refresh" to recalculate heading positions
     */
    setupScrollSpy: function setupScrollSpy(scrollables, arg) {
        $.each($(scrollables), (function (i, shell) {
            if (arg === "refresh") {
                var navUl = $(shell).data("scrollspy.navUl");
                if (!navUl) {
                    console.warn("tried to refresh scrollspy without first initializing it");
                    return;
                }
                var navs = navUl.find("li a");
                var pointers = [];
                $.each(navs, function (i, nav) {
                    var selector = $(nav).attr("href");
                    var $heading = $(shell).find(selector).first();
                    if ($heading.length) {
                        var y = $heading.position().top;
                        pointers.push([y, nav]);
                    }
                });
                pointers.sort(function (a, b) {
                    return a[0] - b[0];
                });
                $(shell).data("scrollspy.pointers", pointers);
            } else {
                var navUl = arg(shell);
                $(shell).data("scrollspy.navUl", navUl);
                $(shell).on("scroll", _.throttle(this.doScrollSpy, 60));
                $(navUl).find("li a").on("click", function (e) {
                    var top = $(shell).find($(this).attr("href")).position().top;
                    $(shell).scrollTop(top);
                    e.preventDefault();
                });
            }
        }).bind(this));
    },

    doScrollSpy: function doScrollSpy() {
        var $this = $(this);
        var pointers = $this.data("scrollspy.pointers"); // [[height, node], ... ]
        if (pointers === undefined) {
            $this.data("scrollspy.pointers", "working");
            setTimeout(function () {
                TooltipUtils.setupScrollSpy($this, "refresh");
            }, 0);
            return;
        } else if (pointers === "working") {
            return;
        }

        var scroll = $this.scrollTop();
        var active;
        $.each(pointers, function (i, pointer) {
            if (pointer[0] < scroll + 150) {
                active = pointer[1];
            } else {
                return false;
            }
        });

        $this.data("scrollspy.navUl").find(".active").removeClass("active");
        $(active).closest("li").addClass("active");
    }
};
window["Handlebars"] = window["Handlebars"] || {};
window["Handlebars"]["templates"] = window["Handlebars"]["templates"] || {};
window["Handlebars"]["templates"]["image-picker"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"media-group\">\n            <h3>"
    + container.escapeExpression(((helper = (helper = helpers.groupName || (depth0 != null ? depth0.groupName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"groupName","hash":{},"data":data}) : helper)))
    + "</h3>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cite : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <p><a href=\""
    + alias4(((helper = (helper = helpers.citeLink || (depth0 != null ? depth0.citeLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"citeLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.cite || (depth0 != null ? depth0.cite : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cite","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "            <div class=\"image\" data-path=\""
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\">\n                <img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].imagesDir : depths[1]), depth0))
    + "spinner.gif\" data-lazy-src=\""
    + alias2(alias1((depths[1] != null ? depths[1].imagesDir : depths[1]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + ".png\"/>\n                <span class=\"name\">"
    + alias2(alias1(depth0, depth0))
    + "</span>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"current-media\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.imagesDir || (depth0 != null ? depth0.imagesDir : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"imagesDir","hash":{},"data":data}) : helper)))
    + "cute/Blank.png\"/></div>\n<div class=\"media-groups\">\n    <div style=\"position: relative;\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true});;
window["Handlebars"] = window["Handlebars"] || {};
window["Handlebars"]["templates"] = window["Handlebars"]["templates"] || {};
window["Handlebars"]["templates"]["mediapicker-preview"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "mediapicker__sound";
},"3":function(container,depth0,helpers,partials,data) {
    return "mediapicker__image";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<audio controls class=\"mediapicker-preview-file\"></audio>\n		<div class=\"thumb-error\"></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "		<img src=\"/images/spinner.gif\" class=\"thumb-throbber\" />\n		<div class=\"thumb-shell\">\n			<img class=\"thumb\" />\n			<div class=\"thumb-error\"></div>\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"tooltip mediapicker-preview "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAudio : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"mediapicker-preview-content\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAudio : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n		<button class=\"kui-button kui-button-submit kui-button-primary\" style=\"padding: 5px; width: 100%; margin: 0 auto;\" >\n			"
    + container.escapeExpression(((helper = (helper = helpers.pickMsg || (depth0 != null ? depth0.pickMsg : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"pickMsg","hash":{},"data":data}) : helper)))
    + "\n		</button>\n	</div>\n	<div class=\"arrow\"></div>\n</div>";
},"useData":true});;
window["Handlebars"] = window["Handlebars"] || {};
window["Handlebars"]["templates"] = window["Handlebars"]["templates"] || {};
window["Handlebars"]["templates"]["mediapicker-modal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "      <li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"#im-class-"
    + alias3((helpers.slugify || (depth0 && depth0.slugify) || alias2).call(alias1,(depth0 != null ? depth0.className : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"active\"";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "      <div class=\"tab-pane "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" id=\"im-class-"
    + container.escapeExpression((helpers.slugify || (depth0 && depth0.slugify) || alias2).call(alias1,(depth0 != null ? depth0.className : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\">\n        <div class=\"mediapicker-modal-content\">\n        <div style=\"position: relative;\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.groups : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        </div>\n\n        <div class=\"right\">\n"
    + ((stack1 = (helpers.hasMultipleItems || (depth0 && depth0.hasMultipleItems) || alias2).call(alias1,(depth0 != null ? depth0.groups : depth0),{"name":"hasMultipleItems","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n\n        <div style=\"clear: both;\"></div>\n      </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "active";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <div class=\"mediapicker-modal-group\">\n"
    + ((stack1 = (helpers.hasMultipleItems || (depth0 && depth0.hasMultipleItems) || helpers.helperMissing).call(alias1,(depths[1] != null ? depths[1].groups : depths[1]),{"name":"hasMultipleItems","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cite : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.images : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sounds : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "                <h3 id=\"im-group-"
    + alias3((helpers.slugify || (depth0 && depth0.slugify) || alias2).call(alias1,(depth0 != null ? depth0.groupName : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.groupName || (depth0 != null ? depth0.groupName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"groupName","hash":{},"data":data}) : helper)))
    + "</h3>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <p><a href=\""
    + alias4(((helper = (helper = helpers.citeLink || (depth0 != null ? depth0.citeLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"citeLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + alias4(((helper = (helper = helpers.cite || (depth0 != null ? depth0.cite : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cite","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"image mediapicker-modal-file\"\n                    data-update-path=\""
    + alias2(alias1((depths[3] != null ? depths[3].imagesDir : depths[3]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + ".png\"\n                    data-preview-path=\""
    + alias2(alias1((depths[3] != null ? depths[3].imagesDir : depths[3]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].thumbsDir : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + ".png\"\n                    data-path=\""
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\">\n                    <div class=\"thumb-shell\"><img src=\""
    + alias2(alias1((depths[3] != null ? depths[3].imagesDir : depths[3]), depth0))
    + "spinner.gif\" data-lazy-src=\""
    + alias2(alias1((depths[3] != null ? depths[3].imagesDir : depths[3]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].thumbsDir : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + ".png\"/></div>\n                    <span>"
    + alias2(alias1(depth0, depth0))
    + "</span>\n                </div>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"sound mediapicker-modal-file\"\n                    data-update-path='\""
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\"'\n                    data-preview-path=\""
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\"\n                    data-path=\""
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + "\">\n                    <audio data-lazy-src=\""
    + alias2(alias1((depths[3] != null ? depths[3].soundsDir : depths[3]), depth0))
    + alias2(alias1((depths[1] != null ? depths[1].groupName : depths[1]), depth0))
    + "/"
    + alias2(alias1(depth0, depth0))
    + ".mp3\" controls/>\n                    <span>"
    + alias2(alias1(depth0, depth0))
    + "</span>\n                </div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <ul class=\"nav nav-pills nav-stackable\">\n"
    + ((stack1 = (helpers.patchedEach || (depth0 && depth0.patchedEach) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.groups : depth0),{"name":"patchedEach","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <li "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.$first : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><a href=\"#im-group-"
    + alias3((helpers.slugify || (depth0 && depth0.slugify) || alias2).call(alias1,(depth0 != null ? depth0.groupName : depth0),{"name":"slugify","hash":{},"data":data}))
    + "\">"
    + alias3(((helper = (helper = helpers.groupName || (depth0 != null ? depth0.groupName : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"groupName","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal mediapicker-modal\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n"
    + ((stack1 = (helpers.patchedEach || (depth0 && depth0.patchedEach) || alias2).call(alias1,(depth0 != null ? depth0.classes : depth0),{"name":"patchedEach","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n\n    <div class=\"tab-content\">\n"
    + ((stack1 = (helpers.patchedEach || (depth0 && depth0.patchedEach) || alias2).call(alias1,(depth0 != null ? depth0.classes : depth0),{"name":"patchedEach","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"mediapicker-modal-footer\">\n      <button type=\"button\" class=\"simple-button\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = helpers.closeMsg || (depth0 != null ? depth0.closeMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"closeMsg","hash":{},"data":data}) : helper)))
    + "</button>\n      <button type=\"button\" class=\"simple-button green mediapicker-modal-submit\" data-dismiss=\"modal\">"
    + alias4(((helper = (helper = helpers.okMsg || (depth0 != null ? depth0.okMsg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"okMsg","hash":{},"data":data}) : helper)))
    + "</button>\n    </div>\n</div>";
},"useData":true,"useDepths":true});;
(function () {
    var ESC = 27;

    window.StructuredBlocksTooltips = Backbone.View.extend({
        events: {
            "mousedown .block-rgb.block-name-r": "showColorPicker",
            "touchstart .block-rgb.block-name-r": "showColorPicker",
            "focusin .block-rgb.block-name-r": "showColorPicker",
            "mousedown .block-number .input": "showNumberScrubber",
            "touchstart .block-number .input": "showNumberScrubber",
            "focusin .block-number .input": "showNumberScrubber"
        },

        initialize: function initialize() {
            this.render();
            this.bind();
        },

        render: function render() {
            this.$colorPicker = $("<div class='tooltip picker active'>" + "<div class='picker'></div>" + "<div class='arrow'></div></div>")
            // Prevent dragging
            .on("mousedown", function () {
                return false;
            }).find(".picker").ColorPicker({ flat: true }).end().hide();

            this.colorPicker = this.$colorPicker.find(".colorpicker").data("colorpicker");

            this.numberScrubber = new TooltipEngine.classes.numberScrubber({
                clickOnly: true
            });
        },

        bind: function bind() {
            $(window).on("mousedown touchstart", (function (e) {
                var target = e.target;
                var $target = $(target);

                var colorPicker = this.$colorPicker[0];
                var numberScrubber = this.numberScrubber.$el[0];

                if ($target.hasClass("input")) {
                    target = target.parentNode;
                } else if ($target.hasClass("block-name-r")) {
                    target = $target.closest(".block-statement")[0];
                } else {
                    if (!$.contains(colorPicker, target)) {
                        this.hideColorPicker();
                    }

                    if (!$.contains(numberScrubber, target)) {
                        this.hideNumberScrubber();
                    }

                    return;
                }

                if (!$.contains(target, colorPicker)) {
                    this.hideColorPicker();
                }

                if (!$.contains(target, numberScrubber)) {
                    this.hideNumberScrubber();
                }
            }).bind(this));

            $(window).on("keydown", (function (e) {
                if (e.which === ESC) {
                    this.hideColorPicker();
                    this.hideNumberScrubber();
                }
            }).bind(this));
        },

        showColorPicker: function showColorPicker(e) {
            var $target = $(e.currentTarget);
            var $block = $target.closest(".block-statement");
            var pos = $target.position();
            var $offsetParent = $target.offsetParent();

            this.colorPicker.onChange = function (hsb, hex, rgb) {
                $block.trigger("updateColor", rgb);
            };

            this.$colorPicker.appendTo($block).css({
                top: pos.top + 5 + $offsetParent[0].scrollTop,
                left: pos.left + $target.width() + 5 + $offsetParent[0].scrollLeft
            }).find(".picker").ColorPickerSetColor($block.data("color")).end().show();
        },

        hideColorPicker: function hideColorPicker() {
            this.colorPicker.onChange = function () {};
            this.$colorPicker.appendTo("body").hide();
        },

        showNumberScrubber: function showNumberScrubber(e) {
            var $target = $(e.target);
            var $block = $target.closest(".block-number");
            var pos = $target.position();
            var $offsetParent = $target.offsetParent();

            this.numberScrubber.updateText = (function (val) {
                $block.trigger("updateValue", val);
                updateScrubberPos();
            }).bind(this);

            this.numberScrubber.setCurValue = (function (val) {
                this.numberScrubber.updateTooltip(parseFloat($block.data("value")), 0);
            }).bind(this);

            var updateScrubberPos = (function () {
                this.numberScrubber.$el.css({
                    top: pos.top + $target.outerHeight() + $offsetParent[0].scrollTop,
                    left: pos.left + Math.round($target.width() / 2) + $offsetParent[0].scrollLeft
                });
            }).bind(this);

            this.numberScrubber.updateTooltip(parseFloat($block.data("value")), 0);

            this.numberScrubber.$el.appendTo($block).show();

            updateScrubberPos();
        },

        hideNumberScrubber: function hideNumberScrubber() {
            this.numberScrubber.updateText = function () {};
            this.numberScrubber.$el.appendTo("body").hide();
        }
    });
})();
