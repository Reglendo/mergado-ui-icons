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
var IconHeadphones = (function (_super) {
    __extends(IconHeadphones, _super);
    function IconHeadphones() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHeadphones.prototype.render = function () {
        var className = this.name + " " + this.name + "--headphones " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.6 19.8q0 3.7-1.3 7l-0.4 1.1-4.2 0.7q-0.5 1.9-2 3.1t-3.5 1.2v0.7q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-12.9q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5v0.7q1.6 0 2.9 0.8t2.1 2.2l1.5-0.3q0.7-2.1 0.7-4.3 0-3.3-2-6.3t-5.3-4.6-7-1.8-7.1 1.8-5.2 4.6-2 6.3q0 2.2 0.6 4.3l1.6 0.2q0.7-1.3 2-2.1t2.9-0.8v-0.7q0-0.3 0.2-0.5t0.5-0.2h1.5q0.3 0 0.5 0.2t0.2 0.5v12.9q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.7q-1.9 0-3.5-1.2t-2-3.1l-4.1-0.7-0.5-1.1q-1.3-3.3-1.3-7 0-3.4 1.5-6.5t4-5.4 5.9-3.7 7.2-1.3 7.1 1.3 6 3.7 4 5.4 1.5 6.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconHeadphones.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconHeadphones;
}(React.Component));
exports.default = IconHeadphones;
//# sourceMappingURL=IconHeadphones.js.map