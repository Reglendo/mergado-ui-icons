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
var IconSellsy = (function (_super) {
    __extends(IconSellsy, _super);
    function IconSellsy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSellsy.prototype.render = function () {
        var className = this.name + " " + this.name + "--sellsy " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.1 29.2v-14.2q0-0.4-0.3-0.7t-0.7-0.3h-1.8q-0.3 0-0.6 0.3t-0.3 0.7v14.2q0 0.4 0.3 0.7t0.6 0.3h1.8q0.4 0 0.7-0.3t0.3-0.7z m-5.5 0v-10.3q0-0.4-0.3-0.7t-0.7-0.3h-1.9q-0.4 0-0.7 0.3t-0.3 0.7v10.3q0 0.4 0.3 0.7t0.7 0.3h1.9q0.4 0 0.7-0.3t0.3-0.7z m-5.7 0v-8.3q0-0.4-0.3-0.7t-0.6-0.3h-2q-0.4 0-0.7 0.3t-0.3 0.7v8.3q0 0.4 0.3 0.7t0.7 0.3h2q0.4 0 0.6-0.3t0.3-0.7z m-5.6 0v-7q0-0.4-0.3-0.7t-0.7-0.3h-2q-0.4 0-0.6 0.3t-0.3 0.7v7q0 0.4 0.3 0.7t0.6 0.3h2q0.4 0 0.7-0.3t0.3-0.7z m27.5-2.8q0 3.2-2.3 5.5t-5.6 2.3h-24.1q-3.2 0-5.5-2.3t-2.3-5.5q0-2.3 1.2-4.2t3.3-2.9q-0.2-0.6-0.2-1.4 0-2.2 1.6-3.7t3.7-1.6q2 0 3.5 1.3 0.9-3.5 3.8-5.8t6.5-2.3q2.9 0 5.4 1.4t3.8 3.9 1.5 5.3q0 1.3-0.3 2.4 2.6 0.7 4.3 2.8t1.7 4.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSellsy;
}(React.Component));
IconSellsy.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconSellsy;
//# sourceMappingURL=IconSellsy.js.map