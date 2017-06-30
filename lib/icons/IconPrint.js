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
var IconPrint = (function (_super) {
    __extends(IconPrint, _super);
    function IconPrint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPrint.prototype.render = function () {
        var className = this.name + " " + this.name + "--print " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m10.1 34.3h20v-5.7h-20v5.7z m0-14.3h20v-8.6h-3.6q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-14.3v14.3z m25.7 1.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m2.8 0v9.3q0 0.3-0.2 0.5t-0.5 0.2h-5v3.6q0 0.9-0.6 1.5t-1.5 0.6h-21.4q-0.9 0-1.6-0.6t-0.6-1.5v-3.6h-5q-0.3 0-0.5-0.2t-0.2-0.5v-9.3q0-1.7 1.3-3t3-1.3h1.4v-12.1q0-0.9 0.6-1.5t1.6-0.6h15q0.9 0 1.9 0.4t1.7 1.1l3.4 3.4q0.6 0.6 1.1 1.7t0.4 1.9v5.7h1.5q1.7 0 3 1.3t1.2 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPrint;
}(React.Component));
IconPrint.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconPrint;
//# sourceMappingURL=IconPrint.js.map