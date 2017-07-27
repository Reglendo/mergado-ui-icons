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
var IconLeanpub = (function (_super) {
    __extends(IconLeanpub, _super);
    function IconLeanpub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLeanpub.prototype.render = function () {
        var className = this.name + " " + this.name + "--leanpub " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.7 10.2l3.1 24.7q-2.6 0-5-1.1-3.9-1.8-7.7-1.8-4.4 0-7.2 2.9-2.9-2.9-7.3-2.9-3.7 0-7.6 1.8-2.5 1.1-4.9 1.1h-0.1l3-24.7q4.4-2.4 9.4-2.4 4.5 0 7.5 2 3-2 7.5-2 5 0 9.3 2.4z m-9.6 19.2q2.5 0 4.5 0.5t5.1 1.8l-2.4-19.8q-3.3-1.5-7.2-1.5-4.3 0-7.2 2.7-2.9-2.7-7.3-2.7-3.8 0-7.1 1.5l-2.4 19.8q2-0.8 3.2-1.2t2.9-0.8 3.4-0.3q3.9 0 7.3 2.1 3.3-2.1 7.2-2.1z m0.8-0.7l-1.1-17.6q-4.1 0.1-6.9 3-3-3-7.3-3-3.4 0-6.5 1.3l-2.2 18.3q2.4-1 4.4-1.5t4.3-0.5q4.1 0 7.3 2 3.3-2.1 7.2-2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLeanpub;
}(React.Component));
IconLeanpub.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconLeanpub;
//# sourceMappingURL=IconLeanpub.js.map