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
var IconMergado = (function (_super) {
    __extends(IconMergado, _super);
    function IconMergado() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconMergado.prototype.render = function () {
        var className = this.name + " " + this.name + "--" + this.props.type;
        return (React.createElement("span", { className: className, style: this.props.style },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: "0 0 40 40" },
                React.createElement("g", null,
                    React.createElement("path", { d: "M 0,-3.5700404e-5 20,19.999964 l -20,20 z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#7fba2c", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path3" }),
                    "  ",
                    React.createElement("path", { d: "m 0,39.999964 20,-20 20,20 z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#007b20", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path5" }),
                    "  ",
                    React.createElement("path", { d: "m 40,39.999964 -20,-20 L 40,-3.5700404e-5 Z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#00a9b8", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path7" }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconMergado;
}(React.Component));
IconMergado.defaultProps = {
    type: "reglendo",
    size: 15,
    style: {}
};
exports.default = IconMergado;
//# sourceMappingURL=mergado.js.map