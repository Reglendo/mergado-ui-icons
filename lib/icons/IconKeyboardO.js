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
var IconKeyboardO = (function (_super) {
    __extends(IconKeyboardO, _super);
    function IconKeyboardO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconKeyboardO.prototype.render = function () {
        var className = this.name + " " + this.name + "--keyboard-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8 25.6v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m2.6-5.3v2q0 0.4-0.3 0.4h-4.7q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h4.7q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.4 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m21.2 10.6v2q0 0.4-0.3 0.4h-17.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h17.9q0.3 0 0.3 0.3z m-13.3-5.3v2q0 0.4-0.3 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m-2.6-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-2.7-5.3v2q0 0.3-0.3 0.3h-2q-0.4 0-0.4-0.3v-2q0-0.3 0.4-0.3h2q0.3 0 0.3 0.3z m8 5.3v2q0 0.4-0.4 0.4h-1.9q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h1.9q0.4 0 0.4 0.3z m8 5.3v2q0 0.4-0.4 0.4h-2q-0.3 0-0.3-0.4v-2q0-0.3 0.3-0.3h2q0.4 0 0.4 0.3z m-10.7-10.6v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.3 0v2q0 0.3-0.3 0.3h-2q-0.3 0-0.3-0.3v-2q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m5.4 0v7.3q0 0.4-0.4 0.4h-4.6q-0.4 0-0.4-0.4v-2q0-0.3 0.4-0.3h2.3v-5q0-0.3 0.3-0.3h2q0.3 0 0.3 0.3z m2.6 15.6v-18.6h-34.5v18.6h34.5z m2.7-18.6v18.6q0 1.1-0.8 1.9t-1.9 0.8h-34.5q-1.1 0-1.9-0.8t-0.8-1.9v-18.6q0-1.1 0.8-1.9t1.9-0.7h34.5q1.1 0 1.9 0.7t0.8 1.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconKeyboardO;
}(React.Component));
IconKeyboardO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconKeyboardO;
//# sourceMappingURL=IconKeyboardO.js.map