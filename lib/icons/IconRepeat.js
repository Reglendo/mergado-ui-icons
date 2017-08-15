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
var IconRepeat = (function (_super) {
    __extends(IconRepeat, _super);
    function IconRepeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRepeat.prototype.render = function () {
        var className = this.name + " " + this.name + "--repeat " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 5.7v10q0 0.6-0.4 1t-1 0.4h-10q-1 0-1.4-0.9-0.3-0.8 0.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4 0.9t-3.6 2.4-2.5 3.7-0.9 4.4 0.9 4.4 2.5 3.7 3.6 2.4 4.4 0.9q2.7 0 5.1-1.1t4-3.3q0.1-0.2 0.5-0.3 0.3 0 0.5 0.2l3.1 3.1q0.2 0.2 0.2 0.5t-0.2 0.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.3q3.3 0 6.4 1.2t5.5 3.5l2.9-2.9q0.6-0.7 1.5-0.3 0.9 0.4 0.9 1.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconRepeat.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconRepeat;
}(React.Component));
exports.default = IconRepeat;
//# sourceMappingURL=IconRepeat.js.map