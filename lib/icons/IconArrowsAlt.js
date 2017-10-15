import * as React from "react";
class IconArrowsAlt extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--arrows-alt ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.6 12.1L23.7 20l7.9 7.9 3.3-3.2q.6-.7 1.5-.3.9.4.9 1.3v10q0 .6-.4 1t-1 .4h-10q-1 0-1.4-.9-.3-.8.4-1.5l3.2-3.2-8-7.9-7.9 7.9 3.2 3.2q.7.7.3 1.5-.3.9-1.3.9h-10q-.5 0-1-.4t-.4-1v-10q0-.9.9-1.3t1.5.3l3.2 3.2 8-7.9-7.9-7.9-3.3 3.2q-.4.4-1 .4-.2 0-.5-.1-.9-.4-.9-1.3v-10q0-.6.4-1t1-.4h10q1 0 1.3.9.4.8-.3 1.5l-3.2 3.2 7.9 7.9 8-7.9-3.2-3.2q-.7-.7-.4-1.5.4-.9 1.4-.9h10q.5 0 1 .4t.4 1v10q0 .9-.9 1.3-.3.1-.5.1-.6 0-1-.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowsAlt.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowsAlt;
//# sourceMappingURL=IconArrowsAlt.js.map