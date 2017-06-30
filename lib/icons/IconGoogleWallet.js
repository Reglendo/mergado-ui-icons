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
var IconGoogleWallet = (function (_super) {
    __extends(IconGoogleWallet, _super);
    function IconGoogleWallet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGoogleWallet.prototype.render = function () {
        var className = this.name + " " + this.name + "--google-wallet " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m9.6 15.1q0.7 0 1.1 0.6 5.8 7.9 7.9 16.8h-9.7q-2.8-9.6-8-16.3-0.2-0.3-0.1-0.7t0.7-0.4h8.1z m12.2 7.8q-1.1 4.3-2.7 8.6-1.8-6.8-5.6-13 0.9-4.8 0.9-9.8 4.6 7.4 7.4 14.2z m2.1-15.4q5.2 7 8.4 15.2t4 16.8h-9.8q-0.9-14.5-12-32h9.4z m15.1 12.5q0 9.2-2.2 17.7-1.4-12.2-7.8-23.6-0.5-6.6-2.3-12.7-0.1-0.4 0.1-0.6t0.6-0.3h7.8q0.5 0 0.8 0.3t0.5 0.7q2.5 8.9 2.5 18.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGoogleWallet;
}(React.Component));
IconGoogleWallet.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconGoogleWallet;
//# sourceMappingURL=IconGoogleWallet.js.map