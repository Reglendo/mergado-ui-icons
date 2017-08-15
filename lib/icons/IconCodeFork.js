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
var IconCodeFork = (function (_super) {
    __extends(IconCodeFork, _super);
    function IconCodeFork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCodeFork.prototype.render = function () {
        var className = this.name + " " + this.name + "--code-fork " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.9 32.9q0-0.9-0.6-1.6t-1.5-0.6-1.5 0.6-0.7 1.6 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m0-25.8q0-0.8-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.6 1.5 0.6 1.5-0.6 0.6-1.6z m14.3 2.9q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m2.2 0q0 1.2-0.6 2.2t-1.6 1.5q0 6.4-5 9.2-1.6 0.9-4.6 1.9-2.8 0.8-3.7 1.5t-1 2.3v0.5q1 0.6 1.6 1.6t0.6 2.2q0 1.7-1.3 3t-3 1.2-3.1-1.2-1.2-3q0-1.2 0.6-2.2t1.5-1.5v-18.4q-0.9-0.5-1.5-1.5t-0.6-2.2q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3q0 1.2-0.6 2.2t-1.6 1.5v11.1q1.2-0.5 3.5-1.2 1.2-0.4 1.9-0.7t1.6-0.7 1.3-0.9 0.9-1.1 0.6-1.6 0.2-2q-1-0.6-1.5-1.5t-0.6-2.2q0-1.8 1.2-3t3.1-1.3 3 1.3 1.3 3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCodeFork.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCodeFork;
}(React.Component));
exports.default = IconCodeFork;
//# sourceMappingURL=IconCodeFork.js.map