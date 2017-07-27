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
var IconReglendo = (function (_super) {
    __extends(IconReglendo, _super);
    function IconReglendo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconReglendo.prototype.render = function () {
        var className = this.name + " " + this.name + "--reglendo " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m 20.050868,0 c -2.795532,0 -5.392901,0.5463636 -7.743448,1.4972727 -2.7654538,1.1163637 -5.1885435,2.8 -7.127723,4.9290913 1.4941944,0.291818 2.8946146,0.837272 4.1685281,1.590909 1.1934089,0.704545 2.2656199,1.591818 3.1927459,2.624545 0.367135,0.41 0.701537,0.850909 1.020015,1.303637 1.595931,2.26909 2.549597,5.041818 2.549597,8.053636 0,2.504545 -0.655535,4.847273 -1.790556,6.872727 0.664381,0.89 1.135906,1.934546 1.357071,3.070909 0.0867,0.450909 0.142431,0.91 0.1442,1.386364 l 0,0.01091 c 0,1.383636 -0.391905,2.666364 -1.037708,3.771818 -0.794427,1.362727 -1.986952,2.445455 -3.43072,3.050909 1.706513,0.776364 3.569611,1.309091 5.543293,1.593637 C 17.886984,39.899091 18.895499,40 19.942055,40 31.556784,40 40,30.995455 40,20 l 0,-0.111818 C 40,8.894545 31.663828,0 20.050868,0 m 4.900144,15.592727 c -0.442331,0 -0.861661,-0.09364 -1.251797,-0.247272 -1.312839,-0.518182 -2.245273,-1.818182 -2.245273,-3.349091 0,-0.06546 0.01504,-0.128182 0.01858,-0.194546 0.0982,-1.892727 1.611855,-3.399091 3.479376,-3.399091 1.933872,0 3.500609,1.61 3.500609,3.594546 -8.85e-4,1.986363 -1.567622,3.595454 -3.501493,3.595454", id: "path3", style: { "fill": "#2d95d3" } }),
                    React.createElement("path", { d: "M 13.561871,11.945455 C 13.243393,11.491818 12.90899,11.052727 12.540971,10.642727 11.61473,9.61 10.54075,8.723636 9.3482251,8.018182 8.0743116,7.264545 6.6747761,6.719091 5.179697,6.427273 2.1037266,9.804545 0.23443547,14.253636 0.03538649,19.148182 0.02388588,19.485455 8.8466217e-4,19.817273 0,20.16 0.00884662,23.269091 0.69976778,26.2 1.9267942,28.818182 2.6186,26.868182 4.0685613,25.3 5.9325445,24.517273 c 0.8386597,-0.351818 1.7507464,-0.551818 2.7114896,-0.551818 0.2158575,0 0.4219838,0.04636 0.6351874,0.06455 0.7218845,0.06546 1.3951125,0.273636 2.0373765,0.54 1.188986,0.492727 2.232003,1.269091 3.003429,2.301818 1.135906,-2.025454 1.79144,-4.368182 1.79144,-6.872727 0,-3.011818 -0.953665,-5.784546 -2.549596,-8.053636", id: "path5", style: { "fill": "#29235c" } }),
                    React.createElement("path", { d: "m 24.56353,14.440909 c 1.091673,0 1.973681,-0.908182 1.973681,-2.029091 0,-1.124545 -0.882008,-2.03 -1.973681,-2.03 -1.089904,0 -1.975451,0.905455 -1.975451,2.03 -8.84e-4,1.120909 0.884662,2.029091 1.975451,2.029091", id: "path7", style: { "fill": "#29235c" } }))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconReglendo;
}(React.Component));
IconReglendo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
exports.default = IconReglendo;
//# sourceMappingURL=IconReglendo.js.map