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
var IconRecycle = (function (_super) {
    __extends(IconRecycle, _super);
    function IconRecycle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconRecycle.prototype.render = function () {
        var className = this.name + " " + this.name + "--recycle " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.7 26.1l-0.4 8.2 0 0.5-9.4-0.6q-0.8-0.1-1.5-0.8t-1-1.4q-0.3-0.6-0.4-1.2t0.1-1.5 0.3-1.2 0.5-1.5 0.4-1.1q1.7 0.2 11.4 0.6z m-8.7-13.1l4 8.5-3.2-2.1q-1.4 1.6-2.5 3.2t-1.6 2.8-0.9 2.1-0.4 1.4l-0.1 0.5-4.3-8q-0.4-0.5-0.4-1.2t0.2-1.1l0.1-0.4q0.8-1.4 2.6-4.1l-3.1-2z m27.5 11.6l-4.2 8q-0.3 0.6-0.8 1t-1 0.5l-0.4 0.1q-1.6 0.1-4.9 0.2l0.2 3.7-5.1-8.2 4.7-8.1 0.1 3.9q3.8 0.3 6.4 0.1t3.7-0.8z m-17.5-20.7q-1.1 1.4-5.9 9.7l-7.1-4.1-0.4-0.3 5-7.9q0.4-0.7 1.3-1.1t1.8-0.2q0.5 0.1 1.1 0.3t0.9 0.5 1 0.7 0.8 0.8 0.8 0.8 0.7 0.8z m14.6 6.9l4.7 8.1q0.4 0.8 0.3 1.7t-0.6 1.6q-0.3 0.5-0.7 0.9t-0.9 0.6-1.1 0.5-1 0.3-1.2 0.3-1 0.3q-0.8-1.6-5.9-9.7l7-4.4z m-3.2-5.1l3.2-1.8-4.9 8.3-9.4-0.4 3.4-2q-0.8-1.9-1.7-3.7t-1.7-2.7-1.4-1.8-1.1-1l-0.3-0.3 9 0q0.7-0.1 1.3 0.2t0.9 0.7l0.2 0.3q0.9 1.4 2.5 4.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconRecycle;
}(React.Component));
IconRecycle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconRecycle;
//# sourceMappingURL=IconRecycle.js.map