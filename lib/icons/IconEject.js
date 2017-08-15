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
var IconEject = (function (_super) {
    __extends(IconEject, _super);
    function IconEject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEject.prototype.render = function () {
        var className = this.name + " " + this.name + "--eject " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m3.3 21.9l15.9-15.9q0.4-0.4 1-0.4t1 0.4l15.8 15.9q0.4 0.4 0.3 0.7t-0.7 0.3h-32.9q-0.5 0-0.7-0.3t0.3-0.7z m32.6 12.4h-31.4q-0.6 0-1.1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1.1-0.4h31.4q0.6 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconEject.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconEject;
}(React.Component));
exports.default = IconEject;
//# sourceMappingURL=IconEject.js.map