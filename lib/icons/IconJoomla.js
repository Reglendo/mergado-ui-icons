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
var IconJoomla = (function (_super) {
    __extends(IconJoomla, _super);
    function IconJoomla() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconJoomla.prototype.render = function () {
        var className = this.name + " " + this.name + "--joomla " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.9 23.9l-3.6 3.6-3.4 3.4-0.6 0.7q-1.5 1.4-3.4 1.9t-3.8 0.1q-0.4 1.5-1.6 2.5t-2.9 1q-1.9 0-3.3-1.3t-1.3-3.3q0-1.6 1-2.8t2.5-1.6q-0.5-1.9 0-3.9t2-3.4l0.3-0.2 3.4 3.4-0.3 0.2q-0.8 0.8-0.8 2t0.8 2q0.8 0.8 2 0.8t2-0.8l0.6-0.7 3.4-3.4 3.6-3.5z m-7.6-15.2l0.2 0.3-3.4 3.4-0.2-0.3q-0.8-0.8-2-0.8t-2 0.8-0.8 2 0.8 2l7.6 7.6-3.4 3.4-3.6-3.5-3.3-3.4-0.7-0.7q-1.5-1.5-2-3.6t0.1-4q-1.6-0.3-2.6-1.6t-1-2.8q0-1.9 1.4-3.3t3.2-1.3q1.7 0 3 1.1t1.6 2.7q1.8-0.4 3.7 0.1t3.4 1.9z m18 23.8q0 1.9-1.4 3.3t-3.2 1.3q-1.6 0-2.9-1t-1.6-2.6q-1.9 0.6-4 0.1t-3.6-2l-0.3-0.3 3.4-3.4 0.3 0.3q0.8 0.8 2 0.8t2-0.8 0.8-2-0.8-2l-7.7-7.6 3.4-3.4 7 7 0.6 0.6q1.5 1.5 2 3.4t0 3.8q1.7 0.3 2.9 1.5t1.1 3z m-0.1-25q0 1.7-1.1 3t-2.8 1.5q0.5 1.9 0 3.9t-2 3.6l-0.2 0.3-3.4-3.4 0.3-0.3q0.8-0.8 0.8-2t-0.8-2-2-0.8-2 0.8l-7.7 7.7-3.3-3.4 3.6-3.6 3.3-3.4 0.7-0.7q1.5-1.5 3.5-2t4 0.1q0.3-1.7 1.5-2.8t3.1-1.1q1.9 0 3.2 1.3t1.3 3.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconJoomla;
}(React.Component));
IconJoomla.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconJoomla;
//# sourceMappingURL=IconJoomla.js.map