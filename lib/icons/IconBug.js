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
var IconBug = (function (_super) {
    __extends(IconBug, _super);
    function IconBug() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBug.prototype.render = function () {
        var className = this.name + " " + this.name + "--bug " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.9 21.4q0 0.6-0.4 1t-1 0.5h-5q0 3.8-1.5 6.4l4.6 4.7q0.5 0.4 0.5 1t-0.5 1q-0.4 0.4-1 0.4t-1-0.4l-4.4-4.4q-0.1 0.1-0.3 0.3t-1 0.6-1.4 0.8-1.8 0.7-2.2 0.3v-20h-2.9v20q-1.1 0-2.2-0.3t-2-0.8-1.4-0.8-1-0.8l-0.3-0.3-4.1 4.7q-0.5 0.4-1.1 0.4-0.5 0-1-0.3-0.4-0.4-0.4-1t0.3-1.1l4.5-5q-1.3-2.6-1.3-6.1h-5q-0.5 0-1-0.5t-0.4-1 0.4-1 1-0.4h5v-6.6l-3.8-3.8q-0.4-0.4-0.4-1t0.4-1 1-0.5 1 0.5l3.8 3.8h18.9l3.9-3.8q0.4-0.5 1-0.5t1 0.5 0.4 1-0.4 1l-3.9 3.8v6.6h5q0.6 0 1 0.4t0.4 1z m-10.7-12.8h-14.3q0-3 2.1-5.1t5.1-2.1 5 2.1 2.1 5.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBug;
}(React.Component));
IconBug.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconBug;
//# sourceMappingURL=IconBug.js.map