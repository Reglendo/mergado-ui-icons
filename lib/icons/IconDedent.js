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
var IconDedent = (function (_super) {
    __extends(IconDedent, _super);
    function IconDedent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDedent.prototype.render = function () {
        var className = this.name + " " + this.name + "--dedent " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m8.6 12.1v12.9q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.2l-6.4-6.4q-0.2-0.2-0.2-0.5t0.2-0.5l6.4-6.5q0.2-0.2 0.6-0.2 0.2 0 0.5 0.2t0.2 0.5z m31.4 17.2v4.3q0 0.3-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.5v4.3q0 0.2-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDedent;
}(React.Component));
IconDedent.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconDedent;
//# sourceMappingURL=IconDedent.js.map