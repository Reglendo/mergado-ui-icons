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
var IconHashtag = (function (_super) {
    __extends(IconHashtag, _super);
    function IconHashtag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconHashtag.prototype.render = function () {
        var className = this.name + " " + this.name + "--hashtag " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.1 22.9l1.5-5.8h-5.7l-1.4 5.8h5.6z m17.2-11.3l-1.3 5q-0.1 0.5-0.7 0.5h-7.3l-1.4 5.8h6.9q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.2 5q-0.1 0.5-0.7 0.5h-7.3l-1.8 7.3q-0.2 0.5-0.7 0.5h-5q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.7-7h-5.7l-1.8 7.3q-0.1 0.5-0.7 0.5h-5q-0.3 0-0.5-0.2-0.2-0.3-0.2-0.6l1.8-7h-7q-0.3 0-0.5-0.3-0.2-0.2-0.2-0.6l1.3-5q0.1-0.5 0.7-0.5h7.3l1.4-5.8h-6.9q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.2-5q0.1-0.6 0.7-0.6h7.3l1.8-7.3q0.2-0.5 0.7-0.5h5q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.7 6.9h5.7l1.8-7.3q0.1-0.5 0.7-0.5h5q0.3 0 0.5 0.2 0.2 0.3 0.2 0.7l-1.8 6.9h7q0.3 0 0.5 0.3 0.2 0.3 0.2 0.6z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconHashtag;
}(React.Component));
IconHashtag.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconHashtag;
//# sourceMappingURL=IconHashtag.js.map