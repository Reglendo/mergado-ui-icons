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
var IconStopCircleO = (function (_super) {
    __extends(IconStopCircleO, _super);
    function IconStopCircleO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStopCircleO.prototype.render = function () {
        var className = this.name + " " + this.name + "--stop-circle-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m0 29.2q3.3 0 6.1-1.6t4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6z m-6.4-5q-0.3 0-0.5-0.2t-0.2-0.5v-12.8q0-0.3 0.2-0.5t0.5-0.2h12.9q0.3 0 0.5 0.2t0.2 0.5v12.8q0 0.3-0.2 0.5t-0.5 0.2h-12.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStopCircleO;
}(React.Component));
IconStopCircleO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconStopCircleO;
//# sourceMappingURL=IconStopCircleO.js.map