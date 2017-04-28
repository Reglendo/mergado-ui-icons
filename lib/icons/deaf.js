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
var IconDeaf = (function (_super) {
    __extends(IconDeaf, _super);
    function IconDeaf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDeaf.prototype.render = function () {
        var className = this.name + " " + this.name + "--deaf";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.6 18.6q0 0.5 0.4 1t1 0.4 1-0.4 0.4-1q0-3.3-2.3-5.6t-5.5-2.3-5.6 2.3-2.3 5.6q0 0.6 0.4 1t1 0.4 1-0.4 0.5-1q0-2.1 1.4-3.6t3.6-1.4 3.5 1.4 1.5 3.6z m-5-12.9q-2.6 0-4.9 1t-4.2 2.8-2.7 4.1-1 5q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1q0 1.2-0.4 2.3t-0.8 1.6-1.3 1.7q-0.8 0.8-1.2 1.4t-1 1.4-0.8 2.1-0.2 2.3q0 2.4-1.7 4.1t-4.1 1.6q-0.5 0-1 0.5t-0.4 1 0.4 1 1 0.4q3.6 0 6.1-2.5t2.5-6.1q0-0.9 0.2-1.6t0.6-1.5 0.7-1.1 1-1.2q0.8-0.9 1.2-1.4t1-1.5 0.8-2.1 0.3-2.4q0-2.6-1-5t-2.8-4.1-4.1-2.8-5-1z m-5.4 16.1l5 5-12.9 12.9q-0.3 0.3-0.6 0.3t-0.7-0.3l-3.7-3.7q-0.3-0.3-0.3-0.7t0.3-0.6z m22.8-21.5l3.7 3.7q0.3 0.3 0.3 0.7t-0.3 0.6l-5.2 5.2-0.5 0.6-1.6 1.6q-1.5-3.4-4.4-5.8l6.7-6.6q0.3-0.3 0.6-0.3t0.7 0.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDeaf;
}(React.Component));
IconDeaf.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDeaf;
//# sourceMappingURL=deaf.js.map