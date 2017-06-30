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
var IconLastfm = (function (_super) {
    __extends(IconLastfm, _super);
    function IconLastfm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLastfm.prototype.render = function () {
        var className = this.name + " " + this.name + "--lastfm " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.8 15.7q0 0.1 0.3 0.9 0.2 0.7 0.5 1.1t0.9 0.8 1 0.4 1.2 0.4q7.3 2 7.3 7.4 0 3.3-2.4 5.4t-5.6 2.2q-1.4 0-2.5-0.4t-2.1-1-1.7-1.7-1.4-2-1.2-2.3-1-2.3-0.8-2.3-0.8-2.2q-0.7-1.8-1.4-2.9t-1.6-2.2-2.4-1.4-3.1-0.5q-2.2 0-4.1 1.3t-3.1 3.2-1.1 4.1q0 3.6 2.3 6.3t5.9 2.6q4 0 5.8-2.1 1.2-1.4 1.8-2.6l1.9 3.4q-0.3 0.8-1 1.6l0 0q-2.9 3.4-8.6 3.4-3.3 0-6-1.8t-4.3-4.6-1.5-6.1q0-2.4 1-4.6t2.6-4 3.8-2.7 4.6-1q1.9 0 3.5 0.4t2.8 1.1 2.1 1.8 1.6 2.2 1.3 2.6 1.1 2.8 1.2 2.9 1.2 2.9q2.1 4.4 5.2 4.4 1.8 0 3.1-1.1t1.3-2.8q0-1-0.5-1.6t-1.1-1.1-1.6-0.7-1.9-0.6-1.9-0.7-1.9-1.2-1.4-1.8-0.9-2.8q0-0.3 0-0.7 0-2.4 1.9-4.3t4.4-1.7q1.8 0.1 2.7 0.3t2 1.2h0q0.3 0.2 0.5 0.5t0.6 0.9 0.4 0.6l-2.8 2.2q-0.6-1.1-1.2-1.6v0q-0.6-0.5-2.2-0.5-1.1 0-1.9 0.8t-0.8 1.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLastfm;
}(React.Component));
IconLastfm.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconLastfm;
//# sourceMappingURL=IconLastfm.js.map