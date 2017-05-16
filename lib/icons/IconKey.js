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
var IconKey = (function (_super) {
    __extends(IconKey, _super);
    function IconKey() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconKey.prototype.render = function () {
        var className = this.name + " " + this.name + "--key";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m19.6 11.4q0-1.8-1.3-3t-3-1.3-3.1 1.3-1.2 3q0 1 0.4 1.9-0.9-0.4-1.8-0.4-1.8 0-3.1 1.2t-1.2 3 1.2 3.1 3.1 1.2 3-1.2 1.3-3.1q0-0.9-0.5-1.8 0.9 0.4 1.9 0.4 1.8 0 3-1.2t1.3-3.1z m19 15.7q0 0.4-1.1 1.5t-1.5 1.1q-0.2 0-0.6-0.3t-0.9-0.8-0.8-0.9-0.6-0.6l-2.1 2.2 4.9 4.9q0.6 0.6 0.6 1.5 0 1-0.8 1.8t-1.8 0.9q-0.9 0-1.6-0.6l-14.9-15q-4 2.9-8.2 2.9-3.6 0-5.9-2.3t-2.3-5.9q0-3.6 2.1-7t5.6-5.5 6.9-2.1q3.7 0 6 2.2t2.3 6q0 4.2-3 8.1l8 7.9 2.1-2.1q-0.1-0.1-0.6-0.5t-0.9-0.9-0.7-0.8-0.4-0.7q0-0.3 1.1-1.4t1.5-1.1q0.3 0 0.5 0.2 0.1 0.1 1 1t1.9 1.8 1.9 1.9 1.6 1.7 0.7 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconKey;
}(React.Component));
IconKey.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconKey;
//# sourceMappingURL=IconKey.js.map