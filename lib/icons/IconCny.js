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
var IconCny = (function (_super) {
    __extends(IconCny, _super);
    function IconCny() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCny.prototype.render = function () {
        var className = this.name + " " + this.name + "--cny " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22 34.3h-3.9q-0.3 0-0.5-0.2t-0.2-0.5v-7.4h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h6.4v-1.9h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.4q0-0.2 0.2-0.5t0.5-0.2h4.8l-7.2-12.9q-0.2-0.3 0-0.7 0.2-0.3 0.6-0.3h4.3q0.5 0 0.7 0.4l4.8 9.4q0.4 0.9 1.2 2.8 0.3-0.5 0.7-1.5t0.6-1.3l4.3-9.4q0.2-0.4 0.6-0.4h4.3q0.4 0 0.6 0.3 0.2 0.3 0 0.7l-7 12.9h4.8q0.3 0 0.5 0.2t0.3 0.5v2.4q0 0.3-0.3 0.5t-0.5 0.2h-6.4v1.9h6.4q0.3 0 0.5 0.2t0.3 0.5v2.3q0 0.3-0.3 0.5t-0.5 0.2h-6.4v7.4q0 0.3-0.2 0.5t-0.5 0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCny.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCny;
}(React.Component));
exports.default = IconCny;
//# sourceMappingURL=IconCny.js.map