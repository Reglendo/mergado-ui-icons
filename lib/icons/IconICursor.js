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
var IconICursor = (function (_super) {
    __extends(IconICursor, _super);
    function IconICursor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconICursor.prototype.render = function () {
        var className = this.name + " " + this.name + "--i-cursor " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 2.9q-7.2 0-7.2 5v9.2h2.9v2.9h-2.9v12.1q0 5 7.2 5h1.4v2.9h-1.4q-6.1 0-8.6-3.3-2.5 3.3-8.6 3.3h-1.4v-2.9h1.4q7.2 0 7.2-5v-12.1h-2.9v-2.9h2.9v-9.2q0-5-7.2-5h-1.4v-2.9h1.4q6.1 0 8.6 3.3 2.5-3.3 8.6-3.3h1.4v2.9h-1.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconICursor;
}(React.Component));
IconICursor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconICursor;
//# sourceMappingURL=IconICursor.js.map