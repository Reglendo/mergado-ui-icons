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
var IconCopy = (function (_super) {
    __extends(IconCopy, _super);
    function IconCopy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCopy.prototype.render = function () {
        var className = this.name + " " + this.name + "--copy " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.9 8.6q0.9 0 1.5 0.6t0.6 1.5v27.2q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-6.5h-12.2q-0.9 0-1.5-0.6t-0.6-1.5v-15q0-0.9 0.4-2t1.1-1.7l9.1-9.1q0.6-0.6 1.7-1.1t2-0.4h9.3q0.9 0 1.5 0.6t0.6 1.5v7.4q1.5-0.9 2.9-0.9h9.3z m-12.2 4.7l-6.7 6.7h6.7v-6.7z m-14.3-8.5l-6.6 6.6h6.6v-6.6z m4.4 14.4l7.1-7.1v-9.2h-8.6v9.2q0 0.9-0.6 1.6t-1.6 0.6h-9.2v14.3h11.4v-5.7q0-0.9 0.4-2t1.1-1.7z m21.3 17.9v-25.7h-8.5v9.3q0 0.9-0.7 1.5t-1.5 0.7h-9.3v14.2h20z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCopy;
}(React.Component));
IconCopy.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconCopy;
//# sourceMappingURL=IconCopy.js.map