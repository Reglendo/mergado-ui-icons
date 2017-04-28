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
var IconDeviantart = (function (_super) {
    __extends(IconDeviantart, _super);
    function IconDeviantart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDeviantart.prototype.render = function () {
        var className = this.name + " " + this.name + "--deviantart";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.4 6.8l-6.8 13 0.5 0.6h6.3v9.3h-11.4l-0.9 0.7-3.2 6.1-0.7 0.6h-6.7v-6.7l6.8-13-0.6-0.7h-6.2v-9.3h11.3l1-0.6 3.2-6.1 0.6-0.7h6.8v6.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDeviantart;
}(React.Component));
IconDeviantart.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDeviantart;
//# sourceMappingURL=deviantart.js.map