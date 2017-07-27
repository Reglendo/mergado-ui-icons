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
var IconUserSecret = (function (_super) {
    __extends(IconUserSecret, _super);
    function IconUserSecret() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconUserSecret.prototype.render = function () {
        var className = this.name + " " + this.name + "--user-secret " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.4 34.3l2.1-10-2.1-2.9-2.9-1.4z m5.7 0l2.8-14.3-2.8 1.4-2.2 2.9z m3.5-22.6q0 0 0-0.1-0.3-0.2-2.2-0.2-1.6 0-3.7 0.5-0.2 0-0.5 0t-0.5 0q-2.1-0.5-3.7-0.5-1.9 0-2.1 0.2-0.1 0.1-0.1 0.1 0 0.4 0.1 0.6 0 0.1 0.1 0.2t0.2 0.2q0.1 0.1 0.2 0.5t0.1 0.4 0.2 0.4 0.2 0.4 0.2 0.3 0.3 0.3 0.3 0.2 0.4 0.2 0.4 0.1 0.6 0q0.8 0 1.3-0.2t0.7-0.7 0.3-0.8 0.3-0.6 0.4-0.3h0.3q0.2 0 0.3 0.3t0.3 0.6 0.3 0.8 0.7 0.7 1.4 0.2q0.3 0 0.5 0t0.5-0.1 0.4-0.2 0.3-0.2 0.2-0.3 0.2-0.3 0.2-0.4 0.2-0.4 0.2-0.4 0.1-0.5q0.1-0.1 0.2-0.2t0.2-0.2q0-0.2 0-0.6z m9.3 19.7q0 2.7-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.4 0.1-2.7t0.4-2.8 0.9-2.7 1.4-2.3 2.1-1.7l-2-4.9h4.7q-0.5-1.4-0.5-2.9 0-0.2 0.1-0.7-4.3-0.9-4.3-2.1 0-1.3 4.6-2.2 0.4-1.4 1.2-3t1.6-2.6q0.7-0.8 1.7-0.8 0.6 0 1.8 0.7t1.9 0.7 1.9-0.7 1.9-0.7q0.9 0 1.7 0.8 0.8 1 1.5 2.6t1.2 3q4.7 0.9 4.7 2.2 0 1.2-4.4 2.1 0.2 1.8-0.4 3.6h4.8l-1.9 5q1.5 0.7 2.4 2.2t1.5 3.2 0.7 3.3 0.1 3.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconUserSecret;
}(React.Component));
IconUserSecret.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconUserSecret;
//# sourceMappingURL=IconUserSecret.js.map