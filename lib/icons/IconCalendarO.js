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
var IconCalendarO = (function (_super) {
    __extends(IconCalendarO, _super);
    function IconCalendarO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCalendarO.prototype.render = function () {
        var className = this.name + " " + this.name + "--calendar-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m4.4 37.1h31.4v-22.8h-31.4v22.8z m8.5-27.1v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m17.2 0v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCalendarO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCalendarO;
}(React.Component));
exports.default = IconCalendarO;
//# sourceMappingURL=IconCalendarO.js.map