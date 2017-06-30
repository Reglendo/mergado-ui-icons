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
var IconMicrophone = (function (_super) {
    __extends(IconMicrophone, _super);
    function IconMicrophone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMicrophone.prototype.render = function () {
        var className = this.name + " " + this.name + "--microphone " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.7 15.7v2.9q0 4.9-3.3 8.6t-8.1 4.1v3h5.7q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-14.3q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.4h5.7v-3q-4.8-0.5-8.1-4.1t-3.3-8.6v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v2.9q0 4.1 2.9 7t7.1 3 7-3 3-7v-2.9q0-0.6 0.4-1t1-0.4 1 0.4 0.4 1z m-5.7-8.6v11.5q0 2.9-2.1 5t-5 2.1-5.1-2.1-2.1-5v-11.5q0-2.9 2.1-5t5.1-2.1 5 2.1 2.1 5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMicrophone;
}(React.Component));
IconMicrophone.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconMicrophone;
//# sourceMappingURL=IconMicrophone.js.map