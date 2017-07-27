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
var IconTruck = (function (_super) {
    __extends(IconTruck, _super);
    function IconTruck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTruck.prototype.render = function () {
        var className = this.name + " " + this.name + "--truck " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.9 31.2q0-1.2-0.8-2t-2-0.8-1.9 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m-8.3-11.2h8.3v-5.6h-3.4q-0.3 0-0.5 0.2l-4.2 4.3q-0.2 0.2-0.2 0.4v0.7z m27.8 11.2q0-1.2-0.8-2t-1.9-0.8-2 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m5.6-23.7v22.3q0 0.3-0.1 0.5t-0.3 0.4-0.3 0.3-0.5 0.1-0.5 0.1-0.6 0-0.5 0q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-8.4q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-1.4q-0.1 0-0.5 0t-0.6 0-0.5-0.1-0.5-0.1-0.3-0.3-0.3-0.4-0.1-0.5q0-0.6 0.4-1t1-0.4v-7q0-0.2 0-0.8t0-0.8 0-0.7 0.2-0.9 0.3-0.6 0.5-0.7l4.3-4.3q0.4-0.4 1.1-0.7t1.3-0.3h3.4v-4.1q0-0.6 0.5-1t0.9-0.4h22.3q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTruck;
}(React.Component));
IconTruck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconTruck;
//# sourceMappingURL=IconTruck.js.map