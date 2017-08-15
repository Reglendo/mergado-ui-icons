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
var IconAmazon = (function (_super) {
    __extends(IconAmazon, _super);
    function IconAmazon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAmazon.prototype.render = function () {
        var className = this.name + " " + this.name + "--amazon " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.6 32.9q0.4-0.1 0.6 0t0.2 0.4-0.3 0.7q-0.3 0.4-1 1t-2.1 1.5-3.1 1.7-4.2 1.3-5.2 0.5q-2.6 0-5.3-0.7t-4.6-1.7-3.9-2.3-3-2.4-1.8-1.9q-0.2-0.2-0.3-0.4t0.1-0.3 0.2-0.1 0.2-0.1 0.3 0.1q4.3 2.7 6.7 3.8 8.6 3.9 17.8 2 4.2-0.9 8.7-3.1z m4.6-2.5q0.3 0.3 0.1 1.5t-0.6 2.3q-0.8 1.9-1.9 2.8-0.4 0.3-0.6 0.2t0-0.5q0.5-1.1 1-2.8t0.1-2.2q-0.1-0.1-0.3-0.2t-0.6-0.2-0.7 0-0.8 0-0.7 0-0.7 0.1-0.5 0q-0.1 0.1-0.3 0.1t-0.2 0-0.2 0-0.1 0h-0.3l0 0-0.1 0 0-0.1q-0.1-0.3 1-0.9t2.3-0.6q1.1-0.2 2.4-0.1t1.7 0.6z m-8.8-9.9q0 0.7 0.3 1.4t0.8 1.3 0.8 1 0.7 0.8l0.3 0.2-5 5q-0.9-0.8-1.8-1.7t-1.3-1.3l-0.4-0.4q-0.3-0.3-0.6-0.8-0.8 1.3-2.2 2.3t-2.8 1.4-3.1 0.5-3.1-0.4-2.6-1.5-1.9-2.5-0.7-3.6q0-1.9 0.7-3.5t1.6-2.6 2.3-1.8 2.8-1.3 2.9-0.8 2.6-0.4 2.3-0.1v-2.9q0-1.4-0.5-2.1-0.8-1.2-2.7-1.2-0.1 0-0.4 0t-0.9 0.3-1.2 0.6-1.3 1.4-1 2.1l-6.6-0.6q0-1.3 0.5-2.6t1.5-2.6 2.4-2.1 3.4-1.5 4.2-0.5q2.3 0 4.1 0.6t2.9 1.3 1.8 1.9 1 1.9 0.2 1.6v13.2z m-15 0.5q0 1.9 1.6 2.9 1.5 1 3.1 0.5 1.9-0.5 2.6-2.7 0.3-1 0.3-2.3v-3.6q-1.3 0-2.5 0.3t-2.4 0.7-1.9 1.6-0.8 2.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconAmazon.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconAmazon;
}(React.Component));
exports.default = IconAmazon;
//# sourceMappingURL=IconAmazon.js.map