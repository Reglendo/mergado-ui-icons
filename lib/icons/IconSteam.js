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
var IconSteam = (function (_super) {
    __extends(IconSteam, _super);
    function IconSteam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSteam.prototype.render = function () {
        var className = this.name + " " + this.name + "--steam";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.3 13q0 2.2-1.6 3.8t-3.8 1.6-3.9-1.6-1.6-3.8 1.6-3.9 3.9-1.6 3.8 1.6 1.6 3.9z m-17.2 16.6q0-2.4-1.6-4t-4-1.6q-0.6 0-1.2 0.1l2.4 0.9q1.7 0.7 2.4 2.4t0 3.4q-0.7 1.7-2.3 2.4t-3.4 0.1q-0.5-0.2-1.4-0.6t-1.4-0.5q0.7 1.3 2 2.1t2.9 0.8q2.4 0 4-1.6t1.6-3.9z m18.6-16.6q0-2.8-2-4.8t-4.9-2q-2.8 0-4.8 2t-2 4.8q0 2.8 2 4.8t4.8 2q2.9 0 4.9-2t2-4.8z m3.3 0q0 4.2-3 7.2t-7.2 3l-9.7 7.1q-0.3 2.9-2.4 4.9t-5.2 1.9q-2.7 0-4.7-1.6t-2.7-4.3l-5.1-2.1v-9.6l8.7 3.5q1.7-1 3.8-1 0.3 0 0.8 0l6.4-9.1q0-4.1 3-7.1t7.1-2.9q4.2 0 7.2 2.9t3 7.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSteam;
}(React.Component));
IconSteam.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconSteam;
//# sourceMappingURL=IconSteam.js.map