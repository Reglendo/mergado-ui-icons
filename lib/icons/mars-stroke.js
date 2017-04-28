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
var IconMarsStroke = (function (_super) {
    __extends(IconMarsStroke, _super);
    function IconMarsStroke() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMarsStroke.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 2.9q0.5 0 1 0.4t0.4 1v9.3q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5.9l-4.7 4.8 3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5l-1 1.1q-0.2 0.2-0.5 0.2t-0.5-0.2l-3.2-3.2-1.7 1.8q2.8 3.5 2.8 8 0 2.6-1 5t-2.7 4.1-4.2 2.7-4.9 1-5-1-4.1-2.7-2.8-4.1-1-5 1-5 2.8-4.1 4.1-2.8 5-1q4.5 0 8 2.8l1.7-1.7-3.8-3.8q-0.2-0.3-0.2-0.6t0.2-0.4l1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l3.8 3.9 4.8-4.8h-5.8q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.2h9.3z m-20 31.4q4.1 0 7-2.9t3-7.1-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMarsStroke;
}(React.Component));
IconMarsStroke.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconMarsStroke;
//# sourceMappingURL=mars-stroke.js.map