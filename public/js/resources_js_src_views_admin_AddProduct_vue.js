"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_admin_AddProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var suneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! suneditor */ "./node_modules/suneditor/src/suneditor.js");
/* harmony import */ var suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! suneditor/src/plugins */ "./node_modules/suneditor/src/plugins/index.js");
/* harmony import */ var _components_v_separation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/v-separation.vue */ "./resources/js/src/components/v-separation.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddProduct',
  components: {
    vSeparation: _components_v_separation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      title: null,
      brands: [],
      types: [],
      specs_name: [],
      path: window.location.pathname,
      selected_brand: '',
      selected_type: ''
    };
  },
  mounted: function mounted() {
    var self = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api' + window.location.pathname + '/get-info').then(function (response) {
      self.title = response.data[0];
      self.brands = response.data[1];
      self.types = response.data[2];
      self.specs_name = response.data[3];
    });
    var se = suneditor__WEBPACK_IMPORTED_MODULE_2__["default"].create('full_text', {
      plugins: suneditor_src_plugins__WEBPACK_IMPORTED_MODULE_3__["default"],
      buttonList: [['undo', 'redo'], ['font', 'fontSize', 'formatBlock'], ['paragraphStyle', 'blockquote'], ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'], ['removeFormat'], '/', // Line break
      ['outdent', 'indent'], ['align', 'horizontalRule', 'list', 'lineHeight'], ['link', 'image', 'video']]
    });

    se.onChange = function () {
      se.save();
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = ["action"];
var _hoisted_3 = ["value"];
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "main_info d-flex justify-content-between"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("?????????????????????? ????????????");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "file",
  style: {
    "font-size": "10px",
    "margin-top": "20px"
  },
  id: "img",
  name: "img",
  accept: "image/png",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-5 card__text"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "name"
}, "???????????????? ????????????:", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "w-100 mb-2",
  id: "name",
  name: "name",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("?????????????? ????????????????");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  "class": "w-100",
  id: "short_text",
  name: "short_text",
  rows: "2",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"card__price-and-buy-button d-flex flex-column col-4 align-items-end justify-content-between\"><div class=\"row mb-5\"><label for=\"price\" class=\"col-3\">????????:</label><div class=\"col-6\"><input type=\"number\" id=\"price\" name=\"price\" required></div><label for=\"price\" class=\"col-2\">??????</label></div><div class=\"row\"><label for=\"count\" class=\"col-4\">????????????????????:</label><div class=\"col-5\"><input type=\"number\" id=\"count\" name=\"count\" required></div><label for=\"count\" class=\"col-1\">????</label></div><button type=\"submit\" class=\"card__edit-button btn\">???????????????? ??????????</button></div>", 1);

var _hoisted_14 = {
  "class": "mt-2"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("???????????? ????????????????");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  "class": "w-100",
  id: "full_text",
  name: "full_text",
  required: ""
}, null, -1
/* HOISTED */
);

var _hoisted_17 = {
  "class": "card__specs row"
};
var _hoisted_18 = {
  "class": "card__name-specs col-6 d-flex flex-column"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "brand"
}, "??????????")], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "type"
}, "??????")], -1
/* HOISTED */
);

