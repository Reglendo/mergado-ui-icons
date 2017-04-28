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
var IconQuestionCircleO = (function (_super) {
    __extends(IconQuestionCircleO, _super);
    function IconQuestionCircleO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconQuestionCircleO.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.6 26.8v3.6q0 0.3-0.2 0.5t-0.5 0.2h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-3.6q0-0.3 0.2-0.5t0.6-0.2h3.5q0.3 0 0.5 0.2t0.2 0.5z m5.8-11.1q0 1.1-0.4 2t-1 1.6-1.2 0.9-1.3 0.8q-0.7 0.4-1 0.7t-0.6 0.5-0.3 0.7v0.7q0 0.3-0.2 0.5t-0.5 0.2h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-1.5q0-0.8 0.3-1.5t0.5-1 0.9-0.8 0.9-0.6 1-0.5q1.2-0.5 1.7-0.9t0.5-1.1q0-1-1-1.6t-2.1-0.7q-1.3 0-2.2 0.6-0.6 0.5-1.8 1.9-0.2 0.2-0.5 0.2-0.3 0-0.4-0.1l-2.4-1.8q-0.3-0.2-0.3-0.5t0.1-0.5q2.7-4.3 7.8-4.3 2.9 0 5.3 2t2.5 4.8z m-8.3-10q-2.9 0-5.5 1.2t-4.6 3-3 4.6-1.1 5.5 1.1 5.5 3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1z m17.2 14.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconQuestionCircleO;
}(React.Component));
IconQuestionCircleO.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconQuestionCircleO;
//# sourceMappingURL=question-circle-o.js.map