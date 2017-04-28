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
var IconIoxhost = (function (_super) {
    __extends(IconIoxhost, _super);
    function IconIoxhost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconIoxhost.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.4 18.8q0 0.6-0.5 1.1t-1.2 0.5h-13.6q-0.7 0-1.2-0.5t-0.5-1.1 0.5-1.2 1.2-0.5h13.6q0.7 0 1.2 0.5t0.5 1.2z m4.2 0q0-1.7-0.5-3.3h-19.1q-0.7 0-1.1-0.5t-0.5-1.2q0-0.7 0.5-1.2t1.1-0.5h17.7q-1.7-2.7-4.6-4.4t-6.2-1.6q-3.4 0-6.4 1.7t-4.6 4.6-1.7 6.4q0 1.6 0.5 3.3h19q0.7 0 1.2 0.4t0.5 1.2q0 0.7-0.5 1.2t-1.2 0.5h-17.6q1.7 2.8 4.6 4.4t6.2 1.6q2.6 0 4.9-1t4-2.7 2.7-4 1-4.9z m7.2-5q0 0.7-0.5 1.2t-1.2 0.5h-2.6q0.4 1.6 0.4 3.3 0 3.2-1.3 6.2t-3.4 5.1-5.1 3.4-6.2 1.3q-4.8 0-8.7-2.6t-5.9-6.8h-3.6q-0.7 0-1.2-0.5t-0.5-1.2q0-0.7 0.5-1.2t1.2-0.4h2.5q-0.3-1.7-0.3-3.3 0-3.3 1.3-6.2t3.4-5.1 5.1-3.5 6.2-1.2q4.7 0 8.7 2.5t5.8 6.8h3.7q0.7 0 1.2 0.5t0.4 1.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconIoxhost;
}(React.Component));
IconIoxhost.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconIoxhost;
//# sourceMappingURL=ioxhost.js.map