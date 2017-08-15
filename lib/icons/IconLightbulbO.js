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
var IconLightbulbO = (function (_super) {
    __extends(IconLightbulbO, _super);
    function IconLightbulbO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconLightbulbO.prototype.render = function () {
        var className = this.name + " " + this.name + "--lightbulb-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m24.9 12.9q0 0.2-0.2 0.5t-0.5 0.2-0.5-0.2-0.2-0.5q0-1.1-1.2-1.6t-2.4-0.6q-0.3 0-0.5-0.2t-0.2-0.5 0.2-0.5 0.5-0.2q1.1 0 2.2 0.3t2 1.2 0.8 2.1z m3.6 0q0-1.6-0.8-3t-2-2.3-2.7-1.4-3.1-0.5-3 0.5-2.8 1.4-2 2.3-0.7 3q0 2.2 1.5 4 0.2 0.2 0.7 0.7t0.6 0.7q2.9 3.5 3.2 6.7h5.1q0.3-3.2 3.1-6.6 0.2-0.3 0.7-0.8t0.7-0.7q1.5-1.8 1.5-4z m2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-0.8 2.4q1.1 0.6 1.1 1.8 0 0.9-0.6 1.5 0.6 0.6 0.6 1.4 0 1.2-1 1.8 0.2 0.5 0.2 1.1 0 1-0.7 1.5t-1.7 0.6q-0.4 1-1.3 1.6t-2 0.5-1.9-0.5-1.4-1.6q-1 0-1.7-0.6t-0.7-1.5q0-0.6 0.3-1.1-1-0.6-1-1.8 0-0.8 0.6-1.4-0.6-0.6-0.6-1.5 0-1.2 1.1-1.8-0.1-1.1-0.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-0.7 4.2 0.7 3.7 2 2.6 3.1 1 4.2z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconLightbulbO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconLightbulbO;
}(React.Component));
exports.default = IconLightbulbO;
//# sourceMappingURL=IconLightbulbO.js.map