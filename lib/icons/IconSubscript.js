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
var IconSubscript = (function (_super) {
    __extends(IconSubscript, _super);
    function IconSubscript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSubscript.prototype.render = function () {
        var className = this.name + " " + this.name + "--subscript " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23 30.6v3.7h-5.5l-3.6-5.6-0.5-1q-0.2-0.2-0.2-0.4h-0.1l-0.2 0.4q-0.2 0.5-0.6 1l-3.4 5.6h-5.8v-3.7h2.9l4.4-6.5-4.2-6.1h-3v-3.8h6.1l3.1 5.1q0.1 0.1 0.6 1 0.1 0.2 0.2 0.4h0.1q0-0.2 0.2-0.4l0.6-1 3.1-5.1h5.7v3.8h-2.8l-4.1 5.9 4.6 6.7h2.4z m14.3 4.8v4.6h-11.5l-0.1-0.6q0-1 0-1 0-1.5 0.5-2.6t1.5-2 1.9-1.4 1.8-1.2 1.5-1.2 0.6-1.5q0-0.8-0.7-1.4t-1.6-0.5q-1.1 0-2.1 0.9-0.3 0.2-0.8 0.8l-2.4-2.1q0.6-0.8 1.4-1.4 1.8-1.5 4.2-1.5 2.5 0 4 1.4t1.5 3.5q0 1.5-0.8 2.6t-1.8 2-2.2 1.3-2 1.5-0.9 1.6h5.2v-1.8h2.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSubscript.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSubscript;
}(React.Component));
exports.default = IconSubscript;
//# sourceMappingURL=IconSubscript.js.map