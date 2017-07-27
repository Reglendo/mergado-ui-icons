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
var IconCube = (function (_super) {
    __extends(IconCube, _super);
    function IconCube() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCube.prototype.render = function () {
        var className = this.name + " " + this.name + "--cube " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.5 36.4l14.3-7.8v-14.2l-14.3 5.2v16.8z m-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7z m18.5-5.7v17.2q0 0.8-0.4 1.4t-1.1 1.1l-15.7 8.5q-0.6 0.4-1.3 0.4t-1.4-0.4l-15.7-8.5q-0.7-0.4-1.1-1.1t-0.4-1.4v-17.2q0-0.9 0.5-1.6t1.4-1.1l15.7-5.7q0.5-0.1 1-0.1t1 0.1l15.7 5.8q0.8 0.3 1.3 1t0.5 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCube;
}(React.Component));
IconCube.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconCube;
//# sourceMappingURL=IconCube.js.map