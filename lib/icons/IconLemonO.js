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
var IconLemonO = (function (_super) {
    __extends(IconLemonO, _super);
    function IconLemonO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLemonO.prototype.render = function () {
        var className = this.name + " " + this.name + "--lemon-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.4 18.4q0-0.9-0.1-2.5t-0.5-2.1q-0.2-0.7-0.3-1t-0.2-0.8-0.1-1.1q0-0.5 0.1-1.6t0.1-1.5q0-0.8-0.2-1.2-0.1 0-0.3 0-0.4 0-1.3 0.1t-1.3 0.1q-1.4 0-4-0.5t-3.9-0.6q-0.9 0-2.1 0.3t-1.9 0.5-2 0.8q-3 1.2-4.5 2.3-2.1 1.6-3.5 4.2t-2 5.3-0.5 5.5q0 0.9 0.2 2.7t0.3 2.7q0 0.5-0.2 1.5t-0.3 1.4 0.3 0.8 0.8 0.4q0.5 0 1.6-0.3t1.6-0.2q1.3 0 3.8 0.3t3.8 0.4q4 0 6.3-0.8 2.9-1 5.3-3.4t3.7-5.5 1.3-6.2z m2.9 0q0 3.7-1.6 7.3t-4.4 6.4-6.2 4.1q-2.8 0.9-7.3 0.9-1.3 0-3.8-0.3t-3.8-0.3q-0.5 0-1.6 0.3t-1.6 0.3q-1.7 0-2.8-1.2t-1.1-2.9q0-0.5 0.2-1.5t0.3-1.5q0-0.9-0.3-2.7t-0.3-2.7q0-2.5 0.4-4.8t1.2-4.7 2.3-4.3 3.3-3.5q1.8-1.3 5.2-2.7 4.3-1.7 7-1.7 1.4 0 4 0.5t3.8 0.5q0.5 0 1.3-0.1t1.3-0.1q1.8 0 2.6 1.1t0.9 3q0 0.5-0.2 1.5t-0.1 1.6q0 0.2 0.1 0.4t0 0.4 0.1 0.3 0.2 0.3 0.1 0.4q0.4 0.9 0.6 2.6t0.2 3.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLemonO;
}(React.Component));
IconLemonO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconLemonO;
//# sourceMappingURL=IconLemonO.js.map