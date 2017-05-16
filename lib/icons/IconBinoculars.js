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
var IconBinoculars = (function (_super) {
    __extends(IconBinoculars, _super);
    function IconBinoculars() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBinoculars.prototype.render = function () {
        var className = this.name + " " + this.name + "--binoculars";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.7 7.1v17.2q0 0.6-0.4 1t-1 0.4v12.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-11.5l5.6-19.4q0.1-0.6 0.7-0.6h9.4z m7.2 0v15.8h-5.8v-15.8h5.8z m17.1 20v11.5q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-12.9q-0.6 0-1-0.4t-0.4-1v-17.2h9.5q0.5 0 0.6 0.6z m-23.6-26.4v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z m15 0v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBinoculars;
}(React.Component));
IconBinoculars.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconBinoculars;
//# sourceMappingURL=IconBinoculars.js.map