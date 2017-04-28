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
var IconSimplybuilt = (function (_super) {
    __extends(IconSimplybuilt, _super);
    function IconSimplybuilt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSimplybuilt.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16.8 22.6q0-2.1-1.6-3.7t-3.7-1.5-3.7 1.5-1.6 3.7 1.6 3.7 3.7 1.6 3.7-1.6 1.6-3.7z m16.7 0q0-2.2-1.5-3.7t-3.7-1.5-3.8 1.5-1.5 3.7q0 2.2 1.5 3.7t3.8 1.6 3.7-1.6 1.5-3.7z m6.3-15.7v26.2q0 0.8-0.7 1.4t-1.4 0.7h-35.6q-0.9 0-1.5-0.7t-0.6-1.4v-26.2q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4v3.1h14.6v-3.1q0-0.8 0.6-1.4t1.5-0.7h8.4q0.8 0 1.4 0.7t0.7 1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSimplybuilt;
}(React.Component));
IconSimplybuilt.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconSimplybuilt;
//# sourceMappingURL=simplybuilt.js.map