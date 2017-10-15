import * as React from "react";
class IconBullseye extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--bullseye ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M25.9 20q0 2.4-1.7 4t-4.1 1.7-4-1.7-1.7-4 1.7-4 4-1.7 4.1 1.7 1.7 4zm2.8 0q0-3.6-2.5-6.1t-6.1-2.5-6 2.5-2.5 6.1 2.5 6.1 6 2.5 6.1-2.5 2.5-6.1zm2.9 0q0 4.7-3.4 8.1t-8.1 3.3-8-3.3T8.7 20t3.4-8.1 8-3.3 8.1 3.3 3.4 8.1zm2.8 0q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1T10 9.9t-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5zm2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBullseye.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBullseye;
//# sourceMappingURL=IconBullseye.js.map