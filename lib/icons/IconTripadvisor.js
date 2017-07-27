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
var IconTripadvisor = (function (_super) {
    __extends(IconTripadvisor, _super);
    function IconTripadvisor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTripadvisor.prototype.render = function () {
        var className = this.name + " " + this.name + "--tripadvisor " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.4 21.8q0 0.7-0.5 1.1t-1.1 0.5q-0.7 0-1.2-0.5t-0.5-1.1q0-0.7 0.5-1.2t1.2-0.5q0.6 0 1.1 0.5t0.5 1.2z m20.2 0q0 0.6-0.5 1.1t-1.1 0.5-1.2-0.5-0.5-1.1 0.5-1.2 1.2-0.5 1.1 0.5 0.5 1.1z m-18.2 0q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4 1 2.4 2.4 0.9 2.4-0.9 1-2.4z m20.2 0q0-1.5-1-2.4t-2.4-1q-1.4 0-2.4 1t-1 2.4 1 2.3 2.4 1 2.4-1 1-2.4z m-18.7 0q0 2-1.4 3.4t-3.5 1.5q-2 0-3.4-1.5t-1.5-3.4 1.5-3.5 3.4-1.4 3.5 1.4 1.4 3.5z m20.2 0q0 2-1.4 3.4t-3.5 1.4q-2 0-3.4-1.4t-1.5-3.4 1.5-3.5 3.4-1.4q2 0 3.5 1.4t1.4 3.5z m-16.9 0q0-3.3-2.4-5.7t-5.7-2.4q-2.2 0-4 1.1t-3 2.9-1.1 4.1 1.1 4.1 3 2.9 4 1.1q3.4 0 5.7-2.4t2.4-5.7z m11.7-10q-4.4-2-9.7-2-5.6 0-10.1 2 2.1 0 3.9 0.8t3.2 2.1 2.2 3.2 0.8 3.9q0-2 0.7-3.8t2.1-3.2 3.1-2.2 3.8-0.8z m8.4 10q0-3.3-2.4-5.7t-5.7-2.4-5.7 2.4-2.4 5.7 2.4 5.7 5.7 2.4 5.7-2.4 2.4-5.7z m-4.7-9.9h6.7q-0.7 0.9-1.3 2t-0.7 2q1.9 2.6 1.9 5.9 0 2.7-1.3 5t-3.7 3.7-5 1.3q-2.3 0-4.3-0.9t-3.5-2.8q-0.8 1-2.2 3.2-0.2-0.4-1-1.5t-1.3-1.7q-1.4 1.8-3.4 2.7t-4.4 1q-2.7 0-5-1.3t-3.7-3.7-1.3-5q0-3.3 1.9-5.9-0.1-0.9-0.7-2t-1.3-2h6.4q2.6-1.8 6.2-2.7t7.6-1q3.9 0 7.3 0.9t6.1 2.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTripadvisor;
}(React.Component));
IconTripadvisor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconTripadvisor;
//# sourceMappingURL=IconTripadvisor.js.map