"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Loading-Screen/loading-screen.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Loading-Screen/loading-screen.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadingPace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loadingPace */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LoadingScreen = function() {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var bodyEl = document.querySelector(\"body\");\n        if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading) {\n            (0,_common_loadingPace__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (bodyEl.classList.contains(\"hideX\")) {\n                bodyEl.classList.remove(\"hideX\");\n            }\n        } else {\n            bodyEl.classList.add(\"hideX\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading === true ? \"showX\" : \"hideX\"),\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 4\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    id: \"preloader\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: \"/assets/img/loading_logo.png\",\n                        alt: \"logo\",\n                        className: \"logo\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 6\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            _data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"pace\",\n                strategy: \"beforeInteractive\",\n                src: \"/assets/js/pace.min.js\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Rohit\\\\Documents\\\\archo\\\\src\\\\components\\\\Loading-Screen\\\\loading-screen.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                },\n                __self: _this\n            }) : \"\"\n        ]\n    }));\n};\n_s(LoadingScreen, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9sb2FkaW5nLXNjcmVlbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTztBQUNrQjtBQUNUOzs7QUFFekMsR0FBSyxDQUFDSSxhQUFhLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQzVCSixzREFBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ3RCLEdBQUcsQ0FBQ00sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFNO1FBQzFDLEVBQUUsRUFBRUwsdURBQW1CLEVBQUUsQ0FBQztZQUN6QkQsK0RBQVc7WUFDWCxFQUFFLEVBQUVJLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDQyxRQUFRLENBQUMsQ0FBTyxTQUFHLENBQUM7Z0JBQ3hDTCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLENBQU87WUFDaEMsQ0FBQztRQUNGLENBQUMsTUFBTSxDQUFDO1lBQ1BOLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDRyxHQUFHLENBQUMsQ0FBTztRQUM3QixDQUFDO0lBQ0YsQ0FBQztJQUNELE1BQU07O2lGQUVIQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUcsR0FBbUQsT0FBakRaLHVEQUFtQixLQUFLLElBQUksR0FBRyxDQUFPLFNBQUcsQ0FBTzs7Ozs7OzsrRkFDakVXLENBQUc7b0JBQUNFLEVBQUUsRUFBQyxDQUFXOzs7Ozs7O21HQUNqQkMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQThCO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0osU0FBUyxFQUFDLENBQU07Ozs7Ozs7Ozs7WUFJcEVaLHVEQUFtQix3RUFDbEJGLG9EQUFNO2dCQUFDZSxFQUFFLEVBQUMsQ0FBTTtnQkFBQ0ksUUFBUSxFQUFDLENBQW1CO2dCQUFDRixHQUFHLEVBQUMsQ0FBd0I7Ozs7Ozs7aUJBRTNFLENBQUU7OztBQUlOLENBQUM7R0EzQktkLGFBQWE7S0FBYkEsYUFBYTtBQTZCbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9sb2FkaW5nLXNjcmVlbi5qc3g/YWM1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBsb2FkaW5nUGFjZSBmcm9tIFwiLi4vLi4vY29tbW9uL2xvYWRpbmdQYWNlXCI7XHJcbmltcG9ydCBhcHBEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2FwcC5qc29uXCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKCkgPT4ge1xyXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0XHRpZiAoYXBwRGF0YS5zaG93TG9hZGluZykge1xyXG5cdFx0XHRsb2FkaW5nUGFjZSgpO1xyXG5cdFx0XHRpZiAoYm9keUVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVYXCIpKSB7XHJcblx0XHRcdFx0Ym9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlWFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ym9keUVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlWFwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake2FwcERhdGEuc2hvd0xvYWRpbmcgPT09IHRydWUgPyBcInNob3dYXCIgOiBcImhpZGVYXCJ9YH0+XHJcblx0XHRcdFx0PGRpdiBpZD1cInByZWxvYWRlclwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvYXNzZXRzL2ltZy9sb2FkaW5nX2xvZ28ucG5nXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG5cdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy10ZXh0XCI+TG9hZGluZ25wbSBydW4gZGV2PC9kaXY+ICovfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2FwcERhdGEuc2hvd0xvYWRpbmcgPyAoXHJcblx0XHRcdFx0PFNjcmlwdCBpZD1cInBhY2VcIiBzdHJhdGVneT1cImJlZm9yZUludGVyYWN0aXZlXCIgc3JjPVwiL2Fzc2V0cy9qcy9wYWNlLm1pbi5qc1wiPjwvU2NyaXB0PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdFwiXCJcclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU2NyZWVuO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTY3JpcHQiLCJsb2FkaW5nUGFjZSIsImFwcERhdGEiLCJMb2FkaW5nU2NyZWVuIiwidXNlRWZmZWN0IiwiYm9keUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2hvd0xvYWRpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW1nIiwic3JjIiwiYWx0Iiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/loading-screen.jsx\n");

/***/ })

});