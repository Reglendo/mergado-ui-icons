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
var IconAngleDoubleUp = (function (_super) {
    __extends(IconAngleDoubleUp, _super);
    function IconAngleDoubleUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAngleDoubleUp.prototype.render = function () {
        var className = this.name + " " + this.name + "--angle-double-up";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31 29.3q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.2-0.6 0.2t-0.5-0.2l-8.7-8.8-8.8 8.8q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.2-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.3 0.6-0.3t0.5 0.3l10.4 10.4q0.2 0.2 0.2 0.5z m0-8.6q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-8.7-8.7-8.8 8.7q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.2-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.6-0.2t0.5 0.2l10.4 10.4q0.2 0.2 0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAngleDoubleUp;
}(React.Component));
IconAngleDoubleUp.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconAngleDoubleUp;
//# sourceMappingURL=IconAngleDoubleUp.js.map