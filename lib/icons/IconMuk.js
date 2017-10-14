import * as React from "react";
class IconMuk extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M 0,-3.5700404e-5 20,19.999964 l -20,20 z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#6858e8", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path3" }),
                    "  ",
                    React.createElement("path", { d: "m 0,39.999964 20,-20 20,20 z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#29235c", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path5" }),
                    "  ",
                    React.createElement("path", { d: "m 40,39.999964 -20,-20 L 40,-3.5700404e-5 Z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#2d95d3", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path7" }),
                    "  ",
                    React.createElement("path", { d: "m 40,-3.6e-5 -20,20 -19.99999985,-20 z", style: { "color": "#000000", "clipRule": "nonzero", "display": "inline", "overflow": "visible", "visibility": "visible", "opacity": 1, "isolation": "auto", "mixBlendMode": "normal", "colorInterpolation": "sRGB", "colorInterpolationFilters": "linearRGB", "solidColor": "#000000", "solidOpacity": 1, "fill": "#ffffff", "fillOpacity": 1, "fillRule": "nonzero", "stroke": "none", "strokeWidth": 5, "strokeLinecap": "round", "strokeLinejoin": "miter", "strokeMiterlimit": 4, "strokeDasharray": "5, 15", "strokeDashoffset": 0, "strokeOpacity": 1, "colorRendering": "auto", "imageRendering": "auto", "shapeRendering": "auto", "textRendering": "auto", "enableBackground": "accumulate" }, id: "path7-3" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMuk.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40.000003 39.999999",
    color: 'currentColor',
    textFirst: false,
};
export default IconMuk;
//# sourceMappingURL=IconMuk.js.map