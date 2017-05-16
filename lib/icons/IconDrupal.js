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
var IconDrupal = (function (_super) {
    __extends(IconDrupal, _super);
    function IconDrupal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDrupal.prototype.render = function () {
        var className = this.name + " " + this.name + "--drupal";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m29.1 35.4q-0.2-0.4-0.6-0.1-0.7 0.5-1.9 0.9t-3 0.3q-2.8 0-4.3-1.1-0.1 0-0.2 0-0.3 0-0.6 0.2-0.2 0.2-0.2 0.4t0.2 0.4q0.7 0.7 1.9 1.1t2.3 0.2 2.2-0.1q0.9-0.1 1.9-0.4t1.5-0.7 0.6-0.5q0.3-0.2 0.1-0.6z m-0.9-2.6q-0.4-1-0.9-1.3-0.5-0.4-1.7-0.4-1 0-1.6 0.3-0.6 0.2-1.7 1.2-0.6 0.5-0.3 1 0.2 0.2 0.4 0.1t0.7-0.5q0.1-0.1 0.2-0.2t0.3-0.2 0.2-0.2 0.3-0.1 0.2-0.1 0.4-0.1 0.3-0.1 0.5 0q0.6 0 1 0.2t0.5 0.3 0.3 0.5q0.2 0.3 0.3 0.4t0.3 0q0.5-0.3 0.3-0.8z m7.9-6.2q0-0.5-0.1-1t-0.4-1-0.7-0.8-1.2-0.4q-0.7 0-2.2 1t-2.9 1.8-2.2 1q-0.6 0-1.4-0.5t-1.7-1.1-1.9-1.2-2.2-1.1-2.5-0.5q-2.6 0.1-4.4 1.8t-1.9 4q0 2.5 1.7 3.6 0.6 0.5 1.4 0.7t2.3 0.2q1.3 0 2.9-0.8t3-1.6 2.7-1.5 2.1-0.7q0.6 0 1.4 0.7t1.6 1.5 1.6 1.5 1.2 0.7q0.8 0.1 1.3-0.3t1.2-1.4q0.7-0.9 1-2.3t0.3-2.3z m1.2-3.6q0 3.7-1.4 6.8t-3.7 5.3-5.4 3.3-6.5 1.2-6.5-1.3-5.6-3.5-3.8-5.4-1.4-6.7q0-2 0.4-3.9t1.1-3.2 1.6-2.7 1.8-2.1 1.7-1.5 1.4-1.1 1-0.5q0.3-0.2 1.1-0.6t1.2-0.6 1.1-0.7 1.4-1q0.8-0.6 1.3-1.6t0.6-2.8q2.9 3.5 4.2 4.3 1 0.7 2.9 1.5t2.9 1.5q0.4 0.3 0.8 0.6t1.4 1 1.7 1.6 1.7 2.1 1.5 2.7 1.1 3.3 0.4 4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDrupal;
}(React.Component));
IconDrupal.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDrupal;
//# sourceMappingURL=IconDrupal.js.map