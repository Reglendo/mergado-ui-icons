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
var IconPaperclip = (function (_super) {
    __extends(IconPaperclip, _super);
    function IconPaperclip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPaperclip.prototype.render = function () {
        var className = this.name + " " + this.name + "--paperclip " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3l-17.4-17.3q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6l13.5 13.5q0.3 0.2 0.3 0.5 0 0.3-0.7 1t-1.1 0.7q-0.2 0-0.5-0.2l-13.5-13.6q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-0.9t0.9-2.4q0-1.8-1.4-3.2l-13-13q-0.6-0.5-1.3-0.5-0.7 0-1.1 0.4t-0.4 1.1q0 0.7 0.6 1.3l9.1 9.1q0.2 0.3 0.2 0.5 0 0.4-0.7 1.1t-1 0.7q-0.3 0-0.5-0.3l-9.2-9.1q-1.4-1.4-1.4-3.3 0-1.9 1.3-3.1t3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconPaperclip.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconPaperclip;
}(React.Component));
exports.default = IconPaperclip;
//# sourceMappingURL=IconPaperclip.js.map