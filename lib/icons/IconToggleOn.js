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
var IconToggleOn = (function (_super) {
    __extends(IconToggleOn, _super);
    function IconToggleOn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconToggleOn.prototype.render = function () {
        var className = this.name + " " + this.name + "--toggle-on " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m0 20q0-2.5 1-4.8t2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8-1 4.8-2.7 4-3.9 2.6-4.9 1h-14.9q-2.5 0-4.8-1t-4-2.6-2.6-4-1-4.8z m27.3 9.9q2 0 3.9-0.7t3.2-2.2 2.1-3.1 0.8-3.9-0.8-3.9-2.1-3.1-3.2-2.2-3.9-0.7-3.8 0.7-3.2 2.2-2.1 3.1-0.8 3.9 0.8 3.9 2.1 3.1 3.2 2.2 3.8 0.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconToggleOn;
}(React.Component));
IconToggleOn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconToggleOn;
//# sourceMappingURL=IconToggleOn.js.map