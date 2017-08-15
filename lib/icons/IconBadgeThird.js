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
var IconBadgeThird = (function (_super) {
    __extends(IconBadgeThird, _super);
    function IconBadgeThird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBadgeThird.prototype.render = function () {
        var className = this.name + " " + this.name + "--badge-third " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("g", { id: "layer1", transform: "translate(-313.84214,-492.80427)" },
                        "    ",
                        React.createElement("g", { id: "g4290-2", transform: "matrix(0.04454194,0,0,0.04454209,313.84214,492.80423)" },
                            "      ",
                            React.createElement("g", { id: "g4248-5" },
                                "        ",
                                React.createElement("path", { d: "M 775.425,419.082 C 760.987,261.635 636.571,137.162 478.949,122.808 l 0,-122.807 -59.869,0 0,122.807 C 261.458,137.161 137.044,261.634 122.602,419.081 l -122.602,0 0,59.869 122.602,0 c 14.442,157.389 138.856,281.861 296.479,296.303 l 0,122.775 59.869,0 0,-122.775 C 636.571,760.812 760.986,636.339 775.426,478.95 l 122.604,0 0,-59.869 -122.605,0 z m -326.41,299.341 c -148.735,0 -269.409,-120.672 -269.409,-269.408 0,-148.766 120.673,-269.409 269.409,-269.409 148.793,0 269.406,120.644 269.406,269.409 0,148.738 -120.613,269.408 -269.406,269.408 z", id: "path4252-9" }),
                                "      "),
                            "    "),
                        "    ",
                        React.createElement("g", { transform: "scale(0.99999831,1.0000017)", style: { "wordSpacing": 0, "fill": "#000000", "fillOpacity": 1, "stroke": "none", "strokeWidth": 1, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 }, id: "text4311-3" },
                            "      ",
                            React.createElement("path", { d: "m 338.24824,508.96404 q 0,1.30358 -0.78976,2.21704 -0.78976,0.91346 -2.21704,1.25601 l 0,0.0571 q 1.68419,0.20933 2.55007,1.02764 0.86589,0.80879 0.86589,2.1885 0,2.00771 -1.45583,3.1305 -1.45582,1.11328 -4.15814,1.11328 -2.26462,0 -4.01542,-0.7517 l 0,-2.5025 q 0.8088,0.40915 1.77935,0.66606 0.97055,0.25691 1.92207,0.25691 1.45582,0 2.15043,-0.49479 0.69461,-0.49479 0.69461,-1.58904 0,-0.98006 -0.79928,-1.38921 -0.79927,-0.40916 -2.55007,-0.40916 l -1.05619,0 0,-2.2551 1.07522,0 q 1.61759,0 2.35977,-0.41867 0.7517,-0.42818 0.7517,-1.45583 0,-1.57952 -1.97916,-1.57952 -0.68509,0 -1.39873,0.22837 -0.70413,0.22836 -1.57001,0.78976 l -1.36068,-2.02674 q 1.90304,-1.37019 4.53875,-1.37019 2.15996,0 3.40645,0.8754 1.256,0.8754 1.256,2.43589 z", style: { "fill": "#000000" }, id: "path5117" }),
                            "    "),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconBadgeThird.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 39.999997 40",
    };
    return IconBadgeThird;
}(React.Component));
exports.default = IconBadgeThird;
//# sourceMappingURL=IconBadgeThird.js.map