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
var IconParagraph = (function (_super) {
    __extends(IconParagraph, _super);
    function IconParagraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconParagraph.prototype.render = function () {
        var className = this.name + " " + this.name + "--paragraph " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34 4.2v1.6q0 0.7-0.4 1.4t-0.9 0.7q-1.2 0-1.2 0-0.6 0.2-0.8 0.7 0 0.3 0 1.5v25.7q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-27.2h-3.1v27.2q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-11.1q-3.3-0.3-5.5-1.3-2.8-1.3-4.2-4-1.5-2.6-1.5-5.8 0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-0.8 9.3-0.8h10.7q0.5 0 0.9 0.4t0.4 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconParagraph.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconParagraph;
}(React.Component));
exports.default = IconParagraph;
//# sourceMappingURL=IconParagraph.js.map