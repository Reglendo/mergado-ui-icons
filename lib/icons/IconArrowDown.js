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
var IconArrowDown = (function (_super) {
    __extends(IconArrowDown, _super);
    function IconArrowDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArrowDown.prototype.render = function () {
        var className = this.name + " " + this.name + "--arrow-down " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconArrowDown;
}(React.Component));
IconArrowDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map