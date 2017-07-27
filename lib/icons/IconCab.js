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
var IconCab = (function (_super) {
    __extends(IconCab, _super);
    function IconCab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCab.prototype.render = function () {
        var className = this.name + " " + this.name + "--cab " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.4 20q1.8 0 3.1 1.3t1.3 3v7.5q0 0.3-0.2 0.4t-0.5 0.2h-1.8v1.3q0 1.5-1.1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-19.9v1.3q0 1.5-1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3h-1.9q-0.3 0-0.4-0.2t-0.2-0.4v-7.5q0-1.8 1.3-3t3-1.3h0.6l2-8.1q0.5-1.9 2-3.1t3.5-1.2h2.5v-4.4q0-0.2 0.2-0.4t0.4-0.2h8.7q0.3 0 0.5 0.2t0.1 0.4v4.4h2.5q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5z m-29.2 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z m3.8-9.3h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.2h-14.9q-0.2 0-0.4 0.2t-0.3 0.4z m23.5 9.3q1.3 0 2.2-0.9t0.9-2.2-0.9-2.2-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCab;
}(React.Component));
IconCab.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconCab;
//# sourceMappingURL=IconCab.js.map