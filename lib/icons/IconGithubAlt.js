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
var IconGithubAlt = (function (_super) {
    __extends(IconGithubAlt, _super);
    function IconGithubAlt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGithubAlt.prototype.render = function () {
        var className = this.name + " " + this.name + "--github-alt";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m15.8 27.1q0 0.9-0.3 1.9t-1 1.7-1.6 0.7-1.6-0.7-1-1.7-0.2-1.9 0.3-1.8 0.9-1.7 1.6-0.7 1.6 0.7 1 1.7 0.3 1.8z m14.3 0q0 0.9-0.3 1.9t-1 1.7-1.6 0.7-1.6-0.7-1-1.7-0.2-1.9 0.2-1.8 1-1.7 1.6-0.7 1.6 0.7 1 1.7 0.3 1.8z m3.5 0q0-2.6-1.5-4.5t-4.2-1.9q-0.9 0-4.3 0.5-1.6 0.2-3.5 0.2t-3.5-0.2q-3.4-0.5-4.4-0.5-2.6 0-4.2 1.9t-1.5 4.5q0 2 0.7 3.5t1.8 2.3 2.7 1.3 3.2 0.7 3.3 0.1h3.7q1.9 0 3.4-0.1t3.1-0.7 2.7-1.3 1.8-2.3 0.7-3.5z m5-3.9q0 4.6-1.3 7.4-0.9 1.7-2.4 3t-3.1 1.9-3.8 1.1-3.8 0.4-3.8 0.1q-1.7 0-3.1 0t-3.3-0.3-3.4-0.7-3.1-1.1-2.7-1.8-1.9-2.6q-1.4-2.7-1.4-7.4 0-5.3 3-8.8-0.6-1.9-0.6-3.8 0-2.6 1.2-4.9 2.4 0 4.2 0.9t4.2 2.8q3.3-0.8 6.9-0.8 3.3 0 6.3 0.7 2.3-1.8 4.2-2.7t4.2-0.9q1.1 2.3 1.1 4.9 0 1.9-0.6 3.7 3 3.6 3 8.9z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconGithubAlt;
}(React.Component));
IconGithubAlt.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconGithubAlt;
//# sourceMappingURL=IconGithubAlt.js.map