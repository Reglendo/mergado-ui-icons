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
var IconStrikethrough = (function (_super) {
    __extends(IconStrikethrough, _super);
    function IconStrikethrough() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStrikethrough.prototype.render = function () {
        var className = this.name + " " + this.name + "--strikethrough " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.3 20q0.3 0 0.5 0.2t0.2 0.5v1.4q0 0.4-0.2 0.6t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.6v-1.4q0-0.3 0.2-0.5t0.5-0.2h38.6z m-28.5-1.4q-0.6-0.8-1.2-1.8-1-2.2-1-4.2 0-4.1 3-6.9 2.9-2.8 8.7-2.8 1.2 0 3.8 0.4 1.4 0.3 3.9 1.1 0.2 0.8 0.5 2.6 0.3 2.7 0.3 4.1 0 0.4-0.1 1l-0.3 0-1.9-0.1-0.3 0q-1.1-3.4-2.3-4.6-1.9-2-4.7-2-2.5 0-4 1.3-1.5 1.3-1.5 3.2 0 1.7 1.5 3.2t6.2 2.8q1.5 0.5 3.8 1.5 1.3 0.6 2.2 1.2h-16.6z m11.3 5.7h9.2q0.1 0.9 0.1 2 0 2.5-0.9 4.8-0.5 1.2-1.6 2.3-0.8 0.8-2.4 1.8-1.8 1.1-3.4 1.5-1.8 0.4-4.5 0.4-2.6 0-4.4-0.5l-3.1-0.9q-1.3-0.3-1.6-0.6-0.2-0.2-0.2-0.5v-0.3q0-2.4-0.1-3.5 0-0.6 0-1.5l0.1-0.8v-1l2.3 0q0.3 0.7 0.6 1.6t0.5 1.2 0.3 0.6q0.8 1.3 1.8 2.1 1 0.8 2.3 1.3 1.4 0.5 3 0.5 1.4 0 3.1-0.6 1.7-0.6 2.7-1.9 1.1-1.4 1.1-2.9 0-1.9-1.8-3.5-0.8-0.7-3.1-1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconStrikethrough.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconStrikethrough;
}(React.Component));
exports.default = IconStrikethrough;
//# sourceMappingURL=IconStrikethrough.js.map