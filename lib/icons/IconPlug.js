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
var IconPlug = (function (_super) {
    __extends(IconPlug, _super);
    function IconPlug() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPlug.prototype.render = function () {
        var className = this.name + " " + this.name + "--plug " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.2 10.1q0.8 0.8 0.8 2t-0.8 2.1l-9 8.9 3.4 3.3-3.6 3.6q-3.6 3.6-8.7 4.2t-9.2-2.3l-8.1 8.1h-4v-4l8.1-8.1q-2.8-4.1-2.3-9.2t4.2-8.7l3.6-3.6 3.3 3.4 8.9-9q0.9-0.8 2.1-0.8t2 0.8 0.8 2-0.8 2.1l-8.9 8.9 5.2 5.2 8.9-8.9q0.9-0.8 2.1-0.8t2 0.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconPlug.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconPlug;
}(React.Component));
exports.default = IconPlug;
//# sourceMappingURL=IconPlug.js.map