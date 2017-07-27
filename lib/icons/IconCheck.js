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
var IconCheck = (function (_super) {
    __extends(IconCheck, _super);
    function IconCheck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCheck.prototype.render = function () {
        var className = this.name + " " + this.name + "--check " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 12.6q0 0.9-0.6 1.6l-19.2 19.1q-0.6 0.7-1.5 0.7t-1.6-0.7l-11.1-11.1q-0.6-0.6-0.6-1.5t0.6-1.5l3.1-3q0.6-0.7 1.5-0.7t1.5 0.7l6.6 6.5 14.6-14.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.6 0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCheck;
}(React.Component));
IconCheck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconCheck;
//# sourceMappingURL=IconCheck.js.map