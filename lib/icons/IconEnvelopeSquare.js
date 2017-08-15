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
var IconEnvelopeSquare = (function (_super) {
    __extends(IconEnvelopeSquare, _super);
    function IconEnvelopeSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconEnvelopeSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--envelope-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z m0.7 23.5v-9.7q-0.7 0.8-1.5 1.2-0.7 0.5-2.9 1.9t-3.4 2.2q-2.2 1.6-3.7 1.6-1.4 0-3.6-1.6-1-0.7-3.2-2t-3.2-2.1q-0.2-0.2-0.7-0.6t-0.7-0.6v9.7q0 0.9 0.6 1.5t1.6 0.7h18.5q0.9 0 1.5-0.7t0.7-1.5z m0-12.8q0-0.9-0.6-1.5t-1.6-0.7h-18.5q-0.9 0-1.6 0.7t-0.6 1.5q0 0.8 0.7 1.7t1.5 1.4q1.1 0.7 3.1 2t2.9 1.9l0.3 0.2 0.5 0.3 0.5 0.3 0.5 0.3 0.5 0.2 0.5 0.2 0.4 0 0.5 0 0.5-0.2 0.5-0.2 0.5-0.3 0.5-0.3 0.4-0.3 0.4-0.2 6-3.9q0.8-0.5 1.5-1.4t0.7-1.7z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconEnvelopeSquare.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconEnvelopeSquare;
}(React.Component));
exports.default = IconEnvelopeSquare;
//# sourceMappingURL=IconEnvelopeSquare.js.map