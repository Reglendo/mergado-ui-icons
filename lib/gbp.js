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
var IconGbp = (function (_super) {
    __extends(IconGbp, _super);
    function IconGbp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGbp.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.3 25.4v8.2q0 0.3-0.2 0.5t-0.5 0.2h-21.4q-0.3 0-0.5-0.2t-0.2-0.5v-3.4q0-0.3 0.2-0.5t0.5-0.2h2.2v-8.5h-2.1q-0.4 0-0.6-0.2t-0.2-0.6v-2.9q0-0.3 0.2-0.5t0.6-0.2h2.1v-5q0-3.8 2.7-6.3t7.1-2.4q4.1 0 7.4 2.7 0.2 0.2 0.3 0.5t-0.2 0.5l-2.3 2.8q-0.2 0.3-0.5 0.3-0.3 0.1-0.5-0.1-0.1-0.2-0.6-0.5t-1.5-0.7-2.1-0.4q-1.9 0-3.1 1.1t-1.1 2.7v4.8h6.8q0.3 0 0.5 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.5 0.3h-6.8v8.4h9.2v-4q0-0.3 0.2-0.5t0.5-0.2h3.7q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGbp;
}(React.Component));
IconGbp.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconGbp;
//# sourceMappingURL=gbp.js.map