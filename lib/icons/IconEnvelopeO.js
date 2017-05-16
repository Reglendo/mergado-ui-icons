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
var IconEnvelopeO = (function (_super) {
    __extends(IconEnvelopeO, _super);
    function IconEnvelopeO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEnvelopeO.prototype.render = function () {
        var className = this.name + " " + this.name + "--envelope-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.1 33.6v-17.2q-0.7 0.8-1.5 1.5-6 4.6-9.5 7.5-1.1 1-1.9 1.5t-1.9 1.1-2.3 0.6h0q-1.1 0-2.3-0.6t-1.9-1.1-1.9-1.5q-3.5-2.9-9.5-7.5-0.8-0.7-1.5-1.5v17.2q0 0.3 0.2 0.5t0.5 0.2h32.8q0.3 0 0.5-0.2t0.2-0.5z m0-23.5v-0.5l0-0.3 0-0.3-0.2-0.2-0.2-0.2-0.3 0h-32.8q-0.3 0-0.5 0.2t-0.2 0.5q0 3.7 3.2 6.3 4.3 3.4 9 7.1 0.1 0.1 0.8 0.7t1 0.8 1 0.7 1.1 0.6 1 0.2h0q0.5 0 1-0.2t1.1-0.6 1-0.7 1-0.8 0.8-0.7q4.7-3.7 9-7.1 1.2-0.9 2.2-2.6t1-2.9z m2.9-0.8v24.3q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-24.3q0-1.5 1.1-2.5t2.5-1.1h32.8q1.5 0 2.6 1.1t1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconEnvelopeO;
}(React.Component));
IconEnvelopeO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconEnvelopeO;
//# sourceMappingURL=IconEnvelopeO.js.map