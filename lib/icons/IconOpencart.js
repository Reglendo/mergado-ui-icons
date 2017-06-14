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
var IconOpencart = (function (_super) {
    __extends(IconOpencart, _super);
    function IconOpencart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconOpencart.prototype.render = function () {
        var className = this.name + " " + this.name + "--opencart " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.7 31.6q0 1.2-0.9 2.1t-2 0.8-2-0.8-0.9-2.1 0.9-2 2-0.8 2 0.8 0.9 2z m-13.1 0q0 1.2-0.9 2.1t-2 0.8-2.1-0.8-0.8-2.1 0.8-2 2.1-0.8 2 0.8 0.9 2z m-13.6-26.1q1 1 1.9 1.8t2.2 1.5 2.3 1.1 2.9 0.8 3.5 0.5 4.4 0.3 5.3 0.2 6.6 0q2.4 0 4.2 0.1t3.2 0.3 2.2 0.5 1.2 0.7 0.4 0.9-0.3 1.1-1 1.3-1.6 1.6-2 1.9-2.4 2.1q-3.3 2.7-5 4.3 0.5-0.9 1.3-1.9t1.7-1.9 1.6-1.7 1.5-1.6 0.9-1.4 0.2-1.2-0.8-1-2-0.7-3.6-0.4-5.3-0.1q-2.9 0-5.5-0.1t-4.5-0.4-3.5-0.8-2.8-0.9-2.2-1-1.6-1.2-1.2-1.3-0.9-1.2-0.7-1.2-0.6-1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconOpencart;
}(React.Component));
IconOpencart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconOpencart;
//# sourceMappingURL=IconOpencart.js.map