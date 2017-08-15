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
var IconHeartbeat = (function (_super) {
    __extends(IconHeartbeat, _super);
    function IconHeartbeat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHeartbeat.prototype.render = function () {
        var className = this.name + " " + this.name + "--heartbeat " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 22.9h6.8q-0.1 0.1-0.2 0.2t-0.2 0.2l-0.1 0-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.1 0-0.5-0.4h8.3q0.4 0 0.8-0.3t0.5-0.8l1.6-6.3 4.2 14.9q0.2 0.4 0.6 0.7t0.8 0.3q0.5 0 0.9-0.3t0.5-0.7l3.2-10.8 1.3 2.5q0.4 0.8 1.3 0.8z m11.4-9.6q0 3.2-2.3 6.7h-8.2l-2.5-4.9q-0.2-0.4-0.6-0.6t-0.8-0.2q-1 0.1-1.2 1l-2.9 9.6-4.4-15.3q-0.1-0.4-0.5-0.7t-0.9-0.3-0.9 0.3-0.5 0.7l-2.6 10.4h-9.4q-2.3-3.5-2.3-6.7 0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconHeartbeat.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconHeartbeat;
}(React.Component));
exports.default = IconHeartbeat;
//# sourceMappingURL=IconHeartbeat.js.map