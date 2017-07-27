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
var IconGlideG = (function (_super) {
    __extends(IconGlideG, _super);
    function IconGlideG() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGlideG.prototype.render = function () {
        var className = this.name + " " + this.name + "--glide-g " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.6 6.8q0-0.5 0-0.9t-0.2-0.6-0.5-0.5-0.8-0.2q-0.9 0-1.8 0.5-2.3 1.3-3.5 4.3t-1.2 6q0 1 0.2 1.9t0.6 1.8 1.1 1.4 1.8 0.5q0.1 0 0.4 0t0.5 0 0.3-0.1 0.4-0.1 0.1-0.4q0.4-1.7 1.1-5.2t1.1-5.1q0.4-2.1 0.4-3.3z m16.8 14.7q0 0.1-0.1 0.3t-0.4 0.1l-0.1 0q-0.5-0.1-1.4-0.3t-1.6-0.2-1.4-0.1q-3.7 0-7.8 2-0.4 0.2-0.5 0.6-0.2 0.8-0.6 2.4t-0.5 2.2q-0.5 2.1-1.5 4t-2.5 3.7-3.5 2.8-4.1 1q-3 0-4.8-1.9t-1.8-4.9q0-1.1 0.5-2.6t1.4-2.6 2.1-1.1q0.9 0 2.7 0.7t1.9 1.4q0 0-0.4 0.3t-0.9 0.6-1 1-0.9 1.4-0.3 1.7q0 0.7 0.3 1.1t1.1 0.5q1 0 1.9-0.7t1.5-1.8 1.1-2.3 0.7-2.4 0.4-2v-0.2q0-0.1-0.1-0.1t-0.2 0h-0.2l-0.3 0-0.1 0q-5.1 0-7.8-2.7t-2.8-7.8q0-2.4 0.7-4.9t2.2-4.7 3.5-3.8 4.5-2q1.2-0.2 2.4-0.2 8.3 0 8.3 8.1 0 2.1-0.8 6.1t-1 4.7l0.1 0q2.2-1.2 4.1-1.9t3.7-0.7q0.5 0 1.2 0.3 0.4 0.1 1.8 2.3t1.3 2.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGlideG;
}(React.Component));
IconGlideG.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconGlideG;
//# sourceMappingURL=IconGlideG.js.map