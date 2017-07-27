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
var IconMercury = (function (_super) {
    __extends(IconMercury, _super);
    function IconMercury() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMercury.prototype.render = function () {
        var className = this.name + " " + this.name + "--mercury " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.5 7.1q3.3 1.6 5.2 4.7t2 6.8q0 4.9-3.3 8.6t-8.1 4.1v3h2.1q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.5 0.2h-2.1v2.2q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.2h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h2.1v-3q-4.8-0.5-8.1-4.1t-3.3-8.6q0-3.8 2-6.8t5.2-4.7q-3.7-2.2-5.1-6.1-0.1-0.4 0.1-0.7t0.6-0.3h1.5q0.5 0 0.7 0.4 0.9 2.4 3.1 3.9t4.8 1.4 4.7-1.4 3.2-3.9q0.1-0.4 0.8-0.4h1.3q0.4 0 0.6 0.3t0.1 0.7q-1.4 3.9-5.1 6.1z m-5.6 21.5q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMercury;
}(React.Component));
IconMercury.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconMercury;
//# sourceMappingURL=IconMercury.js.map