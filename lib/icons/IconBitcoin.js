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
var IconBitcoin = (function (_super) {
    __extends(IconBitcoin, _super);
    function IconBitcoin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBitcoin.prototype.render = function () {
        var className = this.name + " " + this.name + "--bitcoin " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.1 14.3q0.3 4-3 5.7 2.6 0.7 3.9 2.3t1 4.8q-0.1 1.6-0.7 2.8t-1.4 2-2.2 1.3-2.7 0.8-3.3 0.3v5.7h-3.4v-5.6q-1.8 0-2.7 0v5.6h-3.5v-5.7q-0.4 0-1.2 0t-1.2 0h-4.4l0.6-4.1h2.5q1.1 0 1.3-1.1v-9h0.4q-0.2 0-0.4 0v-6.4q-0.3-1.6-2-1.6h-2.4v-3.6l4.7 0q1.4 0 2.1 0v-5.6h3.5v5.5q1.8-0.1 2.7-0.1v-5.4h3.4v5.6q1.8 0.1 3.2 0.5t2.5 1 1.8 1.7 0.8 2.6z m-4.8 12.2q0-0.9-0.4-1.5t-0.8-1-1.3-0.7-1.5-0.4-1.6-0.2-1.5-0.1-1.5 0.1-1 0v7.5q0.1 0 0.8 0t1 0 1.2 0 1.3-0.1 1.3-0.2 1.2-0.3 1.1-0.4 0.9-0.7 0.5-0.9 0.2-1.1z m-1.6-10.7q0-0.7-0.3-1.3t-0.7-0.9-1.1-0.6-1.2-0.4-1.4-0.2-1.3 0-1.2 0-0.8 0v6.8q0.1 0 0.7 0.1t1.1 0 1.1-0.1 1.2-0.1 1.2-0.3 1-0.4 0.9-0.6 0.6-0.8 0.2-1.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBitcoin;
}(React.Component));
IconBitcoin.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconBitcoin;
//# sourceMappingURL=IconBitcoin.js.map