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
var IconCameraRetro = (function (_super) {
    __extends(IconCameraRetro, _super);
    function IconCameraRetro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCameraRetro.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.7 18.6q0-0.3-0.2-0.5t-0.5-0.2q-1.5 0-2.5 1t-1.1 2.5q0 0.3 0.2 0.5t0.5 0.2 0.6-0.2 0.2-0.5q0-0.9 0.6-1.5t1.5-0.6q0.3 0 0.5-0.2t0.2-0.5z m5 2.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4 1.7-4.1 4-1.6 4 1.6 1.7 4.1z m-22.8 12.8h34.2v-2.9h-34.2v2.9z m25.7-12.8q0-3.6-2.5-6.1t-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6 6.1 2.5 6.1-2.5 2.5-6z m-22.9-14.4h8.6v-2.8h-8.6v2.8z m-2.8 4.3h34.2v-5.7h-18.4l-1.5 2.9h-14.3v2.8z m37.1-5.7v28.6q0 1.2-0.8 2t-2.1 0.8h-34.2q-1.2 0-2.1-0.8t-0.8-2v-28.6q0-1.2 0.8-2t2.1-0.8h34.2q1.2 0 2.1 0.8t0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCameraRetro;
}(React.Component));
IconCameraRetro.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconCameraRetro;
//# sourceMappingURL=camera-retro.js.map