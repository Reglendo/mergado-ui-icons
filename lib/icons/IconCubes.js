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
var IconCubes = (function (_super) {
    __extends(IconCubes, _super);
    function IconCubes() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCubes.prototype.render = function () {
        var className = this.name + " " + this.name + "--cubes " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.7 33.4l7-3.5v-5.7l-7 3v6.2z m-1.2-8.3l7.4-3.1-7.4-3.2-7.4 3.2z m19.8 8.3l7-3.5v-5.7l-7 3v6.2z m-1.1-8.3l7.3-3.1-7.3-3.2-7.4 3.2z m-8.2-5.3l7-3v-4.9l-7 3v4.9z m-1.2-6.9l8.1-3.5-8.1-3.4-8 3.5z m19.8 9.4v7.6q0 0.7-0.3 1.2t-0.9 0.9l-8.2 4.1q-0.5 0.2-1 0.2t-1.1-0.2l-8.1-4.1q-0.1 0-0.2-0.1 0 0.1-0.1 0.1l-8.2 4.1q-0.4 0.2-1 0.2t-1-0.2l-8.2-4.1q-0.6-0.3-1-0.9t-0.3-1.2v-7.6q0-0.7 0.4-1.2t1-0.9l7.9-3.4v-7.3q0-0.7 0.4-1.3t1.1-0.8l8.1-3.5q0.4-0.2 0.9-0.2t0.9 0.2l8.2 3.5q0.6 0.2 1 0.8t0.4 1.3v7.3l7.9 3.4q0.7 0.3 1.1 0.9t0.4 1.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCubes;
}(React.Component));
IconCubes.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconCubes;
//# sourceMappingURL=IconCubes.js.map