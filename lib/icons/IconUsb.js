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
var IconUsb = (function (_super) {
    __extends(IconUsb, _super);
    function IconUsb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconUsb.prototype.render = function () {
        var className = this.name + " " + this.name + "--usb " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40.1 18.4q0.2 0.1 0.2 0.5t-0.2 0.5l-5.6 3.3q-0.2 0.1-0.3 0.1-0.2 0-0.3-0.1-0.3-0.1-0.3-0.5v-2.2h-15q0.6 1 1.4 2.9 0.3 0.6 0.5 1t0.4 0.8 0.5 0.8 0.4 0.6 0.6 0.5 0.6 0.1h1.7v-1.7q0-0.2 0.1-0.4t0.4-0.1h5.6q0.3 0 0.4 0.1t0.2 0.4v5.6q0 0.3-0.2 0.4t-0.4 0.2h-5.6q-0.2 0-0.4-0.2t-0.1-0.4v-1.6h-1.7q-0.6 0-1.1-0.2t-0.9-0.4-0.8-0.7-0.6-0.8-0.6-1-0.5-1-0.5-1.1q-0.4-0.9-0.6-1.4t-0.7-1.2-0.8-0.9-0.8-0.3h-6.3q-0.4 1.5-1.6 2.4t-2.7 1q-1.9 0-3.2-1.3t-1.3-3.2 1.3-3.2 3.2-1.3q1.5 0 2.7 0.9t1.6 2.5h1.8q0.5 0 0.9-0.3t0.7-1 0.7-1.1 0.6-1.4q0.3-0.8 0.5-1.1t0.5-1 0.6-1 0.6-0.8 0.8-0.7 0.9-0.4 1.1-0.2h1.9q0.3-1 1.2-1.6t1.9-0.6q1.4 0 2.4 0.9t1 2.4-1 2.4-2.4 1q-1.1 0-1.9-0.6t-1.2-1.7h-1.9q-0.3 0-0.6 0.2t-0.5 0.4-0.5 0.6-0.5 0.9-0.4 0.8-0.4 1q-0.8 1.8-1.5 2.9h19.5v-2.3q0-0.3 0.3-0.5t0.6 0z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconUsb;
}(React.Component));
IconUsb.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconUsb;
//# sourceMappingURL=IconUsb.js.map