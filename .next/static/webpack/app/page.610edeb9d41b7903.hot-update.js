"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/input */ \"(app-pages-browser)/./components/input.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCharacter, setSelectedCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleInputChange = (e)=>{\n        const value = e.target.value;\n        setInputValue(value);\n    // Realize a chamada à API Marvel aqui e atualize o estado \"characters\" com os resultados.\n    };\n    const handleCharacterClick = (name)=>{\n        setInputValue(name);\n    };\n    const handleButtonClick = ()=>{\n        // Aqui você define o valor de selectedCharacter como o valor atual de inputValue.\n        setSelectedCharacter(inputValue);\n    // Agora, você pode realizar a chamada à API Marvel para obter os detalhes do personagem selecionado.\n    // Note que você precisará implementar a chamada à API aqui.\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-sans m-0 p-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-screen-xl mx-auto p-4 mt-52 flex flex-wrap justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                inputValue: inputValue,\n                onChange: handleInputChange,\n                onClick: handleButtonClick\n            }, void 0, false, {\n                fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e7tltpG4gXJk6WMyBVwSjmWtQPE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDRztBQUU1QixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ssWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ08sbUJBQW1CQyxxQkFBcUIsR0FBR1IsK0NBQVFBLENBQUM7SUFFM0QsTUFBTVMsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSztRQUM1QlAsY0FBY087SUFFZCwwRkFBMEY7SUFDNUY7SUFFQSxNQUFNRSx1QkFBdUIsQ0FBQ0M7UUFDNUJWLGNBQWNVO0lBQ2hCO0lBQ0EsTUFBTUMsb0JBQW9CO1FBQ3hCLGtGQUFrRjtRQUNsRlAscUJBQXFCTDtJQUVyQixxR0FBcUc7SUFDckcsNERBQTREO0lBQzlEO0lBRUEscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNoQix5REFBUUE7Z0JBQ1BFLFlBQVlBO2dCQUNaZSxVQUFVVDtnQkFDVlUsU0FBU0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkI7R0FsQ3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qcz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcmFjdGVyLCBzZXRTZWxlY3RlZENoYXJhY3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKTtcblxuICAgIC8vIFJlYWxpemUgYSBjaGFtYWRhIMOgIEFQSSBNYXJ2ZWwgYXF1aSBlIGF0dWFsaXplIG8gZXN0YWRvIFwiY2hhcmFjdGVyc1wiIGNvbSBvcyByZXN1bHRhZG9zLlxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYXJhY3RlckNsaWNrID0gKG5hbWUpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKG5hbWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICAvLyBBcXVpIHZvY8OqIGRlZmluZSBvIHZhbG9yIGRlIHNlbGVjdGVkQ2hhcmFjdGVyIGNvbW8gbyB2YWxvciBhdHVhbCBkZSBpbnB1dFZhbHVlLlxuICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVyKGlucHV0VmFsdWUpO1xuXG4gICAgLy8gQWdvcmEsIHZvY8OqIHBvZGUgcmVhbGl6YXIgYSBjaGFtYWRhIMOgIEFQSSBNYXJ2ZWwgcGFyYSBvYnRlciBvcyBkZXRhbGhlcyBkbyBwZXJzb25hZ2VtIHNlbGVjaW9uYWRvLlxuICAgIC8vIE5vdGUgcXVlIHZvY8OqIHByZWNpc2Fyw6EgaW1wbGVtZW50YXIgYSBjaGFtYWRhIMOgIEFQSSBhcXVpLlxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgbS0wIHAtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBwLTQgbXQtNTIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPElucHV0Qm94XG4gICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW5wdXRCb3giLCJIb21lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsInNlbGVjdGVkQ2hhcmFjdGVyIiwic2V0U2VsZWN0ZWRDaGFyYWN0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZUNoYXJhY3RlckNsaWNrIiwibmFtZSIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});