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
var IconShareAlt = (function (_super) {
    __extends(IconShareAlt, _super);
    function IconShareAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShareAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2-2.1-5.1q0-0.3 0-0.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2t-2.1-5.1 2.1-5.1 5-2q2.9 0 4.9 1.9l8-4q0-0.5 0-0.8 0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q0.1 0.5 0.1 0.8t-0.1 0.8l8.1 4q2-1.9 4.8-1.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconShareAlt;
}(React.Component));
IconShareAlt.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconShareAlt;
//# sourceMappingURL=share-alt.js.map