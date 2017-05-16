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
var IconAnchor = (function (_super) {
    __extends(IconAnchor, _super);
    function IconAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAnchor.prototype.render = function () {
        var className = this.name + " " + this.name + "--anchor";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.4 5.7q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m18.6 20.7v7.9q0 0.5-0.4 0.7-0.2 0-0.3 0-0.3 0-0.5-0.2l-2.1-2.1q-2.7 3.2-7.1 5.1t-9.6 1.8-9.6-1.8-7.1-5.1l-2.1 2.1q-0.2 0.2-0.5 0.2-0.1 0-0.3 0-0.4-0.2-0.4-0.7v-7.9q0-0.3 0.2-0.5t0.5-0.2h7.9q0.5 0 0.6 0.5 0.2 0.4-0.1 0.7l-2.2 2.3q1.5 2 4.2 3.4t6 1.8v-14.4h-4.2q-0.6 0-1-0.4t-0.5-1v-2.9q0-0.6 0.5-1t1-0.4h4.2v-3.6q-1.2-0.8-2-2.1t-0.8-2.9q0-2.4 1.7-4t4-1.7 4 1.7 1.7 4q0 1.6-0.8 2.9t-2 2v3.7h4.2q0.6 0 1 0.4t0.5 1v2.9q0 0.6-0.5 1t-1 0.4h-4.2v14.4q3.3-0.4 6-1.8t4.2-3.4l-2.2-2.3q-0.3-0.3-0.1-0.7 0.1-0.5 0.6-0.5h7.9q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAnchor;
}(React.Component));
IconAnchor.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconAnchor;
//# sourceMappingURL=IconAnchor.js.map