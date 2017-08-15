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
var IconArrowsV = (function (_super) {
    __extends(IconArrowsV, _super);
    function IconArrowsV() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowsV.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrows-v " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.2 7.1q0 0.6-0.4 1t-1 0.5h-2.9v22.8h2.9q0.6 0 1 0.5t0.4 1-0.4 1l-5.7 5.7q-0.4 0.4-1 0.4t-1-0.4l-5.7-5.7q-0.5-0.5-0.5-1t0.5-1 1-0.5h2.8v-22.8h-2.8q-0.6 0-1-0.5t-0.5-1 0.5-1l5.7-5.7q0.4-0.4 1-0.4t1 0.4l5.7 5.7q0.4 0.5 0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconArrowsV.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconArrowsV;
}(React.Component));
exports.default = IconArrowsV;
//# sourceMappingURL=IconArrowsV.js.map