var _hoisted_21 = ["for"];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
  "class": "mb-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "made_in"
}, "???????????? ??????????????????????????")], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "card__name-specs col-6 d-flex flex-column"
};
var _hoisted_24 = {
  "class": "mb-2 input"
};
var _hoisted_25 = ["value"];
var _hoisted_26 = {
  "class": "mb-2 input"
};
var _hoisted_27 = ["value"];
var _hoisted_28 = ["id", "name"];

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-2 input"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "made_in",
  name: "made_in",
  size: "18",
  required: ""
})], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "file",
  style: {
    "font-size": "10px",
    "margin-bottom": "20px"
  },
  id: "audio",
  name: "audio",
  accept: ".mp3"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_separation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-separation");

  var _component_lable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    method: "post",
    action: '/api' + $data.path,
    enctype: "multipart/form-data"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    name: "_token",
    value: $data.csrf
  }, null, 8
  /* PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_separation, {
    title: '???????????????? ?????????? ?? ?????????????????? (' + $data.title + ')'
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lable, {
    "for": "img"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lable, {
    "for": "short_text"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_12]), _hoisted_13])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lable, {
    "for": "full_text"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_16])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_separation, {
    title: "????????????????????????????"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_hoisted_19, _hoisted_20, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.specs_name, function (spec_name) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("strong", {
      "class": "mb-2",
      key: spec_name.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
      "for": spec_name.count_spec
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(spec_name.name), 9
    /* TEXT, PROPS */
    , _hoisted_21)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_22]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "brand",
    name: "brand",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selected_brand = $event;
    }),
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.brands, function (brand) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: brand
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(brand), 9
    /* TEXT, PROPS */
    , _hoisted_25);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selected_brand]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "type",
    name: "type",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.selected_type = $event;
    }),
    required: ""
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.types, function (type) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: type.text
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(type.text), 9
    /* TEXT, PROPS */
    , _hoisted_27);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.selected_type]])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.specs_name, function (spec_name) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "mb-2 input",
      key: spec_name.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      type: "text",
      id: spec_name.count_spec,
      name: spec_name.count_spec,
      size: "18",
      required: ""
    }, null, 8
    /* PROPS */
    , _hoisted_28)]);
  }), 128
  /* KEYED_FRAGMENT */
  )), _hoisted_29])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_separation, {
    title: "???????????????? ??????????????????????"
  }), _hoisted_30], 8
  /* PROPS */
  , _hoisted_2)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input {\n  height: 25px !important;\n}\ninput[type=number] {\n  width: 150px;\n}\ninput[type=file]::-webkit-file-upload-button {\n  background-color: #FF9900;\n  border: 2px solid #000000;\n  border-radius: 5px;\n}\ninput[type=file]::file-selector-button {\n  background-color: #FF9900;\n  border: 2px solid #000000;\n  border-radius: 5px;\n}\n.card__available {\n  color: #FF9900;\n}\n.card__not-available {\n  color: #ff0000;\n}\n.review__form {\n  font-size: 15px;\n}\n.login-redirect {\n  font-size: 25px;\n  display: inline;\n  border-bottom: 1px solid #000000;\n}\n.card__img-content {\n  position: relative;\n  width: 150px;\n  height: 230px;\n  margin-bottom: 30px;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 20px;\n  z-index: 3;\n  background: #E4E4E4;\n  text-align: center;\n}\n.card__img {\n  z-index: 3;\n  width: auto;\n  height: 95%;\n  filter: drop-shadow(12px 9px 4px rgba(0, 0, 0, 0.25));\n  -webkit-filter: drop-shadow(12px 9px 4px rgba(0, 0, 0, 0.25));\n  position: relative;\n}\n.card__text {\n  font-size: 15px !important;\n}\n.col-11 {\n  padding: 0 !important;\n}\n.play {\n  height: 40px;\n  width: 40px;\n  padding: 0 !important;\n  margin-left: 10px;\n  border-radius: 100%;\n  background-color: #FF9900;\n  color: #FFFFFF;\n}\n.play span {\n  text-align: center;\n  font-size: 30px !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_fabf6410_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_fabf6410_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_fabf6410_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/command/blockquote.js":
/*!******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/command/blockquote.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'blockquote',
    display: 'command',
    add: function (core, targetElement) {
        const context = core.context;
        context.blockquote = {
            targetButton: targetElement,
            tag: core.util.createElement('BLOCKQUOTE')
        };
    },

    /**
     * @Override core
     */
    active: function (element) {
        if (!element) {
            this.util.removeClass(this.context.blockquote.targetButton, 'active');
        } else if (/blockquote/i.test(element.nodeName)) {
            this.util.addClass(this.context.blockquote.targetButton, 'active');
            return true;
        }
        
        return false;
    },

    /**
     * @Override core
     */
    action: function () {
        const currentBlockquote = this.util.getParentElement(this.getSelectionNode(), 'blockquote');

        if (currentBlockquote) {
            this.detachRangeFormatElement(currentBlockquote, null, null, false, false);
        } else {
            this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(false));
        }
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/dialog/audio.js":
/*!************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/dialog/audio.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */ "./node_modules/suneditor/src/plugins/modules/dialog.js");
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/component */ "./node_modules/suneditor/src/plugins/modules/component.js");
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/fileManager */ "./node_modules/suneditor/src/plugins/modules/fileManager.js");
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_2__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'audio',
    display: 'dialog',
    add: function (core) {
        core.addModule([(_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()), (_modules_component__WEBPACK_IMPORTED_MODULE_1___default()), (_modules_fileManager__WEBPACK_IMPORTED_MODULE_2___default())]);

        const context = core.context;
        const contextAudio = context.audio = {
            _infoList: [], // @Override fileManager
            _infoIndex: 0, // @Override fileManager
            _uploadFileLength: 0, // @Override fileManager
            focusElement: null, // @Override dialog // This element has focus when the dialog is opened.
            targetSelect: null,
            _origin_w: core.options.audioWidth,
            _origin_h: core.options.audioHeight,
            _linkValue: '',
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null,
        };

        /** dialog */
        let audio_dialog = this.setDialog(core);
        contextAudio.modal = audio_dialog;
        contextAudio.audioInputFile = audio_dialog.querySelector('._se_audio_files');
        contextAudio.audioUrlFile = audio_dialog.querySelector('.se-input-url');
        contextAudio.focusElement = contextAudio.audioInputFile || contextAudio.audioUrlFile;
        contextAudio.preview = audio_dialog.querySelector('.se-link-preview');

        /** controller */
        let audio_controller = this.setController(core);
        contextAudio.controller = audio_controller;

        /** add event listeners */
        audio_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextAudio.audioInputFile) audio_dialog.querySelector('.se-dialog-files-edge-button').addEventListener('click', this._removeSelectedFiles.bind(contextAudio.audioInputFile, contextAudio.audioUrlFile, contextAudio.preview));
        if (contextAudio.audioInputFile && contextAudio.audioUrlFile) contextAudio.audioInputFile.addEventListener('change', this._fileInputChange.bind(contextAudio));
        audio_controller.addEventListener('click', this.onClick_controller.bind(core));
        if (contextAudio.audioUrlFile) contextAudio.audioUrlFile.addEventListener('input', this._onLinkPreview.bind(contextAudio.preview, contextAudio, core.options.linkProtocol));

        /** append html */
        context.dialog.modal.appendChild(audio_dialog);

        /** append controller */
        context.element.relative.appendChild(audio_controller);

        /** empty memory */
        audio_dialog = null, audio_controller = null;
    },

    /** HTML - dialog */
    setDialog: function (core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');

        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '' +
            '<form method="post" enctype="multipart/form-data">' +
                '<div class="se-dialog-header">' +
                    '<button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                        core.icons.cancel +
                    '</button>' +
                    '<span class="se-modal-title">' + lang.dialogBox.audioBox.title + '</span>' +
                '</div>' +
                '<div class="se-dialog-body">';

                if (option.audioFileInput) {
                    html += '' +
                        '<div class="se-dialog-form">' +
                            '<label>' + lang.dialogBox.audioBox.file + '</label>' +
                            '<div class="se-dialog-form-files">' +
                                '<input class="se-input-form _se_audio_files" type="file" accept="' + option.audioAccept + '"' + (option.audioMultipleFile ? ' multiple="multiple"' : '') + '/>' +
                                '<button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' +
                            '</div>' +
                        '</div>';
                }
                 
                if (option.audioUrlInput) {
                    html += '' +
                        '<div class="se-dialog-form">' +
                            '<label>' + lang.dialogBox.audioBox.url + '</label>' +
                            '<input class="se-input-form se-input-url" type="text" />' +
                            '<pre class="se-link-preview"></pre>' +
                        '</div>';
                }
                    
                html += '' +
                '</div>' +
                '<div class="se-dialog-footer">' +
                    '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' +
                '</div>' +
            '</form>';

        dialog.innerHTML = html;

        return dialog;
    },

    /** HTML - controller */
    setController: function (core) {
        const lang = core.lang;
        const icons = core.icons;
        const link_btn = core.util.createElement('DIV');

        link_btn.className = 'se-controller se-controller-link';
        link_btn.innerHTML = '' +
            '<div class="se-arrow se-arrow-up"></div>' +
            '<div class="link-content">' +
                '<div class="se-btn-group">' +
                    '<button type="button" data-command="update" tabindex="-1" class="se-tooltip">' +
                        icons.edit +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' +
                        icons.delete +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' +
                    '</button>' +
                '</div>' +
            '</div>';

        return link_btn;
    },

    // Disable url input when uploading files
    _fileInputChange: function () {
        if (!this.audioInputFile.value) {
            this.audioUrlFile.removeAttribute('disabled');
            this.preview.style.textDecoration = '';
        } else {
            this.audioUrlFile.setAttribute('disabled', true);
            this.preview.style.textDecoration = 'line-through';
        }
    },

    // Disable url input when uploading files
    _removeSelectedFiles: function (urlInput, preview) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            preview.style.textDecoration = '';
        }
    },

    // create new audio tag
    _createAudioTag: function () {
        const oAudio = this.util.createElement('AUDIO');
        this.plugins.audio._setTagAttrs.call(this, oAudio);

        const w = this.context.audio._origin_w;
        const h = this.context.audio._origin_h;
        oAudio.setAttribute('origin-size', w + ',' + h);
        oAudio.style.cssText = (w ? ('width:' + w + '; ') : '') + (h ? ('height:' + h + ';') : '');

        return oAudio;
    },

    _setTagAttrs: function (element) {
        element.setAttribute('controls', true);

        const attrs = this.options.audioTagAttrs;
        if (!attrs) return;

        for (let key in attrs) {
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },

    _onLinkPreview: function (context, protocol, e) {
        const value = e.target.value.trim();
        context._linkValue = this.textContent = !value ? '' : (protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0) ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
    },

    /**
     * @Required @Override fileManager
     */
    fileTags: ['audio'],

    /**
     * @Override core, fileManager, resizing
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */
    select: function (element) {
        this.plugins.audio.onModifyMode.call(this, element);
    },

    /**
     * @Override fileManager, resizing 
     */
    destroy: function (element) {
        element = element || this.context.audio._element;
        const container = this.util.getParentElement(element, this.util.isComponent) || element;
        const dataIndex = element.getAttribute('data-index') * 1;
        const focusEl = (container.previousElementSibling || container.nextElementSibling);

        const emptyDiv = container.parentNode;
        this.util.removeItem(container);
        this.plugins.audio.init.call(this);
        this.controllersOff();

        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function (current) { return current.childNodes.length === 0; }, null);

        // focus
        this.focusEdge(focusEl);

        // fileManager event
        this.plugins.fileManager.deleteInfo.call(this, 'audio', dataIndex, this.functions.onAudioUpload);

        // history stack
        this.history.push(false);
    },

    /**
     * @Override fileManager
     */
    checkFileInfo: function () {
        this.plugins.fileManager.checkInfo.call(this, 'audio', ['audio'], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), false);
    },

    /**
     * @Override fileManager
     */
    resetFileInfo: function () {
        this.plugins.fileManager.resetInfo.call(this, 'audio', this.functions.onAudioUpload);
    },

    /**
     * @Required @Override dialog
     */
    on: function (update) {
        const contextAudio = this.context.audio;

        if (!update) {
            this.plugins.audio.init.call(this);
            if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.setAttribute('multiple', 'multiple');
        } else if (contextAudio._element) {
            this.context.dialog.updateModal = true;
            contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = contextAudio._element.src;
            if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.removeAttribute('multiple');
        } else {
            if (contextAudio.audioInputFile && this.options.audioMultipleFile) contextAudio.audioInputFile.removeAttribute('multiple');
        }
    },

    /**
     * @Required @Override dialog
     */
    open: function () {
        this.plugins.dialog.open.call(this, 'audio', 'audio' === this.currentControllerName);
    },

    submit: function (e) {
        const contextAudio = this.context.audio;

        e.preventDefault();
        e.stopPropagation();

        try {
            if (contextAudio.audioInputFile && contextAudio.audioInputFile.files.length > 0) {
                this.showLoading();
                this.plugins.audio.submitAction.call(this, contextAudio.audioInputFile.files);
            } else if (contextAudio.audioUrlFile && contextAudio._linkValue.length > 0) {
                this.showLoading();
                this.plugins.audio.setupUrl.call(this, contextAudio._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.audio.submit.fail] cause : "' + error.message + '"');
        } finally {
            this.plugins.dialog.close.call(this);
        }

        return false;
    },

    submitAction: function (fileList) {
        if (fileList.length === 0) return;

        let fileSize = 0;
        let files = [];
        for (let i = 0, len = fileList.length; i < len; i++) {
            if (/audio/i.test(fileList[i].type)) {
                files.push(fileList[i]);
                fileSize += fileList[i].size;
            }
        }

        const limitSize = this.options.audioUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const audiosInfo = this.context.audio._infoList;
            for (let i = 0, len = audiosInfo.length; i < len; i++) {
                infoSize += audiosInfo[i].size * 1;
            }

            if ((fileSize + infoSize) > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: ' + (limitSize/1000) + 'KB';
                if (typeof this.functions.onAudioUploadError !== 'function' || this.functions.onAudioUploadError(err, { 'limitSize': limitSize, 'currentSize': infoSize, 'uploadSize': fileSize }, this)) {
                    this.functions.noticeOpen(err);
                }
                return;
            }
        }

        const contextAudio = this.context.audio;
        contextAudio._uploadFileLength = files.length;

        const info = {
            isUpdate: this.context.dialog.updateModal,
            element: contextAudio._element
        };

        if (typeof this.functions.onAudioUploadBefore === 'function') {
            const result = this.functions.onAudioUploadBefore(files, info, this, function (data) {
                if (data && this._w.Array.isArray(data.result)) {
                    this.plugins.audio.register.call(this, info, data);
                } else {
                    this.plugins.audio.upload.call(this, info, data);
                }
            }.bind(this));

            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (typeof result === 'object' && result.length > 0) files = result;
        }

        this.plugins.audio.upload.call(this, info, files);
    },

    error: function (message, response) {
        this.closeLoading();
        if (typeof this.functions.onAudioUploadError !== 'function' || this.functions.onAudioUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.audio.exception] response: ' + message);
        }
    },

    upload: function (info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.audio.error.call(this, files, null);
            return;
        }

        const audioUploadUrl = this.options.audioUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;

        // create formData
        const formData = new FormData();
        for (let i = 0; i < filesLen; i++) {
            formData.append('file-' + i, files[i]);
        }

        // server upload
        this.plugins.fileManager.upload.call(this, audioUploadUrl, this.options.audioUploadHeader, formData, this.plugins.audio.callBack_upload.bind(this, info), this.functions.onAudioUploadError);
    },

    callBack_upload: function (info, xmlHttp) {
        if (typeof this.functions.audioUploadHandler === 'function') {
            this.functions.audioUploadHandler(xmlHttp, info, this);
        } else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) {
                this.plugins.audio.error.call(this, response.errorMessage, response);
            } else {
                this.plugins.audio.register.call(this, info, response);
            }
        }
    },

    register: function (info, response) {
        const fileList = response.result;

        for (let i = 0, len = fileList.length, file, oAudio; i < len; i++) {
            if (info.isUpdate) oAudio = info.element;
            else oAudio = this.plugins.audio._createAudioTag.call(this);

            file = { name: fileList[i].name, size: fileList[i].size };
            this.plugins.audio.create_audio.call(this, oAudio, fileList[i].url, file, info.isUpdate);
        }

        this.closeLoading();
    },

    setupUrl: function (src) {
        try {
            if (src.length === 0) return false;
            this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), src, null, this.context.dialog.updateModal);
        } catch (error) {
            throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + error.message + '"');
        } finally {
            this.closeLoading();
        }
    },

    create_audio: function (element, src, file, isUpdate) {
        const contextAudio = this.context.audio;
        
        // create new tag
        if (!isUpdate) {
            element.src = src;
            const cover = this.plugins.component.set_cover.call(this, element);
            const container = this.plugins.component.set_container.call(this, cover, '');
            if (!this.insertComponent(container, false, true, !this.options.mediaAutoSelect)) {
                this.focus();
                return;
            }
            if (!this.options.mediaAutoSelect) {
                const line = this.appendFormatTag(container, null);
                if (line) this.setRange(line, 0, line, 0);
            }
        } // update
        else {
            if (contextAudio._element) element = contextAudio._element;
            if (element && element.src !== src) {
                element.src = src;
                this.selectComponent(element, 'audio');
            } else {
                this.selectComponent(element, 'audio');
                return;
            }
        }

        this.plugins.fileManager.setInfo.call(this, 'audio', element, this.functions.onAudioUpload, file, false);
        if (isUpdate) this.history.push(false);
    },

    updateCover: function (element) {
        const contextAudio = this.context.audio;
        this.plugins.audio._setTagAttrs.call(this, element);
        
        // find component element
        const existElement = (this.util.isRangeFormatElement(element.parentNode) || this.util.isWysiwygDiv(element.parentNode)) ? 
            element : this.util.getFormatElement(element) || element;

        // clone element
        const prevElement = element;
        contextAudio._element = element = element.cloneNode(false);
        const cover = this.plugins.component.set_cover.call(this, element);
        const container = this.plugins.component.set_container.call(this, cover, 'se-audio-container');

        try {
            if (this.util.isListCell(existElement) || this.util.isFormatElement(existElement)) {
                prevElement.parentNode.replaceChild(container, prevElement);
            } else if (this.util.isFormatElement(existElement) && existElement.childNodes.length > 0) {
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(prevElement);
                // clean format tag
                this.util.removeEmptyNode(existElement, null);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else {
                existElement.parentNode.replaceChild(container, existElement);
            }
        } catch (error) {
            console.warn('[SUNEDITOR.audio.error] Maybe the audio tag is nested.', error);
        }

        this.plugins.fileManager.setInfo.call(this, 'audio', element, this.functions.onAudioUpload, null, false);
        this.plugins.audio.init.call(this);
    },

    /**
     * @Required @Override fileManager, resizing
     */
    onModifyMode: function (selectionTag) {
        const contextAudio = this.context.audio;
        
        this.setControllerPosition(contextAudio.controller, selectionTag, 'bottom', {left: 0, top: 0});
        this.controllersOn(contextAudio.controller, selectionTag, this.plugins.audio.onControllerOff.bind(this, selectionTag), 'audio');

        this.util.addClass(selectionTag, 'active');
        contextAudio._element = selectionTag;
        contextAudio._cover = this.util.getParentElement(selectionTag, 'FIGURE');
        contextAudio._container = this.util.getParentElement(selectionTag, this.util.isComponent);
    },

    /**
     * @Required @Override fileManager, resizing
     */
    openModify: function (notOpen) {
        if (this.context.audio.audioUrlFile) {
            const contextAudio = this.context.audio;
            contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = contextAudio._element.src;
        }
        if (!notOpen) this.plugins.dialog.open.call(this, 'audio', true);
    },

    onClick_controller: function (e) {
        e.stopPropagation();

        const command = e.target.getAttribute('data-command');
        if (!command) return;

        e.preventDefault();

        if (/update/.test(command)) {
            this.plugins.audio.openModify.call(this, false);
        }
        else { /** delete */
            this.plugins.audio.destroy.call(this, this.context.audio._element);
        }

        this.controllersOff();
    },

    onControllerOff: function (selectionTag) {
        this.util.removeClass(selectionTag, 'active');
        this.context.audio.controller.style.display = 'none';
    },

    /**
     * @Required @Override dialog
     */
    init: function () {
        if (this.context.dialog.updateModal) return;
        const contextAudio = this.context.audio;

        if (contextAudio.audioInputFile) contextAudio.audioInputFile.value = '';
        if (contextAudio.audioUrlFile) contextAudio._linkValue = contextAudio.preview.textContent = contextAudio.audioUrlFile.value = '';
        if (contextAudio.audioInputFile && contextAudio.audioUrlFile) {
            contextAudio.audioUrlFile.removeAttribute('disabled');
            contextAudio.preview.style.textDecoration = '';
        }

        contextAudio._element = null;
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/dialog/image.js":
/*!************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/dialog/image.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */ "./node_modules/suneditor/src/plugins/modules/dialog.js");
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/_anchor */ "./node_modules/suneditor/src/plugins/modules/_anchor.js");
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/component */ "./node_modules/suneditor/src/plugins/modules/component.js");
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_resizing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/resizing */ "./node_modules/suneditor/src/plugins/modules/resizing.js");
/* harmony import */ var _modules_resizing__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_resizing__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/fileManager */ "./node_modules/suneditor/src/plugins/modules/fileManager.js");
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_4__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'image',
    display: 'dialog',
    add: function (core) {
        core.addModule([(_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()), _modules_anchor__WEBPACK_IMPORTED_MODULE_1__["default"], (_modules_component__WEBPACK_IMPORTED_MODULE_2___default()), (_modules_resizing__WEBPACK_IMPORTED_MODULE_3___default()), (_modules_fileManager__WEBPACK_IMPORTED_MODULE_4___default())]);
        
        const options = core.options;
        const context = core.context;
        const contextImage = context.image = {
            _infoList: [], // @Override fileManager
            _infoIndex: 0, // @Override fileManager
            _uploadFileLength: 0, // @Override fileManager
            focusElement: null, // @Override dialog // This element has focus when the dialog is opened.
            sizeUnit: options._imageSizeUnit,
            _linkElement: '',
            _altText: '',
            _align: 'none',
            _floatClassRegExp: '__se__float\\-[a-z]+',
            _v_src: {_linkValue: ''},
            svgDefaultSize: '30%',
            base64RenderIndex: 0,
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null,
            // @Override resizing properties
            inputX: null,
            inputY: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: 'auto',
            _defaultSizeY: 'auto',
            _origin_w: options.imageWidth === 'auto' ? '' : options.imageWidth,
            _origin_h: options.imageHeight === 'auto' ? '' : options.imageHeight,
            _proportionChecked: true,
            _resizing: options.imageResizing,
            _resizeDotHide: !options.imageHeightShow,
            _rotation: options.imageRotation,
            _alignHide: !options.imageAlignShow,
            _onlyPercentage: options.imageSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1,
            _captionShow: true,
            _captionChecked: false,
            _caption: null,
            captionCheckEl: null
        };

        /** image dialog */
        let image_dialog = this.setDialog(core);
        contextImage.modal = image_dialog;
        contextImage.imgInputFile = image_dialog.querySelector('._se_image_file');
        contextImage.imgUrlFile = image_dialog.querySelector('._se_image_url');
        contextImage.focusElement = contextImage.imgInputFile || contextImage.imgUrlFile;
        contextImage.altText = image_dialog.querySelector('._se_image_alt');
        contextImage.captionCheckEl = image_dialog.querySelector('._se_image_check_caption');
        contextImage.previewSrc = image_dialog.querySelector('._se_tab_content_image .se-link-preview');

        /** add event listeners */
        image_dialog.querySelector('.se-dialog-tabs').addEventListener('click', this.openTab.bind(core));
        image_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextImage.imgInputFile) image_dialog.querySelector('.se-file-remove').addEventListener('click', this._removeSelectedFiles.bind(contextImage.imgInputFile, contextImage.imgUrlFile, contextImage.previewSrc));
        if (contextImage.imgUrlFile) contextImage.imgUrlFile.addEventListener('input', this._onLinkPreview.bind(contextImage.previewSrc, contextImage._v_src, options.linkProtocol));
        if (contextImage.imgInputFile && contextImage.imgUrlFile) contextImage.imgInputFile.addEventListener('change', this._fileInputChange.bind(contextImage));

        const imageGalleryButton = image_dialog.querySelector('.__se__gallery');
        if (imageGalleryButton) imageGalleryButton.addEventListener('click', this._openGallery.bind(core));
        
        contextImage.proportion = {};
        contextImage.inputX = {};
        contextImage.inputY = {};
        if (options.imageResizing) {
            contextImage.proportion = image_dialog.querySelector('._se_image_check_proportion');
            contextImage.inputX = image_dialog.querySelector('._se_image_size_x');
            contextImage.inputY = image_dialog.querySelector('._se_image_size_y');
            contextImage.inputX.value = options.imageWidth;
            contextImage.inputY.value = options.imageHeight;
            
            contextImage.inputX.addEventListener('keyup', this.setInputSize.bind(core, 'x'));
            contextImage.inputY.addEventListener('keyup', this.setInputSize.bind(core, 'y'));

            contextImage.inputX.addEventListener('change', this.setRatio.bind(core));
            contextImage.inputY.addEventListener('change', this.setRatio.bind(core));
            contextImage.proportion.addEventListener('change', this.setRatio.bind(core));
            
            image_dialog.querySelector('.se-dialog-btn-revert').addEventListener('click', this.sizeRevert.bind(core));
        }

        /** append html */
        context.dialog.modal.appendChild(image_dialog);

        /** link event */
        core.plugins.anchor.initEvent.call(core, 'image', image_dialog.querySelector('._se_tab_content_url'));
        contextImage.anchorCtx = core.context.anchor.caller.image;

        /** empty memory */
        image_dialog = null;
    },

    /** dialog */
    setDialog: function (core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');

        dialog.className = 'se-dialog-content se-dialog-image';
        dialog.style.display = 'none';

        let html = '' +
            '<div class="se-dialog-header">' +
                '<button type="button" data-command="close" class="se-btn se-dialog-close" class="close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                    core.icons.cancel +
                '</button>' +
                '<span class="se-modal-title">' + lang.dialogBox.imageBox.title + '</span>' +
            '</div>' +
            '<div class="se-dialog-tabs">' +
                '<button type="button" class="_se_tab_link active" data-tab-link="image">' + lang.toolbar.image + '</button>' +
                '<button type="button" class="_se_tab_link" data-tab-link="url">' + lang.toolbar.link + '</button>' +
            '</div>' +
            '<form method="post" enctype="multipart/form-data">' +
                '<div class="_se_tab_content _se_tab_content_image">' +
                    '<div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
                    
                    if (option.imageFileInput) {
                        html += '' +
                            '<div class="se-dialog-form">' +
                                '<label>' + lang.dialogBox.imageBox.file + '</label>' +
                                '<div class="se-dialog-form-files">' +
                                    '<input class="se-input-form _se_image_file" type="file" accept="' + option.imageAccept + '"' + (option.imageMultipleFile ? ' multiple="multiple"' : '') + '/>' +
                                    '<button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' +
                                '</div>' +
                            '</div>' ;
                    }
        
                    if (option.imageUrlInput) {
                        html += '' +
                            '<div class="se-dialog-form">' +
                                '<label>' + lang.dialogBox.imageBox.url + '</label>' +
                                '<div class="se-dialog-form-files">' +
                                    '<input class="se-input-form se-input-url _se_image_url" type="text" />' +
                                    ((option.imageGalleryUrl && core.plugins.imageGallery) ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + lang.toolbar.imageGallery + '">' + core.icons.image_gallery + '</button>' : '') +
                                '</div>' +
                                '<pre class="se-link-preview"></pre>' +
                            '</div>';
                    }
        
                    html += '</div>' +
                        '<div class="se-dialog-form">' +
                            '<label>' + lang.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" />' +
                        '</div>';

            if (option.imageResizing) {
                const onlyPercentage = option.imageSizeOnlyPercentage;
                const onlyPercentDisplay = onlyPercentage ? ' style="display: none !important;"' : '';
                const heightDisplay = !option.imageHeightShow ? ' style="display: none !important;"' : '';
                html += '<div class="se-dialog-form">';
                        if (onlyPercentage || !option.imageHeightShow) {
                            html += '' +
                            '<div class="se-dialog-size-text">' +
                                '<label class="size-w">' + lang.dialogBox.size + '</label>' +
                            '</div>';
                        } else {
                            html += '' +
                            '<div class="se-dialog-size-text">' +
                                '<label class="size-w">' + lang.dialogBox.width + '</label>' +
                                '<label class="se-dialog-size-x">&nbsp;</label>' +
                                '<label class="size-h">' + lang.dialogBox.height + '</label>' +
                            '</div>';
                        }
                        html += '' +
                            '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + ' />' +
                            '<label class="se-dialog-size-x"' + heightDisplay + '>' + (onlyPercentage ? '%' : 'x') + '</label>' +
                            '<input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + onlyPercentDisplay + (onlyPercentage ? ' max="100"' : '') + heightDisplay + '/>' +
                            '<label' + onlyPercentDisplay + heightDisplay + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + lang.dialogBox.proportion + '</label>' +
                            '<button type="button" title="' + lang.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + core.icons.revert + '</button>' +
                        '</div>' ;
            }

            html += '' +
                        '<div class="se-dialog-form se-dialog-form-footer">' +
                            '<label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + lang.dialogBox.caption + '</label>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="_se_tab_content _se_tab_content_url" style="display: none">' +
                    core.context.anchor.forms.innerHTML +
                '</div>' +
                '<div class="se-dialog-footer">' +
                    '<div' + (option.imageAlignShow ? '' : ' style="display: none"') + '>' +
                        '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + lang.dialogBox.basic + '</label>' +
                        '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + lang.dialogBox.left + '</label>' +
                        '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + lang.dialogBox.center + '</label>' +
                        '<label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + lang.dialogBox.right + '</label>' +
                    '</div>' +
                    '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' +
                '</div>' +
            '</form>';

        dialog.innerHTML = html;

        return dialog;
    },

    _fileInputChange: function () {
        if (!this.imgInputFile.value) {
            this.imgUrlFile.removeAttribute('disabled');
            this.previewSrc.style.textDecoration = '';
        } else {
            this.imgUrlFile.setAttribute('disabled', true);
            this.previewSrc.style.textDecoration = 'line-through';
        }
    },

    _removeSelectedFiles: function (urlInput, previewSrc) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            previewSrc.style.textDecoration = '';
        }
    },

    _openGallery: function () {
        this.callPlugin('imageGallery', this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
    },

    _setUrlInput: function (target) {
        this.altText.value = target.alt;
        this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = target.src;
        this.imgUrlFile.focus();
    },

    _onLinkPreview: function (context, protocol, e) {
        const value = e.target.value.trim();
        context._linkValue = this.textContent = !value ? '' : (protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0) ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
    },

    /**
     * @Override @Required fileManager
     */
    fileTags: ['img'],

    /**
     * @Override core, fileManager, resizing
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */
    select: function (element) {
        this.plugins.image.onModifyMode.call(this, element, this.plugins.resizing.call_controller_resize.call(this, element, 'image'));
    },

    /**
     * @Override fileManager, resizing
     */
    destroy: function (element) {
        const imageEl = element || this.context.image._element;
        const imageContainer = this.util.getParentElement(imageEl, this.util.isMediaComponent) || imageEl;
        const dataIndex = imageEl.getAttribute('data-index') * 1;
        let focusEl = (imageContainer.previousElementSibling || imageContainer.nextElementSibling);
        
        const emptyDiv = imageContainer.parentNode;
        this.util.removeItem(imageContainer);
        this.plugins.image.init.call(this);
        this.controllersOff();

        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function (current) { return current.childNodes.length === 0; }, null);

        // focus
        this.focusEdge(focusEl);
        
        // event
        this.plugins.fileManager.deleteInfo.call(this, 'image', dataIndex, this.functions.onImageUpload);

        // history stack
        this.history.push(false);
    },

    /**
     * @Required @Override dialog
     */
    on: function (update) {
        const contextImage = this.context.image;
        
        if (!update) {
            contextImage.inputX.value = contextImage._origin_w = this.options.imageWidth === contextImage._defaultSizeX ? '' : this.options.imageWidth;
            contextImage.inputY.value = contextImage._origin_h = this.options.imageHeight === contextImage._defaultSizeY ? '' : this.options.imageHeight;
            if (contextImage.imgInputFile && this.options.imageMultipleFile) contextImage.imgInputFile.setAttribute('multiple', 'multiple');
        } else {
            if (contextImage.imgInputFile && this.options.imageMultipleFile) contextImage.imgInputFile.removeAttribute('multiple');
        }
        this.plugins.anchor.on.call(this, contextImage.anchorCtx, update);
    },

    /**
     * @Required @Override dialog
     */
    open: function () {
        this.plugins.dialog.open.call(this, 'image', 'image' === this.currentControllerName);
    },

    openTab: function (e) {
        const modal = this.context.image.modal;
        const targetElement = (e === 'init' ? modal.querySelector('._se_tab_link') : e.target);

        if (!/^BUTTON$/i.test(targetElement.tagName)) {
            return false;
        }

        // Declare all variables
        const tabName = targetElement.getAttribute('data-tab-link');
        const contentClassName = '_se_tab_content';
        let i, tabContent, tabLinks;

        // Get all elements with class="tabcontent" and hide them
        tabContent = modal.getElementsByClassName(contentClassName);
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tabLinks = modal.getElementsByClassName('_se_tab_link');
        for (i = 0; i < tabLinks.length; i++) {
            this.util.removeClass(tabLinks[i], 'active');
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        modal.querySelector('.' + contentClassName + '_' + tabName).style.display = 'block';
        this.util.addClass(targetElement, 'active');

        // focus
        if (tabName === 'image' && this.context.image.focusElement) {
            this.context.image.focusElement.focus();
        } else if (tabName === 'url') {
            this.context.anchor.caller.image.urlInput.focus();
        }

        return false;
    },

    submit: function (e) {
        const contextImage = this.context.image;
        const imagePlugin = this.plugins.image;

        e.preventDefault();
        e.stopPropagation();

        contextImage._altText = contextImage.altText.value;
        contextImage._align = contextImage.modal.querySelector('input[name="suneditor_image_radio"]:checked').value;
        contextImage._captionChecked = contextImage.captionCheckEl.checked;
        if (contextImage._resizing) contextImage._proportionChecked = contextImage.proportion.checked;

        try {
            if (this.context.dialog.updateModal) {
                imagePlugin.update_image.call(this, false, true, false);
            }
            
            if (contextImage.imgInputFile && contextImage.imgInputFile.files.length > 0) {
                this.showLoading();
                imagePlugin.submitAction.call(this, this.context.image.imgInputFile.files);
            } else if (contextImage.imgUrlFile && contextImage._v_src._linkValue.length > 0) {
                this.showLoading();
                imagePlugin.onRender_imgUrl.call(this, contextImage._v_src._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.image.submit.fail] cause : "' + error.message + '"');
        } finally {
            this.plugins.dialog.close.call(this);
        }

        return false;
    },

    submitAction: function (fileList) {
        if (fileList.length === 0) return;

        let fileSize = 0;
        let files = [];
        for (let i = 0, len = fileList.length; i < len; i++) {
            if (/image/i.test(fileList[i].type)) {
                files.push(fileList[i]);
                fileSize += fileList[i].size;
            }
        }

        const limitSize = this.options.imageUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const imagesInfo = this.context.image._infoList;
            for (let i = 0, len = imagesInfo.length; i < len; i++) {
                infoSize += imagesInfo[i].size * 1;
            }

            if ((fileSize + infoSize) > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.imageUpload.fail] Size of uploadable total images: ' + (limitSize/1000) + 'KB';
                if (typeof this.functions.onImageUploadError !== 'function' || this.functions.onImageUploadError(err, { 'limitSize': limitSize, 'currentSize': infoSize, 'uploadSize': fileSize }, this)) {
                    this.functions.noticeOpen(err);
                }
                return;
            }
        }

        const contextImage = this.context.image;
        contextImage._uploadFileLength = files.length;
        
        const anchor = this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true);
        const info = {
            anchor: anchor,
            inputWidth: contextImage.inputX.value,
            inputHeight: contextImage.inputY.value,
            align: contextImage._align,
            isUpdate: this.context.dialog.updateModal,
            alt: contextImage._altText,
            element: contextImage._element
        };

        if (typeof this.functions.onImageUploadBefore === 'function') {
            const result = this.functions.onImageUploadBefore(files, info, this, function (data) {
                if (data && this._w.Array.isArray(data.result)) {
                    this.plugins.image.register.call(this, info, data);
                } else {
                    this.plugins.image.upload.call(this, info, data);
                }
            }.bind(this));
            
            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (this._w.Array.isArray(result) && result.length > 0) files = result;
        }

        this.plugins.image.upload.call(this, info, files);
    },

    error: function (message, response) {
        this.closeLoading();
        if (typeof this.functions.onImageUploadError !== 'function' || this.functions.onImageUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.image.error] response: ' + message);
        }
    },

    upload: function (info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.image.error.call(this, files, null);
            return;
        }

        const imageUploadUrl = this.options.imageUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;

        // server upload
        if (typeof imageUploadUrl === 'string' && imageUploadUrl.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < filesLen; i++) {
                formData.append('file-' + i, files[i]);
            }
            this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
        } else { // base64
            this.plugins.image.setup_reader.call(this, files, info.anchor, info.inputWidth, info.inputHeight, info.align, info.alt, filesLen, info.isUpdate);
        }
    },

    callBack_imgUpload: function (info, xmlHttp) {
        if (typeof this.functions.imageUploadHandler === 'function') {
            this.functions.imageUploadHandler(xmlHttp, info, this);
        } else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) {
                this.plugins.image.error.call(this, response.errorMessage, response);
            } else {
                this.plugins.image.register.call(this, info, response);
            }
        }
    },

    register: function (info, response) {
        const fileList = response.result;

        for (let i = 0, len = fileList.length, file; i < len; i++) {
            file = { name: fileList[i].name, size: fileList[i].size };
            if (info.isUpdate) {
                this.plugins.image.update_src.call(this, fileList[i].url, info.element, file);
                break;
            } else {
                this.plugins.image.create_image.call(this, fileList[i].url, info.anchor, info.inputWidth, info.inputHeight, info.align, file, info.alt);
            }
        }
        
        this.closeLoading();
    },

    setup_reader: function (files, anchor, width, height, align, alt, filesLen, isUpdate) {
        try {
            this.context.image.base64RenderIndex = filesLen;
            const wFileReader = this._w.FileReader;
            const filesStack = [filesLen];
            this.context.image.inputX.value = width;
            this.context.image.inputY.value = height;
    
            for (let i = 0, reader, file; i < filesLen; i++) {
                reader = new wFileReader();
                file = files[i];
    
                reader.onload = function (reader, update, updateElement, file, index) {
                    filesStack[index] = { result: reader.result, file: file };

                    if (--this.context.image.base64RenderIndex === 0) {
                        this.plugins.image.onRender_imgBase64.call(this, update, filesStack, updateElement, anchor, width, height, align, alt);
                        this.closeLoading();
                    }
                }.bind(this, reader, isUpdate, this.context.image._element, file, i);

                reader.readAsDataURL(file);
            }
        } catch (e) {
            this.closeLoading();
            throw Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + e.message + '"');
        }
    },

    onRender_imgBase64: function (update, filesStack, updateElement, anchor, width, height, align, alt) {
        const updateMethod = this.plugins.image.update_src;
        const createMethod = this.plugins.image.create_image;
        
        for (let i = 0, len = filesStack.length; i < len; i++) {
            if (update) {
                this.context.image._element.setAttribute('data-file-name', filesStack[i].file.name);
                this.context.image._element.setAttribute('data-file-size', filesStack[i].file.size);
                updateMethod.call(this, filesStack[i].result, updateElement, filesStack[i].file);
            } else {
                createMethod.call(this, filesStack[i].result, anchor, width, height, align, filesStack[i].file, alt);
            }
        }
    },

    onRender_imgUrl: function (url) {
        if (!url) url = this.context.image._v_src._linkValue;
        if (!url) return false;
        const contextImage = this.context.image;

        try {
            const file = {name: url.split('/').pop(), size: 0};
            if (this.context.dialog.updateModal) this.plugins.image.update_src.call(this, url, contextImage._element, file);
            else this.plugins.image.create_image.call(this, url, this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true), contextImage.inputX.value, contextImage.inputY.value, contextImage._align, file, contextImage._altText);
        } catch (e) {
            throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + e.message + '"');
        } finally {
            this.closeLoading();
        }
    },

    onRender_link: function (imgTag, anchor) {
        if (anchor) {
            anchor.setAttribute('data-image-link', 'image');
            imgTag.setAttribute('data-image-link', anchor.href);
            anchor.appendChild(imgTag);
            return anchor;
        }

        return imgTag;
    },

    /**
     * @Override resizing
     * @param {String} xy 'x': width, 'y': height
     * @param {KeyboardEvent} e Event object
     */
    setInputSize: function (xy, e) {
        if (e && e.keyCode === 32) {
            e.preventDefault();
            return;
        }

        this.plugins.resizing._module_setInputSize.call(this, this.context.image, xy);
    },

    /**
     * @Override resizing
     */
    setRatio: function () {
        this.plugins.resizing._module_setRatio.call(this, this.context.image);
    },

    /**
     * @Override fileManager
     */
    checkFileInfo: function () {
        const imagePlugin = this.plugins.image;
        const contextImage = this.context.image;

        const modifyHandler = function (tag) {
            imagePlugin.onModifyMode.call(this, tag, null);
            imagePlugin.openModify.call(this, true);
            // get size
            contextImage.inputX.value = contextImage._origin_w;
            contextImage.inputY.value = contextImage._origin_h;
            // get align
            const format = this.util.getFormatElement(tag);
            if (format) contextImage._align = format.style.textAlign || format.style.float;
            // link
            const link = this.util.getParentElement(tag, this.util.isAnchor);
            if (link && !contextImage.anchorCtx.linkValue) contextImage.anchorCtx.linkValue = ' ';
            
            imagePlugin.update_image.call(this, true, false, true);
            imagePlugin.init.call(this);
        }.bind(this);

        this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
    },

    /**
     * @Override fileManager
     */
    resetFileInfo: function () {
        this.plugins.fileManager.resetInfo.call(this, 'image', this.functions.onImageUpload);
    },

    create_image: function (src, anchor, width, height, align, file, alt) {
        const imagePlugin = this.plugins.image;
        const contextImage = this.context.image;
        this.context.resizing._resize_plugin = 'image';

        let oImg = this.util.createElement('IMG');
        oImg.src = src;
        oImg.alt = alt;
        oImg.setAttribute('data-rotate', '0');
        anchor = imagePlugin.onRender_link.call(this, oImg, anchor);

        if (contextImage._resizing) {
            oImg.setAttribute('data-proportion', contextImage._proportionChecked);
        }

        const cover = this.plugins.component.set_cover.call(this, anchor);
        const container = this.plugins.component.set_container.call(this, cover, 'se-image-container');

        // caption
        if (contextImage._captionChecked) {
            contextImage._caption = this.plugins.component.create_caption.call(this);
            contextImage._caption.setAttribute('contenteditable', false);
            cover.appendChild(contextImage._caption);
        }

        contextImage._element = oImg;
        contextImage._cover = cover;
        contextImage._container = container;

        // set size
        imagePlugin.applySize.call(this, width, height);

        // align
        imagePlugin.setAlign.call(this, align, oImg, cover, container);

        oImg.onload = imagePlugin._image_create_onload.bind(this, oImg, contextImage.svgDefaultSize, container);
        if (this.insertComponent(container, true, true, true)) this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
        this.context.resizing._resize_plugin = '';
    },

    _image_create_onload: function (oImg, svgDefaultSize, container) {
        // svg exception handling
        if (oImg.offsetWidth === 0) this.plugins.image.applySize.call(this, svgDefaultSize, '');
        if (this.options.mediaAutoSelect) {
            this.selectComponent(oImg, 'image');
        } else {
            const line = this.appendFormatTag(container, null);
            if (line) this.setRange(line, 0, line, 0);
        }
    },

    update_image: function (init, openController, notHistoryPush) {
        const contextImage = this.context.image;
        let imageEl = contextImage._element;
        let cover = contextImage._cover;
        let container = contextImage._container;
        let isNewContainer = false;

        if (cover === null) {
            isNewContainer = true;
            imageEl = contextImage._element.cloneNode(true);
            cover = this.plugins.component.set_cover.call(this, imageEl);
        }

        if (container === null) {
            cover = cover.cloneNode(true);
            imageEl = cover.querySelector('img');
            isNewContainer = true;
            container = this.plugins.component.set_container.call(this, cover, 'se-image-container');
        } else if (isNewContainer) {
            container.innerHTML = '';
            container.appendChild(cover);
            contextImage._cover = cover;
            contextImage._element = imageEl;
            isNewContainer = false;
        }

        // check size
        let changeSize;
        const x = this.util.isNumber(contextImage.inputX.value) ? contextImage.inputX.value + contextImage.sizeUnit : contextImage.inputX.value;
        const y = this.util.isNumber(contextImage.inputY.value) ? contextImage.inputY.value + contextImage.sizeUnit : contextImage.inputY.value;
        if (/%$/.test(imageEl.style.width)) {
            changeSize = x !== container.style.width || y !== container.style.height;
        } else {
            changeSize = x !== imageEl.style.width || y !== imageEl.style.height;
        }

        // alt
        imageEl.alt = contextImage._altText;
        
        // caption
        let modifiedCaption = false;
        if (contextImage._captionChecked) {
            if (!contextImage._caption) {
                contextImage._caption = this.plugins.component.create_caption.call(this);
                cover.appendChild(contextImage._caption);
                modifiedCaption = true;
            }
        } else {
            if (contextImage._caption) {
                this.util.removeItem(contextImage._caption);
                contextImage._caption = null;
                modifiedCaption = true;
            }
        }

        // link
        const anchor = this.plugins.anchor.createAnchor.call(this, contextImage.anchorCtx, true);
        if (anchor) {
            if (contextImage._linkElement !== anchor) {
                contextImage._linkElement = anchor.cloneNode(false);
                cover.insertBefore(this.plugins.image.onRender_link.call(this, imageEl, contextImage._linkElement), contextImage._caption);
                this.util.removeItem(anchor);
            } else {
                contextImage._linkElement.setAttribute('data-image-link', 'image');
            }
        } else if (contextImage._linkElement !== null) {
            const imageElement = imageEl;
            imageElement.setAttribute('data-image-link', '');
            if (cover.contains(contextImage._linkElement)) {
                const newEl = imageElement.cloneNode(true);
                cover.removeChild(contextImage._linkElement);
                cover.insertBefore(newEl, contextImage._caption);
                contextImage._element = imageEl = newEl;
            }
        }

        if (isNewContainer) {
            const existElement = (this.util.isRangeFormatElement(contextImage._element.parentNode) || this.util.isWysiwygDiv(contextImage._element.parentNode)) ? 
                contextImage._element : 
                /^A$/i.test(contextImage._element.parentNode.nodeName) ? contextImage._element.parentNode : this.util.getFormatElement(contextImage._element) || contextImage._element;
                
            if (this.util.isListCell(existElement) || this.util.isFormatElement(existElement)) {
                contextImage._element.parentNode.replaceChild(container, contextImage._element);
            } else if (this.util.isFormatElement(existElement) && existElement.childNodes.length > 0) {
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(contextImage._element);
                // clean format tag
                this.util.removeEmptyNode(existElement, null);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else {
                if (this.util.isFormatElement(existElement.parentNode)) {
                    const formats = existElement.parentNode;
                    formats.parentNode.insertBefore(container, existElement.previousSibling ? formats.nextElementSibling : formats);
                    this.util.removeItem(existElement);
                } else {
                    existElement.parentNode.replaceChild(container, existElement);
                }
            }

            imageEl = container.querySelector('img');

            contextImage._element = imageEl;
            contextImage._cover = cover;
            contextImage._container = container;
        }

        // transform
        if (modifiedCaption || (!contextImage._onlyPercentage && changeSize)) {
            if (!init && (/\d+/.test(imageEl.style.height) || (this.context.resizing._rotateVertical && contextImage._captionChecked))) {
                if (/%$/.test(contextImage.inputX.value) || /%$/.test(contextImage.inputY.value)) {
                    this.plugins.resizing.resetTransform.call(this, imageEl);
                } else {
                    this.plugins.resizing.setTransformSize.call(this, imageEl, this.util.getNumber(contextImage.inputX.value, 0), this.util.getNumber(contextImage.inputY.value, 0));
                }
            }
        }

        // size
        if (contextImage._resizing) {
            imageEl.setAttribute('data-proportion', contextImage._proportionChecked);
            if (changeSize) {
                this.plugins.image.applySize.call(this);
            }
        }

        // align
        this.plugins.image.setAlign.call(this, null, imageEl, null, null);

        // set imagesInfo
        if (init) {
            this.plugins.fileManager.setInfo.call(this, 'image', imageEl, this.functions.onImageUpload, null, true);
        }

        if (openController) {
            this.selectComponent(imageEl, 'image');
        }

        // history stack
        if (!notHistoryPush) this.history.push(false);
    },

    update_src: function (src, element, file) {
        element.src = src;
        this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, 'image', element, this.functions.onImageUpload, file, true));
        this.selectComponent(element, 'image');
    },

    /**
     * @Required @Override fileManager, resizing
     */
    onModifyMode: function (element, size) {
        if (!element) return;
        
        const contextImage = this.context.image;
        contextImage._linkElement = contextImage.anchorCtx.linkAnchor = /^A$/i.test(element.parentNode.nodeName) ? element.parentNode : null;
        contextImage._element = element;
        contextImage._cover = this.util.getParentElement(element, 'FIGURE');
        contextImage._container = this.util.getParentElement(element, this.util.isMediaComponent);
        contextImage._caption = this.util.getChildElement(contextImage._cover, 'FIGCAPTION');
        contextImage._align = element.style.float || element.getAttribute('data-align') || 'none';
        element.style.float = '';
        this.plugins.anchor.setCtx(contextImage._linkElement, contextImage.anchorCtx);

        if (size) {
            contextImage._element_w = size.w;
            contextImage._element_h = size.h;
            contextImage._element_t = size.t;
            contextImage._element_l = size.l;
        }

        let userSize = contextImage._element.getAttribute('data-size') || contextImage._element.getAttribute('data-origin');
        let w, h;
        if (userSize) {
            userSize = userSize.split(',');
            w = userSize[0];
            h = userSize[1];
        } else if (size) {
            w = size.w;
            h = size.h;
        }

        contextImage._origin_w = w || element.style.width || element.width || '';
        contextImage._origin_h = h || element.style.height || element.height || '';
    },

    /**
     * @Required @Override fileManager, resizing
     */
    openModify: function (notOpen) {
        const contextImage = this.context.image;
        if (contextImage.imgUrlFile) {
            contextImage._v_src._linkValue = contextImage.previewSrc.textContent = contextImage.imgUrlFile.value = contextImage._element.src;
        }
        contextImage._altText = contextImage.altText.value = contextImage._element.alt;
        (contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="' + contextImage._align + '"]') || contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = true;
        contextImage._align = contextImage.modal.querySelector('input[name="suneditor_image_radio"]:checked').value;
        contextImage._captionChecked = contextImage.captionCheckEl.checked = !!contextImage._caption;
        
        if (contextImage._resizing) {
            this.plugins.resizing._module_setModifyInputSize.call(this, contextImage, this.plugins.image);
        }

        if (!notOpen) this.plugins.dialog.open.call(this, 'image', true);
    },

    /**
     * @Override fileManager
     */
    applySize: function (w, h) {
        const contextImage = this.context.image;

        if (!w) w = contextImage.inputX.value || this.options.imageWidth;
        if (!h) h = contextImage.inputY.value || this.options.imageHeight;
        
        if ((contextImage._onlyPercentage && !!w) || /%$/.test(w)) {
            this.plugins.image.setPercentSize.call(this, w, h);
            return true;
        } else if ((!w || w === 'auto') && (!h || h === 'auto')) {
            this.plugins.image.setAutoSize.call(this);
        } else {
            this.plugins.image.setSize.call(this, w, h, false);
        }

        return false;
    },

    /**
     * @Override resizing
     */
    sizeRevert: function () {
        this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
    },

    /**
     * @Override resizing
     */
    setSize: function (w, h, notResetPercentage, direction) {
        const contextImage = this.context.image;
        const onlyW = /^(rw|lw)$/.test(direction);
        const onlyH = /^(th|bh)$/.test(direction);

        if (!onlyH) {
            contextImage._element.style.width = this.util.isNumber(w) ? w + contextImage.sizeUnit : w;
            this.plugins.image.cancelPercentAttr.call(this);
        }
        if (!onlyW) {
            contextImage._element.style.height = this.util.isNumber(h) ? h + contextImage.sizeUnit : /%$/.test(h) ? '' : h;
        }

        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);
        if (!notResetPercentage) contextImage._element.removeAttribute('data-percentage');

        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },

    /**
     * @Override resizing
     */
    setAutoSize: function () {
        const contextImage = this.context.image;

        this.plugins.resizing.resetTransform.call(this, contextImage._element);
        this.plugins.image.cancelPercentAttr.call(this);

        contextImage._element.style.maxWidth = '';
        contextImage._element.style.width = '';
        contextImage._element.style.height = '';
        contextImage._cover.style.width = '';
        contextImage._cover.style.height = '';

        this.plugins.image.setAlign.call(this, null, null, null, null);
        contextImage._element.setAttribute('data-percentage', 'auto,auto');

        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },
    
    /**
     * @Override resizing
     */
    setOriginSize: function () {
        const contextImage = this.context.image;
        contextImage._element.removeAttribute('data-percentage');

        this.plugins.resizing.resetTransform.call(this, contextImage._element);
        this.plugins.image.cancelPercentAttr.call(this);

        const originSize = (contextImage._element.getAttribute('data-origin') || '').split(',');
        const w = originSize[0];
        const h = originSize[1];

        if (originSize) {
            if (contextImage._onlyPercentage || (/%$/.test(w) && (/%$/.test(h) || !/\d/.test(h)))) {
                this.plugins.image.setPercentSize.call(this, w, h);
            } else {
                this.plugins.image.setSize.call(this, w, h);
            }

            // save current size
            this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
        }
    },

    /**
     * @Override resizing
     */
    setPercentSize: function (w, h) {
        const contextImage = this.context.image;
        h = !!h && !/%$/.test(h) && !this.util.getNumber(h, 0) ? this.util.isNumber(h) ? h + '%' : h : this.util.isNumber(h) ? h + contextImage.sizeUnit : (h || '');
        const heightPercentage = /%$/.test(h);

        contextImage._container.style.width = this.util.isNumber(w) ? w + '%' : w;
        contextImage._container.style.height = '';
        contextImage._cover.style.width = '100%';
        contextImage._cover.style.height = !heightPercentage ? '' : h;
        contextImage._element.style.width = '100%';
        contextImage._element.style.height = heightPercentage ? '' : h;
        contextImage._element.style.maxWidth = '';

        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);

        contextImage._element.setAttribute('data-percentage', w + ',' + h);
        this.plugins.resizing.setCaptionPosition.call(this, contextImage._element);

        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextImage);
    },

    /**
     * @Override resizing
     */
    cancelPercentAttr: function () {
        const contextImage = this.context.image;
        
        contextImage._cover.style.width = '';
        contextImage._cover.style.height = '';
        contextImage._container.style.width = '';
        contextImage._container.style.height = '';

        this.util.removeClass(contextImage._container, this.context.image._floatClassRegExp);
        this.util.addClass(contextImage._container, '__se__float-' + contextImage._align);

        if (contextImage._align === 'center') this.plugins.image.setAlign.call(this, null, null, null, null);
    },

    /**
     * @Override resizing
     */
    setAlign: function (align, element, cover, container) {
        const contextImage = this.context.image;
        
        if (!align) align = contextImage._align;
        if (!element) element = contextImage._element;
        if (!cover) cover = contextImage._cover;
        if (!container) container = contextImage._container;

        if (align && align !== 'none') {
            cover.style.margin = 'auto';
        } else {
            cover.style.margin = '0';
        }

        if (/%$/.test(element.style.width) && align === 'center') {
            container.style.minWidth = '100%';
            cover.style.width = container.style.width;
        } else {
            container.style.minWidth = '';
            cover.style.width = this.context.resizing._rotateVertical ? (element.style.height || element.offsetHeight) : ((!element.style.width || element.style.width === 'auto') ? '' : element.style.width || '100%');
        }

        if (!this.util.hasClass(container, '__se__float-' + align)) {
            this.util.removeClass(container, contextImage._floatClassRegExp);
            this.util.addClass(container, '__se__float-' + align);
        }
        
        element.setAttribute('data-align', align);
    },

    /**
     * @Override dialog
     */
    init: function () {
        const contextImage = this.context.image;
        if (contextImage.imgInputFile) contextImage.imgInputFile.value = '';
        if (contextImage.imgUrlFile) contextImage._v_src._linkValue = contextImage.previewSrc.textContent = contextImage.imgUrlFile.value = '';
        if (contextImage.imgInputFile && contextImage.imgUrlFile) {
            contextImage.imgUrlFile.removeAttribute('disabled');
            contextImage.previewSrc.style.textDecoration = '';
        }

        contextImage.altText.value = '';
        contextImage.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = true;
        contextImage.captionCheckEl.checked = false;
        contextImage._element = null;
        this.plugins.image.openTab.call(this, 'init');

        if (contextImage._resizing) {
            contextImage.inputX.value = this.options.imageWidth === contextImage._defaultSizeX ? '' : this.options.imageWidth;
            contextImage.inputY.value = this.options.imageHeight === contextImage._defaultSizeY ? '' : this.options.imageHeight;
            contextImage.proportion.checked = true;
            contextImage._ratio = false;
            contextImage._ratioX = 1;
            contextImage._ratioY = 1;
        }

        this.plugins.anchor.init.call(this, contextImage.anchorCtx);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/dialog/link.js":
/*!***********************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/dialog/link.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */ "./node_modules/suneditor/src/plugins/modules/dialog.js");
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/_anchor */ "./node_modules/suneditor/src/plugins/modules/_anchor.js");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'link',
    display: 'dialog',
    add: function (core) {
        core.addModule([(_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()), _modules_anchor__WEBPACK_IMPORTED_MODULE_1__["default"]]);

        const context = core.context;
        const contextLink = context.link = {
            focusElement: null, // @Override dialog // This element has focus when the dialog is opened.
            _linkAnchor: null,
            anchorCtx: null
        };

        /** link dialog */
        let link_dialog = this.setDialog(core);
        contextLink.modal = link_dialog;
        
        /** link controller */
        let link_controller = this.setController_LinkButton(core);
        contextLink.linkController = link_controller;

        link_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        link_controller.addEventListener('click', this.onClick_linkController.bind(core));

        /** append html */
        context.dialog.modal.appendChild(link_dialog);

        /** append controller */
        context.element.relative.appendChild(link_controller);

        /** link event */
        core.plugins.anchor.initEvent.call(core, 'link', link_dialog);
        contextLink.focusElement = context.anchor.caller.link.urlInput;

        /** empty memory */
        link_dialog = null, link_controller = null;
    },

    /** dialog */
    setDialog: function (core) {
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        const icons = core.icons;

        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '' +
            '<form>' +
                '<div class="se-dialog-header">' +
                    '<button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                        icons.cancel +
                    '</button>' +
                    '<span class="se-modal-title">' + lang.dialogBox.linkBox.title + '</span>' +
                '</div>' +
                core.context.anchor.forms.innerHTML +
                '<div class="se-dialog-footer">' +
                    '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' +
                '</div>' +
            '</form>';

        dialog.innerHTML = html;
        return dialog;
    },

    /** modify controller button */
    setController_LinkButton: function (core) {
        const lang = core.lang;
        const icons = core.icons;
        const link_btn = core.util.createElement('DIV');

        link_btn.className = 'se-controller se-controller-link';
        link_btn.innerHTML = '' +
            '<div class="se-arrow se-arrow-up"></div>' +
            '<div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span>' +
                '<div class="se-btn-group">' +
                    '<button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' +
                        icons.edit +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' +
                        icons.unlink +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.unlink + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' +
                        icons.delete +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' +
                    '</button>' +
                '</div>' +
            '</div>';

        return link_btn;
    },

    /**
     * @Override dialog
     */
    open: function () {
        this.plugins.dialog.open.call(this, 'link', 'link' === this.currentControllerName);
    },

    submit: function (e) {
        this.showLoading();

        e.preventDefault();
        e.stopPropagation();

        try {
            const oA = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, false);
            if (oA === null) return;
    
            if (!this.context.dialog.updateModal) {
                const selectedFormats = this.getSelectedElements();
                if (selectedFormats.length > 1) {
                    const oFormat = this.util.createElement(selectedFormats[0].nodeName);
                    oFormat.appendChild(oA);
                    if (!this.insertNode(oFormat, null, true)) return;
                } else {
                    if (!this.insertNode(oA, null, true)) return;
                }
    
                this.setRange(oA.childNodes[0], 0, oA.childNodes[0], oA.textContent.length);
            } else {
                // set range
                const textNode = this.context.link._linkAnchor.childNodes[0];
                this.setRange(textNode, 0, textNode, textNode.textContent.length);
            }
        } finally {
            this.plugins.dialog.close.call(this);
            this.closeLoading();
            // history stack
            this.history.push(false);
        }

        return false;
    },

    /**
     * @Override core
     */
    active: function (element) {
        if (!element) {
            if (this.controllerArray.indexOf(this.context.link.linkController) > -1) {
                this.controllersOff();
            }
        } else if (this.util.isAnchor(element) && element.getAttribute('data-image-link') === null) {
            if (this.controllerArray.indexOf(this.context.link.linkController) < 0) {
                this.plugins.link.call_controller.call(this, element);
            }
            return true;
        }

        return false;
    },

    /**
     * @Override dialog
     */
    on: function (update) {
        this.plugins.anchor.on.call(this, this.context.anchor.caller.link, update);
    },

    call_controller: function (selectionATag) {
        this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = selectionATag;
        const linkBtn = this.context.link.linkController;
        const link = linkBtn.querySelector('a');

        link.href = selectionATag.href;
        link.title = selectionATag.textContent;
        link.textContent = selectionATag.textContent;

        this.util.addClass(selectionATag, 'on');
        this.setControllerPosition(linkBtn, selectionATag, 'bottom', {left: 0, top: 0});
        this.controllersOn(linkBtn, selectionATag, 'link', this.util.removeClass.bind(this.util, this.context.link._linkAnchor, 'on'));
    },

    onClick_linkController: function (e) {
        e.stopPropagation();

        const command = e.target.getAttribute('data-command') || e.target.parentNode.getAttribute('data-command');
        if (!command) return;

        e.preventDefault();

        if (/update/.test(command)) {
            this.plugins.dialog.open.call(this, 'link', true);
        } else if (/unlink/.test(command)) {
            const sc = this.util.getChildElement(this.context.link._linkAnchor, function (current) { return current.childNodes.length === 0 || current.nodeType === 3; }, false);
            const ec = this.util.getChildElement(this.context.link._linkAnchor, function (current) { return current.childNodes.length === 0 || current.nodeType === 3; }, true);
            this.setRange(sc, 0, ec, ec.textContent.length);
            this.nodeChange(null, null, ['A'], false);
        } else {
            /** delete */
            this.util.removeItem(this.context.link._linkAnchor);
            this.context.anchor.caller.link.linkAnchor = null;
            this.focus();

            // history stack
            this.history.push(false);
        }

        this.controllersOff();
    },

    /**
     * @Override dialog
     */
    init: function () {
        this.context.link.linkController.style.display = 'none';
        this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/dialog/math.js":
/*!***********************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/dialog/math.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */ "./node_modules/suneditor/src/plugins/modules/dialog.js");
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'math',
    display: 'dialog',
    add: function (core) {
        core.addModule([(_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default())]);

        const context = core.context;
        context.math = {
            focusElement: null, // @Override dialog // This element has focus when the dialog is opened.
            previewElement: null,
            fontSizeElement: null,
            defaultFontSize: '',
            _mathExp: null
        };

        /** math dialog */
        let math_dialog = this.setDialog(core);
        context.math.modal = math_dialog;
        context.math.focusElement = math_dialog.querySelector('.se-math-exp');
        context.math.previewElement = math_dialog.querySelector('.se-math-preview');
        context.math.fontSizeElement = math_dialog.querySelector('.se-math-size');
        context.math.focusElement.addEventListener(core.util.isIE ? 'textinput' : 'input', this._renderMathExp.bind(core, context.math), false);
        context.math.fontSizeElement.addEventListener('change', function (e) { this.fontSize = e.target.value; }.bind(context.math.previewElement.style), false);

        /** math controller */
        let math_controller = this.setController_MathButton(core);
        context.math.mathController = math_controller;
        context.math._mathExp = null;

        /** add event listeners */
        math_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core), false);
        math_controller.addEventListener('click', this.onClick_mathController.bind(core));
        context.math.previewElement.style.fontSize = context.math.defaultFontSize;

        /** append html */
        context.dialog.modal.appendChild(math_dialog);
        context.element.relative.appendChild(math_controller);

        /** empty memory */
        math_dialog = null, math_controller = null;
    },

    /** dialog */
    setDialog: function (core) {
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');
        const fontSize = core.options.mathFontSize;
        let defaultFontSize = fontSize[0].value;

        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '' +
        '<form>' +
            '<div class="se-dialog-header">' +
                '<button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                    core.icons.cancel +
                '</button>' +
                '<span class="se-modal-title">' + lang.dialogBox.mathBox.title + '</span>' +
            '</div>' +
            '<div class="se-dialog-body">' +
                '<div class="se-dialog-form">' +
                    '<label>' + lang.dialogBox.mathBox.inputLabel + ' (<a href="https://katex.org/docs/supported.html" target="_blank">KaTeX</a>)</label>' +
                    '<textarea class="se-input-form se-math-exp" type="text"></textarea>' +
                '</div>' +
                '<div class="se-dialog-form">' +
                    '<label>' + lang.dialogBox.mathBox.fontSizeLabel + '</label>' +
                    '<select class="se-input-select se-math-size">';
                    for (let i = 0, len = fontSize.length, f; i < len; i++) {
                        f = fontSize[i];
                        if (f.default) defaultFontSize = f.value;
                        html += '<option value="' + f.value + '"' + (f.default ? ' selected' : '') + '>' + f.text + '</option>';
                    }
                html += '</select>' +
                '</div>' +
                '<div class="se-dialog-form">' +
                    '<label>' + lang.dialogBox.mathBox.previewLabel + '</label>' +
                    '<p class="se-math-preview"></p>' +
                '</div>' +
            '</div>' +
            '<div class="se-dialog-footer">' +
                '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' +
            '</div>' +
        '</form>';

        core.context.math.defaultFontSize = defaultFontSize;
        dialog.innerHTML = html;
        return dialog;
    },

    /** modify controller button */
    setController_MathButton: function (core) {
        const lang = core.lang;
        const math_btn = core.util.createElement('DIV');

        math_btn.className = 'se-controller se-controller-link';
        math_btn.innerHTML = '' +
        '<div class="se-arrow se-arrow-up"></div>' +
        '<div class="link-content">' +
            '<div class="se-btn-group">' +
                '<button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' +
                    core.icons.edit +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' +
                    core.icons.delete +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' +
                '</button>' +
            '</div>' +
        '</div>' +
        '';

        return math_btn;
    },

    /**
     * @Required @Override dialog
     */
    open: function () {
        this.plugins.dialog.open.call(this, 'math', 'math' === this.currentControllerName);
    },

    /**
     * @Override core - managedTagsInfo
     */
    managedTags: function () {
        return {
            className: 'katex',
            method: function (element) {
                if (!element.getAttribute('data-exp') || !this.options.katex) return;
                const dom = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(element.getAttribute('data-exp'))));
                element.innerHTML = dom.querySelector('.katex').innerHTML;
            }
        };
    },

    _renderer: function (exp) {
        const katex = this.options.katex;
        return katex.src.renderToString(exp, {throwOnError: true, displayMode: true});
    },

    _renderMathExp: function (contextMath, e) {
        contextMath.previewElement.innerHTML = this.plugins.math._renderer.call(this, e.target.value);
    },

    submit: function (e) {
        this.showLoading();

        e.preventDefault();
        e.stopPropagation();

        const submitAction = function () {
            if (this.context.math.focusElement.value.trim().length === 0) return false;

            const contextMath = this.context.math;
            const mathExp = contextMath.focusElement.value;
            const katexEl = contextMath.previewElement.querySelector('.katex');

            if (!katexEl) return false;
            katexEl.className = '__se__katex ' + katexEl.className;
            katexEl.setAttribute('contenteditable', false);
            katexEl.setAttribute('data-exp', this.util.HTMLEncoder(mathExp));
            katexEl.setAttribute('data-font-size', contextMath.fontSizeElement.value);
            katexEl.style.fontSize = contextMath.fontSizeElement.value;

            if (!this.context.dialog.updateModal) {
                const selectedFormats = this.getSelectedElements();

                if (selectedFormats.length > 1) {
                    const oFormat = this.util.createElement(selectedFormats[0].nodeName);
                    oFormat.appendChild(katexEl);
                    if (!this.insertNode(oFormat, null, true)) return false;
                } else {
                    if (!this.insertNode(katexEl, null, true)) return false;
                }

                const empty = this.util.createTextNode(this.util.zeroWidthSpace);
                katexEl.parentNode.insertBefore(empty, katexEl.nextSibling);
                this.setRange(katexEl, 0, katexEl, 1);
            } else {
                const containerEl = this.util.getParentElement(contextMath._mathExp, '.katex');
                containerEl.parentNode.replaceChild(katexEl, containerEl);
                this.setRange(katexEl, 0, katexEl, 1);
            }

            contextMath.focusElement.value = '';
            contextMath.fontSizeElement.value = '1em';
            contextMath.previewElement.style.fontSize = '1em';
            contextMath.previewElement.innerHTML = '';

            return true;
        }.bind(this);

        try {
            if (submitAction()) {
                this.plugins.dialog.close.call(this);
                // history stack
                this.history.push(false);
            }
        } catch (e) {
            this.plugins.dialog.close.call(this);
        } finally {
            this.closeLoading();
        }

        return false;
    },

    active: function (element) {
        if (!element) {
            if (this.controllerArray.indexOf(this.context.math.mathController) > -1) {
                this.controllersOff();
            }
        } else if (element.getAttribute('data-exp')) {
            if (this.controllerArray.indexOf(this.context.math.mathController) < 0) {
                this.setRange(element, 0, element, 1);
                this.plugins.math.call_controller.call(this, element);
            }
            return true;
        }

        return false;
    },

    on: function (update) {
        if (!update) {
            this.plugins.math.init.call(this);
        } else {
            const contextMath = this.context.math;
            if (contextMath._mathExp) {
                const exp = this.util.HTMLDecoder(contextMath._mathExp.getAttribute('data-exp'));
                const fontSize = contextMath._mathExp.getAttribute('data-font-size') || '1em';
                this.context.dialog.updateModal = true;
                contextMath.focusElement.value = exp;
                contextMath.fontSizeElement.value = fontSize;
                contextMath.previewElement.innerHTML = this.plugins.math._renderer.call(this, exp);
                contextMath.previewElement.style.fontSize = fontSize;
            }
        }
    },

    call_controller: function (mathTag) {
        this.context.math._mathExp = mathTag;
        const mathBtn = this.context.math.mathController;

        this.setControllerPosition(mathBtn, mathTag, 'bottom', {left: 0, top: 0});
        this.controllersOn(mathBtn, mathTag, 'math');
    },

    onClick_mathController: function (e) {
        e.stopPropagation();

        const command = e.target.getAttribute('data-command') || e.target.parentNode.getAttribute('data-command');
        if (!command) return;

        e.preventDefault();

        if (/update/.test(command)) {
            this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute('data-exp'));
            this.plugins.dialog.open.call(this, 'math', true);
        } else {
            /** delete */
            this.util.removeItem(this.context.math._mathExp);
            this.context.math._mathExp = null;
            this.focus();

            // history stack
            this.history.push(false);
        }

        this.controllersOff();
    },

    init: function () {
        const contextMath = this.context.math;
        contextMath.mathController.style.display = 'none';
        contextMath._mathExp = null;
        contextMath.focusElement.value = '';
        contextMath.previewElement.innerHTML = '';
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/dialog/video.js":
/*!************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/dialog/video.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/dialog */ "./node_modules/suneditor/src/plugins/modules/dialog.js");
/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_dialog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/component */ "./node_modules/suneditor/src/plugins/modules/component.js");
/* harmony import */ var _modules_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_resizing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/resizing */ "./node_modules/suneditor/src/plugins/modules/resizing.js");
/* harmony import */ var _modules_resizing__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_resizing__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/fileManager */ "./node_modules/suneditor/src/plugins/modules/fileManager.js");
/* harmony import */ var _modules_fileManager__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_fileManager__WEBPACK_IMPORTED_MODULE_3__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'video',
    display: 'dialog',
    add: function (core) {
        core.addModule([(_modules_dialog__WEBPACK_IMPORTED_MODULE_0___default()), (_modules_component__WEBPACK_IMPORTED_MODULE_1___default()), (_modules_resizing__WEBPACK_IMPORTED_MODULE_2___default()), (_modules_fileManager__WEBPACK_IMPORTED_MODULE_3___default())]);

        const options = core.options;
        const context = core.context;
        const contextVideo = context.video = {
            _infoList: [], // @Override fileManager
            _infoIndex: 0, // @Override fileManager
            _uploadFileLength: 0, // @Override fileManager
            focusElement: null, // @Override dialog // This element has focus when the dialog is opened.
            sizeUnit: options._videoSizeUnit,
            _align: 'none',
            _floatClassRegExp: '__se__float\\-[a-z]+',
            _youtubeQuery: options.youtubeQuery,
            _videoRatio: (options.videoRatio * 100) + '%',
            _defaultRatio: (options.videoRatio * 100) + '%',
            _linkValue: '',
            // @require @Override component
            _element: null,
            _cover: null,
            _container: null,
            // @Override resizing properties
            inputX: null,
            inputY: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: '100%',
            _defaultSizeY: (options.videoRatio * 100) + '%',
            _origin_w: options.videoWidth === '100%' ? '' : options.videoWidth,
            _origin_h: options.videoHeight === '56.25%' ? '' : options.videoHeight,
            _proportionChecked: true,
            _resizing: options.videoResizing,
            _resizeDotHide: !options.videoHeightShow,
            _rotation: options.videoRotation,
            _alignHide: !options.videoAlignShow,
            _onlyPercentage: options.videoSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1,
            _captionShow: false
        };

        /** video dialog */
        let video_dialog = this.setDialog(core);
        contextVideo.modal = video_dialog;
        contextVideo.videoInputFile = video_dialog.querySelector('._se_video_file');
        contextVideo.videoUrlFile = video_dialog.querySelector('.se-input-url');
        contextVideo.focusElement = contextVideo.videoUrlFile || contextVideo.videoInputFile;
        contextVideo.preview = video_dialog.querySelector('.se-link-preview');

        /** add event listeners */
        video_dialog.querySelector('form').addEventListener('submit', this.submit.bind(core));
        if (contextVideo.videoInputFile) video_dialog.querySelector('.se-dialog-files-edge-button').addEventListener('click', this._removeSelectedFiles.bind(contextVideo.videoInputFile, contextVideo.videoUrlFile, contextVideo.preview));
        if (contextVideo.videoInputFile && contextVideo.videoUrlFile) contextVideo.videoInputFile.addEventListener('change', this._fileInputChange.bind(contextVideo));
        if (contextVideo.videoUrlFile) contextVideo.videoUrlFile.addEventListener('input', this._onLinkPreview.bind(contextVideo.preview, contextVideo, options.linkProtocol));

        contextVideo.proportion = {};
        contextVideo.videoRatioOption = {};
        contextVideo.inputX = {};
        contextVideo.inputY = {};
        if (options.videoResizing) {
            contextVideo.proportion = video_dialog.querySelector('._se_video_check_proportion');
            contextVideo.videoRatioOption = video_dialog.querySelector('.se-video-ratio');
            contextVideo.inputX = video_dialog.querySelector('._se_video_size_x');
            contextVideo.inputY = video_dialog.querySelector('._se_video_size_y');
            contextVideo.inputX.value = options.videoWidth;
            contextVideo.inputY.value = options.videoHeight;

            contextVideo.inputX.addEventListener('keyup', this.setInputSize.bind(core, 'x'));
            contextVideo.inputY.addEventListener('keyup', this.setInputSize.bind(core, 'y'));

            contextVideo.inputX.addEventListener('change', this.setRatio.bind(core));
            contextVideo.inputY.addEventListener('change', this.setRatio.bind(core));
            contextVideo.proportion.addEventListener('change', this.setRatio.bind(core));
            contextVideo.videoRatioOption.addEventListener('change', this.setVideoRatio.bind(core));

            video_dialog.querySelector('.se-dialog-btn-revert').addEventListener('click', this.sizeRevert.bind(core));
        }

        /** append html */
        context.dialog.modal.appendChild(video_dialog);

        /** empty memory */
        video_dialog = null;
    },

    /** dialog */
    setDialog: function (core) {
        const option = core.options;
        const lang = core.lang;
        const dialog = core.util.createElement('DIV');

        dialog.className = 'se-dialog-content';
        dialog.style.display = 'none';
        let html = '' +
            '<form method="post" enctype="multipart/form-data">' +
                '<div class="se-dialog-header">' +
                    '<button type="button" data-command="close" class="se-btn se-dialog-close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                        core.icons.cancel +
                    '</button>' +
                    '<span class="se-modal-title">' + lang.dialogBox.videoBox.title + '</span>' +
                '</div>' +
                '<div class="se-dialog-body">';

                if (option.videoFileInput) {
                    html += '' +
                        '<div class="se-dialog-form">' +
                            '<label>' + lang.dialogBox.videoBox.file + '</label>' +
                            '<div class="se-dialog-form-files">' +
                                '<input class="se-input-form _se_video_file" type="file" accept="' + option.videoAccept + '"' + (option.videoMultipleFile ? ' multiple="multiple"' : '') + '/>' +
                                '<button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + lang.controller.remove + '">' + core.icons.cancel + '</button>' +
                            '</div>' +
                        '</div>' ;
                }
    
                if (option.videoUrlInput) {
                    html += '' +
                        '<div class="se-dialog-form">' +
                            '<label>' + lang.dialogBox.videoBox.url + '</label>' +
                            '<input class="se-input-form se-input-url" type="text" />' +
                            '<pre class="se-link-preview"></pre>' +
                        '</div>';
                }

            if (option.videoResizing) {
                const ratioList = option.videoRatioList || [{name: '16:9', value: 0.5625}, {name: '4:3', value: 0.75}, {name: '21:9', value: 0.4285}];
                const ratio = option.videoRatio;
                const onlyPercentage = option.videoSizeOnlyPercentage;
                const onlyPercentDisplay = onlyPercentage ? ' style="display: none !important;"' : '';
                const heightDisplay = !option.videoHeightShow ? ' style="display: none !important;"' : '';
                const ratioDisplay = !option.videoRatioShow ? ' style="display: none !important;"' : '';
                const onlyWidthDisplay = !onlyPercentage && !option.videoHeightShow && !option.videoRatioShow ? ' style="display: none !important;"' : '';
                html += '' +
                    '<div class="se-dialog-form">' +
                        '<div class="se-dialog-size-text">' +
                            '<label class="size-w">' + lang.dialogBox.width + '</label>' +
                            '<label class="se-dialog-size-x">&nbsp;</label>' +
                            '<label class="size-h"' + heightDisplay + '>' + lang.dialogBox.height + '</label>' +
                            '<label class="size-h"' + ratioDisplay + '>(' + lang.dialogBox.ratio + ')</label>' +
                        '</div>' +
                        '<input class="se-input-control _se_video_size_x" placeholder="100%"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + '/>' +
                        '<label class="se-dialog-size-x"' + onlyWidthDisplay + '>' + (onlyPercentage ? '%' : 'x') + '</label>' +
                        '<input class="se-input-control _se_video_size_y" placeholder="' + (option.videoRatio * 100) + '%"' + (onlyPercentage ? ' type="number" min="1"' : 'type="text"') + (onlyPercentage ? ' max="100"' : '') + heightDisplay + '/>' +
                        '<select class="se-input-select se-video-ratio" title="' + lang.dialogBox.ratio + '"' + ratioDisplay + '>';
                            if (!heightDisplay) html += '<option value=""> - </option>';
                            for (let i = 0, len = ratioList.length; i < len; i++) {
                                html += '<option value="' + ratioList[i].value + '"' + (ratio.toString() === ratioList[i].value.toString() ? ' selected' : '') + '>' + ratioList[i].name + '</option>';
                            }
                        html += '</select>' +
                        '<button type="button" title="' + lang.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + core.icons.revert + '</button>' +
                    '</div>' +
                    '<div class="se-dialog-form se-dialog-form-footer"' + onlyPercentDisplay + onlyWidthDisplay + '>' +
                        '<label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + lang.dialogBox.proportion + '</label>' +
                    '</div>';
            }

            html += '' +
                '</div>' +
                '<div class="se-dialog-footer">' +
                    '<div' + (option.videoAlignShow ? '' : ' style="display: none"') + '>' +
                        '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + lang.dialogBox.basic + '</label>' +
                        '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + lang.dialogBox.left + '</label>' +
                        '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + lang.dialogBox.center + '</label>' +
                        '<label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + lang.dialogBox.right + '</label>' +
                    '</div>' +
                    '<button type="submit" class="se-btn-primary" title="' + lang.dialogBox.submitButton + '"><span>' + lang.dialogBox.submitButton + '</span></button>' +
                '</div>' +
            '</form>';

        dialog.innerHTML = html;

        return dialog;
    },

    _fileInputChange: function () {
        if (!this.videoInputFile.value) {
            this.videoUrlFile.removeAttribute('disabled');
            this.preview.style.textDecoration = '';
        } else {
            this.videoUrlFile.setAttribute('disabled', true);
            this.preview.style.textDecoration = 'line-through';
        }
    },

    _removeSelectedFiles: function (urlInput, preview) {
        this.value = '';
        if (urlInput) {
            urlInput.removeAttribute('disabled');
            preview.style.textDecoration = '';
        }
    },

    _onLinkPreview: function (context, protocol, e) {
        const value = e.target.value.trim();
        if (/^<iframe.*\/iframe>$/.test(value)) {
            context._linkValue = value;
            this.textContent = '<IFrame :src=".."></IFrame>';
        } else {
            context._linkValue = this.textContent = !value ? '' : (protocol && value.indexOf('://') === -1 && value.indexOf('#') !== 0) ? protocol + value : value.indexOf('://') === -1 ? '/' + value : value;
        }
    },

    _setTagAttrs: function (element) {
        element.setAttribute('controls', true);

        const attrs = this.options.videoTagAttrs;
        if (!attrs) return;

        for (let key in attrs) {
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },

    createVideoTag: function () {
        const videoTag = this.util.createElement('VIDEO');
        this.plugins.video._setTagAttrs.call(this, videoTag);
        return videoTag;
    },

    _setIframeAttrs: function (element) {
        element.frameBorder = '0';
        element.allowFullscreen = true;

        const attrs = this.options.videoIframeAttrs;
        if (!attrs) return;

        for (let key in attrs) {
            if (!this.util.hasOwn(attrs, key)) continue;
            element.setAttribute(key, attrs[key]);
        }
    },

    createIframeTag: function () {
        const iframeTag = this.util.createElement('IFRAME');
        this.plugins.video._setIframeAttrs.call(this, iframeTag);
        return iframeTag;
    },

    /**
     * @Override @Required fileManager
     */
    fileTags: ['iframe', 'video'],

    /**
     * @Override core, resizing, fileManager
     * @description It is called from core.selectComponent.
     * @param {Element} element Target element
     */
    select: function (element) {
        this.plugins.video.onModifyMode.call(this, element, this.plugins.resizing.call_controller_resize.call(this, element, 'video'));
    },

    /**
     * @Override fileManager, resizing
     */
    destroy: function (element) {
        const frame = element || this.context.video._element;
        const container = this.context.video._container;
        const dataIndex = frame.getAttribute('data-index') * 1;
        let focusEl = (container.previousElementSibling || container.nextElementSibling);

        const emptyDiv = container.parentNode;
        this.util.removeItem(container);
        this.plugins.video.init.call(this);
        this.controllersOff();

        if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function (current) { return current.childNodes.length === 0; }, null);

        // focus
        this.focusEdge(focusEl);

        // event
        this.plugins.fileManager.deleteInfo.call(this, 'video', dataIndex, this.functions.onVideoUpload);

        // history stack
        this.history.push(false);
    },

    /**
     * @Required @Override dialog
     */
    on: function (update) {
        const contextVideo = this.context.video;

        if (!update) {
            contextVideo.inputX.value = contextVideo._origin_w = this.options.videoWidth === contextVideo._defaultSizeX ? '' : this.options.videoWidth;
            contextVideo.inputY.value = contextVideo._origin_h = this.options.videoHeight === contextVideo._defaultSizeY ? '' : this.options.videoHeight;
            contextVideo.proportion.disabled = true;
            if (contextVideo.videoInputFile && this.options.videoMultipleFile) contextVideo.videoInputFile.setAttribute('multiple', 'multiple');
        } else {
            if (contextVideo.videoInputFile && this.options.videoMultipleFile) contextVideo.videoInputFile.removeAttribute('multiple');
        }

        if (contextVideo._resizing) {
            this.plugins.video.setVideoRatioSelect.call(this, contextVideo._origin_h || contextVideo._defaultRatio);
        }
    },

    /**
     * @Required @Override dialog
     */
    open: function () {
        this.plugins.dialog.open.call(this, 'video', 'video' === this.currentControllerName);
    },
    
    setVideoRatio: function (e) {
        const contextVideo = this.context.video;
        const value = e.target.options[e.target.selectedIndex].value;

        contextVideo._defaultSizeY = contextVideo._videoRatio = !value ? contextVideo._defaultSizeY : (value * 100) + '%';
        contextVideo.inputY.placeholder = !value ? '' : (value * 100) + '%';
        contextVideo.inputY.value = '';
    },

    /**
     * @Override resizing
     * @param {String} xy 'x': width, 'y': height
     * @param {KeyboardEvent} e Event object
     */
    setInputSize: function (xy, e) {
        if (e && e.keyCode === 32) {
            e.preventDefault();
            return;
        }

        const contextVideo = this.context.video;
        this.plugins.resizing._module_setInputSize.call(this, contextVideo, xy);

        if (xy === 'y') {
            this.plugins.video.setVideoRatioSelect.call(this, e.target.value || contextVideo._defaultRatio);
        }
    },

    /**
     * @Override resizing
     */
    setRatio: function () {
        this.plugins.resizing._module_setRatio.call(this, this.context.video);
    },

    submit: function (e) {
        const contextVideo = this.context.video;
        const videoPlugin = this.plugins.video;

        e.preventDefault();
        e.stopPropagation();

        contextVideo._align = contextVideo.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;

        try {
            if (contextVideo.videoInputFile && contextVideo.videoInputFile.files.length > 0) {
                this.showLoading();
                videoPlugin.submitAction.call(this, this.context.video.videoInputFile.files);
            } else if (contextVideo.videoUrlFile && contextVideo._linkValue.length > 0) {
                this.showLoading();
                videoPlugin.setup_url.call(this, contextVideo._linkValue);
            }
        } catch (error) {
            this.closeLoading();
            throw Error('[SUNEDITOR.video.submit.fail] cause : "' + error.message + '"');
        } finally {
            this.plugins.dialog.close.call(this);
        }

        return false;
    },

    submitAction: function (fileList) {
        if (fileList.length === 0) return;

        let fileSize = 0;
        let files = [];
        for (let i = 0, len = fileList.length; i < len; i++) {
            if (/video/i.test(fileList[i].type)) {
                files.push(fileList[i]);
                fileSize += fileList[i].size;
            }
        }

        const limitSize = this.options.videoUploadSizeLimit;
        if (limitSize > 0) {
            let infoSize = 0;
            const videosInfo = this.context.video._infoList;
            for (let i = 0, len = videosInfo.length; i < len; i++) {
                infoSize += videosInfo[i].size * 1;
            }

            if ((fileSize + infoSize) > limitSize) {
                this.closeLoading();
                const err = '[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: ' + (limitSize/1000) + 'KB';
                if (typeof this.functions.onVideoUploadError !== 'function' || this.functions.onVideoUploadError(err, { 'limitSize': limitSize, 'currentSize': infoSize, 'uploadSize': fileSize }, this)) {
                    this.functions.noticeOpen(err);
                }
                return;
            }
        }

        const contextVideo = this.context.video;
        contextVideo._uploadFileLength = files.length;

        const info = {
            inputWidth: contextVideo.inputX.value,
            inputHeight: contextVideo.inputY.value,
            align: contextVideo._align,
            isUpdate: this.context.dialog.updateModal,
            element: contextVideo._element
        };

        if (typeof this.functions.onVideoUploadBefore === 'function') {
            const result = this.functions.onVideoUploadBefore(files, info, this, function (data) {
                if (data && this._w.Array.isArray(data.result)) {
                    this.plugins.video.register.call(this, info, data);
                } else {
                    this.plugins.video.upload.call(this, info, data);
                }
            }.bind(this));

            if (typeof result === 'undefined') return;
            if (!result) {
                this.closeLoading();
                return;
            }
            if (typeof result === 'object' && result.length > 0) files = result;
        }

        this.plugins.video.upload.call(this, info, files);
    },

    error: function (message, response) {
        this.closeLoading();
        if (typeof this.functions.onVideoUploadError !== 'function' || this.functions.onVideoUploadError(message, response, this)) {
            this.functions.noticeOpen(message);
            throw Error('[SUNEDITOR.plugin.video.error] response: ' + message);
        }
    },

    upload: function (info, files) {
        if (!files) {
            this.closeLoading();
            return;
        }
        if (typeof files === 'string') {
            this.plugins.video.error.call(this, files, null);
            return;
        }

        const videoUploadUrl = this.options.videoUploadUrl;
        const filesLen = this.context.dialog.updateModal ? 1 : files.length;

        // server upload
        if (typeof videoUploadUrl === 'string' && videoUploadUrl.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < filesLen; i++) {
                formData.append('file-' + i, files[i]);
            }
            this.plugins.fileManager.upload.call(this, videoUploadUrl, this.options.videoUploadHeader, formData, this.plugins.video.callBack_videoUpload.bind(this, info), this.functions.onVideoUploadError);
        } else {
            throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
        }
    },

    callBack_videoUpload: function (info, xmlHttp) {
        if (typeof this.functions.videoUploadHandler === 'function') {
            this.functions.videoUploadHandler(xmlHttp, info, this);
        } else {
            const response = JSON.parse(xmlHttp.responseText);
            if (response.errorMessage) {
                this.plugins.video.error.call(this, response.errorMessage, response);
            } else {
                this.plugins.video.register.call(this, info, response);
            }
        }
    },

    register: function (info, response) {
        const fileList = response.result;
        const videoTag = this.plugins.video.createVideoTag.call(this);

        for (let i = 0, len = fileList.length, file; i < len; i++) {
            file = { name: fileList[i].name, size: fileList[i].size };
            this.plugins.video.create_video.call(this, (info.isUpdate ? info.element : videoTag.cloneNode(false)), fileList[i].url, info.inputWidth, info.inputHeight, info.align, file, info.isUpdate);
        }

        this.closeLoading();
    },

    setup_url: function (url) {
        try {
            const contextVideo = this.context.video;
            if (!url) url = contextVideo._linkValue;
            if (!url) return false;

            /** iframe source */
            if (/^<iframe.*\/iframe>$/.test(url)) {
                const oIframe = (new this._w.DOMParser()).parseFromString(url, 'text/html').querySelector('iframe');
                url = oIframe.src;
                if (url.length === 0) return false;
            }
            
            /** youtube */
            if (/youtu\.?be/.test(url)) {
                if (!/^http/.test(url)) url = 'https://' + url;
                url = url.replace('watch?v=', '');
                if (!/^\/\/.+\/embed\//.test(url)) {
                    url = url.replace(url.match(/\/\/.+\//)[0], '//www.youtube.com/embed/').replace('&', '?&');
                }

                if (contextVideo._youtubeQuery.length > 0) {
                    if (/\?/.test(url)) {
                        const splitUrl = url.split('?');
                        url = splitUrl[0] + '?' + contextVideo._youtubeQuery + '&' + splitUrl[1];
                    } else {
                        url += '?' + contextVideo._youtubeQuery;
                    }
                }
            } else if (/vimeo\.com/.test(url)) {
                if (url.endsWith('/')) {
                    url = url.slice(0, -1);
                }
                url = 'https://player.vimeo.com/video/' + url.slice(url.lastIndexOf('/') + 1);
            }

            this.plugins.video.create_video.call(this, this.plugins.video[(!/youtu\.?be/.test(url) && !/vimeo\.com/.test(url) ? "createVideoTag" : "createIframeTag")].call(this), url, contextVideo.inputX.value, contextVideo.inputY.value, contextVideo._align, null, this.context.dialog.updateModal);
        } catch (error) {
            throw Error('[SUNEDITOR.video.upload.fail] cause : "' + error.message + '"');
        } finally {
            this.closeLoading();
        }
    },

    create_video: function (oFrame, src, width, height, align, file, isUpdate) {
        this.context.resizing._resize_plugin = 'video';
        const contextVideo = this.context.video;
        
        let cover = null;
        let container = null;
        let init = false;

        /** update */
        if (isUpdate) {
            oFrame = contextVideo._element;
            if (oFrame.src !== src) {
                init = true;
                const isYoutube = /youtu\.?be/.test(src);
                const isVimeo = /vimeo\.com/.test(src);
                if ((isYoutube || isVimeo) && !/^iframe$/i.test(oFrame.nodeName)) {
                    const newTag = this.plugins.video.createIframeTag.call(this);
                    newTag.src = src;
                    oFrame.parentNode.replaceChild(newTag, oFrame);
                    contextVideo._element = oFrame = newTag;
                } else if (!isYoutube && !isVimeo && !/^videoo$/i.test(oFrame.nodeName)) {
                    const newTag = this.plugins.video.createVideoTag.call(this);
                    newTag.src = src;
                    oFrame.parentNode.replaceChild(newTag, oFrame);
                    contextVideo._element = oFrame = newTag;
                } else {
                    oFrame.src = src;
                }
            }
            container = contextVideo._container;
            cover = this.util.getParentElement(oFrame, 'FIGURE');
        }
        /** create */
        else {
            init = true;
            oFrame.src = src;
            contextVideo._element = oFrame;
            cover = this.plugins.component.set_cover.call(this, oFrame);
            container = this.plugins.component.set_container.call(this, cover, 'se-video-container');
        }

        /** rendering */
        contextVideo._cover = cover;
        contextVideo._container = container;

        const inputUpdate = (this.plugins.resizing._module_getSizeX.call(this, contextVideo) !== (width || contextVideo._defaultSizeX)) || (this.plugins.resizing._module_getSizeY.call(this, contextVideo) !== (height || contextVideo._videoRatio));
        const changeSize = !isUpdate || inputUpdate;

        if (contextVideo._resizing) {
            this.context.video._proportionChecked = contextVideo.proportion.checked;
            oFrame.setAttribute('data-proportion', contextVideo._proportionChecked);
        }

        // size
        let isPercent = false;
        if (changeSize) {
            isPercent = this.plugins.video.applySize.call(this);
        }

        // align
        if (!(isPercent && align === 'center')) {
            this.plugins.video.setAlign.call(this, null, oFrame, cover, container);
        }

        let changed = true;
        if (!isUpdate) {
            changed = this.insertComponent(container, false, true, !this.options.mediaAutoSelect);
            if (!this.options.mediaAutoSelect) {
                const line = this.appendFormatTag(container, null);
                if (line) this.setRange(line, 0, line, 0);
            }
        } else if (contextVideo._resizing && this.context.resizing._rotateVertical && changeSize) {
            this.plugins.resizing.setTransformSize.call(this, oFrame, null, null);
        }

        if (changed) {
            if (init) {
                this.plugins.fileManager.setInfo.call(this, 'video', oFrame, this.functions.onVideoUpload, file, true);
            }
            if (isUpdate) {
                this.selectComponent(oFrame, 'video');
                // history stack
                this.history.push(false);
            }
        }

        this.context.resizing._resize_plugin = '';
    },

    _update_videoCover: function (oFrame) {
        if (!oFrame) return;

        const contextVideo = this.context.video;
        
        if (/^video$/i.test(oFrame.nodeName)) this.plugins.video._setTagAttrs.call(this, oFrame);
        else this.plugins.video._setIframeAttrs.call(this, oFrame);
        
        const existElement = (this.util.isRangeFormatElement(oFrame.parentNode) || this.util.isWysiwygDiv(oFrame.parentNode)) ? 
            oFrame : this.util.getFormatElement(oFrame) || oFrame;

        const prevFrame = oFrame;
        contextVideo._element = oFrame = oFrame.cloneNode(true);
        const cover = contextVideo._cover = this.plugins.component.set_cover.call(this, oFrame);
        const container = contextVideo._container = this.plugins.component.set_container.call(this, cover, 'se-video-container');

        try {
            const figcaption = existElement.querySelector('figcaption');
            let caption = null;
            if (!!figcaption) {
                caption = this.util.createElement('DIV');
                caption.innerHTML = figcaption.innerHTML;
                this.util.removeItem(figcaption);
            }

            // size
            const size = (oFrame.getAttribute('data-size') || oFrame.getAttribute('data-origin') || '').split(',');
            this.plugins.video.applySize.call(this, (size[0] || prevFrame.style.width || prevFrame.width || ''), (size[1] || prevFrame.style.height || prevFrame.height || ''));

            // align
            const format = this.util.getFormatElement(prevFrame);
            if (format) contextVideo._align = format.style.textAlign || format.style.float;
            this.plugins.video.setAlign.call(this, null, oFrame, cover, container);

            if (this.util.isListCell(existElement) || this.util.isFormatElement(existElement)) {
                prevFrame.parentNode.replaceChild(container, prevFrame);
            } else if (this.util.isFormatElement(existElement) && existElement.childNodes.length > 0) {
                existElement.parentNode.insertBefore(container, existElement);
                this.util.removeItem(prevFrame);
                // clean format tag
                this.util.removeEmptyNode(existElement, null);
                if (existElement.children.length === 0) existElement.innerHTML = this.util.htmlRemoveWhiteSpace(existElement.innerHTML);
            } else {
                existElement.parentNode.replaceChild(container, existElement);
            }

            if (!!caption) existElement.parentNode.insertBefore(caption, container.nextElementSibling);
        } catch (error) {
            console.warn('[SUNEDITOR.video.error] Maybe the video tag is nested.', error);
        }

        this.plugins.fileManager.setInfo.call(this, 'video', oFrame, this.functions.onVideoUpload, null, true);
        this.plugins.video.init.call(this);
    },

    /**
     * @Required @Override fileManager, resizing
     */
    onModifyMode: function (element, size) {
        const contextVideo = this.context.video;
        contextVideo._element = element;
        contextVideo._cover = this.util.getParentElement(element, 'FIGURE');
        contextVideo._container = this.util.getParentElement(element, this.util.isMediaComponent);
        contextVideo._align = element.style.float || element.getAttribute('data-align') || 'none';
        element.style.float = '';

        if (size) {
            contextVideo._element_w = size.w;
            contextVideo._element_h = size.h;
            contextVideo._element_t = size.t;
            contextVideo._element_l = size.l;
        }

        let origin = contextVideo._element.getAttribute('data-size') || contextVideo._element.getAttribute('data-origin');
        let w, h;
        if (origin) {
            origin = origin.split(',');
            w = origin[0];
            h = origin[1];
        } else if (size) {
            w = size.w;
            h = size.h;
        }

        contextVideo._origin_w = w || element.style.width || element.width || '';
        contextVideo._origin_h = h || element.style.height || element.height || '';
    },

    /**
     * @Required @Override fileManager, resizing
     */
    openModify: function (notOpen) {
        const contextVideo = this.context.video;

        if (contextVideo.videoUrlFile) contextVideo._linkValue = contextVideo.preview.textContent = contextVideo.videoUrlFile.value = (contextVideo._element.src || (contextVideo._element.querySelector('source') || '').src || '');
        (contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="' + contextVideo._align + '"]') || contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = true;

        if (contextVideo._resizing) {
            this.plugins.resizing._module_setModifyInputSize.call(this, contextVideo, this.plugins.video);
            
            const y = contextVideo._videoRatio = this.plugins.resizing._module_getSizeY.call(this, contextVideo);
            const ratioSelected = this.plugins.video.setVideoRatioSelect.call(this, y);
            if (!ratioSelected) contextVideo.inputY.value = contextVideo._onlyPercentage ? this.util.getNumber(y, 2) : y;
        }

        if (!notOpen) this.plugins.dialog.open.call(this, 'video', true);
    },
    
    setVideoRatioSelect: function (value) {
        let ratioSelected = false;
        const contextVideo = this.context.video;
        const ratioOptions = contextVideo.videoRatioOption.options;

        if (/%$/.test(value) || contextVideo._onlyPercentage) value = (this.util.getNumber(value, 2) / 100) + '';
        else if (!this.util.isNumber(value) || (value * 1) >= 1) value = '';

        contextVideo.inputY.placeholder = '';
        for (let i = 0, len = ratioOptions.length; i < len; i++) {
            if (ratioOptions[i].value === value) {
                ratioSelected = ratioOptions[i].selected = true;
                contextVideo.inputY.placeholder = !value ? '' : (value * 100) + '%';
            }
            else ratioOptions[i].selected = false;
        }

        return ratioSelected;
    },

    /**
     * @Override fileManager
     */
    checkFileInfo: function () {
        this.plugins.fileManager.checkInfo.call(this, 'video', ['iframe', 'video'], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), true);
    },

    /**
     * @Override fileManager
     */
    resetFileInfo: function () {
        this.plugins.fileManager.resetInfo.call(this, 'video', this.functions.onVideoUpload);
    },

    /**
     * @Override fileManager
     */
    applySize: function (w, h) {
        const contextVideo = this.context.video;

        if (!w) w = contextVideo.inputX.value || this.options.videoWidth;
        if (!h) h = contextVideo.inputY.value || this.options.videoHeight;
        
        if (contextVideo._onlyPercentage || /%$/.test(w) || !w) {
            this.plugins.video.setPercentSize.call(this, (w || '100%'), (h || (/%$/.test(contextVideo._videoRatio) ? contextVideo._videoRatio : contextVideo._defaultRatio)));
            return true;
        } else if ((!w || w === 'auto') && (!h || h === 'auto')) {
            this.plugins.video.setAutoSize.call(this);
        } else {
            this.plugins.video.setSize.call(this, w, (h || contextVideo._videoRatio || contextVideo._defaultRatio), false);
        }

        return false;
    },

    /**
     * @Override resizing
     */
    sizeRevert: function () {
        this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
    },

    /**
     * @Override resizing
     */
    setSize: function (w, h, notResetPercentage, direction) {
        const contextVideo = this.context.video;
        const onlyW = /^(rw|lw)$/.test(direction);
        const onlyH = /^(th|bh)$/.test(direction);

        if (!onlyH) w = this.util.getNumber(w, 0);
        if (!onlyW) h = this.util.isNumber(h) ? h + contextVideo.sizeUnit : !h ? '' : h;
        w = w ? w + contextVideo.sizeUnit : '';

        if (!onlyH) contextVideo._element.style.width = w;
        if (!onlyW) contextVideo._cover.style.paddingBottom = contextVideo._cover.style.height = h;

        if (!onlyH && !/%$/.test(w)) {
            contextVideo._cover.style.width = w;
            contextVideo._container.style.width = '';
        }

        if (!onlyW && !/%$/.test(h)) {
            contextVideo._element.style.height = h;
        } else {
            contextVideo._element.style.height = '';
        }

        if (!notResetPercentage) contextVideo._element.removeAttribute('data-percentage');

        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
    },

    /**
     * @Override resizing
     */
    setAutoSize: function () {
        this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
    },

    /**
     * @Override resizing
     */
    setOriginSize: function (dataSize) {
        const contextVideo = this.context.video;
        contextVideo._element.removeAttribute('data-percentage');

        this.plugins.resizing.resetTransform.call(this, contextVideo._element);
        this.plugins.video.cancelPercentAttr.call(this);

        const originSize = ((dataSize ? contextVideo._element.getAttribute('data-size') : '') || contextVideo._element.getAttribute('data-origin') || '').split(',');
        
        if (originSize) {
            const w = originSize[0];
            const h = originSize[1];

            if (contextVideo._onlyPercentage || (/%$/.test(w) && (/%$/.test(h) || !/\d/.test(h)))) {
                this.plugins.video.setPercentSize.call(this, w, h);
            } else {
                this.plugins.video.setSize.call(this, w, h);
            }

            // save current size
            this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
        }
    },

    /**
     * @Override resizing
     */
    setPercentSize: function (w, h) {
        const contextVideo = this.context.video;
        h = !!h && !/%$/.test(h) && !this.util.getNumber(h, 0) ? this.util.isNumber(h) ? h + '%' : h : this.util.isNumber(h) ? h + contextVideo.sizeUnit : (h || contextVideo._defaultRatio);

        contextVideo._container.style.width = this.util.isNumber(w) ? w + '%' : w;
        contextVideo._container.style.height = '';
        contextVideo._cover.style.width = '100%';
        contextVideo._cover.style.height = h;
        contextVideo._cover.style.paddingBottom = h;
        contextVideo._element.style.width = '100%';
        contextVideo._element.style.height = '100%';
        contextVideo._element.style.maxWidth = '';

        if (contextVideo._align === 'center') this.plugins.video.setAlign.call(this, null, null, null, null);
        contextVideo._element.setAttribute('data-percentage', w + ',' + h);

        // save current size
        this.plugins.resizing._module_saveCurrentSize.call(this, contextVideo);
    },

    /**
     * @Override resizing
     */
    cancelPercentAttr: function () {
        const contextVideo = this.context.video;
        
        contextVideo._cover.style.width = '';
        contextVideo._cover.style.height = '';
        contextVideo._cover.style.paddingBottom = '';
        contextVideo._container.style.width = '';
        contextVideo._container.style.height = '';

        this.util.removeClass(contextVideo._container, this.context.video._floatClassRegExp);
        this.util.addClass(contextVideo._container, '__se__float-' + contextVideo._align);

        if (contextVideo._align === 'center') this.plugins.video.setAlign.call(this, null, null, null, null);
    },

    /**
     * @Override resizing
     */
    setAlign: function (align, element, cover, container) {
        const contextVideo = this.context.video;
        
        if (!align) align = contextVideo._align;
        if (!element) element = contextVideo._element;
        if (!cover) cover = contextVideo._cover;
        if (!container) container = contextVideo._container;

        if (align && align !== 'none') {
            cover.style.margin = 'auto';
        } else {
            cover.style.margin = '0';
        }

        if (/%$/.test(element.style.width) && align === 'center') {
            container.style.minWidth = '100%';
            cover.style.width = container.style.width;
            cover.style.height = cover.style.height;
            cover.style.paddingBottom = !/%$/.test(cover.style.height) ? cover.style.height : this.util.getNumber((this.util.getNumber(cover.style.height, 2) / 100) * this.util.getNumber(cover.style.width, 2), 2) + '%';
        } else {
            container.style.minWidth = '';
            cover.style.width = this.context.resizing._rotateVertical ? (element.style.height || element.offsetHeight) : (element.style.width || '100%');
            cover.style.paddingBottom = cover.style.height;
        }

        if (!this.util.hasClass(container, '__se__float-' + align)) {
            this.util.removeClass(container, contextVideo._floatClassRegExp);
            this.util.addClass(container, '__se__float-' + align);
        }
        
        element.setAttribute('data-align', align);
    },

    /**
     * @Override dialog
     */
    init: function () {
        const contextVideo = this.context.video;
        if (contextVideo.videoInputFile) contextVideo.videoInputFile.value = '';
        if (contextVideo.videoUrlFile) contextVideo._linkValue = contextVideo.preview.textContent = contextVideo.videoUrlFile.value = '';
        if (contextVideo.videoInputFile && contextVideo.videoUrlFile) {
            contextVideo.videoUrlFile.removeAttribute('disabled');
            contextVideo.preview.style.textDecoration = '';
        }

        contextVideo._origin_w = this.options.videoWidth;
        contextVideo._origin_h = this.options.videoHeight;
        contextVideo.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = true;
        
        if (contextVideo._resizing) {
            contextVideo.inputX.value = this.options.videoWidth === contextVideo._defaultSizeX ? '' : this.options.videoWidth;
            contextVideo.inputY.value = this.options.videoHeight === contextVideo._defaultSizeY ? '' : this.options.videoHeight;
            contextVideo.proportion.checked = true;
            contextVideo.proportion.disabled = true;
            this.plugins.video.setVideoRatioSelect.call(this, contextVideo._defaultRatio);
        }
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/fileBrowser/imageGallery.js":
/*!************************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/fileBrowser/imageGallery.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/fileBrowser */ "./node_modules/suneditor/src/plugins/modules/fileBrowser.js");
/* harmony import */ var _modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0__);
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'imageGallery',
    /**
     * @description Constructor
     * @param {Object} core Core object 
     */
    add: function (core) {
        core.addModule([(_modules_fileBrowser__WEBPACK_IMPORTED_MODULE_0___default())]);

        const context = core.context;
        context.imageGallery = {
            title: core.lang.toolbar.imageGallery, // @Required @Override fileBrowser - File browser window title.
            url: core.options.imageGalleryUrl, // @Required @Override fileBrowser - File server url.
            header: core.options.imageGalleryHeader, // @Required @Override fileBrowser - File server http header.
            listClass: 'se-image-list', // @Required @Override fileBrowser - Class name of list div.
            itemTemplateHandler: this.drawItems, // @Required @Override fileBrowser - Function that defines the HTML of an file item.
            selectorHandler: this.setImage.bind(core), // @Required @Override fileBrowser - Function that action when item click.
            columnSize: 4 // @Option @Override fileBrowser - Number of "div.se-file-item-column" to be created (default: 4)
        };
    },
    
    /**
     * @Required @Override fileBrowser
     * @description Open a file browser.
     * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
     */
    open: function (selectorHandler) {
        this.plugins.fileBrowser.open.call(this, 'imageGallery', selectorHandler);
    },

    /**
     * @Required @Override fileBrowser
     * @description Define the HTML of the item to be put in "div.se-file-item-column".
     * Format: [
     *      { src: "image src", name: "name(@option)", alt: "image alt(@option)", tag: "tag name(@option)" }
     * ]
     * @param {Object} item Item of the response data's array
     */
    drawItems: function (item) {
        const srcName = item.src.split('/').pop();
        return  '<div class="se-file-item-img"><img src="' + (item.thumbnail || item.src) + '" alt="' + (item.alt || srcName) + '" data-command="pick" data-value="' + (item.src || item.thumbnail) + '">' +
                    '<div class="se-file-img-name se-file-name-back"></div>' +
                    '<div class="se-file-img-name __se__img_name">' + (item.name || srcName) + '</div>' +
                '</div>';
    },

    setImage: function (target) {
        this.callPlugin('image', function () {
            const file = {name: target.parentNode.querySelector('.__se__img_name').textContent, size: 0};
            this.plugins.image.create_image.call(this, target.getAttribute('data-value'), null, this.context.image._origin_w, this.context.image._origin_h, 'none', file, target.alt);
        }.bind(this), null);
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "align": () => (/* reexport safe */ _submenu_align__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "audio": () => (/* reexport safe */ _dialog_audio__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   "blockquote": () => (/* reexport safe */ _command_blockquote__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "font": () => (/* reexport safe */ _submenu_font__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "fontColor": () => (/* reexport safe */ _submenu_fontColor__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "fontSize": () => (/* reexport safe */ _submenu_fontSize__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "formatBlock": () => (/* reexport safe */ _submenu_formatBlock__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "hiliteColor": () => (/* reexport safe */ _submenu_hiliteColor__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "horizontalRule": () => (/* reexport safe */ _submenu_horizontalRule__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "image": () => (/* reexport safe */ _dialog_image__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   "imageGallery": () => (/* reexport safe */ _fileBrowser_imageGallery__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   "lineHeight": () => (/* reexport safe */ _submenu_lineHeight__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "link": () => (/* reexport safe */ _dialog_link__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   "list": () => (/* reexport safe */ _submenu_list__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "math": () => (/* reexport safe */ _dialog_math__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   "paragraphStyle": () => (/* reexport safe */ _submenu_paragraphStyle__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "table": () => (/* reexport safe */ _submenu_table__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "template": () => (/* reexport safe */ _submenu_template__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "textStyle": () => (/* reexport safe */ _submenu_textStyle__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   "video": () => (/* reexport safe */ _dialog_video__WEBPACK_IMPORTED_MODULE_16__["default"])
/* harmony export */ });
/* harmony import */ var _command_blockquote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command/blockquote */ "./node_modules/suneditor/src/plugins/command/blockquote.js");
/* harmony import */ var _submenu_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu/align */ "./node_modules/suneditor/src/plugins/submenu/align.js");
/* harmony import */ var _submenu_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submenu/font */ "./node_modules/suneditor/src/plugins/submenu/font.js");
/* harmony import */ var _submenu_fontSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submenu/fontSize */ "./node_modules/suneditor/src/plugins/submenu/fontSize.js");
/* harmony import */ var _submenu_fontColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submenu/fontColor */ "./node_modules/suneditor/src/plugins/submenu/fontColor.js");
/* harmony import */ var _submenu_hiliteColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./submenu/hiliteColor */ "./node_modules/suneditor/src/plugins/submenu/hiliteColor.js");
/* harmony import */ var _submenu_horizontalRule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submenu/horizontalRule */ "./node_modules/suneditor/src/plugins/submenu/horizontalRule.js");
/* harmony import */ var _submenu_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submenu/list */ "./node_modules/suneditor/src/plugins/submenu/list.js");
/* harmony import */ var _submenu_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./submenu/table */ "./node_modules/suneditor/src/plugins/submenu/table.js");
/* harmony import */ var _submenu_formatBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submenu/formatBlock */ "./node_modules/suneditor/src/plugins/submenu/formatBlock.js");
/* harmony import */ var _submenu_lineHeight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submenu/lineHeight */ "./node_modules/suneditor/src/plugins/submenu/lineHeight.js");
/* harmony import */ var _submenu_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./submenu/template */ "./node_modules/suneditor/src/plugins/submenu/template.js");
/* harmony import */ var _submenu_paragraphStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./submenu/paragraphStyle */ "./node_modules/suneditor/src/plugins/submenu/paragraphStyle.js");
/* harmony import */ var _submenu_textStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./submenu/textStyle */ "./node_modules/suneditor/src/plugins/submenu/textStyle.js");
/* harmony import */ var _dialog_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/link */ "./node_modules/suneditor/src/plugins/dialog/link.js");
/* harmony import */ var _dialog_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog/image */ "./node_modules/suneditor/src/plugins/dialog/image.js");
/* harmony import */ var _dialog_video__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/video */ "./node_modules/suneditor/src/plugins/dialog/video.js");
/* harmony import */ var _dialog_audio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/audio */ "./node_modules/suneditor/src/plugins/dialog/audio.js");
/* harmony import */ var _dialog_math__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/math */ "./node_modules/suneditor/src/plugins/dialog/math.js");
/* harmony import */ var _fileBrowser_imageGallery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fileBrowser/imageGallery */ "./node_modules/suneditor/src/plugins/fileBrowser/imageGallery.js");


