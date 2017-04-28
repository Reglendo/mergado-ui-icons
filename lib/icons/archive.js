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
var IconArchive = (function (_super) {
    __extends(IconArchive, _super);
    function IconArchive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconArchive.prototype.render = function () {
        var className = this.name + " " + this.name + "--archive";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.3 18.6q0-0.6-0.4-1t-1-0.5h-5.8q-0.5 0-1 0.5t-0.4 1 0.4 1 1 0.4h5.8q0.5 0 1-0.4t0.4-1z m12.8-4.3v21.4q0 0.6-0.4 1t-1 0.4h-31.4q-0.6 0-1-0.4t-0.4-1v-21.4q0-0.6 0.4-1t1-0.4h31.4q0.6 0 1 0.4t0.4 1z m1.5-10v5.7q0 0.6-0.5 1t-1 0.4h-34.2q-0.6 0-1-0.4t-0.5-1v-5.7q0-0.6 0.5-1t1-0.4h34.2q0.6 0 1 0.4t0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconArchive;
}(React.Component));
IconArchive.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconArchive;
//# sourceMappingURL=archive.js.map