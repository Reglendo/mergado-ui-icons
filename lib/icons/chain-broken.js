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
var IconChainBroken = (function (_super) {
    __extends(IconChainBroken, _super);
    function IconChainBroken() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconChainBroken.prototype.render = function () {
        var className = this.name + " " + this.name + "--chain-broken";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.3 28.4l-5.7 5.7q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2-0.2-0.2-0.2-0.5t0.2-0.5l5.7-5.8q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.3 0.2 0.6t-0.2 0.5z m3.8 0.9v7.1q0 0.3-0.2 0.5t-0.5 0.2-0.6-0.2-0.2-0.5v-7.1q0-0.3 0.2-0.5t0.6-0.2 0.5 0.2 0.2 0.5z m-5-5q0 0.3-0.2 0.5t-0.5 0.2h-7.2q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2h7.2q0.3 0 0.5 0.2t0.2 0.5z m28.2 2.8q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9-2.7 0-4.6-1.9l-7.4-7.5q-0.5-0.5-1-1.2l5.4-0.4 6.1 6.1q0.6 0.6 1.5 0.6t1.5-0.6l3.3-3.3q0.6-0.6 0.6-1.5 0-0.9-0.6-1.5l-6.1-6.1 0.4-5.4q0.7 0.5 1.2 1l7.5 7.5q1.9 1.9 1.9 4.5z m-13.8-16.1l-5.3 0.4-6.1-6.1q-0.6-0.7-1.5-0.7-0.9 0-1.6 0.6l-3.2 3.3q-0.7 0.6-0.7 1.5 0 0.9 0.7 1.5l6.1 6.1-0.4 5.4q-0.8-0.5-1.3-0.9l-7.5-7.5q-1.8-2-1.8-4.6 0-2.7 1.9-4.5l3.2-3.3q1.9-1.8 4.6-1.8 2.7 0 4.5 1.9l7.5 7.4q0.4 0.5 0.9 1.3z m14.1 1.9q0 0.3-0.2 0.5t-0.5 0.2h-7.1q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.6 0.5-0.2h7.1q0.3 0 0.5 0.2t0.2 0.6z m-12.1-12.2v7.2q0 0.3-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5v-7.2q0-0.3 0.2-0.5t0.5-0.2 0.5 0.2 0.2 0.5z m9.1 3.4l-5.7 5.7q-0.3 0.2-0.5 0.2t-0.6-0.2q-0.2-0.2-0.2-0.5t0.2-0.5l5.8-5.7q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.2 0.2 0.5t-0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconChainBroken;
}(React.Component));
IconChainBroken.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconChainBroken;
//# sourceMappingURL=chain-broken.js.map