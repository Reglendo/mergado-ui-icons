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
var IconHandOLeft = (function (_super) {
    __extends(IconHandOLeft, _super);
    function IconHandOLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandOLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.7 31.4h0.7v-14.3h-0.7q-0.8 0-1.5-0.2t-1.4-0.9-1.1-1-1.1-1.2q0-0.1-0.1-0.1t-0.1-0.1-0.1-0.1q-1.6-1.8-2.5-3.2-0.3-0.5-0.8-1.6 0 0-0.2-0.5t-0.5-0.8-0.4-0.8-0.5-0.6-0.4-0.3q-1.6 0-2.6 0.7t-1 2.2q0 0.9 0.4 1.9t0.7 1.5 0.7 1.2 0.4 1.1h-12.9q-1.1 0-2 0.8t-0.8 2q0 1.2 0.8 2.1t2 0.8h7.4q-0.3 0.4-0.6 1.1t-0.2 1.2q0 1.5 1.2 2.7-0.4 0.7-0.4 1.5t0.4 1.6 1.1 1.2q-0.1 0.5-0.1 1.3 0 1.9 1 2.8t3.1 0.9q1.8 0 4.1-0.7t4.3-1.5 3.7-0.7z m6.4-1.4q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m2.9-12.9v14.3q0 1.2-0.8 2.1t-2.1 0.8h-6.4q-1.3 0-5 1.3-4.2 1.5-7 1.5-3.2 0-5.2-1.7t-1.9-4.8l0-0.2q-1.4-1.6-1.4-3.9 0-0.5 0.1-1-0.7-1.3-0.8-2.6h-3.8q-2.3 0-4-1.7t-1.7-4.1q0-2.3 1.7-4t4-1.7h8.4q-0.5-1.3-0.5-2.8 0-2.8 1.8-4.2t4.6-1.5q0.8 0 1.5 0.3t1.3 1.2 0.9 1.4 0.8 1.6 0.7 1.3q0.8 1.3 2.3 2.9 0 0.1 0.3 0.4t0.4 0.5 0.5 0.5 0.5 0.5 0.5 0.4 0.5 0.3 0.5 0.1h6.4q1.2 0 2.1 0.8t0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandOLeft;
}(React.Component));
IconHandOLeft.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconHandOLeft;
//# sourceMappingURL=hand-o-left.js.map