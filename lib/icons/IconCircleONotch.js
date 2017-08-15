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
var IconCircleONotch = (function (_super) {
    __extends(IconCircleONotch, _super);
    function IconCircleONotch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCircleONotch.prototype.render = function () {
        var className = this.name + " " + this.name + "--circle-o-notch " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.3 20q0 3.9-1.5 7.5t-4.2 6.1-6.1 4.2-7.5 1.5-7.5-1.5-6.2-4.2-4.1-6.1-1.5-7.5q0-4.8 2.2-8.9t5.9-6.8 8.3-3.4v5.1q-4.9 1-8.1 4.9t-3.3 9.1q0 2.9 1.1 5.5t3.1 4.6 4.6 3 5.5 1.2 5.5-1.2 4.6-3 3-4.6 1.2-5.5q0-5.1-3.3-9.1t-8.1-4.9v-5.1q4.6 0.7 8.3 3.4t5.9 6.8 2.2 8.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCircleONotch.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCircleONotch;
}(React.Component));
exports.default = IconCircleONotch;
//# sourceMappingURL=IconCircleONotch.js.map