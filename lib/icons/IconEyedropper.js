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
                    React.createElement("path", { d: "M37.9 2.1Q40 4.2 40 7.2t-2.1 5l-5 5 2.3 2.3q.2.2.2.5t-.2.5l-4.7 4.7q-.2.2-.5.2t-.5-.2l-2.4-2.3-13.4 13.4q-.8.8-2 .8H7.1L1.4 40 0 38.6l2.9-5.7v-4.6q0-1.2.8-2l13.4-13.4-2.3-2.4q-.2-.2-.2-.5t.2-.5l4.7-4.7q.2-.2.5-.2t.5.2l2.3 2.3 5-5q2.1-2.1 5-2.1t5.1 2.1zM11.4 32.9L24.3 20 20 15.7 7.1 28.6v4.3h4.3z" }))),
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