// command


// submenu














// dialog






// file browser



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ blockquote: _command_blockquote__WEBPACK_IMPORTED_MODULE_0__["default"], align: _submenu_align__WEBPACK_IMPORTED_MODULE_1__["default"], font: _submenu_font__WEBPACK_IMPORTED_MODULE_2__["default"], fontSize: _submenu_fontSize__WEBPACK_IMPORTED_MODULE_3__["default"], fontColor: _submenu_fontColor__WEBPACK_IMPORTED_MODULE_4__["default"], hiliteColor: _submenu_hiliteColor__WEBPACK_IMPORTED_MODULE_5__["default"], horizontalRule: _submenu_horizontalRule__WEBPACK_IMPORTED_MODULE_6__["default"], list: _submenu_list__WEBPACK_IMPORTED_MODULE_7__["default"], table: _submenu_table__WEBPACK_IMPORTED_MODULE_8__["default"], formatBlock: _submenu_formatBlock__WEBPACK_IMPORTED_MODULE_9__["default"], lineHeight: _submenu_lineHeight__WEBPACK_IMPORTED_MODULE_10__["default"], template: _submenu_template__WEBPACK_IMPORTED_MODULE_11__["default"], paragraphStyle: _submenu_paragraphStyle__WEBPACK_IMPORTED_MODULE_12__["default"], textStyle: _submenu_textStyle__WEBPACK_IMPORTED_MODULE_13__["default"], link: _dialog_link__WEBPACK_IMPORTED_MODULE_14__["default"], image: _dialog_image__WEBPACK_IMPORTED_MODULE_15__["default"], video: _dialog_video__WEBPACK_IMPORTED_MODULE_16__["default"], audio: _dialog_audio__WEBPACK_IMPORTED_MODULE_17__["default"], math: _dialog_math__WEBPACK_IMPORTED_MODULE_18__["default"], imageGallery: _fileBrowser_imageGallery__WEBPACK_IMPORTED_MODULE_19__["default"] });


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/_anchor.js":
/*!***************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/_anchor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _selectMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_selectMenu */ "./node_modules/suneditor/src/plugins/modules/_selectMenu.js");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'anchor',
    add: function (core) {
        core.addModule([_selectMenu__WEBPACK_IMPORTED_MODULE_0__["default"]]);
        
        core.context.anchor = {
            caller: {},
            forms: this.setDialogForm(core),
            host: (core._w.location.origin + core._w.location.pathname).replace(/\/$/, ''),
            callerContext: null
        };
    },

    /** dialog */
    setDialogForm: function (core) {
        const lang = core.lang;
        const relList = core.options.linkRel;
        const defaultRel = (core.options.linkRelDefault.default || '').split(' ');
        const icons = core.icons;
        const forms = core.util.createElement('DIV');

        let html = '<div class="se-dialog-body">' +
            '<div class="se-dialog-form">' +
                '<label>' + lang.dialogBox.linkBox.url + '</label>' +
                '<div class="se-dialog-form-files">' +
                    '<input class="se-input-form se-input-url" type="text" placeholder="' + (core.options.protocol || '') + '" />' +
                    '<button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + lang.dialogBox.linkBox.bookmark + '">' + icons.bookmark + '</button>' +
                    core.plugins.selectMenu.setForm() +
                '</div>' +
                '<div class="se-anchor-preview-form">' +
                    '<span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + icons.bookmark + '</span>' +
                    '<span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + icons.download + '</span>' +
                    '<pre class="se-link-preview"></pre>' +
                '</div>' +
            '</div>' +
            '<div class="se-dialog-form">' +
                '<label>' + lang.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" />' +
            '</div>' +
            '<div class="se-dialog-form-footer">' +
                '<label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + lang.dialogBox.linkBox.newWindowCheck + '</label>' +
                '<label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + lang.dialogBox.linkBox.downloadLinkCheck + '</label>';
            if (relList.length > 0) {
                html += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button>' +
                    '<div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div>' +
                    '<div class="se-list-layer">' +
                        '<div class="se-list-inner">' +
                            '<ul class="se-list-basic se-list-checked">';
                for (let i = 0, len = relList.length, rel; i < len; i++) {
                    rel = relList[i];
                    html += '<li><button type="button" class="se-btn-list' + (defaultRel.indexOf(rel) > -1 ? ' se-checked' : '') + '" data-command="' + rel + '" title="' + rel + '"><span class="se-svg">' + icons.checked + '</span>' + rel + '</button></li>';
                }
                html += '</ul></div></div></div>';
            }

        html += '</div></div>';

        forms.innerHTML = html;
        return forms;
    },

    initEvent: function (pluginName, forms) {
        const anchorPlugin = this.plugins.anchor;
        const context = this.context.anchor.caller[pluginName] = {
            modal: forms,
            urlInput: null,
            linkDefaultRel: this.options.linkRelDefault,
            defaultRel: this.options.linkRelDefault.default || '',
            currentRel: [],
            linkAnchor: null,
            linkValue: '',
            _change: false,
            callerName: pluginName
        };

        if (typeof context.linkDefaultRel.default === 'string') context.linkDefaultRel.default = context.linkDefaultRel.default.trim();
        if (typeof context.linkDefaultRel.check_new_window === 'string') context.linkDefaultRel.check_new_window = context.linkDefaultRel.check_new_window.trim();
        if (typeof context.linkDefaultRel.check_bookmark === 'string') context.linkDefaultRel.check_bookmark = context.linkDefaultRel.check_bookmark.trim();

        context.urlInput = forms.querySelector('.se-input-url');
        context.anchorText = forms.querySelector('._se_anchor_text');
        context.newWindowCheck = forms.querySelector('._se_anchor_check');
        context.downloadCheck = forms.querySelector('._se_anchor_download');
        context.download = forms.querySelector('._se_anchor_download_icon');
        context.preview = forms.querySelector('.se-link-preview');
        context.bookmark = forms.querySelector('._se_anchor_bookmark_icon');
        context.bookmarkButton = forms.querySelector('._se_bookmark_button');

        this.plugins.selectMenu.initEvent.call(this, pluginName, forms);
        const listContext = this.context.selectMenu.caller[pluginName];
        
        /** rel */
        if (this.options.linkRel.length > 0) {
            context.relButton = forms.querySelector('.se-anchor-rel-btn');
            context.relList = forms.querySelector('.se-list-layer');
            context.relPreview = forms.querySelector('.se-anchor-rel-preview');
            context.relButton.addEventListener('click', anchorPlugin.onClick_relButton.bind(this, context));
            context.relList.addEventListener('click', anchorPlugin.onClick_relList.bind(this, context));
        }

        context.newWindowCheck.addEventListener('change', anchorPlugin.onChange_newWindowCheck.bind(this, context));
        context.downloadCheck.addEventListener('change', anchorPlugin.onChange_downloadCheck.bind(this, context));
        context.anchorText.addEventListener('input', anchorPlugin.onChangeAnchorText.bind(this, context));
        context.urlInput.addEventListener('input', anchorPlugin.onChangeUrlInput.bind(this, context));
        context.urlInput.addEventListener('keydown', anchorPlugin.onKeyDownUrlInput.bind(this, listContext));
        context.urlInput.addEventListener('focus', anchorPlugin.onFocusUrlInput.bind(this, context, listContext));
        context.urlInput.addEventListener('blur', anchorPlugin.onBlurUrlInput.bind(this, listContext));
        context.bookmarkButton.addEventListener('click', anchorPlugin.onClick_bookmarkButton.bind(this, context));
    },

    on: function (contextAnchor, update) {
        const anchorPlugin = this.plugins.anchor;

        if (!update) {
            anchorPlugin.init.call(this, contextAnchor);
            contextAnchor.anchorText.value = this.getSelection().toString().trim();
            contextAnchor.newWindowCheck.checked = this.options.linkTargetNewWindow;
        } else if (contextAnchor.linkAnchor) {
            this.context.dialog.updateModal = true;
            const href = this.options.linkNoPrefix ? contextAnchor.linkAnchor.href.replace(contextAnchor.linkAnchor.origin + '/', '') : contextAnchor.linkAnchor.href;
            contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = anchorPlugin.selfPathBookmark.call(this, href) ? href.substr(href.lastIndexOf('#')) : href;
            contextAnchor.anchorText.value = contextAnchor.linkAnchor.textContent || contextAnchor.linkAnchor.getAttribute('alt');
            contextAnchor.newWindowCheck.checked = (/_blank/i.test(contextAnchor.linkAnchor.target) ? true : false);
            contextAnchor.downloadCheck.checked = contextAnchor.linkAnchor.download;
        }

        this.context.anchor.callerContext = contextAnchor;
        anchorPlugin.setRel.call(this, contextAnchor, (update && contextAnchor.linkAnchor) ? contextAnchor.linkAnchor.rel : contextAnchor.defaultRel);
        anchorPlugin.setLinkPreview.call(this, contextAnchor, contextAnchor.linkValue);
        this.plugins.selectMenu.on.call(this, contextAnchor.callerName, this.plugins.anchor.setHeaderBookmark);
    },

    selfPathBookmark: function(path) {
        const href = this._w.location.href.replace(/\/$/, '');
        return path.indexOf('#') === 0 || (path.indexOf(href) === 0 && path.indexOf('#') === (href.indexOf("#") === -1 ? href.length : href.substr(0, href.indexOf("#")).length));
    },

    _closeRelMenu: null,
    toggleRelList: function (contextAnchor, show) {
        if (!show) {
            if (this.plugins.anchor._closeRelMenu) this.plugins.anchor._closeRelMenu();
        } else {
            const target = contextAnchor.relButton;
            const relList = contextAnchor.relList;
            this.util.addClass(target, 'active');
            relList.style.visibility = 'hidden';
            relList.style.display = 'block';
            if (!this.options.rtl) relList.style.left = (target.offsetLeft + target.offsetWidth + 1) + 'px';
            else relList.style.left = (target.offsetLeft - relList.offsetWidth - 1) + 'px';
            relList.style.top = (target.offsetTop + (target.offsetHeight / 2) - (relList.offsetHeight / 2)) + 'px';
            relList.style.visibility = '';

            this.plugins.anchor._closeRelMenu = function (context, target, e) {
                if (e && (context.relButton.contains(e.target) || context.relList.contains(e.target))) return;
                this.util.removeClass(target, 'active');
                context.relList.style.display = 'none';
                this.modalForm.removeEventListener('click', this.plugins.anchor._closeRelMenu);
                this.plugins.anchor._closeRelMenu = null;
            }.bind(this, contextAnchor, target);
    
            this.modalForm.addEventListener('click', this.plugins.anchor._closeRelMenu);
        }
    },

    onClick_relButton: function (contextAnchor, e) {
        this.plugins.anchor.toggleRelList.call(this, contextAnchor, !this.util.hasClass(e.target, 'active'));
    },

    onClick_relList: function (contextAnchor, e) {
        const target = e.target;
        const cmd = target.getAttribute('data-command');
        if (!cmd) return;
        
        const current = contextAnchor.currentRel;
        const checked = this.util.toggleClass(target, 'se-checked');
        const index = current.indexOf(cmd);
        if (checked) {
            if (index === -1) current.push(cmd);
        } else {
            if (index > -1) current.splice(index, 1);
        }

        contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = current.join(' ');
    },

    setRel: function (contextAnchor, relAttr) {
        const relListEl = contextAnchor.relList;
        const rels = contextAnchor.currentRel = !relAttr ? [] : relAttr.split(' ');
        if (!relListEl) return;

        const checkedRel = relListEl.querySelectorAll('button');
        for (let i = 0, len = checkedRel.length, cmd; i < len; i++) {
            cmd = checkedRel[i].getAttribute('data-command');
            if (rels.indexOf(cmd) > -1) {
                this.util.addClass(checkedRel[i], 'se-checked');
            } else {
                this.util.removeClass(checkedRel[i], 'se-checked');
            }
        }

        contextAnchor.relPreview.title = contextAnchor.relPreview.textContent = rels.join(' ');
    },

    createHeaderList: function (contextAnchor, contextList, urlValue) {
        const headers = this.util.getListChildren(this.context.element.wysiwyg, function(current) {
            return /h[1-6]/i.test(current.nodeName);
        });
        if (headers.length === 0) return;

        const valueRegExp = new this._w.RegExp('^' + urlValue.replace(/^#/, ''), 'i');
        const list = [];
        let html = '';
        for(let i = 0, len = headers.length, h; i < len; i++) {
            h = headers[i];
            if (!valueRegExp.test(h.textContent)) continue;
            list.push(h);
            html += '<li class="se-select-item" data-index="' + i + '">' + h.textContent + '</li>';
        }

        if (list.length === 0) {
            this.plugins.selectMenu.close.call(this, contextList);
        } else {
            this.plugins.selectMenu.createList(contextList, list, html);
            this.plugins.selectMenu.open.call(this, contextList, this.plugins.anchor._setMenuListPosition.bind(this, contextAnchor));
        }
    },

    _setMenuListPosition: function (contextAnchor, list) {
        list.style.top = (contextAnchor.urlInput.offsetHeight + 1) + 'px';
    },

    onKeyDownUrlInput: function (contextList, e) {
        const keyCode = e.keyCode;
        switch (keyCode) {
            case 38: // up
                e.preventDefault();
                e.stopPropagation();
                this.plugins.selectMenu.moveItem.call(this, contextList, -1);
                break;
            case 40: // down
                e.preventDefault();
                e.stopPropagation();
                this.plugins.selectMenu.moveItem.call(this, contextList, 1);
                break;
            case 13: // enter
                if (contextList.index > -1) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(contextList, null));
                }
                break;
        }
    },

    setHeaderBookmark: function (header) {
        const contextAnchor = this.context.anchor.callerContext;
        const id = header.id || 'h_' + this._w.Math.random().toString().replace(/.+\./, '');
        header.id = id;
        contextAnchor.urlInput.value = '#' + id;

        if (!contextAnchor.anchorText.value.trim() || !contextAnchor._change) {
            contextAnchor.anchorText.value = header.textContent;
        }
        
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, contextAnchor.urlInput.value);
        this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
        this.context.anchor.callerContext.urlInput.focus();
    },

    onChangeAnchorText: function (contextAnchor, e) {
        contextAnchor._change = !!e.target.value.trim();
    },

    onChangeUrlInput: function (contextAnchor, e) {
        const value = e.target.value.trim();
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, value);

        if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, value);
        else this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
    },

    onFocusUrlInput: function (contextAnchor, contextLink) {
        const value = contextAnchor.urlInput.value;
        if (this.plugins.anchor.selfPathBookmark.call(this, value)) this.plugins.anchor.createHeaderList.call(this, contextAnchor, contextLink, value);
    },

    onBlurUrlInput: function (contextList) {
        this.plugins.selectMenu.close.call(this, contextList);
    },

    setLinkPreview: function (context, value) {
        const preview = context.preview;
        const protocol = this.options.linkProtocol;
        const noPrefix = this.options.linkNoPrefix;
        const reservedProtocol  = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(value);
        const sameProtocol = !protocol ? false : this._w.RegExp('^' + value.substr(0, protocol.length)).test(protocol);
        value = context.linkValue = preview.textContent = !value ? '' : noPrefix ? value : (protocol && !reservedProtocol && !sameProtocol) ? protocol + value : reservedProtocol ? value : /^www\./.test(value) ? 'http://' + value : this.context.anchor.host + (/^\//.test(value) ? '' : '/') + value;

        if (this.plugins.anchor.selfPathBookmark.call(this, value)) {
            context.bookmark.style.display = 'block';
            this.util.addClass(context.bookmarkButton, 'active');
        } else {
            context.bookmark.style.display = 'none';
            this.util.removeClass(context.bookmarkButton, 'active');
        }

        if (!this.plugins.anchor.selfPathBookmark.call(this, value) && context.downloadCheck.checked) {
            context.download.style.display = 'block';
        } else {
            context.download.style.display = 'none';
        }
    },

    setCtx: function (anchor, contextAnchor) {
        if (!anchor) return;
        contextAnchor.linkAnchor = anchor;
        contextAnchor.linkValue = anchor.href;
        contextAnchor.currentRel = anchor.rel.split(" ");
    },

    updateAnchor: function (anchor, url, alt, contextAnchor, notText) {
        // download
        if (!this.plugins.anchor.selfPathBookmark.call(this, url) && contextAnchor.downloadCheck.checked) {
            anchor.setAttribute('download', alt || url);
        } else {
            anchor.removeAttribute('download');
        }

        // new window
        if (contextAnchor.newWindowCheck.checked) anchor.target = '_blank';
        else anchor.removeAttribute('target');
        
        // rel
        const rel = contextAnchor.currentRel.join(' ');
        if (!rel) anchor.removeAttribute('rel');
        else anchor.rel = rel;

        // est url, alt
        anchor.href = url;
        anchor.setAttribute('alt', alt);
        if (notText) {
            if (anchor.children.length === 0) anchor.textContent = '';
        } else {
            anchor.textContent = alt;
        }
    },

    createAnchor: function (contextAnchor, notText) {
        if (contextAnchor.linkValue.length === 0) return null;
        
        const url = contextAnchor.linkValue;
        const anchor = contextAnchor.anchorText;
        const anchorText = anchor.value.length === 0 ? url : anchor.value;

        const oA = contextAnchor.linkAnchor || this.util.createElement('A');
        this.plugins.anchor.updateAnchor.call(this, oA, url, anchorText, contextAnchor, notText);

        contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.anchorText.value = '';

        return oA;
    },

    onClick_bookmarkButton: function (contextAnchor) {
        let url = contextAnchor.urlInput.value;
        if (this.plugins.anchor.selfPathBookmark.call(this, url)) {
            url = url.substr(1);
            contextAnchor.bookmark.style.display = 'none';
            this.util.removeClass(contextAnchor.bookmarkButton, 'active');
            this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
        } else {
            url = '#' + url;
            contextAnchor.bookmark.style.display = 'block';
            this.util.addClass(contextAnchor.bookmarkButton, 'active');
            contextAnchor.downloadCheck.checked = false;
            contextAnchor.download.style.display = 'none';
            this.plugins.anchor.createHeaderList.call(this, contextAnchor, this.context.selectMenu.callerContext, url);
        }

        contextAnchor.urlInput.value = url;
        this.plugins.anchor.setLinkPreview.call(this, contextAnchor, url);
        contextAnchor.urlInput.focus();
    },

    onChange_newWindowCheck: function (contextAnchor, e) {
        if (typeof contextAnchor.linkDefaultRel.check_new_window !== 'string') return;
        if (e.target.checked) {
            this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
        } else {
            this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_new_window));
        }
    },

    onChange_downloadCheck: function (contextAnchor, e) {
        if (e.target.checked) {
            contextAnchor.download.style.display = 'block';
            contextAnchor.bookmark.style.display = 'none';
            this.util.removeClass(contextAnchor.bookmarkButton, 'active');
            contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = contextAnchor.urlInput.value.replace(/^\#+/, '');
            if (typeof contextAnchor.linkDefaultRel.check_bookmark === 'string') {
                this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relMerge.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
            }
        } else {
            contextAnchor.download.style.display = 'none';
            if (typeof contextAnchor.linkDefaultRel.check_bookmark === 'string') {
                this.plugins.anchor.setRel.call(this, contextAnchor, this.plugins.anchor._relDelete.call(this, contextAnchor, contextAnchor.linkDefaultRel.check_bookmark));
            }
        }
    },

    _relMerge: function (contextAnchor, relAttr) {
        const current = contextAnchor.currentRel;
        if (!relAttr) return current.join(' ');
        
        if (/^only\:/.test(relAttr)) {
            relAttr = relAttr.replace(/^only\:/, '').trim();
            contextAnchor.currentRel = relAttr.split(' ');
            return relAttr;
        }

        const rels = relAttr.split(' ');
        for (let i = 0, len = rels.length, index; i < len; i++) {
            index = current.indexOf(rels[i]);
            if (index === -1) current.push(rels[i]);
        }

        return current.join(' ');
    },

    _relDelete: function (contextAnchor, relAttr) {
        if (!relAttr) return contextAnchor.currentRel.join(' ');
        if (/^only\:/.test(relAttr)) relAttr = relAttr.replace(/^only\:/, '').trim();

        const rels = contextAnchor.currentRel.join(' ').replace(this._w.RegExp(relAttr + '\\s*'), '');
        contextAnchor.currentRel = rels.split(' ');
        return rels;
    },

    init: function (contextAnchor) {
        contextAnchor.linkAnchor = null;
        contextAnchor.linkValue = contextAnchor.preview.textContent = contextAnchor.urlInput.value = '';
        contextAnchor.anchorText.value = '';
        contextAnchor.newWindowCheck.checked = false;
        contextAnchor.downloadCheck.checked = false;
        contextAnchor._change = false;
        this.plugins.anchor.setRel.call(this, contextAnchor, contextAnchor.defaultRel);
        if (contextAnchor.relList) {
            this.plugins.anchor.toggleRelList.call(this, contextAnchor, false);
        }
        this.context.anchor.callerContext = null;
        this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/_colorPicker.js":
/*!********************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/_colorPicker.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2018 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'colorPicker',
    /**
     * @description Constructor
     * @param {Object} core Core object 
     */
    add: function (core) {
        const context = core.context;
        context.colorPicker = {
            colorListHTML: '',
            _colorInput: '',
            _defaultColor: '#000',
            _styleProperty: 'color',
            _currentColor: '',
            _colorList: []
        };

        /** set submenu */
        context.colorPicker.colorListHTML = this.createColorList(core, this._makeColorList);
    },

    /**
     * @description Create color list
     * @param {Object} core Core object 
     * @param {Function} makeColor this._makeColorList
     * @returns {String} HTML string
     */
    createColorList: function (core, makeColor) {
        const option = core.options;
        const lang = core.lang;
        const colorList = !option.colorList || option.colorList.length === 0 ?
            [
                '#ff0000', '#ff5e00', '#ffe400', '#abf200', '#00d8ff', '#0055ff', '#6600ff', '#ff00dd', '#000000',
                '#ffd8d8', '#fae0d4', '#faf4c0', '#e4f7ba', '#d4f4fa', '#d9e5ff', '#e8d9ff', '#ffd9fa', '#f1f1f1',
                '#ffa7a7', '#ffc19e', '#faed7d', '#cef279', '#b2ebf4', '#b2ccff', '#d1b2ff', '#ffb2f5', '#bdbdbd',
                '#f15f5f', '#f29661', '#e5d85c', '#bce55c', '#5cd1e5', '#6699ff', '#a366ff', '#f261df', '#8c8c8c',
                '#980000', '#993800', '#998a00', '#6b9900', '#008299', '#003399', '#3d0099', '#990085', '#353535',
                '#670000', '#662500', '#665c00', '#476600', '#005766', '#002266', '#290066', '#660058', '#222222'
            ] : option.colorList;

        let colorArr = [];
        let list = '<div class="se-list-inner">';
            for (let i = 0, len = colorList.length, color; i < len; i++) {
                color = colorList[i];
                if (!color) continue;
                
                if (typeof color === 'string') {
                    colorArr.push(color);
                    if (i < len - 1) continue;
                }
                if (colorArr.length > 0) {
                    list += '<div class="se-selector-color">' + makeColor(colorArr) + '</div>';
                    colorArr = [];
                }
                if (typeof color === 'object') {
                    list += '<div class="se-selector-color">' + makeColor(color) + '</div>';
                }
            }
            list += '' +
            '<form class="se-form-group">' +
                '<input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/>' +
                '<button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + lang.dialogBox.submitButton + '">' +
                    core.icons.checked +
                '</button>' +
                '<button type="button" class="se-btn _se_color_picker_remove" title="' + lang.toolbar.removeFormat + '">' +
                    core.icons.erase +
                '</button>' +
            '</form>' +
            '</div>';

        return list;
    },

    /**
     * @description Internal function used by this.createColorList
     * @param {Array} colorList Color list
     * @private
     */
    _makeColorList: function (colorList) {
        let list = '';

        list += '<ul class="se-color-pallet">';
        for (let i = 0, len = colorList.length, color; i < len; i++) {
            color = colorList[i];
            if (typeof color === 'string') {
                list += '<li>' +
                            '<button type="button" data-value="' + color + '" title="' + color + '" style="background-color:' + color + ';"></button>' +
                        '</li>';
            }
        }
        list += '</ul>';

        return list;
    },
    
    /**
     * @description Displays or resets the currently selected color at color list.
     * @param {Node} node Current Selected node
     * @param {String|null} color Color value
     */
    init: function (node, color) {
        const colorPicker = this.plugins.colorPicker;
        let fillColor = color ? color : colorPicker.getColorInNode.call(this, node) || this.context.colorPicker._defaultColor;
        fillColor = colorPicker.isHexColor(fillColor) ? fillColor : colorPicker.rgb2hex(fillColor) || fillColor;

        const colorList = this.context.colorPicker._colorList;
        if (colorList) {
            for (let i = 0, len = colorList.length; i < len; i++) {
                if (fillColor.toLowerCase() === colorList[i].getAttribute('data-value').toLowerCase()) {
                    this.util.addClass(colorList[i], 'active');
                } else {
                    this.util.removeClass(colorList[i], 'active');
                }
            }
        }

        colorPicker.setInputText.call(this, colorPicker.colorName2hex.call(this, fillColor));
    },

    /**
     * @description Store color values
     * @param {String} hexColorStr Hax color value
     */
    setCurrentColor: function (hexColorStr) {
        this.context.colorPicker._currentColor = hexColorStr;
        this.context.colorPicker._colorInput.style.borderColor = hexColorStr;
    },

    /**
     * @description Set color at input element
     * @param {String} hexColorStr Hax color value
     */
    setInputText: function (hexColorStr) {
        hexColorStr = /^#/.test(hexColorStr) ? hexColorStr : '#' + hexColorStr;
        this.context.colorPicker._colorInput.value = hexColorStr;
        this.plugins.colorPicker.setCurrentColor.call(this, hexColorStr);
    },

    /**
     * @description Gets color value at color property of node
     * @param {Node} node Selected node 
     * @returns {String}
     */
    getColorInNode: function (node) {
        let findColor = '';
        const styleProperty = this.context.colorPicker._styleProperty;

        while (node && !this.util.isWysiwygDiv(node) && findColor.length === 0) {
            if (node.nodeType === 1 && node.style[styleProperty]) findColor = node.style[styleProperty];
            node = node.parentNode;
        }

        return findColor;
    },

    /**
     * @description Function to check hex format color
     * @param {String} str Color value
     */
    isHexColor: function (str) {
        return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(str);
    },

    /**
     * @description Function to convert hex format to a rgb color
     * @param {String} rgb RGB color format
     * @returns {String}
     */
    rgb2hex: function (rgb) {
        const rgbMatch = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

        return (rgbMatch && rgbMatch.length === 4) ? "#" +
            ("0" + parseInt(rgbMatch[1],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgbMatch[2],10).toString(16)).slice(-2) +
            ("0" + parseInt(rgbMatch[3],10).toString(16)).slice(-2) : '';
    },

    /**
     * @description Converts color values of other formats to hex color values and returns.
     * @param {String} colorName Color value
     * @returns {String}
     */
    colorName2hex: function (colorName) {
        if (/^#/.test(colorName)) return colorName;
        var temp = this.util.createElement('div');
        temp.style.display = 'none';
        temp.style.color = colorName;
        var colors = this._w.getComputedStyle(this._d.body.appendChild(temp)).color.match(/\d+/g).map(function (a) { return parseInt(a,10); });
        this.util.removeItem(temp);
        return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/_selectMenu.js":
/*!*******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/_selectMenu.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2018 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'selectMenu',
    add: function (core) {
        core.context.selectMenu = {
            caller: {},
            callerContext: null
        };
    },

    setForm: function () {
        return '<div class="se-select-list"></div>';
    },

    createList: function (listContext, items, html) {
        listContext.form.innerHTML = '<ul>' + html + '</ul>';
        listContext.items = items;
        listContext.menus = listContext.form.querySelectorAll('li');
    },

    initEvent: function (pluginName, forms) {
        const form = forms.querySelector('.se-select-list');
        const context = this.context.selectMenu.caller[pluginName] = {
            form: form,
            items: [],
            menus: [],
            index: -1,
            item: null,
            clickMethod: null,
            callerName: pluginName
        };

        form.addEventListener('mousedown', this.plugins.selectMenu.onMousedown_list);
        form.addEventListener('mousemove', this.plugins.selectMenu.onMouseMove_list.bind(this, context));
        form.addEventListener('click', this.plugins.selectMenu.onClick_list.bind(this, context));
    },

    onMousedown_list: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },

    onMouseMove_list: function (context, e) {
        this.util.addClass(context.form, '__se_select-menu-mouse-move');
        const index = e.target.getAttribute('data-index');
        if (!index) return;
        context.index = index * 1;
    },

    onClick_list: function (context, e) {
        const index = e.target.getAttribute('data-index');
        if (!index) return;
        context.clickMethod.call(this, context.items[index]);
    },

    moveItem: function (listContext, num) {
        this.util.removeClass(listContext.form, '__se_select-menu-mouse-move');
        num = listContext.index + num;
        const menus = listContext.menus;
        const len = menus.length;
        const selectIndex = listContext.index = num >= len ? 0 : num < 0 ? len - 1 : num;
        
        for (let i = 0; i < len; i++) {
            if (i === selectIndex) {
                this.util.addClass(menus[i], 'active');
            } else {
                this.util.removeClass(menus[i], 'active');
            }
        }

        listContext.item = listContext.items[selectIndex];
    },

    getItem: function (listContext, index) {
        index = (!index || index < 0) ? listContext.index : index;
        return listContext.items[index];
    },

    on: function (callerName, clickMethod) {
        const listContext = this.context.selectMenu.caller[callerName];
        this.context.selectMenu.callerContext = listContext;
        listContext.clickMethod = clickMethod;
        listContext.callerName = callerName;
    },

    open: function (listContext, positionHandler) {
        const form = listContext.form;
        form.style.visibility = 'hidden';
        form.style.display = 'block';
        positionHandler(form);
        form.style.visibility = '';
    },

    close: function (listContext) {
        listContext.form.style.display = 'none';
        listContext.items = [];
        listContext.menus = [];
        listContext.index = -1;
        listContext.item = null;
    },

    init: function (listContext) {
        if (!listContext) return;
        listContext.items = [];
        listContext.menus = [];
        listContext.index = -1;
        listContext.item = null;
        listContext.callerName = '';
        this.context.selectMenu.callerContext = null;
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/component.js ***!
  \*****************************************************************/
/***/ (function(module) {

/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


(function (global, factory) {
    if ( true && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_MODULES a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const component = {
        name: 'component',
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function (cover, className) {
            const container = this.util.createElement('DIV');
            container.className = 'se-component ' + className;
            container.setAttribute('contenteditable', false);
            container.appendChild(cover);
    
            return container;
        },

        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function (element) {
            const cover = this.util.createElement('FIGURE');
            cover.appendChild(element);
    
            return cover;
        },

        /**
         * @description Return HTML string of caption(FIGCAPTION) element
         * @returns {String}
         */
        create_caption: function () {
            const caption = this.util.createElement('FIGCAPTION');
            caption.setAttribute('contenteditable', true);
            caption.innerHTML = '<div>' + this.lang.dialogBox.caption + '</div>';
            return caption;
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_MODULES) {
            Object.defineProperty(window, 'SUNEDITOR_MODULES', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_MODULES, 'component', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: component
        });
    }

    return component;
}));

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/dialog.js":
/*!**************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/dialog.js ***!
  \**************************************************************/
/***/ (function(module) {

/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


(function (global, factory) {
    if ( true && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_MODULES a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const dialog = {
        name: 'dialog',
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function (core) {
            const context = core.context;
            context.dialog = {
                kind: '',
                updateModal: false,
                _closeSignal: false
            };

            /** dialog */
            let dialog_div = core.util.createElement('DIV');
            dialog_div.className = 'se-dialog sun-editor-common';

            let dialog_back = core.util.createElement('DIV');
            dialog_back.className = 'se-dialog-back';
            dialog_back.style.display = 'none';

            let dialog_area = core.util.createElement('DIV');
            dialog_area.className = 'se-dialog-inner';
            dialog_area.style.display = 'none';

            dialog_div.appendChild(dialog_back);
            dialog_div.appendChild(dialog_area);

            context.dialog.modalArea = dialog_div;
            context.dialog.back = dialog_back;
            context.dialog.modal = dialog_area;

            /** add event listeners */
            context.dialog.modal.addEventListener('mousedown', this._onMouseDown_dialog.bind(core));
            context.dialog.modal.addEventListener('click', this._onClick_dialog.bind(core));
            
            /** append html */
            context.element.relative.appendChild(dialog_div);
            
            /** empty memory */
            dialog_div = null, dialog_back = null, dialog_area = null;
        },

        /**
         * @description Event to control the behavior of closing the dialog
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_dialog: function (e) {
            if (/se-dialog-inner/.test(e.target.className)) {
                this.context.dialog._closeSignal = true;
            } else {
                this.context.dialog._closeSignal = false;
            }
        },

        /**
         * @description Event to close the window when the outside area of the dialog or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_dialog: function (e) {
            if (/close/.test(e.target.getAttribute('data-command')) || this.context.dialog._closeSignal) {
                this.plugins.dialog.close.call(this);
            }
        },

        /**
         * @description Open a Dialog plugin
         * @param {String} kind Dialog plugin name
         * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
         */
        open: function (kind, update)  {
            if (this.modalForm) return false;
            if (this.plugins.dialog._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.dialog._bindClose);
                this.plugins.dialog._bindClose = null;
            }

            this.plugins.dialog._bindClose = function (e) {
                if (!/27/.test(e.keyCode)) return;
                this.plugins.dialog.close.call(this);
            }.bind(this);
            this._d.addEventListener('keydown', this.plugins.dialog._bindClose);

            this.context.dialog.updateModal = update;

            if (this.options.popupDisplay === 'full') {
                this.context.dialog.modalArea.style.position = 'fixed';
            } else {
                this.context.dialog.modalArea.style.position = 'absolute';
            }

            this.context.dialog.kind = kind;
            this.modalForm = this.context[kind].modal;
            const focusElement = this.context[kind].focusElement;

            if (typeof this.plugins[kind].on === 'function') this.plugins[kind].on.call(this, update);

            this.context.dialog.modalArea.style.display = 'block';
            this.context.dialog.back.style.display = 'block';
            this.context.dialog.modal.style.display = 'block';
            this.modalForm.style.display = 'block';

            if (focusElement) focusElement.focus();
        },

        _bindClose: null,
        
        /**
         * @description Close a Dialog plugin
         * The plugin's "init" method is called.
         */
        close: function () {
            if (this.plugins.dialog._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.dialog._bindClose);
                this.plugins.dialog._bindClose = null;
            }

            const kind = this.context.dialog.kind;
            this.modalForm.style.display = 'none';
            this.context.dialog.back.style.display = 'none';
            this.context.dialog.modalArea.style.display = 'none';
            this.context.dialog.updateModal = false;
            if (typeof this.plugins[kind].init === 'function') this.plugins[kind].init.call(this);
            this.context.dialog.kind = '';
            this.modalForm = null;
            this.focus();
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_MODULES) {
            Object.defineProperty(window, 'SUNEDITOR_MODULES', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_MODULES, 'dialog', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: dialog
        });
    }

    return dialog;
}));

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/fileBrowser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/fileBrowser.js ***!
  \*******************************************************************/
/***/ (function(module) {

/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


(function (global, factory) {
    if ( true && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_MODULES a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const fileBrowser = {
        name: 'fileBrowser',
        _xmlHttp: null,
        _loading: null,

        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function (core) {
            const context = core.context;
            context.fileBrowser = {
                _closeSignal: false,
                area: null,
                header: null,
                tagArea: null,
                body: null,
                list: null,
                tagElements: null,
                items: [],
                selectedTags: [],
                selectorHandler: null,
                contextPlugin: '',
                columnSize: 4
            };

            /** fileBrowser */
            let browser_div = core.util.createElement('DIV');
            browser_div.className = 'se-file-browser sun-editor-common';

            let back = core.util.createElement('DIV');
            back.className = 'se-file-browser-back';

            let content = core.util.createElement('DIV');
            content.className = 'se-file-browser-inner';
            content.innerHTML = this.set_browser(core);

            browser_div.appendChild(back);
            browser_div.appendChild(content);
            this._loading = browser_div.querySelector('.se-loading-box');

            context.fileBrowser.area = browser_div;
            context.fileBrowser.header = content.querySelector('.se-file-browser-header');
            context.fileBrowser.titleArea = content.querySelector('.se-file-browser-title');
            context.fileBrowser.tagArea = content.querySelector('.se-file-browser-tags');
            context.fileBrowser.body = content.querySelector('.se-file-browser-body');
            context.fileBrowser.list = content.querySelector('.se-file-browser-list');

            /** add event listeners */
            context.fileBrowser.tagArea.addEventListener('click', this.onClickTag.bind(core));
            context.fileBrowser.list.addEventListener('click', this.onClickFile.bind(core));
            content.addEventListener('mousedown', this._onMouseDown_browser.bind(core));
            content.addEventListener('click', this._onClick_browser.bind(core));
            
            /** append html */
            context.element.relative.appendChild(browser_div);
            
            /** empty memory */
            browser_div = null, back = null, content = null;
        },

        set_browser: function (core) {
            const lang = core.lang;

            return '<div class="se-file-browser-content">' +
                    '<div class="se-file-browser-header">' +
                        '<button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" aria-label="Close" title="' + lang.dialogBox.close + '">' +
                        core.icons.cancel +
                        '</button>' +
                        '<span class="se-file-browser-title"></span>' +
                        '<div class="se-file-browser-tags"></div>' +
                    '</div>' +
                    '<div class="se-file-browser-body">' +
                        '<div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div>' +
                        '<div class="se-file-browser-list"></div>' +
                    '</div>' +
                '</div>';
        },

        /**
         * @description Event to control the behavior of closing the browser
         * @param {MouseEvent} e Event object
         * @private
         */
        _onMouseDown_browser: function (e) {
            if (/se-file-browser-inner/.test(e.target.className)) {
                this.context.fileBrowser._closeSignal = true;
            } else {
                this.context.fileBrowser._closeSignal = false;
            }
        },

        /**
         * @description Event to close the window when the outside area of the browser or close button is click
         * @param {MouseEvent} e Event object
         * @private
         */
        _onClick_browser: function (e) {
            e.stopPropagation();

            if (/close/.test(e.target.getAttribute('data-command')) || this.context.fileBrowser._closeSignal) {
                this.plugins.fileBrowser.close.call(this);
            }
        },

        /**
         * @description Open a file browser plugin
         * @param {String} pluginName Plugin name using the file browser
         * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
         */
        open: function (pluginName, selectorHandler)  {
            if (this.plugins.fileBrowser._bindClose) {
                this._d.removeEventListener('keydown', this.plugins.fileBrowser._bindClose);
                this.plugins.fileBrowser._bindClose = null;
            }

            this.plugins.fileBrowser._bindClose = function (e) {
                if (!/27/.test(e.keyCode)) return;
                this.plugins.fileBrowser.close.call(this);
            }.bind(this);
            this._d.addEventListener('keydown', this.plugins.fileBrowser._bindClose);

            const fileBrowserContext = this.context.fileBrowser;
            fileBrowserContext.contextPlugin = pluginName;
            fileBrowserContext.selectorHandler = selectorHandler;
            
            const pluginContext = this.context[pluginName];
            const listClassName = pluginContext.listClass;
            if (!this.util.hasClass(fileBrowserContext.list, listClassName)) {
                fileBrowserContext.list.className = 'se-file-browser-list ' + listClassName;
            }

            if (this.options.popupDisplay === 'full') {
                fileBrowserContext.area.style.position = 'fixed';
            } else {
                fileBrowserContext.area.style.position = 'absolute';
            }
            
            fileBrowserContext.titleArea.textContent = pluginContext.title;
            fileBrowserContext.area.style.display = 'block';

            this.plugins.fileBrowser._drawFileList.call(this, this.context[pluginName].url, this.context[pluginName].header);
        },

        _bindClose: null,
        
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function () {
            const fileBrowserPlugin = this.plugins.fileBrowser;

            if (fileBrowserPlugin._xmlHttp) {
                fileBrowserPlugin._xmlHttp.abort();
            }

            if (fileBrowserPlugin._bindClose) {
                this._d.removeEventListener('keydown', fileBrowserPlugin._bindClose);
                fileBrowserPlugin._bindClose = null;
            }

            const fileBrowserContext = this.context.fileBrowser;
            fileBrowserContext.area.style.display = 'none';
            fileBrowserContext.selectorHandler = null;
            fileBrowserContext.selectedTags = [];
            fileBrowserContext.items = [];
            fileBrowserContext.list.innerHTML = fileBrowserContext.tagArea.innerHTML = fileBrowserContext.titleArea.textContent = '';

            if (typeof this.plugins[fileBrowserContext.contextPlugin].init === 'function') this.plugins[fileBrowserContext.contextPlugin].init.call(this);
            fileBrowserContext.contextPlugin = '';
        },

        /**
         * @description Show file browser loading box
         */
        showBrowserLoading: function () {
            this._loading.style.display = 'block';
        },

        /**
         * @description Close file browser loading box
         */
        closeBrowserLoading: function () {
            this._loading.style.display = 'none';
        },

        _drawFileList: function (url, browserHeader) {
            const fileBrowserPlugin = this.plugins.fileBrowser;

            const xmlHttp = fileBrowserPlugin._xmlHttp = this.util.getXMLHttpRequest();
            xmlHttp.onreadystatechange = fileBrowserPlugin._callBackGet.bind(this, xmlHttp);
            xmlHttp.open('get', url, true);
            if(browserHeader !== null && typeof browserHeader === 'object' && this._w.Object.keys(browserHeader).length > 0){
                for(let key in browserHeader){
                    xmlHttp.setRequestHeader(key, browserHeader[key]);
                }
            }
            xmlHttp.send(null);

            this.plugins.fileBrowser.showBrowserLoading();
        },

        _callBackGet: function (xmlHttp) {
            if (xmlHttp.readyState === 4) {
                this.plugins.fileBrowser._xmlHttp = null;
                if (xmlHttp.status === 200) {
                    try {
                        const res = JSON.parse(xmlHttp.responseText);
                        if (res.result.length > 0) {
                            this.plugins.fileBrowser._drawListItem.call(this, res.result, true);
                        } else if (res.nullMessage) {
                            this.context.fileBrowser.list.innerHTML = res.nullMessage;
                        }
                    } catch (e) {
                        throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + e.message + '"');
                    } finally {
                        this.plugins.fileBrowser.closeBrowserLoading();
                        this.context.fileBrowser.body.style.maxHeight = (this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50) + 'px';
                    }
                } else { // exception
                    this.plugins.fileBrowser.closeBrowserLoading();
                    if (xmlHttp.status !== 0) {
                        const res = !xmlHttp.responseText ? xmlHttp : JSON.parse(xmlHttp.responseText);
                        const err = '[SUNEDITOR.fileBrowser.get.serverException] status: ' + xmlHttp.status + ', response: ' + (res.errorMessage || xmlHttp.responseText);
                        throw Error(err);
                    }
                }
            }
        },

        _drawListItem: function (items, update) {
            const fileBrowserContext = this.context.fileBrowser;
            const pluginContext = this.context[fileBrowserContext.contextPlugin];

            const _tags = [];
            const len = items.length;
            const columnSize = pluginContext.columnSize || fileBrowserContext.columnSize;
            const splitSize = columnSize <= 1 ? 1 : (Math.round(len/columnSize) || 1);
            const drawItemHandler = pluginContext.itemTemplateHandler;
            
            let tagsHTML = '';
            let listHTML = '<div class="se-file-item-column">';
            let columns = 1;
            for (let i = 0, item, tags; i < len; i++) {
                item = items[i];
                tags = !item.tag ? [] : typeof item.tag === 'string' ? item.tag.split(',') : item.tag;
                tags = item.tag = tags.map(function (v) { return v.trim(); });
                listHTML += drawItemHandler(item);

                if ((i + 1) % splitSize === 0 && columns < columnSize && (i + 1) < len) {
                    columns++;
                    listHTML += '</div><div class="se-file-item-column">';
                }
                
                if (update && tags.length > 0) {
                    for (let t = 0, tLen = tags.length, tag; t < tLen; t++) {
                        tag = tags[t];
                        if (tag && _tags.indexOf(tag) === -1) {
                            _tags.push(tag);
                            tagsHTML += '<a title="' + tag + '">' + tag + '</a>';
                        }
                    }
                }
            }
            listHTML += '</div>';

            fileBrowserContext.list.innerHTML = listHTML;

            if (update) {
                fileBrowserContext.items = items;
                fileBrowserContext.tagArea.innerHTML = tagsHTML;
                fileBrowserContext.tagElements = fileBrowserContext.tagArea.querySelectorAll('A');
            }
        },

        onClickTag: function (e) {
            const target = e.target;
            if (!this.util.isAnchor(target)) return;

            const tagName = target.textContent;
            const fileBrowserPlugin = this.plugins.fileBrowser;
            const fileBrowserContext = this.context.fileBrowser;

            const selectTag = fileBrowserContext.tagArea.querySelector('a[title="' + tagName + '"]');
            const selectedTags = fileBrowserContext.selectedTags;
            const sTagIndex = selectedTags.indexOf(tagName);

            if (sTagIndex > -1){
                selectedTags.splice(sTagIndex, 1);
                this.util.removeClass(selectTag, 'on');
            } else {
                selectedTags.push(tagName);
                this.util.addClass(selectTag, 'on');
            }

            fileBrowserPlugin._drawListItem.call(this,
                selectedTags.length === 0 ?
                fileBrowserContext.items :
                fileBrowserContext.items.filter(function (item) {
                    return item.tag.some(function (tag) {
                        return selectedTags.indexOf(tag) > -1;
                    });
                }), false);
        },

        onClickFile: function (e) {
            e.preventDefault();
            e.stopPropagation();

            const fileBrowserContext = this.context.fileBrowser;
            const listEl = fileBrowserContext.list;
            let target = e.target;
            let command = null;

            if (target === listEl) return;

            while (listEl !== target.parentNode) {
                command = target.getAttribute('data-command');
                if (command) break;
                target = target.parentNode;
            }

            if (!command) return;

            const handler = (fileBrowserContext.selectorHandler || this.context[fileBrowserContext.contextPlugin].selectorHandler);
            this.plugins.fileBrowser.close.call(this);
            handler(target);
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_MODULES) {
            Object.defineProperty(window, 'SUNEDITOR_MODULES', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_MODULES, 'fileBrowser', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: fileBrowser
        });
    }

    return fileBrowser;
}));

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/fileManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/fileManager.js ***!
  \*******************************************************************/
/***/ (function(module) {

/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


(function (global, factory) {
    if ( true && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_MODULES a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const fileManager = {
        name: 'fileManager',
        _xmlHttp: null,

        _checkMediaComponent: function (tag) {
            if (/IMG/i.test(tag)) {
                return !/FIGURE/i.test(tag.parentElement.nodeName) || !/FIGURE/i.test(tag.parentElement.parentElement.nodeName);
            }
            return true;
        },

        /**
         * @description Upload the file to the server.
         * @param {String} uploadUrl Upload server url
         * @param {Object|null} uploadHeader Request header
         * @param {FormData} formData FormData in body
         * @param {Function|null} callBack Success call back function
         * @param {Function|null} errorCallBack Error call back function
         * @example this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
         */
        upload: function (uploadUrl, uploadHeader, formData, callBack, errorCallBack) {
            this.showLoading();
            const filePlugin = this.plugins.fileManager;
            const xmlHttp = filePlugin._xmlHttp = this.util.getXMLHttpRequest();

            xmlHttp.onreadystatechange = filePlugin._callBackUpload.bind(this, xmlHttp, callBack, errorCallBack);
            xmlHttp.open('post', uploadUrl, true);
            if(uploadHeader !== null && typeof uploadHeader === 'object' && this._w.Object.keys(uploadHeader).length > 0){
                for(let key in uploadHeader){
                    xmlHttp.setRequestHeader(key, uploadHeader[key]);
                }
            }
            xmlHttp.send(formData);
        },

        _callBackUpload: function (xmlHttp, callBack, errorCallBack) {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    try {
                        callBack(xmlHttp);
                    } catch (e) {
                        throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + e.message + '"');
                    } finally {
                        this.closeLoading();
                    }
                } else { // exception
                    this.closeLoading();
                    const res = !xmlHttp.responseText ? xmlHttp : JSON.parse(xmlHttp.responseText);
                    if (typeof errorCallBack !== 'function' || errorCallBack('', res, this)) {
                        const err = '[SUNEDITOR.fileManager.upload.serverException] status: ' + xmlHttp.status + ', response: ' + (res.errorMessage || xmlHttp.responseText);
                        this.functions.noticeOpen(err);
                        throw Error(err);
                    }
                }
            }
        },
        
        /**
         * @description Checke the file's information and modify the tag that does not fit the format.
         * @param {String} pluginName Plugin name
         * @param {Array} tagNames Tag array to check
         * @param {Function|null} uploadEventHandler Event handler to process updated file info after checking (used in "setInfo")
         * @param {Function} modifyHandler A function to modify a tag that does not fit the format (Argument value: Tag element)
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * const modifyHandler = function (tag) {
         *      imagePlugin.onModifyMode.call(this, tag, null);
         *      imagePlugin.openModify.call(this, true);
         *      imagePlugin.update_image.call(this, true, false, true);
         *  }.bind(this);
         *  this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
         */
        checkInfo: function (pluginName, tagNames, uploadEventHandler, modifyHandler, resizing) {
            let tags = [];
            for (let i = 0, len = tagNames.length; i < len; i++) {
                tags = tags.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(tagNames[i] + ':not([data-se-embed="true"])')));
            }

            const fileManagerPlugin = this.plugins.fileManager;
            const context = this.context[pluginName];
            const infoList = context._infoList;
            const setFileInfo = fileManagerPlugin.setInfo.bind(this);

            if (tags.length === infoList.length) {
                // reset
                if (this._componentsInfoReset) {
                    for (let i = 0, len = tags.length; i < len; i++) {
                        setFileInfo(pluginName, tags[i], uploadEventHandler, null, resizing);
                    }
                    return ;
                } else {
                    let infoUpdate = false;
                    for (let i = 0, len = infoList.length, info; i < len; i++) {
                        info = infoList[i];
                        if (tags.filter(function (t) { return info.src === t.src && info.index.toString() === t.getAttribute('data-index'); }).length === 0) {
                            infoUpdate = true;
                            break;
                        }
                    }
                    // pass
                    if (!infoUpdate) return;
                }
            }

            // check
            const _resize_plugin = resizing ? this.context.resizing._resize_plugin : '';
            if (resizing) this.context.resizing._resize_plugin = pluginName;
            const currentTags = [];
            const infoIndex = [];
            for (let i = 0, len = infoList.length; i < len; i++) {
                infoIndex[i] = infoList[i].index;
            }
            
            for (let i = 0, len = tags.length, tag; i < len; i++) {
                tag = tags[i];
                if (!this.util.getParentElement(tag, this.util.isMediaComponent) || !fileManagerPlugin._checkMediaComponent(tag)) {
                    currentTags.push(context._infoIndex);
                    modifyHandler(tag);
                } else if (!tag.getAttribute('data-index') || infoIndex.indexOf(tag.getAttribute('data-index') * 1) < 0) {
                    currentTags.push(context._infoIndex);
                    tag.removeAttribute('data-index');
                    setFileInfo(pluginName, tag, uploadEventHandler, null, resizing);
                } else {
                    currentTags.push(tag.getAttribute('data-index') * 1);
                }
            }

            for (let i = 0, dataIndex; i < infoList.length; i++) {
                dataIndex = infoList[i].index;
                if (currentTags.indexOf(dataIndex) > -1) continue;

                infoList.splice(i, 1);
                if (typeof uploadEventHandler === 'function') uploadEventHandler(null, dataIndex, 'delete', null, 0, this);
                i--;
            }

            if (resizing) this.context.resizing._resize_plugin = _resize_plugin;
        },

        /**
         * @description Create info object of file and add it to "_infoList" (this.context[pluginName]._infoList[])
         * @param {String} pluginName Plugin name 
         * @param {Element} element 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         * @param {Object|null} file 
         * @param {Boolean} resizing True if the plugin is using a resizing module
         * @example 
         * uploadCallBack {.. file = { name: fileList[i].name, size: fileList[i].size };
         * this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
         */
        setInfo: function (pluginName, element, uploadEventHandler, file, resizing) {
            const _resize_plugin = resizing ? this.context.resizing._resize_plugin : '';
            if (resizing) this.context.resizing._resize_plugin = pluginName;
    
            const plguin = this.plugins[pluginName];
            const context = this.context[pluginName];
            const infoList = context._infoList;
            let dataIndex = element.getAttribute('data-index');
            let info = null;
            let state = '';

            if (!file) {
                file = {
                    'name': element.getAttribute('data-file-name') || (typeof element.src === 'string' ? element.src.split('/').pop() : ''),
                    'size': element.getAttribute('data-file-size') || 0
                };
            }
    
            // create
            if (!dataIndex || this._componentsInfoInit) {
                state = 'create';
                dataIndex = context._infoIndex++;
    
                element.setAttribute('data-index', dataIndex);
                element.setAttribute('data-file-name', file.name);
                element.setAttribute('data-file-size', file.size);
    
                info = {
                    src: element.src,
                    index: dataIndex * 1,
                    name: file.name,
                    size: file.size
                };
    
                infoList.push(info);
            } else { // update
                state = 'update';
                dataIndex *= 1;
    
                for (let i = 0, len = infoList.length; i < len; i++) {
                    if (dataIndex === infoList[i].index) {
                        info = infoList[i];
                        break;
                    }
                }
    
                if (!info) {
                    dataIndex = context._infoIndex++;
                    info = { index: dataIndex };
                    infoList.push(info);
                }
    
                info.src = element.src;
                info.name = element.getAttribute("data-file-name");
                info.size = element.getAttribute("data-file-size") * 1;
            }
    
            // method bind
            info.element = element;
            info.delete = plguin.destroy.bind(this, element);
            info.select = function (element) {
                element.scrollIntoView(true);
                this._w.setTimeout(plguin.select.bind(this, element));
            }.bind(this, element);
    
            if (resizing) {
                if (!element.getAttribute('origin-size') && element.naturalWidth) {
                    element.setAttribute('origin-size', element.naturalWidth + ',' + element.naturalHeight);
                }
    
                if (!element.getAttribute('data-origin')) {
                    const container = this.util.getParentElement(element, this.util.isMediaComponent);
                    const cover = this.util.getParentElement(element, 'FIGURE');
        
                    const w = this.plugins.resizing._module_getSizeX.call(this, context, element, cover, container);
                    const h = this.plugins.resizing._module_getSizeY.call(this, context, element, cover, container);
                    element.setAttribute('data-origin', w + ',' + h);
                    element.setAttribute('data-size', w + ',' + h);
                }
        
                if (!element.style.width) {
                    const size = (element.getAttribute('data-size') || element.getAttribute('data-origin') || '').split(',');
                    plguin.onModifyMode.call(this, element, null);
                    plguin.applySize.call(this, size[0], size[1]);
                }
        
                this.context.resizing._resize_plugin = _resize_plugin;
            }

            if (typeof uploadEventHandler === 'function') uploadEventHandler(element, dataIndex, state, info, --context._uploadFileLength < 0 ? 0 : context._uploadFileLength, this);
        },

        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function (pluginName, index, uploadEventHandler) {
            if (index >= 0) {
                const infoList = this.context[pluginName]._infoList;
    
                for (let i = 0, len = infoList.length; i < len; i++) {
                    if (index === infoList[i].index) {
                        infoList.splice(i, 1);
                        if (typeof uploadEventHandler === 'function') uploadEventHandler(null, index, 'delete', null, 0, this);
                        return;
                    }
                }
            }
        },

        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        resetInfo: function (pluginName, uploadEventHandler) {
            const context = this.context[pluginName];

            if (typeof uploadEventHandler === 'function') {
                const infoList = context._infoList;
                for (let i = 0, len = infoList.length; i < len; i++) {
                    uploadEventHandler(null, infoList[i].index, 'delete', null, 0, this);
                }
            }

            context._infoList = [];
            context._infoIndex = 0;
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_MODULES) {
            Object.defineProperty(window, 'SUNEDITOR_MODULES', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_MODULES, 'fileManager', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: fileManager
        });
    }

    return fileManager;
}));

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/modules/resizing.js":
/*!****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/modules/resizing.js ***!
  \****************************************************************/
/***/ (function(module) {

/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


(function (global, factory) {
    if ( true && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_MODULES a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const resizing = {
        name: 'resizing',
        /**
         * @description Constructor
         * Require context properties when resizing module
            inputX: Element,
            inputY: Element,
            _container: null,
            _cover: null,
            _element: null,
            _element_w: 1,
            _element_h: 1,
            _element_l: 0,
            _element_t: 0,
            _defaultSizeX: 'auto',
            _defaultSizeY: 'auto',
            _origin_w: core.options.imageWidth === 'auto' ? '' : core.options.imageWidth,
            _origin_h: core.options.imageHeight === 'auto' ? '' : core.options.imageHeight,
            _proportionChecked: true,
            // -- select function --
            _resizing: core.options.imageResizing,
            _resizeDotHide: !core.options.imageHeightShow,
            _rotation: core.options.imageRotation,
            _onlyPercentage: core.options.imageSizeOnlyPercentage,
            _ratio: false,
            _ratioX: 1,
            _ratioY: 1
            _captionShow: true,
            // -- when used caption (_captionShow: true) --
            _caption: null,
            _captionChecked: false,
            captionCheckEl: null,
         * @param {Object} core Core object 
         */
        add: function (core) {
            const icons = core.icons;
            const context = core.context;
            context.resizing = {
                _resizeClientX: 0,
                _resizeClientY: 0,
                _resize_plugin: '',
                _resize_w: 0,
                _resize_h: 0,
                _origin_w: 0,
                _origin_h: 0,
                _rotateVertical: false,
                _resize_direction: '',
                _move_path: null,
                _isChange: false,
                alignIcons: {
                    basic: icons.align_justify,
                    left: icons.align_left,
                    right: icons.align_right,
                    center: icons.align_center
                }
            };
    
            /** resize controller, button */
            let resize_div_container = this.setController_resize(core);
            context.resizing.resizeContainer = resize_div_container;
    
            context.resizing.resizeDiv = resize_div_container.querySelector('.se-modal-resize');
            context.resizing.resizeDot = resize_div_container.querySelector('.se-resize-dot');
            context.resizing.resizeDisplay = resize_div_container.querySelector('.se-resize-display');
    
            let resize_button = this.setController_button(core);
            context.resizing.resizeButton = resize_button;
    
            let resize_handles = context.resizing.resizeHandles = context.resizing.resizeDot.querySelectorAll('span');
            context.resizing.resizeButtonGroup = resize_button.querySelector('._se_resizing_btn_group');
            context.resizing.rotationButtons = resize_button.querySelectorAll('._se_resizing_btn_group ._se_rotation');
            context.resizing.percentageButtons = resize_button.querySelectorAll('._se_resizing_btn_group ._se_percentage');
    
            context.resizing.alignMenu = resize_button.querySelector('.se-resizing-align-list');
            context.resizing.alignMenuList = context.resizing.alignMenu.querySelectorAll('button');
    
            context.resizing.alignButton = resize_button.querySelector('._se_resizing_align_button');
            context.resizing.autoSizeButton = resize_button.querySelector('._se_resizing_btn_group ._se_auto_size');
            context.resizing.captionButton = resize_button.querySelector('._se_resizing_caption_button');
    
            /** add event listeners */
            resize_div_container.addEventListener('mousedown', function (e) { e.preventDefault(); });
            resize_handles[0].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[1].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[2].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[3].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[4].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[5].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[6].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_handles[7].addEventListener('mousedown', this.onMouseDown_resize_handle.bind(core));
            resize_button.addEventListener('click', this.onClick_resizeButton.bind(core));
    
            /** append html */
            context.element.relative.appendChild(resize_div_container);
            context.element.relative.appendChild(resize_button);
    
            /** empty memory */
            resize_div_container = null, resize_button = null, resize_handles = null;
        },
    
        /** resize controller, button (image, iframe, video) */
        setController_resize: function (core) {
            const resize_container = core.util.createElement('DIV');
            
            resize_container.className = 'se-controller se-resizing-container';
            resize_container.style.display = 'none';
            resize_container.innerHTML = '' +
                '<div class="se-modal-resize"></div>' +
                '<div class="se-resize-dot">' +
                    '<span class="tl"></span>' +
                    '<span class="tr"></span>' +
                    '<span class="bl"></span>' +
                    '<span class="br"></span>' +
                    '<span class="lw"></span>' +
                    '<span class="th"></span>' +
                    '<span class="rw"></span>' +
                    '<span class="bh"></span>' +
                    '<div class="se-resize-display"></div>' +
                '</div>';
    
            return resize_container;
        },
    
        setController_button: function (core) {
            const lang = core.lang;
            const icons = core.icons;
            const resize_button = core.util.createElement("DIV");
    
            resize_button.className = "se-controller se-controller-resizing";
            resize_button.innerHTML = '' +
                '<div class="se-arrow se-arrow-up"></div>' +
                '<div class="se-btn-group _se_resizing_btn_group">' +
                    '<button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage">' +
                        '<span>100%</span>' +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize100 + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage">' +
                        '<span>75%</span>' +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize75 + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage">' +
                        '<span>50%</span>' +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.resize50 + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' +
                        icons.auto_size +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.autoSize + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' +
                        icons.rotate_left +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.rotateLeft + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' +
                        icons.rotate_right +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.rotateRight + '</span></span>' +
                    '</button>' +
                '</div>' +
                '<div class="se-btn-group" style="padding-top: 0;">' +
                    '<button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' +
                        icons.mirror_horizontal +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mirrorHorizontal + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' +
                        icons.mirror_vertical +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mirrorVertical + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' +
                        icons.align_justify +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.toolbar.align + '</span></span>' +
                    '</button>' +
                    '<div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list">' +
                        '<div class="se-list-inner">' +
                            '<ul class="se-list-basic">' +
                                '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' +
                                    icons.align_justify +
                                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.basic + '</span></span>' +
                                '</button></li>' +
                                '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' +
                                    icons.align_left +
                                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.left + '</span></span>' +
                                '</button></li>' +
                                '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' +
                                    icons.align_center +
                                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.center + '</span></span>' +
                                '</button></li>' +
                                '<li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' +
                                    icons.align_right +
                                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.right + '</span></span>' +
                                '</button></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                    '<button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' +
                        icons.caption +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.caption + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="revert" class="se-btn se-tooltip">' +
                        icons.revert +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.dialogBox.revertButton + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="update" class="se-btn se-tooltip">' +
                        icons.modify +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.edit + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="delete" class="se-btn se-tooltip">' +
                        icons.delete +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' +
                    '</button>' +
                '</div>';
    
            return resize_button;
        },
    
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function (contextPlugin, element, cover, container) {
            if (!element) element = contextPlugin._element;
            if (!cover) cover = contextPlugin._cover;
            if (!container) container = contextPlugin._container;
    
            if (!element) return '';
    
            return !/%$/.test(element.style.width) ? element.style.width : ((container && this.util.getNumber(container.style.width, 2)) || 100) + '%';
        },
    
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function (contextPlugin, element, cover, container) {
            if (!element) element = contextPlugin._element;
            if (!cover) cover = contextPlugin._cover;
            if (!container) container = contextPlugin._container;
    
            if (!container || !cover) return (element && element.style.height) || '';
    
            return this.util.getNumber(cover.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? cover.style.height : (!/%$/.test(element.style.height) || !/%$/.test(element.style.width) ? element.style.height : ((container && this.util.getNumber(container.style.height, 2)) || 100) + '%');
        },

        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function (contextPlugin, pluginObj) {
            const percentageRotation = contextPlugin._onlyPercentage && this.context.resizing._rotateVertical;
            contextPlugin.proportion.checked = contextPlugin._proportionChecked = contextPlugin._element.getAttribute('data-proportion') !== 'false';
    
            let x = percentageRotation ? '' : this.plugins.resizing._module_getSizeX.call(this, contextPlugin);
            if (x === contextPlugin._defaultSizeX) x = '';
            if (contextPlugin._onlyPercentage) x = this.util.getNumber(x, 2);
            contextPlugin.inputX.value = x;
            pluginObj.setInputSize.call(this, 'x');
            
            if (!contextPlugin._onlyPercentage) {
                let y = percentageRotation ? '' : this.plugins.resizing._module_getSizeY.call(this, contextPlugin);
                if (y === contextPlugin._defaultSizeY) y = '';
                if (contextPlugin._onlyPercentage) y = this.util.getNumber(y, 2);
                contextPlugin.inputY.value = y;
            }
            
            contextPlugin.inputX.disabled = percentageRotation ? true : false;
            contextPlugin.inputY.disabled = percentageRotation ? true : false;
            contextPlugin.proportion.disabled = percentageRotation ? true : false;
    
            pluginObj.setRatio.call(this);
        },
    
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function (contextPlugin, xy) {
            if (contextPlugin._onlyPercentage) {
                if (xy === 'x' && contextPlugin.inputX.value > 100) contextPlugin.inputX.value = 100;
                return;
            }
    
            if (contextPlugin.proportion.checked && contextPlugin._ratio && /\d/.test(contextPlugin.inputX.value) && /\d/.test(contextPlugin.inputY.value)) {
                const xUnit = contextPlugin.inputX.value.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                const yUnit = contextPlugin.inputY.value.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
    
                if (xUnit !== yUnit) return;
    
                const dec = xUnit === '%' ? 2 : 0;
    
                if (xy === 'x') {
                    contextPlugin.inputY.value = this.util.getNumber(contextPlugin._ratioY * this.util.getNumber(contextPlugin.inputX.value, dec), dec) + yUnit;
                } else {
                    contextPlugin.inputX.value = this.util.getNumber(contextPlugin._ratioX * this.util.getNumber(contextPlugin.inputY.value, dec), dec) + xUnit;
                }
            }
        },
    
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function (contextPlugin) {
            const xValue = contextPlugin.inputX.value;
            const yValue = contextPlugin.inputY.value;
    
            if (contextPlugin.proportion.checked && /\d+/.test(xValue) && /\d+/.test(yValue)) {
                const xUnit = xValue.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
                const yUnit = yValue.replace(/\d+|\./g, '') || contextPlugin.sizeUnit;
    
                if (xUnit !== yUnit) {
                    contextPlugin._ratio = false;
                } else if (!contextPlugin._ratio) {
                    const x = this.util.getNumber(xValue, 0);
                    const y = this.util.getNumber(yValue, 0);
    
                    contextPlugin._ratio = true;
                    contextPlugin._ratioX = x / y;
                    contextPlugin._ratioY = y / x;
                }
            } else {
                contextPlugin._ratio = false;
            }
        },
    
        /**
         * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_sizeRevert: function (contextPlugin) {
            if (contextPlugin._onlyPercentage) {
                contextPlugin.inputX.value = contextPlugin._origin_w > 100 ? 100 : contextPlugin._origin_w;
            } else {
                contextPlugin.inputX.value = contextPlugin._origin_w;
                contextPlugin.inputY.value = contextPlugin._origin_h;
            }
        },
    
        /**
         * @description Save the size data (element.setAttribute("data-size"))
         * Used at the "setSize" method
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_saveCurrentSize: function (contextPlugin) {
            const x = this.plugins.resizing._module_getSizeX.call(this, contextPlugin);
            const y = this.plugins.resizing._module_getSizeY.call(this, contextPlugin);
            contextPlugin._element.setAttribute('data-size', x + ',' + y);
            if (!!contextPlugin._videoRatio) contextPlugin._videoRatio = y;
        },
    
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function (targetElement, plugin) {
            const contextResizing = this.context.resizing;
            const contextPlugin = this.context[plugin];
            contextResizing._resize_plugin = plugin;
    
            const resizeContainer = contextResizing.resizeContainer;
            const resizeDiv = contextResizing.resizeDiv;
            const offset = this.util.getOffset(targetElement, this.context.element.wysiwygFrame);
    
            const isVertical = contextResizing._rotateVertical = /^(90|270)$/.test(Math.abs(targetElement.getAttribute('data-rotate')).toString());
    
            const w = isVertical ? targetElement.offsetHeight : targetElement.offsetWidth;
            const h = isVertical ? targetElement.offsetWidth : targetElement.offsetHeight;
            const t = offset.top;
            const l = offset.left - this.context.element.wysiwygFrame.scrollLeft;
    
            resizeContainer.style.top = t + 'px';
            resizeContainer.style.left = l + 'px';
            resizeContainer.style.width = w + 'px';
            resizeContainer.style.height = h + 'px';
    
            resizeDiv.style.top = '0px';
            resizeDiv.style.left = '0px';
            resizeDiv.style.width =  w + 'px';
            resizeDiv.style.height =  h + 'px';
    
            let align = targetElement.getAttribute('data-align') || 'basic';
            align = align === 'none' ? 'basic' : align;
    
            // text
            const container = this.util.getParentElement(targetElement, this.util.isComponent);
            const cover = this.util.getParentElement(targetElement, 'FIGURE');
            const displayX = this.plugins.resizing._module_getSizeX.call(this, contextPlugin, targetElement, cover, container) || 'auto';
            const displayY = contextPlugin._onlyPercentage && plugin === 'image' ? '' : ', ' + (this.plugins.resizing._module_getSizeY.call(this, contextPlugin, targetElement, cover, container) || 'auto');
            this.util.changeTxt(contextResizing.resizeDisplay, this.lang.dialogBox[align] + ' (' + displayX + displayY + ')');
    
            // resizing display
            contextResizing.resizeButtonGroup.style.display = contextPlugin._resizing ? '' : 'none';
            const resizeDotShow = contextPlugin._resizing && !contextPlugin._resizeDotHide && !contextPlugin._onlyPercentage ? 'flex' : 'none';
            const resizeHandles = contextResizing.resizeHandles;
            for (let i = 0, len = resizeHandles.length; i < len; i++) {
                resizeHandles[i].style.display = resizeDotShow;
            }
    
            if (contextPlugin._resizing) {
                const rotations = contextResizing.rotationButtons;
                rotations[0].style.display = rotations[1].style.display = contextPlugin._rotation ? '' : 'none';
            }
    
            // align icon
            if (contextPlugin._alignHide) {
                contextResizing.alignButton.style.display = 'none';
            } else {
                contextResizing.alignButton.style.display = '';
                const alignList = contextResizing.alignMenuList;
                this.util.changeElement(contextResizing.alignButton.firstElementChild, contextResizing.alignIcons[align]);
                for (let i = 0, len = alignList.length; i < len; i++) {
                    if (alignList[i].getAttribute('data-value') === align) this.util.addClass(alignList[i], 'on');
                    else this.util.removeClass(alignList[i], 'on');
                }
            }
    
            // percentage active
            const pButtons = contextResizing.percentageButtons;
            const value = /%$/.test(targetElement.style.width) && /%$/.test(container.style.width) ? (this.util.getNumber(container.style.width, 0) / 100) + '' : '' ;
            for (let i = 0, len = pButtons.length; i < len; i++) {
                if (pButtons[i].getAttribute('data-value') === value) {
                    this.util.addClass(pButtons[i], 'active');
                } else {
                    this.util.removeClass(pButtons[i], 'active');
                }
            }
    
            // caption display, active
            if (!contextPlugin._captionShow) {
                contextResizing.captionButton.style.display = 'none';
            } else {
                contextResizing.captionButton.style.display = '';
                if (this.util.getChildElement(targetElement.parentNode, 'figcaption')) {
                    this.util.addClass(contextResizing.captionButton, 'active');
                    contextPlugin._captionChecked = true;
                } else {
                    this.util.removeClass(contextResizing.captionButton, 'active');
                    contextPlugin._captionChecked = false;
                }
            }

            resizeContainer.style.display = 'block';

            const addOffset = {left: 0, top: 50};
            if (this.options.iframe) {
                addOffset.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft;
                addOffset.top -= this.context.element.wysiwygFrame.parentElement.offsetTop;
            }

            this.setControllerPosition(contextResizing.resizeButton, resizeContainer, 'bottom', addOffset);
            this.controllersOn(resizeContainer, contextResizing.resizeButton, this.util.setDisabledButtons.bind(this.util, false, this.resizingDisabledButtons), targetElement, plugin);
            this.util.setDisabledButtons(true, this.resizingDisabledButtons);
    
            contextResizing._resize_w = w;
            contextResizing._resize_h = h;
    
            const originSize = (targetElement.getAttribute('origin-size') || '').split(',');
            contextResizing._origin_w = originSize[0] || targetElement.naturalWidth;
            contextResizing._origin_h = originSize[1] || targetElement.naturalHeight;
    
            return {
                w: w,
                h: h,
                t: t,
                l: l
            };
        },
    
        _closeAlignMenu: null,

        /**
         * @description Open align submenu of module
         */
        openAlignMenu: function () {
            const alignButton = this.context.resizing.alignButton;
            this.util.addClass(alignButton, 'on');
            this.context.resizing.alignMenu.style.top = (alignButton.offsetTop + alignButton.offsetHeight) + 'px';
            this.context.resizing.alignMenu.style.left = (alignButton.offsetLeft - alignButton.offsetWidth / 2) + 'px';
            this.context.resizing.alignMenu.style.display = 'block';
    
            this.plugins.resizing._closeAlignMenu = function () {
                this.util.removeClass(this.context.resizing.alignButton, 'on');
                this.context.resizing.alignMenu.style.display = 'none';
                this.removeDocEvent('click', this.plugins.resizing._closeAlignMenu);
                this.plugins.resizing._closeAlignMenu = null;
            }.bind(this);
    
            this.addDocEvent('click', this.plugins.resizing._closeAlignMenu);
        },
    
        /**
         * @description Click event of resizing toolbar
         * Performs the action of the clicked toolbar button.
         * @param {MouseEvent} e Event object
         */
        onClick_resizeButton: function (e) {
            e.stopPropagation();
    
            const target = e.target;
            const command = target.getAttribute('data-command') || target.parentNode.getAttribute('data-command');
    
            if (!command) return;
    
            const value = target.getAttribute('data-value') || target.parentNode.getAttribute('data-value');
    
            const pluginName = this.context.resizing._resize_plugin;
            const currentContext = this.context[pluginName];
            const contextEl = currentContext._element;
            const currentModule = this.plugins[pluginName];
    
            e.preventDefault();
    
            if (typeof this.plugins.resizing._closeAlignMenu === 'function') {
                this.plugins.resizing._closeAlignMenu();
                if (command === 'onalign') return;
            }
    
            switch (command) {
                case 'auto':
                    this.plugins.resizing.resetTransform.call(this, contextEl);
                    currentModule.setAutoSize.call(this);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'percent':
                    let percentY = this.plugins.resizing._module_getSizeY.call(this, currentContext);
                    if (this.context.resizing._rotateVertical) {
                        const percentage = contextEl.getAttribute('data-percentage');
                        if (percentage) percentY = percentage.split(',')[1];
                    }
    
                    this.plugins.resizing.resetTransform.call(this, contextEl);
                    currentModule.setPercentSize.call(this, (value * 100), (this.util.getNumber(percentY, 0) === null || !/%$/.test(percentY)) ? '' : percentY);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'mirror':
                    const r = contextEl.getAttribute('data-rotate') || '0';
                    let x = contextEl.getAttribute('data-rotateX') || '';
                    let y = contextEl.getAttribute('data-rotateY') || '';
        
                    if ((value === 'h' && !this.context.resizing._rotateVertical) || (value === 'v' && this.context.resizing._rotateVertical)) {
                        y = y ? '' : '180';
                    } else {
                        x = x ? '' : '180';
                    }
        
                    contextEl.setAttribute('data-rotateX', x);
                    contextEl.setAttribute('data-rotateY', y);
        
                    this.plugins.resizing._setTransForm(contextEl, r, x, y);
                    break;
                case 'rotate':
                    const contextResizing = this.context.resizing;
                    const slope = (contextEl.getAttribute('data-rotate') * 1) + (value * 1);
                    const deg = this._w.Math.abs(slope) >= 360 ? 0 : slope;
        
                    contextEl.setAttribute('data-rotate', deg);
                    contextResizing._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(deg).toString());
                    this.plugins.resizing.setTransformSize.call(this, contextEl, null, null);
        
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'onalign':
                    this.plugins.resizing.openAlignMenu.call(this);
                    return;
                case 'align':
                    const alignValue = value === 'basic' ? 'none' : value;
                    currentModule.setAlign.call(this, alignValue, null, null, null);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'caption':
                    const caption = !currentContext._captionChecked;
                    currentModule.openModify.call(this, true);
                    currentContext._captionChecked = currentContext.captionCheckEl.checked = caption;
    
                    currentModule.update_image.call(this, false, false, false);
    
                    if (caption) {
                        const captionText = this.util.getChildElement(currentContext._caption, function (current) {
                            return current.nodeType === 3;
                        });
    
                        if (!captionText) {
                            currentContext._caption.focus();
                        } else {
                            this.setRange(captionText, 0, captionText, captionText.textContent.length);
                        }
    
                        this.controllersOff();
                    } else {
                        this.selectComponent(contextEl, pluginName);
                        currentModule.openModify.call(this, true);
                    }
    
                    break;
                case 'revert':
                    currentModule.setOriginSize.call(this);
                    this.selectComponent(contextEl, pluginName);
                    break;
                case 'update':
                    currentModule.openModify.call(this);
                    this.controllersOff();
                    break;
                case 'delete':
                    currentModule.destroy.call(this);
                    break;
            }
    
            // history stack
            this.history.push(false);
        },
    
        /**
         * @description Initialize the transform style (rotation) of the element.
         * @param {Element} element Target element
         */
        resetTransform: function (element) {
            const size = (element.getAttribute('data-size') || element.getAttribute('data-origin') || '').split(',');
            this.context.resizing._rotateVertical = false;
    
            element.style.maxWidth = '';
            element.style.transform = '';
            element.style.transformOrigin = '';
            element.setAttribute('data-rotate', '');
            element.setAttribute('data-rotateX', '');
            element.setAttribute('data-rotateY', '');
    
            this.plugins[this.context.resizing._resize_plugin].setSize.call(this, size[0] ? size[0] : 'auto', size[1] ? size[1] : '', true);
        },
    
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function (element, width, height) {
            let percentage = element.getAttribute('data-percentage');
            const isVertical = this.context.resizing._rotateVertical;
            const deg = element.getAttribute('data-rotate') * 1;
            let transOrigin = '';
    
            if (percentage && !isVertical) {
                percentage = percentage.split(',');
                if (percentage[0] === 'auto' && percentage[1] === 'auto') {
                    this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this);
                } else {
                    this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, percentage[0], percentage[1]);
                }
            } else {
                const cover = this.util.getParentElement(element, 'FIGURE');
        
                const offsetW = width || element.offsetWidth;
                const offsetH = height || element.offsetHeight;
                const w = (isVertical ? offsetH : offsetW) + 'px';
                const h = (isVertical ? offsetW : offsetH) + 'px';
        
                this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this);
                this.plugins[this.context.resizing._resize_plugin].setSize.call(this, offsetW + 'px', offsetH + 'px', true);
        
                cover.style.width = w;
                cover.style.height = (!!this.context[this.context.resizing._resize_plugin]._caption ? '' : h);
    
                if (isVertical) {
                    let transW = (offsetW/2) + 'px ' + (offsetW/2) + 'px 0';
                    let transH = (offsetH/2) + 'px ' + (offsetH/2) + 'px 0';
                    transOrigin = deg === 90 || deg === -270 ? transH : transW;
                }
            }
    
            element.style.transformOrigin = transOrigin;
            this.plugins.resizing._setTransForm(element, deg.toString(), element.getAttribute('data-rotateX') || '', element.getAttribute('data-rotateY') || '');
            
            if (isVertical) element.style.maxWidth = 'none';
            else element.style.maxWidth = '';
    
            this.plugins.resizing.setCaptionPosition.call(this, element);
        },
    
        _setTransForm: function (element, r, x, y) {
            let width = (element.offsetWidth - element.offsetHeight) * (/-/.test(r) ? 1 : -1);
            let translate = '';
    
            if (/[1-9]/.test(r) && (x || y)) {
                translate = x ? 'Y' : 'X';
    
                switch (r) {
                    case '90':
                        translate = x && y ? 'X' : y ? translate : '';
                        break;
                    case '270':
                        width *= -1;
                        translate = x && y ? 'Y' : x ? translate : '';
                        break;
                    case '-90':
                        translate = x && y ? 'Y' : x ? translate : '';
                        break;
                    case '-270':
                        width *= -1;
                        translate = x && y ? 'X' : y ? translate : '';
                        break;
                    default:
                        translate = '';
                }
            }
    
            if (r % 180 === 0) {
                element.style.maxWidth = '';
            }
            
            element.style.transform = 'rotate(' + r + 'deg)' + (x ? ' rotateX(' + x + 'deg)' : '') + (y ? ' rotateY(' + y + 'deg)' : '') + (translate ? ' translate' + translate + '(' + width + 'px)' : '');
        },
    
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function (element) {
            const figcaption = this.util.getChildElement(this.util.getParentElement(element, 'FIGURE'), 'FIGCAPTION');
            if (figcaption) {
                figcaption.style.marginTop = (this.context.resizing._rotateVertical ? element.offsetWidth - element.offsetHeight : 0) + 'px';
            }
        },
    
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function (e) {
            e.stopPropagation();
            e.preventDefault();
            
            const contextResizing = this.context.resizing;
            const direction = contextResizing._resize_direction = e.target.classList[0];
    
            contextResizing._resizeClientX = e.clientX;
            contextResizing._resizeClientY = e.clientY;
            this.context.element.resizeBackground.style.display = 'block';
            contextResizing.resizeButton.style.display = 'none';
            contextResizing.resizeDiv.style.float = /l/.test(direction) ? 'right' : /r/.test(direction) ? 'left' : 'none';
    
            const closureFunc_bind = function closureFunc(e) {
                if (e.type === 'keydown' && e.keyCode !== 27) return;
    
                const change = contextResizing._isChange;
                contextResizing._isChange = false;
    
                this.removeDocEvent('mousemove', resizing_element_bind);
                this.removeDocEvent('mouseup', closureFunc_bind);
                this.removeDocEvent('keydown', closureFunc_bind);
                
                if (e.type === 'keydown') {
                    this.controllersOff();
                    this.context.element.resizeBackground.style.display = 'none';
                    this.plugins[this.context.resizing._resize_plugin].init.call(this);
                } else {
                    // element resize
                    this.plugins.resizing.cancel_controller_resize.call(this, direction);
                    // history stack
                    if (change) this.history.push(false);
                }
            }.bind(this);
    
            const resizing_element_bind = this.plugins.resizing.resizing_element.bind(this, contextResizing, direction, this.context[contextResizing._resize_plugin]);
            this.addDocEvent('mousemove', resizing_element_bind);
            this.addDocEvent('mouseup', closureFunc_bind);
            this.addDocEvent('keydown', closureFunc_bind);
        },
    
        /**
         * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
         * The size of the module's "div" is adjusted according to the mouse move event.
         * @param {Object} contextResizing "core.context.resizing" object (binding argument)
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
         * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
         * @param {MouseEvent} e Event object
         */
        resizing_element: function (contextResizing, direction, plugin, e) {
            const clientX = e.clientX;
            const clientY = e.clientY;
    
            let resultW = plugin._element_w;
            let resultH = plugin._element_h;
    
            const w = plugin._element_w + (/r/.test(direction) ? clientX - contextResizing._resizeClientX : contextResizing._resizeClientX - clientX);
            const h = plugin._element_h + (/b/.test(direction) ? clientY - contextResizing._resizeClientY : contextResizing._resizeClientY - clientY);
            const wh = ((plugin._element_h / plugin._element_w) * w);
    
            if (/t/.test(direction)) contextResizing.resizeDiv.style.top = (plugin._element_h - (/h/.test(direction) ? h : wh)) + 'px';
            if (/l/.test(direction)) contextResizing.resizeDiv.style.left = (plugin._element_w - w) + 'px';
    
            if (/r|l/.test(direction)) {
                contextResizing.resizeDiv.style.width = w + 'px';
                resultW = w;
            }
    
            if (/^(t|b)[^h]$/.test(direction)) {
                contextResizing.resizeDiv.style.height = wh + 'px';
                resultH = wh;
            }
            else if (/^(t|b)h$/.test(direction)) {
                contextResizing.resizeDiv.style.height = h + 'px';
                resultH = h;
            }
    
            contextResizing._resize_w = resultW;
            contextResizing._resize_h = resultH;
            this.util.changeTxt(contextResizing.resizeDisplay, this._w.Math.round(resultW) + ' x ' + this._w.Math.round(resultH));
            contextResizing._isChange = true;
        },
    
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function (direction) {
            const isVertical = this.context.resizing._rotateVertical;
            this.controllersOff();
            this.context.element.resizeBackground.style.display = 'none';
    
            let w = this._w.Math.round(isVertical ? this.context.resizing._resize_h : this.context.resizing._resize_w);
            let h = this._w.Math.round(isVertical ? this.context.resizing._resize_w : this.context.resizing._resize_h);
    
            if (!isVertical && !/%$/.test(w)) {
                const padding = 16;
                const limit = this.context.element.wysiwygFrame.clientWidth - (padding * 2) - 2;
                
                if (this.util.getNumber(w, 0) > limit) {
                    h = this._w.Math.round((h / w) * limit);
                    w = limit;
                }
            }
    
            const pluginName = this.context.resizing._resize_plugin;
            this.plugins[pluginName].setSize.call(this, w, h, false, direction);
            if (isVertical) this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, w, h);

            this.selectComponent(this.context[pluginName]._element, pluginName);
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_MODULES) {
            Object.defineProperty(window, 'SUNEDITOR_MODULES', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_MODULES, 'resizing', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: resizing
        });
    }

    return resizing;
}));

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/align.js":
/*!*************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/align.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'align',
    display: 'submenu',
    add: function (core, targetElement) {
        const icons = core.icons;
        const context = core.context;
        context.align = {
            targetButton: targetElement,
            _itemMenu: null,
            _alignList: null,
            currentAlign: '',
            defaultDir: core.options.rtl ? 'right' : 'left',
            icons: {
                justify: icons.align_justify,
                left: icons.align_left,
                right: icons.align_right,
                center: icons.align_center
            }
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let listUl = context.align._itemMenu = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));
        context.align._alignList = listUl.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function (core) {
        const lang = core.lang;
        const icons = core.icons;
        const listDiv = core.util.createElement('DIV');
        const alignItems = core.options.alignItems;

        let html = '';
        for (let i = 0, item, text; i < alignItems.length; i++) {
            item = alignItems[i];
            text = lang.toolbar['align' + item.charAt(0).toUpperCase() + item.slice(1)];
            html += '<li>' +
                '<button type="button" class="se-btn-list se-btn-align" data-value="' + item + '" title="' + text + '">' +
                    '<span class="se-list-icon">' + icons['align_' + item] + '</span>' + text +
                '</button>' +
            '</li>';
        }

        listDiv.className = 'se-submenu se-list-layer se-list-align';
        listDiv.innerHTML = '' +
            '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    html +
                '</ul>' +
            '</div>';

        return listDiv;
    },

    /**
     * @Override core
     */
    active: function (element) {
        const alignContext = this.context.align;
        const targetButton = alignContext.targetButton;
        const target = targetButton.firstElementChild;

        if (!element) {
            this.util.changeElement(target, alignContext.icons[alignContext.defaultDir]);
            targetButton.removeAttribute('data-focus');
        } else if (this.util.isFormatElement(element)) {
            const textAlign = element.style.textAlign;
            if (textAlign) {
                this.util.changeElement(target, alignContext.icons[textAlign] || alignContext.icons[alignContext.defaultDir]);
                targetButton.setAttribute('data-focus', textAlign);
                return true;
            }
        }

        return false;
    },

    /**
     * @Override submenu
     */
    on: function () {
        const alignContext = this.context.align;
        const alignList = alignContext._alignList;
        const currentAlign = alignContext.targetButton.getAttribute('data-focus') || alignContext.defaultDir;

        if (currentAlign !== alignContext.currentAlign) {
            for (let i = 0, len = alignList.length; i < len; i++) {
                if (currentAlign === alignList[i].getAttribute('data-value')) {
                    this.util.addClass(alignList[i], 'active');
                } else {
                    this.util.removeClass(alignList[i], 'active');
                }
            }

            alignContext.currentAlign = currentAlign;
        }
    },

    exchangeDir: function () {
        const dir = this.options.rtl ? 'right' : 'left';
        if (!this.context.align || this.context.align.defaultDir === dir) return;

        this.context.align.defaultDir = dir;
        let menu = this.context.align._itemMenu;
        let leftBtn = menu.querySelector('[data-value="left"]');
        let rightBtn = menu.querySelector('[data-value="right"]');
        if (leftBtn && rightBtn) {
            const lp = leftBtn.parentElement;
            const rp = rightBtn.parentElement;
            lp.appendChild(rightBtn);
            rp.appendChild(leftBtn);
        }
    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let value = null;

        while (!value && !/UL/i.test(target.tagName)) {
            value = target.getAttribute('data-value');
            target = target.parentNode;
        }

        if (!value) return;

        const defaultDir = this.context.align.defaultDir;
        const selectedFormsts = this.getSelectedElements();
        for (let i = 0, len = selectedFormsts.length; i < len; i++) {
            this.util.setStyle(selectedFormsts[i], 'textAlign', (value === defaultDir ? '' : value));
        }

        this.effectNode = null;
        this.submenuOff();
        this.focus();
        
        // history stack
        this.history.push(false);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/font.js":
/*!************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/font.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'font',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.font = {
            targetText: targetElement.querySelector('.txt'),
            targetTooltip: targetElement.parentNode.querySelector('.se-tooltip-text'),
            _fontList: null,
            currentFont: ''
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);

        /** add event listeners */
        listDiv.querySelector('.se-list-inner').addEventListener('click', this.pickup.bind(core));

        context.font._fontList = listDiv.querySelectorAll('ul li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer se-list-font-family';

        let font, text, i, len;
        let fontList = !option.font ?
            [
                'Arial',
                'Comic Sans MS',
                'Courier New',
                'Impact',
                'Georgia',
                'tahoma',
                'Trebuchet MS',
                'Verdana'
            ] : option.font;

        let list = '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    '<li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for (i = 0, len = fontList.length; i < len; i++) {
            font = fontList[i];
            text = font.split(',')[0];
            list += '<li><button type="button" class="se-btn-list" data-value="' + font + '" data-txt="' + text + '" title="' + text + '" style="font-family:' + font + ';">' + text + '</button></li>';
        }
        list += '</ul></div>';
        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override core
     */
    active: function (element) {
        const target = this.context.font.targetText;
        const tooltip = this.context.font.targetTooltip;

        if (!element) {
            const font = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
            this.util.changeTxt(target, font);
            this.util.changeTxt(tooltip, this.hasFocus ? this.lang.toolbar.font + (font ? ' (' + font + ')' : '') : font);
        } else if (element.style && element.style.fontFamily.length > 0) {
            const selectFont = element.style.fontFamily.replace(/["']/g,'');
            this.util.changeTxt(target, selectFont);
            this.util.changeTxt(tooltip, this.lang.toolbar.font + ' (' + selectFont + ')');
            return true;
        }

        return false;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const fontContext = this.context.font;
        const fontList = fontContext._fontList;
        const currentFont = fontContext.targetText.textContent;

        if (currentFont !== fontContext.currentFont) {
            for (let i = 0, len = fontList.length; i < len; i++) {
                if (currentFont === fontList[i].getAttribute('data-value')) {
                    this.util.addClass(fontList[i], 'active');
                } else {
                    this.util.removeClass(fontList[i], 'active');
                }
            }

            fontContext.currentFont = currentFont;
        }
    },

    pickup: function (e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;

        e.preventDefault();
        e.stopPropagation();

        const value = e.target.getAttribute('data-value');

        if (value) {
            const newNode = this.util.createElement('SPAN');
            newNode.style.fontFamily = value;
            this.nodeChange(newNode, ['font-family'], null, null);
        } else {
            this.nodeChange(null, ['font-family'], ['span'], true);
        }
        
        this.submenuOff();
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/fontColor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/fontColor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/_colorPicker */ "./node_modules/suneditor/src/plugins/modules/_colorPicker.js");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'fontColor',
    display: 'submenu',
    add: function (core, targetElement) {
        core.addModule([_modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__["default"]]);

        const context = core.context;
        context.fontColor = {
            previewEl: null,
            colorInput: null,
            colorList: null
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        context.fontColor.colorInput = listDiv.querySelector('._se_color_picker_input');

        /** add event listeners */
        context.fontColor.colorInput.addEventListener('keyup', this.onChangeInput.bind(core));
        listDiv.querySelector('._se_color_picker_submit').addEventListener('click', this.submit.bind(core));
        listDiv.querySelector('._se_color_picker_remove').addEventListener('click', this.remove.bind(core));
        listDiv.addEventListener('click', this.pickup.bind(core));
        context.fontColor.colorList = listDiv.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const colorArea = core.context.colorPicker.colorListHTML;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = colorArea;

        return listDiv;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const contextPicker = this.context.colorPicker;
        const contextFontColor = this.context.fontColor;

        contextPicker._colorInput = contextFontColor.colorInput;
        const color = this.wwComputedStyle.color;
        contextPicker._defaultColor = color ? this.plugins.colorPicker.isHexColor(color) ? color : this.plugins.colorPicker.rgb2hex(color) : "#333333";
        contextPicker._styleProperty = 'color';
        contextPicker._colorList = contextFontColor.colorList;
        
        this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
    },

     /**
     * @Override _colorPicker
     */
    onChangeInput: function (e) {
        this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
    },

    submit: function () {
        this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.plugins.fontColor.applyColor.call(this, e.target.getAttribute('data-value'));
    },

    remove: function () {
        this.nodeChange(null, ['color'], ['span'], true);
        this.submenuOff();
    },

    applyColor: function (color) {
        if (!color) return;

        const newNode = this.util.createElement('SPAN');
        newNode.style.color = color;
        this.nodeChange(newNode, ['color'], null, null);

        this.submenuOff();
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/fontSize.js":
/*!****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/fontSize.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'fontSize',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.fontSize = {
            targetText: targetElement.querySelector('.txt'),
            _sizeList: null,
            currentSize: ''
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));
        context.fontSize._sizeList = listUl.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer se-list-font-size';

        const sizeList = !option.fontSize ? [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72] : option.fontSize;

        let list = '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    '<li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for (let i = 0, unit = option.fontSizeUnit, len = sizeList.length, size; i < len; i++) {
            size = sizeList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + size + unit + '" title="' + size + unit + '" style="font-size:' + size + unit + ';">' + size + '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override core
     */
    active: function (element) {
        if (!element) {
            this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? (this.options.__defaultFontSize || this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
        } else if (element.style && element.style.fontSize.length > 0) {
            this.util.changeTxt(this.context.fontSize.targetText, element.style.fontSize);
            return true;
        }

        return false;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const fontSizeContext = this.context.fontSize;
        const sizeList = fontSizeContext._sizeList;
        const currentSize = fontSizeContext.targetText.textContent;

        if (currentSize !== fontSizeContext.currentSize) {
            for (let i = 0, len = sizeList.length; i < len; i++) {
                if (currentSize === sizeList[i].getAttribute('data-value')) {
                    this.util.addClass(sizeList[i], 'active');
                } else {
                    this.util.removeClass(sizeList[i], 'active');
                }
            }

            fontSizeContext.currentSize = currentSize;
        }
    },

    pickup: function (e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        
        e.preventDefault();
        e.stopPropagation();

        const value = e.target.getAttribute('data-value');

        if (value) {
            const newNode = this.util.createElement('SPAN');
            newNode.style.fontSize = value;
            this.nodeChange(newNode, ['font-size'], null, null);
        } else {
            this.nodeChange(null, ['font-size'], ['span'], true);
        }

        this.submenuOff();
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/formatBlock.js":
/*!*******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/formatBlock.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'formatBlock',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.formatBlock = {
            targetText: targetElement.querySelector('.txt'),
            targetTooltip: targetElement.parentNode.querySelector('.se-tooltip-text'),
            _formatList: null,
            currentFormat: ''
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);

        /** add event listeners */
        listDiv.querySelector('ul').addEventListener('click', this.pickUp.bind(core));
        context.formatBlock._formatList = listDiv.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const lang_toolbar = core.lang.toolbar;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';

        const defaultFormats = ['p', 'div', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        const formatList = !option.formats || option.formats.length === 0 ? defaultFormats : option.formats;

        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for (let i = 0, len = formatList.length, format, tagName, command, name, h, attrs, className; i < len; i++) {
            format = formatList[i];
            
            if (typeof format === 'string' && defaultFormats.indexOf(format) > -1) {
                tagName = format.toLowerCase();
                command = tagName === 'blockquote' ? 'range' : tagName === 'pre' ? 'free' : 'replace';
                h = /^h/.test(tagName) ? tagName.match(/\d+/)[0] : '';
                name = lang_toolbar['tag_' + (h ? 'h' : tagName)] + h;
                className = '';
                attrs = '';
            } else {
                tagName = format.tag.toLowerCase();
                command = format.command;
                name = format.name || tagName;
                className = format.class;
                attrs = className ? ' class="' + className + '"' : '';
            }

            list += '<li>' +
                '<button type="button" class="se-btn-list" data-command="' + command + '" data-value="' + tagName + '" data-class="' + className + '" title="' + name + '">' +
                    '<' + tagName + attrs + '>' + name + '</' + tagName + '>' +
                '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override core
     */
    active: function (element) {
        let formatTitle = this.lang.toolbar.formats;
        const target = this.context.formatBlock.targetText;

        if (!element) {
            this.util.changeTxt(target, formatTitle);
        } else if (this.util.isFormatElement(element)) {
            const formatContext = this.context.formatBlock;
            const formatList = formatContext._formatList;
            const nodeName = element.nodeName.toLowerCase();
            const className = (element.className.match(/(\s|^)__se__format__[^\s]+/) || [''])[0].trim();

            for (let i = 0, len = formatList.length, f; i < len; i++) {
                f = formatList[i];
                if (nodeName === f.getAttribute('data-value') && className === f.getAttribute('data-class')) {
                    formatTitle = f.title;
                    break;
                }
            }

            this.util.changeTxt(target, formatTitle);
            target.setAttribute('data-value', nodeName);
            target.setAttribute('data-class', className);

            return true;
        }

        return false;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const formatContext = this.context.formatBlock;
        const formatList = formatContext._formatList;
        const target = formatContext.targetText;
        const currentFormat = (target.getAttribute('data-value') || '') + (target.getAttribute('data-class') || '');

        if (currentFormat !== formatContext.currentFormat) {
            for (let i = 0, len = formatList.length, f; i < len; i++) {
                f = formatList[i];
                if (currentFormat === f.getAttribute('data-value') + f.getAttribute('data-class')) {
                    this.util.addClass(f, 'active');
                } else {
                    this.util.removeClass(f, 'active');
                }
            }

            formatContext.currentFormat = currentFormat;
        }
    },

    pickUp: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let command = null, value = null, tag = null, className = '';
        
        while (!command && !/UL/i.test(target.tagName)) {
            command = target.getAttribute('data-command');
            value = target.getAttribute('data-value');
            className = target.getAttribute('data-class');
            if (command) {
                tag = target.firstChild;
                break;
            }
            target = target.parentNode;
        }

        if (!command) return;

        // blockquote
        if (command === 'range') {
            const rangeElement = tag.cloneNode(false);
            this.applyRangeFormatElement(rangeElement);
        }
        // free, replace
        else {
            let range = this.getRange();
            let selectedFormsts = this.getSelectedElementsAndComponents(false);

            if (selectedFormsts.length === 0) {
                range = this.getRange_addLine(range, null);
                selectedFormsts = this.getSelectedElementsAndComponents(false);
                if (selectedFormsts.length === 0) return;
            }

            const startOffset = range.startOffset;
            const endOffset = range.endOffset;

            const util = this.util;
            let first = selectedFormsts[0];
            let last = selectedFormsts[selectedFormsts.length - 1];
            const firstPath = util.getNodePath(range.startContainer, first, null, null);
            const lastPath = util.getNodePath(range.endContainer, last, null, null);
            
            // remove selected list
            const rlist = this.detachList(selectedFormsts, false);
            if (rlist.sc) first = rlist.sc;
            if (rlist.ec) last = rlist.ec;

            // change format tag
            this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset);
            const modifiedFormsts = this.getSelectedElementsAndComponents(false);

            // free format
            if (command === 'free') {
                const len = modifiedFormsts.length - 1;
                let parentNode = modifiedFormsts[len].parentNode;
                let freeElement = tag.cloneNode(false);
                const focusElement = freeElement;
    
                for (let i = len, f, html, before, next, inner, isComp, first = true; i >= 0; i--) {
                    f = modifiedFormsts[i];
                    if (f === (!modifiedFormsts[i + 1] ? null : modifiedFormsts[i + 1].parentNode)) continue;
    
                    isComp = util.isComponent(f);
                    html = isComp ? '' : f.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, ' ');
                    before = util.getParentElement(f, function (current) {
                        return current.parentNode === parentNode;
                    });
    
                    if (parentNode !== f.parentNode || isComp) {
                        if (util.isFormatElement(parentNode)) {
                            parentNode.parentNode.insertBefore(freeElement, parentNode.nextSibling);
                            parentNode = parentNode.parentNode;
                        } else {
                            parentNode.insertBefore(freeElement, before ? before.nextSibling : null);
                            parentNode = f.parentNode;
                        }

                        next = freeElement.nextSibling;
                        if (next && freeElement.nodeName === next.nodeName && util.isSameAttributes(freeElement, next)) {
                            freeElement.innerHTML += '<BR>' + next.innerHTML;
                            util.removeItem(next);
                        }

                        freeElement = tag.cloneNode(false);
                        first = true;
                    }
    
                    inner = freeElement.innerHTML;
                    freeElement.innerHTML = ((first || !html || !inner || /<br>$/i.test(html)) ? html : html + '<BR>') + inner;

                    if (i === 0) {
                        parentNode.insertBefore(freeElement, f);
                        next = f.nextSibling;
                        if (next && freeElement.nodeName === next.nodeName && util.isSameAttributes(freeElement, next)) {
                            freeElement.innerHTML += '<BR>' + next.innerHTML;
                            util.removeItem(next);
                        }

                        const prev = freeElement.previousSibling;
                        if (prev && freeElement.nodeName === prev.nodeName && util.isSameAttributes(freeElement, prev)) {
                            prev.innerHTML += '<BR>' + freeElement.innerHTML;
                            util.removeItem(freeElement);
                        }
                    }

                    if (!isComp) util.removeItem(f);
                    if (!!html) first = false;
                }
    
                this.setRange(focusElement, 0, focusElement, 0);
            }
            // replace format
            else {
                for (let i = 0, len = modifiedFormsts.length, node, newFormat; i < len; i++) {
                    node = modifiedFormsts[i];
                    
                    if ((node.nodeName.toLowerCase() !== value.toLowerCase() || (node.className.match(/(\s|^)__se__format__[^\s]+/) || [''])[0].trim() !== className) && !util.isComponent(node)) {
                        newFormat = tag.cloneNode(false);
                        util.copyFormatAttributes(newFormat, node);
                        newFormat.innerHTML = node.innerHTML;
    
                        node.parentNode.replaceChild(newFormat, node);
                    }
    
                    if (i === 0) first = newFormat || node;
                    if (i === len - 1) last = newFormat || node;
                    newFormat = null;
                }
    
                this.setRange(util.getNodeFromPath(firstPath, first), startOffset, util.getNodeFromPath(lastPath, last), endOffset);
            }

            // history stack
            this.history.push(false);
        }

        this.submenuOff();
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/hiliteColor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/hiliteColor.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/_colorPicker */ "./node_modules/suneditor/src/plugins/modules/_colorPicker.js");
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'hiliteColor',
    display: 'submenu',
    add: function (core, targetElement) {
        core.addModule([_modules_colorPicker__WEBPACK_IMPORTED_MODULE_0__["default"]]);

        const context = core.context;
        context.hiliteColor = {
            previewEl: null,
            colorInput: null,
            colorList: null
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        context.hiliteColor.colorInput = listDiv.querySelector('._se_color_picker_input');

        /** add event listeners */
        context.hiliteColor.colorInput.addEventListener('keyup', this.onChangeInput.bind(core));
        listDiv.querySelector('._se_color_picker_submit').addEventListener('click', this.submit.bind(core));
        listDiv.querySelector('._se_color_picker_remove').addEventListener('click', this.remove.bind(core));
        listDiv.addEventListener('click', this.pickup.bind(core));

        context.hiliteColor.colorList = listDiv.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const colorArea = core.context.colorPicker.colorListHTML;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = colorArea;

        return listDiv;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const contextPicker = this.context.colorPicker;
        const contextHiliteColor = this.context.hiliteColor;

        contextPicker._colorInput = contextHiliteColor.colorInput;
        const color = this.wwComputedStyle.backgroundColor;
        contextPicker._defaultColor = color ? this.plugins.colorPicker.isHexColor(color) ? color : this.plugins.colorPicker.rgb2hex(color) : "#ffffff";
        contextPicker._styleProperty = 'backgroundColor';
        contextPicker._colorList = contextHiliteColor.colorList;
        
        this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
    },

     /**
     * @Override _colorPicker
     */
    onChangeInput: function (e) {
        this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
    },

    submit: function () {
        this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute('data-value'));
    },

    remove: function () {
        this.nodeChange(null, ['background-color'], ['span'], true);
        this.submenuOff();
    },

    applyColor: function (color) {
        if (!color) return;
        
        const newNode = this.util.createElement('SPAN');
        newNode.style.backgroundColor = color;
        this.nodeChange(newNode, ['background-color'], null, null);
        
        this.submenuOff();
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/horizontalRule.js":
/*!**********************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/horizontalRule.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'horizontalRule',
    display: 'submenu',
    add: function (core, targetElement) {
        core.context.horizontalRule = {
            currentHR: null,
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);

        /** add event listeners */
        listDiv.querySelector('ul').addEventListener('click', this.horizontalRulePick.bind(core));

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');
        const items = core.options.hrItems || [{name: lang.toolbar.hr_solid, class: '__se__solid'}, {name: lang.toolbar.hr_dashed, class: '__se__dashed'}, {name: lang.toolbar.hr_dotted, class: '__se__dotted'}];
        
        let list = '';
        for (let i = 0, len = items.length; i < len; i++) {
            list += '<li>' +
                '<button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + items[i].class + '" title="' + items[i].name + '">' +
                    '<hr' + (items[i].class ? ' class="' + items[i].class + '"' : '') + (items[i].style ? ' style="' + items[i].style + '"' : '') + '/>' +
                '</button>' +
            '</li>';
        }
        
        listDiv.className = 'se-submenu se-list-layer se-list-line';
        listDiv.innerHTML = '' +
            '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    list +
                '</ul>' +
            '</div>';

        return listDiv;
    },

    active: function (element) {
        if (!element) {
            if (this.util.hasClass(this.context.horizontalRule.currentHR, 'on')) {
                this.controllersOff();
            }
        } else if (/HR/i.test(element.nodeName)) {
            this.context.horizontalRule.currentHR = element;
            if (!this.util.hasClass(element, 'on')) {
                this.util.addClass(element, 'on');
                this.controllersOn('hr', this.util.removeClass.bind(this.util, element, 'on'));
            }
            return true;
        }

        return false;
    },

    appendHr: function (hrTemp) {
        this.focus();
        return this.insertComponent(hrTemp.cloneNode(false), false, true, false);
    },

    horizontalRulePick: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let command = target.getAttribute('data-command');
        
        while (!command && !/UL/i.test(target.tagName)) {
            target = target.parentNode;
            command = target.getAttribute('data-command');
        }

        if (!command) return;

        const oNode = this.plugins.horizontalRule.appendHr.call(this, target.firstElementChild);
        if (oNode) {
            this.setRange(oNode, 0, oNode, 0);
            this.submenuOff();
        }
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/lineHeight.js":
/*!******************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/lineHeight.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 20197 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'lineHeight',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.lineHeight = {
            _sizeList: null,
            currentSize: -1
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));

        context.lineHeight._sizeList = listUl.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer';

        const sizeList = !option.lineHeights ? [
            {text: '1', value: 1},
            {text: '1.15', value: 1.15},
            {text: '1.5', value: 1.5},
            {text: '2', value: 2}
        ] : option.lineHeights;

        let list = '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    '<li><button type="button" class="default_value se-btn-list" title="' + lang.toolbar.default + '">(' + lang.toolbar.default + ')</button></li>';
        for (let i = 0, len = sizeList.length, size; i < len; i++) {
            size = sizeList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + size.value + '" title="' + size.text + '">' + size.text + '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const lineHeightContext = this.context.lineHeight;
        const sizeList = lineHeightContext._sizeList;
        const format = this.util.getFormatElement(this.getSelectionNode());
        const currentSize = !format ? '' : format.style.lineHeight + '';

        if (currentSize !== lineHeightContext.currentSize) {
            for (let i = 0, len = sizeList.length; i < len; i++) {
                if (currentSize === sizeList[i].getAttribute('data-value')) {
                    this.util.addClass(sizeList[i], 'active');
                } else {
                    this.util.removeClass(sizeList[i], 'active');
                }
            }

            lineHeightContext.currentSize = currentSize;
        }
    },

    pickup: function (e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;
        
        e.preventDefault();
        e.stopPropagation();

        const value = e.target.getAttribute('data-value') || '';
        const formats = this.getSelectedElements();

        for (let i = 0, len = formats.length; i < len; i++) {
            formats[i].style.lineHeight = value;
        }

        this.submenuOff();

        // history stack
        this.history.push(false);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/list.js":
/*!************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/list.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'list',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.list = {
            targetButton: targetElement,
            _list: null,
            currentList: '',
            icons: {
                bullets: core.icons.list_bullets,
                number: core.icons.list_number
            }
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));
        context.list._list = listUl.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function (core) {
        const lang = core.lang;
        const listDiv = core.util.createElement('DIV');

        listDiv.className = 'se-submenu se-list-layer';
        listDiv.innerHTML = '' +
            '<div class="se-list-inner">' +
                '<ul class="se-list-basic">' +
                    '<li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + lang.toolbar.orderList + '">' +
                        core.icons.list_number +
                    '</button></li>' +
                    '<li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + lang.toolbar.unorderList + '">' +
                        core.icons.list_bullets +
                    '</button></li>' +
                '</ul>' +
            '</div>';

        return listDiv;
    },

     /**
     * @Override core
     */
    active: function (element) {
        const button = this.context.list.targetButton;
        const icon = button.firstElementChild;
        const util = this.util;

        if (util.isList(element)) {
            const nodeName = element.nodeName;
            button.setAttribute('data-focus', nodeName);
            util.addClass(button, 'active');
            if (/UL/i.test(nodeName)) {
                util.changeElement(icon, this.context.list.icons.bullets);
            } else {
                util.changeElement(icon, this.context.list.icons.number);
            }
            
            return true;
        } else {
            button.removeAttribute('data-focus');
            util.changeElement(icon, this.context.list.icons.number);
            util.removeClass(button, 'active');
        }

        return false;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const listContext = this.context.list;
        const list = listContext._list;
        const currentList = listContext.targetButton.getAttribute('data-focus') || '';

        if (currentList !== listContext.currentList) {
            for (let i = 0, len = list.length; i < len; i++) {
                if (currentList === list[i].getAttribute('data-command')) {
                    this.util.addClass(list[i], 'active');
                } else {
                    this.util.removeClass(list[i], 'active');
                }
            }

            listContext.currentList = currentList;
        }
    },

    editList: function (command, selectedCells, detach) {
        let range = this.getRange();
        let selectedFormats = !selectedCells ? this.getSelectedElementsAndComponents(false) : selectedCells;

        if (selectedFormats.length === 0) {
            if (selectedCells) return;
            range = this.getRange_addLine(range, null);
            selectedFormats = this.getSelectedElementsAndComponents(false);
            if (selectedFormats.length === 0) return;
        }
        
        const util = this.util;
        util.sortByDepth(selectedFormats, true);

        // merge
        let firstSel = selectedFormats[0];
        let lastSel = selectedFormats[selectedFormats.length - 1];
        let topEl = (util.isListCell(firstSel) || util.isComponent(firstSel)) && !firstSel.previousElementSibling ? firstSel.parentNode.previousElementSibling : firstSel.previousElementSibling;
        let bottomEl = (util.isListCell(lastSel) || util.isComponent(lastSel)) && !lastSel.nextElementSibling ? lastSel.parentNode.nextElementSibling : lastSel.nextElementSibling;

        const originRange = {
            sc: range.startContainer,
            so: (range.startContainer === range.endContainer && util.onlyZeroWidthSpace(range.startContainer) && range.startOffset === 0 && range.endOffset === 1) ? range.endOffset : range.startOffset,
            ec: range.endContainer,
            eo: range.endOffset
        };

        let isRemove = true;

        for (let i = 0, len = selectedFormats.length; i < len; i++) {
            if (!util.isList(util.getRangeFormatElement(selectedFormats[i], function (current) {
                return this.getRangeFormatElement(current) && current !== selectedFormats[i];
            }.bind(util)))) {
                isRemove = false;
                break;
            }
        }

        if (isRemove && (!topEl || (firstSel.tagName !== topEl.tagName || command !== topEl.tagName.toUpperCase())) && (!bottomEl || (lastSel.tagName !== bottomEl.tagName || command !== bottomEl.tagName.toUpperCase()))) {
            if (detach) {
                for (let i = 0, len = selectedFormats.length; i < len; i++) {
                    for (let j = i - 1; j >= 0; j--) {
                        if (selectedFormats[j].contains(selectedFormats[i])) {
                            selectedFormats.splice(i, 1);
                            i--; len--;
                            break;
                        }
                    }
                }
            }

            const currentFormat = util.getRangeFormatElement(firstSel);
            const cancel = currentFormat && currentFormat.tagName === command;
            let rangeArr, tempList;
            const passComponent = function (current) {
                return !this.isComponent(current);
            }.bind(util);
            
            if (!cancel) tempList = util.createElement(command);

            for (let i = 0, len = selectedFormats.length, r, o; i < len; i++) {
                o = util.getRangeFormatElement(selectedFormats[i], passComponent);
                if (!o || !util.isList(o)) continue;

                if (!r) {
                    r = o;
                    rangeArr = {r: r, f: [util.getParentElement(selectedFormats[i], 'LI')]};
                } else {
                    if (r !== o) {
                        if (detach && util.isListCell(o.parentNode)) {
                            this.plugins.list._detachNested.call(this, rangeArr.f);
                        } else {
                            this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
                        }
                        
                        o = selectedFormats[i].parentNode;
                        if (!cancel) tempList = util.createElement(command);
                        
                        r = o;
                        rangeArr = {r: r, f: [util.getParentElement(selectedFormats[i], 'LI')]};
                    } else {
                        rangeArr.f.push(util.getParentElement(selectedFormats[i], 'LI'));
                    }
                }
                
                if (i === len - 1) {
                    if (detach && util.isListCell(o.parentNode)) {
                        this.plugins.list._detachNested.call(this, rangeArr.f);
                    } else {
                        this.detachRangeFormatElement(rangeArr.f[0].parentNode, rangeArr.f, tempList, false, true);
                    }
                }
            }
        } else {
            const topElParent = topEl ? topEl.parentNode : topEl;
            const bottomElParent = bottomEl ? bottomEl.parentNode : bottomEl;
            topEl = topElParent && !util.isWysiwygDiv(topElParent) && topElParent.nodeName === command ? topElParent : topEl;
            bottomEl = bottomElParent && !util.isWysiwygDiv(bottomElParent) && bottomElParent.nodeName === command ? bottomElParent : bottomEl;

            const mergeTop = topEl && topEl.tagName === command;
            const mergeBottom = bottomEl && bottomEl.tagName === command;
            
            let list = mergeTop ? topEl : util.createElement(command);
            let firstList = null;
            let lastList = null;
            let topNumber = null;
            let bottomNumber = null;

            const passComponent = function (current) {
                return !this.isComponent(current) && !this.isList(current);
            }.bind(util);
            
            for (let i = 0, len = selectedFormats.length, newCell, fTag, isCell, next, originParent, nextParent, parentTag, siblingTag, rangeTag; i < len; i++) {
                fTag = selectedFormats[i];
                if (fTag.childNodes.length === 0 && !util._isIgnoreNodeChange(fTag)) {
                    util.removeItem(fTag);
                    continue;
                }
                next = selectedFormats[i + 1];
                originParent = fTag.parentNode;
                nextParent = next ? next.parentNode : null;
                isCell = util.isListCell(fTag);
                rangeTag = util.isRangeFormatElement(originParent) ? originParent : null;
                parentTag = isCell && !util.isWysiwygDiv(originParent) ? originParent.parentNode : originParent;
                siblingTag = isCell && !util.isWysiwygDiv(originParent) ? (!next || util.isListCell(parentTag)) ? originParent : originParent.nextSibling : fTag.nextSibling;

                newCell = util.createElement('LI');
                util.copyFormatAttributes(newCell, fTag);

                if (i ===  0 && originRange.sc === fTag) {
                    originRange.sc = newCell;
                }
                if (i === len - 1 && originRange.ec === fTag) {
                    originRange.ec = newCell;
                }

                if (util.isComponent(fTag)) {
                    const isHR = /^HR$/i.test(fTag.nodeName);
                    if (!isHR) newCell.innerHTML = '<br>';
                    newCell.innerHTML += fTag.outerHTML;
                    if (isHR) newCell.innerHTML += '<br>';
                } else {
                    const fChildren = fTag.childNodes;
                    while (fChildren[0]) {
                        newCell.appendChild(fChildren[0]);
                    }
                }
                list.appendChild(newCell);

                if (!next) lastList = list;
                if (!next || parentTag !== nextParent || util.isRangeFormatElement(siblingTag)) {
                    if (!firstList) firstList = list;
                    if ((!mergeTop || !next || parentTag !== nextParent) && !(next && util.isList(nextParent) && nextParent === originParent)) {
                        if (list.parentNode !== parentTag) parentTag.insertBefore(list, siblingTag);
                    }
                }

                util.removeItem(fTag);
                if (mergeTop && topNumber === null) topNumber = list.children.length - 1;
                if (next && (util.getRangeFormatElement(nextParent, passComponent) !== util.getRangeFormatElement(originParent, passComponent) || (util.isList(nextParent) && util.isList(originParent) && util.getElementDepth(nextParent) !== util.getElementDepth(originParent)))) {
                    list = util.createElement(command);
                }

                if (rangeTag && rangeTag.children.length === 0) util.removeItem(rangeTag);
            }

            if (topNumber) {
                firstList = firstList.children[topNumber];
            }

            if (mergeBottom) {
                bottomNumber = list.children.length - 1;
                list.innerHTML += bottomEl.innerHTML;
                lastList = list.children[bottomNumber];
                util.removeItem(bottomEl);
            }
        }
        
        this.effectNode = null;
        return originRange;
    },

    _detachNested: function (cells) {
        const first = cells[0];
        const last = cells[cells.length - 1];
        const next = last.nextElementSibling;
        const originList = first.parentNode;
        const sibling = originList.parentNode.nextElementSibling;
        const parentNode = originList.parentNode.parentNode;

        for (let c = 0, cLen = cells.length; c < cLen; c++) {
            parentNode.insertBefore(cells[c], sibling);
        }

        if (next && originList.children.length > 0) {
            const newList = originList.cloneNode(false);
            const children = originList.childNodes;
            const index = this.util.getPositionIndex(next);
            while (children[index]) {
                newList.appendChild(children[index]);
            }
            last.appendChild(newList);
        }

        if (originList.children.length === 0) this.util.removeItem(originList);
        this.util.mergeSameTags(parentNode);

        const edge = this.util.getEdgeChildNodes(first, last);

        return {
            cc: first.parentNode,
            sc: edge.sc,
            ec: edge.ec
        };
    },

    editInsideList: function (remove, selectedCells) {
        selectedCells = !selectedCells ? this.getSelectedElements().filter(function (el) { return this.isListCell(el); }.bind(this.util)) : selectedCells;
        const cellsLen = selectedCells.length;
        if (cellsLen === 0 || (!remove && (!this.util.isListCell(selectedCells[0].previousElementSibling) && !this.util.isListCell(selectedCells[cellsLen - 1].nextElementSibling)))) {
            return {
                sc: selectedCells[0],
                so: 0,
                ec: selectedCells[cellsLen - 1],
                eo: 1
            };
        }

        let originList = selectedCells[0].parentNode;
        let lastCell = selectedCells[cellsLen - 1];
        let range = null;

        if (remove) {
            if (originList !== lastCell.parentNode && this.util.isList(lastCell.parentNode.parentNode) && lastCell.nextElementSibling) {
                lastCell = lastCell.nextElementSibling;
                while (lastCell) {
                    selectedCells.push(lastCell);
                    lastCell = lastCell.nextElementSibling;
                }
            }
            range = this.plugins.list.editList.call(this, originList.nodeName.toUpperCase(), selectedCells, true);
        } else {
            let innerList = this.util.createElement(originList.nodeName);
            let prev = selectedCells[0].previousElementSibling;
            let next = lastCell.nextElementSibling;
            const nodePath = { s: null, e: null, sl: originList, el: originList };

            for (let i = 0, len = cellsLen, c; i < len; i++) {
                c = selectedCells[i];
                if (c.parentNode !== originList) {
                    this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);
                    originList = c.parentNode;
                    innerList = this.util.createElement(originList.nodeName);
                }
                
                prev = c.previousElementSibling;
                next = c.nextElementSibling;
                innerList.appendChild(c);
            }
            
            this.plugins.list._insiedList.call(this, originList, innerList, prev, next, nodePath);

            const sc = this.util.getNodeFromPath(nodePath.s, nodePath.sl);
            const ec = this.util.getNodeFromPath(nodePath.e, nodePath.el);
            range = {
                sc: sc,
                so: 0,
                ec: ec,
                eo: ec.textContent.length
            };
        }

        return range;
    },

    _insiedList: function (originList, innerList, prev, next, nodePath) {
        let insertPrev = false;

        if (prev && innerList.tagName === prev.tagName) {
            const children = innerList.children;
            while (children[0]) {
                prev.appendChild(children[0]);
            }

            innerList = prev;
            insertPrev = true;
        }

        if (next && innerList.tagName === next.tagName) {
            const children = next.children;
            while (children[0]) {
                innerList.appendChild(children[0]);
            }

            const temp = next.nextElementSibling;
            next.parentNode.removeChild(next);
            next = temp;
        }

        if (!insertPrev) {
            if (this.util.isListCell(prev)) {
                originList = prev;
                next = null;
            }

            originList.insertBefore(innerList, next);

            if (!nodePath.s) {
                nodePath.s = this.util.getNodePath(innerList.firstElementChild.firstChild, originList, null);
                nodePath.sl = originList;
            }

            const slPath = originList.contains(nodePath.sl) ? this.util.getNodePath(nodePath.sl, originList) : null;
            nodePath.e = this.util.getNodePath(innerList.lastElementChild.firstChild, originList, null);
            nodePath.el = originList;

            this.util.mergeSameTags(originList, [nodePath.s, nodePath.e, slPath], false);
            this.util.mergeNestedTags(originList);
            if (slPath) nodePath.sl = this.util.getNodeFromPath(slPath, originList);
        }

        return innerList;
    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let command = '';

        while (!command && !/^UL$/i.test(target.tagName)) {
            command = target.getAttribute('data-command');
            target = target.parentNode;
        }

        if (!command) return;

        const range = this.plugins.list.editList.call(this, command, null, false);
        if (range) this.setRange(range.sc, range.so, range.ec, range.eo);

        this.submenuOff();

        // history stack
        this.history.push(false);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/paragraphStyle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/paragraphStyle.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'paragraphStyle',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.paragraphStyle = {
            _classList: null
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);

        /** add event listeners */
        listDiv.querySelector('ul').addEventListener('click', this.pickUp.bind(core));

        context.paragraphStyle._classList = listDiv.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';

        const menuLang = core.lang.menu;
        const defaultList = {
            spaced: {
                name: menuLang.spaced,
                class: '__se__p-spaced',
                _class: ''
            },
            bordered: {
                name: menuLang.bordered,
                class: '__se__p-bordered',
                _class: ''
            },
            neon: {
                name: menuLang.neon,
                class: '__se__p-neon',
                _class: ''
            }
        };
        const paragraphStyles = !option.paragraphStyles || option.paragraphStyles.length === 0 ? ['spaced', 'bordered', 'neon'] : option.paragraphStyles;

        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for (let i = 0, len = paragraphStyles.length, p, name, attrs, _class; i < len; i++) {
            p = paragraphStyles[i];

            if (typeof p === 'string') {
                const defaultStyle = defaultList[p.toLowerCase()];
                if (!defaultStyle) continue;
                p = defaultStyle;
            }

            name = p.name;
            attrs = p.class ? ' class="' + p.class + '"' : '';
            _class = p._class;

            list += '<li>' +
                '<button type="button" class="se-btn-list' + (_class ? ' ' + _class: '') + '" data-value="' + p.class + '" title="' + name + '">' +
                    '<div' + attrs + '>' + name + '</div>' +
                '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const paragraphContext = this.context.paragraphStyle;
        const paragraphList = paragraphContext._classList;
        const currentFormat = this.util.getFormatElement(this.getSelectionNode());

        for (let i = 0, len = paragraphList.length; i < len; i++) {
            if (this.util.hasClass(currentFormat, paragraphList[i].getAttribute('data-value'))) {
                this.util.addClass(paragraphList[i], 'active');
            } else {
                this.util.removeClass(paragraphList[i], 'active');
            }
        }
    },

    pickUp: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let value = null;
        
        while (!/^UL$/i.test(target.tagName)) {
            value = target.getAttribute('data-value');
            if (value) break;
            target = target.parentNode;
        }

        if (!value) return;

        let selectedFormsts = this.getSelectedElements();
        if (selectedFormsts.length === 0) {
            this.getRange_addLine(this.getRange(), null);
            selectedFormsts = this.getSelectedElements();
            if (selectedFormsts.length === 0) return;
        }

        // change format class
        const toggleClass = this.util.hasClass(target, 'active') ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
        for (let i = 0, len = selectedFormsts.length; i < len; i++) {
            toggleClass(selectedFormsts[i], value);
        }

        this.submenuOff();

        // history stack
        this.history.push(false);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/table.js":
/*!*************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/table.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'table',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        let contextTable = context.table = {
            _element: null,
            _tdElement: null,
            _trElement: null,
            _trElements: null,
            _tableXY: [],
            _maxWidth: true,
            _fixedColumn: false,
            _rtl: core.options.rtl,
            cellControllerTop: core.options.tableCellControllerPosition === 'top',
            resizeText: null,
            headerButton: null,
            mergeButton: null,
            splitButton: null,
            splitMenu: null,
            maxText: core.lang.controller.maxSize,
            minText: core.lang.controller.minSize,
            _physical_cellCnt: 0,
            _logical_cellCnt: 0,
            _rowCnt: 0,
            _rowIndex: 0,
            _physical_cellIndex: 0,
            _logical_cellIndex: 0,
            _current_colSpan: 0,
            _current_rowSpan: 0,
            icons: {
                expansion: core.icons.expansion,
                reduction: core.icons.reduction
            }
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let tablePicker = listDiv.querySelector('.se-controller-table-picker');

        contextTable.tableHighlight = listDiv.querySelector('.se-table-size-highlighted');
        contextTable.tableUnHighlight = listDiv.querySelector('.se-table-size-unhighlighted');
        contextTable.tableDisplay = listDiv.querySelector('.se-table-size-display');
        if (core.options.rtl) contextTable.tableHighlight.style.left = (10 * 18 - 13) + 'px';

        /** set table controller */
        let tableController = this.setController_table(core);
        contextTable.tableController = tableController;
        contextTable.resizeButton = tableController.querySelector('._se_table_resize');
        contextTable.resizeText = tableController.querySelector('._se_table_resize > span > span');
        contextTable.columnFixedButton = tableController.querySelector('._se_table_fixed_column');
        contextTable.headerButton = tableController.querySelector('._se_table_header');

        /** set resizing */
        let resizeDiv = this.setController_tableEditor(core, contextTable.cellControllerTop);
        contextTable.resizeDiv = resizeDiv;
        contextTable.splitMenu = resizeDiv.querySelector('.se-btn-group-sub');
        contextTable.mergeButton = resizeDiv.querySelector('._se_table_merge_button');
        contextTable.splitButton = resizeDiv.querySelector('._se_table_split_button');
        contextTable.insertRowAboveButton = resizeDiv.querySelector('._se_table_insert_row_a');
        contextTable.insertRowBelowButton = resizeDiv.querySelector('._se_table_insert_row_b');
        
        /** add event listeners */
        tablePicker.addEventListener('mousemove', this.onMouseMove_tablePicker.bind(core, contextTable));
        tablePicker.addEventListener('click', this.appendTable.bind(core));
        resizeDiv.addEventListener('click', this.onClick_tableController.bind(core));
        tableController.addEventListener('click', this.onClick_tableController.bind(core));

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** append controller */
        context.element.relative.appendChild(resizeDiv);
        context.element.relative.appendChild(tableController);

        /** empty memory */
        listDiv = null, tablePicker = null, resizeDiv = null, tableController = null, contextTable = null;
    },

    setSubmenu: function (core) {
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-selector-table';
        listDiv.innerHTML = '' +
            '<div class="se-table-size">' +
                '<div class="se-table-size-picker se-controller-table-picker"></div>' +
                '<div class="se-table-size-highlighted"></div>' +
                '<div class="se-table-size-unhighlighted"></div>' +
            '</div>' +
            '<div class="se-table-size-display">1 x 1</div>';

        return listDiv;
    },

    setController_table: function (core) {
        const lang = core.lang;
        const icons = core.icons;
        const tableResize = core.util.createElement('DIV');

        tableResize.className = 'se-controller se-controller-table';
        tableResize.innerHTML = '' +
            '<div>' +
                '<div class="se-btn-group">' +
                    '<button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' +
                        icons.expansion +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.maxSize + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' +
                        icons.fixed_column_width +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.fixedColumnWidth + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' +
                        icons.table_header +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.tableHeader + '</span></span>' +
                    '</button>' +
                    '<button type="button" data-command="remove" class="se-btn se-tooltip">' +
                        icons.delete +
                        '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.remove + '</span></span>' +
                    '</button>' +
                '</div>' +
            '</div>';

        return tableResize;
    },

    setController_tableEditor: function (core, cellControllerTop) {
        const lang = core.lang;
        const icons = core.icons;
        const tableResize = core.util.createElement('DIV');

        tableResize.className = 'se-controller se-controller-table-cell';
        tableResize.innerHTML = (cellControllerTop ? '' : '<div class="se-arrow se-arrow-up"></div>') +
            '<div class="se-btn-group">' +
                '<button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' +
                    icons.insert_row_above +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertRowAbove + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' +
                    icons.insert_row_below +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertRowBelow + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' +
                    icons.delete_row +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.deleteRow + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' +
                    icons.merge_cell +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.mergeCells + '</span></span>' +
                '</button>' +
            '</div>' +
            '<div class="se-btn-group" style="padding-top: 0;">' +
                '<button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' +
                    icons.insert_column_left +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertColumnBefore + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' +
                    icons.insert_column_right +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.insertColumnAfter + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' +
                    icons.delete_column +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.deleteColumn + '</span></span>' +
                '</button>' +
                '<button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' +
                    icons.split_cell +
                    '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + lang.controller.splitCells + '</span></span>' +
                '</button>' +
                '<div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split">' +
                    '<div class="se-list-inner">' +
                        '<ul class="se-list-basic">' +
                            '<li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + lang.controller.VerticalSplit + '">' + 
                                lang.controller.VerticalSplit + '</li>' +
                            '<li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + lang.controller.HorizontalSplit + '">' + 
                                lang.controller.HorizontalSplit + '</li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
            '</div>';

        return tableResize;
    },

    appendTable: function () {
        const oTable = this.util.createElement('TABLE');
        const createCells = this.plugins.table.createCells;

        const x = this.context.table._tableXY[0];
        let y = this.context.table._tableXY[1];
        let tableHTML = '<tbody>';
        while (y > 0) {
            tableHTML += '<tr>' + createCells.call(this, 'td', x) + '</tr>';
            --y;
        }
        tableHTML += '</tbody>';
        oTable.innerHTML = tableHTML;

        const changed = this.insertComponent(oTable, false, true, false);
        
        if (changed) {
            const firstTd = oTable.querySelector('td div');
            this.setRange(firstTd, 0, firstTd, 0);
            this.plugins.table.reset_table_picker.call(this);
        }
    },

    createCells: function (nodeName, cnt, returnElement) {
        nodeName = nodeName.toLowerCase();

        if (!returnElement) {
            let cellsHTML = '';
            while (cnt > 0) {
                cellsHTML += '<' +nodeName + '><div><br></div></' + nodeName + '>';
                cnt--;
            }
            return cellsHTML;
        } else {
            const cell = this.util.createElement(nodeName);
            cell.innerHTML = '<div><br></div>';
            return cell;
        }
    },

    onMouseMove_tablePicker: function (contextTable, e) {
        e.stopPropagation();

        let x = this._w.Math.ceil(e.offsetX / 18);
        let y = this._w.Math.ceil(e.offsetY / 18);
        x = x < 1 ? 1 : x;
        y = y < 1 ? 1 : y;
        
        if (contextTable._rtl) {
            contextTable.tableHighlight.style.left = (x * 18 - 13) + 'px';
            x = 11 - x;
        }
        
        contextTable.tableHighlight.style.width = x + 'em';
        contextTable.tableHighlight.style.height = y + 'em';

        // let x_u = x < 5 ? 5 : (x > 9 ? 10 : x + 1);
        // let y_u = y < 5 ? 5 : (y > 9 ? 10 : y + 1);
        // contextTable.tableUnHighlight.style.width = x_u + 'em';
        // contextTable.tableUnHighlight.style.height = y_u + 'em';

        this.util.changeTxt(contextTable.tableDisplay, x + ' x ' + y);
        contextTable._tableXY = [x, y];
    },

    reset_table_picker: function () {
        if (!this.context.table.tableHighlight) return;

        const highlight = this.context.table.tableHighlight.style;
        const unHighlight = this.context.table.tableUnHighlight.style;

        highlight.width = '1em';
        highlight.height = '1em';
        unHighlight.width = '10em';
        unHighlight.height = '10em';

        this.util.changeTxt(this.context.table.tableDisplay, '1 x 1');
        this.submenuOff();
    },

    init: function () {
        const contextTable = this.context.table;
        const tablePlugin = this.plugins.table;

        tablePlugin._removeEvents.call(this);

        if (tablePlugin._selectedTable) {
            const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
            for (let i = 0, len = selectedCells.length; i < len; i++) {
                this.util.removeClass(selectedCells[i], 'se-table-selected-cell');
            }
        }

        tablePlugin._toggleEditor.call(this, true);

        contextTable._element = null;
        contextTable._tdElement = null;
        contextTable._trElement = null;
        contextTable._trElements = null;
        contextTable._tableXY = [];
        contextTable._maxWidth = true;
        contextTable._fixedColumn = false;
        contextTable._physical_cellCnt = 0;
        contextTable._logical_cellCnt = 0;
        contextTable._rowCnt = 0;
        contextTable._rowIndex = 0;
        contextTable._physical_cellIndex = 0;
        contextTable._logical_cellIndex = 0;
        contextTable._current_colSpan = 0;
        contextTable._current_rowSpan = 0;

        tablePlugin._shift = false;
        tablePlugin._selectedCells = null;
        tablePlugin._selectedTable = null;
        tablePlugin._ref = null;

        tablePlugin._fixedCell = null;
        tablePlugin._selectedCell = null;
        tablePlugin._fixedCellName = null;
    },

    /** table edit controller */
    call_controller_tableEdit: function (tdElement) {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;

        if (!this.getSelection().isCollapsed && !tablePlugin._selectedCell) {
            this.controllersOff();
            this.util.removeClass(tdElement, 'se-table-selected-cell');
            return;
        }

        const tableElement = contextTable._element || this.plugins.table._selectedTable || this.util.getParentElement(tdElement, 'TABLE');
        contextTable._maxWidth = this.util.hasClass(tableElement, 'se-table-size-100') || tableElement.style.width === '100%' || (!tableElement.style.width && !this.util.hasClass(tableElement, 'se-table-size-auto'));
        contextTable._fixedColumn = this.util.hasClass(tableElement, 'se-table-layout-fixed') || tableElement.style.tableLayout === 'fixed';
        tablePlugin.setTableStyle.call(this, contextTable._maxWidth ? 'width|column' : 'width');
        
        tablePlugin.setPositionControllerTop.call(this, tableElement);
        tablePlugin.setPositionControllerDiv.call(this, tdElement, tablePlugin._shift);
        
        if (!tablePlugin._shift) this.controllersOn(contextTable.resizeDiv, contextTable.tableController, tablePlugin.init.bind(this), tdElement, 'table');
    },

    setPositionControllerTop: function (tableElement) {
        this.setControllerPosition(this.context.table.tableController, tableElement, 'top', {left: 0, top: 0});
    },

    setPositionControllerDiv: function (tdElement, reset) {
        const contextTable = this.context.table;
        const resizeDiv = contextTable.resizeDiv;
        
        this.plugins.table.setCellInfo.call(this, tdElement, reset);
        
        if (contextTable.cellControllerTop) {
            this.setControllerPosition(resizeDiv, contextTable._element, 'top', {left: contextTable.tableController.offsetWidth, top: 0});
        } else {
            this.setControllerPosition(resizeDiv, tdElement, 'bottom', {left: 0, top: 0});
        }
    },

    setCellInfo: function (tdElement, reset) {
        const contextTable = this.context.table;
        const table = contextTable._element = this.plugins.table._selectedTable || this.util.getParentElement(tdElement, 'TABLE');

        if (/THEAD/i.test(table.firstElementChild.nodeName)) {
            this.util.addClass(contextTable.headerButton, 'active');
        } else {
            this.util.removeClass(contextTable.headerButton, 'active');
        }

        if (reset || contextTable._physical_cellCnt === 0) {
            if (contextTable._tdElement !== tdElement) {
                contextTable._tdElement = tdElement;
                contextTable._trElement = tdElement.parentNode;
            }

            const rows = contextTable._trElements = table.rows;
            const cellIndex = tdElement.cellIndex;

            let cellCnt = 0;
            for (let i = 0, cells = rows[0].cells, len = rows[0].cells.length; i < len; i++) {
                cellCnt += cells[i].colSpan;
            }

            // row cnt, row index
            const rowIndex = contextTable._rowIndex = contextTable._trElement.rowIndex;
            contextTable._rowCnt = rows.length;

            // cell cnt, physical cell index
            contextTable._physical_cellCnt = contextTable._trElement.cells.length;
            contextTable._logical_cellCnt = cellCnt;
            contextTable._physical_cellIndex = cellIndex;

            // span
            contextTable._current_colSpan = contextTable._tdElement.colSpan - 1;
            contextTable._current_rowSpan - contextTable._trElement.cells[cellIndex].rowSpan - 1;

            // find logcal cell index
            let rowSpanArr = [];
            let spanIndex = [];
            for (let i = 0, cells, colSpan; i <= rowIndex; i++) {
                cells = rows[i].cells;
                colSpan = 0;
                for (let c = 0, cLen = cells.length, cell, cs, rs, logcalIndex; c < cLen; c++) {
                    cell = cells[c];
                    cs = cell.colSpan - 1;
                    rs = cell.rowSpan - 1;
                    logcalIndex = c + colSpan;

                    if (spanIndex.length > 0) {
                        for (let r = 0, arr; r < spanIndex.length; r++) {
                            arr = spanIndex[r];
                            if (arr.row > i) continue;
                            if (logcalIndex >= arr.index) {
                                colSpan += arr.cs;
                                logcalIndex += arr.cs;
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }  
                            } else if (c === cLen - 1) {
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            }
                        }
                    }

                    // logcal cell index
                    if (i === rowIndex && c === cellIndex) {
                        contextTable._logical_cellIndex = logcalIndex;
                        break;
                    }

                    if (rs > 0) {
                        rowSpanArr.push({
                            index: logcalIndex,
                            cs: cs + 1,
                            rs: rs,
                            row: -1
                        });
                    }
                    
                    colSpan += cs;
                }

                spanIndex = spanIndex.concat(rowSpanArr).sort(function (a, b) {return a.index - b.index;});
                rowSpanArr = [];
            }

            rowSpanArr = null;
            spanIndex = null;
        }
    },

    editTable: function (type, option) {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;
        const table = contextTable._element;
        const isRow = type === 'row';

        if (isRow) {
            const tableAttr = contextTable._trElement.parentNode;
            if (/^THEAD$/i.test(tableAttr.nodeName)) {
                if (option === 'up') {
                    return;
                } else if (!tableAttr.nextElementSibling || !/^TBODY$/i.test(tableAttr.nextElementSibling.nodeName)) {
                    table.innerHTML += '<tbody><tr>' + tablePlugin.createCells.call(this, 'td', contextTable._logical_cellCnt, false) + '</tr></tbody>';
                    return;
                }
            }
        }

        // multi
        if (tablePlugin._ref) {
            const positionCell = contextTable._tdElement;
            const selectedCells = tablePlugin._selectedCells;
            // multi - row
            if (isRow) {
                // remove row
                if (!option) {
                    let row = selectedCells[0].parentNode;
                    const removeCells = [selectedCells[0]];

                    for (let i = 1, len = selectedCells.length, cell; i < len; i++) {
                        cell = selectedCells[i];
                        if (row !== cell.parentNode) {
                            removeCells.push(cell);
                            row = cell.parentNode;
                        }
                    }

                    for (let i = 0, len = removeCells.length; i < len; i++) {
                        tablePlugin.setCellInfo.call(this, removeCells[i], true);
                        tablePlugin.editRow.call(this, option);
                    }
                } else { // edit row
                    tablePlugin.setCellInfo.call(this, option === 'up' ? selectedCells[0] : selectedCells[selectedCells.length - 1], true);
                    tablePlugin.editRow.call(this, option, positionCell);
                }
            } else { // multi - cell
                const firstRow = selectedCells[0].parentNode;
                // remove cell
                if (!option) {
                    const removeCells = [selectedCells[0]];
                    
                    for (let i = 1, len = selectedCells.length, cell; i < len; i++) {
                        cell = selectedCells[i];
                        if (firstRow === cell.parentNode) {
                            removeCells.push(cell);
                        } else {
                            break;
                        }
                    }

                    for (let i = 0, len = removeCells.length; i < len; i++) {
                        tablePlugin.setCellInfo.call(this, removeCells[i], true);
                        tablePlugin.editCell.call(this, option);
                    }
                } else { // edit cell
                    let rightCell = null;

                    for (let i = 0, len = selectedCells.length - 1; i < len; i++) {
                        if (firstRow !== selectedCells[i + 1].parentNode) {
                            rightCell = selectedCells[i];
                            break;
                        }
                    }

                    tablePlugin.setCellInfo.call(this, option === 'left' ? selectedCells[0] : rightCell || selectedCells[0], true);
                    tablePlugin.editCell.call(this, option, positionCell);
                }
            }

            if (!option) tablePlugin.init.call(this);
        } // one
        else {
            tablePlugin[isRow ? 'editRow' : 'editCell'].call(this, option);
        }

        // after remove
        if (!option) {
            const children = table.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i].children.length === 0) {
                    this.util.removeItem(children[i]);
                    i--;
                }
            }

            if (table.children.length === 0) this.util.removeItem(table);
        }
    },

    editRow: function (option, positionResetElement) {
        const contextTable = this.context.table;
        const remove = !option;

        const up = option === 'up';
        const originRowIndex = contextTable._rowIndex;
        const rowIndex = remove || up ? originRowIndex : originRowIndex + contextTable._current_rowSpan + 1;
        const sign = remove ? -1 : 1;
        
        const rows = contextTable._trElements;
        let cellCnt = contextTable._logical_cellCnt;

        for (let i = 0, len = originRowIndex + (remove ? -1 : 0), cell; i <= len; i++) {
            cell = rows[i].cells;
            if (cell.length === 0) return;
            
            for (let c = 0, cLen = cell.length, rs, cs; c < cLen; c++) {
                rs = cell[c].rowSpan;
                cs = cell[c].colSpan;
                if (rs < 2 && cs < 2) continue;

                if (rs + i > rowIndex && rowIndex > i) {
                    cell[c].rowSpan = rs + sign;
                    cellCnt -= cs;
                }
            }
        }

        if (remove) {
            const next = rows[originRowIndex + 1];
            if (next) {
                const spanCells = [];
                let cells = rows[originRowIndex].cells;
                let colSpan = 0;

                for (let i = 0, len = cells.length, cell, logcalIndex; i < len; i++) {
                    cell = cells[i];
                    logcalIndex = i + colSpan;
                    colSpan += cell.colSpan - 1;

                    if (cell.rowSpan > 1) {
                        cell.rowSpan -= 1;
                        spanCells.push({cell: cell.cloneNode(false), index: logcalIndex});
                    }
                }

                if (spanCells.length > 0) {
                    let spanCell = spanCells.shift();
                    cells = next.cells;
                    colSpan = 0;

                    for (let i = 0, len = cells.length, cell, logcalIndex; i < len; i++) {
                        cell = cells[i];
                        logcalIndex = i + colSpan;
                        colSpan += cell.colSpan - 1;
    
                        if (logcalIndex >= spanCell.index) {
                            i--, colSpan--;
                            colSpan += spanCell.cell.colSpan - 1;
                            next.insertBefore(spanCell.cell, cell);
                            spanCell = spanCells.shift();
                            if (!spanCell) break;
                        }
                    }

                    if (spanCell) {
                        next.appendChild(spanCell.cell);
                        for (let i = 0, len = spanCells.length; i < len; i++) {
                            next.appendChild(spanCells[i].cell);
                        }
                    }
                }
            }

            contextTable._element.deleteRow(rowIndex);
        } else {
            const newRow = contextTable._element.insertRow(rowIndex);
            newRow.innerHTML = this.plugins.table.createCells.call(this, 'td', cellCnt, false);
        }

        if (!remove) {
            this.plugins.table.setPositionControllerDiv.call(this, positionResetElement || contextTable._tdElement, true);
        } else {
            this.controllersOff();
        }
    },

    editCell: function (option, positionResetElement) {
        const contextTable = this.context.table;
        const util = this.util;
        const remove = !option;

        const left = option === 'left';
        const colSpan = contextTable._current_colSpan;
        const cellIndex = remove || left ? contextTable._logical_cellIndex : contextTable._logical_cellIndex + colSpan + 1;

        const rows = contextTable._trElements;
        let rowSpanArr = [];
        let spanIndex = [];
        let passCell = 0;
        const removeCell = [];
        const removeSpanArr = [];

        for (let i = 0, len = contextTable._rowCnt, row, insertIndex, cells, newCell, applySpan, cellColSpan; i < len; i++) {
            row = rows[i];
            insertIndex = cellIndex;
            applySpan = false;
            cells = row.cells;
            cellColSpan = 0;

            for (let c = 0, cell, cLen = cells.length, rs, cs, removeIndex; c < cLen; c++) {
                cell = cells[c];
                if (!cell) break;

                rs = cell.rowSpan - 1;
                cs = cell.colSpan - 1;

                if (!remove) {
                    if (c >= insertIndex) break;
                    if (cs > 0) {
                        if (passCell < 1 && cs + c >= insertIndex) {
                            cell.colSpan += 1;
                            insertIndex = null;
                            passCell = rs + 1;
                            break;
                        }

                        insertIndex -= cs;
                    }

                    if (!applySpan) {
                        for (let r = 0, arr; r < spanIndex.length; r++) {
                            arr = spanIndex[r];
                            insertIndex -= arr.cs;
                            arr.rs -= 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }  
                        }
                        applySpan = true;
                    }
                } else {
                    removeIndex = c + cellColSpan;

                    if (spanIndex.length > 0) {
                        const lastCell = !cells[c + 1];
                        for (let r = 0, arr; r < spanIndex.length; r++) {
                            arr = spanIndex[r];
                            if (arr.row > i) continue;

                            if (removeIndex >= arr.index) {
                                cellColSpan += arr.cs;
                                removeIndex = c + cellColSpan;
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }  
                            } else if (lastCell) {
                                arr.rs -= 1;
                                arr.row = i + 1;
                                if (arr.rs < 1) {
                                    spanIndex.splice(r, 1);
                                    r--;
                                }
                            }
                        }
                    }

                    if (rs > 0) {
                        rowSpanArr.push({
                            rs: rs,
                            cs: cs + 1,
                            index: removeIndex,
                            row: -1
                        });
                    }

                    if (removeIndex >= insertIndex && removeIndex + cs <= insertIndex + colSpan) {
                        removeCell.push(cell);
                    } else if (removeIndex <= insertIndex + colSpan && removeIndex + cs >= insertIndex) {
                        cell.colSpan -= util.getOverlapRangeAtIndex(cellIndex, cellIndex + colSpan, removeIndex, removeIndex + cs); 
                    } else if (rs > 0 && (removeIndex < insertIndex || removeIndex + cs > insertIndex + colSpan)) {
                        removeSpanArr.push({
                            cell: cell,
                            i: i,
                            rs: i + rs
                        });
                    }

                    cellColSpan += cs;
                }
            }

            spanIndex = spanIndex.concat(rowSpanArr).sort(function (a, b) {return a.index - b.index;});
            rowSpanArr = [];

            if (!remove) {
                if (passCell > 0) {
                    passCell -= 1;
                    continue;
                }

                if (insertIndex !== null && cells.length > 0) {
                    newCell = this.plugins.table.createCells.call(this, cells[0].nodeName, 0, true);
                    newCell = row.insertBefore(newCell, cells[insertIndex]);
                }
            }
        }

        if (remove) {
            let removeFirst, removeEnd;
            for (let r = 0, rLen = removeCell.length, row; r < rLen; r++) {
                row = removeCell[r].parentNode;
                util.removeItem(removeCell[r]);
                if (row.cells.length === 0) {
                    if (!removeFirst) removeFirst = util.getArrayIndex(rows, row);
                    removeEnd = util.getArrayIndex(rows, row);
                    util.removeItem(row);
                }
            }

            for (let c = 0, cLen = removeSpanArr.length, rowSpanCell; c < cLen; c++) {
                rowSpanCell = removeSpanArr[c];
                rowSpanCell.cell.rowSpan = util.getOverlapRangeAtIndex(removeFirst, removeEnd, rowSpanCell.i, rowSpanCell.rs);
            }

            this.controllersOff();
        } else {
            this.plugins.table.setPositionControllerDiv.call(this, positionResetElement || contextTable._tdElement, true);
        }
    },

    _closeSplitMenu: null,
    openSplitMenu: function () {
        this.util.addClass(this.context.table.splitButton, 'on');
        this.context.table.splitMenu.style.display = 'inline-table';

        this.plugins.table._closeSplitMenu = function () {
            this.util.removeClass(this.context.table.splitButton, 'on');
            this.context.table.splitMenu.style.display = 'none';
            this.removeDocEvent('click', this.plugins.table._closeSplitMenu);
            this.plugins.table._closeSplitMenu = null;
        }.bind(this);

        this.addDocEvent('click', this.plugins.table._closeSplitMenu);
    },

    splitCells: function (direction) {
        const util = this.util;
        const vertical = direction === 'vertical';
        const contextTable = this.context.table;
        const currentCell = contextTable._tdElement;
        const rows = contextTable._trElements;
        const currentRow = contextTable._trElement;
        const index = contextTable._logical_cellIndex;
        const rowIndex = contextTable._rowIndex;
        const newCell = this.plugins.table.createCells.call(this, currentCell.nodeName, 0, true);

        // vertical
        if (vertical) {
            const currentColSpan = currentCell.colSpan;
            newCell.rowSpan = currentCell.rowSpan;

            // colspan > 1
            if (currentColSpan > 1) {
                newCell.colSpan = this._w.Math.floor(currentColSpan/2);
                currentCell.colSpan = currentColSpan - newCell.colSpan;
                currentRow.insertBefore(newCell, currentCell.nextElementSibling);
            } else { // colspan - 1
                let rowSpanArr = [];
                let spanIndex = [];

                for (let i = 0, len = contextTable._rowCnt, cells, colSpan; i < len; i++) {
                    cells = rows[i].cells;
                    colSpan = 0;
                    for (let c = 0, cLen = cells.length, cell, cs, rs, logcalIndex; c < cLen; c++) {
                        cell = cells[c];
                        cs = cell.colSpan - 1;
                        rs = cell.rowSpan - 1;
                        logcalIndex = c + colSpan;

                        if (spanIndex.length > 0) {
                            for (let r = 0, arr; r < spanIndex.length; r++) {
                                arr = spanIndex[r];
                                if (arr.row > i) continue;
                                if (logcalIndex >= arr.index) {
                                    colSpan += arr.cs;
                                    logcalIndex += arr.cs;
                                    arr.rs -= 1;
                                    arr.row = i + 1;
                                    if (arr.rs < 1) {
                                        spanIndex.splice(r, 1);
                                        r--;
                                    }  
                                } else if (c === cLen - 1) {
                                    arr.rs -= 1;
                                    arr.row = i + 1;
                                    if (arr.rs < 1) {
                                        spanIndex.splice(r, 1);
                                        r--;
                                    }
                                }
                            }
                        }

                        if (logcalIndex <= index && rs > 0) {
                            rowSpanArr.push({
                                index: logcalIndex,
                                cs: cs + 1,
                                rs: rs,
                                row: -1
                            });
                        }

                        if (cell !== currentCell && logcalIndex <= index && logcalIndex + cs >= index + currentColSpan - 1) {
                            cell.colSpan += 1;
                            break;
                        }

                        if (logcalIndex > index) break;
                        
                        colSpan += cs;
                    }

                    spanIndex = spanIndex.concat(rowSpanArr).sort(function (a, b) {return a.index - b.index;});
                    rowSpanArr = [];
                }

                currentRow.insertBefore(newCell, currentCell.nextElementSibling);
            }
        } else { // horizontal
            const currentRowSpan = currentCell.rowSpan;
            newCell.colSpan = currentCell.colSpan;

            // rowspan > 1
            if (currentRowSpan > 1) {
                newCell.rowSpan = this._w.Math.floor(currentRowSpan/2);
                const newRowSpan = currentRowSpan - newCell.rowSpan;

                const rowSpanArr = [];
                const nextRowIndex = util.getArrayIndex(rows, currentRow) + newRowSpan;

                for (let i = 0, cells, colSpan; i < nextRowIndex; i++) {
                    cells = rows[i].cells;
                    colSpan = 0;
                    for (let c = 0, cLen = cells.length, cell, cs, logcalIndex; c < cLen; c++) {
                        logcalIndex = c + colSpan;
                        if (logcalIndex >= index) break;

                        cell = cells[c];
                        cs = cell.rowSpan - 1;
                        if (cs > 0 && cs + i >= nextRowIndex && logcalIndex < index) {
                            rowSpanArr.push({
                                index: logcalIndex,
                                cs: cell.colSpan
                            });
                        }
                        colSpan += cell.colSpan - 1;
                    }
                }

                const nextRow = rows[nextRowIndex];
                const nextCells = nextRow.cells;
                let rs = rowSpanArr.shift();

                for (let c = 0, cLen = nextCells.length, colSpan = 0, cell, cs, logcalIndex, insertIndex; c < cLen; c++) {
                    logcalIndex = c + colSpan;
                    cell = nextCells[c];
                    cs = cell.colSpan - 1;
                    insertIndex = logcalIndex + cs + 1;

                    if (rs && insertIndex >= rs.index) {
                        colSpan += rs.cs;
                        insertIndex += rs.cs;
                        rs = rowSpanArr.shift();
                    }
                    
                    if (insertIndex >= index || c === cLen - 1) {
                        nextRow.insertBefore(newCell, cell.nextElementSibling);
                        break;
                    }

                    colSpan += cs;
                }

                currentCell.rowSpan = newRowSpan;
            } else { // rowspan - 1
                newCell.rowSpan = currentCell.rowSpan;
                const newRow = util.createElement('TR');
                newRow.appendChild(newCell);

                for (let i = 0, cells; i < rowIndex; i++) {
                    cells = rows[i].cells;
                    if (cells.length === 0) return;

                    for (let c = 0, cLen = cells.length; c < cLen; c++) {
                        if (i + cells[c].rowSpan - 1 >= rowIndex) {
                            cells[c].rowSpan += 1;
                        }
                    }
                }

                const physicalIndex = contextTable._physical_cellIndex;
                const cells = currentRow.cells;

                for (let c = 0, cLen = cells.length; c < cLen; c++) {
                    if (c === physicalIndex) continue;       
                    cells[c].rowSpan += 1;                    
                }

                currentRow.parentNode.insertBefore(newRow, currentRow.nextElementSibling);
            }
        }

        this.focusEdge(currentCell);
        this.plugins.table.setPositionControllerDiv.call(this, currentCell, true);
    },

    mergeCells: function () {
        const tablePlugin = this.plugins.table;
        const contextTable = this.context.table;
        const util = this.util;

        const ref = tablePlugin._ref;
        const selectedCells = tablePlugin._selectedCells;
        const mergeCell = selectedCells[0];
        
        let emptyRowFirst = null;
        let emptyRowLast = null;
        let cs = (ref.ce - ref.cs) + 1;
        let rs = (ref.re - ref.rs) + 1;
        let mergeHTML = '';
        let row = null;

        for (let i = 1, len = selectedCells.length, cell, ch; i < len; i++) {
            cell = selectedCells[i];
            if (row !== cell.parentNode) row = cell.parentNode;

            ch = cell.children;
            for (let c = 0, cLen = ch.length; c < cLen; c++) {
                if (util.isFormatElement(ch[c]) && util.onlyZeroWidthSpace(ch[c].textContent)) {
                    util.removeItem(ch[c]);
                }  
            }

            mergeHTML += cell.innerHTML;
            util.removeItem(cell);

            if (row.cells.length === 0) {
                if (!emptyRowFirst) emptyRowFirst = row;
                else emptyRowLast = row;
                rs -= 1;
            }
        }

        if (emptyRowFirst) {
            const rows = contextTable._trElements;
            const rowIndexFirst = util.getArrayIndex(rows, emptyRowFirst);
            const rowIndexLast = util.getArrayIndex(rows, emptyRowLast || emptyRowFirst);
            const removeRows = [];
    
            for (let i = 0, cells; i <= rowIndexLast; i++) {
                cells = rows[i].cells;
                if (cells.length === 0) {
                    removeRows.push(rows[i]);
                    continue;
                }
    
                for (let c = 0, cLen = cells.length, cell, rs; c < cLen; c++) {
                    cell = cells[c];
                    rs = cell.rowSpan - 1;
                    if (rs > 0 && i + rs >= rowIndexFirst) {
                        cell.rowSpan -= util.getOverlapRangeAtIndex(rowIndexFirst, rowIndexLast, i, i + rs);
                    }
                }
            }

            for (let i = 0, len = removeRows.length; i < len; i++) {
                util.removeItem(removeRows[i]);
            }
        }

        mergeCell.innerHTML += mergeHTML;
        mergeCell.colSpan = cs;
        mergeCell.rowSpan = rs;

        this.controllersOff();
        tablePlugin.setActiveButton.call(this, true, false);
        tablePlugin.call_controller_tableEdit.call(this, mergeCell);

        util.addClass(mergeCell, 'se-table-selected-cell');
        this.focusEdge(mergeCell);
    },

    toggleHeader: function () {
        const util = this.util;
        const headerButton = this.context.table.headerButton;
        const active = util.hasClass(headerButton, 'active');
        const table = this.context.table._element;

        if (!active) {
            const header = util.createElement('THEAD');
            header.innerHTML = '<tr>' + this.plugins.table.createCells.call(this, 'th', this.context.table._logical_cellCnt, false) + '</tr>';
            table.insertBefore(header, table.firstElementChild);
        } else {
            util.removeItem(table.querySelector('thead'));
        }

        util.toggleClass(headerButton, 'active');

        if (/TH/i.test(this.context.table._tdElement.nodeName)) {
            this.controllersOff();
        } else {
            this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, false);
        }
    },

    setTableStyle: function (styles) {
        const contextTable = this.context.table;
        const tableElement = contextTable._element;
        let icon, span, sizeIcon, text;

        if (styles.indexOf('width') > -1) {
            icon =  contextTable.resizeButton.firstElementChild;
            span = contextTable.resizeText;

            if (!contextTable._maxWidth) {
                sizeIcon = contextTable.icons.expansion;
                text = contextTable.maxText;
                contextTable.columnFixedButton.style.display = 'none';
                this.util.removeClass(tableElement, 'se-table-size-100');
                this.util.addClass(tableElement, 'se-table-size-auto');
            } else {
                sizeIcon = contextTable.icons.reduction;
                text = contextTable.minText;
                contextTable.columnFixedButton.style.display = 'block';
                this.util.removeClass(tableElement, 'se-table-size-auto');
                this.util.addClass(tableElement, 'se-table-size-100');
            }
            
            this.util.changeElement(icon, sizeIcon);
            this.util.changeTxt(span, text);
        }

        if (styles.indexOf('column') > -1) {
            if (!contextTable._fixedColumn) {
                this.util.removeClass(tableElement, 'se-table-layout-fixed');
                this.util.addClass(tableElement, 'se-table-layout-auto');
                this.util.removeClass(contextTable.columnFixedButton, 'active');
            } else {
                this.util.removeClass(tableElement, 'se-table-layout-auto');
                this.util.addClass(tableElement, 'se-table-layout-fixed');
                this.util.addClass(contextTable.columnFixedButton, 'active');
            }
            
        }
    },

    setActiveButton: function (fixedCell, selectedCell) {
        const contextTable = this.context.table;

        if (/^TH$/i.test(fixedCell.nodeName)) {
            contextTable.insertRowAboveButton.setAttribute('disabled', true);
            contextTable.insertRowBelowButton.setAttribute('disabled', true);
        } else {
            contextTable.insertRowAboveButton.removeAttribute('disabled');
            contextTable.insertRowBelowButton.removeAttribute('disabled');
        }

        if (!selectedCell || fixedCell === selectedCell) {
            contextTable.splitButton.removeAttribute('disabled');
            contextTable.mergeButton.setAttribute('disabled', true);
        } else {
            contextTable.splitButton.setAttribute('disabled', true);
            contextTable.mergeButton.removeAttribute('disabled');
        }
    },

    // multi selecte
    _bindOnSelect: null,
    _bindOffSelect: null,
    _bindOffShift: null,
    _selectedCells: null,
    _shift: false,
    _fixedCell: null,
    _fixedCellName: null,
    _selectedCell: null,
    _selectedTable: null,
    _ref: null,
    _toggleEditor: function (enabled) {
        this.context.element.wysiwyg.setAttribute('contenteditable', enabled);
        if (enabled) this.util.removeClass(this.context.element.wysiwyg, 'se-disabled');
        else this.util.addClass(this.context.element.wysiwyg, 'se-disabled');
    },

    _offCellMultiSelect: function (e) {
        e.stopPropagation();
        const tablePlugin = this.plugins.table;

        if (!tablePlugin._shift) {
            tablePlugin._removeEvents.call(this);
            tablePlugin._toggleEditor.call(this, true);
        } else if (tablePlugin._initBind) {
            this._wd.removeEventListener('touchmove', tablePlugin._initBind);
            tablePlugin._initBind = null;
        }

        if (!tablePlugin._fixedCell || !tablePlugin._selectedTable) return;
        
        tablePlugin.setActiveButton.call(this, tablePlugin._fixedCell, tablePlugin._selectedCell);
        tablePlugin.call_controller_tableEdit.call(this, tablePlugin._selectedCell || tablePlugin._fixedCell);

        tablePlugin._selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        if (tablePlugin._selectedCell && tablePlugin._fixedCell) this.focusEdge(tablePlugin._selectedCell);

        if (!tablePlugin._shift) {
            tablePlugin._fixedCell = null;
            tablePlugin._selectedCell = null;
            tablePlugin._fixedCellName = null;
        }
    },

    _onCellMultiSelect: function (e) {
        this._antiBlur = true;
        const tablePlugin = this.plugins.table;
        const target = this.util.getParentElement(e.target, this.util.isCell);

        if (tablePlugin._shift) {
            if (target === tablePlugin._fixedCell) tablePlugin._toggleEditor.call(this, true);
            else tablePlugin._toggleEditor.call(this, false);
        } else if (!tablePlugin._ref) {
            if (target === tablePlugin._fixedCell) return;
            else tablePlugin._toggleEditor.call(this, false);
        }

        if (!target || target === tablePlugin._selectedCell || tablePlugin._fixedCellName !== target.nodeName || 
            tablePlugin._selectedTable !== this.util.getParentElement(target, 'TABLE')) {
            return;
        }

        tablePlugin._selectedCell = target;
        tablePlugin._setMultiCells.call(this, tablePlugin._fixedCell, target);
    },

    _setMultiCells: function (startCell, endCell) {
        const tablePlugin = this.plugins.table;
        const rows = tablePlugin._selectedTable.rows;
        const util = this.util;

        const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        for (let i = 0, len = selectedCells.length; i < len; i++) {
            util.removeClass(selectedCells[i], 'se-table-selected-cell');
        }

        if (startCell === endCell) {
            util.addClass(startCell, 'se-table-selected-cell');
            if (!tablePlugin._shift) return;
        }

        let findSelectedCell = true;
        let spanIndex = [];
        let rowSpanArr = [];
        const ref = tablePlugin._ref = {_i: 0, cs: null, ce: null, rs: null, re: null};

        for (let i = 0, len = rows.length, cells, colSpan; i < len; i++) {
            cells = rows[i].cells;
            colSpan = 0;

            for (let c = 0, cLen = cells.length, cell, logcalIndex, cs, rs; c < cLen; c++) {
                cell = cells[c];
                cs = cell.colSpan - 1;
                rs = cell.rowSpan - 1;
                logcalIndex = c + colSpan;

                if (spanIndex.length > 0) {
                    for (let r = 0, arr; r < spanIndex.length; r++) {
                        arr = spanIndex[r];
                        if (arr.row > i) continue;
                        if (logcalIndex >= arr.index) {
                            colSpan += arr.cs;
                            logcalIndex += arr.cs;
                            arr.rs -= 1;
                            arr.row = i + 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }
                        } else if (c === cLen - 1) {
                            arr.rs -= 1;
                            arr.row = i + 1;
                            if (arr.rs < 1) {
                                spanIndex.splice(r, 1);
                                r--;
                            }
                        }
                    }
                }

                if (findSelectedCell) {
                    if (cell === startCell || cell === endCell) {
                        ref.cs = ref.cs !== null && ref.cs < logcalIndex ? ref.cs : logcalIndex;
                        ref.ce = ref.ce !== null && ref.ce > logcalIndex + cs ? ref.ce : logcalIndex + cs;
                        ref.rs = ref.rs !== null && ref.rs < i ? ref.rs : i;
                        ref.re = ref.re !== null && ref.re > i + rs ? ref.re : i + rs;
                        ref._i += 1;
                    }
                    
                    if (ref._i === 2) {
                        findSelectedCell = false;
                        spanIndex = [];
                        rowSpanArr = [];
                        i = -1;
                        break;
                    }
                } else if (util.getOverlapRangeAtIndex(ref.cs, ref.ce, logcalIndex, logcalIndex + cs) && util.getOverlapRangeAtIndex(ref.rs, ref.re, i, i + rs)) {
                    const newCs = ref.cs < logcalIndex ? ref.cs : logcalIndex;
                    const newCe = ref.ce > logcalIndex + cs ? ref.ce : logcalIndex + cs;
                    const newRs = ref.rs < i ? ref.rs : i;
                    const newRe = ref.re > i + rs ? ref.re : i + rs;

                    if (ref.cs !== newCs || ref.ce !== newCe || ref.rs !== newRs || ref.re !== newRe) {
                        ref.cs = newCs;
                        ref.ce = newCe;
                        ref.rs = newRs;
                        ref.re = newRe;
                        i = -1;

                        spanIndex = [];
                        rowSpanArr = [];
                        break;
                    }

                    util.addClass(cell, 'se-table-selected-cell');
                }

                if (rs > 0) {
                    rowSpanArr.push({
                        index: logcalIndex,
                        cs: cs + 1,
                        rs: rs,
                        row: -1
                    });
                }

                colSpan += cell.colSpan - 1;
            }

            spanIndex = spanIndex.concat(rowSpanArr).sort(function (a, b) {return a.index - b.index;});
            rowSpanArr = [];
        }
    },

    _removeEvents: function () {
        const tablePlugin = this.plugins.table;

        if (tablePlugin._initBind) {
            this._wd.removeEventListener('touchmove', tablePlugin._initBind);
            tablePlugin._initBind = null;
        }

        if (tablePlugin._bindOnSelect) {
            this._wd.removeEventListener('mousedown', tablePlugin._bindOnSelect);
            this._wd.removeEventListener('mousemove', tablePlugin._bindOnSelect);
            tablePlugin._bindOnSelect = null;
        }

        if (tablePlugin._bindOffSelect) {
            this._wd.removeEventListener('mouseup', tablePlugin._bindOffSelect);
            tablePlugin._bindOffSelect = null;
        }

        if (tablePlugin._bindOffShift) {
            this._wd.removeEventListener('keyup', tablePlugin._bindOffShift);
            tablePlugin._bindOffShift = null;
        }
    },

    _initBind: null,
    onTableCellMultiSelect: function (tdElement, shift) {
        const tablePlugin = this.plugins.table;

        tablePlugin._removeEvents.call(this);
        this.controllersOff();

        tablePlugin._shift = shift;
        tablePlugin._fixedCell = tdElement;
        tablePlugin._fixedCellName = tdElement.nodeName;
        tablePlugin._selectedTable = this.util.getParentElement(tdElement, 'TABLE');

        const selectedCells = tablePlugin._selectedTable.querySelectorAll('.se-table-selected-cell');
        for (let i = 0, len = selectedCells.length; i < len; i++) {
            this.util.removeClass(selectedCells[i], 'se-table-selected-cell');
        }

        this.util.addClass(tdElement, 'se-table-selected-cell');
        
        tablePlugin._bindOnSelect = tablePlugin._onCellMultiSelect.bind(this);
        tablePlugin._bindOffSelect = tablePlugin._offCellMultiSelect.bind(this);

        if (!shift) {
            this._wd.addEventListener('mousemove', tablePlugin._bindOnSelect, false);
        } else {
            tablePlugin._bindOffShift = function () {
                this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), tdElement, 'table');
                if (!tablePlugin._ref) this.controllersOff();
            }.bind(this);

            this._wd.addEventListener('keyup', tablePlugin._bindOffShift, false);
            this._wd.addEventListener('mousedown', tablePlugin._bindOnSelect, false);
        }

        this._wd.addEventListener('mouseup', tablePlugin._bindOffSelect, false);
        tablePlugin._initBind = tablePlugin.init.bind(this);
        this._wd.addEventListener('touchmove', tablePlugin._initBind, false);
    },

    onClick_tableController: function (e) {
        e.stopPropagation();
        const target = e.target.getAttribute('data-command') ? e.target : e.target.parentNode;

        if (target.getAttribute('disabled')) return;

        const command = target.getAttribute('data-command');
        const value = target.getAttribute('data-value');
        const option = target.getAttribute('data-option');
        const tablePlugin = this.plugins.table;
        
        if (typeof tablePlugin._closeSplitMenu === 'function') {
            tablePlugin._closeSplitMenu();
            if (command === 'onsplit') return;
        }

        if (!command) return;

        e.preventDefault();
        const contextTable = this.context.table;

        switch (command) {
            case 'insert':
            case 'delete':
                tablePlugin.editTable.call(this, value, option);
                break;
            case 'header':
                tablePlugin.toggleHeader.call(this);
                break;
            case 'onsplit':
                tablePlugin.openSplitMenu.call(this);
                break;
            case 'split':
                tablePlugin.splitCells.call(this, value);
                break;
            case 'merge':
                tablePlugin.mergeCells.call(this);
                break;
            case 'resize':
                contextTable._maxWidth = !contextTable._maxWidth;
                tablePlugin.setTableStyle.call(this, 'width');
                tablePlugin.setPositionControllerTop.call(this, contextTable._element);
                tablePlugin.setPositionControllerDiv.call(this, contextTable._tdElement, tablePlugin._shift);
                break;
            case 'layout':
                contextTable._fixedColumn = !contextTable._fixedColumn;
                tablePlugin.setTableStyle.call(this, 'column');
                tablePlugin.setPositionControllerTop.call(this, contextTable._element);
                tablePlugin.setPositionControllerDiv.call(this, contextTable._tdElement, tablePlugin._shift);
                break;
            case 'remove':
                const emptyDiv = contextTable._element.parentNode;
                this.util.removeItem(contextTable._element);
                this.controllersOff();

                if (emptyDiv !== this.context.element.wysiwyg) this.util.removeItemAllParents(emptyDiv, function (current) { return current.childNodes.length === 0; }, null);
                this.focus();
        }

        // history stack
        this.history.push(false);
    }
});


