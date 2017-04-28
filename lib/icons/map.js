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
var IconMap = (function (_super) {
    __extends(IconMap, _super);
    function IconMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMap.prototype.render = function () {
        var className = this.name + " " + this.name + "--map";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m11.4 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.3 0.6l-10.7 5.7q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.4-0.6l10.7-5.7q0.2-0.1 0.3-0.1z m27.9 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.4 0.6l-10.7 5.7q-0.1 0.1-0.3 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.3-0.6l10.8-5.7q0.1-0.1 0.3-0.1z m-25 0q0.2 0 0.3 0.1l11.4 5.7q0.4 0.2 0.4 0.6v32.9q0 0.3-0.2 0.5t-0.5 0.2q-0.2 0-0.3-0.1l-11.4-5.7q-0.4-0.2-0.4-0.6v-32.9q0-0.3 0.2-0.5t0.5-0.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMap;
}(React.Component));
IconMap.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconMap;
//# sourceMappingURL=map.js.map