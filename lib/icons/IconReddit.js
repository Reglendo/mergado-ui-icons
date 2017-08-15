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
var IconReddit = (function (_super) {
    __extends(IconReddit, _super);
    function IconReddit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconReddit.prototype.render = function () {
        var className = this.name + " " + this.name + "--reddit " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.4 26.1q0.4 0.3 0 0.6-1.3 1.4-4.4 1.4t-4.4-1.4q-0.4-0.3 0-0.6 0.1-0.2 0.3-0.2t0.3 0.2q1.1 1 3.8 1 2.7 0 3.8-1.1 0.1-0.1 0.3-0.1t0.3 0.1z m-6.8-4.1q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4q0-0.8 0.6-1.4t1.4-0.6 1.4 0.6 0.6 1.4z m8.8 0q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4 0.6-1.4 1.4-0.6 1.4 0.6 0.6 1.4z m5.6-2.7q0-1.1-0.8-1.8t-1.9-0.8-1.9 0.8q-2.9-2-6.9-2.2l1.4-6.3 4.4 1q0 0.8 0.6 1.4t1.4 0.6 1.4-0.6 0.6-1.4-0.6-1.4-1.4-0.6q-1.2 0-1.8 1.1l-4.9-1.1q-0.4-0.1-0.6 0.4l-1.5 6.9q-4 0.2-6.9 2.2-0.8-0.8-1.9-0.8-1.1 0-1.9 0.8t-0.8 1.8q0 0.8 0.4 1.5t1.1 0.9q-0.1 0.6-0.1 1.3 0 3.2 3.1 5.4t7.5 2.3q4.4 0 7.6-2.3t3.1-5.4q0-0.7-0.2-1.3 0.7-0.3 1.1-1t0.4-1.4z m8 0.7q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconReddit.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconReddit;
}(React.Component));
exports.default = IconReddit;
//# sourceMappingURL=IconReddit.js.map