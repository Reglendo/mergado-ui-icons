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
var IconRotateLeft = (function (_super) {
    __extends(IconRotateLeft, _super);
    function IconRotateLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRotateLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--rotate-left";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3q-3.8 0-7.3-1.6t-5.8-4.5q-0.2-0.3-0.2-0.5t0.2-0.5l3.1-3.1q0.2-0.2 0.5-0.2 0.4 0.1 0.5 0.3 1.7 2.1 4 3.3t5 1.1q2.4 0 4.5-0.9t3.6-2.4 2.5-3.7 0.9-4.4-0.9-4.4-2.5-3.7-3.6-2.4-4.5-0.9q-2.1 0-4.2 0.8t-3.5 2.2l3 3.1q0.7 0.7 0.3 1.6-0.3 0.8-1.3 0.8h-10q-0.5 0-1-0.4t-0.4-1v-10q0-0.9 0.9-1.3 0.9-0.4 1.5 0.3l2.9 2.9q2.4-2.3 5.5-3.5t6.3-1.2q3.5 0 6.7 1.3t5.5 3.7 3.6 5.4 1.4 6.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRotateLeft;
}(React.Component));
IconRotateLeft.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconRotateLeft;
//# sourceMappingURL=IconRotateLeft.js.map