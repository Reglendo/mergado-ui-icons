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
var IconQuestionCircle = (function (_super) {
    __extends(IconQuestionCircle, _super);
    function IconQuestionCircle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconQuestionCircle.prototype.render = function () {
        var className = this.name + " " + this.name + "--question-circle";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m5.7-15q0-2-1.2-3.6t-3.1-2.6-3.8-0.9q-5.4 0-8.3 4.7-0.3 0.6 0.2 1l2.9 2.2q0.2 0.1 0.5 0.1 0.3 0 0.5-0.2 1.2-1.6 1.9-2.1 0.8-0.5 2-0.5 1 0 1.9 0.6t0.8 1.3q0 0.8-0.4 1.3t-1.6 1q-1.4 0.7-2.5 2t-1.2 2.8v0.8q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5q0-0.5 0.5-1.1t1.2-1.1q0.7-0.4 1.1-0.7t1-0.8 1-1 0.6-1.4 0.3-1.8z m8.6 4.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconQuestionCircle;
}(React.Component));
IconQuestionCircle.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconQuestionCircle;
//# sourceMappingURL=question-circle.js.map