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
var IconEnvira = (function (_super) {
    __extends(IconEnvira, _super);
    function IconEnvira() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEnvira.prototype.render = function () {
        var className = this.name + " " + this.name + "--envira";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20 18.2q-2.3-4.4-3.6-6.2-3.1-4.5-7.7-7.1-0.8-0.4-1.6-0.8-2-0.9-2.1-0.7t0.8 0.8l0.9 0.7q1.3 1 2.5 2.1t2.1 2.6 1.5 2.5 1.6 3q0.2 0.3 0.3 0.5 1 1.9 1.9 3.4t2.2 3.5 2.6 3.3 2.9 2.8 3.3 2q3.4 1.5 3.4 1.3 0.1 0-1.1-0.8-1.1-0.8-1.8-1.3-1.7-1.3-4-4.7t-4.1-6.9z m-7.7 12.1q-1.7-1.3-3-2.8t-2.2-3.2-1.6-3.4-1.3-4.2-1.1-4.6-1.4-5.6-1.7-6.5q6.1 0 11.1 0.8t8.5 2.1 6 3.2 4.2 3.8 2.4 4.5 1.3 4.4 0.2 4.4-0.2 3.9-0.4 3.2-0.3 2.4l7.2 7.3h-2.3l-6.3-6.4q-0.5 0.1-2 0.4t-2.7 0.4-3.1 0.1-3.6-0.4-3.8-1.3-3.9-2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEnvira;
}(React.Component));
IconEnvira.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconEnvira;
//# sourceMappingURL=IconEnvira.js.map