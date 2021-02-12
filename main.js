/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const tester = (name)=>{\n    const element = document.createElement('div');\n    element.innerHTML = `<h1>Hello ${name}.</h1>`;\n    document.body.appendChild(element)\n}\n\ntester(max);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");
/******/ })()
;