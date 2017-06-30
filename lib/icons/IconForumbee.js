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
var IconForumbee = (function (_super) {
    __extends(IconForumbee, _super);
    function IconForumbee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconForumbee.prototype.render = function () {
        var className = this.name + " " + this.name + "--forumbee " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.8 3.3q-7 2.7-12.4 8.1t-8 12.5q-0.4-1.9-0.4-3.9 0-4.6 2.3-8.6t6.2-6.2 8.6-2.3q1.8 0 3.7 0.4z m6.1 2.7q2 1.5 3.6 3.5-8.7 2.5-15 8.9t-8.9 15.1q-2.1-1.6-3.5-3.6 2.5-8.6 8.9-15t14.9-8.9z m-16.4 29.8q2.6-8 8.5-13.9t13.8-8.6q0.9 2.1 1.2 4.4-6.5 2.7-11.5 7.7t-7.7 11.5q-2.3-0.3-4.3-1.1z m23.8 1.3q-4.3-1.1-8.2-2.6-3 1.9-6.5 2.4 2.5-4.6 6.1-8.3t8.3-6.1q-0.5 3.4-2.3 6.3 1.5 3.9 2.6 8.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconForumbee;
}(React.Component));
IconForumbee.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconForumbee;
//# sourceMappingURL=IconForumbee.js.map