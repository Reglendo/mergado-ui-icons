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
var IconLineChart = (function (_super) {
    __extends(IconLineChart, _super);
    function IconLineChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLineChart.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.8 32.4v2.5h-39.8v-29.8h2.5v27.3h37.3z m-2.5-24.2v8.4q0 0.5-0.4 0.6t-0.7-0.1l-2.3-2.4-12.3 12.3q-0.2 0.2-0.5 0.2t-0.4-0.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q0.2-0.2 0.4-0.2t0.5 0.2l4.5 4.5 9-9-2.3-2.4q-0.3-0.3-0.2-0.6t0.6-0.4h8.4q0.3 0 0.5 0.2t0.2 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLineChart;
}(React.Component));
IconLineChart.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconLineChart;
//# sourceMappingURL=line-chart.js.map