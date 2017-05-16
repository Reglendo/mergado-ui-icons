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
var IconPinterestP = (function (_super) {
    __extends(IconPinterestP, _super);
    function IconPinterestP() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPinterestP.prototype.render = function () {
        var className = this.name + " " + this.name + "--pinterest-p";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m5.5 13.3q0-2.4 0.8-4.5t2.3-3.7 3.4-2.8 4.2-1.7 4.5-0.6q3.5 0 6.5 1.5t5 4.3 1.9 6.4q0 2.2-0.5 4.2t-1.3 4-2.2 3.3-3.3 2.3-4.2 0.9q-1.5 0-3-0.8t-2.1-1.9q-0.3 0.8-0.7 2.5t-0.5 2.1-0.4 1.6-0.6 1.6-0.7 1.4-1.1 1.7-1.4 1.9l-0.3 0.1-0.2-0.2q-0.3-3.5-0.3-4.2 0-2 0.5-4.6t1.5-6.4 1.1-4.5q-0.7-1.5-0.7-3.8 0-1.9 1.2-3.5t2.9-1.6q1.4 0 2.1 0.9t0.8 2.3q0 1.5-1 4.2t-1 4.2q0 1.4 1 2.3t2.5 1q1.2 0 2.3-0.6t1.7-1.5 1.3-2.1 0.8-2.5 0.4-2.5 0.2-2.2q0-3.9-2.5-6t-6.3-2.2q-4.5 0-7.5 2.9t-3 7.4q0 0.9 0.3 1.9t0.6 1.4 0.6 1 0.3 0.7q0 0.6-0.3 1.6t-0.9 1q0 0-0.3 0-1.2-0.4-2.1-1.3t-1.3-2.1-0.8-2.4-0.2-2.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPinterestP;
}(React.Component));
IconPinterestP.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconPinterestP;
//# sourceMappingURL=IconPinterestP.js.map