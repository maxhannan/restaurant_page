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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _heroHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroHolder */ \"./src/heroHolder.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n\n\nconst about = () =>{\n    let navi = (0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBarHandle)();\n    navi.make('about');\n    navi.bindEvents();\n    (0,_heroHolder__WEBPACK_IMPORTED_MODULE_0__.heroBox)('about', 'Say Hi!');\n    \n}\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/heroHolder.js":
/*!***************************!*\
  !*** ./src/heroHolder.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heroBox\": () => (/* binding */ heroBox)\n/* harmony export */ });\nconst heroBox = (section, msg, submsg = '') =>{\n    const content = document.querySelector('#content');\n    let hero = document.createElement('div');\n    hero.classList.add('heroBox');\n    hero.style.backgroundImage = `url(./assets/${section}.png)`;\n    hero.innerHTML = `\n    <div class = 'heroTitle'>\n        <a id = ${section === 'menu' ? 'boxTrig': ''} href = '#'>${msg}</a>\n        <br>\n        <h3>${submsg}</h3>\n    </div>`\n    content.appendChild(hero);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/heroHolder.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _heroHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroHolder */ \"./src/heroHolder.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n\n\nconst home = () =>{\n    let navi = (0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBarHandle)();\n    navi.make('home');\n    navi.bindEvents();\n    (0,_heroHolder__WEBPACK_IMPORTED_MODULE_0__.heroBox)('home', 'Terrazzo','modern italian');\n\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _heroHolder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heroHolder */ \"./src/heroHolder.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n\n\nlet box;\nconst content = document.querySelector('#content');\nconst menu = () =>{\n    let navi = (0,_navBar__WEBPACK_IMPORTED_MODULE_1__.navBarHandle)();\n    navi.make('menu');\n    navi.bindEvents();\n    (0,_heroHolder__WEBPACK_IMPORTED_MODULE_0__.heroBox)('menu', \"Winter\");\n\n    let menu = document.createElement('div');\n    menu.classList.add('menu');\n    menu.id = 'menuBox';\n    menu.innerHTML = '<div id = \"btnHolder\"><button id = \"close\">close</button></div><img id = \"winterMenu\" src = \"./assets/menuWinter.png\"></img>'\n    content.appendChild(menu)\n    box = document.querySelector('#menuBox')\n\n    let boxTrig = document.querySelector('#boxTrig')\n    let boxClose = document.querySelector('#close');\n\n    boxTrig.addEventListener('click', handleboxTrig)\n    boxClose.addEventListener('click', handleboxClose)\n}\n\nconst handleboxTrig = (e) =>{\n\n    box.style.width = '85vw'\n    console.log({e, box})\n}\nconst handleboxClose = (e) =>{\n\n    box.style.width = '0vw'\n    console.log({e, box})\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBarHandle\": () => (/* binding */ navBarHandle)\n/* harmony export */ });\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst content = document.querySelector('#content');\nconst navBarHandle = () =>{\n    const make = (section) =>{\n        const navBar = document.createElement('div');\n        navBar.classList.add('navBar');\n        navBar.innerHTML = `\n        <a  id = 'home' class = \"navLink \n        ${section === 'home' ? 'activePage': ''}\" \n        href = \"#\">Home</a>\n\n        <a  id = 'menu'  class = \"navLink \n        ${section === 'menu' ? 'activePage': ''}\" \n        href = \"#menu\">Menu</a>\n\n        <a  id = 'about' class = \"navLink \n        ${section === 'about' ? 'activePage': ''}\" \n        href = \"#\">About</a>\n        `;\n        content.appendChild(navBar);\n    } \n    \n    \n    const bindEvents = () =>{\n        const links = document.querySelectorAll('.navLink');\n        links.forEach(link => link.addEventListener('click', handleSwitch))\n    }\n    return{\n        bindEvents,\n        make\n    }\n\n}\nconst  handleSwitch = async(e)=>{\n    content.style.opacity = '0'\n    await new Promise(r => setTimeout(r, 700));\n    content.innerHTML = '';\n    switch(e.target.id){\n        case 'home':\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.home)();\n            break\n        case 'about':\n            ;(0,_about__WEBPACK_IMPORTED_MODULE_0__.about)();\n            break\n        case 'menu':\n            ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\n            break\n    }\n    await new Promise(r => setTimeout(r, 350));\n    content.style.opacity = '1'\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/navBar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;