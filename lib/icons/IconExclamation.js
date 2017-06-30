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
var IconExclamation = (function (_super) {
    __extends(IconExclamation, _super);
    function IconExclamation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconExclamation.prototype.render = function () {
        var className = this.name + " " + this.name + "--exclamation " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.4 27.9v5q0 0.5-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5q0-0.6 0.4-1t1-0.5h5.7q0.6 0 1 0.5t0.4 1z m0.7-23.6l-0.6 17.1q0 0.6-0.5 1t-1 0.5h-5.7q-0.6 0-1-0.5t-0.5-1l-0.6-17.1q0-0.6 0.4-1t1-0.4h7.1q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconExclamation;
}(React.Component));
IconExclamation.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconExclamation;
//# sourceMappingURL=IconExclamation.js.map