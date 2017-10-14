import * as React from "react";
class IconPlane extends React.Component {
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
                    React.createElement("path", { d: "m34.7 3.6q1 1.1 0.3 3.3t-2.4 3.8l-3.6 3.6 3.5 15.5q0.2 0.5-0.2 0.8l-2.9 2.1q-0.1 0.2-0.4 0.2-0.1 0-0.2-0.1-0.3 0-0.4-0.3l-6.3-11.4-5.7 5.8 1.1 4.4q0.2 0.3-0.1 0.6l-2.2 2.2q-0.2 0.2-0.5 0.2h0q-0.4-0.1-0.6-0.3l-4.2-5.6-5.6-4.2q-0.3-0.2-0.3-0.6 0-0.2 0.2-0.5l2.1-2.2q0.2-0.2 0.6-0.2 0.1 0 0.1 0l4.4 1.2 5.7-5.8-11.3-6.2q-0.3-0.2-0.4-0.5 0-0.4 0.2-0.6l2.9-2.9q0.3-0.3 0.7-0.2l14.8 3.6 3.6-3.6q1.7-1.7 3.8-2.4t3.3 0.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPlane.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPlane;
//# sourceMappingURL=IconPlane.js.map