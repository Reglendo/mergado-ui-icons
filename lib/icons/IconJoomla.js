import * as React from "react";
class IconJoomla extends React.Component {
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
                    React.createElement("path", { d: "m26.9 23.9l-3.6 3.6-3.4 3.4-0.6 0.7q-1.5 1.4-3.4 1.9t-3.8 0.1q-0.4 1.5-1.6 2.5t-2.9 1q-1.9 0-3.3-1.3t-1.3-3.3q0-1.6 1-2.8t2.5-1.6q-0.5-1.9 0-3.9t2-3.4l0.3-0.2 3.4 3.4-0.3 0.2q-0.8 0.8-0.8 2t0.8 2q0.8 0.8 2 0.8t2-0.8l0.6-0.7 3.4-3.4 3.6-3.5z m-7.6-15.2l0.2 0.3-3.4 3.4-0.2-0.3q-0.8-0.8-2-0.8t-2 0.8-0.8 2 0.8 2l7.6 7.6-3.4 3.4-3.6-3.5-3.3-3.4-0.7-0.7q-1.5-1.5-2-3.6t0.1-4q-1.6-0.3-2.6-1.6t-1-2.8q0-1.9 1.4-3.3t3.2-1.3q1.7 0 3 1.1t1.6 2.7q1.8-0.4 3.7 0.1t3.4 1.9z m18 23.8q0 1.9-1.4 3.3t-3.2 1.3q-1.6 0-2.9-1t-1.6-2.6q-1.9 0.6-4 0.1t-3.6-2l-0.3-0.3 3.4-3.4 0.3 0.3q0.8 0.8 2 0.8t2-0.8 0.8-2-0.8-2l-7.7-7.6 3.4-3.4 7 7 0.6 0.6q1.5 1.5 2 3.4t0 3.8q1.7 0.3 2.9 1.5t1.1 3z m-0.1-25q0 1.7-1.1 3t-2.8 1.5q0.5 1.9 0 3.9t-2 3.6l-0.2 0.3-3.4-3.4 0.3-0.3q0.8-0.8 0.8-2t-0.8-2-2-0.8-2 0.8l-7.7 7.7-3.3-3.4 3.6-3.6 3.3-3.4 0.7-0.7q1.5-1.5 3.5-2t4 0.1q0.3-1.7 1.5-2.8t3.1-1.1q1.9 0 3.2 1.3t1.3 3.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconJoomla.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconJoomla;
//# sourceMappingURL=IconJoomla.js.map