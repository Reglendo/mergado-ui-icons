import * as React from "react";
class IconMaxcdn extends React.Component {
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
                    React.createElement("path", { d: "m39.5 17.3l-3.7 17h-7.5l4-18.6q0.3-1.2-0.3-1.9-0.6-0.8-1.9-0.8h-3.8l-4.5 21.3h-7.5l4.6-21.3h-6.4l-4.5 21.3h-7.5l4.6-21.3-3.5-7.3h28.5q2.3 0 4.2 0.9t3.3 2.6q1.4 1.6 1.9 3.7t0 4.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMaxcdn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconMaxcdn;
//# sourceMappingURL=IconMaxcdn.js.map