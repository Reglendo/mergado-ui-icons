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
var IconLifeBouy = (function (_super) {
    __extends(IconLifeBouy, _super);
    function IconLifeBouy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLifeBouy.prototype.render = function () {
        var className = this.name + " " + this.name + "--life-bouy " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z m0 2.9q-4.2 0-8.1 2l4.4 4.3q1.8-0.6 3.7-0.6t3.7 0.6l4.4-4.3q-3.9-2-8.1-2z m-15.1 25.2l4.3-4.4q-0.6-1.8-0.6-3.7t0.6-3.7l-4.3-4.4q-2 3.9-2 8.1t2 8.1z m15.1 9q4.2 0 8.1-2l-4.4-4.3q-1.8 0.6-3.7 0.6t-3.7-0.6l-4.4 4.3q3.9 2 8.1 2z m0-8.5q3.6 0 6.1-2.5t2.5-6.1-2.5-6.1-6.1-2.5-6.1 2.5-2.5 6.1 2.5 6.1 6.1 2.5z m10.8-4.9l4.3 4.4q2-3.9 2-8.1t-2-8.1l-4.3 4.4q0.6 1.8 0.6 3.7t-0.6 3.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLifeBouy;
}(React.Component));
IconLifeBouy.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconLifeBouy;
//# sourceMappingURL=IconLifeBouy.js.map