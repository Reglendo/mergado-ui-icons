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
var IconMagic = (function (_super) {
    __extends(IconMagic, _super);
    function IconMagic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMagic.prototype.render = function () {
        var className = this.name + " " + this.name + "--magic " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.6 13l6.5-6.6-2.4-2.4-6.5 6.6z m9.9-6.6q0 0.6-0.4 1l-28.7 28.7q-0.4 0.4-1 0.4t-1-0.4l-4.4-4.4q-0.4-0.4-0.4-1t0.4-1l28.7-28.7q0.4-0.4 1-0.4t1 0.4l4.4 4.4q0.4 0.4 0.4 1z m-30.1-4.2l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.1-0.6 2.1-0.7 0.7-2.2z m7.8 3.6l4.4 1.3-4.4 1.4-1.3 4.4-1.4-4.4-4.4-1.4 4.4-1.3 1.4-4.4z m20.8 10.7l2.1 0.6-2.1 0.7-0.7 2.2-0.7-2.2-2.2-0.7 2.2-0.6 0.7-2.2z m-14.3-14.3l2.2 0.7-2.2 0.6-0.7 2.2-0.7-2.2-2.2-0.6 2.2-0.7 0.7-2.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMagic;
}(React.Component));
IconMagic.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconMagic;
//# sourceMappingURL=IconMagic.js.map