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
var IconGg = (function (_super) {
    __extends(IconGg, _super);
    function IconGg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconGg.prototype.render = function () {
        var className = this.name + " " + this.name + "--gg " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m14.3 18.1l7.4 7.5-7.4 7.4-13.1-13 13.1-13 3.2 3.2-1.8 1.9-1.4-1.4-9.3 9.3 9.3 9.3 3.7-3.7-5.6-5.6z m11.2-11.1l13 13-13 13-3.3-3.2 1.9-1.9 1.4 1.4 9.3-9.3-9.3-9.3-3.8 3.7 5.6 5.6-1.8 1.9-7.5-7.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconGg.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconGg;
}(React.Component));
exports.default = IconGg;
//# sourceMappingURL=IconGg.js.map