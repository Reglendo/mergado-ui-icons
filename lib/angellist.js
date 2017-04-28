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
var IconAngellist = (function (_super) {
    __extends(IconAngellist, _super);
    function IconAngellist() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAngellist.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.8 8.4l-2.6 7.4 2.6 0.4q3.7-10 3.7-11.5 0-1.3-0.8-1.3-1.3 0-2.9 5z m-6.7 15.4l0.7 1.9q0.9-0.9 1.6-1.5l-0.7-0.1-0.9-0.1-0.7-0.2z m-6.5-20q0 2.2 3.5 11.6 0.4-0.2 1.1-0.2 0.4 0 1.7 0.1l-2.7-7.8q-1.7-5-2.8-5-0.4 0-0.6 0.4t-0.2 0.9z m-1.8 16.9q0 0.8 1.2 2.7t2.6 3.4 2.2 1.5q0.3 0 0.6-0.2t0.2-0.6q0-0.6-0.7-2.3-0.3-0.7-0.7-1.6t-1-2-1.4-1.8-1.4-0.7q-0.4 0-1 0.6t-0.6 1z m-3.5 7.5q0 0.9 0.5 2.3 1.4 3.3 4.1 5.1t6.3 1.8q5.1 0 8.6-3.8 3.3-3.8 3.3-9.5 0-1 0-1.5t-0.2-1.4-0.7-1.2q-1.3-1.1-4.7-1.7t-6.1-0.6q-0.8 0-1.1 0.2-0.2 0.1-0.2 0.8 0 0.8 0.4 1.3t1.3 0.9 1.7 0.6 2 0.2 1.9 0.1 1.5 0h0.5q0.6 0 0.9 0.4 0.4 0.5 0.5 1.3-0.7 0.6-2.2 1.2-1.3 0.5-2.1 1-1.4 1-2.4 2.5t-1 3.1q0 0.7 0.4 2t0.4 1.9l0 0.3q-0.1 0.3-0.1 0.3-3.1-0.2-3.3-4.8-0.1 0-0.9 0 0.1 0.2 0.1 0.5 0 1.2-0.9 2t-2.1 0.8q-1.9 0-3.8-1.7t-1.9-3.6q0-0.7 0.8-1.5 1.1 1.5 1.3 1.7 1.7 2.3 3 2.3 0.3 0 0.6-0.2t0.3-0.4q0-0.8-1.9-3.2t-2.6-2.5q-1 0-1.6 1t-0.6 2z m-2.6 0.2q0-2.3 1-3.6t3-2q-0.6-1.7-0.6-2.3 0-1.4 1.4-2.8t2.7-1.3q0.6 0 1.6 0.3-3.7-10.3-3.7-12.7 0-1.7 0.9-2.9t2.7-1.1q2.9 0 7.3 13 0.1 0.4 0.1 0.5 0.2-0.4 0.7-1.8t0.9-2.6 1.3-2.9 1.4-2.7 1.6-2 1.7-0.8q1.6 0 2.5 1.1t0.9 2.8q0 2.4-3.6 12.2 1.4 0.4 2.3 1.1t1.3 1.7 0.6 2.1 0.1 2.5q0 3.3-1 6.2t-3 5-4.7 3.4-6.2 1.2q-2.5 0-5-0.9-3.3-1.3-5.7-4.3t-2.5-6.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAngellist;
}(React.Component));
IconAngellist.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconAngellist;
//# sourceMappingURL=angellist.js.map