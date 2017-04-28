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
var IconCode = (function (_super) {
    __extends(IconCode, _super);
    function IconCode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCode.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.8 30.4l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-9.7-9.7q-0.2-0.2-0.2-0.5t0.2-0.4l9.7-9.7q0.2-0.2 0.5-0.2t0.5 0.2l1 1q0.2 0.2 0.2 0.5t-0.2 0.5l-8.1 8.1 8.1 8.2q0.2 0.2 0.2 0.5t-0.2 0.4z m12.3-22.1l-7.8 26.8q0 0.3-0.3 0.4t-0.5 0.1l-1.3-0.4q-0.2-0.1-0.4-0.3t0-0.5l7.7-26.8q0.1-0.3 0.4-0.4t0.4-0.1l1.3 0.4q0.3 0 0.4 0.3t0.1 0.5z m13.6 13.5l-9.7 9.7q-0.2 0.2-0.4 0.2t-0.5-0.2l-1-1.1q-0.3-0.2-0.3-0.4t0.3-0.5l8.1-8.2-8.1-8.1q-0.3-0.2-0.3-0.5t0.3-0.5l1-1q0.2-0.2 0.5-0.2t0.4 0.2l9.7 9.7q0.2 0.2 0.2 0.4t-0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCode;
}(React.Component));
IconCode.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconCode;
//# sourceMappingURL=code.js.map