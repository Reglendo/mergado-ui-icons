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
var IconArrowCircleODown = (function (_super) {
    __extends(IconArrowCircleODown, _super);
    function IconArrowCircleODown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowCircleODown.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrow-circle-o-down";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28 20.7q0 0.3-0.2 0.6l-7.1 7.1q-0.3 0.2-0.6 0.2t-0.5-0.2l-7.1-7.2q-0.3-0.3-0.2-0.8 0.2-0.4 0.7-0.4h4.3v-7.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v7.9h4.3q0.3 0 0.5 0.2t0.2 0.5z m-7.9-12.8q-3.3 0-6.1 1.6t-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6z m17.2 12.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconArrowCircleODown;
}(React.Component));
IconArrowCircleODown.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconArrowCircleODown;
//# sourceMappingURL=arrow-circle-o-down.js.map