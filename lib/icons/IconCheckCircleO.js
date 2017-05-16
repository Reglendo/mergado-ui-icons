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
var IconCheckCircleO = (function (_super) {
    __extends(IconCheckCircleO, _super);
    function IconCheckCircleO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCheckCircleO.prototype.render = function () {
        var className = this.name + " " + this.name + "--check-circle-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.1 18.1l-9.4 9.5q-0.4 0.4-1 0.4t-1-0.4l-6.6-6.6q-0.4-0.4-0.4-1t0.4-1l2.3-2.3q0.4-0.4 1-0.4t1 0.4l3.3 3.3 6.2-6.1q0.4-0.5 1-0.5t1 0.5l2.2 2.2q0.5 0.5 0.5 1t-0.5 1z m3.2 1.9q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1z m5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCheckCircleO;
}(React.Component));
IconCheckCircleO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCheckCircleO;
//# sourceMappingURL=IconCheckCircleO.js.map