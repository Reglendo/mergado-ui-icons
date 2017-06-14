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
var IconViadeoSquare = (function (_super) {
    __extends(IconViadeoSquare, _super);
    function IconViadeoSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconViadeoSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--viadeo-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.4 23.2q0-1.7-0.6-3.2-0.9 0.5-1.9 0.7 0.5 1.1 0.5 2.6 0 2.6-1.7 4.4t-4.3 1.8-4.3-1.8-1.8-4.4q0-2.6 1.8-4.5t4.3-1.9q1.2 0 2.2 0.4 0.1-0.9 0.6-1.9-1.4-0.5-2.8-0.5-3.5 0-5.8 2.5t-2.3 5.8 2.3 5.9 5.8 2.3 5.7-2.3 2.3-5.9z m-3.9-7.9q0 0.5 0 1.6 0 1.4-0.1 2.7t-0.5 3-0.9 2.9-1.5 2.4-2.2 1.5q0.4 0.1 0.9 0.1h0.2q4.9-3.1 4.9-9.2 0-2.6-0.8-5z m0 0q-0.1-1.8-1-3.8t-2.2-2.9q2 3.5 3.2 6.7z m7.4-2.3q0-2.3-1.1-3.9-0.9 1.9-2.8 2.4-1.5 0.4-2.4 1.2t-0.9 2.2q0 0.9 0.5 1.8 1.7-0.4 3.2-1.5t2.1-2.6q-0.1 1.1-1.6 2.5t-3.1 2.2q1.1 1.1 2.4 1.1 1.2 0 2-0.8t1.4-2q0.3-1 0.3-2.6z m7.4-3.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconViadeoSquare;
}(React.Component));
IconViadeoSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconViadeoSquare;
//# sourceMappingURL=IconViadeoSquare.js.map