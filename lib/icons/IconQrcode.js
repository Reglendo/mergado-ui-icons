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
var IconQrcode = (function (_super) {
    __extends(IconQrcode, _super);
    function IconQrcode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconQrcode.prototype.render = function () {
        var className = this.name + " " + this.name + "--qrcode";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.1 25.7v2.9h-2.9v-2.9h2.9z m0-17.1v2.8h-2.9v-2.8h2.9z m17.1 0v2.8h-2.8v-2.8h2.8z m-22.8 22.8h8.5v-8.5h-8.5v8.5z m0-17.1h8.5v-8.6h-8.5v8.6z m17.1 0h8.6v-8.6h-8.6v8.6z m-5.7 5.7v14.3h-14.3v-14.3h14.3z m11.4 11.4v2.9h-2.8v-2.9h2.8z m5.7 0v2.9h-2.8v-2.9h2.8z m0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9v-14.3h8.6v2.9h2.9v-2.9h2.8z m-17.1-17.1v14.2h-14.3v-14.2h14.3z m17.1 0v14.2h-14.3v-14.2h14.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconQrcode;
}(React.Component));
IconQrcode.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconQrcode;
//# sourceMappingURL=IconQrcode.js.map