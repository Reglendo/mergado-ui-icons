import * as React from "react";
class IconLongArrowRight extends React.Component {
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
                    React.createElement("path", { d: "m39.1 19.9q0 0.3-0.3 0.6l-8.5 7.9q-0.4 0.3-0.8 0.1-0.4-0.2-0.4-0.6v-5h-27.9q-0.3 0-0.5-0.2t-0.2-0.6v-4.2q0-0.4 0.2-0.6t0.5-0.2h27.9v-5q0-0.4 0.4-0.6t0.8 0.1l8.5 7.8q0.3 0.2 0.3 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconLongArrowRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconLongArrowRight;
//# sourceMappingURL=IconLongArrowRight.js.map