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
var IconExclamationTriangle = (function (_super) {
    __extends(IconExclamationTriangle, _super);
    function IconExclamationTriangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconExclamationTriangle.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.9 30.7v-4.2q0-0.4-0.3-0.6t-0.5-0.2h-4.2q-0.3 0-0.5 0.2t-0.3 0.6v4.2q0 0.3 0.3 0.5t0.5 0.2h4.2q0.3 0 0.5-0.2t0.3-0.5z m-0.1-8.4l0.4-10.2q0-0.3-0.2-0.4-0.3-0.3-0.5-0.3h-5q-0.2 0-0.5 0.3-0.2 0.1-0.2 0.4l0.4 10.2q0 0.3 0.2 0.4t0.5 0.2h4.2q0.3 0 0.5-0.2t0.2-0.4z m-0.3-20.8l17.1 31.4q0.8 1.4 0 2.8-0.4 0.7-1 1.1t-1.5 0.3h-34.2q-0.8 0-1.5-0.3t-1-1.1q-0.8-1.4 0-2.8l17.1-31.4q0.4-0.7 1.1-1.1t1.4-0.4 1.4 0.4 1.1 1.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconExclamationTriangle;
}(React.Component));
IconExclamationTriangle.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconExclamationTriangle;
//# sourceMappingURL=exclamation-triangle.js.map