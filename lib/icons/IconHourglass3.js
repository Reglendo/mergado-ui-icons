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
var IconHourglass3 = (function (_super) {
    __extends(IconHourglass3, _super);
    function IconHourglass3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHourglass3.prototype.render = function () {
        var className = this.name + " " + this.name + "--hourglass-3";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q0.3 0 0.5 0.2t0.2 0.6v1.4q0 0.3-0.2 0.5t-0.5 0.2h-32.9q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.4 0.2-0.6t0.5-0.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8t-2.3-10.3h-2.2q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h32.9q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-2.2z m-11.9 15.8q1.7-0.7 3.3-2.1t2.9-3.4 2.1-4.7 0.8-5.6h-22.9q0 2.9 0.8 5.6t2.1 4.7 2.9 3.4 3.3 2.1q0.4 0.1 0.7 0.5t0.2 0.8-0.2 0.8-0.7 0.5q-3.1 1.2-5.5 4.4h15.7q-2.4-3.2-5.5-4.4-0.4-0.1-0.7-0.5t-0.2-0.8 0.2-0.8 0.7-0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHourglass3;
}(React.Component));
IconHourglass3.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconHourglass3;
//# sourceMappingURL=IconHourglass3.js.map