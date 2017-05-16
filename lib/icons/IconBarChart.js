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
var IconBarChart = (function (_super) {
    __extends(IconBarChart, _super);
    function IconBarChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBarChart.prototype.render = function () {
        var className = this.name + " " + this.name + "--bar-chart";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.4 20v9.9h-4.9v-9.9h4.9z m7.5-9.9v19.8h-5v-19.8h5z m19.9 22.3v2.5h-39.8v-29.8h2.5v27.3h37.3z m-12.5-17.4v14.9h-4.9v-14.9h4.9z m7.5-7.4v22.3h-5v-22.3h5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBarChart;
}(React.Component));
IconBarChart.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconBarChart;
//# sourceMappingURL=IconBarChart.js.map