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
var IconSearchHeureka = (function (_super) {
    __extends(IconSearchHeureka, _super);
    function IconSearchHeureka() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "muk-icon";
        return _this;
    }
    IconSearchHeureka.prototype.render = function () {
        var className = this.name + " " + this.name + "--search-heureka " + this.props.addClass;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: this.name + "__image", preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.2 18.6q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1 2.9 7 7.1 3 7.1-3 2.9-7z m11.4 18.5q0 1.2-0.8 2.1t-2 0.8q-1.2 0-2-0.8l-7.7-7.7q-4 2.8-8.9 2.8-3.2 0-6.1-1.3t-5-3.3-3.4-5-1.2-6.1 1.2-6.1 3.4-5.1 5-3.3 6.1-1.2 6.1 1.2 5 3.3 3.4 5.1 1.2 6.1q0 4.9-2.7 8.9l7.6 7.6q0.8 0.9 0.8 2z", id: "path6715" }),
                    "  ",
                    React.createElement("g", { style: { "fill": "#000000", "fillOpacity": 1, "stroke": "none", "strokeWidth": 1, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 }, id: "text7263" },
                        "    ",
                        React.createElement("path", { d: "m 12.244975,13.182383 2.819824,0 0,4.16748 4.160157,0 0,-4.16748 2.819824,0 0,10.935058 -2.819824,0 0,-4.63623 -4.160157,0 0,4.63623 -2.819824,0 0,-10.935058 z", style: { "fill": "#3f3f3f", "fillOpacity": 1 }, id: "path7268" }),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: this.name + "__text" }, this.props.text)) : null));
    };
    IconSearchHeureka.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    };
    return IconSearchHeureka;
}(React.Component));
exports.default = IconSearchHeureka;
//# sourceMappingURL=IconSearchHeureka.js.map