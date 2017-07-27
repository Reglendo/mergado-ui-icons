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
var IconRocket = (function (_super) {
    __extends(IconRocket, _super);
    function IconRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRocket.prototype.render = function () {
        var className = this.name + " " + this.name + "--rocket " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.1 10q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.6 1.5 0.6 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m5-6.4q0 5.5-1.6 9.6t-5.7 8q-1.8 1.8-4.4 4l-0.4 8.4q0 0.4-0.4 0.6l-8.5 5q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2l-1.4-1.4q-0.3-0.4-0.2-0.8l1.9-6.1-6.3-6.3-6.1 1.9q-0.1 0-0.2 0-0.4 0-0.6-0.2l-1.4-1.4q-0.4-0.4-0.1-0.9l5-8.5q0.2-0.4 0.6-0.4l8.4-0.4q2.2-2.6 4-4.4 4.2-4.2 8-5.8t9.6-1.5q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRocket;
}(React.Component));
IconRocket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconRocket;
//# sourceMappingURL=IconRocket.js.map