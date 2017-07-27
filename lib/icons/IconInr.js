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
var IconInr = (function (_super) {
    __extends(IconInr, _super);
    function IconInr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconInr.prototype.render = function () {
        var className = this.name + " " + this.name + "--inr " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30 10.5v2.3q0 0.3-0.2 0.5t-0.5 0.2h-3.7q-0.5 3.2-2.9 5.2t-6.2 2.5q3.8 3.9 10.3 11.9 0.3 0.4 0.1 0.8-0.2 0.4-0.7 0.4h-4.3q-0.4 0-0.6-0.3-6.8-8.2-11.1-12.7-0.2-0.2-0.2-0.5v-2.9q0-0.2 0.2-0.5t0.5-0.2h2.5q3 0 4.8-0.9t2.2-2.8h-9.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h9.2q-1.2-2.5-6-2.5h-3.2q-0.3 0-0.5-0.3t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h18.6q0.3 0 0.5 0.2t0.2 0.5v2.2q0 0.4-0.2 0.6t-0.5 0.2h-5.2q1 1.3 1.4 3.2h3.8q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconInr;
}(React.Component));
IconInr.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconInr;
//# sourceMappingURL=IconInr.js.map