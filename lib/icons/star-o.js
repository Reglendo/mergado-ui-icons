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
var IconStarO = (function (_super) {
    __extends(IconStarO, _super);
    function IconStarO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStarO.prototype.render = function () {
        var className = this.name + " " + this.name + "--star-o";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.9 22.4l6.8-6.6-9.4-1.4-4.2-8.5-4.2 8.5-9.5 1.4 6.9 6.6-1.7 9.4 8.5-4.4 8.4 4.4z m11.7-8q0 0.5-0.5 1.1l-8.1 7.9 1.9 11.2q0 0.1 0 0.4 0 1.1-0.9 1.1-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9t1.1 0.9l5 10.2 11.2 1.6q1.2 0.2 1.2 1z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStarO;
}(React.Component));
IconStarO.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconStarO;
//# sourceMappingURL=star-o.js.map