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
var IconCartPlus = (function (_super) {
    __extends(IconCartPlus, _super);
    function IconCartPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCartPlus.prototype.render = function () {
        var className = this.name + " " + this.name + "--cart-plus " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 15.7q0-0.6-0.4-1t-1-0.4h-2.8v-2.9q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1v2.9h-2.9q-0.5 0-1 0.4t-0.4 1 0.4 1 1 0.4h2.9v2.9q0 0.6 0.4 1t1 0.4 1-0.4 0.5-1v-2.9h2.8q0.6 0 1-0.4t0.4-1z m-12.8 18.6q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m20 0q0 1.2-0.9 2t-2 0.8-2-0.8-0.8-2 0.8-2 2-0.9 2 0.9 0.9 2z m2.8-24.3v11.4q0 0.6-0.3 1t-0.9 0.5l-23.3 2.7q0 0.1 0.1 0.5t0.1 0.6 0.1 0.4q0 0.4-0.6 1.5h20.6q0.5 0 1 0.4t0.4 1-0.4 1-1 0.4h-22.9q-0.6 0-1-0.4t-0.4-1q0-0.3 0.2-0.9t0.7-1.3 0.4-0.9l-3.9-18.3h-4.6q-0.6 0-1-0.5t-0.4-1 0.4-1 1-0.4h5.7q0.4 0 0.7 0.2t0.4 0.3 0.3 0.6 0.2 0.5 0.1 0.7 0.1 0.6h26.8q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCartPlus;
}(React.Component));
IconCartPlus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconCartPlus;
//# sourceMappingURL=IconCartPlus.js.map