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
var IconProductHunt = (function (_super) {
    __extends(IconProductHunt, _super);
    function IconProductHunt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconProductHunt.prototype.render = function () {
        var className = this.name + " " + this.name + "--product-hunt " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.7 17q0 1.3-0.9 2.1t-2.1 0.9h-5.7v-6h5.7q1.2 0 2.1 0.9t0.9 2.1z m4 0q0-2.9-2.1-4.9t-4.9-2.1h-9.7v20h4v-6h5.7q2.9 0 4.9-2t2.1-5z m10.3 3q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconProductHunt;
}(React.Component));
IconProductHunt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconProductHunt;
//# sourceMappingURL=IconProductHunt.js.map