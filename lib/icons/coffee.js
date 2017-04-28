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
var IconCoffee = (function (_super) {
    __extends(IconCoffee, _super);
    function IconCoffee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCoffee.prototype.render = function () {
        var className = this.name + " " + this.name + "--coffee";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.2 14.4q0-1.7-1.2-2.9t-2.9-1.3h-1.4v8.4h1.4q1.7 0 2.9-1.2t1.2-3z m-36.2 16.8h39q0 2.3-1.6 3.9t-4 1.6h-27.8q-2.3 0-4-1.6t-1.6-3.9z m40.4-16.8q0 3.5-2.4 5.9t-5.9 2.5h-1.4v0.7q0 2-1.5 3.4t-3.4 1.5h-15.3q-2.1 0-3.5-1.5t-1.4-3.4v-16q0-0.6 0.4-1t1-0.4h25.1q3.4 0 5.9 2.4t2.4 5.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCoffee;
}(React.Component));
IconCoffee.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCoffee;
//# sourceMappingURL=coffee.js.map