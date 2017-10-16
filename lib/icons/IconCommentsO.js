import * as React from "react";
class IconCommentsO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--comments-o ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M15.7 8.6q-3.4 0-6.4 1.1t-4.7 3.2-1.7 4.2q0 1.9 1.1 3.6t3.4 2.9l2.1 1.3-.7 1.8q.7-.4 1.3-.8l1-.7 1.2.2q1.7.3 3.4.3 3.4 0 6.4-1.2t4.7-3.1 1.8-4.3-1.8-4.2-4.7-3.2-6.4-1.1zm0-2.9q4.3 0 7.9 1.5t5.7 4.2 2.1 5.7-2.1 5.8-5.7 4.1-7.9 1.6q-1.9 0-3.9-.4-2.8 2-6.2 2.9-.8.2-1.9.3h-.1q-.3 0-.5-.2t-.2-.4v-.4l.1-.2v-.1l.1-.1.1-.1.1-.1q.1-.1.5-.6t.6-.6.5-.7.6-.8.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5zm18.4 26.1l.4 1q.2.5.6.8t.5.7.6.7.5.5l.1.1.1.1.1.1q.1.1 0 .2l.1.1v.4q0 .3-.3.5t-.5.1q-1.1-.1-1.9-.3-3.4-.9-6.2-2.9-2 .4-3.9.4-6.1 0-10.5-3 1.2.1 1.9.1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-.5-3.4 2.9 1.6 4.5 4t1.7 5.2q0 2.6-1.6 5t-4.3 3.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCommentsO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconCommentsO;
//# sourceMappingURL=IconCommentsO.js.map