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
var IconTree = (function (_super) {
    __extends(IconTree, _super);
    function IconTree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTree.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.6 32.9q0 0.5-0.5 1t-1 0.4h-10.3q0.1 0.4 0.2 1.9t0.1 2.5q0 0.5-0.4 0.9t-1 0.4h-7.1q-0.6 0-1-0.4t-0.4-0.9q0-0.9 0.1-2.5t0.2-1.9h-10.4q-0.5 0-1-0.4t-0.4-1 0.4-1l9-9h-5.1q-0.6 0-1-0.5t-0.4-1 0.4-1l9-9h-4.4q-0.6 0-1-0.4t-0.5-1 0.5-1l8.5-8.6q0.5-0.4 1-0.4t1 0.4l8.6 8.6q0.4 0.4 0.4 1t-0.4 1-1 0.4h-4.4l9 9q0.4 0.4 0.4 1t-0.4 1-1 0.5h-5.1l8.9 8.9q0.5 0.5 0.5 1.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTree;
}(React.Component));
IconTree.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconTree;
//# sourceMappingURL=tree.js.map