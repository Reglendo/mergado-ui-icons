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
var IconVk = (function (_super) {
    __extends(IconVk, _super);
    function IconVk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVk.prototype.render = function () {
        var className = this.name + " " + this.name + "--vk " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.8 12.2q0.5 1.3-3.1 6.1-0.5 0.7-1.4 1.8-1.6 2-1.8 2.7-0.4 0.8 0.3 1.7 0.3 0.4 1.6 1.7h0.1l0 0q3 2.8 4 4.6 0.1 0.1 0.1 0.3t0.2 0.5 0 0.8-0.5 0.5-1.3 0.3l-5.3 0.1q-0.5 0.1-1.1-0.1t-1.1-0.5l-0.4-0.2q-0.7-0.5-1.5-1.4t-1.4-1.6-1.3-1.2-1.1-0.3q-0.1 0-0.2 0.1t-0.4 0.3-0.4 0.6-0.4 1.1-0.1 1.6q0 0.3-0.1 0.5t-0.1 0.4l-0.1 0.1q-0.4 0.4-1.1 0.5h-2.4q-1.5 0.1-3-0.4t-2.8-1.1-2.1-1.3-1.5-1.2l-0.5-0.5q-0.2-0.2-0.6-0.6t-1.4-1.9-2.2-3.2-2.6-4.4-2.7-5.6q-0.1-0.3-0.1-0.6t0-0.3l0.1-0.1q0.3-0.4 1.2-0.4l5.7-0.1q0.2 0.1 0.5 0.2t0.3 0.2l0.1 0q0.3 0.2 0.5 0.7 0.4 1 1 2.1t0.8 1.7l0.3 0.6q0.6 1.3 1.2 2.2t1 1.4 0.9 0.8 0.7 0.3 0.5-0.1q0.1 0 0.1-0.1t0.3-0.5 0.3-0.9 0.2-1.7 0-2.6q-0.1-0.9-0.2-1.5t-0.3-1l-0.1-0.2q-0.5-0.7-1.8-0.9-0.3-0.1 0.1-0.5 0.4-0.4 0.8-0.7 1.1-0.5 5-0.5 1.7 0.1 2.8 0.3 0.4 0.1 0.7 0.3t0.4 0.5 0.2 0.7 0.1 0.9 0 1.1-0.1 1.5 0 1.7q0 0.3 0 0.9t-0.1 1 0.1 0.8 0.3 0.8 0.4 0.6q0.2 0 0.4 0t0.5-0.2 0.8-0.7 1.1-1.4 1.4-2.2q1.2-2.2 2.2-4.7 0.1-0.2 0.2-0.4t0.3-0.2l0 0 0.1-0.1 0.3-0.1 0.4 0 6 0q0.8-0.1 1.3 0t0.7 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVk;
}(React.Component));
IconVk.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconVk;
//# sourceMappingURL=IconVk.js.map