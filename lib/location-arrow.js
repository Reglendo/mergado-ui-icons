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
var IconLocationArrow = (function (_super) {
    __extends(IconLocationArrow, _super);
    function IconLocationArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLocationArrow.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 7.8l-14.3 28.6q-0.4 0.7-1.3 0.7-0.1 0-0.3 0-0.5-0.1-0.8-0.5t-0.3-0.9v-12.8h-12.9q-0.5 0-0.9-0.3t-0.5-0.8 0.1-1 0.7-0.6l28.6-14.3q0.2-0.2 0.6-0.2 0.6 0 1 0.4 0.3 0.4 0.4 0.8t-0.1 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLocationArrow;
}(React.Component));
IconLocationArrow.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconLocationArrow;
//# sourceMappingURL=location-arrow.js.map