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
var Icon500px = (function (_super) {
    __extends(Icon500px, _super);
    function Icon500px() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    Icon500px.prototype.render = function () {
        var className = this.name + " " + this.name + "--500px";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.3 34.5l-0.2 0.2q-2.5 2.5-5.7 3.9-3.5 1.4-7.1 1.4-3.7 0-7.1-1.4-3.3-1.4-5.8-3.9-2.5-2.5-3.9-5.8-0.9-2.3-1.2-4.2-0.1-0.6 1.1-0.8 1.1-0.2 1.2 0.4 0.1 0.1 0.1 0.1 0.4 2 1 3.6 1.1 2.7 3.4 5 2.2 2.2 5 3.4 3 1.3 6.2 1.3 3.2 0 6.1-1.3 2.9-1.2 5.1-3.4l0.1-0.1q0.2-0.2 0.6-0.2 0.2 0.1 0.7 0.5 0.8 0.9 0.4 1.3z m-10.6-13.7l-1.4 1.5 1.4 1.4q0.4 0.5-0.2 1.1-0.4 0.4-0.7 0.4-0.2 0-0.4-0.3l-1.4-1.3-1.5 1.4q-0.1 0.2-0.3 0.2-0.4 0-0.7-0.4l-0.1 0q-0.4-0.4-0.4-0.7 0-0.1 0.2-0.4l1.5-1.4-1.5-1.5q-0.3-0.4 0.3-1 0.4-0.4 0.7-0.4 0.2 0 0.3 0.1l1.5 1.5 1.4-1.5q0.4-0.3 1.1 0.3 0.6 0.6 0.2 1z m10.6 1.3q0 2.6-1.1 5.1-1 2.3-2.8 4.1-1.8 1.8-4.2 2.8t-5.1 1.1-5-1.1-4.2-2.8q-1.8-1.8-2.8-4.1-0.3-0.7-0.3-0.9h-0.1q-0.2-0.6 1-1 1.1-0.4 1.3 0.3 0.9 2.2 2.2 3.7h0v-7.6q0.1-3.1 2.3-5.2 2.3-2.3 5.6-2.3 3.3 0 5.7 2.3t2.3 5.6q0 3.2-2.4 5.6t-5.6 2.3q-1.2 0-2.5-0.4-0.6-0.2-0.2-1.3 0.3-1.2 0.9-1l0.4 0.1q0.3 0 0.7 0.1t0.7 0.1q2.3 0 3.9-1.6t1.6-3.9q0-2.3-1.6-3.8-1.6-1.6-3.9-1.6-2.4 0-4 1.8-1.4 1.6-1.4 3.5v9.2q2.4 1.5 5.4 1.5 2.1 0 4.1-0.8t3.5-2.3 2.3-3.4 0.8-4.1q0-4.4-3.1-7.6-3.2-3.1-7.6-3.1-4.5 0-7.6 3.1-1.2 1.2-1.7 1.9l0 0.1q-0.2 0.2-0.3 0.3t-0.5 0.3-0.9-0.1q-0.4-0.1-0.8-0.4t-0.3-0.6v-15.2q0-0.3 0.2-0.5t0.6-0.3h19.6q0.7 0 0.7 1.2t-0.7 1.3h-18.1v10.7h0q0.9-0.9 2.3-1.8t2.4-1.4q2.4-1 5.1-1 2.7 0 5.1 1t4.2 2.8q1.8 1.8 2.8 4.2 1 2.5 1 5.1z m-0.7-13q0.2 0.2 0.2 0.4t-0.2 0.4-0.3 0.5q-0.6 0.6-0.9 0.6-0.2 0-0.4-0.2-2.3-2-4.6-3-2.8-1.2-6.1-1.2-3 0-5.9 1.1-0.6 0.2-1-0.8-0.2-0.6-0.2-0.9 0.1-0.4 0.4-0.4 2.9-1.3 6.7-1.3 3.6 0 7 1.4 3.1 1.3 5.3 3.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return Icon500px;
}(React.Component));
Icon500px.defaultProps = {
    size: 15,
    style: {}
};
exports.default = Icon500px;
//# sourceMappingURL=500px.js.map