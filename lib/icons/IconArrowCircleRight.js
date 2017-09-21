import * as React from "react";
class IconArrowCircleRight extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--arrow-circle-right ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.7 20q0-0.6-0.4-1l-10.1-10.1q-0.4-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1t0.4 1l4.3 4.2h-11.3q-0.5 0-1 0.5t-0.4 1v2.8q0 0.6 0.4 1t1 0.5h11.3l-4.3 4.2q-0.4 0.4-0.4 1t0.4 1l2.1 2q0.4 0.4 1 0.4t1-0.4l10.1-10.1q0.4-0.4 0.4-1z m5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconArrowCircleRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconArrowCircleRight;
//# sourceMappingURL=IconArrowCircleRight.js.map