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
var IconInbox = (function (_super) {
    __extends(IconInbox, _super);
    function IconInbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconInbox.prototype.render = function () {
        var className = this.name + " " + this.name + "--inbox";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.8 21.4h7.1q0 0-0.1-0.1t0-0.2l-4.8-11.1h-15.8l-4.7 11.1q0 0 0 0.2t-0.1 0.1h7.1l2.1 4.3h7.1z m11.5 0.7v10.8q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-10.8q0-1.4 0.6-2.7l5.3-12.4q0.2-0.5 0.8-0.9t1.2-0.4h18.5q0.6 0 1.2 0.4t0.8 0.9l5.3 12.4q0.6 1.3 0.6 2.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconInbox;
}(React.Component));
IconInbox.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconInbox;
//# sourceMappingURL=IconInbox.js.map