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
var IconPuzzlePiece = (function (_super) {
    __extends(IconPuzzlePiece, _super);
    function IconPuzzlePiece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPuzzlePiece.prototype.render = function () {
        var className = this.name + " " + this.name + "--puzzle-piece";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.6 24.5q0 1.8-1 3t-2.7 1.2q-0.9 0-1.7-0.4t-1.4-0.8-1.2-0.9-1.6-0.3q-2.5 0-2.5 2.7 0 0.9 0.4 2.6t0.3 2.6v0.1q-0.5 0-0.7 0-0.8 0.1-2.2 0.2t-2.6 0.3-2.1 0.2q-1.4 0-2.3-0.6t-1-1.9q0-0.8 0.4-1.6t0.9-1.2 0.8-1.4 0.4-1.7q0-1.8-1.2-2.8t-3-0.9q-1.9 0-3.2 1t-1.3 2.8q0 1 0.3 1.9t0.8 1.4 0.7 1.2 0.3 1.1q0 1-1 2-0.8 0.8-2.6 0.8-2.1 0-5.5-0.5-0.2-0.1-0.6-0.1t-0.6-0.1l-0.3-0.1q0 0-0.1 0 0 0 0 0v-22.9q0 0 0.4 0.1t0.7 0.1 0.5 0.1q3.4 0.5 5.5 0.5 1.8 0 2.6-0.7 1-1 1-2 0-0.5-0.3-1.2t-0.7-1.1-0.8-1.5-0.3-1.8q0-1.9 1.3-2.9t3.2-1q1.8 0 3 1t1.2 2.8q0 0.9-0.4 1.7t-0.8 1.3-0.9 1.3-0.4 1.5q0 1.3 1 1.9t2.3 0.6q1.4 0 4-0.3t3.6-0.4v0q0 0.1-0.1 0.4t-0.1 0.8-0.1 0.5q-0.5 3.3-0.5 5.4 0 1.8 0.8 2.6 1 1.1 2 1.1 0.5 0 1.1-0.4t1.2-0.7 1.4-0.8 1.9-0.3q1.8 0 2.8 1.3t1 3.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPuzzlePiece;
}(React.Component));
IconPuzzlePiece.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconPuzzlePiece;
//# sourceMappingURL=IconPuzzlePiece.js.map