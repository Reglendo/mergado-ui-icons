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
var IconGooglePlusSquare = (function (_super) {
    __extends(IconGooglePlusSquare, _super);
    function IconGooglePlusSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGooglePlusSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--google-plus-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m23.5 20.2q0-0.6-0.2-1.4h-8v2.9h4.8q-0.1 0.6-0.4 1.1t-0.8 1.2-1.5 1-2.1 0.4q-2.3 0-3.8-1.6t-1.6-3.8 1.6-3.8 3.8-1.6q2 0 3.4 1.3l2.3-2.2q-2.4-2.3-5.7-2.3-3.6 0-6.1 2.5t-2.5 6.1 2.5 6.1 6.1 2.5q3.6 0 5.9-2.4t2.3-6z m7.7 1h2.4v-2.4h-2.4v-2.5h-2.5v2.5h-2.4v2.4h2.4v2.5h2.5v-2.5z m6.1-11.9v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGooglePlusSquare;
}(React.Component));
IconGooglePlusSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconGooglePlusSquare;
//# sourceMappingURL=IconGooglePlusSquare.js.map