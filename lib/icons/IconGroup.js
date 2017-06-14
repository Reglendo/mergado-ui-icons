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
var IconGroup = (function (_super) {
    __extends(IconGroup, _super);
    function IconGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGroup.prototype.render = function () {
        var className = this.name + " " + this.name + "--group " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m12.3 20q-3.4 0.1-5.5 2.7h-2.8q-1.7 0-2.8-0.9t-1.2-2.4q0-7.4 2.6-7.4 0.1 0 0.9 0.5t2 0.8 2.5 0.5q1.4 0 2.7-0.5-0.1 0.8-0.1 1.4 0 2.9 1.7 5.3z m22.3 13.2q0 2.5-1.6 4t-4 1.4h-18.1q-2.6 0-4.1-1.4t-1.5-4q0-1.1 0.1-2.1t0.3-2.3 0.5-2.2 0.9-2.1 1.3-1.6 1.8-1.2 2.3-0.4q0.2 0 0.9 0.5t1.5 1 2.2 1 2.8 0.4 2.8-0.4 2.3-1 1.5-1 0.9-0.5q1.2 0 2.3 0.4t1.8 1.2 1.2 1.6 0.9 2.1 0.6 2.2 0.3 2.3 0.1 2.1z m-21.3-26.5q0 2.2-1.6 3.8t-3.7 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.7 1.6 1.6 3.7z m14.6 8q0 3.3-2.3 5.6t-5.7 2.4-5.6-2.4-2.3-5.6 2.3-5.7 5.6-2.3 5.7 2.3 2.3 5.7z m12 4.7q0 1.6-1.2 2.4t-2.9 0.9h-2.7q-2.2-2.6-5.5-2.7 1.6-2.4 1.6-5.3 0-0.6-0.1-1.4 1.4 0.5 2.8 0.5 1.2 0 2.5-0.5t2-0.8 0.9-0.5q2.6 0 2.6 7.4z m-2.7-12.7q0 2.2-1.5 3.8t-3.8 1.5-3.8-1.5-1.5-3.8 1.5-3.7 3.8-1.6 3.8 1.6 1.5 3.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGroup;
}(React.Component));
IconGroup.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconGroup;
//# sourceMappingURL=IconGroup.js.map