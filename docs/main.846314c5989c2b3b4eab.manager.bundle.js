(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2155:function(module,exports,__webpack_require__){__webpack_require__(2156),__webpack_require__(3430),__webpack_require__(3424),__webpack_require__(3434),__webpack_require__(3435),__webpack_require__(3431),__webpack_require__(3428),__webpack_require__(3427),__webpack_require__(3429),__webpack_require__(3426),__webpack_require__(3432),__webpack_require__(3433),__webpack_require__(3425),module.exports=__webpack_require__(3418)},2246:function(module,exports){},2295:function(module,exports){},3430:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1530);var esm=__webpack_require__(270),create=__webpack_require__(542),theme=Object(create.a)({base:"light",brandTitle:"Rancher Storybook",brandImage:"https://raw.githubusercontent.com/rancher/dashboard/master/assets/images/pl/rancher-logo.svg"});esm.c.setConfig({panelPosition:"right",theme:theme});var loader=window.onload;window.onload=function(){var isMac;esm.c.getChannel().on("shortcut-toggle-dark-mode",(function(a){var toolbar=document.getElementsByClassName("os-content");if(toolbar.length>2){for(var found,aTags=toolbar[1].getElementsByTagName("button"),i=0;i<aTags.length;i++)if(aTags[i].title&&0===aTags[i].title.indexOf("Change theme to ")){found=aTags[i];break}found&&found.click()}})),isMac=0===window.navigator.platform.indexOf("Mac"),document.onkeyup=function(e){(isMac?e.altKey:e.ctrlKey)&&84===e.which&&esm.c.getChannel().emit("shortcut-toggle-dark-mode")},loader&&loader()}}},[[2155,2,3]]]);