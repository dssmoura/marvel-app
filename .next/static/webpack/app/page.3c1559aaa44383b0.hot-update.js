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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/input */ \"(app-pages-browser)/./components/input.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ \"(app-pages-browser)/./components/Card.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedCharacter, setSelectedCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const timestamp = \"1694478380382\";\n    const apiKey = \"7a63a78e151d51eb9f30e487feb1283d\";\n    const hashValue = \"9afd57b31a5c7bcfb7197fe2345b874a\";\n    const fetchData = async ()=>{\n        const url = \"https://gateway.marvel.com:443/v1/public/characters?ts=\".concat(timestamp, \"&apikey=\").concat(apiKey, \"&hash=\").concat(hashValue, \"&name=\").concat(inputValue);\n        try {\n            const response = await fetch(url);\n            const jsonData = await response.json();\n            setCharacters(jsonData.data.results);\n            console.log(\"Resultado da busca de personagens:\", JSON.stringify(jsonData.data.results));\n        } catch (error) {\n            console.error(\"Erro ao buscar dados da API Marvel:\", error);\n        }\n    };\n    const handleInputChange = (e)=>{\n        const value = e.target.value;\n        setInputValue(value);\n    };\n    const handleCharacterClick = (name)=>{\n        setInputValue(name);\n    };\n    const handleButtonClick = ()=>{\n        if (inputValue) {\n            fetchData();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-sans m-0 p-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto p-4 mt-52 flex flex-wrap justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    inputValue: inputValue,\n                    onChange: handleInputChange,\n                    onClick: handleButtonClick\n                }, void 0, false, {\n                    fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-xl mx-auto p-4 mt-52 flex flex-wrap justify-center\",\n                children: characters.map((character, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        name: character.name,\n                        description: character.description,\n                        thumbnail: \"\".concat(character.thumbnail.path, \".\").concat(character.thumbnail.extension)\n                    }, index, false, {\n                        fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/danilo/DsM/Estudos/marvel-app/app/page.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"e7tltpG4gXJk6WMyBVwSjmWtQPE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1I7QUFDTDtBQUV2QixTQUFTSzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1MsbUJBQW1CQyxxQkFBcUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0QsTUFBTVcsWUFBWTtJQUNsQixNQUFNQyxTQUFTO0lBQ2YsTUFBTUMsWUFBWTtJQUVsQixNQUFNQyxZQUFZO1FBQ2hCLE1BQU1DLE1BQU0sMERBQThFSCxPQUFwQkQsV0FBVSxZQUF5QkUsT0FBZkQsUUFBTyxVQUEwQlAsT0FBbEJRLFdBQVUsVUFBbUIsT0FBWFI7UUFFM0gsSUFBSTtZQUNGLE1BQU1XLFdBQVcsTUFBTUMsTUFBTUY7WUFDN0IsTUFBTUcsV0FBVyxNQUFNRixTQUFTRyxJQUFJO1lBQ3BDWCxjQUFjVSxTQUFTRSxJQUFJLENBQUNDLE9BQU87WUFDbkNDLFFBQVFDLEdBQUcsQ0FDVCxzQ0FDQUMsS0FBS0MsU0FBUyxDQUFDUCxTQUFTRSxJQUFJLENBQUNDLE9BQU87UUFFeEMsRUFBRSxPQUFPSyxPQUFPO1lBQ2RKLFFBQVFJLEtBQUssQ0FBQyx1Q0FBdUNBO1FBQ3ZEO0lBQ0Y7SUFFQSxNQUFNQyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTUMsUUFBUUQsRUFBRUUsTUFBTSxDQUFDRCxLQUFLO1FBQzVCdkIsY0FBY3VCO0lBQ2hCO0lBRUEsTUFBTUUsdUJBQXVCLENBQUNDO1FBQzVCMUIsY0FBYzBCO0lBQ2hCO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUk1QixZQUFZO1lBQ2RTO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDb0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDakMseURBQVFBO29CQUNQRyxZQUFZQTtvQkFDWitCLFVBQVVUO29CQUNWVSxTQUFTSjs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaNUIsV0FBVytCLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDMUIsOERBQUNyQyx3REFBSUE7d0JBRUg2QixNQUFNTyxVQUFVUCxJQUFJO3dCQUNwQlMsYUFBYUYsVUFBVUUsV0FBVzt3QkFDbENDLFdBQVcsR0FBK0JILE9BQTVCQSxVQUFVRyxTQUFTLENBQUNDLElBQUksRUFBQyxLQUFpQyxPQUE5QkosVUFBVUcsU0FBUyxDQUFDRSxTQUFTO3VCQUhsRUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTakI7R0E3RHdCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2hhcmFjdGVyLCBzZXRTZWxlY3RlZENoYXJhY3Rlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB0aW1lc3RhbXAgPSBcIjE2OTQ0NzgzODAzODJcIjtcbiAgY29uc3QgYXBpS2V5ID0gXCI3YTYzYTc4ZTE1MWQ1MWViOWYzMGU0ODdmZWIxMjgzZFwiO1xuICBjb25zdCBoYXNoVmFsdWUgPSBcIjlhZmQ1N2IzMWE1YzdiY2ZiNzE5N2ZlMjM0NWI4NzRhXCI7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2dhdGV3YXkubWFydmVsLmNvbTo0NDMvdjEvcHVibGljL2NoYXJhY3RlcnM/dHM9JHt0aW1lc3RhbXB9JmFwaWtleT0ke2FwaUtleX0maGFzaD0ke2hhc2hWYWx1ZX0mbmFtZT0ke2lucHV0VmFsdWV9YDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldENoYXJhY3RlcnMoanNvbkRhdGEuZGF0YS5yZXN1bHRzKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIlJlc3VsdGFkbyBkYSBidXNjYSBkZSBwZXJzb25hZ2VuczpcIixcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEuZGF0YS5yZXN1bHRzKVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm8gYW8gYnVzY2FyIGRhZG9zIGRhIEFQSSBNYXJ2ZWw6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhcmFjdGVyQ2xpY2sgPSAobmFtZSkgPT4ge1xuICAgIHNldElucHV0VmFsdWUobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIG0tMCBwLTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIG14LWF1dG8gcC00IG10LTUyIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxJbnB1dEJveFxuICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBteC1hdXRvIHAtNCBtdC01MiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICB7Y2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG5hbWU9e2NoYXJhY3Rlci5uYW1lfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2NoYXJhY3Rlci5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHRodW1ibmFpbD17YCR7Y2hhcmFjdGVyLnRodW1ibmFpbC5wYXRofS4ke2NoYXJhY3Rlci50aHVtYm5haWwuZXh0ZW5zaW9ufWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRCb3giLCJDYXJkIiwiSG9tZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJzZWxlY3RlZENoYXJhY3RlciIsInNldFNlbGVjdGVkQ2hhcmFjdGVyIiwidGltZXN0YW1wIiwiYXBpS2V5IiwiaGFzaFZhbHVlIiwiZmV0Y2hEYXRhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb25EYXRhIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlQ2hhcmFjdGVyQ2xpY2siLCJuYW1lIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJtYXAiLCJjaGFyYWN0ZXIiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwidGh1bWJuYWlsIiwicGF0aCIsImV4dGVuc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});