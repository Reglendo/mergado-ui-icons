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
var IconBuysellads = (function (_super) {
    __extends(IconBuysellads, _super);
    function IconBuysellads() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBuysellads.prototype.render = function () {
        var className = this.name + " " + this.name + "--buysellads " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.4 24.2h-6.5l3.2-12.3z m1.9 7.2h7l-7.2-22.8h-9.9l-7.2 22.8h6.9l8.6-7z m12-22.1v21.4q0 2.6-1.9 4.5t-4.5 1.9h-21.5q-2.6 0-4.5-1.9t-1.9-4.5v-21.4q0-2.6 1.9-4.5t4.5-1.9h21.5q2.6 0 4.5 1.9t1.9 4.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBuysellads;
}(React.Component));
IconBuysellads.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBuysellads;
//# sourceMappingURL=IconBuysellads.js.map