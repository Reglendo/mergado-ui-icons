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
var IconStickyNote = (function (_super) {
    __extends(IconStickyNote, _super);
    function IconStickyNote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStickyNote.prototype.render = function () {
        var className = this.name + " " + this.name + "--sticky-note " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.9 27.9v9.2h-20.8q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h30q0.9 0 1.6 0.6t0.6 1.5v20.7h-9.3q-0.9 0-1.5 0.6t-0.6 1.6z m2.8 0.7h8.5q-0.3 1.8-1.4 2.9l-4.1 4.1q-1.2 1.1-3 1.5v-8.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStickyNote;
}(React.Component));
IconStickyNote.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
};
exports.default = IconStickyNote;
//# sourceMappingURL=IconStickyNote.js.map