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
var IconLongArrowLeft = (function (_super) {
    __extends(IconLongArrowLeft, _super);
    function IconLongArrowLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLongArrowLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--long-arrow-left";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39 17.9v4.2q0 0.3-0.2 0.5t-0.5 0.2h-27.1v4.9q0 0.4-0.5 0.6t-0.7-0.1l-8.4-7.6q-0.2-0.3-0.2-0.5 0-0.3 0.2-0.6l8.4-7.7q0.3-0.3 0.7-0.1 0.4 0.2 0.4 0.6v4.9h27.2q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLongArrowLeft;
}(React.Component));
IconLongArrowLeft.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconLongArrowLeft;
//# sourceMappingURL=IconLongArrowLeft.js.map