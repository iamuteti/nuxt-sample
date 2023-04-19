module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/nuxt-logo","2":"components/tutorial","3":"pages/index","4":"pages/test"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ad839196", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("252f4f7d", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@oruga-ui/oruga");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(14);
module.exports = __webpack_require__(21);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3aecf2b2", content, true)

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! Oruga v0.5.10 | MIT License | github.com/oruga-ui/oruga */@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes append-animate{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.fade-enter-active,.fade-leave-active{transition:opacity .15s ease-out}.fade-enter,.fade-enter-from,.fade-leave-to{opacity:0}.zoom-in-enter-active,.zoom-in-leave-active{transition:opacity .15s ease-out}.zoom-in-enter-active .animation-content,.zoom-in-leave-active .animation-content{transition:transform .15s ease-out}.zoom-in-enter,.zoom-in-enter-from,.zoom-in-leave-active{opacity:0}.zoom-in-enter .animation-content,.zoom-in-enter-from .animation-content,.zoom-in-leave-active .animation-content{transform:scale(.95)}.zoom-out-enter-active,.zoom-out-leave-active{transition:opacity .15s ease-out}.zoom-out-enter-active .animation-content,.zoom-out-leave-active .animation-content{transition:transform .15s ease-out}.zoom-out-enter,.zoom-out-enter-from,.zoom-out-leave-active{opacity:0}.zoom-out-enter .animation-content,.zoom-out-enter-from .animation-content,.zoom-out-leave-active .animation-content{transform:scale(1.05)}.slide-next-enter-active,.slide-next-leave-active,.slide-prev-enter-active,.slide-prev-leave-active{transition:transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-next-enter,.slide-next-enter-from,.slide-prev-leave-to{position:absolute;transform:translate3d(-100%,0,0);width:100%}.slide-next-leave-to,.slide-prev-enter,.slide-prev-enter-from{position:absolute;transform:translate3d(100%,0,0);width:100%}.slide-down-enter-active,.slide-down-leave-active,.slide-up-enter-active,.slide-up-leave-active{transition:transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-down-enter,.slide-down-enter-from,.slide-up-leave-to{height:100%;position:absolute;transform:translate3d(0,-100%,0)}.slide-down-leave-to,.slide-up-enter,.slide-up-enter-from{height:100%;position:absolute;transform:translate3d(0,100%,0)}.slide-enter-active,.slide-leave-active{transition:.15s ease-out}.slide-leave-active{transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave,.slide-leave-from{max-height:100px;overflow:hidden}.slide-enter,.slide-enter-from,.slide-leave-to{max-height:0;overflow:hidden}*,:after,:before{box-sizing:inherit}html{box-sizing:border-box}.o-noscroll{bottom:0;overflow-x:hidden;overflow-y:hidden;overflow-y:scroll;position:fixed;width:100%}.o-clipped{overflow:hidden}.o-acp{position:relative}.o-acp__menu{background-color:#fff;display:block;left:0;overflow:auto;position:absolute;top:100%;width:100%;z-index:20}.o-acp__menu--top{bottom:100%;top:auto}.o-acp__item{cursor:pointer;display:block;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}.o-acp__item--empty,.o-acp__item-group-title{pointer-events:none}.o-acp--expanded{width:100%}.o-btn{-webkit-touch-callout:none;-moz-appearance:none;-webkit-appearance:none;background-color:#445e00;color:#fff;cursor:pointer;text-align:center;-webkit-text-decoration:none;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;white-space:nowrap}.o-btn,.o-btn__wrapper{align-items:center;display:inline-flex;justify-content:center;position:relative}.o-btn__wrapper{margin-left:-.1875em;margin-right:-.1875em;width:100%}.o-btn__wrapper>*{margin-left:.1875em;margin-right:.1875em}.o-btn--expanded,.o-btn__label{width:100%}.o-btn--disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.o-btn--outlined{background-color:transparent;border-color:#445e00;color:#445e00}.o-btn--outlined:hover{background-color:#445e00;border-color:transparent;color:#fff}.o-btn--inverted{background-color:#fff;border-color:#fff;color:#445e00}.o-btn--inverted:hover{filter:brightness(95%)}.o-car{-webkit-touch-callout:none;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.o-car__overlay{align-items:center;bottom:0;display:flex;flex-direction:column;justify-content:center;left:0;max-height:100vh;position:fixed;right:0;top:0;z-index:40}.o-car__scene{position:relative;width:100%}.o-car__items{display:flex;width:100%}.o-car__item{flex-shrink:0}.o-car__indicators{align-items:center;display:flex;justify-content:center;width:100%}.o-car__indicators--inside{position:absolute}.o-car__indicators--inside--bottom{bottom:0}.o-car__indicators--inside--top{top:0}.o-car__indicator__item{background:#fff;border:1px solid #445e00;display:block}.o-car__indicator__item :hover,.o-car__indicator__item--active{background:#445e00;border:1px solid #445e00}.o-car__indicator__item--boxes{height:10px;width:10px}.o-car__indicator__item--dots{border-radius:4px;height:10px;width:10px}.o-car__arrow__icon{background:#fff;color:#445e00;cursor:pointer;height:1.5rem;width:1.5rem}.o-car__arrow__icon-next,.o-car__arrow__icon-prev{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.o-car__arrow__icon-prev{left:1.5rem}.o-car__arrow__icon-next{right:1.5rem}.o-chk{-webkit-touch-callout:none;align-items:center;cursor:pointer;display:inline-flex;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.o-chk__check{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-position:50%;background-repeat:no-repeat;background-size:contain;border-color:#445e00;border-style:solid;cursor:pointer;flex-shrink:0;height:1rem;margin:0;outline:none;-webkit-print-color-adjust:exact;print-color-adjust:exact;transition-property:background;vertical-align:top;width:1rem}.o-chk__check--checked{background-color:#445e00;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 234 225' xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5'%3E%3Cpath style='fill:%23fff' d='m22.504 26.219 6.133 6.167 10.857-14.102-2.146-1.905L28 27.725l-3.54-3.529-1.956 2.023Z' transform='matrix(13.07572 0 0 13.07572 -288.665 -206.315)'/%3E%3C/svg%3E\");border-color:#445e00}.o-chk__check--indeterminate{background-color:#445e00;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 417 417' xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Cpath style='fill:%23fff' d='M31.265 41.654c0-.33-.791-.597-1.765-.597H18.953c-.974 0-1.765.267-1.765.597 0 .33.791.598 1.765.598H29.5c.974 0 1.765-.268 1.765-.598Z' transform='matrix(29.00736 0 0 85.7009 -494.421 -3361.474)'/%3E%3C/svg%3E\");border-color:#445e00}.o-chk--disabled{opacity:.5}.o-clps__trigger{cursor:pointer}.o-clps__content{display:inherit}.o-dpck__dropdown{width:100%}.o-dpck__box{display:block;position:relative}.o-dpck__header__buttons{align-items:center;display:flex;justify-content:center;text-align:center}.o-dpck__header__next,.o-dpck__header__previous{-webkit-touch-callout:none;align-items:center;-moz-appearance:none;-webkit-appearance:none;border-color:#dbdbdb;box-shadow:none;color:#363636;cursor:pointer;display:inline-flex;justify-content:center;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top}.o-dpck__header__next,.o-dpck__header__next:hover,.o-dpck__header__previous,.o-dpck__header__previous:hover{-webkit-text-decoration:none;text-decoration:none}.o-dpck__header__previous{order:1}.o-dpck__header__next{order:3}.o-dpck__header__list{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;list-style:none;margin:0 -.125rem;order:2;padding:0;text-align:center}.o-dpck__header__list>*{margin-left:.125rem;margin-right:.125rem}.o-dpck__month,.o-dpck__table{display:table;margin:0 auto}.o-dpck__month__head,.o-dpck__table__head{display:table-header-group}.o-dpck__month__body,.o-dpck__table__body{display:table-row-group}.o-dpck__month__row,.o-dpck__table__row{display:table-row}.o-dpck__month__cell,.o-dpck__table__cell{display:table-cell;text-align:center;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.o-dpck__month__cell--unselectable,.o-dpck__table__cell--unselectable{color:#b5b5b5}.o-dpck__month__cell--selectable,.o-dpck__table__cell--selectable{color:#4a4a4a}.o-dpck__month__cell--first-hovered,.o-dpck__table__cell--first-hovered{background-color:#7a7a7a;color:#dbdbdb}.o-dpck__month__cell--within-hovered,.o-dpck__table__cell--within-hovered{color:#dbdbdb}.o-dpck__month__cell--last-hovered,.o-dpck__table__cell--last-hovered{background-color:#7a7a7a;color:#dbdbdb}.o-dpck__month__cell--first-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered),.o-dpck__month__cell--selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered),.o-dpck__table__cell--first-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered),.o-dpck__table__cell--selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered){background-color:#445e00;color:#fff}.o-dpck__month__cell--within-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered),.o-dpck__table__cell--within-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered){background-color:rgba(68,94,0,.5)}.o-dpck__month__cell--last-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered),.o-dpck__table__cell--last-selected:not(.o-dpck__table__cell--first-hovered):not(.o-dpck__month__cell--first-hovered):not(.o-dpck__table__cell--within-hovered):not(.o-dpck__month__cell--within-hovered):not(.o-dpck__table__cell--last-hovered):not(.o-dpck__month__cell--last-hovered){background-color:#445e00;color:#fff}.o-dpck__month__cell--invisible,.o-dpck__table__cell--invisible{visibility:hidden}.o-dpck__month__cell--events,.o-dpck__table__cell--events{position:relative}.o-dpck__month__events,.o-dpck__table__events{bottom:15%;display:flex;justify-content:center;left:0;position:absolute;width:100%}.o-dpck__month__event,.o-dpck__table__event{background-color:#b5b5b5}.o-dpck__month__event--dots,.o-dpck__table__event--dots{border-radius:50%}.o-dpck__month__event--bars,.o-dpck__table__event--bars{width:100%}.o-dpck__month__table{display:inline-flex;flex-direction:row;flex-wrap:wrap;width:17rem}.o-dpck__month__cell{align-items:center;display:flex;height:2.5rem;justify-content:center;width:33.33%}.o-dpck--mobile .o-dpck__header__previous{flex-grow:1;flex-shrink:1;order:1}.o-dpck--mobile .o-dpck__header__next{flex-grow:1;flex-shrink:1;order:3}.o-dpck--mobile .o-dpck__header__list{flex-grow:1;flex-shrink:1;order:2}.o-dtpck__time{align-items:center;display:flex;justify-content:center}.o-drop{display:inline-flex;position:relative;vertical-align:top}.o-drop--inline{display:inline}.o-drop--inline .o-drop__menu{display:inline-block;padding:0;position:static}.o-drop__overlay{background-color:rgba(0,0,0,.86);bottom:0;cursor:pointer;display:none;left:0;position:fixed;right:0;top:0;z-index:40}.o-drop__trigger{width:100%}.o-drop__menu{background-color:#fff;display:block;left:0;position:absolute;top:100%;z-index:20}.o-drop__menu--top-left{bottom:100%;left:auto;right:0;top:auto}.o-drop__menu--bottom-left{left:auto;right:0}.o-drop__menu--top-right{bottom:100%;top:auto}.o-drop__item{cursor:pointer;display:block;position:relative}.o-drop__item--disabled{opacity:.5;pointer-events:none}.o-drop__item--active{background-color:#445e00;color:#fff}.o-drop--expanded,.o-drop--expanded .o-drop__menu{width:100%}.o-drop--disabled{opacity:.5;pointer-events:none}.o-drop--mobile>.o-drop__menu{bottom:auto;left:50%;overflow-y:auto;position:fixed;right:auto;top:25%;transform:translate3d(-50%,-25%,0);z-index:50}.o-drop--mobile>.o-drop__overlay{display:block}.o-field{flex-grow:1}.o-field__label,.o-field__message{display:block}.o-field--addons{display:flex;justify-content:flex-start}.o-field--addons>:first-child:not(:only-child) button,.o-field--addons>:first-child:not(:only-child) input,.o-field--addons>:first-child:not(:only-child) select,.o-field--addons>button:first-child,.o-field--addons>input:first-child,.o-field--addons>select:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.o-field--addons>:last-child:not(:only-child) button,.o-field--addons>:last-child:not(:only-child) input,.o-field--addons>:last-child:not(:only-child) select,.o-field--addons>button:last-child,.o-field--addons>input:last-child,.o-field--addons>select:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.o-field--addons>:not(:first-child):not(:last-child) button,.o-field--addons>:not(:first-child):not(:last-child) input,.o-field--addons>:not(:first-child):not(:last-child) select,.o-field--addons>button:not(:first-child):not(:last-child),.o-field--addons>input:not(:first-child):not(:last-child),.o-field--addons>select:not(:first-child):not(:last-child){border-radius:0}.o-field--grouped{display:flex;margin-left:-.37rem;margin-right:-.37rem}.o-field--grouped>*{margin-left:.37rem;margin-right:.37rem}.o-field--grouped-multiline{flex-wrap:wrap}.o-field__horizontal-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1;margin-left:-.37rem;margin-right:-.37rem}.o-field__horizontal-body>*{margin-left:.37rem;margin-right:.37rem}.o-field--horizontal{display:flex}.o-field__horizontal-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin:0 1.5rem 0 0;text-align:right}.o-field--mobile .o-field__horizontal-body,.o-field--mobile .o-field__horizontal-label,.o-field--mobile.o-field--horizontal{all:unset}@keyframes icon-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.o-icon{align-items:center;display:inline-flex;justify-content:center;transition:transform .15s ease-out,opacity .3s ease-out}.o-icon--clickable{cursor:pointer;pointer-events:auto}.o-icon--spin{animation-duration:2s;animation-iteration-count:infinite;animation-name:icon-spin;animation-timing-function:linear}.o-ctrl-input{display:block;position:relative}.o-ctrl-input--expanded{flex-grow:1;flex-shrink:1;width:100%}.o-input{-moz-appearance:none;-webkit-appearance:none;display:inline-flex;position:relative;vertical-align:top;width:100%}.o-input__textarea{display:block;height:auto;max-width:100%;min-width:100%;resize:vertical}.o-input__counter{display:block;float:right}.o-input__icon-left,.o-input__icon-right{height:100%;position:absolute;top:0}.o-input__icon-right{right:0}.o-input__icon-left{left:0}.o-inputit{display:block}.o-inputit__container{align-items:center;border:1px solid #dbdbdb;color:#363636;display:flex;flex-wrap:wrap;justify-content:flex-start;position:relative;vertical-align:top}.o-inputit__autocomplete{flex:1;position:static}.o-inputit__input{border:none;box-shadow:none}.o-inputit__input:focus{box-shadow:none}.o-inputit__item{align-items:center;background-color:#445e00;color:#fff;display:inline-flex;justify-content:center;margin-left:-.1875em;margin-right:-.1875em;position:relative}.o-inputit__item>*{margin-left:.1875em;margin-right:.1875em}.o-inputit__counter{display:block;float:right}.o-inputit--expanded{flex-grow:1;flex-shrink:1;width:100%}.o-load{align-items:center;bottom:0;display:flex;justify-content:center;left:0;overflow:hidden;position:absolute;right:0;top:0}.o-load--fullpage{position:fixed}.o-load__overlay{bottom:0;left:0;position:absolute;right:0;top:0}.o-menu-list .o-menu-item__wrapper,.o-menu-list .o-menu-list{list-style:none}.o-menu-label{text-transform:uppercase}.o-menu-item{display:block;list-style:none}.o-modal{align-items:center;display:flex;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.o-modal,.o-modal__overlay{bottom:0;left:0;right:0;top:0}.o-modal__overlay{background-color:hsla(0,0%,4%,.86);position:absolute}.o-modal__content{background-color:#fff;overflow:auto;position:relative}.o-modal__content--full-screen{height:100%;margin:0;max-height:100vh;width:100%}.o-modal__close{background:none;border:none;display:inline-block;position:fixed;right:20px;top:20px;vertical-align:top}.o-modal--mobile .o-modal__content{width:100%}.o-notification{background-color:#445e00;color:#fff;position:relative;transform-origin:50% 0}.o-notification__content{flex-basis:auto;flex-grow:1;flex-shrink:1;overflow-x:auto;overflow-y:hidden;text-align:inherit}.o-notification__wrapper{align-items:flex-start;border:0;display:flex;padding-top:0;text-align:inherit}.o-notification__icon{flex-basis:auto;flex-grow:0;flex-shrink:0}.o-notification__close{align-items:center;border:none;cursor:pointer;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;pointer-events:auto;position:absolute;right:.5rem;top:.5rem;vertical-align:top}.o-notices{bottom:0;display:flex;left:0;overflow:hidden;padding:2em;pointer-events:none;position:fixed;right:0;top:0;z-index:1000}.o-notices .o-notification{max-width:600px;pointer-events:stroke}.o-notices .o-notification--bottom,.o-notices .o-notification--top{align-self:center}.o-notices .o-notification--bottom-right,.o-notices .o-notification--top-right{align-self:flex-end}.o-notices .o-notification--bottom-left,.o-notices .o-notification--top-left{align-self:flex-start}.o-notices--top{flex-direction:column}.o-notices--bottom{flex-direction:column-reverse}.o-notices--bottom .o-notification{margin-bottom:0}.o-notices--bottom .o-notification:not(:first-child){margin-bottom:1.5rem}.o-notices__custom-container{position:absolute}.o-pag{display:flex;justify-content:center;justify-content:space-between}.o-pag,.o-pag__link{align-items:center;text-align:center}.o-pag__link{-webkit-touch-callout:none;-moz-appearance:none;-webkit-appearance:none;box-shadow:none;cursor:pointer;display:inline-flex;justify-content:center;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top}.o-pag__link,.o-pag__link:hover{-webkit-text-decoration:none;text-decoration:none}.o-pag__link--disabled{pointer-events:none}.o-pag__link--current{background-color:#445e00;border-color:#445e00;color:#fff;pointer-events:none}.o-pag__ellipsis{justify-content:center;pointer-events:none;text-align:center}.o-pag--simple{justify-content:normal}.o-pag--centered{justify-content:center}.o-pag--centered .o-pag__previous{order:1}.o-pag--centered .o-pag__next{order:3}.o-pag--centered .o-pag__list{justify-content:center;order:2}.o-pag--right{justify-content:flex-end}.o-pag--right .o-pag__previous{order:1}.o-pag--right .o-pag__next{order:2}.o-pag--right .o-pag__list{justify-content:flex-end;order:2}.o-pag__next{order:3}.o-pag__previous{order:2}.o-pag__list{align-items:center;display:flex;flex-grow:1;flex-shrink:1;justify-content:center;list-style:none;margin:0;order:1;padding:0;text-align:center}.o-pag--mobile,.o-pag__list{flex-wrap:wrap;justify-content:flex-start}.o-pag--mobile .o-pag__link{flex-grow:1;flex-shrink:1}.o-pag--mobile .o-pag__next,.o-pag--mobile .o-pag__previous{flex-grow:1;flex-shrink:1;order:0}.o-pag--mobile .o-pag__ellipsis{flex-grow:1;flex-shrink:1}.o-pag--mobile .o-pag__list{order:0}.o-radio{-webkit-touch-callout:none;align-items:center;cursor:pointer;display:inline-flex;-webkit-user-select:none;-moz-user-select:none;user-select:none}.o-radio__check{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Ccircle cx='30.195' cy='35.959' r='4.85' style='fill:%23445e00' transform='translate(-255.068 -313.298) scale(10.1032)'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:contain;border-radius:50%;cursor:pointer;height:1rem;margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;transition-property:background;vertical-align:top;width:1rem}.o-radio__check--checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2'%3E%3Cg transform='translate(-94.434 -58.988) scale(4.38544)'%3E%3Cpath d='M32.935 13.679c6.167 0 11.173 5.006 11.173 11.173s-5.006 11.173-11.173 11.173-11.174-5.006-11.174-11.173 5.007-11.173 11.174-11.173Zm-.137 3.371a7.806 7.806 0 0 1 7.803 7.802 7.807 7.807 0 0 1-7.803 7.803 7.807 7.807 0 0 1-7.802-7.803 7.806 7.806 0 0 1 7.802-7.802Z' style='fill:%23445e00'/%3E%3Ccircle cx='32.84' cy='24.8' r='7.9' style='fill:transparent'/%3E%3C/g%3E%3C/svg%3E\")}.o-radio--disabled{opacity:.5}.o-ctrl-sel{display:inline-flex;position:relative}.o-ctrl-sel--expanded{flex-grow:1;flex-shrink:1;width:100%}.o-sel{align-items:center;-moz-appearance:none;-webkit-appearance:none;cursor:pointer;display:inline-block;justify-content:flex-start;position:relative;vertical-align:top}.o-sel-arrow{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5'%3E%3Cpath d='m233.451 101.749 2.166-2.327 6.396 6.143 6.45-6.143 2.179 2.327-8.629 8.303-8.562-8.303Z' style='stroke:%23fff;stroke-width:.18px' transform='translate(-1329.79 -547.054) scale(5.70052)'/%3E%3C/svg%3E\");background-position:calc(100% - .5rem);background-repeat:no-repeat;background-size:1rem;padding-right:2rem}.o-sel--multiple{height:auto;padding:0}.o-sel__icon-left,.o-sel__icon-right{height:100%;position:absolute;top:0}.o-sel__icon-right{right:0}.o-sel__icon-left{left:0}@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.o-sklt{display:inline-flex;flex-direction:column;vertical-align:middle;width:100%}.o-sklt__item{background:linear-gradient(90deg,#dbdbdb 25%,hsla(0,0%,86%,.5) 50%,#dbdbdb 75%);width:100%}.o-sklt__item--animated{animation-duration:1.5s;animation-iteration-count:infinite;animation-name:skeleton-loading;background-size:400% 100%}.o-sklt__item:after{content:\" \"}.o-sklt--centered{align-items:center}.o-sklt--right{align-items:flex-end}.o-side__content{background-color:#dbdbdb;z-index:39}.o-side__content--fixed{left:0;position:fixed;top:0}.o-side__content--absolute{left:0;position:absolute;top:0}.o-side__content--right{left:auto;right:0}.o-side__content--mini-expand:hover{transition:width}.o-side__content--static{position:static}.o-side__content--absolute,.o-side__content--static{transition:width .15s ease-out}.o-side__content--fullwidth{max-width:100%;width:100%}.o-side__content--fullheight{align-content:stretch;display:flex;flex-direction:column;height:100%;max-height:100%;overflow:hidden;overflow-y:auto}.o-side__overlay{background:hsla(0,0%,4%,.86);bottom:0;left:0;position:fixed;right:0;top:0;z-index:38}.o-slide{background:transparent;width:100%}.o-slide__thumb{background:#fff;border:1px solid #b5b5b5}.o-slide__thumb--dragging{cursor:grabbing;filter:brightness(.8)}.o-slide__track{align-items:center;background:#dbdbdb;cursor:pointer;display:flex;position:relative}.o-slide__fill{background:#445e00;height:100%;position:absolute;top:50%;transform:translateY(-50%)}.o-slide .o-slide__track{height:.5rem}.o-slide .o-slide__thumb{height:1rem;width:1rem}.o-slide .o-slide__tick-label{left:50%;position:absolute;transform:translateX(-50%)}.o-slide__tick{background:#445e00;position:absolute;top:50%;transform:translate(-50%,-50%);width:3px}.o-slide__tick--hidden{background:transparent}.o-slide__thumb-wrapper{align-items:center;cursor:grab;display:inline-flex;flex-direction:column;position:absolute;top:50%;transform:translate(-50%,-50%)}.o-slide--disabled{cursor:not-allowed;pointer-events:none}.o-steps{display:flex;flex-wrap:wrap;margin:0;padding:0}.o-steps .o-steps__title{background-color:#fff;text-align:center;z-index:1}.o-steps .o-steps__wrapper-vertical .o-steps--label-left .o-steps__divider,.o-steps .o-steps__wrapper-vertical.o-steps__wrapper-position-right .o-steps--label-left .o-steps__divider{left:auto}.o-steps__nav-item{flex-basis:1em;flex-grow:1;margin:0;padding:0;position:relative}.o-steps__divider{background:linear-gradient(270deg,#dbdbdb 50%,#445e00 0);background-position:100% 100%;background-size:200% 100%;bottom:0;content:\" \";display:block;left:-50%;position:absolute;width:100%}.o-steps__content{display:flex;flex-direction:column;overflow:visible;position:relative}.o-steps__content-transitioning{overflow:hidden}.o-steps--animated .o-steps__divider{transition-property:background}.o-steps__link{align-items:center;cursor:pointer;display:flex;flex-direction:column;justify-content:center;-webkit-text-decoration:none;text-decoration:none}.o-steps__link-label-right{flex-direction:row}.o-steps__link-label-left{flex-direction:row-reverse}.o-steps__link:hover{-webkit-text-decoration:none;text-decoration:none}.o-steps__link:not(.o-steps__link-clickable){cursor:not-allowed}.o-steps__marker{align-items:center;background:#b5b5b5;border:.2em solid #fff;color:#fff;display:flex;justify-content:center;overflow:hidden;z-index:1}.o-steps__details{background-color:#fff;text-align:center;z-index:1}.o-steps__nav-item-active .o-steps__link{cursor:default}.o-steps__nav-item-active .o-steps__marker{background-color:#fff;border-color:#445e00;color:#445e00}.o-steps__nav-item-active .o-steps__divider{background-position:0 100%}.o-steps__nav-item-previous .o-steps__marker{background-color:#445e00;color:#fff}.o-steps__nav-item-previous .o-steps__divider{background-position:0 100%}.o-steps__item{flex-basis:auto;flex-shrink:0}.o-steps__wrapper-vertical{display:flex;flex-direction:row;flex-wrap:wrap}.o-steps__wrapper-vertical .o-steps{flex-direction:column;height:100%}.o-steps__wrapper-vertical .o-steps__divider{height:100%;left:calc(50% - .1em);top:-50%}.o-steps__wrapper-vertical .o-steps__item-active .o-steps__divider,.o-steps__wrapper-vertical .o-steps__item-previous .o-steps__divider{background-position:100% 0}.o-steps__wrapper-vertical .o-steps__nav-item{align-items:center;display:flex;justify-content:center;width:100%}.o-steps__wrapper-vertical .o-steps__content{flex-basis:70%;flex-grow:1}.o-steps__wrapper-vertical .o-steps__navigation{flex-basis:100%}.o-steps__wrapper-vertical.o-steps__wrapper-position-right{flex-direction:row-reverse}.o-steps--mobile .o-steps__title{display:none;padding:0}.o-switch{-webkit-touch-callout:none;align-items:center;cursor:pointer;display:inline-flex;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}.o-switch--left{flex-direction:row-reverse}.o-switch--left .o-switch__label{margin-left:0}.o-switch__check-switch{background:#f5f5f5;content:\"\";display:block;height:1.175em;transform-origin:left;transition-property:transform;width:1.175em;will-change:transform}.o-switch__check{align-items:center;background:#b5b5b5;display:flex;flex-shrink:0;height:1.575em;padding:.2em;transition-property:background;width:2.75em}.o-switch__check--checked{background:#445e00}.o-switch__check--checked .o-switch__check-switch{transform:translate3d(100%,0,0)}.o-switch__input{left:0;opacity:0;position:absolute;z-index:-1}.o-switch--rounded{border-radius:9999px}.o-switch--disabled{opacity:.5}.o-table{border-collapse:separate;border-spacing:0;display:table;width:100%}.o-table__root{position:relative}.o-table__wrapper{position:relative;transition:opacity .3s ease-out}.o-table__wrapper--sticky-header{overflow-y:auto}.o-table__wrapper--sticky-header th{left:0;position:sticky;top:0}.o-table__wrapper--scrollable{-webkit-overflow-scrolling:touch;max-width:100%;overflow-x:auto}.o-table__wrapper--mobile{overflow-x:auto}.o-table__wrapper--mobile .o-table__mobile-sort{display:block}.o-table__wrapper--mobile .o-table{background-color:transparent}.o-table__wrapper--mobile thead tr{border-width:0;box-shadow:none}.o-table__wrapper--mobile thead tr th{display:none}.o-table__wrapper--mobile thead tr .o-table-th-checkbox{border:0;display:block;text-align:right;width:100%}.o-table__wrapper--mobile tfoot th{border:0;display:inherit}.o-table__wrapper--mobile tr{display:block;max-width:100%;position:relative}.o-table__wrapper--mobile tr td{border:0;display:inherit}.o-table__wrapper--mobile tr td:last-child{border-bottom:0}.o-table__wrapper--mobile tr:not(.o-table__tr--selected){background:inherit;background:#fff}.o-table__wrapper--mobile tr:not(.o-table__tr--selected):hover{background-color:inherit;background-color:#fff}.o-table__wrapper--mobile tr:not(.o-table--detailed):not(.o-table--empty):not(.o-table__footer) td{display:flex;justify-content:space-between;text-align:right;width:auto}.o-table__wrapper--mobile tr:not(.o-table--detailed):not(.o-table--empty):not(.o-table__footer) td:before{content:attr(data-label)}.o-table__mobile-sort{display:none}.o-table__th{position:relative;text-align:left;vertical-align:top}.o-table__th--centered{text-align:center}.o-table__th--right{text-align:right}.o-table__th__sort-icon{position:absolute;right:0}.o-table__th--sortable{cursor:pointer}.o-table__th--sticky{left:0;position:sticky;top:0}.o-table__th--unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.o-table__td{text-align:left;vertical-align:top}.o-table__td--sticky{left:0;position:sticky}.o-table__td--right{text-align:right}.o-table__td--centered{text-align:center}.o-table__td-chevron{vertical-align:middle}.o-table__tr--selected{background-color:#445e00;color:#fff}.o-table__pagination{align-items:center;display:flex;justify-content:space-between}.o-table__pagination>div:first-child{align-items:center;justify-content:flex-start}.o-table__pagination>div:last-child{align-items:center;justify-content:flex-end}.o-table__pagination>div:last-child>div{align-items:center;display:flex;justify-content:center}.o-table__pagination>div,.o-table__pagination>div:last-child>div{flex-basis:auto;flex-grow:0;flex-shrink:0}.o-tabs--fullwidth{width:100%}.o-tabs--fullwidth .o-tabs__nav-item-wrapper{flex-grow:1;flex-shrink:0}.o-tabs--fullwidth .o-tabs__nav-item-boxed,.o-tabs--fullwidth .o-tabs__nav-item-default,.o-tabs--fullwidth .o-tabs__nav-item-toggle{height:100%}.o-tabs--vertical{display:flex;flex-direction:row}.o-tabs--vertical .o-tabs__nav{align-items:stretch;border-bottom:none;flex-direction:column;flex-grow:0}.o-tabs--vertical .o-tabs__nav-item-boxed{border-bottom-color:transparent}.o-tabs--vertical .o-tabs__nav-item-boxed--active{border-right-color:transparent}.o-tabs--right{flex-direction:row-reverse}.o-tabs--right .o-tabs__nav-item-boxed{border-bottom-color:transparent;border-right-color:transparent}.o-tabs--right .o-tabs__nav-item-boxed--active{border-left-color:transparent}.o-tabs__nav{-webkit-touch-callout:none;align-items:center;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start;margin:0;overflow-x:auto;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.o-tabs__nav--centered{justify-content:center}.o-tabs__nav--right{justify-content:flex-end}.o-tabs__nav-item-default{align-items:center;-moz-appearance:none;-webkit-appearance:none;background-color:transparent;border:1px solid transparent;color:#4a4a4a;cursor:pointer;display:flex;justify-content:center;line-height:1.5;margin:0 0 -1px;padding:0;-webkit-text-decoration:none;text-decoration:none;vertical-align:top;width:100%}.o-tabs__nav-item-default--active{border-bottom-color:#445e00;color:#445e00}.o-tabs__nav-item-default--disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.o-tabs__nav-item-boxed{align-items:center;-moz-appearance:none;-webkit-appearance:none;background-color:transparent;border:1px solid transparent;color:#4a4a4a;cursor:pointer;display:flex;justify-content:center;line-height:1.5;margin:0 0 -1px;padding:0;-webkit-text-decoration:none;text-decoration:none;vertical-align:top;width:100%}.o-tabs__nav-item-boxed--active{border-bottom-color:#445e00;color:#445e00}.o-tabs__nav-item-boxed--disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.o-tabs__nav-item-toggle{align-items:center;-moz-appearance:none;-webkit-appearance:none;background-color:transparent;border:1px solid transparent;color:#4a4a4a;cursor:pointer;display:flex;justify-content:center;line-height:1.5;margin:0;padding:0;position:relative;-webkit-text-decoration:none;text-decoration:none;vertical-align:top;width:100%}.o-tabs__nav-item-toggle--disabled{cursor:not-allowed;opacity:.5;pointer-events:none}.o-tabs__content{display:flex;flex-direction:column;flex-grow:1;overflow:visible;position:relative}.o-tabs__content--transitioning{overflow:hidden}.o-tpck__dropdown{width:100%}.o-tpck__box{align-items:center;display:flex;justify-content:center}.o-tpck__select{align-items:center;-moz-appearance:none;-webkit-appearance:none;border:0;cursor:pointer;display:inline-block;font-size:inherit;justify-content:flex-start;position:relative;vertical-align:top}.o-tpck__select-placeholder{opacity:.5}.o-tip{display:inline-flex;position:relative}.o-tip__arrow--top{border-left:5px solid transparent;border-right:5px solid transparent;border-top-style:solid;border-top-width:5px;bottom:auto;top:100%}.o-tip__arrow--top,.o-tip__content--top{left:50%;right:auto;transform:translateX(-50%)}.o-tip__content--top{bottom:calc(7px + 100%);top:auto}.o-tip__arrow--right{border-bottom:5px solid transparent;border-right-style:solid;border-right-width:5px;border-top:5px solid transparent;left:auto;right:100%}.o-tip__arrow--right,.o-tip__content--right{bottom:auto;top:50%;transform:translateY(-50%)}.o-tip__content--right{left:calc(7px + 100%);right:auto}.o-tip__arrow--bottom{border-bottom-style:solid;border-bottom-width:5px;border-left:5px solid transparent;border-right:5px solid transparent;bottom:100%;top:auto}.o-tip__arrow--bottom,.o-tip__content--bottom{left:50%;right:auto;transform:translateX(-50%)}.o-tip__content--bottom{bottom:auto;top:calc(7px + 100%)}.o-tip__arrow--left{border-bottom:5px solid transparent;border-left-style:solid;border-left-width:5px;border-top:5px solid transparent;left:100%;right:auto}.o-tip__arrow--left,.o-tip__content--left{bottom:auto;top:50%;transform:translateY(-50%)}.o-tip__content--left{left:auto;right:calc(7px + 100%)}.o-tip__arrow{color:#445e00;content:\"\";pointer-events:none;position:absolute;z-index:38}.o-tip__content{background-color:#445e00;position:absolute;white-space:nowrap;z-index:38}.o-tip__content--always{opacity:1;visibility:visible}.o-tip__content--multiline{text-align:center;white-space:normal}.o-tip__trigger{width:100%}.o-upl{display:inline-flex;position:relative}.o-upl--disabled{cursor:not-allowed}.o-upl--expanded{width:100%}.o-upl input[type=file],.o-upl__draggable{cursor:pointer;width:100%}.o-upl input[type=file]{height:100%;left:0;opacity:0;position:absolute;top:0;z-index:-1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(10);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(11);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(6);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(3);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _089c4717 = () => interopDefault(__webpack_require__.e(/* import() | pages/test */ 4).then(__webpack_require__.bind(null, 29)));
const _23c2571d = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 3).then(__webpack_require__.bind(null, 30)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/test",
    component: _089c4717,
    name: "test"
  }, {
    path: "/",
    component: _23c2571d,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(15)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "25bab908"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(17)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "b5429ca0"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@oruga-ui/oruga/dist/oruga.css
var oruga = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "d809e1b4"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 1).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 2).then(__webpack_require__.bind(null, 31)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "@oruga-ui/oruga"
var oruga_ = __webpack_require__(12);
var external_oruga_ui_oruga_default = /*#__PURE__*/__webpack_require__.n(oruga_);

// CONCATENATED MODULE: ./.nuxt/oruga.js


external_vue_default.a.use(external_oruga_ui_oruga_default.a, {});
// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\oruga.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "nuxt-sample",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof /* Cannot get final name for export "default" in "./.nuxt/oruga.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/oruga.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map