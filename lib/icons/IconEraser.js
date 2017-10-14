import * as React from "react";
class IconEraser extends React.Component {
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
                    React.createElement("path", { d: "M18.6 30.6l7-7.9h-16l-6.9 7.9h15.9zm21-22.3q.4.7.2 1.5t-.6 1.3L20.6 32.4q-.8.9-2 .9H2.7q-.8 0-1.5-.4t-1-1.2q-.3-.7-.2-1.5t.7-1.3L19.3 7.6q.8-.9 2-.9h15.9q.8 0 1.5.4t.9 1.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEraser.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEraser;
//# sourceMappingURL=IconEraser.js.map