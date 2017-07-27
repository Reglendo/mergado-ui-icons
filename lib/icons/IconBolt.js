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
var IconBolt = (function (_super) {
    __extends(IconBolt, _super);
    function IconBolt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBolt.prototype.render = function () {
        var className = this.name + " " + this.name + "--bolt " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.8 12.6q0.4 0.5 0.1 1l-12 25.8q-0.3 0.6-1 0.6-0.1 0-0.3 0-0.4-0.2-0.6-0.5t-0.1-0.6l4.4-18.1-9 2.3q-0.1 0-0.3 0-0.4 0-0.7-0.2-0.4-0.4-0.3-0.9l4.5-18.4q0.1-0.3 0.4-0.5t0.6-0.2h7.3q0.4 0 0.7 0.2t0.3 0.7q0 0.2-0.1 0.4l-3.8 10.3 8.8-2.2q0.2 0 0.3 0 0.4 0 0.8 0.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBolt;
}(React.Component));
IconBolt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconBolt;
//# sourceMappingURL=IconBolt.js.map