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
var IconUserMd = (function (_super) {
    __extends(IconUserMd, _super);
    function IconUserMd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconUserMd.prototype.render = function () {
        var className = this.name + " " + this.name + "--user-md " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.1 30q0 0.6-0.5 1t-1 0.4-1-0.4-0.4-1 0.4-1 1-0.4 1 0.4 0.5 1z m22.8 1.4q0 2.7-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.6 0.1-3t0.6-3 1-3 1.8-2.3 2.7-1.4q-0.5 1.2-0.5 2.7v4.6q-1.3 0.4-2.1 1.5t-0.7 2.5q0 1.8 1.2 3t3 1.3 3.1-1.3 1.2-3q0-1.4-0.8-2.5t-2-1.5v-4.6q0-1.4 0.5-2 3 2.3 6.6 2.3t6.6-2.3q0.6 0.6 0.6 2v1.5q-2.4 0-4.1 1.6t-1.7 4.1v2q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.6t1.5 0.6 1.5-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.2 0.9-2t2-0.9 2 0.9 0.8 2v2q-0.7 0.6-0.7 1.5 0 0.9 0.6 1.6t1.5 0.6 1.6-0.6 0.6-1.6q0-0.9-0.7-1.5v-2q0-1.5-0.8-2.9t-2.1-2.1q0-0.2 0-0.9t0-1.1 0-0.9-0.2-1.1-0.3-0.8q1.5 0.3 2.7 1.3t1.8 2.3 1.1 3 0.5 3 0.1 3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconUserMd;
}(React.Component));
IconUserMd.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconUserMd;
//# sourceMappingURL=IconUserMd.js.map