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
var IconLastfmSquare = (function (_super) {
    __extends(IconLastfmSquare, _super);
    function IconLastfmSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLastfmSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--lastfm-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35 23.5q0-3.9-5.3-5.4-0.7-0.2-1.1-0.3t-0.9-0.6-0.6-1q0-0.1-0.1-0.2t0-0.3-0.1-0.1q0-0.8 0.6-1.4t1.3-0.5q1.2 0 1.6 0.3h0q0.4 0.4 0.9 1.2l2-1.6q-0.8-1.2-1.1-1.4-0.7-0.7-1.5-0.9t-1.9-0.2q-1.8 0-3.1 1.3t-1.4 3q0 0.2 0 0.5 0.4 2.2 1.5 3.2t3.3 1.6q0.6 0.2 1.1 0.3t1 0.5 0.8 0.8 0.3 1v0.1q0.1 1.3-0.9 2.1t-2.2 0.8q-2.2 0-3.7-3.2-0.6-1.1-1.2-2.7t-1.1-2.8-1.2-2.5-1.6-2.1-2.3-1.4-3.3-0.5q-2.3 0-4.3 1.2t-3.2 3.3-1.1 4.3v0q0.1 2.4 1.1 4.5t3 3.3 4.4 1.2q4.1 0 6.2-2.4 0.4-0.6 0.7-1.2l-1.4-2.4q-0.9 1.8-2.2 2.6t-3.2 0.8q-2.6 0-4.3-1.9t-1.7-4.6q0-2.3 1.8-4.2t4.2-1.9q2.5 0 3.8 1.2t2.3 3.8q0.2 0.5 0.6 1.6t0.6 1.7 0.7 1.6 0.9 1.7 1 1.4 1.2 1.2 1.5 0.7 1.8 0.3q2.4 0 4.1-1.5t1.7-3.9z m2.3-14.2v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconLastfmSquare;
}(React.Component));
IconLastfmSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconLastfmSquare;
//# sourceMappingURL=IconLastfmSquare.js.map