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
var IconSnapchat = (function (_super) {
    __extends(IconSnapchat, _super);
    function IconSnapchat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSnapchat.prototype.render = function () {
        var className = this.name + " " + this.name + "--snapchat";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 25.6q0-0.5-0.5-0.6-1.5-0.3-2.7-1.3t-1.8-2.4q-0.1-0.4-0.1-0.6 0-0.3 0.4-0.5t1-0.4 0.9-0.5 0.5-0.8q0-0.4-0.4-0.7t-0.9-0.3q-0.3 0-0.7 0.2t-0.7 0.2q-0.1 0-0.3-0.1 0.1-2.1 0.1-2.5 0-1.8-0.3-2.6-0.8-1.7-2.3-2.7t-3.4-0.9q-4.5 0-6.2 3.6-0.4 0.8-0.4 2.6 0 0.4 0.2 2.5-0.1 0.1-0.4 0.1-0.2 0-0.7-0.2t-0.6-0.2q-0.5 0-0.9 0.3t-0.4 0.7q0 0.5 0.4 0.8t1 0.5 1 0.4 0.4 0.5q0 0.2-0.2 0.6-1.4 3.1-4.4 3.7-0.5 0.1-0.5 0.6 0 1.1 3.1 1.5 0 0.2 0.1 0.6t0.3 0.7 0.5 0.2q0.3 0 0.8-0.1t0.9-0.1q0.8 0 1.5 0.4t1.2 0.7 1.3 0.7 1.7 0.3q1 0 1.8-0.3t1.3-0.7 1.2-0.7 1.5-0.4q0.3 0 0.8 0.1t0.9 0.1q0.3 0 0.5-0.2t0.3-0.7 0.1-0.6q3-0.4 3-1.5z m5.7-5.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSnapchat;
}(React.Component));
IconSnapchat.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconSnapchat;
//# sourceMappingURL=IconSnapchat.js.map