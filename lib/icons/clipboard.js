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
var IconClipboard = (function (_super) {
    __extends(IconClipboard, _super);
    function IconClipboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconClipboard.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m17.1 37.1h20v-14.2h-9.2q-0.9 0-1.6-0.7t-0.6-1.5v-9.3h-8.6v25.7z m5.8-32.1v-1.4q0-0.3-0.3-0.5t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.3-0.5z m5.7 15h6.6l-6.6-6.7v6.7z m11.4 2.9v15q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-12.2q-0.9 0-1.5-0.6t-0.6-1.6v-30q0-0.8 0.6-1.5t1.5-0.6h24.3q0.9 0 1.5 0.6t0.7 1.5v7.4q0.4 0.3 0.8 0.6l9.1 9.1q0.6 0.6 1.1 1.7t0.4 2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconClipboard;
}(React.Component));
IconClipboard.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconClipboard;
//# sourceMappingURL=clipboard.js.map