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
var IconBattery4 = (function (_super) {
    __extends(IconBattery4, _super);
    function IconBattery4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBattery4.prototype.render = function () {
        var className = this.name + " " + this.name + "--battery-4 " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.6 13.3v13.4h-29.1v-13.4h29.1z m2.3 10.1h2.2v-6.8h-2.2v-5q0-0.2-0.2-0.4t-0.4-0.2h-32.5q-0.2 0-0.4 0.2t-0.2 0.4v16.8q0 0.2 0.2 0.4t0.4 0.2h32.5q0.2 0 0.4-0.2t0.2-0.4v-5z m4.4-6.8v6.8q0 0.9-0.6 1.5t-1.6 0.7v2.8q0 1.2-0.8 2t-2 0.8h-32.5q-1.2 0-2-0.8t-0.8-2v-16.8q0-1.2 0.8-2t2-0.8h32.5q1.2 0 2 0.8t0.8 2v2.8q0.9 0 1.6 0.7t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBattery4;
}(React.Component));
IconBattery4.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBattery4;
//# sourceMappingURL=IconBattery4.js.map