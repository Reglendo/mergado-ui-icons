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
var IconFlag = (function (_super) {
    __extends(IconFlag, _super);
    function IconFlag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFlag.prototype.render = function () {
        var className = this.name + " " + this.name + "--flag " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m7 6.1q0 1.5-1.4 2.4v27.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-27.5q-1.4-0.9-1.4-2.4 0-1.2 0.8-2t2-0.8 2 0.8 0.8 2z m32 1.4v16.6q0 0.5-0.2 0.8t-0.9 0.6q-4.7 2.5-8 2.5-1.4 0-2.7-0.4t-2.4-1.1-2.5-1-3.1-0.5q-4.2 0-10.1 3.2-0.4 0.2-0.7 0.2-0.6 0-1-0.4t-0.4-1v-16.2q0-0.7 0.6-1.2 0.5-0.3 1.8-0.9 5.1-2.6 9.1-2.6 2.4 0 4.4 0.6t4.8 1.9q0.8 0.4 1.9 0.4 1.1 0 2.5-0.4t2.4-1.1 1.9-1 1.2-0.4q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconFlag.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconFlag;
}(React.Component));
exports.default = IconFlag;
//# sourceMappingURL=IconFlag.js.map