import * as React from "react";
class IconFlipHorizontal extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--flip-horizontal ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("g", { id: "g3394", transform: "matrix(0,1,-1,0,40.621095,6.9813581e-8)" },
                        "    ",
                        React.createElement("path", { id: "path3357-6", d: "m 33.38156,3.7812812 0,15.2196908 -24.9982253,0 z", style: { "fill": "#000000", "fillRule": "evenodd", "stroke": "#000000", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 } }),
                        "    ",
                        React.createElement("path", { id: "path3357-3-7", d: "m 33.381559,37.460909 0,-15.219691 -24.9982235,0 z", style: { "fill": "#ffffff", "fillRule": "evenodd", "stroke": "#000000", "strokeWidth": 1.37589288, "strokeLinecap": "butt", "strokeLinejoin": "miter", "strokeOpacity": 1 } }),
                        "  "))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconFlipHorizontal.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconFlipHorizontal;
//# sourceMappingURL=IconFlipHorizontal.js.map