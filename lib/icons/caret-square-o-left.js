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
var IconCaretSquareOLeft = (function (_super) {
    __extends(IconCaretSquareOLeft, _super);
    function IconCaretSquareOLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCaretSquareOLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--caret-square-o-left";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.9 12.9v14.2q0 0.6-0.5 1t-1 0.5q-0.4 0-0.8-0.3l-10-7.1q-0.6-0.5-0.6-1.2t0.6-1.2l10-7.1q0.4-0.3 0.8-0.3 0.6 0 1 0.5t0.5 1z m5.7 17.8v-21.4q0-0.3-0.2-0.5t-0.5-0.2h-21.5q-0.3 0-0.5 0.2t-0.2 0.5v21.4q0 0.3 0.2 0.5t0.5 0.2h21.5q0.2 0 0.5-0.2t0.2-0.5z m5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCaretSquareOLeft;
}(React.Component));
IconCaretSquareOLeft.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCaretSquareOLeft;
//# sourceMappingURL=caret-square-o-left.js.map