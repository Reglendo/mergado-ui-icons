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
var IconUserPlus = (function (_super) {
    __extends(IconUserPlus, _super);
    function IconUserPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconUserPlus.prototype.render = function () {
        var className = this.name + " " + this.name + "--user-plus";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2z m18.6 2.5h6.8q0.3 0 0.5 0.2t0.2 0.4v3.7q0 0.3-0.2 0.5t-0.5 0.2h-6.8v6.8q0 0.2-0.2 0.4t-0.4 0.2h-3.7q-0.3 0-0.5-0.2t-0.2-0.4v-6.8h-6.8q-0.3 0-0.4-0.2t-0.2-0.5v-3.7q0-0.2 0.2-0.4t0.4-0.2h6.8v-6.8q0-0.3 0.2-0.5t0.4-0.2h3.8q0.2 0 0.4 0.2t0.2 0.5v6.8z m-14.3 4.3q0 1 0.7 1.8t1.8 0.7h5v4.6q-1.4 1-3.4 1h-16.9q-2.4 0-3.8-1.3t-1.4-3.7q0-1 0.1-2t0.2-2.1 0.6-2.2 0.8-1.8 1.2-1.6 1.7-1.1 2.1-0.3q0.4 0 0.8 0.3 1.5 1.2 3 1.8t3.2 0.6 3.2-0.6 3-1.8q0.3-0.3 0.7-0.3 2.6 0 4.2 1.8h-4.3q-1 0-1.7 0.8t-0.8 1.7v3.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconUserPlus;
}(React.Component));
IconUserPlus.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconUserPlus;
//# sourceMappingURL=IconUserPlus.js.map