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
var IconExternalLinkSquare = (function (_super) {
    __extends(IconExternalLinkSquare, _super);
    function IconExternalLinkSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconExternalLinkSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--external-link-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 20.7v-10.7q0-0.6-0.5-1t-1-0.4h-10.7q-0.9 0-1.3 0.8-0.4 1 0.3 1.6l3.2 3.2-11.9 11.9q-0.4 0.5-0.4 1t0.4 1l2.3 2.3q0.4 0.4 1 0.4t1-0.4l11.9-11.9 3.2 3.2q0.4 0.4 1 0.4 0.3 0 0.6-0.1 0.9-0.3 0.9-1.3z m5.7-11.4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconExternalLinkSquare.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconExternalLinkSquare;
}(React.Component));
exports.default = IconExternalLinkSquare;
//# sourceMappingURL=IconExternalLinkSquare.js.map