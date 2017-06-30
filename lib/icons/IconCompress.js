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
var IconCompress = (function (_super) {
    __extends(IconCompress, _super);
    function IconCompress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCompress.prototype.render = function () {
        var className = this.name + " " + this.name + "--compress " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 21.4v10q0 0.6-0.4 1t-1 0.5-1-0.5l-3.2-3.2-7.4 7.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-2.6-2.5q-0.2-0.2-0.2-0.5t0.2-0.5l7.4-7.5-3.2-3.2q-0.4-0.4-0.4-1t0.4-1 1-0.4h10q0.6 0 1 0.4t0.4 1z m16.9-15q0 0.3-0.2 0.5l-7.4 7.5 3.2 3.2q0.4 0.4 0.4 1t-0.4 1-1 0.4h-10q-0.6 0-1-0.4t-0.5-1v-10q0-0.6 0.5-1t1-0.5 1 0.5l3.2 3.2 7.4-7.4q0.2-0.3 0.5-0.3t0.5 0.3l2.6 2.5q0.2 0.2 0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCompress;
}(React.Component));
IconCompress.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconCompress;
//# sourceMappingURL=IconCompress.js.map