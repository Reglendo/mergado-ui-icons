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
var IconMailForward = (function (_super) {
    __extends(IconMailForward, _super);
    function IconMailForward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMailForward.prototype.render = function () {
        var className = this.name + " " + this.name + "--mail-forward";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 14.3q0 0.6-0.4 1l-11.5 11.4q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-5.7h-5q-2.2 0-3.9 0.1t-3.4 0.5-3 1-2.4 1.5-1.7 2.3-1.1 3.1-0.4 4q0 1.2 0.1 2.7 0 0.2 0 0.6t0.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.3-0.2-0.2-0.3-0.5t-0.3-0.7-0.3-0.5q-2.8-6.4-2.8-10.1 0-4.4 1.2-7.4 3.6-9 19.5-9h5v-5.7q0-0.6 0.4-1t1-0.5 1 0.5l11.5 11.4q0.4 0.4 0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMailForward;
}(React.Component));
IconMailForward.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMailForward;
//# sourceMappingURL=IconMailForward.js.map