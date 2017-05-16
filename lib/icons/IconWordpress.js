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
var IconWordpress = (function (_super) {
    __extends(IconWordpress, _super);
    function IconWordpress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWordpress.prototype.render = function () {
        var className = this.name + " " + this.name + "--wordpress";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m2.8 20q0-3.6 1.5-7l8.2 22.4q-4.4-2.1-7-6.2t-2.7-9.2z m28.8-0.9q0 0.5-0.1 0.9t-0.2 1.1-0.3 1-0.3 1.3-0.4 1.3l-1.7 5.7-6.2-18.4q1-0.1 1.9-0.2 0.5-0.1 0.6-0.4t0-0.7-0.7-0.3l-4.6 0.2q-1.6 0-4.5-0.2-0.2 0-0.4 0.1t-0.3 0.3 0 0.4 0.2 0.4 0.4 0.2l1.8 0.2 2.7 7.3-3.8 11.2-6.2-18.5q1-0.1 2-0.2 0.4-0.1 0.5-0.4t0-0.7-0.7-0.3l-4.5 0.2q-0.2 0-0.6 0t-0.5 0q2.3-3.6 6.1-5.7t8.2-2.1q3.3 0 6.3 1.2t5.3 3.3h-0.2q-1.3 0-2.1 0.9t-0.8 2.2q0 0.2 0 0.5t0.1 0.5 0.2 0.5 0.2 0.5 0.3 0.5 0.2 0.4 0.4 0.6 0.3 0.5q1.4 2.4 1.4 4.7z m-11.3 2.4l5.3 14.4q0 0.2 0.1 0.3-2.8 1-5.7 1-2.5 0-4.8-0.7z m14.7-9.7q2.2 3.8 2.2 8.2 0 4.7-2.4 8.6t-6.2 6.2l5.3-15.1q1.3-3.8 1.3-6.2 0-0.9-0.2-1.7z m-15-11.8q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m0 39.1q3.9 0 7.4-1.5t6.1-4.1 4.1-6.1 1.5-7.4-1.5-7.4-4.1-6.1-6.1-4.1-7.4-1.5-7.4 1.5-6.1 4.1-4.1 6.1-1.5 7.4 1.5 7.4 4.1 6.1 6.1 4.1 7.4 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWordpress;
}(React.Component));
IconWordpress.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconWordpress;
//# sourceMappingURL=IconWordpress.js.map