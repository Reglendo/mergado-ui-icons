import * as React from "react";
class IconMap extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--map ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.4 0q.3 0 .5.2t.2.5v32.9q0 .4-.3.6L1.1 39.9q-.2.1-.4.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.4-.6L11.1.1q.2-.1.3-.1zm27.9 0q.3 0 .5.2t.2.5v32.9q0 .4-.4.6l-10.7 5.7q-.1.1-.3.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.3-.6L39 .1q.1-.1.3-.1zm-25 0q.2 0 .3.1L26 5.8q.4.2.4.6v32.9q0 .3-.2.5t-.5.2q-.2 0-.3-.1L14 34.2q-.4-.2-.4-.6V.7q0-.3.2-.5t.5-.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMap.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconMap;
//# sourceMappingURL=IconMap.js.map