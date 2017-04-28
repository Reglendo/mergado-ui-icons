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
var IconHtml5 = (function (_super) {
    __extends(IconHtml5, _super);
    function IconHtml5() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHtml5.prototype.render = function () {
        var className = this.name + " " + this.name + "--html5";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.7 13.3l0.4-3.9h-19.8l1.1 11.9h13.7l-0.5 5.1-4.4 1.2-4.4-1.2-0.3-3.1h-3.9l0.5 6.2 8.1 2.2h0.1v0l8-2.2 1.1-12.1h-14.4l-0.3-4.1h15z m-25.2-10.4h31.4l-2.8 32.1-12.9 3.6-12.8-3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHtml5;
}(React.Component));
IconHtml5.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconHtml5;
//# sourceMappingURL=html5.js.map