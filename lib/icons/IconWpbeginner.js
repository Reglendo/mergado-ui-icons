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
var IconWpbeginner = (function (_super) {
    __extends(IconWpbeginner, _super);
    function IconWpbeginner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWpbeginner.prototype.render = function () {
        var className = this.name + " " + this.name + "--wpbeginner " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.6 18.6h3.5v-5h-3.5v5z m18.7 7.4v-2.1q-2.4 0.8-5.5 0.9-3 0-5.8-1.1t-4.9-2.7l0 2.1q2 1.8 4.8 2.9t6 1.1q2.9 0 5.4-1.1z m-13-7.4h14.3v-5h-14.3v5z m25.7-0.7q0 4.1-2.2 7.8 2 2.3 2 5.1 0 3.5-2.9 6t-7 2.5q-2.7 0-5-1.2t-3.6-3.1q-0.5 0-1.3 0t-1.3 0q-1.3 1.9-3.6 3.1t-5 1.2q-4.1 0-7-2.5t-2.9-6q0-2.8 2-5.1-2.2-3.7-2.2-7.8 0-4.7 2.7-8.6t7.3-6.3 10-2.3 10 2.3 7.3 6.3 2.7 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWpbeginner;
}(React.Component));
IconWpbeginner.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconWpbeginner;
//# sourceMappingURL=IconWpbeginner.js.map