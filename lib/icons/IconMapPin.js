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
var IconMapPin = (function (_super) {
    __extends(IconMapPin, _super);
    function IconMapPin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMapPin.prototype.render = function () {
        var className = this.name + " " + this.name + "--map-pin";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 24.3q1.5 0 2.9-0.3v14.6q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-14.6q1.3 0.3 2.8 0.3z m0-24.3q4.8 0 8.1 3.3t3.4 8.1-3.4 8.1-8.1 3.4-8.1-3.4-3.3-8.1 3.3-8.1 8.1-3.3z m0 5q0.3 0 0.5-0.2t0.2-0.5-0.2-0.5-0.5-0.2q-3.2 0-5.5 2.3t-2.3 5.5q0 0.3 0.2 0.5t0.5 0.2 0.5-0.2 0.2-0.5q0-2.6 1.9-4.5t4.5-1.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMapPin;
}(React.Component));
IconMapPin.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMapPin;
//# sourceMappingURL=IconMapPin.js.map