import * as React from "react";
class IconSlack extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--slack ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.4 17.3q1.4 0 2.3.9t.9 2.3q0 2.2-2 2.9l-3.9 1.3 1.3 3.7q.1.5.1 1.1 0 1.3-.9 2.3t-2.3.9q-1 0-1.9-.6t-1.2-1.6l-1.2-3.7-6.9 2.4 1.2 3.7q.2.5.2 1 0 1.3-.9 2.3t-2.3.9q-1.1 0-1.9-.6t-1.2-1.6l-1.2-3.6-3.4 1.2q-.7.2-1.2.2-1.3 0-2.2-.9t-.9-2.3q0-1 .6-1.9t1.6-1.1l3.5-1.2-2.4-7-3.5 1.2q-.5.2-1 .2-1.4 0-2.3-.9t-.9-2.3q0-1 .6-1.9t1.6-1.2l3.5-1.1L6 8.7q-.1-.5-.1-1 0-1.4.9-2.3t2.3-1q1 0 1.9.6t1.1 1.6l1.3 3.6 6.9-2.3-1.2-3.6q-.2-.5-.2-1.1 0-1.3.9-2.2t2.3-1q1.1 0 1.9.6t1.2 1.6l1.2 3.6L30 4.6q.5-.2 1-.2 1.3 0 2.3.9t.9 2.2q0 1-.7 1.8t-1.6 1.2l-3.5 1.2 2.3 7.1 3.7-1.3q.5-.2 1-.2zm-17.7 5.9l6.9-2.4-2.3-7-7 2.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSlack.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSlack;
//# sourceMappingURL=IconSlack.js.map