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
var IconOpenid = (function (_super) {
    __extends(IconOpenid, _super);
    function IconOpenid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconOpenid.prototype.render = function () {
        var className = this.name + " " + this.name + "--openid " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.2 0v34.3l-6 2.8q-5.1-0.4-9.3-2.2t-6.5-4.7-2.4-6.1q0-3.1 2.2-5.9t6.2-4.5 8.7-2.4v3.8q-4.8 0.8-7.9 3.3t-3.2 5.7q0 3.4 3.5 6t8.7 3.2v-30.3z m15 13l0.8 8.7-11.7-2.6 3.3-1.8q-2.7-1.6-6.3-2.2v-3.9q6.2 0.8 10.7 3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconOpenid.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconOpenid;
}(React.Component));
exports.default = IconOpenid;
//# sourceMappingURL=IconOpenid.js.map