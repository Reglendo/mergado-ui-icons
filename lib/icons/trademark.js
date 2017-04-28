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
var IconTrademark = (function (_super) {
    __extends(IconTrademark, _super);
    function IconTrademark() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTrademark.prototype.render = function () {
        var className = this.name + " " + this.name + "--trademark";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.4 12.9v2.3q0 0.3-0.2 0.5t-0.5 0.2h-6v16.4q0 0.3-0.2 0.5t-0.4 0.2h-2.8q-0.2 0-0.4-0.2t-0.2-0.5v-16.4h-6.1q-0.2 0-0.4-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h16q0.3 0 0.5 0.2t0.2 0.5z m21.1-0.1l1.5 19.5q0 0.3-0.1 0.5-0.2 0.2-0.5 0.2h-2.7q-0.3 0-0.5-0.2t-0.2-0.4l-0.9-11.9-3.8 8.6q-0.2 0.4-0.6 0.4h-2.5q-0.4 0-0.5-0.4l-3.9-8.7-0.9 12q0 0.2-0.2 0.4t-0.4 0.2h-2.7q-0.3 0-0.5-0.2-0.2-0.2-0.2-0.5l1.6-19.5q0-0.2 0.2-0.4t0.4-0.2h2.9q0.4 0 0.6 0.4l4.5 10.5q0.2 0.5 0.4 1.1 0-0.2 0.2-0.5t0.2-0.6l4.5-10.5q0.1-0.4 0.5-0.4h2.9q0.3 0 0.4 0.2t0.3 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTrademark;
}(React.Component));
IconTrademark.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTrademark;
//# sourceMappingURL=trademark.js.map