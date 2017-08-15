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
var IconFolder = (function (_super) {
    __extends(IconFolder, _super);
    function IconFolder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFolder.prototype.render = function () {
        var className = this.name + " " + this.name + "--folder " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.6 13.6v15.7q0 2-1.4 3.5t-3.6 1.5h-27.1q-2.1 0-3.5-1.5t-1.5-3.5v-21.4q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v0.7h15q2.1 0 3.6 1.4t1.4 3.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconFolder.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconFolder;
}(React.Component));
exports.default = IconFolder;
//# sourceMappingURL=IconFolder.js.map