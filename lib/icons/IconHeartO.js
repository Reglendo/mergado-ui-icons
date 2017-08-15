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
var IconHeartO = (function (_super) {
    __extends(IconHeartO, _super);
    function IconHeartO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHeartO.prototype.render = function () {
        var className = this.name + " " + this.name + "--heart-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.1 13.3q0-1.8-0.4-3.2t-1.3-2.2-1.8-1.3-2.1-0.7-2.2-0.2-2.5 0.6-2.4 1.4-2 1.6-1.3 1.4q-0.4 0.5-1.1 0.5t-1.1-0.5q-0.5-0.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-0.6-2.2 0.2-2.1 0.7-1.8 1.3-1.3 2.2-0.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8z m2.9 0q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconHeartO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconHeartO;
}(React.Component));
exports.default = IconHeartO;
//# sourceMappingURL=IconHeartO.js.map