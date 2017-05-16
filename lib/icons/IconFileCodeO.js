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
var IconFileCodeO = (function (_super) {
    __extends(IconFileCodeO, _super);
    function IconFileCodeO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFileCodeO.prototype.render = function () {
        var className = this.name + " " + this.name + "--file-code-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-20.7-20q0.2-0.2 0.5-0.2t0.5 0.1l1.2 0.9q0.2 0.1 0.2 0.4t-0.1 0.6l-4.1 5.4 4.1 5.4q0.2 0.3 0.1 0.5t-0.2 0.5l-1.2 0.9q-0.2 0.1-0.5 0.1t-0.5-0.3l-5-6.7q-0.3-0.4 0-0.8z m17.9 6.8q0.3 0.4 0 0.8l-5 6.7q-0.2 0.3-0.5 0.3t-0.5-0.1l-1.2-0.9q-0.2-0.2-0.3-0.5t0.2-0.5l4.1-5.4-4.1-5.4q-0.2-0.3-0.2-0.6t0.3-0.4l1.2-0.9q0.2-0.2 0.5-0.1t0.5 0.2z m-13.8 10.3q-0.3-0.1-0.5-0.3t-0.1-0.6l3.1-18.5q0-0.3 0.3-0.5t0.5-0.1l1.4 0.2q0.3 0.1 0.5 0.3t0.1 0.5l-3.1 18.6q0 0.3-0.3 0.5t-0.5 0.1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFileCodeO;
}(React.Component));
IconFileCodeO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconFileCodeO;
//# sourceMappingURL=IconFileCodeO.js.map