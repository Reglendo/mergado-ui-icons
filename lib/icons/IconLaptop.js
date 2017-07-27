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
var IconLaptop = (function (_super) {
    __extends(IconLaptop, _super);
    function IconLaptop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLaptop.prototype.render = function () {
        var className = this.name + " " + this.name + "--laptop " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.6 28q-1.3 0-2.3-1t-1-2.3v-14.7q0-1.3 1-2.3t2.3-1h22.6q1.4 0 2.4 1t1 2.3v14.7q0 1.3-1 2.3t-2.4 1h-22.6z m-0.6-18v14.7q0 0.2 0.2 0.4t0.4 0.2h22.6q0.3 0 0.5-0.2t0.2-0.4v-14.7q0-0.2-0.2-0.4t-0.5-0.2h-22.6q-0.2 0-0.4 0.2t-0.2 0.4z m28.5 19.3h3.4v2q0 0.8-1 1.4t-2.4 0.6h-33.2q-1.3 0-2.3-0.6t-1-1.4v-2h36.5z m-14.9 2q0.3 0 0.3-0.3t-0.3-0.4h-3.3q-0.4 0-0.4 0.4t0.4 0.3h3.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLaptop;
}(React.Component));
IconLaptop.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconLaptop;
//# sourceMappingURL=IconLaptop.js.map