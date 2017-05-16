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
var IconInstagram = (function (_super) {
    __extends(IconInstagram, _super);
    function IconInstagram() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconInstagram.prototype.render = function () {
        var className = this.name + " " + this.name + "--instagram";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.4 31.8v-14.4h-3q0.4 1.4 0.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5 0.5-2.9h-3.2v14.4q0 0.6 0.4 1t1 0.4h23.8q0.6 0 1-0.4t0.4-1z m-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8z m6.3-8v-3.7q0-0.6-0.4-1.1t-1.1-0.4h-3.9q-0.7 0-1.1 0.4t-0.5 1.1v3.7q0 0.6 0.5 1.1t1.1 0.4h3.9q0.6 0 1.1-0.4t0.4-1.1z m3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3h-25.5q-1.8 0-3.1-1.3t-1.3-3.1v-25.4q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconInstagram;
}(React.Component));
IconInstagram.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconInstagram;
//# sourceMappingURL=IconInstagram.js.map