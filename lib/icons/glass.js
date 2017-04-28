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
var IconGlass = (function (_super) {
    __extends(IconGlass, _super);
    function IconGlass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGlass.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.9 4.2q0 0.7-0.9 1.7l-14.1 14.1v17.1h7.1q0.6 0 1 0.5t0.4 1-0.4 1-1 0.4h-20q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.5h7.1v-17.1l-14.1-14.1q-0.9-1-0.9-1.7 0-0.6 0.4-0.9t0.8-0.4 1 0h31.4q0.5 0 1 0t0.8 0.4 0.4 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGlass;
}(React.Component));
IconGlass.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconGlass;
//# sourceMappingURL=glass.js.map