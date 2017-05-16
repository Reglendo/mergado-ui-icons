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
var IconCommentsO = (function (_super) {
    __extends(IconCommentsO, _super);
    function IconCommentsO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCommentsO.prototype.render = function () {
        var className = this.name + " " + this.name + "--comments-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.7 8.6q-3.4 0-6.4 1.1t-4.7 3.2-1.7 4.2q0 1.9 1.1 3.6t3.4 2.9l2.1 1.3-0.7 1.8q0.7-0.4 1.3-0.8l1-0.7 1.2 0.2q1.7 0.3 3.4 0.3 3.4 0 6.4-1.2t4.7-3.1 1.8-4.3-1.8-4.2-4.7-3.2-6.4-1.1z m0-2.9q4.3 0 7.9 1.5t5.7 4.2 2.1 5.7-2.1 5.8-5.7 4.1-7.9 1.6q-1.9 0-3.9-0.4-2.8 2-6.2 2.9-0.8 0.2-1.9 0.3h-0.1q-0.3 0-0.5-0.2t-0.2-0.4q0-0.1 0-0.2t0-0.1 0-0.1l0.1-0.2 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1q0.1-0.1 0.5-0.6t0.6-0.6 0.5-0.7 0.6-0.8 0.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5z m18.4 26.1q0.2 0.5 0.4 1t0.6 0.8 0.5 0.7 0.6 0.7 0.5 0.5q0 0 0.1 0.1t0.1 0.1 0.1 0.1 0 0.2l0.1 0.1 0 0.1 0 0.1 0 0.2q0 0.3-0.3 0.5t-0.5 0.1q-1.1-0.1-1.9-0.3-3.4-0.9-6.2-2.9-2 0.4-3.9 0.4-6.1 0-10.5-3 1.2 0.1 1.9 0.1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-0.5-3.4 2.9 1.6 4.5 4t1.7 5.2q0 2.6-1.6 5t-4.3 3.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCommentsO;
}(React.Component));
IconCommentsO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCommentsO;
//# sourceMappingURL=IconCommentsO.js.map