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
var IconSliders = (function (_super) {
    __extends(IconSliders, _super);
    function IconSliders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSliders.prototype.render = function () {
        var className = this.name + " " + this.name + "--sliders " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m10.9 31.4v2.9h-7.9v-2.9h7.9z m7.8-2.8q0.6 0 1 0.4t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h5.7z m3.6-8.6v2.9h-19.3v-2.9h19.3z m-14.3-11.4v2.8h-5v-2.8h5z m29.3 22.8v2.9h-16.4v-2.9h16.4z m-21.4-25.7q0.5 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4h-5.8q-0.5 0-1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1-0.4h5.8z m14.2 11.4q0.6 0 1 0.5t0.5 1v5.7q0 0.6-0.5 1t-1 0.4h-5.7q-0.5 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.5h5.7z m7.2 2.9v2.9h-5v-2.9h5z m0-11.4v2.8h-19.3v-2.8h19.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSliders.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSliders;
}(React.Component));
exports.default = IconSliders;
//# sourceMappingURL=IconSliders.js.map