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
var IconBan = (function (_super) {
    __extends(IconBan, _super);
    function IconBan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBan.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.3 19.9q0-3.6-2-6.6l-16.8 16.9q3.1 1.9 6.6 1.9 2.5 0 4.8-0.9t3.8-2.6 2.6-3.9 1-4.8z m-22.3 6.7l16.8-16.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4-1.6 6.1q0 3.6 2 6.7z m27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.5-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBan;
}(React.Component));
IconBan.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconBan;
//# sourceMappingURL=ban.js.map