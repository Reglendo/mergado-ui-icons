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
var IconUpload = (function (_super) {
    __extends(IconUpload, _super);
    function IconUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconUpload.prototype.render = function () {
        var className = this.name + " " + this.name + "--upload " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.1 32.9q0-0.6-0.5-1t-1-0.5-1 0.5-0.4 1 0.4 1 1 0.4 1-0.4 0.5-1z m5.7 0q0-0.6-0.4-1t-1-0.5-1 0.5-0.5 1 0.5 1 1 0.4 1-0.4 0.4-1z m2.8-5v7.1q0 0.9-0.6 1.5t-1.5 0.6h-32.9q-0.8 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h9.6q0.4 1.3 1.5 2.1t2.5 0.8h5.7q1.4 0 2.5-0.8t1.6-2.1h9.5q0.9 0 1.5 0.6t0.6 1.6z m-7.2-14.5q-0.4 0.9-1.3 0.9h-5.7v10q0 0.6-0.5 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-10h-5.7q-1 0-1.3-0.9-0.4-0.9 0.3-1.5l10-10q0.4-0.5 1-0.5t1 0.5l10 10q0.7 0.6 0.3 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconUpload;
}(React.Component));
IconUpload.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconUpload;
//# sourceMappingURL=IconUpload.js.map