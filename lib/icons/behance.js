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
var IconBehance = (function (_super) {
    __extends(IconBehance, _super);
    function IconBehance() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBehance.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 9.2h-9.9v2.4h9.9v-2.4z m-4.9 8.3q-1.8 0-2.9 1t-1.2 2.7h8q-0.4-3.7-3.9-3.7z m0.3 11.3q1.2 0 2.4-0.6t1.4-1.7h4.3q-1.9 6-8.3 6-4.1 0-6.6-2.6t-2.4-6.7q0-4.1 2.5-6.7t6.5-2.7q2.7 0 4.7 1.3t3 3.5 1 4.8q0 0.3-0.1 0.9h-12.8q0 2.2 1.2 3.3t3.2 1.2z m-25.9-1h5.7q4 0 4-3.2 0-3.5-3.9-3.5h-5.8v6.7z m0-10.4h5.4q1.5 0 2.4-0.7t0.9-2.2q0-2.8-3.7-2.8h-5v5.7z m-5.4-9.9h11.5q1.7 0 3 0.3t2.5 0.9 1.7 1.9 0.7 3q0 3.5-3.4 5.1 2.2 0.6 3.4 2.2t1.1 4q0 1.4-0.5 2.6t-1.3 2.1-1.9 1.3-2.3 0.8-2.6 0.3h-11.9v-24.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBehance;
}(React.Component));
IconBehance.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconBehance;
//# sourceMappingURL=behance.js.map