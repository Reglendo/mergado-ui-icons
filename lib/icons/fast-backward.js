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
var IconFastBackward = (function (_super) {
    __extends(IconFastBackward, _super);
    function IconFastBackward() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFastBackward.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39 3.1q0.4-0.4 0.7-0.2t0.3 0.7v32.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.2-0.4v15.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.2-0.2-0.3-0.4v15.1q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h2.9q0.6 0 1 0.4t0.4 1v15.1q0.1-0.2 0.3-0.4l15.9-15.9q0.4-0.4 0.7-0.2t0.3 0.7v15.8q0-0.2 0.2-0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFastBackward;
}(React.Component));
IconFastBackward.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconFastBackward;
//# sourceMappingURL=fast-backward.js.map