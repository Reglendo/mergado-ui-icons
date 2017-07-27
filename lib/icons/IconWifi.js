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
var IconWifi = (function (_super) {
    __extends(IconWifi, _super);
    function IconWifi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconWifi.prototype.render = function () {
        var className = this.name + " " + this.name + "--wifi " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 32.2q-0.4 0-1.8-1.5t-1.4-1.8q0-0.6 1.2-1t2-0.4 2 0.4 1.2 1q0 0.4-1.4 1.8t-1.8 1.5z m5.2-5.3q0 0-0.8-0.5t-1.9-0.9-2.5-0.5-2.5 0.5-2 0.9-0.8 0.5q-0.3 0-1.8-1.4t-1.4-1.9q0-0.2 0.1-0.4 1.6-1.5 3.9-2.3t4.5-0.9 4.5 0.9 3.8 2.3q0.2 0.2 0.2 0.4 0 0.4-1.5 1.9t-1.8 1.4z m5.3-5.3q-0.2 0-0.4-0.1-2.7-2.1-4.9-3t-5.2-1q-1.7 0-3.3 0.4t-2.9 1.1-2.2 1.2-1.6 1-0.6 0.4q-0.3 0-1.7-1.4t-1.5-1.8q0-0.3 0.2-0.5 2.6-2.5 6.2-3.9t7.4-1.5 7.4 1.5 6.2 3.9q0.2 0.2 0.2 0.5 0 0.3-1.5 1.8t-1.8 1.4z m5.3-5.2q-0.2 0-0.5-0.2-3.4-3.1-7.2-4.6t-8.1-1.5-8.2 1.5-7.2 4.6q-0.2 0.2-0.4 0.2-0.4 0-1.8-1.5t-1.5-1.8q0-0.2 0.2-0.4 3.6-3.6 8.6-5.6t10.3-2 10.2 2 8.6 5.6q0.2 0.2 0.2 0.4 0 0.4-1.4 1.8t-1.8 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconWifi;
}(React.Component));
IconWifi.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconWifi;
//# sourceMappingURL=IconWifi.js.map