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
var IconObjectUngroup = (function (_super) {
    __extends(IconObjectUngroup, _super);
    function IconObjectUngroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconObjectUngroup.prototype.render = function () {
        var className = this.name + " " + this.name + "--object-ungroup " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40.3 17.8h-2.2v11.2h2.2v6.7h-6.7v-2.3h-15.7v2.3h-6.7v-6.7h2.2v-2.3h-6.7v2.3h-6.7v-6.8h2.2v-11.2h-2.2v-6.7h6.7v2.3h15.7v-2.3h6.7v6.7h-2.2v2.3h6.7v-2.3h6.7v6.8z m-4.4-4.5v2.2h2.2v-2.2h-2.2z m-11.2-6.7v2.2h2.2v-2.2h-2.2z m-22.5 0v2.2h2.3v-2.2h-2.3z m2.3 20.1v-2.2h-2.3v2.2h2.3z m22.4-2.2h-2.2v2.2h2.2v-2.2z m-20.2 0h15.7v-2.3h2.3v-11.2h-2.3v-2.2h-15.7v2.2h-2.2v11.2h2.2v2.3z m9 8.9v-2.2h-2.3v2.2h2.3z m22.4 0v-2.2h-2.2v2.2h2.2z m-2.2-4.4v-11.2h-2.3v-2.3h-6.7v6.7h2.2v6.8h-6.7v-2.3h-6.7v2.3h2.2v2.2h15.7v-2.2h2.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconObjectUngroup;
}(React.Component));
IconObjectUngroup.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconObjectUngroup;
//# sourceMappingURL=IconObjectUngroup.js.map