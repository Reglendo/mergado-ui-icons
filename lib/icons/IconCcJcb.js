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
var IconCcJcb = (function (_super) {
    __extends(IconCcJcb, _super);
    function IconCcJcb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCcJcb.prototype.render = function () {
        var className = this.name + " " + this.name + "--cc-jcb " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.2 21.8q0 0.4-0.3 0.8t-0.7 0.4q-0.1 0-0.3 0h-2.7v-2.4h2.7q0.2 0 0.3 0 0.4 0.1 0.7 0.4t0.3 0.8z m-0.4-3.7q0 0.4-0.2 0.7t-0.7 0.4q0 0-0.2 0h-2.5v-2.3h2.4q0.1 0 0.2 0t0.1 0q0.4 0.1 0.7 0.4t0.2 0.8z m-21.1 2.8v-5.4h-3.9v5.4q0 1-0.7 1.7t-1.8 0.6q-1.9 0-4.1-1v2q1 0.2 2.2 0.4t1.9 0.1l0.7 0q5.7 0 5.7-3.8z m12.5 3.2v-1.9q-1.7 0.9-3.5 1-1.8 0.1-2.9-0.7t-1.1-2.5 1.1-2.5 2.9-0.7q1.8 0.1 3.5 1v-1.9q-0.8-0.3-1.7-0.4t-1.4-0.2l-0.5 0q-2.2-0.1-3.8 0.3t-2.5 1-1.2 1.5-0.4 1.9 0.4 1.9 1.2 1.5 2.5 1 3.8 0.3q1.8-0.1 3.6-0.6z m12.9-2q0-0.9-0.8-1.5t-1.9-0.7v-0.1q1-0.1 1.6-0.7t0.6-1.4q0-0.9-0.8-1.5t-1.8-0.6q-0.1 0-0.2-0.1t-0.3 0h-8v9h8.6q1.3 0 2.2-0.7t0.8-1.7z m2.2-13.3v22.4q0 0.9-0.6 1.6t-1.6 0.6h-35.9q-0.9 0-1.5-0.6t-0.7-1.6v-22.4q0-0.9 0.7-1.6t1.5-0.6h35.9q0.9 0 1.6 0.6t0.6 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconCcJcb.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconCcJcb;
}(React.Component));
exports.default = IconCcJcb;
//# sourceMappingURL=IconCcJcb.js.map