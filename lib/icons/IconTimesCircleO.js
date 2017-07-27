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
var IconTimesCircleO = (function (_super) {
    __extends(IconTimesCircleO, _super);
    function IconTimesCircleO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTimesCircleO.prototype.render = function () {
        var className = this.name + " " + this.name + "--times-circle-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.5 24.1l-3.3 3.2q-0.2 0.3-0.5 0.3t-0.5-0.3l-3.1-3-3 3q-0.2 0.3-0.5 0.3t-0.5-0.3l-3.3-3.2q-0.2-0.2-0.2-0.5t0.2-0.5l3.1-3.1-3.1-3.1q-0.2-0.2-0.2-0.5t0.2-0.5l3.3-3.2q0.2-0.3 0.5-0.3t0.5 0.3l3 3 3.1-3q0.2-0.3 0.5-0.3t0.5 0.3l3.3 3.2q0.2 0.2 0.2 0.5t-0.2 0.5l-3.1 3.1 3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5z m4.8-4.1q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1z m5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTimesCircleO;
}(React.Component));
IconTimesCircleO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconTimesCircleO;
//# sourceMappingURL=IconTimesCircleO.js.map