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
var IconHandSpockO = (function (_super) {
    __extends(IconHandSpockO, _super);
    function IconHandSpockO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHandSpockO.prototype.render = function () {
        var className = this.name + " " + this.name + "--hand-spock-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16.9 4.1q-1 0-1.6 0.7t-0.7 1.7q0 0.3 0.1 0.5l3.1 13h-0.5l-2.4-10q-0.2-0.8-0.9-1.3t-1.4-0.5q-1 0-1.6 0.7t-0.7 1.7q0 0.2 0.1 0.6 0 0.3 0.8 3.3t1.4 5.9 0.7 2.9v4.7l-6.4-4.8q-0.7-0.5-1.6-0.5-1.1 0-1.9 0.7t-0.7 1.9q0 1.3 1.1 2.2l10.5 7.9q0.8 0.5 1.6 0.5h14.4q0.7 0 1.3-0.4t0.7-1.1l2-8.3q0.2-0.6 0.3-1.8t0.1-1.8l2.4-9.9q0.1-0.3 0.1-0.6 0-0.9-0.7-1.6t-1.6-0.7q-0.8 0-1.5 0.5t-0.8 1.3l-2.1 8.5h-0.5l2.7-11.4q0.1-0.3 0.1-0.5 0-1-0.7-1.7t-1.6-0.7q-0.8 0-1.4 0.5t-0.9 1.3l-3 12.5h-2.6l-3.4-14.2q-0.2-0.8-0.8-1.3t-1.5-0.4z m13.4 34.5h-14.4q-1.7 0-3.2-1.1l-10.5-7.8q-1-0.8-1.6-2t-0.6-2.4q0-2.2 1.6-3.8t3.7-1.5q0.5 0 1 0.1t0.9 0.2 0.8 0.5 0.8 0.4 0.8 0.7 0.7 0.5l-2.5-10.6q-0.2-0.7-0.2-1.2 0-1.9 1.3-3.4t3.1-1.6q0.3-1.8 1.7-3t3.2-1.2q1.8 0 3.1 1.1t1.8 2.7l2.1 8.9 1.7-7.2q0.5-1.7 1.8-2.8t3.1-1q1.8 0 3.1 1.1t1.8 2.9q1.9 0.2 3.2 1.6t1.3 3.3q0 0.7-0.2 1.2l-2.4 9.9q-0.1 0.5-0.1 1.4 0 1.1-0.3 2.2l-2.1 8.4q-0.4 1.5-1.6 2.5t-2.9 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHandSpockO;
}(React.Component));
IconHandSpockO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconHandSpockO;
//# sourceMappingURL=IconHandSpockO.js.map