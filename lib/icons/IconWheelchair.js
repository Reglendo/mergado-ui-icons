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
var IconWheelchair = (function (_super) {
    __extends(IconWheelchair, _super);
    function IconWheelchair() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWheelchair.prototype.render = function () {
        var className = this.name + " " + this.name + "--wheelchair " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.8 26.5l2.3 4.5q-1.3 4-4.7 6.5t-7.5 2.5q-3.5 0-6.5-1.7t-4.7-4.7-1.7-6.5q0-4 2.3-7.3t6.2-4.7l0.3 2.9q-2.7 1.2-4.3 3.7t-1.6 5.4q0 4.2 2.9 7.1t7.1 2.9q2.8 0 5.1-1.4t3.7-3.9 1.1-5.3z m12.3 2.2l1.3 2.6-5.8 2.8q-0.2 0.2-0.6 0.2-0.9 0-1.3-0.8l-5.3-10.6h-10.5q-0.6 0-1-0.4t-0.5-0.9l-2.1-17.4q-0.1-0.4 0.1-0.9 0.3-1.2 1.3-1.9t2.2-0.7q1.4 0 2.5 1.1t1 2.5q0 1.5-1.1 2.6t-2.7 0.9l0.8 6.5h9.5v2.8h-9.1l0.3 2.9h10.2q0.9 0 1.3 0.8l5 10.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWheelchair;
}(React.Component));
IconWheelchair.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconWheelchair;
//# sourceMappingURL=IconWheelchair.js.map