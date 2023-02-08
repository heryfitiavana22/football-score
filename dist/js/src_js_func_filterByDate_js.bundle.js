"use strict";
(self["webpackChunkFootball_score"] = self["webpackChunkFootball_score"] || []).push([["src_js_func_filterByDate_js"],{

/***/ "./src/js/func/filterByDate.js":
/*!*************************************!*\
  !*** ./src/js/func/filterByDate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((game = [], type) => {
    let filterByDate = [],
        listDate = [];
        // console.log(game);
    if(game.length === 0) return []
    for (let element of game) {
        // raha mbola tsy ao le date
        if (!listDate.includes(element.match_date)) {
            filterByDate.push({
                date: element.match_date,
                game: game.filter((g) => g.match_date === element.match_date), // ireo match amnio date io
            });
            listDate.push(element.match_date);
        }
    }
    if (type === "ASC")
        filterByDate.sort((a, b) => new Date(a.date) - new Date(b.date));
    else {
        filterByDate.sort((a, b) => new Date(b.date) - new Date(a.date));
        let d = new Date();
        // tsy raisina ny date androany 
        if(filterByDate[0].date === `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`) {
            filterByDate.shift()
        }
    }
    return filterByDate;
});


/***/ })

}]);
//# sourceMappingURL=src_js_func_filterByDate_js.bundle.js.map