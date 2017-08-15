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
var IconFoursquare = (function (_super) {
    __extends(IconFoursquare, _super);
    function IconFoursquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFoursquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--foursquare " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.8 9.7l0.8-4.3q0.2-0.6-0.2-0.9t-0.7-0.4h-15.9q-0.5 0-0.9 0.4t-0.3 0.8v24.6q0 0.1 0.1 0l6.5-7.9q0.5-0.5 0.8-0.7t1.1-0.2h5.4q0.4 0 0.8-0.3t0.4-0.7q0.5-2.9 0.8-4.2 0.1-0.5-0.3-0.9t-0.8-0.4h-6.5q-0.7 0-1.1-0.5t-0.4-1v-1q0-0.6 0.4-1t1.1-0.5h7.7q0.4 0 0.8-0.3t0.4-0.6z m5.1-5q-0.3 1.7-1.2 6t-1.6 7.8-0.7 3.9q-0.2 0.5-0.2 0.7t-0.4 0.7-0.5 0.8-0.9 0.4-1.3 0.2h-6q-0.3 0-0.5 0.3-0.2 0.2-9.5 11-0.5 0.6-1.3 0.6t-1.1-0.1q-1.2-0.5-1.2-2.2v-31.4q0-1.3 0.8-2.3t2.7-1.1h19.8q2.1 0 2.9 1.2t0.2 3.5z m0 0l-3.5 17.7q0-0.4 0.7-3.9t1.6-7.8 1.2-6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconFoursquare.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconFoursquare;
}(React.Component));
exports.default = IconFoursquare;
//# sourceMappingURL=IconFoursquare.js.map