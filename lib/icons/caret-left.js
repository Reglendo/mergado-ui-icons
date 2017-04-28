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
var IconCaretLeft = (function (_super) {
    __extends(IconCaretLeft, _super);
    function IconCaretLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCaretLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--caret-left";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.3 10v20q0 0.6-0.4 1t-1 0.4-1-0.4l-10-10q-0.5-0.4-0.5-1t0.5-1l10-10q0.4-0.4 1-0.4t1 0.4 0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCaretLeft;
}(React.Component));
IconCaretLeft.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCaretLeft;
//# sourceMappingURL=caret-left.js.map