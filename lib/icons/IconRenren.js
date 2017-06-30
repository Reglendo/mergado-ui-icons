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
var IconRenren = (function (_super) {
    __extends(IconRenren, _super);
    function IconRenren() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRenren.prototype.render = function () {
        var className = this.name + " " + this.name + "--renren " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.3 35q-3.8 2.1-8.2 2.1-4.4 0-8.2-2.1 3.1-1.9 5.2-4.7t3-5.9q0.8 3.2 2.9 5.9t5.3 4.7z m-11.1-31.8v10.8q0 5.6-2.8 10.3t-7.4 6.8q-4-4.8-4-11.1 0-4.1 1.9-7.8t5.1-6 7.2-3z m20.1 16.8q0 6.3-4.1 11.1-4.5-2.2-7.3-6.8t-2.9-10.3v-10.8q4 0.6 7.3 3t5.1 6 1.9 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRenren;
}(React.Component));
IconRenren.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconRenren;
//# sourceMappingURL=IconRenren.js.map