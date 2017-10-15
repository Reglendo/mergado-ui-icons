import * as React from "react";
class IconXingSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--xing-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M18.3 17.1l-2.8-5q-.5-.7-1.2-.7h-4.1q-.4 0-.6.2-.1.3 0 .7l2.8 4.8-4.3 7.7q-.2.3 0 .6.1.3.5.3h4.1q.7 0 1.1-.8zM32.2 6q-.1-.3-.5-.3h-4.2q-.7 0-1.1.8l-9.2 16.3q.1 0 5.9 10.7.4.8 1.2.8h4.1q.4 0 .5-.3.2-.3 0-.6l-5.8-10.6v-.1l9.1-16.1q.2-.4 0-.6zm5.1 3.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconXingSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconXingSquare;
//# sourceMappingURL=IconXingSquare.js.map