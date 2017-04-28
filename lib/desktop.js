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
var IconDesktop = (function (_super) {
    __extends(IconDesktop, _super);
    function IconDesktop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDesktop.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.2 22v-17.3q0-0.3-0.2-0.4t-0.5-0.2h-33.2q-0.2 0-0.4 0.2t-0.2 0.4v17.3q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5z m2.7-17.3v22.6q0 1.4-1 2.4t-2.4 0.9h-11.3q0 0.8 0.4 1.6t0.6 1.5 0.4 0.9q0 0.6-0.4 1t-1 0.3h-10.6q-0.5 0-0.9-0.3t-0.4-1q0-0.3 0.3-0.9t0.7-1.5 0.3-1.6h-11.3q-1.3 0-2.3-0.9t-1-2.4v-22.6q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDesktop;
}(React.Component));
IconDesktop.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconDesktop;
//# sourceMappingURL=desktop.js.map