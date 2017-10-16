import * as React from "react";
class IconChain extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--chain ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M34 27.1q0-.8-.6-1.5L28.7 21q-.6-.6-1.5-.6t-1.6.7q.1 0 .4.4t.5.5.3.4.3.6.1.6q0 .9-.6 1.5t-1.5.6q-.4 0-.6-.1t-.6-.3-.4-.3-.5-.5-.4-.4q-.8.7-.8 1.6 0 .9.7 1.6l4.6 4.6q.6.6 1.5.6t1.5-.6l3.3-3.3q.6-.6.6-1.5zM18.3 11.4q0-.9-.6-1.5l-4.6-4.6q-.6-.7-1.5-.7t-1.6.6L6.8 8.5q-.7.6-.7 1.5t.7 1.5l4.6 4.7q.6.6 1.5.6 1 0 1.6-.7 0-.1-.4-.4t-.5-.5-.3-.4-.3-.6-.1-.6q0-.9.7-1.5t1.5-.7q.3 0 .6.1t.6.3.4.3.5.5.4.4q.7-.7.7-1.6zm20 15.7q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9T24 34.9l-4.6-4.6q-1.8-1.9-1.8-4.6 0-2.7 1.9-4.6l-1.9-2q-1.9 2-4.7 2-2.7 0-4.5-1.9l-4.7-4.6Q1.9 12.7 1.9 10t1.9-4.5L7 2.2Q8.9.4 11.6.4q2.7 0 4.5 1.9l4.6 4.6q1.9 1.8 1.9 4.5 0 2.8-2 4.7l2 1.9q1.9-1.9 4.6-1.9 2.7 0 4.6 1.8l4.6 4.7q1.9 1.9 1.9 4.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconChain.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconChain;
//# sourceMappingURL=IconChain.js.map