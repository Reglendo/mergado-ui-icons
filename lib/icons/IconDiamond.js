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
var IconDiamond = (function (_super) {
    __extends(IconDiamond, _super);
    function IconDiamond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDiamond.prototype.render = function () {
        var className = this.name + " " + this.name + "--diamond " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m4.1 17.5l12.1 12.9-5.8-12.9h-6.3z m15.8 15l6.7-15h-13.5z m-9.5-17.5l4-7.4h-5.1l-5.6 7.4h6.7z m13.1 15.4l12.1-12.9h-6.2z m-10.2-15.4h13.2l-4-7.4h-5.3z m16 0h6.7l-5.6-7.4h-5.1z m2.7-9.4l7.5 9.9q0.3 0.4 0.3 0.8t-0.4 0.8l-18.6 19.9q-0.4 0.4-0.9 0.4t-0.9-0.4l-18.7-19.9q-0.3-0.3-0.3-0.8t0.3-0.8l7.4-9.9q0.4-0.5 1-0.5h22.4q0.6 0 0.9 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDiamond;
}(React.Component));
IconDiamond.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconDiamond;
//# sourceMappingURL=IconDiamond.js.map