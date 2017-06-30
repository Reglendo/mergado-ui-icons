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
var IconFolderOpen = (function (_super) {
    __extends(IconFolderOpen, _super);
    function IconFolderOpen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFolderOpen.prototype.render = function () {
        var className = this.name + " " + this.name + "--folder-open " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.9 21.2q0 0.6-0.6 1.4l-7.2 8.4q-0.9 1.1-2.5 1.9t-3.1 0.7h-23.1q-0.7 0-1.3-0.3t-0.5-0.9q0-0.6 0.6-1.4l7.2-8.4q0.9-1.1 2.5-1.8t3.1-0.8h23.1q0.7 0 1.3 0.3t0.5 0.9z m-7.2-7.3v3.4h-17.7q-2 0-4.2 1t-3.5 2.5l-7.3 8.6q0-0.1 0-0.3t0-0.3v-20.4q0-1.9 1.4-3.3t3.4-1.4h6.8q1.9 0 3.3 1.4t1.4 3.3v0.7h11.6q1.9 0 3.4 1.4t1.4 3.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFolderOpen;
}(React.Component));
IconFolderOpen.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconFolderOpen;
//# sourceMappingURL=IconFolderOpen.js.map