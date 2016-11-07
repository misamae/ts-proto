"use strict";
var $ = require('jquery');
var d3 = require('d3');
var crossfilter = require('crossfilter');
// import 'd3/d3';
// import d3 from 'd3';
var App = (function () {
    function App() {
        this.sample = 'test';
        console.log($('#test'));
        d3.json('data/speeds.json', this.callback);
    }
    App.prototype.callback = function (data) {
        console.log('callback');
        console.log(data);
        var filter = crossfilter(data);
        console.log(filter);
    };
    return App;
}());
exports.App = App;
var app = new App();
//# sourceMappingURL=app.js.map