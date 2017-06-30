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
var IconFilter = (function (_super) {
    __extends(IconFilter, _super);
    function IconFilter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFilter.prototype.render = function () {
        var className = this.name + " " + this.name + "--filter " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 6.6q0.4 0.9-0.3 1.5l-11 11.1v16.5q0 1-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4l-5.7-5.7q-0.5-0.4-0.5-1v-10.8l-11-11q-0.7-0.7-0.3-1.6 0.4-0.9 1.3-0.9h28.6q0.9 0 1.3 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFilter;
}(React.Component));
IconFilter.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconFilter;
//# sourceMappingURL=IconFilter.js.map