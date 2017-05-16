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
var IconChild = (function (_super) {
    __extends(IconChild, _super);
    function IconChild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconChild.prototype.render = function () {
        var className = this.name + " " + this.name + "--child";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32 12.2l-6.5 6.6v18.3q0 1.1-0.7 1.8t-1.8 0.7-1.8-0.7-0.7-1.8v-8.5h-1.4v8.5q0 1.1-0.8 1.8t-1.7 0.7-1.8-0.7-0.7-1.8v-18.3l-6.5-6.6q-0.7-0.6-0.7-1.5t0.7-1.5 1.5-0.6 1.5 0.6l5.1 5.1h8.2l5.1-5.1q0.6-0.6 1.5-0.6t1.5 0.6 0.6 1.5-0.6 1.5z m-7.2-3.6q0 2-1.5 3.5t-3.5 1.5-3.6-1.5-1.4-3.5 1.4-3.6 3.6-1.4 3.5 1.4 1.5 3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconChild;
}(React.Component));
IconChild.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconChild;
//# sourceMappingURL=IconChild.js.map