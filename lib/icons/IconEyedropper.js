import * as React from "react";
class IconEyedropper extends React.Component {
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
                    React.createElement("path", { d: "m37.9 2.1q2.1 2.1 2.1 5.1t-2.1 5l-5 5 2.3 2.3q0.2 0.2 0.2 0.5t-0.2 0.5l-4.7 4.7q-0.2 0.2-0.5 0.2t-0.5-0.2l-2.4-2.3-13.4 13.4q-0.8 0.8-2 0.8h-4.6l-5.7 2.9-1.4-1.4 2.9-5.7v-4.6q0-1.2 0.8-2l13.4-13.4-2.3-2.4q-0.2-0.2-0.2-0.5t0.2-0.5l4.7-4.7q0.2-0.2 0.5-0.2t0.5 0.2l2.3 2.3 5-5q2.1-2.1 5-2.1t5.1 2.1z m-26.5 30.8l12.9-12.9-4.3-4.3-12.9 12.9v4.3h4.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEyedropper.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEyedropper;
//# sourceMappingURL=IconEyedropper.js.map