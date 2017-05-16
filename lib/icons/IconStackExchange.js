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
var IconStackExchange = (function (_super) {
    __extends(IconStackExchange, _super);
    function IconStackExchange() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStackExchange.prototype.render = function () {
        var className = this.name + " " + this.name + "--stack-exchange";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m33.6 28v1.4q0 1.9-1.3 3.3t-3.1 1.3h-1.2l-5.8 6v-6h-11.9q-1.8 0-3-1.3t-1.3-3.3v-1.4h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-7.3v5.7h-27.6v-5.7h27.6z m0-3.2v1.5h-27.6v-1.5q0-1.8 1.3-3.2t3-1.3h18.9q1.8 0 3.1 1.3t1.3 3.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStackExchange;
}(React.Component));
IconStackExchange.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconStackExchange;
//# sourceMappingURL=IconStackExchange.js.map