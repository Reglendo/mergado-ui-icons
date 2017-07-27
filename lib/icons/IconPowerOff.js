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
var IconPowerOff = (function (_super) {
    __extends(IconPowerOff, _super);
    function IconPowerOff() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPowerOff.prototype.render = function () {
        var className = this.name + " " + this.name + "--power-off " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.4-1.4-6.7q0-4.1 1.8-7.7t5-6q1-0.7 2.2-0.5t1.8 1.1q0.8 0.9 0.6 2.1t-1.1 1.9q-2.2 1.6-3.4 4t-1.2 5.1q0 2.3 0.9 4.4t2.5 3.7 3.6 2.4 4.4 0.9 4.5-0.9 3.6-2.4 2.5-3.7 0.9-4.4q0-2.7-1.2-5.1t-3.4-4q-0.9-0.7-1.1-1.9t0.5-2.1q0.7-1 1.9-1.1t2.1 0.5q3.3 2.4 5.1 6t1.8 7.7z m-14.3-17.1v14.2q0 1.2-0.8 2.1t-2.1 0.8-2-0.8-0.8-2.1v-14.2q0-1.2 0.8-2.1t2-0.8 2.1 0.8 0.8 2.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPowerOff;
}(React.Component));
IconPowerOff.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconPowerOff;
//# sourceMappingURL=IconPowerOff.js.map