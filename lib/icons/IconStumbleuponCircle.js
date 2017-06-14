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
var IconStumbleuponCircle = (function (_super) {
    __extends(IconStumbleuponCircle, _super);
    function IconStumbleuponCircle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStumbleuponCircle.prototype.render = function () {
        var className = this.name + " " + this.name + "--stumbleupon-circle " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.3 18.7l2-0.6v-1.4q0-1.7-1.3-3t-3-1.2-3.1 1.2-1.3 3v6.3q0 0.5-0.3 0.8t-0.8 0.3-0.7-0.3-0.3-0.8v-2.6h-3.4v2.7q0 1.8 1.3 3.1t3.1 1.3q1.8 0 3.1-1.3t1.3-3.1v-6.2q0-0.4 0.3-0.7t0.8-0.4q0.4 0 0.7 0.4t0.3 0.7v1.2z m7.5 4.4v-2.7h-3.4v2.8q0 0.4-0.3 0.7t-0.7 0.3q-0.5 0-0.8-0.3t-0.3-0.7v-2.8l-2 0.6-1.3-0.6v2.7q0 1.8 1.3 3.1t3.1 1.3 3.1-1.3 1.3-3.1z m7.5-3.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStumbleuponCircle;
}(React.Component));
IconStumbleuponCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconStumbleuponCircle;
//# sourceMappingURL=IconStumbleuponCircle.js.map