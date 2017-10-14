import * as React from "react";
class IconEdge extends React.Component {
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
                    React.createElement("path", { d: "m1.5 17.7h0.1q0.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2h-25.2q0.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8 0.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 0.9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-0.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q0.2-1.7-0.1-3.1t-1.1-2.3-1.6-1.5-1.8-0.9-1.6-0.5-1.3-0.1l-0.5-0.1q-3 0.1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEdge.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEdge;
//# sourceMappingURL=IconEdge.js.map