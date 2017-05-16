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
var IconAmbulance = (function (_super) {
    __extends(IconAmbulance, _super);
    function IconAmbulance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAmbulance.prototype.render = function () {
        var className = this.name + " " + this.name + "--ambulance";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13 30.4q0-1.1-0.8-1.8t-1.8-0.8-1.8 0.8-0.8 1.8 0.8 1.8 1.8 0.8 1.8-0.8 0.8-1.8z m-7.8-10.4h7.8v-5.2h-3.2q-0.3 0-0.5 0.2l-3.9 3.9q-0.2 0.3-0.2 0.5v0.6z m26 10.4q0-1.1-0.8-1.8t-1.8-0.8-1.9 0.8-0.7 1.8 0.7 1.8 1.9 0.8 1.8-0.8 0.8-1.8z m2.6-13.6v-3.9q0-0.3-0.2-0.5t-0.5-0.2h-4.5v-4.5q0-0.3-0.2-0.5t-0.5-0.2h-3.9q-0.3 0-0.4 0.2t-0.2 0.5v4.5h-4.6q-0.3 0-0.4 0.2t-0.2 0.5v3.9q0 0.2 0.2 0.4t0.4 0.2h4.6v4.5q0 0.3 0.2 0.5t0.4 0.2h3.9q0.3 0 0.5-0.2t0.2-0.5v-4.5h4.5q0.3 0 0.5-0.2t0.2-0.4z m5.2-11.1v23.4q0 0.5-0.4 0.9t-0.9 0.4h-3.9q0 2.1-1.6 3.7t-3.6 1.5-3.7-1.5-1.5-3.7h-7.8q0 2.1-1.5 3.7t-3.7 1.5-3.7-1.5-1.5-3.7h-2.6q-0.5 0-0.9-0.4t-0.4-0.9 0.4-0.9 0.9-0.4v-8.4q0-0.6 0.3-1.2t0.6-1.1l4-4q0.4-0.4 1.1-0.6t1.1-0.3h3.3v-6.5q0-0.5 0.4-0.9t0.9-0.4h23.4q0.5 0 0.9 0.4t0.4 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAmbulance;
}(React.Component));
IconAmbulance.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconAmbulance;
//# sourceMappingURL=IconAmbulance.js.map