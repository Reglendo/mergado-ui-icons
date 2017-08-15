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
var IconFileWordO = (function (_super) {
    __extends(IconFileWordO, _super);
    function IconFileWordO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFileWordO.prototype.render = function () {
        var className = this.name + " " + this.name + "--file-word-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-26.2-20v2.4h1.6l3.6 14.8h3.6l2.8-10.8q0.2-0.5 0.3-1.1 0-0.3 0-0.5h0.1l0.1 0.5q0 0.1 0 0.5t0.2 0.6l2.8 10.8h3.6l3.6-14.8h1.6v-2.4h-6.7v2.4h2l-2.2 9.8q-0.1 0.5-0.2 1l0 0.5h-0.1l-0.1-0.5q0-0.1-0.1-0.4t-0.1-0.6l-3.2-12.2h-2.5l-3.2 12.2q-0.1 0.2-0.1 0.6t-0.1 0.4l-0.1 0.5h-0.1l0-0.5q-0.1-0.5-0.2-1l-2.2-9.8h2v-2.4h-6.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconFileWordO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconFileWordO;
}(React.Component));
exports.default = IconFileWordO;
//# sourceMappingURL=IconFileWordO.js.map