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
var IconSkyatlas = (function (_super) {
    __extends(IconSkyatlas, _super);
    function IconSkyatlas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSkyatlas.prototype.render = function () {
        var className = this.name + " " + this.name + "--skyatlas " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.8 17.9q2.9 0 4.9 1.9t2.1 4.7q0 3.1-2.2 5.1t-5.1 2q-1.7 0-3.2-0.5t-2.7-1.4-2.3-2.1-2.1-2.4-2-2.6-2.1-2.4-2.3-2.1-2.6-1.4-3.1-0.6q-3 0-4.9 1.8t-1.9 4.8q0 3 2.1 4.8t5.1 1.8q1.9 0 4-0.7t3.7-1.9q0.1-0.1 0.5-0.4t0.5-0.5 0.5-0.1q0.2 0 0.4 0.2t0.2 0.4q0 0.5-1.1 1.5-2 1.7-4.6 2.8t-5 1q-2.6 0-4.8-1.1t-3.5-3.2-1.3-4.7q0-3.9 2.7-6.6t6.8-2.6q2.3 0 4.4 0.8t3.6 2.2 2.9 3 2.7 3.2 2.6 3 2.9 2.2 3.4 0.9q1.9 0 3.2-1.2t1.3-3.2q0-1.8-1.2-3.1t-3.1-1.2q-0.6 0-1.6 0.3t-1.3 0.4q-0.4 0-0.7-0.3t-0.3-0.7q0-0.3 0.1-1.1t0.2-1.1q0-3.1-2.1-5.1t-5.1-2.1q-1.2 0-2.2 0.4t-1.6 0.8-1.1 0.8-0.7 0.3q-0.3 0-0.5-0.2t-0.2-0.5q0-0.3 0.5-0.9 1.2-1.3 2.9-2t3.5-0.7q3.7 0 6.2 2.5t2.5 6.1q0 0.7-0.1 1.3 1.1-0.3 2.2-0.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSkyatlas;
}(React.Component));
IconSkyatlas.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconSkyatlas;
//# sourceMappingURL=IconSkyatlas.js.map