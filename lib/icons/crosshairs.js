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
var IconCrosshairs = (function (_super) {
    __extends(IconCrosshairs, _super);
    function IconCrosshairs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCrosshairs.prototype.render = function () {
        var className = this.name + " " + this.name + "--crosshairs";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.7 22.9h-2.4q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h2.4q-0.7-2.4-2.5-4.2t-4.2-2.5v2.5q0 0.5-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-2.5q-2.4 0.7-4.2 2.5t-2.5 4.2h2.4q0.6 0 1 0.5t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-2.4q0.7 2.4 2.5 4.2t4.2 2.5v-2.5q0-0.5 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v2.5q2.4-0.7 4.2-2.5t2.5-4.2z m7.6-4.3v2.8q0 0.6-0.4 1t-1 0.5h-3.2q-0.9 3.6-3.5 6.2t-6.2 3.4v3.2q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-3.2q-3.6-0.8-6.2-3.4t-3.5-6.2h-3.2q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h3.2q0.8-3.6 3.5-6.2t6.2-3.4v-3.2q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v3.2q3.6 0.8 6.2 3.4t3.5 6.2h3.2q0.5 0 1 0.5t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCrosshairs;
}(React.Component));
IconCrosshairs.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCrosshairs;
//# sourceMappingURL=crosshairs.js.map