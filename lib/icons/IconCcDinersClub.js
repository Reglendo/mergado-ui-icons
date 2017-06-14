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
var IconCcDinersClub = (function (_super) {
    __extends(IconCcDinersClub, _super);
    function IconCcDinersClub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCcDinersClub.prototype.render = function () {
        var className = this.name + " " + this.name + "--cc-diners-club " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15 26v-12.1q-1.8 0.7-3 2.4t-1.1 3.7 1.1 3.7 3 2.3z m8.8-6q0-2.1-1.1-3.7t-3-2.4v12.2q1.8-0.8 3-2.4t1.1-3.7z m3.8 0q0 2.8-1.4 5.1t-3.7 3.8-5.2 1.3q-2 0-3.9-0.8t-3.3-2.2-2.2-3.2-0.8-4q0-2.8 1.4-5.2t3.7-3.7 5.1-1.4 5.2 1.4 3.7 3.7 1.4 5.2z m6.7 0.1q0-2.4-1-4.6t-2.5-3.6-3.8-2.3-4.4-0.8h-5.3q-3 0-5.6 1.4t-4.1 4-1.6 5.9q0 3 1.5 5.6t4.2 4 5.6 1.5h5.3q2.3 0 4.4-0.9t3.8-2.3 2.5-3.6 1-4.3z m6-11.3v22.4q0 0.9-0.6 1.6t-1.6 0.6h-35.9q-0.9 0-1.5-0.6t-0.7-1.6v-22.4q0-0.9 0.7-1.6t1.5-0.6h35.9q0.9 0 1.6 0.6t0.6 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCcDinersClub;
}(React.Component));
IconCcDinersClub.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconCcDinersClub;
//# sourceMappingURL=IconCcDinersClub.js.map