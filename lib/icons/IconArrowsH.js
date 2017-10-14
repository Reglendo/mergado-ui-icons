import * as React from "react";
class IconArrowsH extends React.Component {
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
                    React.createElement("path", { d: "m40 20q0 0.6-0.4 1l-5.7 5.7q-0.5 0.4-1 0.4t-1-0.4-0.5-1v-2.8h-22.8v2.8q0 0.6-0.5 1t-1 0.4-1-0.4l-5.7-5.7q-0.4-0.4-0.4-1t0.4-1l5.7-5.7q0.5-0.4 1-0.4t1.1 0.4 0.4 1v2.8h22.8v-2.8q0-0.6 0.5-1t1-0.4 1 0.4l5.7 5.7q0.4 0.4 0.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowsH.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowsH;
//# sourceMappingURL=IconArrowsH.js.map