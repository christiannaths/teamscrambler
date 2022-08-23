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

/***/ "./components/AppMenu.js":
/*!*******************************!*\
  !*** ./components/AppMenu.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AppMenu(param) {\n    var teamSize = param.teamSize, onChangeTeamSize = param.onChangeTeamSize;\n    _s();\n    var initialFocusRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)(), isOpen = ref.isOpen, onToggle = ref.onToggle, onClose = ref.onClose;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {\n        placement: \"top-start\",\n        initialFocusRef: initialFocusRef,\n        closeOnBlur: false,\n        isOpen: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverTrigger, {\n                onClick: onToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__.IoSettingsSharp, {}, void 0, false, void 0, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverContent, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverHeader, {\n                        fontWeight: \"semibold\",\n                        children: \"Settings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverArrow, {}, void 0, false, {\n                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverCloseButton, {}, void 0, false, {\n                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {\n                            spacing: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {\n                                spacing: 4,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        mb: \"8px\",\n                                        children: [\n                                            \"Value: \",\n                                            teamSize\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {\n                                        value: teamSize,\n                                        min: 2,\n                                        max: 200,\n                                        size: \"md\",\n                                        maxW: 24,\n                                        onChange: onChangeTeamSize,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NumberInputField, {}, void 0, false, {\n                                                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NumberInputStepper, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NumberIncrementStepper, {}, void 0, false, {\n                                                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.NumberDecrementStepper, {}, void 0, false, {\n                                                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.PopoverFooter, {\n                        border: \"0\",\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"space-between\",\n                        pb: 4,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                variant: \"outline\",\n                                size: \"sm\",\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                onClick: onClose,\n                                colorScheme: \"blue\",\n                                ref: initialFocusRef,\n                                children: \"Done\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christiannaths/Projects/christiannaths/teamscrambler/components/AppMenu.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(AppMenu, \"/ZAkaox9pVLBzX7mBGKbRq20nEs=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure\n    ];\n});\n_c = AppMenu;\nAppMenu.defaultProps = {};\nAppMenu.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppMenu);\nvar _c;\n$RefreshReg$(_c, \"AppMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hCLENBQUM7QUFFRiwrREFBZStCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwcE1lbnUuanM/NWQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIEhlYWRpbmcsXG4gIENvbnRhaW5lcixcbiAgQm94LFxuICBTdGFja0RpdmlkZXIsXG4gIFZTdGFjayxcbiAgSFN0YWNrLFxuICBJY29uQnV0dG9uLFxuICBCdXR0b24sXG4gIFRleHQsXG4gIEljb24sXG4gIE1lbnUsXG4gIE1lbnVCdXR0b24sXG4gIE1lbnVMaXN0LFxuICBNZW51SXRlbSxcbiAgUG9wb3ZlcixcbiAgUG9wb3ZlclRyaWdnZXIsXG4gIFBvcG92ZXJDb250ZW50LFxuICBQb3BvdmVySGVhZGVyLFxuICBQb3BvdmVyQXJyb3csXG4gIFBvcG92ZXJDbG9zZUJ1dHRvbixcbiAgUG9wb3ZlckJvZHksXG4gIFBvcG92ZXJGb290ZXIsXG4gIE51bWJlcklucHV0LFxuICBOdW1iZXJJbnB1dEZpZWxkLFxuICBOdW1iZXJJbnB1dFN0ZXBwZXIsXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXG4gIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsXG4gIHVzZURpc2Nsb3N1cmUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgSW9TaHVmZmxlLCBJb1NldHRpbmdzU2hhcnAgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnO1xuXG5mdW5jdGlvbiBBcHBNZW51KHsgdGVhbVNpemUsIG9uQ2hhbmdlVGVhbVNpemUgfSkge1xuICBjb25zdCBpbml0aWFsRm9jdXNSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgeyBpc09wZW4sIG9uVG9nZ2xlLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9wb3ZlclxuICAgICAgcGxhY2VtZW50PVwidG9wLXN0YXJ0XCJcbiAgICAgIGluaXRpYWxGb2N1c1JlZj17aW5pdGlhbEZvY3VzUmVmfVxuICAgICAgY2xvc2VPbkJsdXI9e2ZhbHNlfVxuICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgPlxuICAgICAgPFBvcG92ZXJUcmlnZ2VyIG9uQ2xpY2s9e29uVG9nZ2xlfT5cbiAgICAgICAgPEljb25CdXR0b24gaWNvbj17PElvU2V0dGluZ3NTaGFycCAvPn0gLz5cbiAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICA8UG9wb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxQb3BvdmVySGVhZGVyIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiPlNldHRpbmdzPC9Qb3BvdmVySGVhZGVyPlxuICAgICAgICA8UG9wb3ZlckFycm93IC8+XG4gICAgICAgIDxQb3BvdmVyQ2xvc2VCdXR0b24gLz5cbiAgICAgICAgPFBvcG92ZXJCb2R5PlxuICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz17NH0+XG4gICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICA8VGV4dCBtYj1cIjhweFwiPlZhbHVlOiB7dGVhbVNpemV9PC9UZXh0PlxuICAgICAgICAgICAgICA8TnVtYmVySW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGVhbVNpemV9XG4gICAgICAgICAgICAgICAgbWluPXsyfVxuICAgICAgICAgICAgICAgIG1heD17MjAwfVxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgbWF4Vz17MjR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGVhbVNpemV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCAvPlxuICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XG4gICAgICAgICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxuICAgICAgICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cbiAgICAgICAgICAgICAgICA8L051bWJlcklucHV0U3RlcHBlcj5cbiAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dD5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L1BvcG92ZXJCb2R5PlxuICAgICAgICA8UG9wb3ZlckZvb3RlclxuICAgICAgICAgIGJvcmRlcj1cIjBcIlxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIHBiPXs0fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgcmVmPXtpbml0aWFsRm9jdXNSZWZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG9uZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1BvcG92ZXJGb290ZXI+XG4gICAgICA8L1BvcG92ZXJDb250ZW50PlxuICAgIDwvUG9wb3Zlcj5cbiAgKTtcbn1cblxuQXBwTWVudS5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQXBwTWVudS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTWVudTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWRpbmciLCJDb250YWluZXIiLCJCb3giLCJTdGFja0RpdmlkZXIiLCJWU3RhY2siLCJIU3RhY2siLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwiVGV4dCIsIkljb24iLCJNZW51IiwiTWVudUJ1dHRvbiIsIk1lbnVMaXN0IiwiTWVudUl0ZW0iLCJQb3BvdmVyIiwiUG9wb3ZlclRyaWdnZXIiLCJQb3BvdmVyQ29udGVudCIsIlBvcG92ZXJIZWFkZXIiLCJQb3BvdmVyQXJyb3ciLCJQb3BvdmVyQ2xvc2VCdXR0b24iLCJQb3BvdmVyQm9keSIsIlBvcG92ZXJGb290ZXIiLCJOdW1iZXJJbnB1dCIsIk51bWJlcklucHV0RmllbGQiLCJOdW1iZXJJbnB1dFN0ZXBwZXIiLCJOdW1iZXJJbmNyZW1lbnRTdGVwcGVyIiwiTnVtYmVyRGVjcmVtZW50U3RlcHBlciIsInVzZURpc2Nsb3N1cmUiLCJJb1NodWZmbGUiLCJJb1NldHRpbmdzU2hhcnAiLCJBcHBNZW51IiwidGVhbVNpemUiLCJvbkNoYW5nZVRlYW1TaXplIiwiaW5pdGlhbEZvY3VzUmVmIiwidXNlUmVmIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJvbkNsb3NlIiwicGxhY2VtZW50IiwiY2xvc2VPbkJsdXIiLCJvbkNsaWNrIiwiaWNvbiIsImZvbnRXZWlnaHQiLCJzcGFjaW5nIiwibWIiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInNpemUiLCJtYXhXIiwib25DaGFuZ2UiLCJib3JkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGIiLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJyZWYiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsImFueSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppMenu.js\n"));

/***/ })

});