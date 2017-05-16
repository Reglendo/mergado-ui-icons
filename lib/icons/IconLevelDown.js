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
var IconLevelDown = (function (_super) {
    __extends(IconLevelDown, _super);
    function IconLevelDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLevelDown.prototype.render = function () {
        var className = this.name + " " + this.name + "--level-down";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m9.2 5.7h15.7q0.3 0 0.5 0.2t0.2 0.6v19.2h4.3q0.9 0 1.3 0.8t-0.2 1.6l-7.1 8.6q-0.4 0.4-1.1 0.4t-1.1-0.4l-7.1-8.6q-0.6-0.7-0.2-1.6 0.4-0.8 1.2-0.8h4.3v-14.3h-7.1q-0.3 0-0.6-0.2l-3.5-4.3q-0.3-0.3-0.1-0.8 0.2-0.4 0.6-0.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLevelDown;
}(React.Component));
IconLevelDown.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconLevelDown;
//# sourceMappingURL=IconLevelDown.js.map