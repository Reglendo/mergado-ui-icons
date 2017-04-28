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
var IconSitemap = (function (_super) {
    __extends(IconSitemap, _super);
    function IconSitemap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSitemap.prototype.render = function () {
        var className = this.name + " " + this.name + "--sitemap";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 27.9v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3h-11.5v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3h-11.5v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6v7.1q0 0.9-0.6 1.5t-1.5 0.6h-7.2q-0.9 0-1.5-0.6t-0.6-1.5v-7.1q0-0.9 0.6-1.6t1.5-0.6h2.2v-4.3q0-1.1 0.8-2t2-0.8h11.5v-4.3h-2.2q-0.9 0-1.5-0.6t-0.6-1.6v-7.1q0-0.9 0.6-1.5t1.5-0.6h7.2q0.9 0 1.5 0.6t0.6 1.5v7.1q0 0.9-0.6 1.6t-1.5 0.6h-2.2v4.3h11.5q1.1 0 2 0.8t0.8 2v4.3h2.2q0.9 0 1.5 0.6t0.6 1.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconSitemap;
}(React.Component));
IconSitemap.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconSitemap;
//# sourceMappingURL=sitemap.js.map