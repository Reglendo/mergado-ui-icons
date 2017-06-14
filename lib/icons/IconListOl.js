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
var IconListOl = (function (_super) {
    __extends(IconListOl, _super);
    function IconListOl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconListOl.prototype.render = function () {
        var className = this.name + " " + this.name + "--list-ol " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.5 36.2q0 1.7-1.2 2.8t-3 1q-2.4 0-3.9-1.5l1.3-1.9q1.1 1 2.4 1 0.6 0 1.1-0.4t0.5-0.9q0-1.4-2.4-1.3l-0.6-1.2q0.2-0.2 0.8-1t0.9-1.2 0.8-0.8v-0.1q-0.3 0-1 0.1t-1.1 0v1.2h-2.4v-3.4h7.4v1.9l-2.1 2.6q1.2 0.3 1.8 1.1t0.7 2z m0-14v3.5h-8q-0.2-0.8-0.2-1.2 0-1.1 0.6-2.1t1.2-1.5 1.5-1 1.3-1 0.5-1q0-0.6-0.3-0.9t-0.9-0.3q-1.1 0-1.8 1.3l-1.9-1.3q0.5-1.1 1.6-1.8t2.3-0.6q1.6 0 2.8 0.9t1.1 2.5q0 1.1-0.8 2.1t-1.7 1.4-1.6 1.1-0.8 1.2h2.8v-1.3h2.4z m31.5 7.1v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z m-31.4-20.1v2.2h-7.5v-2.2h2.4q0-0.9 0-2.7t0-2.7v-0.3h0q-0.2 0.4-1.2 1.2l-1.5-1.7 3-2.8h2.4v9h2.4z m31.4 8.7v4.2q0 0.3-0.2 0.5t-0.5 0.3h-27.2q-0.2 0-0.5-0.3t-0.2-0.5v-4.2q0-0.4 0.2-0.6t0.5-0.2h27.2q0.3 0 0.5 0.3t0.2 0.5z m0-11.5v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconListOl;
}(React.Component));
IconListOl.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconListOl;
//# sourceMappingURL=IconListOl.js.map