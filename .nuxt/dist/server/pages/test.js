exports.ids = [4];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=171fdf7c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Head', [_c('Title', [_vm._v("TEST ROASTING")])], 1), _vm._ssrNode(" <div><h1>TEST TRACKING URL PAGE</h1></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=171fdf7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  async asyncData({
    query,
    store
  }) {
    // fetch data from API
    try {
      const carDetails = await fetch(`https://jsonplaceholder.typicode.com/users/1`).then(res => res.json());
      console.log("Details: ", carDetails);
      return {
        carDetails
      };
    } catch (error) {
      // Redirect to error page or 404 depending on server response
      console.log("Error: ", error);
    }
  },
  head() {
    return {
      //   title: "FAKE title",
      title: this.carDetails.name,
      meta: [{
        hid: "og-title",
        property: "og:title",
        content: this.carDetails.name
      }
      // other meta
      ]
    };
  }
});

// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {

//     },
// })
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/test.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24860c57"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test.js.map