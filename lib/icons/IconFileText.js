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
var IconFileText = (function (_super) {
    __extends(IconFileText, _super);
    function IconFileText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFileText.prototype.render = function () {
        var className = this.name + " " + this.name + "--file-text";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 10.6q0.3 0.3 0.6 0.8h-10.5v-10.5q0.4 0.3 0.8 0.6z m-10.7 3.7h12.2v23.6q0 0.9-0.6 1.5t-1.6 0.6h-30q-0.8 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h17.9v12.1q0 0.9 0.6 1.6t1.5 0.6z m3.6 16.4v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-15.7q-0.3 0-0.5 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.5 0.2h15.7q0.3 0 0.5-0.2t0.2-0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFileText;
}(React.Component));
IconFileText.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFileText;
//# sourceMappingURL=IconFileText.js.map