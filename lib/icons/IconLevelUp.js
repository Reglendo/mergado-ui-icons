import * as React from "react";
class IconLevelUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--level-up ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.2 13.5q-.4.8-1.3.8h-4.3v19.3q0 .3-.2.5t-.5.2H9.2q-.5 0-.6-.4-.2-.5.1-.8l3.5-4.3q.2-.2.6-.2h7.1V14.3h-4.3q-.9 0-1.3-.8-.3-.9.2-1.6l7.2-8.5q.4-.5 1.1-.5t1.1.5l7.1 8.5q.6.8.2 1.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLevelUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLevelUp;
//# sourceMappingURL=IconLevelUp.js.map