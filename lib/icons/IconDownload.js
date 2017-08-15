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
var IconDownload = (function (_super) {
    __extends(IconDownload, _super);
    function IconDownload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDownload.prototype.render = function () {
        var className = this.name + " " + this.name + "--download " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.1 30q0-0.6-0.5-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h10.4l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q0.9 0 1.5 0.6t0.6 1.5z m-7.2-12.7q0.4 0.9-0.3 1.6l-10 10q-0.4 0.4-1 0.4t-1-0.4l-10-10q-0.7-0.7-0.3-1.6 0.3-0.9 1.3-0.9h5.7v-10q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.5 1v10h5.7q0.9 0 1.3 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconDownload.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconDownload;
}(React.Component));
exports.default = IconDownload;
//# sourceMappingURL=IconDownload.js.map