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
var IconDollar = (function (_super) {
    __extends(IconDollar, _super);
    function IconDollar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDollar.prototype.render = function () {
        var className = this.name + " " + this.name + "--dollar";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.3 26.4q0 3.5-2.2 5.9t-5.8 3.1v3.9q0 0.3-0.2 0.5t-0.5 0.2h-3q-0.3 0-0.5-0.2t-0.2-0.5v-3.9q-1.5-0.2-2.8-0.7t-2.3-1-1.7-1.1-1-0.8-0.4-0.4q-0.4-0.5 0-0.9l2.3-3q0.1-0.3 0.5-0.3 0.3-0.1 0.5 0.2l0.1 0q2.5 2.2 5.4 2.8 0.8 0.2 1.6 0.2 1.8 0 3.2-1t1.4-2.7q0-0.6-0.4-1.2t-0.7-0.9-1.3-0.8-1.5-0.8-1.8-0.7q-0.8-0.3-1.3-0.5t-1.4-0.6-1.4-0.7-1.3-0.8-1.2-1-0.9-1.1-0.8-1.2-0.5-1.5-0.2-1.8q0-3.1 2.2-5.4t5.7-3v-4q0-0.3 0.2-0.5t0.5-0.2h3q0.3 0 0.5 0.2t0.2 0.5v3.9q1.3 0.2 2.5 0.6t1.9 0.7 1.5 0.8 0.8 0.7 0.4 0.3q0.3 0.4 0.1 0.9l-1.8 3.2q-0.2 0.3-0.5 0.4-0.4 0-0.6-0.2-0.1-0.1-0.4-0.3t-0.8-0.5-1.3-0.8-1.7-0.5-1.9-0.3q-2.1 0-3.5 1t-1.3 2.4q0 0.6 0.2 1.1t0.6 0.9 0.9 0.8 1.3 0.7 1.3 0.6 1.6 0.6q1.2 0.4 1.8 0.7t1.7 0.8 1.7 0.9 1.4 1.1 1.1 1.5 0.7 1.7 0.3 2.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDollar;
}(React.Component));
IconDollar.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDollar;
//# sourceMappingURL=IconDollar.js.map