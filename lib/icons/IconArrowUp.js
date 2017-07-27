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
var IconArrowUp = (function (_super) {
    __extends(IconArrowUp, _super);
    function IconArrowUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowUp.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrow-up " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.5 21.7q0 1.1-0.9 2l-1.6 1.7q-0.9 0.8-2.1 0.8-1.2 0-2-0.8l-6.5-6.6v15.7q0 1.2-0.9 1.9t-2 0.7h-2.9q-1.1 0-2-0.7t-0.8-1.9v-15.7l-6.6 6.6q-0.8 0.8-2 0.8t-2-0.8l-1.7-1.7q-0.8-0.9-0.8-2 0-1.2 0.8-2.1l14.6-14.5q0.7-0.8 2-0.8 1.2 0 2 0.8l14.5 14.5q0.9 0.9 0.9 2.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconArrowUp;
}(React.Component));
IconArrowUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconArrowUp;
//# sourceMappingURL=IconArrowUp.js.map