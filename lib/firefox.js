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
var IconFirefox = (function (_super) {
    __extends(IconFirefox, _super);
    function IconFirefox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFirefox.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.2 40q-6.4 0-11.3-3.4t-7.4-8.9q-1.3-2.9-1.5-6.7t0.6-7.4 2.5-7 4-5.4l-0.2 6.3q0.2-0.3 1.5-0.3t1.5 0.3q1-1.8 3.6-3.1t5.3-1.3q-1.3 1-2.7 3.3t-1.3 3.7q0.5 0.1 1.4 0.3t1.4 0.1 1.5 0.1 1.1 0.1q0.4 0.1 0.2 1t-0.6 1.7q-0.2 0.1-0.4 0.4t-1.3 0.8-2.2 0.8l0.3 4.2-3.1-1.5q-0.4 0.9-0.2 1.8t0.8 1.5 1.5 0.9 1.8 0.2q1.1-0.2 2.2-0.8t1.9-1 1.6-0.4q1.4 0.1 2 0.7t0.4 1.5q0 0 0 0.1t-0.2 0.3-0.4 0.3-0.7 0.3-1.1 0q-1.3 2.1-3.2 3t-4.7 0.7q1.7 1.3 3.7 1.8t3.7 0.1 3.5-1.1 2.8-2 1.8-2.3q1-2 0.9-4.3t-0.8-4.2-1.8-2.8q2 0.9 3.1 1.8t1.7 2.5q0.3-3.8-1.3-7.7t-4.7-6.3q6 1.7 9.2 6.2t3.4 11.6q0 2.8-0.9 5.7t-2.8 5.3-4.2 4.4-5.5 3-6.4 1.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFirefox;
}(React.Component));
IconFirefox.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconFirefox;
//# sourceMappingURL=firefox.js.map