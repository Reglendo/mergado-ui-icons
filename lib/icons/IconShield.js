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
var IconShield = (function (_super) {
    __extends(IconShield, _super);
    function IconShield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShield.prototype.render = function () {
        var className = this.name + " " + this.name + "--shield";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.8 21.4v-14.3h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1z m4.3-17.1v17.1q0 2-0.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-0.9 0.4q-0.3 0.1-0.6 0.1t-0.6-0.1q-0.4-0.2-0.9-0.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-0.7-3.8v-17.1q0-0.6 0.4-1t1-0.4h25.7q0.6 0 1 0.4t0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShield;
}(React.Component));
IconShield.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconShield;
//# sourceMappingURL=IconShield.js.map