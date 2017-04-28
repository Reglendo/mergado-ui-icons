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
var IconApple = (function (_super) {
    __extends(IconApple, _super);
    function IconApple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconApple.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.6 27.1q-0.9 2.8-2.8 5.6-2.8 4.4-5.7 4.4-1.1 0-3.1-0.7-1.9-0.8-3.4-0.8-1.3 0-3.2 0.8-1.8 0.7-2.9 0.7-3.4 0-6.7-5.7-3.3-5.9-3.3-11.3 0-5.1 2.5-8.3 2.5-3.2 6.4-3.2 1.6 0 3.9 0.6 2.3 0.7 3.1 0.7 1 0 3.2-0.7 2.3-0.8 3.8-0.8 2.7 0 4.8 1.4 1.2 0.8 2.3 2.3-1.7 1.5-2.5 2.6-1.5 2.1-1.5 4.6 0 2.8 1.6 5t3.5 2.8z m-8.4-26.2q0 1.4-0.6 3.1-0.7 1.7-2.1 3.1-1.2 1.2-2.4 1.6-0.9 0.2-2.4 0.3 0.1-3.3 1.8-5.7 1.6-2.4 5.6-3.3 0 0.1 0 0.2t0.1 0.3q0 0.1 0 0.2t0 0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconApple;
}(React.Component));
IconApple.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconApple;
//# sourceMappingURL=apple.js.map