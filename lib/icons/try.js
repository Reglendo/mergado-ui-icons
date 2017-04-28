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
var IconTry = (function (_super) {
    __extends(IconTry, _super);
    function IconTry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTry.prototype.render = function () {
        var className = this.name + " " + this.name + "--try";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-13.7l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.2-0.3-0.6v-2.8q0-0.6 0.5-0.7l5.2-1.6v-2.1l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.3-0.3-0.6v-2.9q0-0.5 0.5-0.7l5.2-1.6v-5.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v4l8.4-2.6q0.3-0.1 0.6 0.1t0.3 0.6v2.9q0 0.5-0.5 0.7l-8.8 2.7v2l8.4-2.6q0.3-0.1 0.6 0.2t0.3 0.5v2.9q0 0.5-0.5 0.7l-8.8 2.7v10.9q4.2-0.3 7.1-3.4t2.9-7.3q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTry;
}(React.Component));
IconTry.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTry;
//# sourceMappingURL=try.js.map