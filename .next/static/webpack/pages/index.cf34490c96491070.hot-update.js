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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useStickyState */ \"./hooks/useStickyState.js\");\n/* harmony import */ var _components_Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Team */ \"./components/Team.js\");\n/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/chunk */ \"./node_modules/lodash/chunk.js\");\n/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar DEFAULT_PLAYERS = [\n    {\n        id: 1,\n        name: \"Player 1\",\n        gp: 0\n    },\n    {\n        id: 2,\n        name: \"Player 2\",\n        gp: 0\n    },\n    {\n        id: 3,\n        name: \"Player 3\",\n        gp: 0\n    },\n    {\n        id: 4,\n        name: \"Player 4\",\n        gp: 0\n    },\n    {\n        id: 5,\n        name: \"Player 5\",\n        gp: 0\n    },\n    {\n        id: 6,\n        name: \"Player 6\",\n        gp: 0\n    },\n    {\n        id: 7,\n        name: \"Player 7\",\n        gp: 0\n    }, \n];\nvar DEFAULT_TEAM_COUNT = 2;\nvar DEFAULT_TEAM_SIZE = 7;\nfunction DocHead() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: \"Create Next App\"\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: \"Generated by create next app\"\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"/favicon.ico\"\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_c = DocHead;\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DEFAULT_TEAM_SIZE, \"teamSize\"), 2), teamSize = ref[0], setTeamSize = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DEFAULT_TEAM_COUNT, \"teamCount\"), 2), teamCount = ref1[0], setTeamCount = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DEFAULT_PLAYERS, \"players\"), 2), players = ref2[0], setPlayers = ref2[1];\n    var teams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        // return Array(teamCount + 1).fill();\n        var effectiveTeamSize = Math.min(teamSize, Math.round(players.length / teamCount));\n        var chunkedPlayers = lodash_chunk__WEBPACK_IMPORTED_MODULE_5___default()(players, effectiveTeamSize);\n        if (chunkedPlayers.length < teamCount + 1) {\n            chunkedPlayers.push([]);\n        }\n        return chunkedPlayers;\n    }, []);\n    console.log(teamCount, teams);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        bg: \"black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DocHead, {}, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                as: \"header\",\n                py: 4,\n                children: \"Team Scrambler\"\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 8,\n                    align: \"stretch\",\n                    children: teams.map(function(team, teamIndex) {\n                        var teamName = teamIndex >= teamCount ? \"Bench\" : \"Team \".concat(teamIndex + 1);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Team__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            name: teamName,\n                            players: team\n                        }, void 0, false, {\n                            fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 20\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/pages/index.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"rRCLNCHLLYRsfdP1TOMETmo0RNk=\", false, function() {\n    return [\n        _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_useStickyState__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"DocHead\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEwQztBQUNiO0FBT0g7QUFDMkI7QUFDZjtBQUNMO0FBRWpDLElBQU1XLGVBQWUsR0FBRztJQUN0QjtRQUFFQyxFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtRQUFFQyxFQUFFLEVBQUUsQ0FBQztLQUFFO0lBQ2xDO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxVQUFVO1FBQUVDLEVBQUUsRUFBRSxDQUFDO0tBQUU7SUFDbEM7UUFBRUYsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLFVBQVU7UUFBRUMsRUFBRSxFQUFFLENBQUM7S0FBRTtJQUNsQztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtRQUFFQyxFQUFFLEVBQUUsQ0FBQztLQUFFO0lBQ2xDO1FBQUVGLEVBQUUsRUFBRSxDQUFDO1FBQUVDLElBQUksRUFBRSxVQUFVO1FBQUVDLEVBQUUsRUFBRSxDQUFDO0tBQUU7SUFDbEM7UUFBRUYsRUFBRSxFQUFFLENBQUM7UUFBRUMsSUFBSSxFQUFFLFVBQVU7UUFBRUMsRUFBRSxFQUFFLENBQUM7S0FBRTtJQUNsQztRQUFFRixFQUFFLEVBQUUsQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtRQUFFQyxFQUFFLEVBQUUsQ0FBQztLQUFFO0NBQ25DO0FBRUQsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBQztBQUM1QixJQUFNQyxpQkFBaUIsR0FBRyxDQUFDO0FBRTNCLFNBQVNDLE9BQU8sR0FBRztJQUNqQixxQkFDRSw4REFBQ2Ysa0RBQUk7OzBCQUNILDhEQUFDZ0IsT0FBSzswQkFBQyxpQkFBZTs7Ozs7b0JBQVE7MEJBQzlCLDhEQUFDQyxNQUFJO2dCQUFDTixJQUFJLEVBQUMsYUFBYTtnQkFBQ08sT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7b0JBQUc7MEJBQ2xFLDhEQUFDQyxNQUFJO2dCQUFDQyxHQUFHLEVBQUMsTUFBTTtnQkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7O29CQUFHOzs7Ozs7WUFDbEMsQ0FDUDtDQUNIO0FBUlFOLEtBQUFBLE9BQU87QUFVRCxTQUFTTyxJQUFJLEdBQUc7OztJQUM3QixJQUFnQ2hCLEdBRy9CLG9GQUgrQkEsaUVBQWMsQ0FDNUNRLGlCQUFpQixFQUNqQixVQUFVLENBQ1gsTUFITVMsUUFBUSxHQUFpQmpCLEdBRy9CLEdBSGMsRUFBRWtCLFdBQVcsR0FBSWxCLEdBRy9CLEdBSDJCO0lBSTVCLElBQWtDQSxJQUdqQyxvRkFIaUNBLGlFQUFjLENBQzlDTyxrQkFBa0IsRUFDbEIsV0FBVyxDQUNaLE1BSE1ZLFNBQVMsR0FBa0JuQixJQUdqQyxHQUhlLEVBQUVvQixZQUFZLEdBQUlwQixJQUdqQyxHQUg2QjtJQUk5QixJQUE4QkEsSUFHN0Isb0ZBSDZCQSxpRUFBYyxDQUMxQ0csZUFBZSxFQUNmLFNBQVMsQ0FDVixNQUhNa0IsT0FBTyxHQUFnQnJCLElBRzdCLEdBSGEsRUFBRXNCLFVBQVUsR0FBSXRCLElBRzdCLEdBSHlCO0lBSzFCLElBQU11QixLQUFLLEdBQUc5Qiw4Q0FBTyxDQUFDLFdBQU07UUFDMUIsc0NBQXNDO1FBRXRDLElBQU0rQixpQkFBaUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQ2hDVCxRQUFRLEVBQ1JRLElBQUksQ0FBQ0UsS0FBSyxDQUFDTixPQUFPLENBQUNPLE1BQU0sR0FBR1QsU0FBUyxDQUFDLENBQ3ZDO1FBRUQsSUFBTVUsY0FBYyxHQUFHM0IsbURBQUssQ0FBQ21CLE9BQU8sRUFBRUcsaUJBQWlCLENBQUM7UUFFeEQsSUFBSUssY0FBYyxDQUFDRCxNQUFNLEdBQUdULFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDekNVLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsT0FBT0QsY0FBYyxDQUFDO0tBQ3ZCLEVBQUUsRUFBRSxDQUFDO0lBRU5FLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixTQUFTLEVBQUVJLEtBQUssQ0FBQyxDQUFDO0lBRTlCLHFCQUNFLDhEQUFDM0IsdURBQVM7UUFBQ3FDLEVBQUUsRUFBQyxPQUFPOzswQkFDbkIsOERBQUN4QixPQUFPOzs7O29CQUFHOzBCQUNYLDhEQUFDWixpREFBRztnQkFBQ3FDLEVBQUUsRUFBQyxRQUFRO2dCQUFDQyxFQUFFLEVBQUUsQ0FBQzswQkFBRSxnQkFFeEI7Ozs7O29CQUFNOzBCQUNOLDhEQUFDQyxNQUFJOzBCQUNILDRFQUFDckMsb0RBQU07b0JBQUNzQyxPQUFPLEVBQUUsQ0FBQztvQkFBRUMsS0FBSyxFQUFDLFNBQVM7OEJBQ2hDZixLQUFLLENBQUNnQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxTQUFTLEVBQUs7d0JBQzlCLElBQU1DLFFBQVEsR0FDWkQsU0FBUyxJQUFJdEIsU0FBUyxHQUNsQixPQUFPLEdBQ1AsT0FBTSxDQUFnQixPQUFkc0IsU0FBUyxHQUFHLENBQUMsQ0FBRTt3QkFDN0IscUJBQU8sOERBQUN4Qyx3REFBSTs0QkFBQ0ksSUFBSSxFQUFFcUMsUUFBUTs0QkFBRXJCLE9BQU8sRUFBRW1CLElBQUk7Ozs7O2lDQUFJLENBQUM7cUJBQ2hELENBQUM7Ozs7O3dCQUNLOzs7OztvQkFDSjswQkFDUCw4REFBQ0csUUFBTTs7OztvQkFBVTs7Ozs7O1lBQ1AsQ0FDWjtDQUNIO0dBckR1QjNCLElBQUk7O1FBQ01oQiw2REFBYztRQUlaQSw2REFBYztRQUlsQkEsNkRBQWM7OztBQVR0QmdCLE1BQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge1xuICBIZWFkaW5nLFxuICBDb250YWluZXIsXG4gIEJveCxcbiAgU3RhY2tEaXZpZGVyLFxuICBWU3RhY2ssXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHVzZVN0aWNreVN0YXRlIGZyb20gJy4uL2hvb2tzL3VzZVN0aWNreVN0YXRlJztcbmltcG9ydCBUZWFtIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbSc7XG5pbXBvcnQgY2h1bmsgZnJvbSAnbG9kYXNoL2NodW5rJztcblxuY29uc3QgREVGQVVMVF9QTEFZRVJTID0gW1xuICB7IGlkOiAxLCBuYW1lOiAnUGxheWVyIDEnLCBncDogMCB9LFxuICB7IGlkOiAyLCBuYW1lOiAnUGxheWVyIDInLCBncDogMCB9LFxuICB7IGlkOiAzLCBuYW1lOiAnUGxheWVyIDMnLCBncDogMCB9LFxuICB7IGlkOiA0LCBuYW1lOiAnUGxheWVyIDQnLCBncDogMCB9LFxuICB7IGlkOiA1LCBuYW1lOiAnUGxheWVyIDUnLCBncDogMCB9LFxuICB7IGlkOiA2LCBuYW1lOiAnUGxheWVyIDYnLCBncDogMCB9LFxuICB7IGlkOiA3LCBuYW1lOiAnUGxheWVyIDcnLCBncDogMCB9LFxuXTtcblxuY29uc3QgREVGQVVMVF9URUFNX0NPVU5UID0gMjtcbmNvbnN0IERFRkFVTFRfVEVBTV9TSVpFID0gNztcblxuZnVuY3Rpb24gRG9jSGVhZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RlYW1TaXplLCBzZXRUZWFtU2l6ZV0gPSB1c2VTdGlja3lTdGF0ZShcbiAgICBERUZBVUxUX1RFQU1fU0laRSxcbiAgICAndGVhbVNpemUnLFxuICApO1xuICBjb25zdCBbdGVhbUNvdW50LCBzZXRUZWFtQ291bnRdID0gdXNlU3RpY2t5U3RhdGUoXG4gICAgREVGQVVMVF9URUFNX0NPVU5ULFxuICAgICd0ZWFtQ291bnQnLFxuICApO1xuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGlja3lTdGF0ZShcbiAgICBERUZBVUxUX1BMQVlFUlMsXG4gICAgJ3BsYXllcnMnLFxuICApO1xuXG4gIGNvbnN0IHRlYW1zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgLy8gcmV0dXJuIEFycmF5KHRlYW1Db3VudCArIDEpLmZpbGwoKTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZVRlYW1TaXplID0gTWF0aC5taW4oXG4gICAgICB0ZWFtU2l6ZSxcbiAgICAgIE1hdGgucm91bmQocGxheWVycy5sZW5ndGggLyB0ZWFtQ291bnQpLFxuICAgICk7XG5cbiAgICBjb25zdCBjaHVua2VkUGxheWVycyA9IGNodW5rKHBsYXllcnMsIGVmZmVjdGl2ZVRlYW1TaXplKTtcblxuICAgIGlmIChjaHVua2VkUGxheWVycy5sZW5ndGggPCB0ZWFtQ291bnQgKyAxKSB7XG4gICAgICBjaHVua2VkUGxheWVycy5wdXNoKFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtlZFBsYXllcnM7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyh0ZWFtQ291bnQsIHRlYW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYmc9XCJibGFja1wiPlxuICAgICAgPERvY0hlYWQgLz5cbiAgICAgIDxCb3ggYXM9XCJoZWFkZXJcIiBweT17NH0+XG4gICAgICAgIFRlYW0gU2NyYW1ibGVyXG4gICAgICA8L0JveD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezh9IGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW0sIHRlYW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPVxuICAgICAgICAgICAgICB0ZWFtSW5kZXggPj0gdGVhbUNvdW50XG4gICAgICAgICAgICAgICAgPyAnQmVuY2gnXG4gICAgICAgICAgICAgICAgOiBgVGVhbSAke3RlYW1JbmRleCArIDF9YDtcbiAgICAgICAgICAgIHJldHVybiA8VGVhbSBuYW1lPXt0ZWFtTmFtZX0gcGxheWVycz17dGVhbX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVlN0YWNrPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJIZWFkIiwiSGVhZGluZyIsIkNvbnRhaW5lciIsIkJveCIsIlN0YWNrRGl2aWRlciIsIlZTdGFjayIsInVzZVN0aWNreVN0YXRlIiwiVGVhbSIsImNodW5rIiwiREVGQVVMVF9QTEFZRVJTIiwiaWQiLCJuYW1lIiwiZ3AiLCJERUZBVUxUX1RFQU1fQ09VTlQiLCJERUZBVUxUX1RFQU1fU0laRSIsIkRvY0hlYWQiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJIb21lIiwidGVhbVNpemUiLCJzZXRUZWFtU2l6ZSIsInRlYW1Db3VudCIsInNldFRlYW1Db3VudCIsInBsYXllcnMiLCJzZXRQbGF5ZXJzIiwidGVhbXMiLCJlZmZlY3RpdmVUZWFtU2l6ZSIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsImxlbmd0aCIsImNodW5rZWRQbGF5ZXJzIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJiZyIsImFzIiwicHkiLCJtYWluIiwic3BhY2luZyIsImFsaWduIiwibWFwIiwidGVhbSIsInRlYW1JbmRleCIsInRlYW1OYW1lIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});