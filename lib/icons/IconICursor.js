import * as React from "react";
class IconICursor extends React.Component {
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
                    React.createElement("path", { d: "M28.6 2.9q-7.2 0-7.2 5v9.2h2.9V20h-2.9v12.1q0 5 7.2 5H30V40h-1.4q-6.1 0-8.6-3.3-2.5 3.3-8.6 3.3H10v-2.9h1.4q7.2 0 7.2-5V20h-2.9v-2.9h2.9V7.9q0-5-7.2-5H10V0h1.4q6.1 0 8.6 3.3Q22.5 0 28.6 0H30v2.9h-1.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconICursor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconICursor;
//# sourceMappingURL=IconICursor.js.map