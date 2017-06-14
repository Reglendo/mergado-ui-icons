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
var IconHandGrabO = (function (_super) {
    __extends(IconHandGrabO, _super);
    function IconHandGrabO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandGrabO.prototype.render = function () {
        var className = this.name + " " + this.name + "--hand-grab-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 8.6q-1.1 0-2 0.8t-0.8 2v2.9h-0.7v-2.1q0-1.1-0.7-1.8t-1.8-0.8q-1.1 0-1.8 0.8t-0.7 1.7v9.6l-0.7-0.7v-3.8q0-1.1-0.8-1.8t-1.7-0.8q-1.1 0-1.8 0.8t-0.7 1.7v5q0 1.1 0.7 1.9l7 6.6q0.8 0.8 0.8 2.3 0 0.5 0.5 1t1 0.4h14.2q0.6 0 1-0.4t0.5-1v-0.6q0-0.9 0.2-1.7l2.4-9.8q0.2-0.8 0.2-1.7v-5.5q0-1-0.7-1.8t-1.8-0.7q-1 0-1.7 0.7t-0.8 1.8v0.7h-0.7v-2.8q0-0.9-0.5-1.6t-1.5-0.9q-0.3-0.1-0.5-0.1-1 0-1.8 0.8t-0.7 1.7v2.9h-0.7v-2.7q0-1.2-0.7-2t-1.9-1q-0.1 0-0.3 0z m0-2.9q1.9 0 3.4 1.1 1.2-0.7 2.7-0.7 1.3 0 2.5 0.6t1.9 1.7q0.6-0.2 1.3-0.2 2.3 0 3.8 1.6t1.6 3.8v5.5q0 1.2-0.3 2.4l-2.4 9.8q-0.2 0.5-0.2 1.6 0 1.7-1.2 3t-3.1 1.2h-14.2q-1.9 0-3.1-1.3t-1.2-3.1l-6.9-6.7q-1.7-1.6-1.7-3.9v-5q0-2.2 1.6-3.7t3.8-1.6q0.2 0 0.3 0 0.1-2.1 1.7-3.6t3.7-1.4q1.1 0 2.2 0.5 1.6-1.6 3.8-1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandGrabO;
}(React.Component));
IconHandGrabO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconHandGrabO;
//# sourceMappingURL=IconHandGrabO.js.map