/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/template.js":
/*!****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/template.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'template',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.template = {
            selectedIndex: -1
        };

        /** set submenu */
        let templateDiv = this.setSubmenu(core);

        /** add event listeners */
        templateDiv.querySelector('ul').addEventListener('click', this.pickup.bind(core));

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, templateDiv);

        /** empty memory */
        templateDiv = null;
    },

    setSubmenu: function (core) {
        const templateList = core.options.templates;
        if (!templateList || templateList.length === 0) {
            throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
        }

        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-list-layer';

        let list = '<div class="se-submenu se-list-inner">' +
                '<ul class="se-list-basic">';
        for (let i = 0, len = templateList.length, t; i < len; i++) {
            t = templateList[i];
            list += '<li><button type="button" class="se-btn-list" data-value="' + i + '" title="' + t.name + '">' + t.name + '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

    pickup: function (e) {
        if (!/^BUTTON$/i.test(e.target.tagName)) return false;

        e.preventDefault();
        e.stopPropagation();

        this.context.template.selectedIndex = e.target.getAttribute('data-value') * 1;
        const temp = this.options.templates[this.context.template.selectedIndex];

        if (temp.html) {
            this.setContents(temp.html);
        } else {
            this.submenuOff();
            throw Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
        }
        
        this.submenuOff();
    }
});

