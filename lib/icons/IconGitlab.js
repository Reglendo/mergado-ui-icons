import * as React from "react";
class IconGitlab extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--gitlab ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m2.3 15.8l17.7 22.6-19.4-14q-0.4-0.3-0.5-0.8t0-1l2.2-6.8z m10.3 0h14.8l-7.4 22.6z m-4.4-13.7l4.4 13.7h-10.3l4.4-13.7q0.2-0.5 0.8-0.5t0.7 0.5z m29.5 13.7l2.2 6.8q0.2 0.5 0 1t-0.5 0.8l-19.4 14 17.7-22.6z m0 0h-10.3l4.4-13.7q0.2-0.5 0.7-0.5t0.8 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconGitlab.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconGitlab;
//# sourceMappingURL=IconGitlab.js.map