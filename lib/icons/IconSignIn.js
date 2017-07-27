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
var IconSignIn = (function (_super) {
    __extends(IconSignIn, _super);
    function IconSignIn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSignIn.prototype.render = function () {
        var className = this.name + " " + this.name + "--sign-in " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.4 20q0 0.6-0.4 1l-12.1 12.1q-0.5 0.5-1 0.5t-1-0.5-0.5-1v-6.4h-10q-0.5 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h10v-6.4q0-0.6 0.5-1t1-0.5 1 0.5l12.1 12.1q0.4 0.4 0.4 1z m7.9-7.9v15.8q0 2.6-1.9 4.5t-4.5 1.9h-7.2q-0.3 0-0.5-0.2t-0.2-0.5q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q1.4 0 2.5-1t1-2.5v-15.8q0-1.4-1-2.5t-2.5-1h-7l-0.3-0.1-0.2 0-0.2-0.1-0.2-0.2 0-0.3q0-0.1 0-0.5t0-0.6 0-0.5 0.3-0.4 0.4-0.2h7.2q2.6 0 4.5 1.9t1.9 4.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSignIn;
}(React.Component));
IconSignIn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconSignIn;
//# sourceMappingURL=IconSignIn.js.map