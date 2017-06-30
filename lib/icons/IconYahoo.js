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
var IconYahoo = (function (_super) {
    __extends(IconYahoo, _super);
    function IconYahoo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconYahoo.prototype.render = function () {
        var className = this.name + " " + this.name + "--yahoo " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.2 21.4l0.3 15.7q-1.4-0.2-2.4-0.2-0.9 0-2.3 0.2l0.3-15.7q-0.9-1.6-3.8-6.6t-4.8-8.4-4.1-6.4q1.3 0.3 2.4 0.3 1 0 2.5-0.3 1.4 2.5 3 5.1t3.7 6.2 3.1 5.1q0.8-1.4 2.5-4t2.6-4.2 2.3-4 2.4-4.2q1.2 0.3 2.4 0.3 1.3 0 2.6-0.3-0.7 0.9-1.4 2t-1.1 1.7-1.3 2.2-1 1.8q-3.3 5.6-7.9 13.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconYahoo;
}(React.Component));
IconYahoo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconYahoo;
//# sourceMappingURL=IconYahoo.js.map