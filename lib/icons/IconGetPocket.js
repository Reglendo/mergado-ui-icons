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
var IconGetPocket = (function (_super) {
    __extends(IconGetPocket, _super);
    function IconGetPocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGetPocket.prototype.render = function () {
        var className = this.name + " " + this.name + "--get-pocket";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 2.9q1.5 0 2.5 1t1 2.4v11.6q0 4-1.5 7.5t-4.1 6.2-6.1 4-7.5 1.5q-3.9 0-7.5-1.5t-6.1-4-4.1-6.2-1.5-7.5v-11.6q0-1.4 1-2.4t2.5-1h31.4z m-15.7 23.7q1.1 0 1.8-0.7l9.1-8.7q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9t-1.8-0.7q-1.1 0-1.9 0.7l-7.2 6.9-7.2-6.9q-0.8-0.7-1.8-0.7-1.1 0-1.9 0.7t-0.7 1.9q0 1.2 0.8 1.9l9 8.7q0.7 0.7 1.8 0.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGetPocket;
}(React.Component));
IconGetPocket.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconGetPocket;
//# sourceMappingURL=IconGetPocket.js.map