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
var IconTasks = (function (_super) {
    __extends(IconTasks, _super);
    function IconTasks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTasks.prototype.render = function () {
        var className = this.name + " " + this.name + "--tasks " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.9 31.4h14.2v-2.8h-14.2v2.8z m-8.6-11.4h22.8v-2.9h-22.8v2.9z m14.3-11.4h8.5v-2.9h-8.5v2.9z m11.4 18.5v5.8q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-11.4v5.7q0 0.6-0.4 1t-1 0.5h-37.2q-0.6 0-1-0.5t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m0-11.4v5.7q0 0.6-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTasks;
}(React.Component));
IconTasks.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconTasks;
//# sourceMappingURL=IconTasks.js.map