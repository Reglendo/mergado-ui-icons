import * as React from "react";
class IconCogs extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--cogs ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.6 20q0-2.2-1.6-3.8t-3.7-1.5-3.8 1.5T8 20t1.5 3.8 3.8 1.5 3.7-1.5 1.6-3.8zm16 10.6q0-1-.8-1.8t-1.9-.8-1.9.8-.8 1.8q0 1.1.8 1.9t1.9.8 1.9-.8.8-1.9zm0-21.2q0-1.1-.8-1.9t-1.9-.8-1.9.8-.8 1.9q0 1.1.8 1.8t1.9.8 1.9-.8.8-1.8zm-8 8.7V22q0 .2-.2.4t-.3.2l-3.2.5q-.2.7-.7 1.6.7.9 1.9 2.3.1.2.1.5 0 .2-.1.3-.5.7-1.7 1.9t-1.7 1.2q-.2 0-.4-.1l-2.4-1.9q-.7.4-1.6.7-.2 2.2-.5 3.2-.1.5-.6.5h-3.8q-.3 0-.5-.2t-.2-.3l-.4-3.2q-.7-.2-1.6-.7l-2.4 1.9q-.2.1-.5.1-.2 0-.4-.1-3-2.8-3-3.3 0-.2.2-.4.2-.3.8-1.1t1-1.3q-.5-.9-.7-1.7l-3.2-.5q-.2 0-.4-.2t-.1-.4V18q0-.2.1-.4t.4-.2l3.2-.5q.2-.7.7-1.6-.7-.9-1.9-2.3-.2-.3-.2-.5t.2-.4q.4-.6 1.7-1.8t1.6-1.2q.3 0 .5.1l2.4 1.9q.7-.4 1.6-.7.2-2.2.4-3.2.2-.5.7-.5h3.8q.2 0 .4.2t.2.3l.5 3.2q.7.2 1.6.7l2.4-1.9q.2-.1.4-.1.3 0 .5.1 3 2.8 3 3.3 0 .2-.2.4-.2.4-.8 1.2t-1 1.2q.5 1 .7 1.7l3.2.5q.2 0 .3.2t.2.4zm13.3 11.1v2.9q0 .3-3.1.6-.3.6-.6 1.1 1 2.4 1 2.9 0 .1-.1.1l-2.5 1.5q-.2 0-1-1t-1.1-1.4h-1.2q-.3.4-1.1 1.4t-1 1l-2.5-1.5q-.1 0-.1-.1 0-.5 1-2.9-.3-.5-.6-1.1-3.1-.3-3.1-.6v-2.9q0-.4 3.1-.7.3-.6.6-1-1-2.4-1-2.9 0-.1.1-.2l.7-.4q.7-.4 1.2-.7t.6-.3q.2 0 1 1t1.1 1.4q.4-.1.6-.1t.6.1q1.1-1.5 1.9-2.4h.2l2.5 1.4q.1.1.1.2 0 .5-1.1 2.9.4.4.7 1 3.1.3 3.1.7zm0-21.3v2.9q0 .4-3.1.7l-.6 1q1 2.4 1 2.9 0 .1-.1.2L34.6 17q-.2 0-1-.9t-1.1-1.5q-.4.1-.6.1t-.6-.1q-.3.5-1.1 1.5t-1 .9l-2.5-1.4q-.1-.1-.1-.2 0-.5 1-2.9l-.6-1q-3.1-.3-3.1-.7V7.9q0-.3 3.1-.6.3-.6.6-1.1-1-2.4-1-2.9 0-.1.1-.1 0-.1.7-.4t1.2-.7.6-.4q.2 0 1 1t1.1 1.4h1.2q1.1-1.5 1.9-2.3l.2-.1 2.5 1.5q.1 0 .1.1 0 .5-1.1 2.9.4.5.7 1.1 3.1.3 3.1.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCogs.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCogs;
//# sourceMappingURL=IconCogs.js.map