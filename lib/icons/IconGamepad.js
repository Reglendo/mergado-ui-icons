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
var IconGamepad = (function (_super) {
    __extends(IconGamepad, _super);
    function IconGamepad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGamepad.prototype.render = function () {
        var className = this.name + " " + this.name + "--gamepad " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.3 24v-2.7q0-0.3-0.2-0.4t-0.5-0.2h-4v-4q0-0.3-0.2-0.5t-0.4-0.2h-2.7q-0.3 0-0.5 0.2t-0.2 0.5v4h-3.9q-0.3 0-0.5 0.1t-0.2 0.5v2.7q0 0.3 0.2 0.5t0.5 0.2h3.9v3.9q0 0.3 0.2 0.5t0.5 0.2h2.7q0.3 0 0.4-0.2t0.2-0.5v-3.9h4q0.3 0 0.5-0.2t0.2-0.5z m11.9 1.3q0-1.1-0.7-1.9t-1.9-0.7-1.9 0.7-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.7-1.9z m5.4-5.3q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1t-3.1-7.5 3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGamepad;
}(React.Component));
IconGamepad.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconGamepad;
//# sourceMappingURL=IconGamepad.js.map