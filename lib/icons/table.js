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
var IconTable = (function (_super) {
    __extends(IconTable, _super);
    function IconTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconTable.prototype.render = function () {
        var className = this.name + " " + this.name + "--table";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.9 30.7v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m0-8.6v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.6z m11.5 8.6v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m-11.5-17.1v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.3 0 0.5-0.2t0.2-0.5z m11.5 8.5v-4.2q0-0.4-0.2-0.6t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.6z m11.4 8.6v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m-11.4-17.1v-4.3q0-0.3-0.2-0.5t-0.6-0.2h-7.1q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.1q0.4 0 0.6-0.2t0.2-0.5z m11.4 8.5v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.6v4.2q0 0.4 0.2 0.6t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.6z m0-8.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m2.8-7.2v24.3q0 1.5-1 2.5t-2.5 1.1h-30q-1.5 0-2.5-1.1t-1.1-2.5v-24.3q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconTable;
}(React.Component));
IconTable.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconTable;
//# sourceMappingURL=table.js.map