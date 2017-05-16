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
var IconPaypal = (function (_super) {
    __extends(IconPaypal, _super);
    function IconPaypal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPaypal.prototype.render = function () {
        var className = this.name + " " + this.name + "--paypal";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.9 14.4q0.4 1.9-0.1 4.6-1.9 9.9-12.6 9.9h-1q-0.5 0-1 0.4t-0.5 0.9l-0.1 0.4-1.2 7.7-0.1 0.4q-0.1 0.6-0.5 0.9t-1 0.4h-5.6q-0.5 0-0.7-0.3t-0.2-0.8q0.2-1.3 0.6-3.8t0.5-3.7 0.6-3.8 0.7-3.7q0.1-0.8 0.9-0.8h2.9q3 0 5.3-0.5 3.9-0.9 6.4-3.2 2.3-2.1 3.5-5.5 0.5-1.6 0.7-3 0.1-0.1 0.1-0.2t0.1 0 0.1 0.1q1.8 1.3 2.2 3.6z m-3.8-6.3q0 2.4-1.1 5.3-1.7 5.2-6.7 7-2.5 0.9-5.6 1 0 0-2 0l-2 0q-2.3 0-2.7 2.1 0 0.2-1.9 11.8 0 0.3-0.2 0.3h-6.6q-0.5 0-0.8-0.4t-0.3-0.9l5.2-32.8q0.1-0.6 0.6-1.1t1.1-0.4h13.4q0.8 0 2.2 0.3t2.5 0.7q2.3 0.9 3.6 2.8t1.3 4.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPaypal;
}(React.Component));
IconPaypal.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconPaypal;
//# sourceMappingURL=IconPaypal.js.map