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
var IconBullhorn = (function (_super) {
    __extends(IconBullhorn, _super);
    function IconBullhorn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBullhorn.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.1 14.3q1.2 0 2.1 0.8t0.8 2-0.8 2.1-2.1 0.8v8.6q0 1.1-0.8 2t-2 0.8q-9.3-7.7-18.1-8.5-1.3 0.5-2.1 1.5t-0.7 2.3 0.9 2q-0.4 0.8-0.5 1.5t0.2 1.3 0.7 1.2 1.1 1.1 1.3 1.2q-0.6 1.2-2.4 1.8t-3.8 0.3-2.9-1.3q-0.2-0.5-0.7-1.9t-0.7-2.1-0.5-2-0.4-2.3 0.1-2.2 0.5-2.4h-2.7q-1.5 0-2.5-1.1t-1.1-2.5v-4.3q0-1.5 1.1-2.5t2.5-1.1h10.7q9.7 0 20-8.5 1.1 0 2 0.8t0.8 2v8.6z m-2.8 13.5v-21.3q-8.8 6.7-17.2 7.6v6.1q8.5 0.9 17.2 7.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBullhorn;
}(React.Component));
IconBullhorn.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconBullhorn;
//# sourceMappingURL=bullhorn.js.map