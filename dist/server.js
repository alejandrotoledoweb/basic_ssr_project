/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar App = function (_a) {\n    var gists = _a.gists;\n    return ((0, jsx_runtime_1.jsx)(\"ul\", { children: gists.map(function (gist) { return ((0, jsx_runtime_1.jsx)(\"li\", { children: gist.description }, gist.id)); }) }));\n};\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://basic_ssr/./src/app.tsx?");

/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.tsx\"));\nvar template_1 = __importDefault(__webpack_require__(/*! ./template */ \"./src/template.ts\"));\nvar isomorphic_fetch_1 = __importDefault(__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\"));\nvar app = (0, express_1.default)();\napp.use(express_1.default.static(path_1.default.resolve(__dirname, './dist/public')));\napp.get('/', function (res) {\n    (0, isomorphic_fetch_1.default)('https://api.github.com/users/gaearon/gists')\n        .then(function (resp) { return resp.json(); })\n        .then(function (gists) {\n        var body = (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(app_1.default, { gists: gists }));\n        var html = (0, template_1.default)(body, gists);\n        res.send(html);\n    });\n});\napp.listen(3000, function () {\n    console.log('Listening on port 3000');\n});\n\n\n//# sourceURL=webpack://basic_ssr/./src/server.tsx?");

/***/ }),

/***/ "./src/template.ts":
/*!*************************!*\
  !*** ./src/template.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = (function (body, gists) { return \" \\n<!DOCTYPE html> \\n<html> \\n  <head> \\n    <meta charset=\\\"UTF-8\\\"> \\n  </head> \\n  <body> \\n    <div id=\\\"root\\\">\".concat(body, \"</div> \\n    <script>window.gists = \").concat(JSON.stringify(gists), \"</script> \\n    <script src=\\\"/bundle.js\\\"></script> \\n  </body> \\n</html> \\n\"); });\n\n\n//# sourceURL=webpack://basic_ssr/./src/template.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.tsx");
/******/ 	
/******/ })()
;