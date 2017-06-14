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
var IconBluetooth = (function (_super) {
    __extends(IconBluetooth, _super);
    function IconBluetooth() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBluetooth.prototype.render = function () {
        var className = this.name + " " + this.name + "--bluetooth " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m21.8 23.5l3.3 3.3-3.4 3.3z m0-13.6l3.3 3.3-3.3 3.3z m-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8-10.4-10.4v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6z m16.1-17.2q0 4.7-0.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9 0.5-4.9-0.5-4-2-3.1-3.6-2-5.7-0.7-8.2 0.7-8.2 2-5.7 3.1-3.6 4-2 4.9-0.5 4.9 0.5 4.1 2 3.1 3.6 2 5.7 0.7 8.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBluetooth;
}(React.Component));
IconBluetooth.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconBluetooth;
//# sourceMappingURL=IconBluetooth.js.map