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
var IconPagelines = (function (_super) {
    __extends(IconPagelines, _super);
    function IconPagelines() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPagelines.prototype.render = function () {
        var className = this.name + " " + this.name + "--pagelines " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 24.6q-0.7 1.8-1.7 3.1t-2 2-2.2 1-2.3 0.3-2.2-0.2-1.9-0.4-1.5-0.7-1.1-0.5l-0.4-0.2q-2.5 5.1-6.4 8t-8.6 3q-0.4 0-0.7-0.3t-0.3-0.7 0.3-0.7 0.7-0.3q3.9 0 7.2-2.4t5.6-6.6q-0.8 0.4-1.6 0.6t-1.8 0.2-2.1 0-2-0.6-2.1-1.4-1.9-2.2-1.6-3.3q2.5-1 4.7-1.2t3.8 0.1 2.7 1.3 2 1.7 1.3 1.9q1.2-3 1.7-6.5-0.1 0-0.4 0t-1 0.1-1.5 0-1.9-0.3-1.9-0.5-1.9-0.9-1.7-1.5-1.2-2.1-0.6-2.8q1.5-0.7 2.9-0.9t2.5 0.1 2.1 0.6 1.6 1.2 1.3 1.3 0.9 1.4 0.6 1.3 0.4 0.9l0.1 0.3q0.3-2.7 0.3-4.3-0.2-0.2-0.5-0.4t-1.1-1-1.4-1.6-1.2-2.1-0.8-2.5 0.3-2.8 1.6-3.1q1.6 0.6 2.8 1.4t1.9 1.7 1.1 1.9 0.4 2 0 1.9-0.3 1.7-0.4 1.4-0.4 0.9l-0.1 0.3q0 0.2 0 1.2t0 1.6q0-0.2 0.2-0.4t0.7-1 1.1-1.3 1.6-1.2 2-1 2.5-0.4 3 0.6q-0.1 1.7-0.5 3.1t-1.1 2.4-1.6 1.6-1.8 1-1.9 0.5-1.8 0.2-1.5 0-1-0.1l-0.4-0.1q-0.5 3.3-1.6 6.4 0.1-0.2 0.4-0.5t1.1-0.9 1.7-1.1 2.2-1 2.7-0.4 2.8 0.5 3.1 1.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPagelines;
}(React.Component));
IconPagelines.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconPagelines;
//# sourceMappingURL=IconPagelines.js.map