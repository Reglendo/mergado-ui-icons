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
var IconRegistered = (function (_super) {
    __extends(IconRegistered, _super);
    function IconRegistered() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRegistered.prototype.render = function () {
        var className = this.name + " " + this.name + "--registered " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.3 15.7q0-2-1.4-2.7-0.7-0.4-2.6-0.4h-2.7v6.3h3.6q1.5 0 2.3-0.9t0.8-2.3z m1.1 6.4l4.6 8.3q0.2 0.4 0 0.7-0.2 0.3-0.6 0.3h-3.4q-0.5 0-0.6-0.4l-4.4-8.1h-3.4v7.8q0 0.3-0.2 0.5t-0.5 0.2h-3q-0.4 0-0.6-0.2t-0.2-0.5v-21.4q0-0.3 0.2-0.5t0.6-0.2h6.5q2.9 0 4.3 0.5 1.9 0.7 3 2.4t1 4.1q0 2-0.9 3.7t-2.6 2.4q0.2 0.2 0.2 0.4z m-4.4-18.5q-3.3 0-6.4 1.3t-5.2 3.5-3.5 5.2-1.3 6.4 1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5-6.4-1.3z m20 16.4q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRegistered;
}(React.Component));
IconRegistered.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconRegistered;
//# sourceMappingURL=IconRegistered.js.map