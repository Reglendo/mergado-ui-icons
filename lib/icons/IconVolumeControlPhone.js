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
var IconVolumeControlPhone = (function (_super) {
    __extends(IconVolumeControlPhone, _super);
    function IconVolumeControlPhone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVolumeControlPhone.prototype.render = function () {
        var className = this.name + " " + this.name + "--volume-control-phone " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.3 37.7q0-0.2-0.3-1.3t-0.7-2.4-0.5-1.5q0-0.1-0.1-0.6t-0.2-0.8-0.3-0.5q-0.3-0.3-1.1-0.3-0.5 0-1.6 0.1t-1.5 0.1q-0.8 0-1.1-0.2-0.1-0.1-0.2-0.4t-0.2-0.4-0.2-0.5-0.1-0.5q-0.8-2.8-0.8-5.6t0.8-5.7q0.1-0.1 0.1-0.4t0.2-0.6 0.2-0.4 0.2-0.4q0.3-0.2 1.1-0.2 0.5 0 1.5 0.1t1.6 0.1q0.8 0 1.1-0.3 0.2-0.2 0.3-0.5t0.2-0.8 0.1-0.6q0.1-0.2 0.5-1.5t0.7-2.4 0.3-1.3q0-0.5-1-1.2t-1.7-0.9q-0.4-0.2-1-0.2-0.7 0-2.2 0.4-1.2 0.4-2.1 0.9t-1.6 1.5-1 1.6-1.1 2.1q-0.1 0.2-0.2 0.4-1.1 2.4-1.5 4.8t-0.4 5.5 0.4 5.4 1.5 4.8q1.3 2.7 1.9 3.6 1.4 2 4 2.8l0.1 0.1q1.5 0.4 2.2 0.4 0.6 0 1-0.2 0.7-0.3 1.7-0.9t1-1.2z m3.5-20.4q-0.6 0-1-0.4t-0.4-1 0.4-1q0.8-0.9 0.8-2 0-1.2-0.8-2.1-0.4-0.4-0.4-1t0.4-1 1-0.4 1 0.4q1.7 1.7 1.7 4.1t-1.7 4q-0.4 0.4-1 0.4z m4.1 4.1q-0.6 0-1-0.5-0.5-0.4-0.5-1t0.5-1q2.5-2.5 2.5-6t-2.5-6.1q-0.5-0.4-0.5-1t0.5-1 1-0.4 1 0.4q3.3 3.3 3.3 8.1t-3.3 8q-0.4 0.5-1 0.5z m4 4q-0.6 0-1-0.4-0.4-0.4-0.4-1t0.4-1q2-2.1 3.1-4.7t1.1-5.4-1.1-5.5-3.1-4.7q-0.4-0.4-0.4-1t0.4-1 1-0.4 1 0.4q2.4 2.5 3.7 5.6t1.3 6.6-1.3 6.5-3.7 5.6q-0.4 0.4-1 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVolumeControlPhone;
}(React.Component));
IconVolumeControlPhone.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconVolumeControlPhone;
//# sourceMappingURL=IconVolumeControlPhone.js.map