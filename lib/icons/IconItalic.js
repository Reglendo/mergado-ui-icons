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
var IconItalic = (function (_super) {
    __extends(IconItalic, _super);
    function IconItalic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconItalic.prototype.render = function () {
        var className = this.name + " " + this.name + "--italic " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.5 37.1l0.4-1.9q0.1 0 1.8-0.5t2.5-0.8q0.6-0.8 0.9-2.3 0-0.1 1.4-6.4t2.5-12.2 1.2-6.6v-0.5q-0.5-0.3-1.2-0.4t-1.6-0.2-1.3-0.1l0.5-2.3q0.7 0 2.6 0.1t3.4 0.2 2.7 0q1 0 2.2 0t2.7-0.2 2.2-0.1q-0.2 0.8-0.5 1.9-0.6 0.3-2.2 0.7t-2.5 0.7q-0.1 0.4-0.3 1t-0.2 0.9-0.1 1-0.2 0.9q-0.6 3.3-1.9 9.4t-1.8 7.9q0 0.2-0.3 1.3t-0.4 2-0.4 1.9-0.1 1.3l0 0.4q0.4 0.1 4.2 0.7-0.1 0.9-0.4 2.2-0.2 0-0.7 0t-0.7 0q-0.7 0-2-0.2t-1.9-0.2q-3.1 0-4.6 0-1.1 0-3.2 0.2t-2.7 0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconItalic;
}(React.Component));
IconItalic.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconItalic;
//# sourceMappingURL=IconItalic.js.map