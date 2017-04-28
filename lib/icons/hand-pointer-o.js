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
var IconHandPointerO = (function (_super) {
    __extends(IconHandPointerO, _super);
    function IconHandPointerO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandPointerO.prototype.render = function () {
        var className = this.name + " " + this.name + "--hand-pointer-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.8 2.9q-1.2 0-2 0.8t-0.9 2v20l-3.3-4.5q-1-1.2-2.4-1.2-1.2 0-2 0.8t-0.8 2.1q0 0.9 0.5 1.7l8.6 11.4q0.9 1.1 2.3 1.1h16q0.5 0 0.9-0.3t0.5-0.7l2.1-8.2q0.5-2.2 0.5-4.4v-4.8q0-0.9-0.6-1.6t-1.6-0.7-1.5 0.7-0.6 1.5h-0.7v-1.4q0-1.1-0.7-1.8t-1.8-0.8q-1 0-1.8 0.8t-0.7 1.7v1.5h-0.7v-2q0-1.3-0.9-2.1t-2-0.9q-1.2 0-2 0.8t-0.8 2v2.2h-0.8v-12.8q0-1.2-0.8-2.1t-2-0.8z m0-2.9q2.4 0 4 1.7t1.7 4.1v5q0.5-0.1 0.7-0.1 2.2 0 3.9 1.6 1-0.5 2.2-0.5 2.5 0 4.1 1.9 0.6-0.1 1.2-0.1 2.1 0 3.6 1.5t1.4 3.6v4.8q0 2.6-0.6 5l-2 8.3q-0.4 1.4-1.6 2.3t-2.6 0.9h-16q-1.4 0-2.6-0.6t-2-1.7l-8.6-11.4q-1.1-1.5-1.1-3.4 0-2.4 1.7-4.1t4-1.7q1.6 0 2.9 0.8v-12.2q0-2.4 1.6-4t4.1-1.7z m2.8 31.4v-8.5h-0.7v8.5h0.7z m5.8 0v-8.5h-0.8v8.5h0.8z m5.7 0v-8.5h-0.7v8.5h0.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandPointerO;
}(React.Component));
IconHandPointerO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconHandPointerO;
//# sourceMappingURL=hand-pointer-o.js.map