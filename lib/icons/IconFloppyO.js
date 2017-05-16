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
var IconFloppyO = (function (_super) {
    __extends(IconFloppyO, _super);
    function IconFloppyO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFloppyO.prototype.render = function () {
        var className = this.name + " " + this.name + "--floppy-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.6 34.3h17.1v-8.6h-17.1v8.6z m20 0h2.8v-20q0-0.3-0.2-0.9t-0.4-0.7l-6.3-6.3q-0.2-0.2-0.8-0.5t-0.8-0.2v9.3q0 0.9-0.7 1.5t-1.5 0.6h-12.8q-0.9 0-1.6-0.6t-0.6-1.5v-9.3h-2.8v28.6h2.8v-9.3q0-0.9 0.6-1.5t1.6-0.6h18.5q0.9 0 1.5 0.6t0.7 1.5v9.3z m-8.6-20.7v-7.2q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v7.2q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m14.3 0.7v20.7q0 0.9-0.6 1.5t-1.6 0.6h-30q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h20.8q0.9 0 1.9 0.4t1.7 1.1l6.3 6.2q0.6 0.6 1 1.7t0.5 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFloppyO;
}(React.Component));
IconFloppyO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFloppyO;
//# sourceMappingURL=IconFloppyO.js.map