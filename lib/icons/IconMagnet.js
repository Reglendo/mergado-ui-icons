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
var IconMagnet = (function (_super) {
    __extends(IconMagnet, _super);
    function IconMagnet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMagnet.prototype.render = function () {
        var className = this.name + " " + this.name + "--magnet";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 18.6v2.8q0 4.5-2.2 8.1t-6.1 5.6-8.9 2-8.8-2-6.1-5.6-2.2-8.1v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.6 0 1 0.5t0.4 1v2.8q0 1.2 0.6 2t1.1 1.3 1.6 0.7 1.5 0.3 0.9 0 1 0 1.5-0.3 1.5-0.7 1.2-1.3 0.6-2v-2.8q0-0.6 0.4-1t1-0.5h8.6q0.5 0 1 0.5t0.4 1z m-22.9-14.3v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.6 0 1 0.4t0.4 1z m22.9 0v8.6q0 0.5-0.4 1t-1 0.4h-8.6q-0.6 0-1-0.4t-0.4-1v-8.6q0-0.6 0.4-1t1-0.4h8.6q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMagnet;
}(React.Component));
IconMagnet.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMagnet;
//# sourceMappingURL=IconMagnet.js.map