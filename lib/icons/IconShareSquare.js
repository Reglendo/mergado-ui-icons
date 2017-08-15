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
var IconShareSquare = (function (_super) {
    __extends(IconShareSquare, _super);
    function IconShareSquare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconShareSquare.prototype.render = function () {
        var className = this.name + " " + this.name + "--share-square " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.4 24.6l7.9-7.9q0.4-0.4 0.4-1t-0.4-1l-7.9-7.8q-0.6-0.7-1.5-0.4-0.9 0.4-0.9 1.4v3.5q-2.7 0-4.8 0.5t-3.6 1.1-2.6 1.8-1.7 2.1-1 2.4-0.5 2.5-0.1 2.5q0 4 3.7 9 0.3 0.3 0.6 0.3 0.2 0 0.3-0.1 0.5-0.2 0.4-0.7-1-7.9 1.4-10.6 1-1.1 2.9-1.7t5-0.5v3.6q0 0.9 0.9 1.3 0.3 0.1 0.5 0.1 0.6 0 1-0.4z m11.9-15.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconShareSquare.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconShareSquare;
}(React.Component));
exports.default = IconShareSquare;
//# sourceMappingURL=IconShareSquare.js.map