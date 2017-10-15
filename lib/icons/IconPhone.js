import * as React from "react";
class IconPhone extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--phone ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M35.9 27.7q0 .6-.2 1.6t-.5 1.5q-.4 1.1-2.7 2.3-2.1 1.2-4.1 1.2-.6 0-1.2-.1t-1.3-.3-1.1-.3-1.2-.5-1.1-.4q-2.2-.7-3.9-1.8-2.8-1.8-5.9-4.8t-4.8-5.9Q6.8 18.5 6 16.3q0-.2-.4-1.1t-.4-1.3-.3-1-.3-1.3-.1-1.2q0-2 1.1-4.1Q6.9 4 8 3.5q.6-.2 1.5-.4t1.6-.2h.5q.4.2 1.2 1.7l.6 1.2q.4.8.8 1.4t.7 1.2q.1.1.4.6t.5.8.1.6q0 .5-.6 1.1t-1.4 1.3-1.4 1.1-.6 1.1q0 .2.1.5t.2.4.3.6.3.4q1.7 3.1 3.8 5.2t5.3 3.9l.4.3q.4.3.6.3t.4.2.5.1q.4 0 1-.6t1.2-1.4 1.3-1.4 1.1-.6q.3 0 .6.1t.8.5.6.4q.5.3 1.1.7t1.5.8 1.2.6q1.5.8 1.7 1.2v.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPhone.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPhone;
//# sourceMappingURL=IconPhone.js.map