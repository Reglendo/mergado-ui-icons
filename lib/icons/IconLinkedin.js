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
var IconLinkedin = (function (_super) {
    __extends(IconLinkedin, _super);
    function IconLinkedin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLinkedin.prototype.render = function () {
        var className = this.name + " " + this.name + "--linkedin " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m10.8 13.9v22.2h-7.4v-22.1h7.4z m0.5-6.8q0 1.7-1.2 2.7t-3 1.1h0q-1.9 0-3-1.1t-1.1-2.7q0-1.6 1.2-2.7t3-1.1 2.9 1.1 1.2 2.7z m26 16.3v12.7h-7.4v-11.9q0-2.3-0.9-3.6t-2.8-1.4q-1.4 0-2.3 0.8t-1.5 1.9q-0.2 0.7-0.2 1.8v12.4h-7.3q0-8.9 0-14.5t0-6.6l0-1h7.3v3.2h-0.1q0.5-0.7 1-1.3t1.2-1.1 2-1 2.5-0.4q3.8 0 6.2 2.6t2.3 7.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconLinkedin.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconLinkedin;
}(React.Component));
exports.default = IconLinkedin;
//# sourceMappingURL=IconLinkedin.js.map