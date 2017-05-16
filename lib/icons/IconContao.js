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
var IconContao = (function (_super) {
    __extends(IconContao, _super);
    function IconContao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconContao.prototype.render = function () {
        var className = this.name + " " + this.name + "--contao";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m3.1 2.9h4.4q-1.6 1.4-2.8 3.3-0.8 1.2-1.4 2.6t-0.6 2.8-0.2 2.6 0.2 3 0.5 2.8 0.6 3l0.1 0.7q1.2 5.3 1.9 7.3 1.2 3.8 3.3 6.1h-6q-1.1 0-1.8-0.7t-0.8-1.8v-29.2q0-1 0.8-1.8t1.8-0.7z m26.9 0h6.9q1.1 0 1.9 0.7t0.7 1.8v29.2q0 1-0.7 1.8t-1.9 0.7h-4q4.8-4.6 4.4-12.6l-10.4 2.3q-0.1 1-0.3 1.8t-0.7 1.6-1.3 1.4-2.1 0.8q-2.8 0.5-4.5-0.9-0.7-0.6-1.1-1.4t-1.2-2.9-1.4-5.7q-0.8-3.7-1.1-5.9t-0.1-3.1 0.5-1.7q0.5-0.9 1.4-1.6t2.3-1.1q1-0.2 1.9-0.1t1.5 0.4 1.2 0.8 0.9 1 0.8 1.3l10.5-2.2q-1.6-3.9-4.1-6.4z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconContao;
}(React.Component));
IconContao.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconContao;
//# sourceMappingURL=IconContao.js.map