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
var IconBuilding = (function (_super) {
    __extends(IconBuilding, _super);
    function IconBuilding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBuilding.prototype.render = function () {
        var className = this.name + " " + this.name + "--building " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.5 0q0.6 0 1 0.4t0.4 1v37.2q0 0.5-0.4 1t-1 0.4h-28.6q-0.6 0-1-0.4t-0.4-1v-37.2q0-0.6 0.4-1t1-0.4h28.6z m-18.6 6.4v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m0 5.7v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m0 5.8v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.6z m0 5.7v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m-2.8 7.1v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m11.4 28.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m0-11.4v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 22.8v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBuilding;
}(React.Component));
IconBuilding.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconBuilding;
//# sourceMappingURL=IconBuilding.js.map