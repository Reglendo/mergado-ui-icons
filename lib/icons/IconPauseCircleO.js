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
var IconPauseCircleO = (function (_super) {
    __extends(IconPauseCircleO, _super);
    function IconPauseCircleO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconPauseCircleO.prototype.render = function () {
        var className = this.name + " " + this.name + "--pause-circle-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m0 29.2q3.3 0 6.1-1.6t4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6-6.1 1.6-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6z m2.2-5q-0.3 0-0.5-0.2t-0.2-0.5v-12.8q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v12.8q0 0.3-0.2 0.5t-0.5 0.2h-4.3z m-8.6 0q-0.3 0-0.5-0.2t-0.2-0.5v-12.8q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v12.8q0 0.3-0.2 0.5t-0.5 0.2h-4.3z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconPauseCircleO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconPauseCircleO;
}(React.Component));
exports.default = IconPauseCircleO;
//# sourceMappingURL=IconPauseCircleO.js.map