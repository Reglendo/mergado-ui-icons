import * as React from "react";
class IconBalanceScale extends React.Component {
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
                    React.createElement("path", { d: "m31.5 11.8l-7 12.9h14z m-23.3 0l-7 12.9h14z m14.9-3.5q-0.2 0.8-0.8 1.3t-1.3 0.9v23.5h11.1q0.2 0 0.4 0.2t0.2 0.4v1.1q0 0.3-0.2 0.5t-0.4 0.1h-24.5q-0.3 0-0.4-0.1t-0.2-0.5v-1.1q0-0.3 0.2-0.4t0.4-0.2h11.1v-23.5q-0.8-0.3-1.3-0.9t-0.9-1.3h-8.9q-0.3 0-0.4-0.1t-0.2-0.4v-1.2q0-0.3 0.2-0.4t0.4-0.2h8.9q0.4-1 1.3-1.7t2-0.6 2 0.6 1.3 1.7h9q0.2 0 0.4 0.2t0.2 0.4v1.2q0 0.2-0.2 0.4t-0.4 0.1h-9z m-3.3 0.3q0.6 0 1.1-0.4t0.4-1-0.4-1.1-1.1-0.4-1 0.4-0.4 1.1 0.4 1 1 0.4z m19.8 16.1q0 1.3-0.8 2.4t-2.1 1.6-2.7 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.1-1.6-0.9-2.4q0-0.2 0.7-1.5t1.6-3.2 2-3.6 1.8-3.3 1.1-1.8q0.3-0.6 1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z m-23.3 0q0 1.3-0.8 2.4t-2.2 1.6-2.6 0.9-2.5 0.3-2.6-0.3-2.6-0.9-2.2-1.6-0.8-2.4q0-0.2 0.6-1.5t1.7-3.2 2-3.6 1.8-3.3 1-1.8q0.4-0.6 1.1-0.6t1 0.6q0.1 0.1 1 1.8t1.9 3.3 1.9 3.6 1.7 3.2 0.6 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBalanceScale.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBalanceScale;
//# sourceMappingURL=IconBalanceScale.js.map