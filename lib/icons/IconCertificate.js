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
var IconCertificate = (function (_super) {
    __extends(IconCertificate, _super);
    function IconCertificate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCertificate.prototype.render = function () {
        var className = this.name + " " + this.name + "--certificate";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.7 20l3.1 3q0.7 0.6 0.4 1.6-0.2 0.9-1.1 1.1l-4.2 1.1 1.2 4.1q0.2 1-0.5 1.6-0.6 0.7-1.5 0.4l-4.2-1.2-1 4.2q-0.3 0.9-1.2 1.2-0.3 0-0.4 0-0.7 0-1.1-0.4l-3.1-3.1-3 3.1q-0.6 0.6-1.5 0.4-0.9-0.2-1.2-1.2l-1-4.2-4.2 1.2q-0.9 0.3-1.6-0.4-0.7-0.6-0.4-1.6l1.2-4.1-4.2-1.1q-0.9-0.2-1.2-1.1-0.2-1 0.5-1.6l3.1-3-3.1-3q-0.7-0.6-0.5-1.6 0.3-0.9 1.2-1.1l4.2-1.1-1.2-4.1q-0.3-1 0.4-1.6 0.7-0.7 1.6-0.4l4.2 1.2 1-4.2q0.3-1 1.2-1.2 0.9-0.2 1.5 0.4l3 3.1 3.1-3.1q0.6-0.6 1.5-0.4 0.9 0.2 1.2 1.2l1 4.2 4.2-1.2q0.9-0.3 1.5 0.4 0.7 0.6 0.5 1.6l-1.2 4.1 4.2 1.1q0.9 0.2 1.1 1.1 0.3 1-0.4 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCertificate;
}(React.Component));
IconCertificate.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCertificate;
//# sourceMappingURL=IconCertificate.js.map