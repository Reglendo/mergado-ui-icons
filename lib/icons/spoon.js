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
var IconSpoon = (function (_super) {
    __extends(IconSpoon, _super);
    function IconSpoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSpoon.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 0.6-0.4 1t-1 0.4h-4.3q-0.6 0-1-0.4t-0.3-1l1-18.4q-2.1-0.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4 3.6-1.8 3.5 1.8 2.7 4.4 0.9 5.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSpoon;
}(React.Component));
IconSpoon.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconSpoon;
//# sourceMappingURL=spoon.js.map