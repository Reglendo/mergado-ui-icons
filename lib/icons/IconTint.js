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
var IconTint = (function (_super) {
    __extends(IconTint, _super);
    function IconTint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTint.prototype.render = function () {
        var className = this.name + " " + this.name + "--tint " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 25.7q0-0.8-0.4-1.5 0 0-0.4-0.5t-0.5-0.9-0.6-1-0.5-1.1q0-0.3-0.4-0.3t-0.5 0.3q-0.2 0.5-0.5 1.1t-0.5 1-0.6 0.9-0.3 0.5q-0.5 0.7-0.5 1.5 0 1.2 0.9 2t2 0.9 2-0.9 0.8-2z m11.5-2.8q0 4.7-3.4 8t-8.1 3.4-8.1-3.4-3.3-8q0-3.3 1.8-6.2 0.1-0.2 1.4-2t2.3-3.4 2.2-3.9 1.8-4.5q0.2-0.7 0.8-1.1t1.1-0.4 1.2 0.4 0.7 1.1q0.7 2 1.9 4.5t2.2 3.9 2.3 3.4 1.3 2q1.9 2.9 1.9 6.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconTint.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconTint;
}(React.Component));
exports.default = IconTint;
//# sourceMappingURL=IconTint.js.map