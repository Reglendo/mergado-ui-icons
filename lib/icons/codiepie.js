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
var IconCodiepie = (function (_super) {
    __extends(IconCodiepie, _super);
    function IconCodiepie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCodiepie.prototype.render = function () {
        var className = this.name + " " + this.name + "--codiepie";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.6 15.2q1.2 0 1.9 0.6t0.7 1.9-0.8 1.8-2 0.6h-3.1v3.9h-0.5v-8.8h3.8z m3.6 13.1l-0.1 0.3-0.1 0.2q-2.6 5.1-7.4 8.2t-10.6 3q-4.1 0-7.8-1.6t-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6q5.4 0 10.1 2.8t7.4 7.5l0.2 0.5q-0.6 0.3-3 1.5t-3.7 1.9q-0.1 0-10.7 6 8.6 4 17.9 8.1z m-18.2 11.2q5.6 0 10.3-3t7.2-7.9l-6.4-2.9q-1.6 3.1-4.6 4.9t-6.5 1.9q-3.4 0-6.2-1.7t-4.6-4.5-1.7-6.3 1.7-6.2 4.6-4.6 6.2-1.7 6.3 1.7 4.5 4.5l6.3-3.2q-2.6-4.6-7.2-7.3t-9.9-2.7q-2.7 0-5.2 0.7t-4.7 1.9-3.9 3.1-3.1 3.9-1.9 4.7-0.7 5.2 0.7 5.2 1.9 4.7 3.1 3.9 3.9 3.1 4.7 1.9 5.2 0.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCodiepie;
}(React.Component));
IconCodiepie.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCodiepie;
//# sourceMappingURL=codiepie.js.map