(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-ui-kit-2342"] = factory(require("vue"));
	else
		root["vue-ui-kit-2342"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=template&id=5cc7f8f0&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-5cc7f8f0"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "hello"
};
const _hoisted_2 = /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createStaticVNode)("<p data-v-5cc7f8f0> For a guide and recipes on how to configure / customize this project,<br data-v-5cc7f8f0> check out the <a href=\"https://cli.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vue-cli documentation</a>. </p><h3 data-v-5cc7f8f0>Installed CLI Plugins</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>babel</a></li><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>router</a></li><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>eslint</a></li></ul><h3 data-v-5cc7f8f0>Essential Links</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href=\"https://vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>Core Docs</a></li><li data-v-5cc7f8f0><a href=\"https://forum.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>Forum</a></li><li data-v-5cc7f8f0><a href=\"https://chat.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>Community Chat</a></li><li data-v-5cc7f8f0><a href=\"https://twitter.com/vuejs\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>Twitter</a></li><li data-v-5cc7f8f0><a href=\"https://news.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>News</a></li></ul><h3 data-v-5cc7f8f0>Ecosystem</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href=\"https://router.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vue-router</a></li><li data-v-5cc7f8f0><a href=\"https://vuex.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/vue-devtools#vue-devtools\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vue-devtools</a></li><li data-v-5cc7f8f0><a href=\"https://vue-loader.vuejs.org\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>vue-loader</a></li><li data-v-5cc7f8f0><a href=\"https://github.com/vuejs/awesome-vue\" target=\"_blank\" rel=\"noopener\" data-v-5cc7f8f0>awesome-vue</a></li></ul>", 7);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("h1", null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.msg), 1), _hoisted_2]);
}
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=5cc7f8f0&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=script&lang=js
/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/HelloWorld.vue?vue&type=style&index=0&id=5cc7f8f0&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=5cc7f8f0&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/components/HelloWorld.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HelloWorldvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-5cc7f8f0"]])

/* harmony default export */ var HelloWorld = (__exports__);
;// CONCATENATED MODULE: ./src/install.js

const HelloWorldSimple = {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("hello-world", HelloWorld);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(HelloWorldSimple);
}
/* harmony default export */ var install = (HelloWorldSimple);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (install);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-ui-kit-2342.umd.js.map