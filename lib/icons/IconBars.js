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
var IconBars = (function (_super) {
    __extends(IconBars, _super);
    function IconBars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBars.prototype.render = function () {
        var className = this.name + " " + this.name + "--bars " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 30v2.9q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z m0-11.4v2.8q0 0.6-0.4 1t-1 0.5h-31.5q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h31.5q0.5 0 1 0.5t0.4 1z m0-11.5v2.9q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBars;
}(React.Component));
IconBars.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBars;
//# sourceMappingURL=IconBars.js.map