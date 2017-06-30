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
var IconOpera = (function (_super) {
    __extends(IconOpera, _super);
    function IconOpera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconOpera.prototype.render = function () {
        var className = this.name + " " + this.name + "--opera " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.3 5.1q-3.7-2.5-8-2.5-3.4 0-6.5 1.7t-5.4 4.4q-1.7 2.1-2.7 4.9t-1 5.9v1q0.1 3.1 1 5.9t2.7 4.9q2.3 2.8 5.4 4.4t6.5 1.7q4.3 0 8-2.5-2.7 2.4-6.1 3.8t-7.2 1.3q-0.6 0-1 0-3.9-0.2-7.4-1.9t-6.1-4.3-4-6.2-1.5-7.6q0-4.1 1.6-7.8t4.2-6.4 6.4-4.2 7.8-1.6h0.1q3.7 0 7.1 1.4t6.1 3.7z m6.7 14.9q0 4.3-1.7 8.1t-4.8 6.6q-2.3 1.4-4.9 1.4-3.1 0-5.7-1.9 3.4-1.2 5.6-5.2t2.3-9q0-5.1-2.3-9t-5.6-5.2q2.7-1.9 5.7-1.9 2.6 0 5 1.5 3 2.7 4.7 6.5t1.7 8.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconOpera;
}(React.Component));
IconOpera.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconOpera;
//# sourceMappingURL=IconOpera.js.map