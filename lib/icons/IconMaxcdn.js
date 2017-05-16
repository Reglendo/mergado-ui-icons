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
var IconMaxcdn = (function (_super) {
    __extends(IconMaxcdn, _super);
    function IconMaxcdn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMaxcdn.prototype.render = function () {
        var className = this.name + " " + this.name + "--maxcdn";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.5 17.3l-3.7 17h-7.5l4-18.6q0.3-1.2-0.3-1.9-0.6-0.8-1.9-0.8h-3.8l-4.5 21.3h-7.5l4.6-21.3h-6.4l-4.5 21.3h-7.5l4.6-21.3-3.5-7.3h28.5q2.3 0 4.2 0.9t3.3 2.6q1.4 1.6 1.9 3.7t0 4.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMaxcdn;
}(React.Component));
IconMaxcdn.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMaxcdn;
//# sourceMappingURL=IconMaxcdn.js.map