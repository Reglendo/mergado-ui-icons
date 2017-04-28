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
var IconCc = (function (_super) {
    __extends(IconCc, _super);
    function IconCc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCc.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.2 22.2h4.1q-0.3 3-2 4.8t-4.1 1.8q-3.2 0-5-2.3t-1.8-6.1q0-3.8 1.8-6.1t4.6-2.3q2.8 0 4.5 1.7t1.9 4.8h-4q-0.1-1.2-0.7-1.9t-1.6-0.7q-1.1 0-1.7 1.2t-0.6 3.4q0 1 0.1 1.7t0.4 1.3 0.7 1 1.3 0.4q1.9 0 2.1-2.7z m13.9 0h4q-0.3 3-1.9 4.8t-4.2 1.8q-3.1 0-4.9-2.3t-1.8-6.1q0-3.8 1.8-6.1t4.5-2.3q2.9 0 4.5 1.7t1.9 4.8h-4q-0.1-1.2-0.7-1.9t-1.5-0.7q-1.1 0-1.8 1.2t-0.6 3.4q0 1 0.1 1.7t0.4 1.3 0.8 1 1.2 0.4q1 0 1.5-0.8t0.7-1.9z m6.9-2.3q0-4.1-0.3-6t-1.2-3.1q-0.1-0.2-0.2-0.3t-0.4-0.3-0.3-0.2q-1.7-1.2-13.6-1.2-12.1 0-13.7 1.2-0.1 0.1-0.4 0.2t-0.4 0.3-0.3 0.3q-0.9 1.1-1.1 3.1t-0.3 6q0 4 0.3 5.9t1.1 3.1q0.1 0.2 0.3 0.3t0.4 0.3 0.3 0.2q0.9 0.7 4.7 1t9.1 0.3q11.9 0 13.6-1.3 0.1 0 0.3-0.2t0.4-0.2 0.2-0.4q0.9-1.1 1.2-3t0.3-6z m3.8-14.8v29.8h-39.8v-29.8h39.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCc;
}(React.Component));
IconCc.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconCc;
//# sourceMappingURL=cc.js.map