"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var config = require("./config.json");
axios_1["default"].get('https://www.googleapis.com/youtube/v3/search?', {
    params: {
        key: config.key,
        part: 'snippet',
        maxResults: 25,
        q: 'jazz'
    }
})
    .then(function (response) {
    console.log(response);
})["catch"](function (error) {
    console.log(error);
})
    .then(function () {
    // always executed
});
