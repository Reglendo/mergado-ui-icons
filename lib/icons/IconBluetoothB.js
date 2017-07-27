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
var IconBluetoothB = (function (_super) {
    __extends(IconBluetoothB, _super);
    function IconBluetoothB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBluetoothB.prototype.render = function () {
        var className = this.name + " " + this.name + "--bluetooth-b " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.8 31.8l3.9-3.9-3.9-3.8v7.7z m0-15.9l3.9-3.8-3.9-3.9v7.7z m0.7 4.1l8 7.9-12.1 12.1v-15.9l-6.6 6.6-2.4-2.4 8.3-8.3-8.3-8.3 2.4-2.4 6.6 6.6v-15.9l12.1 12.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBluetoothB;
}(React.Component));
IconBluetoothB.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBluetoothB;
//# sourceMappingURL=IconBluetoothB.js.map