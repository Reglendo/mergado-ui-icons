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
var IconTwitch = (function (_super) {
    __extends(IconTwitch, _super);
    function IconTwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTwitch.prototype.render = function () {
        var className = this.name + " " + this.name + "--twitch";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20 9.7v9.7h-3.2v-9.7h3.2z m8.9 0v9.7h-3.3v-9.7h3.3z m0 17l5.6-5.7v-17.8h-26.6v23.4h7.3v4.9l4.8-4.9h8.9z m8.9-26.7v22.6l-9.7 9.7h-7.3l-4.8 4.8h-4.9v-4.8h-8.9v-25.8l2.5-6.5h33.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTwitch;
}(React.Component));
IconTwitch.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTwitch;
//# sourceMappingURL=IconTwitch.js.map