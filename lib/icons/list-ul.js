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
var IconListUl = (function (_super) {
    __extends(IconListUl, _super);
    function IconListUl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconListUl.prototype.render = function () {
        var className = this.name + " " + this.name + "--list-ul";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.6 31.4q0 1.8-1.3 3.1t-3 1.2-3.1-1.2-1.2-3.1 1.3-3 3-1.3 3 1.3 1.3 3z m0-11.4q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3 3-1.3 3 1.3 1.3 3z m31.4 9.3v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z m-31.4-20.7q0 1.8-1.3 3t-3 1.3-3.1-1.3-1.2-3 1.3-3.1 3-1.2 3 1.2 1.3 3.1z m31.4 9.3v4.2q0 0.3-0.2 0.5t-0.5 0.3h-27.2q-0.2 0-0.5-0.3t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.3h27.2q0.3 0 0.5 0.3t0.2 0.5z m0-11.5v4.3q0 0.3-0.2 0.5t-0.5 0.2h-27.2q-0.2 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h27.2q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconListUl;
}(React.Component));
IconListUl.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconListUl;
//# sourceMappingURL=list-ul.js.map