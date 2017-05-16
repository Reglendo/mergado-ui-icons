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
var IconPiedPiper = (function (_super) {
    __extends(IconPiedPiper, _super);
    function IconPiedPiper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPiedPiper.prototype.render = function () {
        var className = this.name + " " + this.name + "--pied-piper";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.3 22.8q0 1.4-0.8 2.4t-2 1q-1 0-1.6-0.3v-6.2q0.6-0.4 1.6-0.4 1.2 0 2 1t0.8 2.5z m-7.6-9.6q0 1.4-0.9 2.5t-2 1q-0.9 0-1.5-0.4v-6.1q0.6-0.4 1.5-0.4 1.2 0 2 1t0.9 2.4z m12.5 9.6q0-3-1.9-5.1t-4.8-2.1q-0.4 0-0.9 0.1-0.5 1.7-1.7 3-1.9 2.1-4.7 2.3v14.2l4.7-1v-4.6q1.1 0.5 2.6 0.5 2.8 0 4.8-2.2t1.9-5.1z m-7.6-9.5q0-3-2-5.1t-4.8-2.1q-1.6 0-3.1 0.8h-4.2v18.7l4.8-0.9v-4.6q1.2 0.4 2.5 0.4 2.8 0 4.8-2.1t2-5.1z m13.7-4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPiedPiper;
}(React.Component));
IconPiedPiper.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconPiedPiper;
//# sourceMappingURL=IconPiedPiper.js.map