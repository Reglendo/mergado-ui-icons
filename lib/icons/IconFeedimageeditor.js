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
var IconFeedimageeditor = (function (_super) {
    __extends(IconFeedimageeditor, _super);
    function IconFeedimageeditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconFeedimageeditor.prototype.render = function () {
        var className = this.name + " " + this.name + "--feedimageeditor " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("g", { id: "layer1", transform: "translate(-252.57483,-587.10212)" },
                        "    ",
                        React.createElement("g", { id: "g5244", transform: "matrix(0.07318385,0,0,0.07318058,247.6924,554.00637)" },
                            "      ",
                            React.createElement("path", { id: "path118-3", d: "m 145.25978,452.2445 c -43.37823,0 -78.545246,35.16702 -78.545246,78.54524 l 0,295.44367 0,94.05894 c 0,43.37824 35.167016,78.54524 78.545246,78.54524 l 389.47819,0 c 43.37821,0 78.54524,-35.167 78.54524,-78.54524 l 0,-320.83581 0,-68.6668 c 0,-43.37822 -35.16703,-78.54524 -78.54524,-78.54524 l -389.47819,0 z m 3.41289,117.67439 382.65241,0 0,100.78091 c 11.3674,-8.23774 22.33625,-16.73844 32.87728,-25.48981 -10.54103,8.75171 -21.50988,17.25817 -32.87728,25.49591 l 0,210.46339 -382.65241,0 0,-63.4223 c -13.40556,1.93099 -26.94864,3.60308 -40.61275,5.0186 13.66411,-1.41633 27.20719,-3.09371 40.61275,-5.02469 l 0,-247.82201 z m 445.86102,48.30548 c -6.44975,6.1555 -13.09617,12.2073 -19.93394,18.15119 6.83777,-5.94348 13.48419,-11.99661 19.93394,-18.15119 z", style: { "fill": "#364b7b", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none" } }),
                            "      ",
                            React.createElement("g", { id: "g120-5" },
                                "      ",
                                React.createElement("path", { id: "path140-9", style: { "fill": "#ededed", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none" }, d: "m 482.51515,741.04382 0,91.79663 -285.01857,0 0,-23.30263 c -16.05656,3.10266 -32.34221,5.83875 -48.82424,8.20829 l 0,63.4211 382.65395,0 0,-210.46327 c -21.52874,15.61144 -44.51717,30.27377 -68.78201,43.90188 l 19.97087,26.438 z" }),
                                "      ",
                                React.createElement("path", { id: "path144-6", style: { "fill": "#3f5b9b", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none" }, d: "m 482.51515,832.84306 0,-91.79663 -19.97087,-26.438 c -76.91175,43.18186 -166.79704,75.89062 -265.0477,94.92546 l 0,23.30917 285.01857,0 z" }),
                                "      ",
                                React.createElement("path", { id: "path148-6", style: { "fill": "#ffffff", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none" }, d: "m 148.67302,569.91616 0,247.82602 c 16.48202,-2.36299 32.76768,-5.09909 48.82423,-8.20829 l 0,-68.48745 83.69962,-111.51877 73.11525,100.54821 69.92097,-66.22266 38.31187,50.74867 c 24.26483,-13.62811 47.25326,-28.29044 68.78201,-43.90188 l 0,-100.78385 -382.65395,0 z" }),
                                "      ",
                                React.createElement("path", { id: "path152-6", style: { "fill": "#6181b7", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none" }, d: "m 424.23047,663.85061 -69.92096,66.22265 -73.11525,-100.54165 -83.69962,111.51221 0,68.49401 c 98.25066,-19.03484 188.1425,-51.74361 265.05424,-94.93201 l -38.31841,-50.75521 z" }),
                                "    "),
                            "  ")))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconFeedimageeditor;
}(React.Component));
IconFeedimageeditor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40.000002 39.999999",
};
exports.default = IconFeedimageeditor;
//# sourceMappingURL=IconFeedimageeditor.js.map