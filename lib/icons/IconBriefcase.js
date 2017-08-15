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
var IconBriefcase = (function (_super) {
    __extends(IconBriefcase, _super);
    function IconBriefcase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBriefcase.prototype.render = function () {
        var className = this.name + " " + this.name + "--briefcase " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.3 5.7h11.4v-2.8h-11.4v2.8z m25.7 14.3v10.7q0 1.5-1 2.5t-2.6 1.1h-32.8q-1.5 0-2.6-1.1t-1-2.5v-10.7h15v3.6q0 0.5 0.4 1t1 0.4h7.2q0.6 0 1-0.4t0.4-1v-3.6h15z m-17.1 0v2.9h-5.8v-2.9h5.8z m17.1-10.7v8.6h-40v-8.6q0-1.5 1.1-2.5t2.5-1.1h7.8v-3.6q0-0.8 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h7.8q1.5 0 2.6 1.1t1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconBriefcase.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconBriefcase;
}(React.Component));
exports.default = IconBriefcase;
//# sourceMappingURL=IconBriefcase.js.map