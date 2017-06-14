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
var IconSlack = (function (_super) {
    __extends(IconSlack, _super);
    function IconSlack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSlack.prototype.render = function () {
        var className = this.name + " " + this.name + "--slack " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.4 17.3q1.4 0 2.3 0.9t0.9 2.3q0 2.2-2 2.9l-3.9 1.3 1.3 3.7q0.1 0.5 0.1 1.1 0 1.3-0.9 2.3t-2.3 0.9q-1 0-1.9-0.6t-1.2-1.6l-1.2-3.7-6.9 2.4 1.2 3.7q0.2 0.5 0.2 1 0 1.3-0.9 2.3t-2.3 0.9q-1.1 0-1.9-0.6t-1.2-1.6l-1.2-3.6-3.4 1.2q-0.7 0.2-1.2 0.2-1.3 0-2.2-0.9t-0.9-2.3q0-1 0.6-1.9t1.6-1.1l3.5-1.2-2.4-7-3.5 1.2q-0.5 0.2-1 0.2-1.4 0-2.3-0.9t-0.9-2.3q0-1 0.6-1.9t1.6-1.2l3.5-1.1-1.2-3.6q-0.1-0.5-0.1-1 0-1.4 0.9-2.3t2.3-1q1 0 1.9 0.6t1.1 1.6l1.3 3.6 6.9-2.3-1.2-3.6q-0.2-0.5-0.2-1.1 0-1.3 0.9-2.2t2.3-1q1.1 0 1.9 0.6t1.2 1.6l1.2 3.6 3.6-1.2q0.5-0.2 1-0.2 1.3 0 2.3 0.9t0.9 2.2q0 1-0.7 1.8t-1.6 1.2l-3.5 1.2 2.3 7.1 3.7-1.3q0.5-0.2 1-0.2z m-17.7 5.9l6.9-2.4-2.3-7-7 2.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSlack;
}(React.Component));
IconSlack.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconSlack;
//# sourceMappingURL=IconSlack.js.map