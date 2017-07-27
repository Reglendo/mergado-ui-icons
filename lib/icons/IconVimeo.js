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
var IconVimeo = (function (_super) {
    __extends(IconVimeo, _super);
    function IconVimeo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconVimeo.prototype.render = function () {
        var className = this.name + " " + this.name + "--vimeo " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m38.1 11.6q-0.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-0.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-0.4 0-2.9 1.7l-1.7-2.2q0.6-0.4 2.4-2.1t2.9-2.6q3.5-3.1 5.4-3.2 2.1-0.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6 2.3-3.6 2.5-5.5 0.3-3.1-2.5-3.1-1.2 0-2.7 0.6 2.7-8.8 10.3-8.5 5.6 0.2 5.2 7.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconVimeo;
}(React.Component));
IconVimeo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconVimeo;
//# sourceMappingURL=IconVimeo.js.map