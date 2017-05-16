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
var IconDropbox = (function (_super) {
    __extends(IconDropbox, _super);
    function IconDropbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconDropbox.prototype.render = function () {
        var className = this.name + " " + this.name + "--dropbox";
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m9 15.8l11 6.8-7.6 6.3-11-7.1z m22 12.4v2.4l-11 6.5v0l0 0 0 0v0l-10.9-6.5v-2.4l3.3 2.1 7.6-6.3v-0.1l0 0 0 0v0.1l7.7 6.3z m-18.6-25.6l7.6 6.4-11 6.8-7.6-6z m18.6 13.2l7.6 6-10.9 7.2-7.7-6.4z m-3.3-13.2l10.9 7.2-7.6 6-11-6.8z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconDropbox;
}(React.Component));
IconDropbox.defaultProps = {
    size: 15,
    style: {}
};
exports.default = IconDropbox;
//# sourceMappingURL=IconDropbox.js.map