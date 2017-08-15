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
var IconSoundcloud = (function (_super) {
    __extends(IconSoundcloud, _super);
    function IconSoundcloud() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSoundcloud.prototype.render = function () {
        var className = this.name + " " + this.name + "--soundcloud " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.7 28.3l0.3-4.2-0.3-9.1q0-0.2-0.1-0.3t-0.3-0.2q-0.2 0-0.3 0.2t-0.1 0.3l-0.2 9.1 0.2 4.2q0 0.2 0.1 0.3t0.3 0.1q0.4 0 0.4-0.4z m5.2-0.5l0.2-3.7-0.2-10.2q0-0.3-0.2-0.4-0.2-0.1-0.3-0.1t-0.3 0.1q-0.2 0.1-0.2 0.4l0 0.1-0.2 10.1q0 0 0.2 4.1v0.1q0 0.1 0.1 0.3 0.1 0.2 0.4 0.2 0.2 0 0.3-0.2 0.2-0.1 0.2-0.4z m-18.3-5.9l0.4 2.2-0.4 2.2q0 0.2-0.1 0.2t-0.2-0.2l-0.3-2.2 0.3-2.2q0-0.2 0.2-0.2t0.1 0.2z m1.5-1.4l0.5 3.6-0.5 3.6q0 0.1-0.2 0.1-0.1 0-0.1-0.1l-0.4-3.6 0.4-3.6q0-0.2 0.1-0.2 0.2 0 0.2 0.2z m1.6-0.7l0.5 4.3-0.5 4.2q0 0.2-0.2 0.2-0.1 0-0.2-0.2l-0.3-4.2 0.3-4.3q0.1-0.2 0.2-0.2 0.2 0 0.2 0.2z m1.7-0.1l0.4 4.4-0.4 4.3q-0.1 0.2-0.3 0.2-0.2 0-0.2-0.2l-0.4-4.3 0.4-4.4q0-0.2 0.2-0.2 0.2 0 0.3 0.2z m1.6 0.3l0.4 4.1-0.4 4.3q0 0.3-0.3 0.3-0.1 0-0.1-0.1t-0.1-0.2l-0.4-4.3 0.4-4.1q0-0.1 0.1-0.2t0.1 0q0.3 0 0.3 0.2z m1.7-2.5l0.3 6.6-0.3 4.3q0 0.1-0.1 0.2t-0.2 0.1q-0.3 0-0.3-0.3l-0.4-4.3 0.4-6.6q0-0.4 0.3-0.4 0.1 0 0.2 0.1t0.1 0.3z m1.6-1.5l0.3 8.1-0.3 4.3q0 0.2-0.1 0.3t-0.2 0.1q-0.3 0-0.4-0.4l-0.2-4.3 0.2-8.1q0.1-0.4 0.4-0.4 0.1 0 0.2 0.1t0.1 0.3z m1.7-0.7l0.3 8.8-0.3 4.3q0 0.3-0.4 0.3-0.3 0-0.3-0.3l-0.3-4.3 0.3-8.8q0-0.2 0.1-0.3t0.2-0.1q0.2 0 0.3 0.1t0.1 0.3z m6.9 12.9z m-3.5-13l0.3 8.9-0.3 4.2q0 0.2-0.1 0.3t-0.3 0.1-0.3-0.1-0.2-0.3l-0.2-4.2 0.2-8.9q0-0.2 0.2-0.3t0.3-0.2 0.3 0.2 0.1 0.3z m1.8 0.3l0.2 8.6-0.2 4.2q0 0.2-0.2 0.3t-0.3 0.1-0.3-0.1-0.2-0.3l-0.2-4.2 0.2-8.6q0-0.2 0.2-0.3t0.3-0.2 0.3 0.2 0.2 0.3z m3.7 8.6l-0.3 4.1q0 0.2-0.1 0.4t-0.4 0.1-0.4-0.1-0.2-0.4l-0.1-2-0.1-2.1 0.2-11.1v-0.1q0.1-0.2 0.2-0.4 0.2-0.1 0.4-0.1 0.1 0 0.2 0.1 0.3 0.1 0.3 0.4z m19.4-0.3q0 2-1.4 3.5t-3.5 1.4h-13.8q-0.2 0-0.4-0.2t-0.1-0.3v-15.8q0-0.4 0.5-0.6 1.5-0.6 3.1-0.6 3.5 0 6 2.3t2.8 5.7q0.9-0.4 1.9-0.4 2 0 3.5 1.5t1.4 3.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSoundcloud.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSoundcloud;
}(React.Component));
exports.default = IconSoundcloud;
//# sourceMappingURL=IconSoundcloud.js.map