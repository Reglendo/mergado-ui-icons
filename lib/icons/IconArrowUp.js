import * as React from "react";
class IconArrowUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--arrow-up ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.5 21.7q0 1.1-.9 2L35 25.4q-.9.8-2.1.8-1.2 0-2-.8l-6.5-6.6v15.7q0 1.2-.9 1.9t-2 .7h-2.9q-1.1 0-2-.7t-.8-1.9V18.8l-6.6 6.6q-.8.8-2 .8t-2-.8l-1.7-1.7q-.8-.9-.8-2 0-1.2.8-2.1L18.1 5.1q.7-.8 2-.8 1.2 0 2 .8l14.5 14.5q.9.9.9 2.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconArrowUp;
//# sourceMappingURL=IconArrowUp.js.map