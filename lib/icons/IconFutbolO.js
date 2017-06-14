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
var IconFutbolO = (function (_super) {
    __extends(IconFutbolO, _super);
    function IconFutbolO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFutbolO.prototype.render = function () {
        var className = this.name + " " + this.name + "--futbol-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.6 18.2l6.4-4.6 6.4 4.6-2.4 7.5h-7.9z m6.4-18.2q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m13.8 30.1q3.3-4.5 3.3-10.1v-0.1l-2.2 2-5.4-5 1.4-7.2 3 0.3q-3.3-4.6-8.7-6.3l1.2 2.8-6.4 3.5-6.4-3.5 1.2-2.8q-5.4 1.7-8.7 6.3l3-0.3 1.4 7.2-5.4 5-2.2-2v0.1q0 5.6 3.3 10.1l0.7-2.9 7.2 0.9 3.1 6.6-2.6 1.6q2.7 0.8 5.4 0.8t5.4-0.8l-2.6-1.6 3.1-6.6 7.3-0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFutbolO;
}(React.Component));
IconFutbolO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconFutbolO;
//# sourceMappingURL=IconFutbolO.js.map