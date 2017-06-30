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
var IconEraser = (function (_super) {
    __extends(IconEraser, _super);
    function IconEraser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEraser.prototype.render = function () {
        var className = this.name + " " + this.name + "--eraser " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.6 30.6l7-7.9h-16l-6.9 7.9h15.9z m21-22.3q0.4 0.7 0.2 1.5t-0.6 1.3l-18.6 21.3q-0.8 0.9-2 0.9h-15.9q-0.8 0-1.5-0.4t-1-1.2q-0.3-0.7-0.2-1.5t0.7-1.3l18.6-21.3q0.8-0.9 2-0.9h15.9q0.8 0 1.5 0.4t0.9 1.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEraser;
}(React.Component));
IconEraser.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconEraser;
//# sourceMappingURL=IconEraser.js.map