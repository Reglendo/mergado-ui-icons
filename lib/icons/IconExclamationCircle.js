import * as React from "react";
class IconExclamationCircle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--exclamation-circle ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3z m2.9 27.8v-4.2q0-0.4-0.2-0.6t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m0-7.7l0.4-13.8q0-0.3-0.3-0.5-0.2-0.1-0.5-0.1h-4.9q-0.3 0-0.5 0.1-0.3 0.2-0.3 0.4l0.4 13.9q0 0.2 0.2 0.4t0.6 0.2h4.1q0.3 0 0.5-0.2t0.3-0.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconExclamationCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconExclamationCircle;
//# sourceMappingURL=IconExclamationCircle.js.map