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
var IconFireExtinguisher = (function (_super) {
    __extends(IconFireExtinguisher, _super);
    function IconFireExtinguisher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFireExtinguisher.prototype.render = function () {
        var className = this.name + " " + this.name + "--fire-extinguisher";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.9 4.3q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m20-0.7v7.1q0 0.4-0.2 0.6-0.2 0.1-0.5 0.1-0.1 0-0.1 0l-10-2.1q-0.3-0.1-0.4-0.3t-0.2-0.4h-5.7v2.2q2.5 0.6 4.1 2.5t1.6 4.6v17.8q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-17.8q0-2.4 1.4-4.3t3.6-2.6v-2.4h-0.7q-1.3 0-2.6 0.5t-2 1.2-1.5 1.5-0.9 1.2-0.3 0.5q-0.4 0.8-1.3 0.8-0.3 0-0.6-0.2-0.5-0.2-0.7-0.8t0.1-1.1q0.1-0.2 0.3-0.6t0.8-1.2 1.4-1.5 1.9-1.5 2.4-1.2q-0.6-0.9-0.6-1.9 0-1.5 1.1-2.5t2.5-1.1 2.5 1.1 1.1 2.5q0 0.7-0.3 1.4h6.7q0-0.2 0.2-0.4t0.4-0.3l10-2.1q0 0 0.1 0 0.3 0 0.5 0.1 0.2 0.2 0.2 0.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFireExtinguisher;
}(React.Component));
IconFireExtinguisher.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFireExtinguisher;
//# sourceMappingURL=IconFireExtinguisher.js.map