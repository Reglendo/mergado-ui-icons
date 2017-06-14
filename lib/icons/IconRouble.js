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
var IconRouble = (function (_super) {
    __extends(IconRouble, _super);
    function IconRouble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRouble.prototype.render = function () {
        var className = this.name + " " + this.name + "--rouble " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6z m5.3 0q0 4.3-2.9 7t-7.2 2.8h-7.6v2.6h11.2q0.4 0 0.6 0.2t0.2 0.5v2.9q0 0.3-0.2 0.5t-0.6 0.2h-11.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-3.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-2.9q0-0.3 0.2-0.5t0.5-0.2h5v-2.6h-5q-0.3 0-0.5-0.2t-0.2-0.6v-3.3q0-0.3 0.2-0.5t0.5-0.2h5v-14q0-0.3 0.2-0.5t0.5-0.2h12.1q4.4 0 7.2 2.7t2.9 7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRouble;
}(React.Component));
IconRouble.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconRouble;
//# sourceMappingURL=IconRouble.js.map