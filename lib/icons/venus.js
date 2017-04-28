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
var IconVenus = (function (_super) {
    __extends(IconVenus, _super);
    function IconVenus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVenus.prototype.render = function () {
        var className = this.name + " " + this.name + "--venus";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.2 12.9q0 4.9-3.3 8.5t-8.1 4.2v5.8h5q0.3 0 0.5 0.2t0.2 0.5v1.5q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-5h-5q-0.3 0-0.5-0.2t-0.2-0.5v-1.5q0-0.3 0.2-0.5t0.5-0.2h5v-5.8q-3.3-0.3-6-2.3t-4.2-5-1.2-6.5q0.3-3 1.8-5.5t4.1-4.2 5.5-2q3.8-0.4 7.1 1.2t5.3 4.7 1.9 6.9z m-22.8 0q0 4.1 2.9 7t7.1 3 7-3 3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVenus;
}(React.Component));
IconVenus.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconVenus;
//# sourceMappingURL=venus.js.map