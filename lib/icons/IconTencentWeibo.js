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
var IconTencentWeibo = (function (_super) {
    __extends(IconTencentWeibo, _super);
    function IconTencentWeibo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTencentWeibo.prototype.render = function () {
        var className = this.name + " " + this.name + "--tencent-weibo " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.3 12.8q0 1.8-1.3 3t-3 1.3q-1.4 0-2.5-0.8-1.4 1.5-2.6 3.3-5.5 8.2-4.5 19.1 0.1 0.5-0.2 0.9t-0.8 0.4h-0.1q-0.5 0-0.8-0.3t-0.4-0.8q-0.3-2.8-0.1-5.5t0.7-4.8 1.2-4.2 1.5-3.4 1.7-2.8q1.3-2 2.9-3.7-0.3-0.8-0.3-1.7 0-1.8 1.2-3.1t3.1-1.2 3 1.2 1.3 3.1z m8.5 0.2q0 3.5-1.7 6.5t-4.8 4.8-6.5 1.7q-1.4 0-2.9-0.3-0.5-0.1-0.8-0.5t-0.1-0.9q0.1-0.5 0.5-0.7t0.9-0.2q1.1 0.3 2.4 0.3 2.2 0 4.1-0.8t3.5-2.3 2.2-3.4 0.9-4.2-0.9-4.1-2.2-3.5-3.5-2.2-4.1-0.9-4.2 0.9-3.4 2.2-2.3 3.5-0.8 4.1q0 2.6 1.2 4.9 0.2 0.4 0 0.9t-0.5 0.6-0.9 0.1-0.7-0.6q-1.4-2.7-1.4-5.9 0-2.6 1-5.1t2.8-4.1 4.1-2.8 5.1-1q3.5 0 6.5 1.7t4.8 4.8 1.7 6.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTencentWeibo;
}(React.Component));
IconTencentWeibo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconTencentWeibo;
//# sourceMappingURL=IconTencentWeibo.js.map