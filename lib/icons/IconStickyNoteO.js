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
var IconStickyNoteO = (function (_super) {
    __extends(IconStickyNoteO, _super);
    function IconStickyNoteO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconStickyNoteO.prototype.render = function () {
        var className = this.name + " " + this.name + "--sticky-note-o " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m34.3 28.6h-5.6v5.5q0.7-0.2 0.9-0.5l4.2-4.1q0.2-0.3 0.4-0.9z m-6.3-2.9h6.4v-20h-28.5v28.6h20v-6.4q0-0.9 0.6-1.6t1.5-0.6z m9.3-20.7v22.9q0 0.9-0.5 1.9t-1 1.7l-4.1 4.1q-0.7 0.7-1.7 1.1t-2 0.4h-22.9q-0.8 0-1.5-0.6t-0.6-1.5v-30q0-0.9 0.6-1.5t1.5-0.6h30q0.9 0 1.6 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconStickyNoteO;
}(React.Component));
IconStickyNoteO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconStickyNoteO;
//# sourceMappingURL=IconStickyNoteO.js.map