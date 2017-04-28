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
var IconCreditCard = (function (_super) {
    __extends(IconCreditCard, _super);
    function IconCreditCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCreditCard.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.5 4.1q1.4 0 2.4 0.9t1 2.4v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2z m-33.2 2.6q-0.2 0-0.4 0.2t-0.2 0.5v4.6h34.5v-4.6q0-0.3-0.2-0.5t-0.5-0.2h-33.2z m33.2 26.6q0.3 0 0.5-0.2t0.2-0.5v-12.6h-34.5v12.6q0 0.3 0.2 0.5t0.4 0.2h33.2z m-31.2-2.7v-2.6h5.3v2.6h-5.3z m8 0v-2.6h8v2.6h-8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCreditCard;
}(React.Component));
IconCreditCard.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconCreditCard;
//# sourceMappingURL=credit-card.js.map