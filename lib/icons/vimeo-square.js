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
var IconVimeoSquare = (function (_super) {
    __extends(IconVimeoSquare, _super);
    function IconVimeoSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVimeoSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.8 14.2q0.3-4.8-3.6-4.9-5.1-0.2-6.9 5.8 1-0.4 1.8-0.4 1.9 0 1.7 2.1-0.1 1.3-1.7 3.8t-2.3 2.4q-1 0-1.9-3.8-0.3-1.2-1-5.6-0.6-4.3-3.5-4-1.4 0.2-3.7 2.2l-3.6 3.2 1.1 1.5q1.7-1.1 2-1.1 1.3 0 2.4 4 0.3 1.2 1 3.7t1 3.6q1.5 4 3.6 4 3.6 0 8.6-6.5 4.9-6.4 5-10z m5.5-4.9v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVimeoSquare;
}(React.Component));
IconVimeoSquare.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconVimeoSquare;
//# sourceMappingURL=vimeo-square.js.map