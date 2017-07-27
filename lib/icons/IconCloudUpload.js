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
var IconCloudUpload = (function (_super) {
    __extends(IconCloudUpload, _super);
    function IconCloudUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconCloudUpload.prototype.render = function () {
        var className = this.name + " " + this.name + "--cloud-upload " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.6 19.3q0-0.3-0.2-0.4l-7.3-7.4q-0.2-0.1-0.5-0.1t-0.5 0.1l-7.3 7.3q-0.2 0.3-0.2 0.5 0 0.3 0.2 0.5t0.5 0.2h4.6v7.3q0 0.3 0.2 0.5t0.5 0.2h4q0.3 0 0.5-0.2t0.2-0.5v-7.3h4.6q0.3 0 0.5-0.2t0.2-0.5z m13.3 6q0 3.3-2.4 5.7t-5.6 2.3h-22.6q-3.8 0-6.6-2.7t-2.7-6.6q0-2.7 1.5-5t3.9-3.4q-0.1-0.6-0.1-0.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.5-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.6-0.8 2.8 2.7 0.7 4.4 2.9t1.8 4.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconCloudUpload;
}(React.Component));
IconCloudUpload.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconCloudUpload;
//# sourceMappingURL=IconCloudUpload.js.map