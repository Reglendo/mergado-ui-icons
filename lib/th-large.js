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
var IconThLarge = (function (_super) {
    __extends(IconThLarge, _super);
    function IconThLarge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconThLarge.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.6 22.9v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z m20 17.2v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconThLarge;
}(React.Component));
IconThLarge.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconThLarge;
//# sourceMappingURL=th-large.js.map