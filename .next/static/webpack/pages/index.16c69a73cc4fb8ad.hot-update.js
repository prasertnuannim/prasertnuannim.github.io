"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/splitStringUsingRegex.tsx":
/*!*********************************************!*\
  !*** ./src/utils/splitStringUsingRegex.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ splitStringUsingRegex; }\n/* harmony export */ });\nfunction splitStringUsingRegex(inputString) {\n    const characters = [];\n    const regex = /[\\s\\S]/g;\n    let match;\n    while((match = regex.exec(inputString)) !== null){\n        characters.push(match[0]);\n    }\n    return characters;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3BsaXRTdHJpbmdVc2luZ1JlZ2V4LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0Esc0JBQXNCQyxXQUFtQjtJQUM3RCxNQUFNQyxhQUF1QixFQUFFO0lBQy9CLE1BQU1DLFFBQVE7SUFFZCxJQUFJQztJQUVKLE1BQU8sQ0FBQ0EsUUFBUUQsTUFBTUUsSUFBSSxDQUFDSixZQUFXLE1BQU8sS0FBTTtRQUMvQ0MsV0FBV0ksSUFBSSxDQUFDRixLQUFLLENBQUMsRUFBRTtJQUM1QjtJQUVBLE9BQU9GO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3NwbGl0U3RyaW5nVXNpbmdSZWdleC50c3g/NWRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdFN0cmluZ1VzaW5nUmVnZXgoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCByZWdleCA9IC9bXFxzXFxTXS9nO1xyXG5cclxuICAgIGxldCBtYXRjaDtcclxuICAgIFxyXG4gICAgd2hpbGUgKChtYXRjaCA9IHJlZ2V4LmV4ZWMoaW5wdXRTdHJpbmcpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNoYXJhY3RlcnMucHVzaChtYXRjaFswXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNoYXJhY3RlcnM7XHJcbn0iXSwibmFtZXMiOlsic3BsaXRTdHJpbmdVc2luZ1JlZ2V4IiwiaW5wdXRTdHJpbmciLCJjaGFyYWN0ZXJzIiwicmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/splitStringUsingRegex.tsx\n"));

/***/ })

});