/***/ }),

/***/ "./node_modules/suneditor/src/plugins/submenu/textStyle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/suneditor/src/plugins/submenu/textStyle.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2017 JiHong Lee.
 * MIT license.
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: 'textStyle',
    display: 'submenu',
    add: function (core, targetElement) {
        const context = core.context;
        context.textStyle = {
            _styleList: null
        };

        /** set submenu */
        let listDiv = this.setSubmenu(core);
        let listUl = listDiv.querySelector('ul');

        /** add event listeners */
        listUl.addEventListener('click', this.pickup.bind(core));

        context.textStyle._styleList = listDiv.querySelectorAll('li button');

        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);

        /** empty memory */
        listDiv = null, listUl = null;
    },

    setSubmenu: function (core) {
        const option = core.options;
        const listDiv = core.util.createElement('DIV');
        listDiv.className = 'se-submenu se-list-layer se-list-format';

        const defaultList = {
            code: {
                name: core.lang.menu.code,
                class: '__se__t-code',
                tag: 'code',
            },
            translucent: {
                name: core.lang.menu.translucent,
                style: 'opacity: 0.5;',
                tag: 'span',
            },
            shadow: {
                name: core.lang.menu.shadow,
                class: '__se__t-shadow',
                tag: 'span',
            }
        };
        const styleList = !option.textStyles ? core._w.Object.keys(defaultList) : option.textStyles;

        let list = '<div class="se-list-inner"><ul class="se-list-basic">';
        for (let i = 0, len = styleList.length, t, tag, name, attrs, command, value, _class; i < len; i++) {
            t = styleList[i];
            attrs = '', value = '', command = [];

            if (typeof t === 'string') {
                const defaultStyle = defaultList[t.toLowerCase()];
                if (!defaultStyle) continue;
                t = defaultStyle;
            }

            name = t.name;
            tag = t.tag || 'span';
            _class = t._class;

            if (t.style) {
                attrs += ' style="' + t.style + '"';
                value += t.style.replace(/:[^;]+(;|$)\s*/g, ',');
                command.push('style');
            }
            if (t.class) {
                attrs += ' class="' + t.class + '"';
                value += '.' + t.class.trim().replace(/\s+/g, ',.');
                command.push('class');
            }

            value = value.replace(/,$/, '');

            list += '<li>' +
                '<button type="button" class="se-btn-list' + (_class ? ' ' + _class: '') + '" data-command="' + tag + '" data-value="' + value + '" title="' + name + '">' +
                    '<' + tag + attrs + '>' + name +  '</' + tag + '>' +
                '</button></li>';
        }
        list += '</ul></div>';

        listDiv.innerHTML = list;

        return listDiv;
    },

     /**
     * @Override submenu
     */
    on: function () {
        const util = this.util;
        const textStyleContext = this.context.textStyle;
        const styleButtonList = textStyleContext._styleList;
        const selectionNode = this.getSelectionNode();

        for (let i = 0, len = styleButtonList.length, btn, data, active; i < len; i++) {
            btn = styleButtonList[i];
            data = btn.getAttribute('data-value').split(',');
            
            for (let v = 0, node, value; v < data.length; v++) {
                node = selectionNode;
                active = false;
                
                while (node && !util.isFormatElement(node) && !util.isComponent(node)) {
                    if (node.nodeName.toLowerCase() === btn.getAttribute('data-command').toLowerCase()) {
                        value = data[v];
                        if (/^\./.test(value) ? util.hasClass(node, value.replace(/^\./, '')) : !!node.style[value]) {
                            active = true;
                            break;
                        }
                    }
                    node = node.parentNode;
                }

                if (!active) break;
            }

            active ? util.addClass(btn, 'active') : util.removeClass(btn, 'active');
        }

    },

    pickup: function (e) {
        e.preventDefault();
        e.stopPropagation();

        let target = e.target;
        let command = null, tag = null;
        
        while (!command && !/UL/i.test(target.tagName)) {
            command = target.getAttribute('data-command');
            if (command) {
                tag = target.firstChild;
                break;
            }
            target = target.parentNode;
        }

        if (!command) return;

        const checkStyles = tag.style.cssText.replace(/:.+(;|$)/g, ',').split(',');
        checkStyles.pop();

        const classes = tag.classList;
        for (let i = 0, len = classes.length; i < len; i++) {
            checkStyles.push('.' + classes[i]);
        }

        const newNode = this.util.hasClass(target, 'active') ? null : tag.cloneNode(false);
        const removeNodes = newNode ? null : [tag.nodeName];
        this.nodeChange(newNode, checkStyles, removeNodes, true);

        this.submenuOff();
    }
});


/***/ }),

/***/ "./resources/js/src/views/admin/AddProduct.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/admin/AddProduct.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddProduct_vue_vue_type_template_id_fabf6410__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=template&id=fabf6410 */ "./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410");
/* harmony import */ var _AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=script&lang=js */ "./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js");
/* harmony import */ var _AddProduct_vue_vue_type_style_index_0_id_fabf6410_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss */ "./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss");
/* harmony import */ var F_untitled1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_untitled1_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddProduct_vue_vue_type_template_id_fabf6410__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/admin/AddProduct.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_fabf6410__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_template_id_fabf6410__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=template&id=fabf6410 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=template&id=fabf6410");


/***/ }),

/***/ "./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AddProduct_vue_vue_type_style_index_0_id_fabf6410_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/admin/AddProduct.vue?vue&type=style&index=0&id=fabf6410&lang=scss");


/***/ })

}]);