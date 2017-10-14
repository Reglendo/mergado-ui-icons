import * as React from "react";
class IconChevronCircleRight extends React.Component {
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
                    React.createElement("path", { d: "m19 31.1l10.1-10.1q0.5-0.4 0.5-1t-0.5-1l-10.1-10.1q-0.4-0.5-1-0.5t-1 0.5l-2.3 2.2q-0.4 0.5-0.4 1t0.4 1l6.9 6.9-6.9 6.9q-0.4 0.4-0.4 1t0.4 1l2.3 2.2q0.4 0.5 1 0.5t1-0.5z m18.3-11.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconChevronCircleRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconChevronCircleRight;
//# sourceMappingURL=IconChevronCircleRight.js.map