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
var IconEur = (function (_super) {
    __extends(IconEur, _super);
    function IconEur() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEur.prototype.render = function () {
        var className = this.name + " " + this.name + "--eur";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.3 29.2l0.8 3.5q0 0.3-0.1 0.5t-0.4 0.3l-0.1 0.1q-0.1 0-0.2 0t-0.4 0.1-0.5 0.2-0.5 0.1-0.7 0.1-0.7 0.1-0.9 0.1-0.8 0q-5.2 0-9.2-2.9t-5.3-7.9h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h1.5q-0.1-1.3 0-2.4h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h2.2q1.5-4.7 5.4-7.6t9-2.8q2.3 0 4.3 0.5 0.3 0 0.5 0.3 0.1 0.3 0 0.5l-0.9 3.6q-0.1 0.3-0.4 0.4t-0.5 0.1l-0.1 0q-0.1-0.1-0.2-0.1l-0.4-0.1-0.5-0.1-0.6 0-0.7-0.1-0.6 0q-2.8 0-5.1 1.4t-3.3 4h10.4q0.4 0 0.6 0.2 0.2 0.3 0.2 0.6l-0.6 2.6q-0.1 0.5-0.7 0.5h-10.9q-0.1 0.9 0 2.4h10.3q0.3 0 0.5 0.2 0.2 0.3 0.1 0.6l-0.5 2.5q0 0.3-0.2 0.5t-0.5 0.1h-8.6q1.1 2.6 3.3 4.2t5.1 1.5q0.4 0 0.8 0t0.8-0.1 0.6-0.1 0.6-0.1 0.4-0.1l0.3-0.1 0.1 0q0.3-0.1 0.5 0 0.3 0.2 0.4 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEur;
}(React.Component));
IconEur.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconEur;
//# sourceMappingURL=eur.js.map