import * as React from "react";
class IconYelp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--yelp ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M20.3 29.4v2.9q-.1 6.5-.2 6.8-.2.7-1.1.9-1.2.2-4.1-.9t-3.6-2q-.3-.3-.4-.8 0-.2.1-.5t.8-1.1 4-4.8l1.4-1.6q.3-.4.8-.5t1.1.1q.6.2.9.6t.3.9zm-3.4-5.6q0 1.3-1.1 1.6l-2.7.9Q7 28.2 6.6 28.2q-.8 0-1.2-.8-.3-.5-.4-1.6-.2-1.7 0-3.8t.7-2.7 1.2-.8q.3 0 4.5 1.8 1.6.6 2.6 1l1.9.8q.5.2.8.7t.2 1zm18.5 6.7q-.2 1.2-2.1 3.6t-3 2.8q-.8.3-1.4-.2-.3-.2-4.1-6.4l-1.1-1.7q-.3-.5-.2-1t.4-1q.8-1 1.9-.6l2.6.9q4.6 1.4 5.4 1.8t1.1.4q.6.5.5 1.4zm-15-14.1q.1 2.2-1.2 2.7-1.3.4-2.6-1.6L8.2 4.2q-.2-.8.4-1.4.9-1 4.6-2t5-.7q.9.2 1.1 1 .1.4.5 6.8t.6 8.5zm14.7 2.4q.1.8-.5 1.3-.4.2-7.4 1.9-1.5.3-2 .5-.5.1-1-.1t-.8-.7q-.7-1.1 0-2l1.6-2.2q2.8-3.9 3.4-4.6t.7-.9q.7-.4 1.5 0 1.1.5 2.7 3t1.8 3.7v.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconYelp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconYelp;
//# sourceMappingURL=IconYelp.js.map