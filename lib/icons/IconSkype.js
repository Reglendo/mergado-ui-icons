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
var IconSkype = (function (_super) {
    __extends(IconSkype, _super);
    function IconSkype() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSkype.prototype.render = function () {
        var className = this.name + " " + this.name + "--skype " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.2 23.7q0-1.1-0.5-2t-1-1.5-1.7-1.1-1.8-0.8-2-0.5l-2.3-0.5q-0.6-0.2-1-0.3t-0.7-0.2-0.7-0.4-0.4-0.5-0.1-0.6q0-1.7 3.2-1.7 0.9 0 1.7 0.2t1.2 0.7 0.8 0.7 0.9 0.6 1.1 0.3q1.1 0 1.7-0.7t0.6-1.7q0-1.2-1.2-2.2t-3.2-1.5-4.1-0.6q-1.5 0-2.9 0.4t-2.7 1-2 2-0.7 2.8q0 1.4 0.4 2.4t1.3 1.7 1.8 1.1 2.3 0.7l3.2 0.8q2 0.5 2.5 0.8 0.7 0.5 0.7 1.4 0 0.8-0.9 1.4t-2.3 0.6q-1.1 0-2.1-0.4t-1.4-0.8-1-1-1-0.9-1.3-0.4q-1.1 0-1.6 0.7t-0.6 1.7q0 2 2.7 3.5t6.5 1.5q1.6 0 3.1-0.5t2.8-1.1 2-2.1 0.7-3z m8.1 4.9q0 3.5-2.5 6t-6.1 2.5q-2.9 0-5.2-1.7-1.7 0.3-3.4 0.3-3.1 0-6.1-1.2t-5-3.4-3.3-5-1.3-6.1q0-1.6 0.4-3.4-1.8-2.3-1.8-5.2 0-3.5 2.5-6t6.1-2.5q2.9 0 5.2 1.7 1.7-0.3 3.3-0.3 3.2 0 6.1 1.2t5.1 3.4 3.3 5 1.3 6.1q0 1.6-0.4 3.3 1.8 2.4 1.8 5.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSkype.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSkype;
}(React.Component));
exports.default = IconSkype;
//# sourceMappingURL=IconSkype.js.map