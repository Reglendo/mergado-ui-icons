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
var IconGenderless = (function (_super) {
    __extends(IconGenderless, _super);
    function IconGenderless() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGenderless.prototype.render = function () {
        var className = this.name + " " + this.name + "--genderless " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.9 21.4q0-4.1-3-7t-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9 7-2.9 3-7.1z m2.8 0q0 2.6-1 5t-2.7 4.1-4.2 2.8-4.9 1-5-1-4.1-2.8-2.8-4.1-1-5 1-5 2.8-4.1 4.1-2.7 5-1 4.9 1 4.2 2.7 2.7 4.1 1 5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGenderless;
}(React.Component));
IconGenderless.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconGenderless;
//# sourceMappingURL=IconGenderless.js.map