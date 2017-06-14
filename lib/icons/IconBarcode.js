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
var IconBarcode = (function (_super) {
    __extends(IconBarcode, _super);
    function IconBarcode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBarcode.prototype.render = function () {
        var className = this.name + " " + this.name + "--barcode " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m1.4 34.3h-1.4v-31.4h1.4v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-0.7v-31.4h0.7v31.4z m3.5 0h-0.7v-31.4h0.7v31.4z m3.5 0h-1.4v-31.4h1.4v31.4z m2.8 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m1.4 0h-0.6v-31.4h0.6v31.4z m3.6 0h-1.5v-31.4h1.4v31.4z m3.5 0h-1.5v-31.4h1.5v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.8 0h-1.4v-31.4h1.4v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z m4.2 0h-2.1v-31.4h2.1v31.4z m1.4 0h-0.7v-31.4h0.7v31.4z m2.1 0h-1.4v-31.4h1.4v31.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBarcode;
}(React.Component));
IconBarcode.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconBarcode;
//# sourceMappingURL=IconBarcode.js.map