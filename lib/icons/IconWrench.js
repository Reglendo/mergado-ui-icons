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
var IconWrench = (function (_super) {
    __extends(IconWrench, _super);
    function IconWrench() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWrench.prototype.render = function () {
        var className = this.name + " " + this.name + "--wrench " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m9.6 32.9q0-0.6-0.5-1t-1-0.5-1 0.5-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m14.3-9.4l-15.2 15.2q-0.8 0.8-2 0.8-1.1 0-2-0.8l-2.4-2.4q-0.8-0.8-0.8-2 0-1.2 0.8-2l15.2-15.2q0.9 2.1 2.6 3.8t3.8 2.6z m14.2-9.7q0 0.8-0.5 2.3-1.1 3-3.7 4.9t-5.8 1.9q-4.1 0-7-3t-3-7 3-7.1 7-2.9q1.3 0 2.8 0.3t2.4 1.1q0.3 0.2 0.3 0.6t-0.3 0.6l-6.6 3.8v5l4.3 2.4q0.1-0.1 1.8-1.1t3-1.8 1.6-0.8q0.3 0 0.5 0.2t0.2 0.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWrench;
}(React.Component));
IconWrench.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconWrench;
//# sourceMappingURL=IconWrench.js.map