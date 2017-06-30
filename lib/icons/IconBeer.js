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
var IconBeer = (function (_super) {
    __extends(IconBeer, _super);
    function IconBeer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBeer.prototype.render = function () {
        var className = this.name + " " + this.name + "--beer " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.8 20v-8.6h-5.7v5.7q0 1.2 0.8 2.1t2 0.8h2.9z m22.8 10v4.3h-25.7v-4.3l2.9-4.3h-2.9q-3.5 0-6-2.5t-2.5-6.1v-7.1l-1.5-1.4 0.7-2.9h10.8l0.7-2.8h21.4l0.7 4.2-1.4 0.8v17.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBeer;
}(React.Component));
IconBeer.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconBeer;
//# sourceMappingURL=IconBeer.js.map