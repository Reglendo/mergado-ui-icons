import * as React from "react";
class IconEur extends React.Component {
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
                    React.createElement("path", { d: "m30.3 29.2l0.8 3.5q0 0.3-0.1 0.5t-0.4 0.3l-0.1 0.1q-0.1 0-0.2 0t-0.4 0.1-0.5 0.2-0.5 0.1-0.7 0.1-0.7 0.1-0.9 0.1-0.8 0q-5.2 0-9.2-2.9t-5.3-7.9h-2.1q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h1.5q-0.1-1.3 0-2.4h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-2.5q0-0.3 0.2-0.5t0.5-0.2h2.2q1.5-4.7 5.4-7.6t9-2.8q2.3 0 4.3 0.5 0.3 0 0.5 0.3 0.1 0.3 0 0.5l-0.9 3.6q-0.1 0.3-0.4 0.4t-0.5 0.1l-0.1 0q-0.1-0.1-0.2-0.1l-0.4-0.1-0.5-0.1-0.6 0-0.7-0.1-0.6 0q-2.8 0-5.1 1.4t-3.3 4h10.4q0.4 0 0.6 0.2 0.2 0.3 0.2 0.6l-0.6 2.6q-0.1 0.5-0.7 0.5h-10.9q-0.1 0.9 0 2.4h10.3q0.3 0 0.5 0.2 0.2 0.3 0.1 0.6l-0.5 2.5q0 0.3-0.2 0.5t-0.5 0.1h-8.6q1.1 2.6 3.3 4.2t5.1 1.5q0.4 0 0.8 0t0.8-0.1 0.6-0.1 0.6-0.1 0.4-0.1l0.3-0.1 0.1 0q0.3-0.1 0.5 0 0.3 0.2 0.4 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEur.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEur;
//# sourceMappingURL=IconEur.js.map