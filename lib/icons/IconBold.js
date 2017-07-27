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
var IconBold = (function (_super) {
    __extends(IconBold, _super);
    function IconBold() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBold.prototype.render = function () {
        var className = this.name + " " + this.name + "--bold " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16.9 34q1.6 0.7 3.1 0.7 8.4 0 8.4-7.5 0-2.6-0.9-4-0.6-1-1.4-1.7t-1.5-1-1.8-0.6-1.9-0.2-2.1-0.1q-1.6 0-2.2 0.3 0 1.1 0 3.5t0 3.5q0 0.2-0.1 1.5t0 2.2 0.1 1.9 0.3 1.5z m-0.3-16.7q0.9 0.2 2.4 0.2 1.8 0 3.2-0.3t2.5-1 1.6-2 0.6-3.2q0-1.6-0.7-2.7t-1.7-1.9-2.4-0.9-2.8-0.3q-1.1 0-2.9 0.2 0 1.2 0.1 3.4t0.1 3.4q0 0.6 0 1.8t0 1.8q0 1 0 1.5z m-12.1 19.8l0-2.1q0.4 0 1.9-0.3t2.4-0.6q0.2-0.3 0.3-0.6t0.2-0.8 0.1-0.7 0.1-0.8 0-0.8v-1.5q0-21.9-0.5-22.8-0.1-0.2-0.5-0.4t-1-0.2-1.1-0.2-1.1-0.1-0.7 0l-0.1-1.9q2.2 0 7.6-0.2t8.4-0.2q0.5 0 1.5 0t1.5 0q1.6 0 3 0.3t2.9 0.9 2.4 1.6 1.7 2.3 0.6 3.1q0 1.2-0.4 2.1t-0.8 1.6-1.5 1.3-1.6 1-1.9 0.9q3.5 0.8 5.7 3t2.3 5.5q0 2.3-0.8 4t-2 3-3.1 1.9-3.7 1.1-3.9 0.3q-1 0-2.9-0.1t-3-0.1q-2.4 0-6.8 0.3t-5.2 0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBold;
}(React.Component));
IconBold.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBold;
//# sourceMappingURL=IconBold.js.map