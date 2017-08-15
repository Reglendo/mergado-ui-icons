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
var IconHandORight = (function (_super) {
    __extends(IconHandORight, _super);
    function IconHandORight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandORight.prototype.render = function () {
        var className = this.name + " " + this.name + "--hand-o-right " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m5.7 30q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m31.4-12.9q0-1.1-0.8-2t-2-0.8h-12.9q0-0.5 0.4-1.1t0.7-1.2 0.7-1.5 0.4-1.9q0-1.5-1-2.2t-2.6-0.7q-0.5 0-2 3.1-0.5 1-0.8 1.5-0.9 1.4-2.5 3.2-1.6 1.8-2.3 2.4-1.5 1.2-3.1 1.2h-0.7v14.3h0.7q1.6 0 3.7 0.7t4.3 1.5 4 0.7q4.3 0 4.3-3.7 0-0.6-0.2-1.3 0.7-0.3 1.1-1.2t0.4-1.6-0.4-1.5q1.2-1.2 1.2-2.7 0-0.6-0.2-1.2t-0.6-1.1h7.4q1.1 0 2-0.8t0.8-2.1z m2.9 0q0 2.4-1.7 4.1t-4 1.7h-3.8q-0.1 1.3-0.8 2.6 0.1 0.5 0.1 1 0 2.2-1.4 3.9 0 3.1-1.9 4.9t-5 1.8q-3 0-7.2-1.5-3.7-1.3-5-1.3h-6.4q-1.2 0-2.1-0.9t-0.8-2v-14.3q0-1.1 0.8-2t2.1-0.8h6.4q0.2 0 0.5-0.1t0.5-0.3 0.5-0.4 0.5-0.5 0.5-0.5 0.4-0.5 0.3-0.4q1.5-1.6 2.3-2.8 0.2-0.5 0.7-1.4t0.8-1.6 0.9-1.4 1.2-1.1 1.6-0.4q2.8 0 4.6 1.5t1.8 4.2q0 1.5-0.5 2.8h8.4q2.3 0 4 1.7t1.7 4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconHandORight.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconHandORight;
}(React.Component));
exports.default = IconHandORight;
//# sourceMappingURL=IconHandORight.js.map