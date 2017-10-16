import * as React from "react";
class IconRocket extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--rocket ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M33.1 10q0-.9-.6-1.5T31 7.9t-1.5.6-.6 1.5.6 1.5 1.5.6 1.5-.6.6-1.5zm5-6.4q0 5.5-1.6 9.6t-5.7 8q-1.8 1.8-4.4 4l-.4 8.4q0 .4-.4.6l-8.5 5q-.2.1-.4.1-.3 0-.5-.2l-1.4-1.4q-.3-.4-.2-.8l1.9-6.1-6.3-6.3-6.1 1.9h-.2q-.4 0-.6-.2l-1.4-1.4q-.4-.4-.1-.9l5-8.5q.2-.4.6-.4l8.4-.4q2.2-2.6 4-4.4 4.2-4.2 8-5.8t9.6-1.5q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRocket.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconRocket;
//# sourceMappingURL=IconRocket.js.map