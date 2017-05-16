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
var IconFlask = (function (_super) {
    __extends(IconFlask, _super);
    function IconFlask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFlask.prototype.render = function () {
        var className = this.name + " " + this.name + "--flask";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.6 32.3q1.2 2 0.5 3.4t-3.2 1.4h-25.7q-2.4 0-3.1-1.4t0.5-3.4l11.2-17.7v-8.9h-1.4q-0.6 0-1-0.4t-0.5-1 0.5-1 1-0.4h11.4q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-1.4v8.9z m-17.4-16.2l-6.1 9.6h15.9l-6.1-9.6-0.4-0.7v-9.7h-2.9v9.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFlask;
}(React.Component));
IconFlask.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFlask;
//# sourceMappingURL=IconFlask.js.map