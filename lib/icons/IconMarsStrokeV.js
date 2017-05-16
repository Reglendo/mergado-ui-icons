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
var IconMarsStrokeV = (function (_super) {
    __extends(IconMarsStrokeV, _super);
    function IconMarsStrokeV() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMarsStrokeV.prototype.render = function () {
        var className = this.name + " " + this.name + "--mars-stroke-v";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.8 14.4q4.8 0.5 8.1 4.2t3.3 8.5q0 3.8-1.9 6.9t-5.3 4.7-7.1 1.2q-3-0.3-5.5-2t-4.1-4.1-1.8-5.6q-0.2-3.5 1.2-6.5t4.2-5 6-2.3v-3h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.6-0.2h3.5v-3.7l-2 2q-0.2 0.2-0.5 0.2t-0.5-0.2l-1.1-1q-0.2-0.2-0.2-0.5t0.2-0.5l4.6-4.5q0.4-0.4 1-0.4t1 0.4l4.5 4.5q0.2 0.2 0.2 0.5t-0.2 0.5l-1.1 1q-0.2 0.2-0.4 0.2t-0.6-0.2l-2-2v3.7h3.6q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.3-0.2 0.5t-0.5 0.2h-3.6v3z m-1.4 22.7q4.1 0 7-2.9t3-7.1-3-7-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMarsStrokeV;
}(React.Component));
IconMarsStrokeV.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMarsStrokeV;
//# sourceMappingURL=IconMarsStrokeV.js.map