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
var IconVenusMars = (function (_super) {
    __extends(IconVenusMars, _super);
    function IconVenusMars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVenusMars.prototype.render = function () {
        var className = this.name + " " + this.name + "--venus-mars";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33 2.9q0-0.3 0.2-0.5t0.5-0.2h5.7q0.5 0 0.9 0.4t0.3 0.9v5.7q0 0.3-0.1 0.5t-0.5 0.1h-1.3q-0.2 0-0.4-0.1t-0.2-0.5v-2.7l-5 5.1q1.5 1.9 2.1 4.3t0.2 4.9q-0.7 3.5-3.3 6.1t-6.2 3.1q-4.4 0.7-8.1-1.8-2.3 1.6-5.1 1.9v2.6h1.9q0.3 0 0.5 0.2t0.1 0.4v1.3q0 0.3-0.1 0.5t-0.5 0.1h-1.9v1.9q0 0.3-0.2 0.5t-0.4 0.2h-1.3q-0.3 0-0.5-0.2t-0.1-0.5v-1.9h-1.9q-0.3 0-0.5-0.1t-0.2-0.5v-1.3q0-0.2 0.2-0.4t0.5-0.2h1.9v-2.6q-3.1-0.4-5.6-2.2t-3.7-4.7-0.8-6.1q0.5-3.7 3.2-6.4t6.3-3.3q4.5-0.6 8.2 1.8 2.9-1.9 6.3-1.9 4 0 7.1 2.5l5.1-5h-2.7q-0.2 0-0.4-0.2t-0.2-0.5v-1.2z m-15.2 22q2.5-2.6 2.5-6.2t-2.5-6.2q-2.6 2.6-2.6 6.2t2.6 6.2z m-15.3-6.2q0 3.7 2.6 6.3t6.3 2.6q2.4 0 4.4-1.1-3.1-3.3-3.1-7.8t3.1-7.7q-2-1.2-4.4-1.2-3.6 0-6.3 2.6t-2.6 6.3z m21.6 8.9q3.7 0 6.3-2.6t2.6-6.3-2.6-6.2-6.3-2.7q-2.3 0-4.3 1.2 3.1 3.3 3.1 7.7t-3.1 7.8q2 1.1 4.3 1.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVenusMars;
}(React.Component));
IconVenusMars.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconVenusMars;
//# sourceMappingURL=venus-mars.js.map