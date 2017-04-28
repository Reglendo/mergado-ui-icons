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
var IconHandOUp = (function (_super) {
    __extends(IconHandOUp, _super);
    function IconHandOUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandOUp.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 35.7q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m2.8-17q0-4.3-3.7-4.3-0.6 0-1.3 0.2-0.3-0.7-1.1-1.1t-1.7-0.4-1.5 0.4q-1.1-1.2-2.7-1.2-0.5 0-1.2 0.2t-1.1 0.6v-7.4q0-1.1-0.8-2t-2-0.8q-1.2 0-2 0.8t-0.9 2v12.9q-0.4 0-1.1-0.4t-1.2-0.7-1.5-0.7-1.9-0.4q-1.5 0-2.2 1t-0.6 2.6q0 0.5 3.1 2 0.9 0.5 1.4 0.8 1.4 0.9 3.2 2.5 1.9 1.6 2.4 2.3 1.3 1.5 1.3 3.1v0.7h14.3v-0.7q0-1.6 0.7-3.7t1.4-4.3 0.7-4z m2.9-0.1q0 2.9-1.6 7.1-1.3 3.7-1.3 5v6.4q0 1.2-0.8 2.1t-2 0.8h-14.3q-1.2 0-2-0.8t-0.9-2.1v-6.4q0-0.2-0.1-0.5t-0.3-0.5-0.4-0.5-0.5-0.5-0.5-0.5-0.4-0.4-0.4-0.3q-1.7-1.5-2.9-2.3-0.5-0.2-1.4-0.7t-1.6-0.8-1.4-0.9-1.1-1.2-0.4-1.6q0-2.8 1.5-4.6t4.2-1.8q1.5 0 2.9 0.5v-8.4q0-2.3 1.7-4t4-1.7q2.3 0 4 1.7t1.7 4v3.8q1.4 0.1 2.7 0.8 0.4-0.1 0.9-0.1 2.3 0 4 1.4 3.1 0 4.9 1.9t1.8 5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandOUp;
}(React.Component));
IconHandOUp.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconHandOUp;
//# sourceMappingURL=hand-o-up.js.map