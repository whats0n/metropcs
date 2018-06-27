/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.addEventListener('load', function () {\n  //POLYFILLS\n  (function (ELEMENT) {\n    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;\n    ELEMENT.closest = ELEMENT.closest || function closest(selector) {\n      if (!this) return null;\n      if (this.matches(selector)) return this;\n      if (!this.parentElement) {\n        return null;\n      } else return this.parentElement.closest(selector);\n    };\n  })(Element.prototype);\n  (function (arr) {\n    arr.forEach(function (item) {\n      if (item.hasOwnProperty('remove')) {\n        return;\n      }\n      Object.defineProperty(item, 'remove', {\n        configurable: true,\n        enumerable: true,\n        writable: true,\n        value: function remove() {\n          this.parentNode.removeChild(this);\n        }\n      });\n    });\n  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);\n\n  //BEGIN RIPPLE EFFECT\n  (function () {\n\n    var isTouch = function isTouch() {\n      return 'touchstart' in window;\n    };\n    var eventName = isTouch() ? 'touchstart' : 'mousedown';\n    var properties = ['animationDuration', 'webkitAnimationDuration', 'msAnimationDuration', 'mozAnimationDuration', 'oAnimationDuration'];\n    var getDuration = function getDuration(el) {\n      var style = window.getComputedStyle(el),\n          duration = style.webkitTransitionDuration;\n\n      for (var i = 0; i <= properties.length; i++) {\n        var property = style[properties[i]];\n\n        if (!property) continue;\n\n        duration = property;\n        break;\n      }\n\n      // fix miliseconds vs seconds\n      duration = duration.indexOf('ms') > -1 ? parseFloat(duration) : parseFloat(duration) * 1000;\n\n      return duration;\n    };\n\n    var animation = function animation(e, target) {\n      var width = target.offsetWidth;\n      var height = target.offsetHeight;\n      var size = width >= height ? width : height;\n      var offset = target.getBoundingClientRect();\n      var pageX = e.type !== 'touchstart' ? e.pageX : e.touches[0].clientX;\n      var pageY = e.type !== 'touchstart' ? e.pageY : e.touches[0].clientY;\n      var x = pageX - offset.left;\n      var y = pageY - offset.top;\n\n      var circle = document.createElement('span');\n\n      circle.classList.add('ripple-circle');\n      circle.style.top = y - size / 2 + 'px';\n      circle.style.left = x - size / 2 + 'px';\n      circle.style.width = size + 'px';\n      circle.style.height = size + 'px';\n      target.appendChild(circle);\n\n      var duration = getDuration(circle);\n\n      var deleteCircle = setTimeout(function () {\n        return circle.remove();\n      }, duration + 50);\n      var animationEnd = function animationEnd(e) {\n        circle.remove();\n        clearTimeout(deleteCircle);\n      };\n\n      circle.addEventListener('animationend', animationEnd, false);\n      circle.addEventListener('webkitAnimationEnd', animationEnd, false);\n    };\n\n    document.addEventListener(eventName, function (e) {\n      var target = e.target.closest('[data-animation*=\"ripple\"]');\n      if (target) animation(e, target);\n    }, false);\n  })();\n  //END RIPPLE\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgLy9QT0xZRklMTFNcbiAgKGZ1bmN0aW9uKEVMRU1FTlQpIHtcbiAgICBFTEVNRU5ULm1hdGNoZXMgPSBFTEVNRU5ULm1hdGNoZXMgfHwgRUxFTUVOVC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC5tc01hdGNoZXNTZWxlY3RvciB8fCBFTEVNRU5ULm9NYXRjaGVzU2VsZWN0b3IgfHwgRUxFTUVOVC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG4gICAgRUxFTUVOVC5jbG9zZXN0ID0gRUxFTUVOVC5jbG9zZXN0IHx8IGZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghdGhpcykgcmV0dXJuIG51bGw7XG4gICAgICBpZiAodGhpcy5tYXRjaGVzKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXM7XG4gICAgICBpZiAoIXRoaXMucGFyZW50RWxlbWVudCkge3JldHVybiBudWxsO31cbiAgICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50RWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICB9O1xuICB9KEVsZW1lbnQucHJvdG90eXBlKSk7XG4gIChmdW5jdGlvbihhcnIpIHtcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgncmVtb3ZlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0ZW0sICdyZW1vdmUnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSkoW0VsZW1lbnQucHJvdG90eXBlLCBDaGFyYWN0ZXJEYXRhLnByb3RvdHlwZSwgRG9jdW1lbnRUeXBlLnByb3RvdHlwZV0pO1xuXG4gIC8vQkVHSU4gUklQUExFIEVGRkVDVFxuICAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBpc1RvdWNoID0gKCkgPT4gJ3RvdWNoc3RhcnQnIGluIHdpbmRvdztcbiAgICBjb25zdCBldmVudE5hbWUgPSBpc1RvdWNoKCkgPyAndG91Y2hzdGFydCcgOiAnbW91c2Vkb3duJztcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAgICd3ZWJraXRBbmltYXRpb25EdXJhdGlvbicsXG4gICAgICAnbXNBbmltYXRpb25EdXJhdGlvbicsXG4gICAgICAnbW96QW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICAgJ29BbmltYXRpb25EdXJhdGlvbidcbiAgICBdO1xuICAgIGNvbnN0IGdldER1cmF0aW9uID0gKGVsKSA9PiB7XG4gICAgICBsZXQgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCksXG4gICAgICAgIGR1cmF0aW9uID0gc3R5bGUud2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uOyBcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvcGVydHkgPSBzdHlsZVtwcm9wZXJ0aWVzW2ldXTtcblxuICAgICAgICBpZiAoIXByb3BlcnR5KSBjb250aW51ZTtcblxuICAgICAgICBkdXJhdGlvbiA9IHByb3BlcnR5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZml4IG1pbGlzZWNvbmRzIHZzIHNlY29uZHNcbiAgICAgIGR1cmF0aW9uID0gKGR1cmF0aW9uLmluZGV4T2YoJ21zJyk+LTEpID8gcGFyc2VGbG9hdChkdXJhdGlvbikgOiBwYXJzZUZsb2F0KGR1cmF0aW9uKSoxMDAwO1xuXG5cbiAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKGUsIHRhcmdldCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3Qgc2l6ZSA9IHdpZHRoID49IGhlaWdodCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcGFnZVggPSBlLnR5cGUgIT09ICd0b3VjaHN0YXJ0JyA/IGUucGFnZVggOiBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIGNvbnN0IHBhZ2VZID0gZS50eXBlICE9PSAndG91Y2hzdGFydCcgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICBjb25zdCB4ID0gcGFnZVggLSBvZmZzZXQubGVmdDtcbiAgICAgIGNvbnN0IHkgPSBwYWdlWSAtIG9mZnNldC50b3A7XG4gICAgICAgIFxuICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBcbiAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdyaXBwbGUtY2lyY2xlJyk7XG4gICAgICBjaXJjbGUuc3R5bGUudG9wID0gYCR7eSAtIHNpemUvMn1weGA7XG4gICAgICBjaXJjbGUuc3R5bGUubGVmdCA9IGAke3ggLSBzaXplLzJ9cHhgO1xuICAgICAgY2lyY2xlLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICBjaXJjbGUuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcblxuICAgICAgY29uc3QgZHVyYXRpb24gPSBnZXREdXJhdGlvbihjaXJjbGUpO1xuXG4gICAgICBjb25zdCBkZWxldGVDaXJjbGUgPSBzZXRUaW1lb3V0KCgpID0+IGNpcmNsZS5yZW1vdmUoKSwgZHVyYXRpb24gKyA1MCk7XG4gICAgICBjb25zdCBhbmltYXRpb25FbmQgPSBlID0+IHtcbiAgICAgICAgY2lyY2xlLnJlbW92ZSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVsZXRlQ2lyY2xlKTtcbiAgICAgIH07XG5cbiAgICAgIGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBhbmltYXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRBbmltYXRpb25FbmQnLCBhbmltYXRpb25FbmQsIGZhbHNlKTtcblxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZSkgeyBcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFuaW1hdGlvbio9XCJyaXBwbGVcIl0nKTtcbiAgICAgIGlmICh0YXJnZXQpIGFuaW1hdGlvbihlLCB0YXJnZXQpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9KSgpO1xuICAvL0VORCBSSVBQTEVcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })

/******/ });