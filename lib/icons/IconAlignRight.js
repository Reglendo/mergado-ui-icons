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
var IconAlignRight = (function (_super) {
    __extends(IconAlignRight, _super);
    function IconAlignRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAlignRight.prototype.render = function () {
        var className = this.name + " " + this.name + "--align-right " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 30v2.9q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-8.6v2.9q0 0.6-0.4 1t-1 0.4h-28.6q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h28.6q0.6 0 1 0.4t0.4 1z m0-8.5v2.8q0 0.6-0.4 1t-1 0.4h-34.3q-0.6 0-1-0.4t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h34.3q0.6 0 1 0.5t0.4 1z m0-8.6v2.8q0 0.6-0.4 1t-1 0.5h-25.7q-0.6 0-1-0.5t-0.5-1v-2.8q0-0.6 0.5-1t1-0.4h25.7q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAlignRight;
}(React.Component));
IconAlignRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconAlignRight;
//# sourceMappingURL=IconAlignRight.js.map