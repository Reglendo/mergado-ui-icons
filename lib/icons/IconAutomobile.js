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
var IconAutomobile = (function (_super) {
    __extends(IconAutomobile, _super);
    function IconAutomobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAutomobile.prototype.render = function () {
        var className = this.name + " " + this.name + "--automobile";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m9.3 23.7q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m0.7-6.2h19.7l-1.7-6.9q0-0.2-0.3-0.4t-0.4-0.1h-14.9q-0.2 0-0.4 0.1t-0.3 0.4z m26.6 6.2q0-1.3-0.9-2.2t-2.2-0.9-2.2 0.9-0.9 2.2 0.9 2.2 2.2 0.9 2.2-0.9 0.9-2.2z m3.2-1.8v7.4q0 0.3-0.2 0.5t-0.5 0.1h-1.8v2.5q0 1.6-1.1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-19.9v2.5q0 1.6-1 2.7t-2.7 1-2.6-1-1.1-2.7v-2.5h-1.9q-0.3 0-0.4-0.1t-0.2-0.5v-7.4q0-1.8 1.3-3.1t3-1.3h0.6l2-8.1q0.5-1.8 2-3.1t3.5-1.2h14.9q1.9 0 3.5 1.2t2 3.1l2.1 8.1h0.5q1.8 0 3.1 1.3t1.3 3.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAutomobile;
}(React.Component));
IconAutomobile.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconAutomobile;
//# sourceMappingURL=IconAutomobile.js.map