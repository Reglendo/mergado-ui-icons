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
var IconBirthdayCake = (function (_super) {
    __extends(IconBirthdayCake, _super);
    function IconBirthdayCake() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBirthdayCake.prototype.render = function () {
        var className = this.name + " " + this.name + "--birthday-cake";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 31.4v8.6h-40v-8.6q1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.6-0.6 1.1-0.9t1.3-0.2 1.2 0.2 1.2 0.9q0.6 0.5 1 0.8t1.3 0.6 1.9 0.3q1.1 0 1.9-0.3t1.3-0.6 1.1-0.8q0.5-0.5 0.7-0.6t0.7-0.4 1-0.1q0.8 0 1.3 0.2t1.1 0.9q0.6 0.5 1.1 0.8t1.3 0.6 1.9 0.3 1.9-0.3 1.3-0.6 1-0.8q0.7-0.6 1.2-0.9t1.2-0.2q0.8 0 1.3 0.2t1.1 0.9q0.7 0.5 1.1 0.8t1.3 0.6 1.9 0.3z m0-7.1v4.3q-0.8 0-1.2-0.3t-1.2-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1 0.9q-0.5 0.4-0.8 0.6t-0.6 0.3-1 0.2q-0.8 0-1.3-0.3t-1.1-0.8q-0.7-0.6-1.1-0.9t-1.3-0.6-1.9-0.3q-1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.4 0.4-0.7 0.6t-0.7 0.3-1 0.2q-0.7 0-1.2-0.3t-1.2-0.8q-0.6-0.6-1-0.9t-1.3-0.6-1.9-0.3q-1.1 0-1.9 0.3t-1.3 0.6-1.1 0.9q-0.7 0.6-1.1 0.8t-1.3 0.3v-4.3q0-1.8 1.3-3t3-1.3h1.4v-10h5.7v10h5.7v-10h5.8v10h5.7v-10h5.7v10h1.4q1.8 0 3 1.3t1.3 3z m-28.6-19.3q0 1.7-0.8 2.6t-2 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.2-1.1t0.6-0.8 0.6-0.6 0.7-0.7 0.6-1 0.2-1.5q0.8 0 1.8 1.7t1 3.3z m11.5 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.9-2q0-0.6 0.3-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.8 0 1.9 1.7t1 3.3z m11.4 0q0 1.7-0.8 2.6t-2.1 1q-1.2 0-2-0.9t-0.8-2q0-0.6 0.2-1.1t0.5-0.8 0.7-0.6 0.7-0.7 0.5-1 0.2-1.5q0.9 0 1.9 1.7t1 3.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBirthdayCake;
}(React.Component));
IconBirthdayCake.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconBirthdayCake;
//# sourceMappingURL=IconBirthdayCake.js.map