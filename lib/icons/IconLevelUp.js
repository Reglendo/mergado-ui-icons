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
var IconLevelUp = (function (_super) {
    __extends(IconLevelUp, _super);
    function IconLevelUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLevelUp.prototype.render = function () {
        var className = this.name + " " + this.name + "--level-up " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.2 13.5q-0.4 0.8-1.3 0.8h-4.3v19.3q0 0.3-0.2 0.5t-0.5 0.2h-15.7q-0.5 0-0.6-0.4-0.2-0.5 0.1-0.8l3.5-4.3q0.2-0.2 0.6-0.2h7.1v-14.3h-4.3q-0.9 0-1.3-0.8-0.3-0.9 0.2-1.6l7.2-8.5q0.4-0.5 1.1-0.5t1.1 0.5l7.1 8.5q0.6 0.8 0.2 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLevelUp;
}(React.Component));
IconLevelUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconLevelUp;
//# sourceMappingURL=IconLevelUp.js.map