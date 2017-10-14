import * as React from "react";
class IconGlass extends React.Component {
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
                    React.createElement("path", { d: "m37.9 4.2q0 0.7-0.9 1.7l-14.1 14.1v17.1h7.1q0.6 0 1 0.5t0.4 1-0.4 1-1 0.4h-20q-0.6 0-1-0.4t-0.4-1 0.4-1 1-0.5h7.1v-17.1l-14.1-14.1q-0.9-1-0.9-1.7 0-0.6 0.4-0.9t0.8-0.4 1 0h31.4q0.5 0 1 0t0.8 0.4 0.4 0.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGlass.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconGlass;
//# sourceMappingURL=IconGlass.js.map