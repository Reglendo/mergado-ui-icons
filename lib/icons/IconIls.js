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
var IconIls = (function (_super) {
    __extends(IconIls, _super);
    function IconIls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconIls.prototype.render = function () {
        var className = this.name + " " + this.name + "--ils " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.6 13.9v11.1q0 0.3-0.2 0.5t-0.5 0.2h-3.5q-0.4 0-0.6-0.2t-0.2-0.5v-11.1q0-2.5-1.7-4.3t-4.3-1.7h-6.1v25.7q0 0.3-0.2 0.5t-0.5 0.2h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-30q0-0.3 0.2-0.5t0.5-0.2h10.4q3 0 5.5 1.4t4.1 4.1 1.4 5.5z m8.6-10.3v19.6q0 3-1.5 5.6t-4 4-5.6 1.5h-10.3q-0.3 0-0.5-0.2t-0.2-0.5v-21.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v17.2h6q2.5 0 4.3-1.8t1.8-4.3v-19.6q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconIls.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconIls;
}(React.Component));
exports.default = IconIls;
//# sourceMappingURL=IconIls.js.map