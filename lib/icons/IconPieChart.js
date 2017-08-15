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
var IconPieChart = (function (_super) {
    __extends(IconPieChart, _super);
    function IconPieChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPieChart.prototype.render = function () {
        var className = this.name + " " + this.name + "--pie-chart " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.6 19.9l12.2 12.2q-2.3 2.4-5.5 3.7t-6.7 1.3q-4.6 0-8.6-2.3t-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3v17z m4.2 0.1h17.3q0 3.5-1.4 6.7t-3.7 5.5z m15.8-2.9h-17.1v-17.1q4.7 0 8.6 2.3t6.2 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconPieChart.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconPieChart;
}(React.Component));
exports.default = IconPieChart;
//# sourceMappingURL=IconPieChart.js.map