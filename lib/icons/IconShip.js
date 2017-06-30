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
var IconShip = (function (_super) {
    __extends(IconShip, _super);
    function IconShip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShip.prototype.render = function () {
        var className = this.name + " " + this.name + "--ship " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.2 32.8q0.3-0.4 0.8-0.4t0.9 0.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-0.3 0.4-0.9 0.4t-0.8-0.4l-1.6-1.6-1.7 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-1.7-1.6-1.6 1.6q-0.3 0.4-0.8 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.9-0.4l-1.6-1.6-1.6 1.6q-0.4 0.4-0.9 0.4t-0.8-0.4l-2.5-2.5 1.7-1.7 1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.3-0.4 0.8-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.9 0.4l1.6 1.6 1.6-1.6q0.4-0.4 0.9-0.4t0.8 0.4l1.6 1.6z m-30.6-0.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-2.5-2.5 1.7-1.8 1.6 1.6 1.6-1.6q0.4-0.3 0.9-0.3t0.9 0.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-0.4-0.5-0.2-1.1t0.8-0.8l3.4-1.1v-5.8h2.5v-2.5h5v-2.5h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q0.6 0.2 0.8 0.8t-0.1 1.1l-4.1 6.1v5.7l0.4-0.4q0.4-0.3 0.9-0.3t0.8 0.3l1.6 1.6 1.7-1.6q0.3-0.3 0.8-0.3t0.9 0.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-0.3 0.3-0.9 0.3t-0.8-0.3l-1.6-1.7-1.7 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.8-0.3l-1.7-1.7-1.6 1.7q-0.3 0.3-0.8 0.3t-0.9-0.3l-1.6-1.7-1.6 1.7q-0.4 0.3-0.9 0.3t-0.9-0.3l-1.6-1.7z m7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5v-2.5h-9.9v2.5h-2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShip;
}(React.Component));
IconShip.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconShip;
//# sourceMappingURL=IconShip.js.map