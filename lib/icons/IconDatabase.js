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
var IconDatabase = (function (_super) {
    __extends(IconDatabase, _super);
    function IconDatabase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDatabase.prototype.render = function () {
        var className = this.name + " " + this.name + "--database";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 17.1q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0 17.2q5.3 0 9.9-1t7.3-2.8v3.8q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-3.8q2.7 1.9 7.3 2.8t9.8 1z m0-8.6q5.3 0 9.9-0.9t7.3-2.9v3.8q0 1.6-2.3 2.9t-6.3 2.1-8.6 0.7-8.6-0.7-6.2-2.1-2.3-2.9v-3.8q2.7 1.9 7.3 2.9t9.8 0.9z m0-25.7q4.7 0 8.6 0.8t6.3 2.1 2.3 2.8v2.9q0 1.5-2.3 2.8t-6.3 2.1-8.6 0.8-8.6-0.8-6.2-2.1-2.3-2.8v-2.9q0-1.5 2.3-2.8t6.3-2.1 8.5-0.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDatabase;
}(React.Component));
IconDatabase.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDatabase;
//# sourceMappingURL=IconDatabase.js.map