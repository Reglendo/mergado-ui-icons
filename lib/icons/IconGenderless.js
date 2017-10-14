import * as React from "react";
class IconGenderless extends React.Component {
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
                    React.createElement("path", { d: "m29.9 21.4q0-4.1-3-7t-7-3-7.1 3-2.9 7 2.9 7.1 7.1 2.9 7-2.9 3-7.1z m2.8 0q0 2.6-1 5t-2.7 4.1-4.2 2.8-4.9 1-5-1-4.1-2.8-2.8-4.1-1-5 1-5 2.8-4.1 4.1-2.7 5-1 4.9 1 4.2 2.7 2.7 4.1 1 5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconGenderless.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconGenderless;
//# sourceMappingURL=IconGenderless.js.map