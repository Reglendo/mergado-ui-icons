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
var IconLongArrowRight = (function (_super) {
    __extends(IconLongArrowRight, _super);
    function IconLongArrowRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLongArrowRight.prototype.render = function () {
        var className = this.name + " " + this.name + "--long-arrow-right " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.1 19.9q0 0.3-0.3 0.6l-8.5 7.9q-0.4 0.3-0.8 0.1-0.4-0.2-0.4-0.6v-5h-27.9q-0.3 0-0.5-0.2t-0.2-0.6v-4.2q0-0.4 0.2-0.6t0.5-0.2h27.9v-5q0-0.4 0.4-0.6t0.8 0.1l8.5 7.8q0.3 0.2 0.3 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLongArrowRight;
}(React.Component));
IconLongArrowRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconLongArrowRight;
//# sourceMappingURL=IconLongArrowRight.js.map