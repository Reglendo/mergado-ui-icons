import * as React from "react";
class IconFlipHorizontal extends React.Component {
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
                    React.createElement("g", { id: "g3394", transform: "matrix(0,1,-1,0,40.621095,6.9813581e-8)" },
                        "    ",
                        React.createElement("path", { id: "path3357-6", d: "m 33.38156,3.7812812 0,15.2196908 -24.9982253,0 z", style: { "fillRule": "evenodd", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1, "fill": "none" } }),
                        "    ",
                        React.createElement("path", { id: "path3357-3-7", d: "m 33.381559,37.460909 0,-15.219691 -24.9982235,0 z", style: { "fillRule": "evenodd", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 } }),
                        "  "))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFlipHorizontal.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFlipHorizontal;
//# sourceMappingURL=IconFlipHorizontal.js.map