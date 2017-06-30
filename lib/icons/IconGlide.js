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
var IconGlide = (function (_super) {
    __extends(IconGlide, _super);
    function IconGlide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGlide.prototype.render = function () {
        var className = this.name + " " + this.name + "--glide " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.3 11.5q0 0.6-0.3 2.1-0.2 1.1-0.7 3.3t-0.6 3.4q-0.1 0.2-0.1 0.3t-0.3 0q-0.5 0.1-0.7 0.1-1.3 0-1.9-1.1t-0.6-2.6q0-1.9 0.8-3.9t2.3-2.7q0.6-0.3 1.1-0.3 0.7 0 0.8 0.3t0.2 1.1z m10.9 9.5q0-0.4-0.9-1.7t-1.2-1.5q-0.4-0.2-0.7-0.2-2 0-5.1 1.7l0 0q0.1-0.5 0.6-3t0.6-4q0-5.2-5.4-5.2-0.6 0-1.6 0.1-2.1 0.4-3.7 2t-2.5 3.8-0.8 4.2q0 3.2 1.8 5t5 1.8q0.6 0 0.6 0t0 0.1q-0.1 0.8-0.6 2.6-0.3 1.2-1.2 2.3t-1.8 1.1q-0.9 0-0.9-1.1 0-0.5 0.2-1t0.6-0.9 0.6-0.6 0.6-0.5 0.2-0.2q0 0-0.1-0.2-0.6-0.5-1.3-0.8t-1.5-0.3q-0.8 0-1.4 0.7t-0.9 1.7-0.3 1.7q0 1.9 1.2 3.1t3 1.2q1.9 0 3.5-1.1t2.6-2.8 1.5-3.5q0.1-0.5 0.3-1.4t0.4-1.5q0-0.3 0.3-0.4 2.6-1.4 5-1.4 1.1 0 2.9 0.4 0 0.1 0.1 0.1 0.1 0 0.2-0.1t0.1-0.2z m4.1-11.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGlide;
}(React.Component));
IconGlide.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconGlide;
//# sourceMappingURL=IconGlide.js.map