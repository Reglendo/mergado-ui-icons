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
var IconRetweet = (function (_super) {
    __extends(IconRetweet, _super);
    function IconRetweet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRetweet.prototype.render = function () {
        var className = this.name + " " + this.name + "--retweet";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.6 32.6q0 0.3-0.2 0.5t-0.5 0.2h-19.9q-0.2 0-0.3-0.1t-0.2-0.1-0.1-0.2-0.1-0.2 0-0.2v-12.5h-4q-0.5 0-0.9-0.4t-0.4-0.9q0-0.5 0.3-0.9l6.7-8q0.4-0.4 1-0.4t1 0.4l6.6 8q0.3 0.4 0.3 0.9 0 0.5-0.3 0.9t-1 0.4h-4v8h12q0.3 0 0.5 0.2l3.3 4q0.2 0.2 0.2 0.4z m13.3-8.6q0 0.5-0.3 0.8l-6.7 8q-0.4 0.5-1 0.5t-1-0.5l-6.7-8q-0.3-0.3-0.3-0.8 0-0.6 0.4-0.9t0.9-0.4h4v-8h-11.9q-0.4 0-0.5-0.3l-3.4-3.9q-0.1-0.2-0.1-0.5 0-0.2 0.2-0.4t0.5-0.2h19.9q0.2 0 0.3 0t0.2 0.2 0.1 0.1 0 0.3 0.1 0.2v12.5h3.9q0.6 0 1 0.4t0.4 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRetweet;
}(React.Component));
IconRetweet.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconRetweet;
//# sourceMappingURL=retweet.js.map