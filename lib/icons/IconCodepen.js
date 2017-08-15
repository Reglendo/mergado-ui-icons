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
var IconCodepen = (function (_super) {
    __extends(IconCodepen, _super);
    function IconCodepen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCodepen.prototype.render = function () {
        var className = this.name + " " + this.name + "--codepen " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m4.8 26.1l13.5 9v-8l-7.5-5z m-1.4-3.2l4.3-2.9-4.3-2.9v5.8z m18.3 12.2l13.5-9-6-4-7.5 5v8z m-1.7-11l6.1-4.1-6.1-4.1-6.1 4.1z m-9.2-6.2l7.5-5v-8l-13.5 9z m21.5 2.1l4.3 2.9v-5.8z m-3.1-2.1l6-4-13.5-9v8z m10.8-4v12.2q0 0.9-0.8 1.4l-18.2 12.2q-0.5 0.3-1 0.3t-1-0.3l-18.2-12.2q-0.8-0.5-0.8-1.4v-12.2q0-0.9 0.8-1.4l18.2-12.2q0.5-0.3 1-0.3t1 0.3l18.2 12.2q0.8 0.5 0.8 1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCodepen.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCodepen;
}(React.Component));
exports.default = IconCodepen;
//# sourceMappingURL=IconCodepen.js.map