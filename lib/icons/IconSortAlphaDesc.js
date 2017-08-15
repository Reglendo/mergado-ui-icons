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
var IconSortAlphaDesc = (function (_super) {
    __extends(IconSortAlphaDesc, _super);
    function IconSortAlphaDesc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSortAlphaDesc.prototype.render = function () {
        var className = this.name + " " + this.name + "--sort-alpha-desc " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.6 32h3.9l-1.6-4.9-0.2-1.1q-0.1-0.3-0.1-0.4h-0.1l0 0.4q0 0.1-0.1 0.4t-0.2 0.7z m-10.2 0.1q0 0.3-0.2 0.6l-7.1 7.1q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.2-7.1q-0.3-0.4-0.1-0.8 0.1-0.5 0.6-0.5h4.3v-30.7q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v30.7h4.3q0.3 0 0.5 0.2t0.2 0.5z m20.7 5.5v2.4h-6.5v-2.4h1.7l-1-3.2h-5.5l-1 3.2h1.7v2.4h-6.4v-2.4h1.5l5.2-14.7h3.6l5.1 14.7h1.6z m-2-25.7v5.2h-13v-2l8.2-11.8q0.3-0.4 0.5-0.6l0.2-0.2v0q0 0-0.1 0t-0.2 0q-0.3 0-0.7 0h-5.2v2.6h-2.6v-5.1h12.6v2l-8.2 11.8q-0.2 0.2-0.5 0.6l-0.2 0.2v0.1l0.3-0.1q0.2 0 0.7 0h5.5v-2.7h2.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSortAlphaDesc.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSortAlphaDesc;
}(React.Component));
exports.default = IconSortAlphaDesc;
//# sourceMappingURL=IconSortAlphaDesc.js.map