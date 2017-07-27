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
var IconBadgeFirst = (function (_super) {
    __extends(IconBadgeFirst, _super);
    function IconBadgeFirst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconBadgeFirst.prototype.render = function () {
        var className = this.name + " " + this.name + "--badge-first " + this.props.addClass;
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
                        React.createElement("g", { transform: "scale(0.99999831,1.0000017)", style: { "fill": "#000000", "fillOpacity": 1, "stroke": "none", "strokeWidth": 1, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 }, id: "text4311-3" },
                            "      ",
                            React.createElement("path", { d: "m 336.12646,519.68982 -2.9402,0 0,-8.04986 0.0285,-1.32261 0.0476,-1.44631 q -0.73267,0.73267 -1.01812,0.96103 l -1.59856,1.28455 -1.41776,-1.76982 4.48166,-3.5682 2.41686,0 0,13.91122 z", style: { "fill": "#000000" }, id: "path5089" }),
                            "    "),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    return IconBadgeFirst;
}(React.Component));
IconBadgeFirst.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 39.999997 40",
};
exports.default = IconBadgeFirst;
//# sourceMappingURL=IconBadgeFirst.js.map