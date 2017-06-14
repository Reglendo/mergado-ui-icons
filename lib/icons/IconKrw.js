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
var IconKrw = (function (_super) {
    __extends(IconKrw, _super);
    function IconKrw() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconKrw.prototype.render = function () {
        var className = this.name + " " + this.name + "--krw " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.5 26.7l1.8-6.7h-3.6l1.7 6.7q0 0 0 0.1t0.1 0q0 0 0 0t0-0.1z m2.6-9.6l0.7-2.8h-6.5l0.7 2.8h5.1z m4.2 0h3.2l-0.8-2.8h-1.6z m10.1 9.6l1.7-6.7h-3.6l1.8 6.7q0 0 0 0.1t0 0q0 0 0.1 0t0-0.1z m2.4-9.6l0.8-2.8h-6.6l0.7 2.8h5.2z m9.2 0.8v1.4q0 0.3-0.2 0.5t-0.5 0.2h-4.8l-3.6 13.7q-0.2 0.6-0.7 0.6h-3.6q-0.5 0-0.7-0.6l-3.7-13.7h-4.6l-3.8 13.8q-0.1 0.5-0.7 0.5h-3.5q-0.2 0-0.4-0.2t-0.3-0.3l-3.5-13.8h-4.7q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-0.4 0.2-0.6t0.5-0.2h3.9l-0.7-2.8h-3.2q-0.3 0-0.5-0.2t-0.2-0.5v-1.5q0-0.3 0.2-0.5t0.5-0.2h2.4l-1.9-7.6q-0.2-0.4 0.1-0.7 0.2-0.2 0.6-0.2h3q0.6 0 0.7 0.5l2 8h8l2.2-8q0.1-0.5 0.7-0.5h2.8q0.5 0 0.7 0.5l2.2 8h8.1l2.1-8q0.1-0.5 0.7-0.5h3q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-2 7.6h2.5q0.3 0 0.5 0.2t0.2 0.5v1.5q0 0.3-0.2 0.5t-0.5 0.2h-3.3l-0.7 2.8h4q0.3 0 0.5 0.2t0.2 0.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconKrw;
}(React.Component));
IconKrw.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconKrw;
//# sourceMappingURL=IconKrw.js.map