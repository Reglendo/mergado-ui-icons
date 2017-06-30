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
var IconChrome = (function (_super) {
    __extends(IconChrome, _super);
    function IconChrome() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconChrome.prototype.render = function () {
        var className = this.name + " " + this.name + "--chrome " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.9 0q5.4 0 10.1 2.7 5.2 3 7.9 8.3l-16.6-0.9q-3.6-0.2-6.6 1.7t-4.1 5.1l-6.2-9.5q2.9-3.5 7-5.4t8.5-2z m-16.6 9l7.5 14.8q1.6 3.2 4.7 4.9t6.5 1l-5.1 10.1q-4.7-0.8-8.6-3.6t-6.1-7-2.2-9.2q0-6 3.3-11z m35.4 3.8q1.3 3.4 1.3 6.9t-1.1 6.9-3.4 6-5.5 4.7q-5.1 3-11.1 2.7l9-13.9q2-3 1.9-6.5t-2.4-6.2z m-18.7 0.5q2.8 0 4.8 1.9t1.9 4.8-1.9 4.8-4.8 1.9-4.8-1.9-1.9-4.8 1.9-4.8 4.8-1.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconChrome;
}(React.Component));
IconChrome.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconChrome;
//# sourceMappingURL=IconChrome.js.map