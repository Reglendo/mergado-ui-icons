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
var IconEyeSlash = (function (_super) {
    __extends(IconEyeSlash, _super);
    function IconEyeSlash() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEyeSlash.prototype.render = function () {
        var className = this.name + " " + this.name + "--eye-slash " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.4 29.8l1.7-3.1q-1.9-1.5-3-3.6t-1.1-4.5q0-2.7 1.4-5-5.2 2.6-8.5 7.8 3.7 5.8 9.5 8.4z m8.7-16.9q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-1.9 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m8.1-4.3q0 0.2 0 0.2-2.4 4.2-7.1 12.6t-7 12.7l-1.1 2q-0.2 0.3-0.7 0.3-0.2 0-2.9-1.5-0.4-0.3-0.4-0.7 0-0.2 1-1.9-3.2-1.5-5.9-3.9t-4.7-5.4q-0.4-0.7-0.4-1.6t0.4-1.5q3.5-5.3 8.5-8.3t11.1-3q2 0 4 0.4l1.2-2.2q0.2-0.4 0.6-0.4 0.2 0 0.4 0.2t0.7 0.3 0.8 0.4 0.7 0.4 0.4 0.3q0.4 0.2 0.4 0.6z m0.8 10q0 3.1-1.8 5.6t-4.6 3.7l6.2-11.2q0.2 1 0.2 1.9z m10 2.8q0 0.8-0.4 1.6-0.9 1.4-2.5 3.2-3.3 3.8-7.7 6t-9.4 2.1l1.7-3q4.7-0.4 8.7-3t6.7-6.9q-2.5-4-6.3-6.5l1.5-2.5q2.1 1.4 4 3.4t3.3 4.1q0.4 0.7 0.4 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEyeSlash;
}(React.Component));
IconEyeSlash.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconEyeSlash;
//# sourceMappingURL=IconEyeSlash.js.map