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
var IconPinterestSquare = (function (_super) {
    __extends(IconPinterestSquare, _super);
    function IconPinterestSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPinterestSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--pinterest-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-16.2q1.9-2.7 2.4-4.6 0.2-0.8 1.2-4.7 0.4 0.9 1.6 1.5t2.5 0.6q4.1 0 6.6-3.3t2.6-8.3q0-1.9-0.8-3.6t-2.2-3.1-3.4-2.2-4.4-0.8q-2.3 0-4.3 0.6t-3.4 1.7-2.4 2.5-1.5 2.8-0.5 3q0 2.3 0.9 4t2.6 2.4q0.3 0.2 0.5 0t0.3-0.4q0.3-1 0.4-1.3 0.1-0.5-0.3-1-1.1-1.4-1.1-3.3 0-3.4 2.3-5.8t6.1-2.3q3.3 0 5.2 1.8t1.8 4.7q0 3.7-1.5 6.4t-3.9 2.6q-1.3 0-2.1-1t-0.5-2.3q0.1-0.8 0.6-2.1t0.6-2.2 0.3-1.7q0-1.1-0.6-1.8t-1.7-0.7q-1.4 0-2.3 1.2t-1 3.1q0 1.6 0.6 2.7l-2.2 9.3q-0.6 2.2-0.2 5.6h-4.1q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconPinterestSquare;
}(React.Component));
IconPinterestSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconPinterestSquare;
//# sourceMappingURL=IconPinterestSquare.js.map