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
var IconTrophy = (function (_super) {
    __extends(IconTrophy, _super);
    function IconTrophy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTrophy.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.7 19.7q-1.6-3.6-1.6-8.3h-5.7v2.2q0 1.7 2.1 3.6t5.2 2.5z m24.1-6.1v-2.2h-5.7q0 4.7-1.7 8.3 3.2-0.6 5.3-2.5t2.1-3.6z m2.8-2.9v2.9q0 1.6-0.9 3.2t-2.5 2.9-3.8 2.1-4.9 1q-0.9 1.2-2.1 2.2-0.8 0.7-1.1 1.6t-0.4 2q0 1.2 0.7 2t2.2 0.8q1.7 0 3 1t1.3 2.6v1.4q0 0.3-0.2 0.5t-0.5 0.2h-18.6q-0.3 0-0.5-0.2t-0.2-0.5v-1.4q0-1.5 1.3-2.6t3-1q1.5 0 2.1-0.8t0.7-2q0-1.2-0.3-2t-1.2-1.6q-1.2-1-2.1-2.2-2.5-0.1-4.8-1t-3.9-2.1-2.5-2.9-0.9-3.2v-2.9q0-0.9 0.6-1.5t1.5-0.6h6.5v-2.2q0-1.4 1-2.5t2.5-1h12.9q1.5 0 2.5 1t1.1 2.5v2.2h6.4q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTrophy;
}(React.Component));
IconTrophy.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconTrophy;
//# sourceMappingURL=trophy.js.map