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
var IconMale = (function (_super) {
    __extends(IconMale, _super);
    function IconMale() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMale.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.4 15.7v9.3q0 0.9-0.7 1.5t-1.5 0.6-1.5-0.6-0.6-1.5v-7.9h-1.5v20.4q0 1-0.7 1.8t-1.8 0.7-1.7-0.7-0.8-1.8v-10.4h-1.4v10.4q0 1-0.7 1.8t-1.8 0.7-1.7-0.7-0.8-1.8v-20.4h-1.4v7.9q0 0.9-0.6 1.5t-1.6 0.6-1.5-0.6-0.6-1.5v-9.3q0-1.8 1.2-3t3.1-1.3h14.3q1.8 0 3 1.3t1.3 3z m-6.5-10q0 2.1-1.4 3.6t-3.6 1.4-3.5-1.4-1.5-3.6 1.5-3.5 3.5-1.5 3.6 1.5 1.4 3.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMale;
}(React.Component));
IconMale.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconMale;
//# sourceMappingURL=male.js.map