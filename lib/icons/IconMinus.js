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
var IconMinus = (function (_super) {
    __extends(IconMinus, _super);
    function IconMinus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMinus.prototype.render = function () {
        var className = this.name + " " + this.name + "--minus " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-27.2q-0.8 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h27.2q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMinus;
}(React.Component));
IconMinus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconMinus;
//# sourceMappingURL=IconMinus.js.map