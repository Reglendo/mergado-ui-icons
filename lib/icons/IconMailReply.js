import * as React from "react";
class IconMailReply extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M40 25q0 3.7-2.8 10.1-.1.1-.3.5t-.3.7-.3.5q-.2.3-.6.3-.3 0-.5-.2t-.2-.5q0-.2.1-.6t0-.6q.1-1.5.1-2.7 0-2.3-.4-4t-1-3.1-1.8-2.3-2.4-1.5-3-1-3.4-.5-3.9-.1h-5v5.7q0 .6-.4 1t-1 .4-1-.4L.4 15.3q-.4-.4-.4-1t.4-1L11.9 1.9q.4-.5 1-.5t1 .5.4 1v5.7h5q15.9 0 19.5 9 1.2 3 1.2 7.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMailReply.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconMailReply;
//# sourceMappingURL=IconMailReply.js.map