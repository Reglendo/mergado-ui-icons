import * as React from "react";
class IconGbp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--gbp ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.3 25.4v8.2q0 .3-.2.5t-.5.2H9.2q-.3 0-.5-.2t-.2-.5v-3.4q0-.3.2-.5t.5-.2h2.2V21H9.3q-.4 0-.6-.2t-.2-.6v-2.9q0-.3.2-.5t.6-.2h2.1v-5q0-3.8 2.7-6.3t7.1-2.4q4.1 0 7.4 2.7.2.2.3.5t-.2.5l-2.3 2.8q-.2.3-.5.3-.3.1-.5-.1-.1-.2-.6-.5t-1.5-.7-2.1-.4q-1.9 0-3.1 1.1T17 11.8v4.8h6.8q.3 0 .5.2t.2.5v2.9q0 .3-.2.5t-.5.3H17v8.4h9.2v-4q0-.3.2-.5t.5-.2h3.7q.3 0 .5.2t.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGbp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconGbp;
//# sourceMappingURL=IconGbp.js.map