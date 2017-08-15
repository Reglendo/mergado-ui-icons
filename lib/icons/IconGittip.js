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
var IconGittip = (function (_super) {
    __extends(IconGittip, _super);
    function IconGittip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGittip.prototype.render = function () {
        var className = this.name + " " + this.name + "--gittip " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.3 29.1l7.8-10.6q0.3-0.5 0.5-1.3t-0.1-1.9-1.4-1.8q-0.9-0.6-1.8-0.5t-1.7 0.4-1.2 1q-0.8 0.8-2.1 0.8-1.4 0-2.2-0.8-0.5-0.7-1.2-1t-1.6-0.4-1.9 0.5q-1 0.7-1.4 1.8t-0.1 1.9 0.6 1.3z m17-9.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconGittip.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconGittip;
}(React.Component));
exports.default = IconGittip;
//# sourceMappingURL=IconGittip.js.map