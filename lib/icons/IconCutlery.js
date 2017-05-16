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
var IconCutlery = (function (_super) {
    __extends(IconCutlery, _super);
    function IconCutlery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCutlery.prototype.render = function () {
        var className = this.name + " " + this.name + "--cutlery";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.8 1.4v14.3q0 1.4-0.8 2.5t-2.1 1.6v17.3q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-17.3q-1.3-0.5-2.1-1.6t-0.8-2.5v-14.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1-0.4 1 0.4 0.5 1v9.3q0 0.6 0.4 1t1 0.4 1-0.4 0.4-1v-9.3q0-0.6 0.4-1t1.1-0.4 1 0.4 0.4 1z m17.1 0v35.7q0 1.2-0.8 2.1t-2 0.8h-2.9q-1.1 0-2-0.8t-0.8-2.1v-11.4h-5q-0.3 0-0.5-0.2t-0.3-0.5v-17.9q0-2.9 2.1-5t5.1-2.1h5.7q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCutlery;
}(React.Component));
IconCutlery.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconCutlery;
//# sourceMappingURL=IconCutlery.js.map