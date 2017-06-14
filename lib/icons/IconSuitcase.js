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
var IconSuitcase = (function (_super) {
    __extends(IconSuitcase, _super);
    function IconSuitcase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSuitcase.prototype.render = function () {
        var className = this.name + " " + this.name + "--suitcase " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.3 8.6h11.4v-2.9h-11.4v2.9z m-7.9 0v28.5h-1.4q-2.1 0-3.5-1.4t-1.5-3.6v-18.5q0-2.1 1.5-3.6t3.5-1.4h1.4z m25 0v28.5h-22.8v-28.5h2.8v-3.6q0-0.9 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h2.8z m8.6 5v18.5q0 2.1-1.5 3.6t-3.5 1.4h-1.4v-28.5h1.4q2.1 0 3.5 1.4t1.5 3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSuitcase;
}(React.Component));
IconSuitcase.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconSuitcase;
//# sourceMappingURL=IconSuitcase.js.map