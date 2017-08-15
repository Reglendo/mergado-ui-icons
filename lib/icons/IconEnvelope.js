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
var IconEnvelope = (function (_super) {
    __extends(IconEnvelope, _super);
    function IconEnvelope() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEnvelope.prototype.render = function () {
        var className = this.name + " " + this.name + "--envelope " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 15.8v17.8q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-17.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3 0.9 2.1 1.5t2.1 1 2.5 0.6h0q1.2 0 2.5-0.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-0.9 2.2-1.9z m0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-0.2 0.1-0.9 0.6t-1.2 0.9-1.2 0.7-1.3 0.6-1.1 0.2h0q-0.5 0-1.1-0.2t-1.3-0.6-1.2-0.7-1.2-0.9-0.9-0.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-0.9-2.6-2.6t-1.2-3q0-1.8 0.9-2.9t2.7-1.2h32.8q1.5 0 2.5 1.1t1.1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconEnvelope.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconEnvelope;
}(React.Component));
exports.default = IconEnvelope;
//# sourceMappingURL=IconEnvelope.js.map