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
var IconBellSlashO = (function (_super) {
    __extends(IconBellSlashO, _super);
    function IconBellSlashO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBellSlashO.prototype.render = function () {
        var className = this.name + " " + this.name + "--bell-slash-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.2 35.5q0-0.3-0.3-0.3-1.2 0-2-0.8t-0.8-2q0-0.3-0.3-0.3t-0.3 0.3q0 1.4 1 2.4t2.4 1q0.3 0 0.3-0.3z m-10.4-9.2l17-14.7q-0.8-1.8-2.6-2.9t-4.3-1.1q-1.8 0-3.3 0.6t-2.4 1.6-1.3 2-0.5 2q0 7.4-2.6 12.5z m26.2 3.6q0 1-0.7 1.8t-1.8 0.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5l2.9-2.5h14.7q-3.2-3.6-4.4-8.9l2.1-1.9q1.2 7 5.8 10.8z m1.7-27l1.6 1.9q0.2 0.2 0.2 0.4t-0.2 0.5l-36.4 31.5q-0.2 0.1-0.4 0.1t-0.4-0.2l-1.7-1.9q-0.1-0.2-0.1-0.4t0.2-0.5l3.6-3.1q-0.4-0.6-0.4-1.3 1-0.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 0.3-5q0-3 2.3-5.5t6-3.1q-0.2-0.3-0.2-0.7 0-0.8 0.6-1.4t1.3-0.5 1.3 0.6 0.5 1.3q0 0.4-0.1 0.7 2.4 0.4 4.2 1.6t2.9 3.1l8.1-7.1q0.2-0.1 0.5-0.1t0.4 0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBellSlashO;
}(React.Component));
IconBellSlashO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconBellSlashO;
//# sourceMappingURL=IconBellSlashO.js.map