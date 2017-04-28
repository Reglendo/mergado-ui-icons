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
var IconBraille = (function (_super) {
    __extends(IconBraille, _super);
    function IconBraille() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBraille.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "m3.5 25.2q-1.2 0-2.1 0.9t-0.8 2.1 0.8 2 2.1 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.3 0q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m0-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m14 9.3q-1.2 0-2 0.9t-0.9 2.1 0.9 2 2 0.9 2.1-0.9 0.8-2-0.8-2.1-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2.1 0.9 2 2.1 0.9 2-0.9 0.9-2-0.9-2.1-2-0.9z m-9.4-9.3q-1.2 0-2 0.9t-0.9 2 0.9 2.1 2 0.8 2.1-0.8 0.8-2.1-0.8-2-2.1-0.9z m9.4 0q-1.3 0-2.1 0.9t-0.9 2 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2-2-0.9z m0-9.3q-1.3 0-2.1 0.8t-0.9 2.1 0.9 2.1 2.1 0.8 2-0.8 0.9-2.1-0.9-2.1-2-0.8z m-29.2 21.6q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m9.3 0q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.3 0q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m-9.3-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5z m-14-18.7q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m23.3 18.7q0 1.4-1 2.4t-2.4 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.4 1 1 2.5z m-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.4 1.1 1 2.4z m-9.4-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5z m9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.5 2.5-1 2.4 1 1 2.5z" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBraille;
}(React.Component));
IconBraille.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconBraille;
//# sourceMappingURL=braille.js.map