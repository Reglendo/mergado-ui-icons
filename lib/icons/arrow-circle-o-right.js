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
var IconArrowCircleORight = (function (_super) {
    __extends(IconArrowCircleORight, _super);
    function IconArrowCircleORight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowCircleORight.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrow-circle-o-right";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.7 20q0 0.3-0.2 0.5l-7.1 7.2q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.3t-0.3-0.5v-4.2h-7.8q-0.3 0-0.5-0.3t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.3h7.8v-4.2q0-0.4 0.2-0.6t0.6-0.2q0.2 0 0.5 0.3l7.1 7.1q0.2 0.2 0.2 0.5z m3.6 0q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1z m5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconArrowCircleORight;
}(React.Component));
IconArrowCircleORight.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconArrowCircleORight;
//# sourceMappingURL=arrow-circle-o-right.js.map