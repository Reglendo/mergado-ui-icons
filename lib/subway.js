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
var IconSubway = (function (_super) {
    __extends(IconSubway, _super);
    function IconSubway() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSubway.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q0.4 0.3 0.2 0.8t-0.7 0.4h-23.5q-0.5 0-0.7-0.4t0.2-0.8l4.7-4.5q-4-0.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5t7.1-2.1h14.3z m-17.9 29.3q1.5 0 2.5-1.1t1.1-2.5-1.1-2.5-2.5-1.1-2.5 1.1-1 2.5 1 2.5 2.5 1.1z m9.3-12.2v-11.4h-12.1v11.4h12.1z m12.2 12.2q1.4 0 2.5-1.1t1-2.5-1-2.5-2.5-1.1-2.6 1.1-1 2.5 1 2.5 2.6 1.1z m3.5-12.2v-11.4h-12.8v11.4h12.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSubway;
}(React.Component));
IconSubway.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconSubway;
//# sourceMappingURL=subway.js.map