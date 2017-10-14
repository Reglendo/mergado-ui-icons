import * as React from "react";
class IconTwitter extends React.Component {
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
                    React.createElement("path", { d: "M37.7 9.1q-1.5 2.2-3.7 3.7.1.3.1 1 0 2.9-.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3.8.1 1.7.1 5 0 9-3-2.4-.1-4.2-1.5t-2.6-3.5q.8.1 1.4.1 1 0 1.9-.3-2.5-.5-4.1-2.5t-1.7-4.6q1.5.8 3.3.9-1.5-1-2.4-2.6T4 10.7q0-2 .9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-.2-.9-.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-.5 4.6-1.7-.8 2.5-3.2 3.9 2.1-.2 4.2-1.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTwitter.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTwitter;
//# sourceMappingURL=IconTwitter.js.map