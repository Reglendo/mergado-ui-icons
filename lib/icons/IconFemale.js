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
var IconFemale = (function (_super) {
    __extends(IconFemale, _super);
    function IconFemale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFemale.prototype.render = function () {
        var className = this.name + " " + this.name + "--female";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.1 23.6q0 0.9-0.7 1.5t-1.5 0.6q-1.1 0-1.8-0.9l-5-7.7h-1v3l5.5 9.2q0.2 0.3 0.2 0.7 0 0.6-0.4 1t-1 0.4h-4.3v6.1q0 1-0.8 1.8t-1.7 0.7h-3.6q-1 0-1.8-0.7t-0.7-1.8v-6.1h-4.3q-0.6 0-1-0.4t-0.4-1q0-0.4 0.2-0.7l5.5-9.2v-3h-1l-5.1 7.7q-0.6 0.9-1.8 0.9-0.8 0-1.5-0.6t-0.6-1.5q0-0.7 0.4-1.2l5.7-8.6q1.6-2.4 3.9-2.4h8.6q2.3 0 3.9 2.4l5.7 8.6q0.4 0.5 0.4 1.2z m-9.3-17.9q0 2.1-1.5 3.6t-3.5 1.4-3.6-1.4-1.4-3.6 1.4-3.5 3.6-1.5 3.5 1.5 1.5 3.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFemale;
}(React.Component));
IconFemale.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFemale;
//# sourceMappingURL=IconFemale.js.map