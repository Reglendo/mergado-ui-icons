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
var IconEdge = (function (_super) {
    __extends(IconEdge, _super);
    function IconEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEdge.prototype.render = function () {
        var className = this.name + " " + this.name + "--edge " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m1.5 17.7h0.1q0.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2h-25.2q0.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8 0.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 0.9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-0.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q0.2-1.7-0.1-3.1t-1.1-2.3-1.6-1.5-1.8-0.9-1.6-0.5-1.3-0.1l-0.5-0.1q-3 0.1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEdge;
}(React.Component));
IconEdge.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconEdge;
//# sourceMappingURL=IconEdge.js.map