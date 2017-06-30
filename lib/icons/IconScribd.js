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
var IconScribd = (function (_super) {
    __extends(IconScribd, _super);
    function IconScribd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconScribd.prototype.render = function () {
        var className = this.name + " " + this.name + "--scribd " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.5 34.6q0 2-1.4 3.4t-3.4 1.4-3.5-1.4-1.4-3.4q0-2 1.4-3.4t3.5-1.5 3.4 1.5 1.4 3.4z m-5.2-6.3q-2.6 0.3-4.3 2.3t-1.7 4.6q0 1.6 0.7 3.1-3.3 1.7-8.5 1.7-2.4 0-4.5-0.5t-3.4-1.2-2.4-1.7-1.7-1.9-1-1.8-0.6-1.5-0.1-0.9q0-0.4 0.1-1t0.4-1.2 0.8-1.3 1.5-1 2.1-0.4 2.1 0.4 1.4 0.9 0.8 1.2 0.4 1.1 0 0.8q0 0.7-0.5 1.8 0.7 0.6 1.9 0.9t2 0.4l0.9 0q2.6 0 4.3-1.1t1.6-3q0-0.6-0.2-1.1t-0.7-1-1.1-0.9-1.6-1-2.1-1-2.7-1.3l-0.9-0.4q-2.6-1.3-4.2-2.3t-2.7-2.3-1.6-2.8-0.5-3.6q0-1.7 0.5-3.3t1.4-3.1 2.5-2.5 3.8-1.8 4.9-0.6q2.7 0 4.9 0.6t3.7 1.5 2.4 2.1 1.5 2.3 0.4 2.3q0 1.1-0.4 1.9t-0.8 1.3-1.1 0.8-1 0.4-0.9 0.1h-0.9l-0.9-0.1-1-0.3-0.9-0.6-0.8-1.1-0.5-1.5-0.3-2.2q-0.3-0.4-1.3-0.6t-1.8-0.2l-0.8 0q-1.5 0-2.6 0.7t-1.6 1.5-0.5 1.7q0 0.6 0.1 1t0.6 1 1.2 1.2 2.1 1.1 3.4 1.4q1.7 0.5 3.1 1.1t2.4 1.3 1.8 1.3 1.4 1.3 0.9 1.4 0.6 1.4 0.3 1.4 0.2 1.4 0 1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconScribd;
}(React.Component));
IconScribd.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconScribd;
//# sourceMappingURL=IconScribd.js.map