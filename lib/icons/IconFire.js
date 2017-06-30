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
var IconFire = (function (_super) {
    __extends(IconFire, _super);
    function IconFire() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFire.prototype.render = function () {
        var className = this.name + " " + this.name + "--fire " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 37.9v1.4q0 0.3-0.2 0.5t-0.5 0.2h-30q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.3 0.2-0.5t0.5-0.3h30q0.3 0 0.5 0.3t0.2 0.5z m-5.7-23.6q0 1.7-0.5 3.2t-1.5 2.5-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-0.6 2.2q0 2.1 1.5 5l-0.1 0 0 0q-2-0.9-3.5-1.9t-3.1-2.2-2.6-2.7-1.6-3.4-0.6-4.1q0-1.7 0.6-3.2t1.4-2.5 1.9-2 2.2-1.7 1.9-1.6 1.5-1.8 0.5-2.2q0-2.1-1.5-5l0.1 0 0 0q2 0.9 3.6 1.9t3 2.2 2.6 2.7 1.6 3.4 0.6 4.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFire;
}(React.Component));
IconFire.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconFire;
//# sourceMappingURL=IconFire.js.map