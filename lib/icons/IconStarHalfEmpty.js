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
var IconStarHalfEmpty = (function (_super) {
    __extends(IconStarHalfEmpty, _super);
    function IconStarHalfEmpty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStarHalfEmpty.prototype.render = function () {
        var className = this.name + " " + this.name + "--star-half-empty";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28 21.4l5.7-5.6-9.4-1.4-0.7-1.3-3.5-7.2v21.5l1.3 0.7 7.1 3.7-1.4-7.9-0.2-1.5z m10.1-5.9l-8.1 7.9 1.9 11.2q0.1 0.7-0.2 1.1t-0.7 0.4q-0.4 0-0.9-0.2l-10-5.3-10 5.3q-0.6 0.2-0.9 0.2-0.6 0-0.8-0.4t-0.1-1.1l1.9-11.2-8.1-7.9q-0.8-0.7-0.6-1.3t1.3-0.8l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9 0.6 0 1.1 0.9l5 10.2 11.2 1.6q1 0.2 1.2 0.8t-0.5 1.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStarHalfEmpty;
}(React.Component));
IconStarHalfEmpty.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconStarHalfEmpty;
//# sourceMappingURL=IconStarHalfEmpty.js.map