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
var IconViadeo = (function (_super) {
    __extends(IconViadeo, _super);
    function IconViadeo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconViadeo.prototype.render = function () {
        var className = this.name + " " + this.name + "--viadeo";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.9 24.7q0 4.8-3.2 8.3-3.3 3.6-8.5 3.6-5.2 0-8.4-3.6-3.3-3.5-3.3-8.3 0-3.3 1.5-6.1t4.2-4.3 6-1.7q2.2 0 4.1 0.7-0.7 1.4-0.9 2.8-1.5-0.6-3.2-0.6-3.7 0-6.2 2.8t-2.6 6.5q0 3.8 2.5 6.4t6.3 2.6 6.3-2.6 2.5-6.4q0-2-0.7-3.7 1.4-0.3 2.7-1.1 0.9 2.1 0.9 4.7z m-4.5-4.2q0 4.3-1.8 7.7t-5.3 5.6l-0.3 0q-0.7 0-1.4-0.1 1.8-0.7 3.3-2.3t2.2-3.4 1.3-4.2 0.7-4.3 0.1-4q0-1.6 0-2.3 1.2 3.6 1.2 7.3z m-1.2-7.4v0.1q-1.7-4.8-4.6-9.8 1.9 1.3 3.1 4.1t1.5 5.6z m5.4 4.6q-1.9 0-3.6-1.7 4.9-2.7 6.5-5.5 0.4-0.8 0.5-1.3-1 2.1-3.1 3.8t-4.6 2.1q-0.8-1.2-0.8-2.5 0-0.8 0.4-1.8t1-1.5q1-1 3.5-1.6 1.3-0.4 2.3-1.3t1.7-2.3q1.6 2.4 1.6 5.7 0 2.4-0.5 3.8-0.7 1.7-2 2.9t-2.9 1.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconViadeo;
}(React.Component));
IconViadeo.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconViadeo;
//# sourceMappingURL=IconViadeo.js.map