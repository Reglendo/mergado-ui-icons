import * as React from "react";
class IconBullhorn extends React.Component {
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
                    React.createElement("path", { d: "M37.1 14.3q1.2 0 2.1.8t.8 2-.8 2.1-2.1.8v8.6q0 1.1-.8 2t-2 .8q-9.3-7.7-18.1-8.5-1.3.5-2.1 1.5t-.7 2.3.9 2q-.4.8-.5 1.5t.2 1.3.7 1.2 1.1 1.1 1.3 1.2q-.6 1.2-2.4 1.8t-3.8.3T8 35.8q-.2-.5-.7-1.9t-.7-2.1-.5-2-.4-2.3.1-2.2.5-2.4H3.6q-1.5 0-2.5-1.1T0 19.3V15q0-1.5 1.1-2.5t2.5-1.1h10.7q9.7 0 20-8.5 1.1 0 2 .8t.8 2v8.6zm-2.8 13.5V6.5q-8.8 6.7-17.2 7.6v6.1q8.5.9 17.2 7.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBullhorn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBullhorn;
//# sourceMappingURL=IconBullhorn.js.map