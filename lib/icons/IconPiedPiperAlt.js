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
var IconPiedPiperAlt = (function (_super) {
    __extends(IconPiedPiperAlt, _super);
    function IconPiedPiperAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPiedPiperAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--pied-piper-alt " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.2 20.7q1.5-0.1 2.9 0.4t2.3 1.1 2 1.9 1.7 2.1 1.5 2.4q0.7 1.1 1.6 2.2t1.5 1.6 1.9 1.7q-0.9 0.6-2.1 1.2t-2.8 1.2-2.2 0.9q-0.9-0.7-1.5-2.3t-0.9-3.2-0.6-3.6-0.9-3.4-1.4-2.4-2.4-1l-0.2 0.1-0.2 0q0.1 0.1 0.3 0.3 0.1 0.1 0.6 0.5t0.5 0.4 0.3 0.4 0.4 0.4 0.2 0.4 0.2 0.6 0.1 0.6 0.1 0.8l0 0.6q0 0.5 0 1.2t-0.2 1-0.2 1.2-0.3 1q-0.6 0-2 0.2t-1.9 0.2q-0.8 0-1.4-0.2-0.1-0.3-0.1-0.9 0-1.5 0.1-1.9 0-0.3 0.6-0.8t1.1-1.2 0.6-1q-0.5-0.1-0.9 0.4-0.7 1.1-2.2 2t-2.7 0.9q-0.5 0-1.5-1.2t-2.1-2.8-1.7-1.9q-0.1-0.1-0.5-0.6-9.6 2.2-10.2 2.2-0.3 0-0.6-0.2t-0.2-0.5q0-0.3 0.2-0.6t0.4-0.2l9.7-2.1q-0.2-0.3-0.2-0.5t0.1-0.4 0.3-0.2 0.4-0.2 0.5 0 0.4-0.1q0-0.1 0.3-0.2t0.3-0.1q0.3 0 0.6 0.3t0.4 0.7q3.2-0.8 3.4-0.8 0.3 0 0.6 0.2t0.2 0.6q0 0.3-0.2 0.5t-0.4 0.3l-3.6 0.8-0.1 0.3q0 0.5 1.7 2.3t2 1.9q1 0 2.4-1.6t1.4-2.6q0-0.7-0.4-1t-1.1-0.4-1-0.2-0.4-0.7q0-0.3 0.2-0.7l-1.4-0.4q0.9-0.8 0.9-2.3 0-0.5-0.1-1.1 1.6-0.4 2.8-0.4 0.9 0 1.4 0.1t1 0.1 0.6 0.3 0.4 0.5 0.3 0.7 0.4 0.9 0.4 1.2l1-0.5q0 0.8-0.4 1.2t-0.9 0.4-0.8 0.1-0.3 0.4z m1.2-4.7q-0.1-0.1-0.2-0.3t-0.3-0.3-0.2-0.2-0.2-0.2l-0.1-0.2-0.2-0.1-0.2-0.1-0.1-0.1q-0.2-0.1-0.3-0.1t-0.4-0.1-0.5 0h-1.4q-2.5 0-4.3 0.9 0.4-0.6 0.8-1t1-0.5 1.3-0.8 0.9-0.7 1-1.1 0.9-1q0.2 0.2 0.6 0.6t0.6 0.8 0.7 0.2l0.3 0v1.5l0.4 0q4.9-1.8 7.4-3.7 0.5-0.5 1-0.8t0.8-0.8 0.7-0.6 0.6-0.6 0.4-0.7 0.5-0.7 0.5-0.7 0.5-1 0.6-1l0.1-0.2q0 1-0.8 2.7-1.6 3.3-4.1 5.3t-6.1 2.8q-0.2 0.1-0.8 0.1t-1 0.2-0.8 0.3q0.1 0.4 0.5 0.9t0.5 0.7q0 0.2-0.6 0.6z m-4.3 18.3q0.7-0.5 2.6-1t2.9-0.4q0.1 0 0.4 0.3t0.6 0.8 0.5 1 0.5 1.1 0.2 0.6q-2.4 0.9-4.8 0.9-1.2 0-2.5-0.2z m-4.8-12.9l1-0.2 2.1 3.5-1.4 1z m9.9 10.3q0.1 0.3 0.1 0.3 0 0.1-0.3 0.3t-1 0.3-1 0.1-1.1 0.2-0.6 0.1l-0.2-0.9q0.5 0 1.2-0.1t1.5-0.2 1.2-0.1h0.3z m-9-12.5l-1.9 0.4-0.1-0.3q0.2 0 0.6-0.2t0.7-0.1q0.4 0 0.7 0.2z m3.9 12.6h0.6l0.2 1.7-0.8 0.2v-1.9z m17.6-29.6z m0 0l0 0.1-0.1 0.1 0.1-0.1z m0 0l0 0z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconPiedPiperAlt.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconPiedPiperAlt;
}(React.Component));
exports.default = IconPiedPiperAlt;
//# sourceMappingURL=IconPiedPiperAlt.js.map