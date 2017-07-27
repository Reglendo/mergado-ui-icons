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
var IconWechat = (function (_super) {
    __extends(IconWechat, _super);
    function IconWechat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWechat.prototype.render = function () {
        var className = this.name + " " + this.name + "--wechat " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.3 11.6q0-0.8-0.5-1.3t-1.3-0.5q-0.8 0-1.5 0.5t-0.6 1.3q0 0.7 0.6 1.2t1.5 0.5q0.8 0 1.3-0.5t0.5-1.2z m14.4 9.8q0-0.5-0.5-1t-1.3-0.4q-0.5 0-0.9 0.4t-0.5 1q0 0.5 0.5 1t0.9 0.4q0.8 0 1.3-0.4t0.5-1z m-4.6-9.8q0-0.8-0.5-1.3t-1.2-0.5q-0.9 0-1.5 0.5t-0.7 1.3q0 0.7 0.7 1.2t1.5 0.5q0.7 0 1.2-0.5t0.5-1.2z m12.3 9.8q0-0.5-0.5-1t-1.2-0.4q-0.6 0-1 0.4t-0.4 1q0 0.5 0.4 1t1 0.4q0.7 0 1.2-0.4t0.5-1z m-5.1-7.7q-0.6-0.1-1.4-0.1-3.3 0-6 1.5t-4.4 4.1-1.6 5.5q0 1.5 0.5 3-0.7 0-1.3 0-0.5 0-1 0t-1.1-0.1-0.8-0.1-1.1-0.2-1-0.3l-4.9 2.5 1.4-4.2q-5.6-4-5.6-9.5 0-3.3 1.9-6.1t5.1-4.3 7.1-1.6q3.4 0 6.4 1.3t5.1 3.5 2.7 5.1z m11.5 10.9q0 2.3-1.4 4.3t-3.6 3.8l1.1 3.5-3.9-2.1q-2.9 0.7-4.2 0.7-3.3 0-6-1.4t-4.4-3.7-1.6-5.1 1.6-5.1 4.4-3.8 6-1.3q3.1 0 5.9 1.3t4.4 3.8 1.6 5.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWechat;
}(React.Component));
IconWechat.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconWechat;
//# sourceMappingURL=IconWechat.js.map