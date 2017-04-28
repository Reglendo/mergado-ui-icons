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
var IconShareAltSquare = (function (_super) {
    __extends(IconShareAltSquare, _super);
    function IconShareAltSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShareAltSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--share-alt-square";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 26.7q0-2-1.4-3.4t-3.4-1.4q-1.9 0-3.2 1.3l-5.4-2.7q0-0.3 0-0.5t0-0.5l5.4-2.7q1.3 1.3 3.2 1.3 2 0 3.4-1.4t1.4-3.4-1.4-3.3-3.4-1.4-3.4 1.4-1.4 3.3q0 0.2 0.1 0.5l-5.4 2.7q-1.4-1.3-3.2-1.3-2 0-3.4 1.4t-1.4 3.4 1.4 3.4 3.4 1.4q1.8 0 3.2-1.3l5.4 2.7q-0.1 0.3-0.1 0.5 0 1.9 1.4 3.3t3.4 1.4 3.4-1.4 1.4-3.3z m5.7-17.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShareAltSquare;
}(React.Component));
IconShareAltSquare.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconShareAltSquare;
//# sourceMappingURL=share-alt-square.js.map