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
var IconQuoteLeft = (function (_super) {
    __extends(IconQuoteLeft, _super);
    function IconQuoteLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconQuoteLeft.prototype.render = function () {
        var className = this.name + " " + this.name + "--quote-left " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.6 21.4v8.6q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3v-15.7q0-2.3 0.9-4.4t2.4-3.7 3.7-2.4 4.4-0.9h1.5q0.5 0 1 0.4t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-1.5q-2.3 0-4 1.6t-1.7 4.1v0.7q0 0.9 0.6 1.5t1.6 0.6h5q1.7 0 3 1.3t1.2 3z m20 0v8.6q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3v-15.7q0-2.3 0.9-4.4t2.4-3.7 3.7-2.4 4.4-0.9h1.5q0.5 0 1 0.4t0.4 1v2.8q0 0.6-0.4 1t-1 0.5h-1.5q-2.3 0-4 1.6t-1.7 4.1v0.7q0 0.9 0.6 1.5t1.6 0.6h5q1.7 0 3 1.3t1.2 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconQuoteLeft;
}(React.Component));
IconQuoteLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconQuoteLeft;
//# sourceMappingURL=IconQuoteLeft.js.map