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
var IconTicket = (function (_super) {
    __extends(IconTicket, _super);
    function IconTicket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTicket.prototype.render = function () {
        var className = this.name + " " + this.name + "--ticket";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.9 10.1l7 7-12.8 12.8-7-7z m-4.8 21.8l13.8-13.8q0.5-0.4 0.5-1t-0.5-1l-8-8q-0.4-0.4-1-0.4t-1 0.4l-13.8 13.8q-0.5 0.4-0.5 1t0.5 1l8 8q0.4 0.4 1 0.4t1-0.4z m19.9-14.2l-20.3 20.3q-0.8 0.8-2 0.8t-2-0.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2l-2.8-2.8q-0.8-0.8-0.8-2t0.8-2l20.3-20.3q0.8-0.8 2-0.8t2 0.8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q0.8 0.8 0.8 2t-0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTicket;
}(React.Component));
IconTicket.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTicket;
//# sourceMappingURL=IconTicket.js.map