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
var IconTransgenderAlt = (function (_super) {
    __extends(IconTransgenderAlt, _super);
    function IconTransgenderAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTransgenderAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--transgender-alt";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.1 0.7q0-0.3 0.2-0.5t0.5-0.2h6.4q0.6 0 1 0.4t0.4 1v6.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-3l-5.7 5.7q2.8 3.5 2.8 8 0 4.9-3.3 8.6t-8.1 4.1v3h2.1q0.4 0 0.6 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.6 0.2h-2.1v2.2q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.4 0-0.6-0.2t-0.2-0.5v-2.2h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h2.1v-3q-4.8-0.5-8.1-4.1t-3.3-8.6q0-4.5 2.8-8l-1.1-1.2-2.3 2.5q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.1-1q-0.2-0.1-0.2-0.4t0.2-0.6l2.3-2.5-2.4-2.5v3q0 0.3-0.2 0.5t-0.6 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-6.5q0-0.6 0.4-1t1-0.4h6.5q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-3l2.4 2.3 1.9-2.1q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1q0.2 0.1 0.2 0.4t-0.2 0.6l-2 2.2 1.3 1.2q3.5-2.8 8-2.8t8 2.8l5.7-5.6h-3q-0.3 0-0.5-0.2t-0.2-0.6v-1.4z m-10 27.9q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTransgenderAlt;
}(React.Component));
IconTransgenderAlt.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTransgenderAlt;
//# sourceMappingURL=transgender-alt.js.map