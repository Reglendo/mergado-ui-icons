import * as React from "react";
class IconSpoon extends React.Component {
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
                    React.createElement("path", { d: "M27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 .6-.4 1t-1 .4h-4.3q-.6 0-1-.4t-.3-1l1-18.4q-2.1-.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4T20.1 0t3.5 1.8 2.7 4.4.9 5.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconSpoon.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconSpoon;
//# sourceMappingURL=IconSpoon.js.map