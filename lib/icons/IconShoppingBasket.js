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
var IconShoppingBasket = (function (_super) {
    __extends(IconShoppingBasket, _super);
    function IconShoppingBasket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShoppingBasket.prototype.render = function () {
        var className = this.name + " " + this.name + "--shopping-basket " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 17.5q1 0 1.7 0.7t0.8 1.8-0.8 1.8-1.7 0.7h-0.3l-2.3 12.8q-0.1 0.9-0.8 1.5t-1.6 0.6h-24.8q-0.9 0-1.6-0.6t-0.9-1.5l-2.2-12.8h-0.3q-1 0-1.8-0.7t-0.7-1.8 0.7-1.8 1.8-0.7h34.8z m-27.9 15.5q0.5 0 0.9-0.4t0.3-0.9l-0.7-8.1q0-0.5-0.4-0.8t-0.9-0.3-0.8 0.4-0.3 0.9l0.6 8.1q0 0.5 0.4 0.8t0.8 0.3h0.1z m8-1.2v-8.1q0-0.5-0.4-0.8t-0.9-0.4-0.8 0.4-0.4 0.8v8.1q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m7.4 0v-8.1q0-0.5-0.3-0.8t-0.9-0.4-0.9 0.4-0.3 0.8v8.1q0 0.5 0.3 0.9t0.9 0.3 0.9-0.3 0.3-0.9z m6.9 0.1l0.6-8.1q0-0.5-0.3-0.9t-0.8-0.4-1 0.3-0.4 0.8l-0.6 8.1q0 0.5 0.3 0.9t0.8 0.4h0.1q0.5 0 0.9-0.3t0.4-0.8z m-22.5-23.6l-1.8 8h-2.5l1.9-8.6q0.4-1.7 1.8-2.8t3.1-1.1h3.2q0-0.5 0.4-0.8t0.8-0.4h7.5q0.5 0 0.9 0.4t0.3 0.9h3.3q1.7 0 3.1 1t1.7 2.8l2 8.6h-2.6l-1.8-8q-0.2-0.9-0.9-1.4t-1.5-0.6h-3.3q0 0.5-0.3 0.9t-0.9 0.4h-7.5q-0.5 0-0.8-0.4t-0.4-0.9h-3.2q-0.9 0-1.6 0.6t-0.9 1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShoppingBasket;
}(React.Component));
IconShoppingBasket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconShoppingBasket;
//# sourceMappingURL=IconShoppingBasket.js.map