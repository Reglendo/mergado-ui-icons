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
var IconPercent = (function (_super) {
    __extends(IconPercent, _super);
    function IconPercent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPercent.prototype.render = function () {
        var className = this.name + " " + this.name + "--percent " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 28.6q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.8 2-0.8 0.9-2z m-17.2-17.2q0-1.1-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m22.9 17.2q0 3.5-2.5 6t-6.1 2.5-6-2.5-2.6-6 2.6-6.1 6-2.5 6.1 2.5 2.5 6.1z m-2.2-24.3q0 0.4-0.2 0.8l-23.6 31.5q-0.4 0.5-1.2 0.5h-3.5q-0.6 0-1-0.4t-0.5-1q0-0.4 0.3-0.8l23.6-31.5q0.4-0.5 1.1-0.5h3.6q0.6 0 1 0.4t0.4 1z m-15 7.1q0 3.6-2.5 6.1t-6 2.5-6.1-2.5-2.5-6.1 2.5-6 6.1-2.5 6 2.5 2.5 6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPercent;
}(React.Component));
IconPercent.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconPercent;
//# sourceMappingURL=IconPercent.js.map