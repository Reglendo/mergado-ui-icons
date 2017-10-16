import * as React from "react";
class IconOpencart extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--opencart ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M26.7 31.6q0 1.2-.9 2.1t-2 .8-2-.8-.9-2.1.9-2 2-.8 2 .8.9 2zm-13.1 0q0 1.2-.9 2.1t-2 .8-2.1-.8-.8-2.1.8-2 2.1-.8 2 .8.9 2zM0 5.5q1 1 1.9 1.8t2.2 1.5 2.3 1.1 2.9.8 3.5.5 4.4.3 5.3.2 6.6 0q2.4 0 4.2.1t3.2.3 2.2.5 1.2.7.4.9-.3 1.1-1 1.3-1.6 1.6-2 1.9-2.4 2.1q-3.3 2.7-5 4.3.5-.9 1.3-1.9t1.7-1.9 1.6-1.7 1.5-1.6.9-1.4.2-1.2-.8-1-2-.7-3.6-.4-5.3-.1q-2.9 0-5.5-.1t-4.5-.4-3.5-.8-2.8-.9-2.2-1-1.6-1.2-1.2-1.3-.9-1.2-.7-1.2-.6-1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconOpencart.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconOpencart;
//# sourceMappingURL=IconOpencart.js.map