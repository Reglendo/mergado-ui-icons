import * as React from "react";
class IconLevelDown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--level-down ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M9.2 5.7h15.7q.3 0 .5.2t.2.6v19.2h4.3q.9 0 1.3.8t-.2 1.6l-7.1 8.6q-.4.4-1.1.4t-1.1-.4l-7.1-8.6q-.6-.7-.2-1.6.4-.8 1.2-.8h4.3V11.4h-7.1q-.3 0-.6-.2L8.7 6.9q-.3-.3-.1-.8.2-.4.6-.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLevelDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconLevelDown;
//# sourceMappingURL=IconLevelDown.js.map