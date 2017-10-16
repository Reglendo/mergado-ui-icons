import * as React from "react";
class IconStar extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--star ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M38.6 14.4q0 .5-.5 1.1L30 23.4l1.9 11.2v.4q0 .5-.2.8t-.7.3q-.4 0-.9-.2l-10-5.3-10 5.3q-.5.2-.9.2-.5 0-.7-.3t-.3-.8q0-.1.1-.4l1.9-11.2-8.1-7.9q-.6-.6-.6-1.1 0-.8 1.3-1L14 11.8l5-10.2q.4-.9 1.1-.9t1.1.9l5 10.2 11.2 1.6q1.2.2 1.2 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStar.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconStar;
//# sourceMappingURL=IconStar.js.map