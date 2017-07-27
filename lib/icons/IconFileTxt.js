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
var IconFileTxt = (function (_super) {
    __extends(IconFileTxt, _super);
    function IconFileTxt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFileTxt.prototype.render = function () {
        var className = this.name + " " + this.name + "--file-txt " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m 35.8,8.5 c 0.4,0.4 0.733333,0.9666667 1,1.7 0.266667,0.733333 0.433333,1.366667 0.5,1.9 l 0,25.8 c 0,0.533333 -0.2,1.033333 -0.6,1.5 -0.4,0.466667 -0.933333,0.666667 -1.6,0.6 l -30,0 C 4.5,40 4,39.8 3.6,39.4 3.2,39 3,38.5 3,37.9 L 3,2.1 C 3,1.5666667 3.2,1.0666667 3.6,0.6 4,0.13333333 4.5,-0.06666667 5.1,0 l 20,0 c 0.6,0 1.266667,0.13333333 2,0.4 0.733333,0.26666667 1.3,0.6333333 1.7,1.1 z M 25.9,3 l 0,8.4 8.4,0 C 34.1,11 33.933333,10.7 33.8,10.5 l -7,-7 C 26.6,3.3666667 26.3,3.2 25.9,3 Z m 8.5,34.1 0,-22.8 -9.3,0 C 24.5,14.3 24,14.1 23.6,13.7 23.2,13.3 23,12.766667 23,12.1 l 0,-9.2 -17.1,0 0,34.2 z", id: "path4312", style: { "fill": "#444444" } }),
                    "  ",
                    React.createElement("g", { style: { "fontStyle": "normal", "fontWeight": "normal", "fontSize": 58.9221611, "lineHeight": "125%", "fontFamily": "sans-serif", "textAlign": "end", "letterSpacing": 0, "wordSpacing": 0, "textAnchor": "end", "fill": "#444444", "fillOpacity": 1, "stroke": "none", "strokeWidth": 1, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 }, id: "text4320" },
                        "    ",
                        React.createElement("path", { d: "m 19.09138,27.638036 0,1.715447 1.990565,0 0,1.380988 -1.990565,0 0,2.56238 q 0,0.42077 0.167229,0.571815 0.167229,0.145652 0.663522,0.145652 l 0.992585,0 0,1.380988 -1.656107,0 q -1.14363,0 -1.62374,-0.474715 -0.474714,-0.480109 -0.474714,-1.62374 l 0,-2.56238 -0.960219,0 0,-1.380988 0.960219,0 0,-1.715447 1.931225,0 z", style: { "fill": "#444444", "fillOpacity": 1 }, id: "path10013" }),
                        "    ",
                        React.createElement("path", { d: "m 23.795371,32.304266 -2.179372,-2.950783 2.04451,0 1.235337,1.790969 1.251521,-1.790969 2.044509,0 -2.179371,2.939994 2.287261,3.101829 -2.04451,0 -1.35941,-1.909648 -1.343227,1.909648 -2.044509,0 2.287261,-3.09104 z", style: { "fill": "#444444", "fillOpacity": 1 }, id: "path10015" }),
                        "    ",
                        React.createElement("path", { d: "m 31.498696,27.638036 0,1.715447 1.990564,0 0,1.380988 -1.990564,0 0,2.56238 q 0,0.42077 0.167229,0.571815 0.167229,0.145652 0.663521,0.145652 l 0.992585,0 0,1.380988 -1.656106,0 q -1.143631,0 -1.62374,-0.474715 -0.474715,-0.480109 -0.474715,-1.62374 l 0,-2.56238 -0.960218,0 0,-1.380988 0.960218,0 0,-1.715447 1.931226,0 z", style: { "fill": "#444444", "fillOpacity": 1 }, id: "path10017" }),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFileTxt;
}(React.Component));
IconFileTxt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconFileTxt;
//# sourceMappingURL=IconFileTxt.js.map