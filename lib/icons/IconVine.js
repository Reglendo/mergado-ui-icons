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
var IconVine = (function (_super) {
    __extends(IconVine, _super);
    function IconVine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVine.prototype.render = function () {
        var className = this.name + " " + this.name + "--vine " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.4 18.5v4.4q-2.2 0.5-4.4 0.5-1.5 3-3.7 6t-4 4.9-2.9 2.3q-1.8 1-3.6 0-0.6-0.4-1.4-1t-1.9-1.9-2.3-2.8-2.4-4.1-2.3-5.5-2.1-7-1.5-8.7h6.3q0.6 4.8 1.6 8.9t2.3 7.1 2.7 5.2 3.1 4.4q3.8-3.8 6.4-9.1-3.1-1.6-4.9-4.9t-1.9-7.4q0-4.3 2.4-7.1t6.3-2.7q4 0 6.1 2.4t2.1 6.6q0 3.5-1.3 6.4-0.1 0-0.4 0t-1 0.1-1.4-0.1-1.4-0.6-1.2-1.2q0.7-2.3 0.7-4.1 0-1.9-0.6-2.9t-1.8-1q-1.2 0-1.9 1.1t-0.7 3.1q0 4.2 2.4 6.6t5.9 2.4q1.4 0 2.7-0.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVine;
}(React.Component));
IconVine.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconVine;
//# sourceMappingURL=IconVine.js.map