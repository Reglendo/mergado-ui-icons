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
var IconArrowLeft = (function (_super) {
    __extends(IconArrowLeft, _super);
    function IconArrowLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrow-left " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.3 20v2.9q0 1.1-0.7 2t-1.9 0.8h-15.7l6.5 6.6q0.9 0.8 0.9 2t-0.9 2l-1.7 1.7q-0.8 0.8-2 0.8-1.1 0-2-0.8l-14.5-14.6q-0.9-0.8-0.9-2 0-1.1 0.9-2l14.5-14.5q0.8-0.9 2-0.9 1.2 0 2 0.9l1.7 1.6q0.9 0.9 0.9 2.1t-0.9 2l-6.5 6.5h15.7q1.1 0 1.9 0.9t0.7 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconArrowLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconArrowLeft;
}(React.Component));
exports.default = IconArrowLeft;
//# sourceMappingURL=IconArrowLeft.js.map