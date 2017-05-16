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
var IconAndroid = (function (_super) {
    __extends(IconAndroid, _super);
    function IconAndroid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconAndroid.prototype.render = function () {
        var className = this.name + " " + this.name + "--android";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.5 10.8q0.4 0 0.6-0.3t0.3-0.6-0.3-0.6-0.6-0.3-0.6 0.3-0.2 0.6 0.2 0.6 0.6 0.3z m9.4 0q0.4 0 0.6-0.3t0.3-0.6-0.3-0.6-0.6-0.3-0.6 0.3-0.2 0.6 0.2 0.6 0.6 0.3z m-18.1 4.1q0.9 0 1.6 0.7t0.7 1.6v9.6q0 0.9-0.7 1.6t-1.6 0.7-1.6-0.7-0.7-1.6v-9.6q0-1 0.7-1.6t1.6-0.7z m23.7 0.4v14.9q0 1-0.8 1.7t-1.7 0.7h-1.6v5.1q0 1-0.7 1.6t-1.6 0.7-1.7-0.7-0.6-1.6v-5.1h-3.1v5.1q0 1-0.7 1.6t-1.6 0.7q-1 0-1.6-0.7t-0.7-1.6l0-5.1h-1.7q-1 0-1.7-0.7t-0.7-1.7v-14.9h20.5z m-5.2-9q2.4 1.2 3.8 3.4t1.4 4.8h-20.6q0-2.6 1.4-4.8t3.8-3.4l-1.5-3q-0.2-0.2 0.1-0.4 0.3-0.1 0.4 0.1l1.6 3q2.1-1 4.5-1t4.5 1l1.6-3q0.2-0.2 0.5-0.1 0.2 0.2 0.1 0.4z m10.6 10.9v9.6q0 0.9-0.6 1.6t-1.7 0.7q-0.9 0-1.6-0.7t-0.6-1.6v-9.6q0-1 0.6-1.7t1.6-0.6q1 0 1.7 0.6t0.6 1.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconAndroid;
}(React.Component));
IconAndroid.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconAndroid;
//# sourceMappingURL=IconAndroid.js.map