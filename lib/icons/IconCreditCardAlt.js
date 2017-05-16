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
var IconCreditCardAlt = (function (_super) {
    __extends(IconCreditCardAlt, _super);
    function IconCreditCardAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCreditCardAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--credit-card-alt";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m0 30.6v-10.6h40.3v10.6q0 1.2-0.8 2t-2 0.8h-34.7q-1.2 0-2-0.8t-0.8-2z m11.2-3.9v2.3h6.7v-2.3h-6.7z m-6.7 0v2.3h4.5v-2.3h-4.5z m33-20.1q1.2 0 2 0.8t0.8 2v3.9h-40.3v-3.9q0-1.2 0.8-2t2-0.8h34.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCreditCardAlt;
}(React.Component));
IconCreditCardAlt.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCreditCardAlt;
//# sourceMappingURL=IconCreditCardAlt.js.map