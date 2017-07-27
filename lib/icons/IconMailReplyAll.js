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
var IconMailReplyAll = (function (_super) {
    __extends(IconMailReplyAll, _super);
    function IconMailReplyAll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMailReplyAll.prototype.render = function () {
        var className = this.name + " " + this.name + "--mail-reply-all " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.3 24.2v1.5q0 1-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4l-11.5-11.4q-0.4-0.4-0.4-1t0.4-1l11.5-11.4q0.6-0.7 1.5-0.4 0.9 0.4 0.9 1.4v1.5l-8.9 8.9q-0.4 0.4-0.4 1t0.4 1z m25.7 0.8q0 1.3-0.4 3t-0.8 3.1-1.1 2.8-0.9 2l-0.5 0.9q-0.1 0.3-0.6 0.3-0.1 0-0.2 0-0.5-0.2-0.5-0.7 1-9-2.4-12.6-1.4-1.6-3.8-2.5t-5.9-1.2v5.6q0 1-0.9 1.3-0.3 0.1-0.6 0.1-0.6 0-1-0.4l-11.4-11.4q-0.4-0.4-0.4-1t0.4-1l11.4-11.4q0.7-0.7 1.6-0.4 0.9 0.4 0.9 1.4v5.8q9.1 0.6 13.3 4.9 3.8 3.9 3.8 11.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMailReplyAll;
}(React.Component));
IconMailReplyAll.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconMailReplyAll;
//# sourceMappingURL=IconMailReplyAll.js.map