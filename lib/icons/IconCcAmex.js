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
var IconCcAmex = (function (_super) {
    __extends(IconCcAmex, _super);
    function IconCcAmex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCcAmex.prototype.render = function () {
        var className = this.name + " " + this.name + "--cc-amex " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m2.1 16.3h1.5l-0.7-1.9z m10.9 9.2l1.3-1.4-1.3-1.4h-2.8v0.9h2.5v0.9h-2.5v1h2.8z m2.7-1.4l1.8 1.9v-3.8z m5.1-0.8q0-0.6-0.7-0.6h-1.5v1.2h1.4q0.8 0 0.8-0.6z m5-0.1q0-0.5-0.7-0.5h-1.4v1.1h1.4q0.7 0 0.7-0.6z m-4.8-8.2q0-0.5-0.8-0.5h-1.4v1.1h1.4q0.8 0 0.8-0.6z m8 1.3h1.5l-0.7-1.9z m-16.8-2.8v4.8h-1.1v-3.7l-1.7 3.7h-1l-1.6-3.7v3.7h-2.3l-0.5-1.1h-2.3l-0.5 1.1h-1.2l2.1-4.8h1.6l2 4.5v-4.5h1.8l1.5 3.3 1.3-3.3h1.9z m9.8 9.8q0 0.3-0.1 0.6t-0.3 0.4-0.4 0.3-0.4 0.2-0.6 0.1-0.5 0-0.6 0-0.5 0v1.6h-2.2l-1.4-1.6-1.5 1.6h-4.4v-4.8h4.5l1.4 1.6 1.4-1.6h3.7q1.9 0 1.9 1.6z m-5.1-6v1h-3.8v-4.8h3.8v1h-2.7v0.9h2.6v1h-2.6v0.9h2.7z m23.4 9.8v4q0 1-0.6 1.7t-1.7 0.6h-35.7q-1 0-1.6-0.6t-0.7-1.7v-11.9h1.9l0.5-1h0.9l0.5 1h3.8v-0.8l0.3 0.8h2l0.4-0.8v0.8h9.4v-1.7l0.2 0q0.2 0 0.2 0.2v1.5h4.9v-0.4q0.4 0.2 0.9 0.3t0.9 0.2 1.2-0.1 0.9 0l0.4-1h1l0.4 1h4v-1l0.6 1h3.2v-6.6h-3.2v0.8l-0.4-0.8h-3.3v0.8l-0.4-0.8h-4.3q-1.2 0-1.9 0.4v-0.4h-3v0.4q-0.5-0.4-1.3-0.4h-11l-0.8 1.7-0.7-1.7h-3.5v0.8l-0.4-0.8h-2.9l-1.4 3.1v-6.8q0-1 0.7-1.7t1.6-0.6h35.7q1 0 1.7 0.6t0.6 1.7v11.9h-2.1q-0.9 0-1.4 0.4v-0.4h-3.1q-0.9 0-1.3 0.4v-0.4h-5.6v0.4q-0.5-0.4-1.5-0.4h-3.7v0.4q-0.4-0.4-1.6-0.4h-4l-1 1-0.9-1h-6.1v6.6h6l1-1 0.9 1h3.7v-1.6h0.4q1 0 1.5-0.2v1.8h3.1v-1.7h0.1q0.2 0 0.2 0t0 0.2v1.5h9.3q1 0 1.5-0.4v0.4h3q1 0 1.6-0.3z m-13.2-4.1q0 0.4-0.2 0.7t-0.6 0.6q0.4 0.1 0.6 0.4t0.1 0.8v1h-1.1v-0.8q0-0.6-0.2-0.8t-0.8-0.2h-1.2v1.8h-1.2v-4.8h2.7q0.9 0 1.4 0.3t0.5 1z m-4.9-8.2q0 0.4-0.2 0.8t-0.6 0.5q0.5 0.2 0.6 0.4t0.2 0.9v0.9h-1.2q0-0.2 0-0.5t0-0.4 0-0.3-0.2-0.3-0.3-0.2-0.5 0h-1.2v1.7h-1.1v-4.8l2.6 0.1q0.9 0 1.4 0.2t0.5 1z m9.3 10.7v1h-3.8v-4.8h3.8v1h-2.7v0.9h2.6v0.9h-2.6v1z m-7.5-12v4.8h-1.1v-4.8h1.1z m12.2 11.5q0 1.5-1.8 1.5h-2.2v-1.1h2.2q0.6 0 0.6-0.4 0-0.3-0.3-0.4t-0.8 0-0.8-0.1-0.8-0.4-0.3-1q0-0.6 0.5-1t1.1-0.4h2.3v1h-2.1q-0.6 0-0.6 0.4 0 0.3 0.3 0.4t0.8 0.1 0.8 0 0.7 0.4 0.4 1z m4.1-0.9v1.7q-0.4 0.7-1.5 0.7h-2.2v-1.1h2.2q0.6 0 0.6-0.4 0-0.2-0.2-0.3t-0.6-0.1-0.7-0.1-0.7-0.1-0.5-0.4-0.3-0.9q0-0.6 0.5-1t1.2-0.4h2.2v1h-2q-0.7 0-0.7 0.4 0 0.4 0.5 0.4t1.2 0.1 1 0.5z m-2.9-10.5v4.7h-1.6l-2.1-3.6v3.6h-2.3l-0.5-1.1h-2.3l-0.4 1.1h-1.4q-2.2 0-2.2-2.3 0-2.5 2.3-2.5h1.1v1.1q-0.1 0-0.5 0t-0.5-0.1-0.4 0.1-0.4 0.1-0.2 0.2-0.2 0.4-0.1 0.6q0 0.7 0.3 1t0.8 0.4h0.5l1.7-3.7h1.7l1.9 4.4v-4.4h1.7l2 3.2v-3.2h1.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCcAmex;
}(React.Component));
IconCcAmex.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconCcAmex;
//# sourceMappingURL=IconCcAmex.js.map