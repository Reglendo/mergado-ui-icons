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
var IconTty = (function (_super) {
    __extends(IconTty, _super);
    function IconTty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTty.prototype.render = function () {
        var className = this.name + " " + this.name + "--tty";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m10 29.3v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m-4.3-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m12.9 8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m-4.3-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m-12.8-3.6q-0.7 0-1.1-0.4t-0.4-1v-2.9h11.5v2.9q0 0.6-0.5 1t-1 0.4h-8.5z m25.6 12.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m-4.2-8.6v4.3q0 0.3-0.2 0.5t-0.6 0.2h-4.2q-0.4 0-0.6-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.6-0.2h4.2q0.4 0 0.6 0.2t0.2 0.5z m12.8 8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m-4.3-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m8.6-9.1v0.3h-11.5v-0.2q0-2.3-8.5-2.3-8.5 0-8.5 2.3v0.2h-11.5v-0.3q0-0.4 0.2-1t0.7-1.4 1.5-1.7 2.5-1.7 3.5-1.5 5-1 6.6-0.4 6.5 0.4 5 1 3.6 1.5 2.5 1.7 1.5 1.7 0.7 1.4 0.2 1z m0 9.1v4.3q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5z m0-7.9v2.9q0 0.6-0.4 1t-1.1 0.4h-8.5q-0.6 0-1.1-0.4t-0.4-1v-2.9h11.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTty;
}(React.Component));
IconTty.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTty;
//# sourceMappingURL=IconTty.js.map