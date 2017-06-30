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
var IconChevronCircleRight = (function (_super) {
    __extends(IconChevronCircleRight, _super);
    function IconChevronCircleRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconChevronCircleRight.prototype.render = function () {
        var className = this.name + " " + this.name + "--chevron-circle-right " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19 31.1l10.1-10.1q0.5-0.4 0.5-1t-0.5-1l-10.1-10.1q-0.4-0.5-1-0.5t-1 0.5l-2.3 2.2q-0.4 0.5-0.4 1t0.4 1l6.9 6.9-6.9 6.9q-0.4 0.4-0.4 1t0.4 1l2.3 2.2q0.4 0.5 1 0.5t1-0.5z m18.3-11.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconChevronCircleRight;
}(React.Component));
IconChevronCircleRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconChevronCircleRight;
//# sourceMappingURL=IconChevronCircleRight.js.map