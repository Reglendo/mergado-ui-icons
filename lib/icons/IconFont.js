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
var IconFont = (function (_super) {
    __extends(IconFont, _super);
    function IconFont() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFont.prototype.render = function () {
        var className = this.name + " " + this.name + "--font";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.7 12.5l-3.8 10q0.7 0 3 0.1t3.6 0q0.4 0 1.3 0-2-5.7-4.1-10.1z m-16.2 24.6l0-1.7q0.6-0.2 1.3-0.3t1.3-0.2 1.1-0.4 1-0.6 0.7-1.1l5.2-13.8 6.3-16.1h2.9q0.1 0.3 0.2 0.4l4.6 10.7q0.7 1.8 2.3 5.8t2.6 6.1q0.3 0.8 1.3 3.2t1.6 3.8q0.4 1 0.8 1.3 0.4 0.3 1.9 0.6t1.9 0.5q0.1 0.8 0.1 1.3 0 0.1 0 0.3t0 0.2q-1.4 0-4.2-0.1t-4.3-0.2q-1.7 0-4.8 0.1t-4 0.2q0-0.9 0.1-1.7l3-0.6q0 0 0.2-0.1t0.4-0.1 0.3-0.1 0.3-0.1 0.3-0.2 0.2-0.3 0-0.3q0-0.3-0.6-2.1t-1.7-4-0.9-2.2l-10-0.1q-0.6 1.3-1.7 4.4t-1.2 3.6q0 0.5 0.3 0.9t1 0.5 1.1 0.3 1.3 0.2 0.9 0.1q0 0.4 0 1.3 0 0.2 0 0.6-1.3 0-3.9-0.2t-3.9-0.3q-0.2 0-0.6 0.1t-0.5 0.1q-1.8 0.3-4.2 0.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFont;
}(React.Component));
IconFont.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFont;
//# sourceMappingURL=IconFont.js.map