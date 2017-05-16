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
var IconWheelchairAlt = (function (_super) {
    __extends(IconWheelchairAlt, _super);
    function IconWheelchairAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWheelchairAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--wheelchair-alt";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.1 18.1q0.8 0.8 0.6 1.9l-0.9 12.3q-0.1 0.9-0.8 1.5t-1.6 0.7q-0.1 0-0.2-0.1-1 0-1.6-0.8t-0.6-1.7l0.8-9.6-3.2 0.2q1.2 2.5 1.2 5.4 0 4.8-3.3 8.3l-3-3.1q2-2.3 2-5.2 0-3.3-2.3-5.6t-5.5-2.3q-3 0-5.3 2.1l-3-3.1q2.6-2.5 6.3-3.1l5.9-6.7-3.3-2-4.1 3.6q-0.7 0.7-1.7 0.6t-1.6-0.8-0.6-1.7 0.8-1.6l5.3-4.8q0.6-0.5 1.3-0.6t1.5 0.4l10.8 6.3q0.9 0.4 1.1 1.5 0.4 1.5-0.6 2.6l-4.5 5.2 8.2-0.5q1.1 0 1.9 0.8z m-4.4-10.2q-1.7 0-2.8-1.1t-1.2-2.8 1.2-2.8 2.8-1.2 2.8 1.2 1.2 2.8-1.2 2.8-2.8 1.1z m-14 27.8q2.3 0 4.4-1.4l3.1 3.1q-3.3 2.6-7.5 2.6-3.3 0-6.1-1.6t-4.5-4.5-1.6-6q0-4.2 2.6-7.5l3.1 3.1q-1.3 1.9-1.3 4.4 0 3.2 2.3 5.5t5.5 2.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWheelchairAlt;
}(React.Component));
IconWheelchairAlt.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconWheelchairAlt;
//# sourceMappingURL=IconWheelchairAlt.js.map