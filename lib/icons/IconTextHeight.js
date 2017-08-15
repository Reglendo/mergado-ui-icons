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
var IconTextHeight = (function (_super) {
    __extends(IconTextHeight, _super);
    function IconTextHeight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTextHeight.prototype.render = function () {
        var className = this.name + " " + this.name + "--text-height " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.9 31.4q0.8 0 1 0.4t-0.3 1l-2.8 3.7q-0.4 0.5-1.1 0.5t-1.1-0.5l-2.8-3.7q-0.4-0.5-0.2-1t0.9-0.4h1.8v-22.8h-1.8q-0.7 0-0.9-0.4t0.2-1l2.8-3.7q0.5-0.5 1.1-0.5t1.1 0.5l2.8 3.7q0.5 0.5 0.3 1t-1 0.4h-1.8v22.8h1.8z m-37.1-28.5l1.2 0.6q0.3 0.1 4.7 0.1 1 0 3-0.1t2.9 0q0.8 0 2.4 0t2.4 0h6.6q0.1 0 0.4 0t0.5 0 0.3 0 0.4-0.2 0.4-0.4l0.9 0q0.1 0 0.3 0t0.3 0q0.1 2.5 0.1 7.5 0 1.8-0.1 2.4-0.9 0.3-1.6 0.4-0.5-1-1.2-2.8 0-0.2-0.2-1.1t-0.3-1.7-0.2-0.7q-0.1-0.2-0.3-0.3t-0.3-0.2-0.3 0-0.4 0-0.4 0q-0.4 0-1.5 0t-1.6 0-1.4 0-1.6 0.1q-0.2 1.8-0.2 3.1 0 2.1 0 8.6t0.1 10.2q0 0.4-0.1 1.6t0 2 0.3 1.6q0.9 0.4 2.8 0.9t2.6 0.9q0.2 0.8 0.2 1.1 0 0.3-0.1 0.6l-0.8 0q-1.7 0.1-4.8-0.1t-4.7-0.3q-1.1 0-3.3 0.2t-3.4 0.2q-0.1-1.1-0.1-1.1v-0.2q0.4-0.6 1.4-1t2.2-0.6 1.7-0.6q0.5-1 0.5-8.6 0-2.2-0.1-6.7t-0.1-6.8v-2.6q0-0.1 0-0.4t0-0.5 0-0.6-0.1-0.5-0.1-0.3q-0.2-0.3-3.6-0.3-0.7 0-2.1 0.3t-1.7 0.5q-0.5 0.3-0.8 1.7t-0.7 2.4-0.9 1.2q-1-0.6-1.3-1v-8.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconTextHeight.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconTextHeight;
}(React.Component));
exports.default = IconTextHeight;
//# sourceMappingURL=IconTextHeight.js.map