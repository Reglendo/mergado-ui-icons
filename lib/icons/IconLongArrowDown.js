import * as React from "react";
class IconLongArrowDown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--long-arrow-down ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.6 29q.2.4-.1.8l-7.9 8.6q-.2.2-.5.2t-.5-.2l-7.9-8.6q-.3-.4-.1-.8.2-.4.6-.4h5V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v27.9h5q.5 0 .7.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLongArrowDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLongArrowDown;
//# sourceMappingURL=IconLongArrowDown.js.map