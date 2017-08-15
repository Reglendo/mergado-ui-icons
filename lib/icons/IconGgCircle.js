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
var IconGgCircle = (function (_super) {
    __extends(IconGgCircle, _super);
    function IconGgCircle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGgCircle.prototype.render = function () {
        var className = this.name + " " + this.name + "--gg-circle " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16 30.2l6.1-6-6.3-6.3-1.9 2 4.2 4.3-2.1 2.1-6.2-6.2 6.2-6.2 0.9 0.9 1.9-2-2.8-2.8-10.1 10.1z m8-0.2l10.1-10.1-10.1-10.1-6.1 6 6.3 6.3 1.9-2-4.2-4.3 2.1-2.1 6.2 6.2-6.2 6.2-0.9-0.9-1.9 2z m16-10q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconGgCircle.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconGgCircle;
}(React.Component));
exports.default = IconGgCircle;
//# sourceMappingURL=IconGgCircle.js.map