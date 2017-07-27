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
var IconHandLizardO = (function (_super) {
    __extends(IconHandLizardO, _super);
    function IconHandLizardO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandLizardO.prototype.render = function () {
        var className = this.name + " " + this.name + "--hand-lizard-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.3 2.6q1.2 0 2.3 0.6t1.8 1.4l11.1 15.2q2.3 3.1 2.3 7v6.9q0 1.5-1.1 2.6t-2.7 1.1h-7.4q-1.6 0-2.7-1.1t-1.1-2.6v-3.5l-5.5-2.7h-10.6q-1.6 0-2.6-1.1t-1.1-2.7v-0.6q0-2.3 1.6-3.9t4-1.7h8.1l0.8-2.5h-13.3q-1.9 0-3.4-1.3t-1.5-3.2q-1.3-1.5-1.3-3.5v-0.7q0-1.5 1.1-2.6t2.6-1.1h18.6z m15 31.1v-6.9q0-3.1-1.8-5.5l-11.2-15.2q-0.7-1-2-1h-18.6q-0.5 0-0.8 0.4t-0.4 0.8q0 0.7 0 1t0.2 0.8 0.5 0.8q0.2-0.6 0.7-1t1.1-0.3h16.1v0.6h-16.1q-0.5 0-0.9 0.4t-0.4 0.8q0 0.9 0.1 1.2 0.1 0.8 0.8 1.4t1.6 0.5h14.2q0.8 0 1.3 0.6t0.6 1.3q0 0.3-0.1 0.6l-1.3 3.7q-0.2 0.6-0.7 0.9t-1 0.4h-8.6q-1.3 0-2.2 0.9t-0.9 2.2v0.6q0 0.5 0.3 0.9t0.9 0.4h10.9q0.3 0 0.5 0.1l6.2 3.1q0.5 0.2 0.7 0.7t0.3 0.9v3.9q0 0.5 0.4 0.8t0.9 0.4h7.4q0.5 0 0.9-0.4t0.4-0.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandLizardO;
}(React.Component));
IconHandLizardO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconHandLizardO;
//# sourceMappingURL=IconHandLizardO.js.map