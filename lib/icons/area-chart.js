"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IconAreaChart = (function (_super) {
    __extends(IconAreaChart, _super);
    function IconAreaChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconAreaChart.prototype.render = function () {
        return React.createElement("g", null,
            React.createElement("path", { d: "m39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-7.5-19.9l5 17.4h-32.3v-11.1l8.7-11.2 11.1 11.2z" }));
    };
    return IconAreaChart;
}(React.Component));
exports.default = IconAreaChart;
//# sourceMappingURL=area-chart.js.map