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
var IconRedditSquare = (function (_super) {
    __extends(IconRedditSquare, _super);
    function IconRedditSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRedditSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--reddit-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24 25.2q0.3 0.3 0 0.6-1.2 1.2-3.9 1.2t-3.8-1.2q-0.3-0.3 0-0.6 0.1-0.1 0.3-0.1t0.3 0.1q0.9 0.9 3.2 0.9t3.3-0.9q0.1-0.1 0.3-0.1t0.3 0.1z m-5.9-3.5q0 0.7-0.5 1.2t-1.2 0.5-1.2-0.5-0.5-1.2q0-0.7 0.5-1.2t1.2-0.5 1.2 0.5 0.5 1.2z m7.5 0q0 0.7-0.5 1.2t-1.2 0.5-1.2-0.5-0.5-1.2q0-0.7 0.5-1.2t1.2-0.5 1.2 0.5 0.5 1.2z m4.8-2.3q0-0.9-0.6-1.6t-1.7-0.7q-0.9 0-1.6 0.7-2.5-1.7-6-1.8l1.3-5.4 3.8 0.9q0 0.7 0.5 1.2t1.2 0.4q0.7 0 1.2-0.5t0.5-1.2-0.5-1.2-1.2-0.5q-1.1 0-1.6 1l-4.2-1q-0.4-0.1-0.4 0.3l-1.4 6q-3.4 0.1-5.9 1.9-0.7-0.8-1.6-0.8-1 0-1.7 0.7t-0.6 1.6q0 0.7 0.3 1.2t0.9 0.9q-0.1 0.6-0.1 1.1 0 2.7 2.7 4.6t6.5 2q3.8 0 6.4-2t2.7-4.6q0-0.6-0.1-1.1 0.5-0.3 0.9-0.9t0.3-1.2z m6.9-10.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRedditSquare;
}(React.Component));
IconRedditSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
};
exports.default = IconRedditSquare;
//# sourceMappingURL=IconRedditSquare.js.map