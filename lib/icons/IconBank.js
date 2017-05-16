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
var IconBank = (function (_super) {
    __extends(IconBank, _super);
    function IconBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBank.prototype.render = function () {
        var className = this.name + " " + this.name + "--bank";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 1.4l20 8v2.6h-2.7q0 0.6-0.4 1t-1 0.4h-31.7q-0.6 0-1-0.4t-0.4-1h-2.7v-2.6z m-14.6 13.3h5.3v15.9h2.7v-15.9h5.3v15.9h2.7v-15.9h5.3v15.9h2.6v-15.9h5.3v15.9h1.3q0.6 0 1 0.4t0.4 1v1.3h-34.5v-1.3q0-0.6 0.4-1t1-0.4h1.2v-15.9z m33.1 19.9q0.6 0 1 0.4t0.5 0.9v2.7h-39.9v-2.7q0-0.5 0.4-0.9t1-0.4h37z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBank;
}(React.Component));
IconBank.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconBank;
//# sourceMappingURL=IconBank.js.map