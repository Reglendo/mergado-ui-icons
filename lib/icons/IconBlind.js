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
var IconBlind = (function (_super) {
    __extends(IconBlind, _super);
    function IconBlind() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBlind.prototype.render = function () {
        var className = this.name + " " + this.name + "--blind " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.7 6.9q-1.5 0-2.5-1t-1-2.4q0-1.5 1-2.5t2.5-1 2.4 1 1 2.5q0 1.4-1 2.4t-2.4 1z m12.3 14.4q0 1.1-0.7 1.5t-1.4 0.1-1.1-0.7l-8.2-9.8q-0.1-0.3-0.3-0.4t-0.2 0l-0.1 0.1q-0.2 0.2 0.1 0.4l2.7 3.1 0 8-3.6 10.2q-1.5 4.2-2 5.2-0.4 0.6-0.6 0.7-1.2 0.6-2.3 0-0.7-0.3-1-0.9t-0.2-1.3q0.1-0.4 4.4-13.8l0.1-9.3-1.9 3.7 0.8 4.9q0.1 0.6 0 1t-0.3 0.6-0.4 0.3-0.4 0.2l-0.2 0q-0.4 0.1-0.7 0t-0.6-0.4-0.3-0.5-0.2-0.4 0-0.2l-1-6.7 4.7-8.5q0.5-0.8 2.5-0.8 1.7 0 2.4 0.9l9.5 11.7q0.1 0.1 0.3 0.3l0 0.1 0 0q0.2 0.3 0.2 0.7z m-9 3.3q0.9 2.5 1.9 5t1.6 3.8l0.5 1.2q0.8 2.1 1 2.8 0.2 1.6-0.8 2.2-0.8 0.5-1.5 0.3t-1.1-0.5-0.7-0.7h0q-0.1-0.4-0.2-0.6l-2.8-7.8z m18.4 13.2q0.7 1.1 0.7 1.3 0 0.1-0.1 0.2-0.2 0.1-0.3 0t-0.4-0.6-0.3-0.7q-2.6-3.8-9.5-14.8 0.1 0.1 0.2 0t0.1-0.1l0.1 0q0.2-0.2 0.2-0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBlind;
}(React.Component));
IconBlind.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBlind;
//# sourceMappingURL=IconBlind.js.map