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
var IconFlipVertical = (function (_super) {
    __extends(IconFlipVertical, _super);
    function IconFlipVertical() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFlipVertical.prototype.render = function () {
        var className = this.name + " " + this.name + "--flip-vertical " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("g", { id: "g3394", transform: "translate(-0.84745756,-0.62109513)" },
                        "    ",
                        React.createElement("path", { id: "path3357-6", d: "m 33.38156,3.7812812 0,15.2196908 -24.9982253,0 z", style: { "fill": "#000000", "fillRule": "evenodd", "stroke": "#000000", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 } }),
                        "    ",
                        React.createElement("path", { id: "path3357-3-7", d: "m 33.381559,37.460909 0,-15.219691 -24.9982235,0 z", style: { "fill": "#ffffff", "fillRule": "evenodd", "stroke": "#000000", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 } }),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFlipVertical;
}(React.Component));
IconFlipVertical.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "undefined",
};
exports.default = IconFlipVertical;
//# sourceMappingURL=IconFlipVertical.js.map