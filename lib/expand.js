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
var IconExpand = (function (_super) {
    __extends(IconExpand, _super);
    function IconExpand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconExpand.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 23.6q0 0.3-0.3 0.5l-7.4 7.4 3.2 3.2q0.5 0.4 0.5 1t-0.5 1-1 0.4h-10q-0.6 0-1-0.4t-0.4-1v-10q0-0.6 0.4-1t1-0.4 1 0.4l3.2 3.2 7.5-7.4q0.2-0.2 0.5-0.2t0.5 0.2l2.5 2.6q0.3 0.2 0.3 0.5z m17.4-19.3v10q0 0.6-0.4 1t-1 0.4-1-0.4l-3.3-3.2-7.4 7.4q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.5-2.6q-0.3-0.2-0.3-0.5t0.3-0.5l7.4-7.4-3.2-3.2q-0.5-0.4-0.5-1t0.5-1 1-0.4h10q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconExpand;
}(React.Component));
IconExpand.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconExpand;
//# sourceMappingURL=expand.js.map