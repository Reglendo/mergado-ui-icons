import * as React from "react";
class IconExclamationTriangle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--exclamation-triangle ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m22.9 30.7v-4.2q0-0.4-0.3-0.6t-0.5-0.2h-4.2q-0.3 0-0.5 0.2t-0.3 0.6v4.2q0 0.3 0.3 0.5t0.5 0.2h4.2q0.3 0 0.5-0.2t0.3-0.5z m-0.1-8.4l0.4-10.2q0-0.3-0.2-0.4-0.3-0.3-0.5-0.3h-5q-0.2 0-0.5 0.3-0.2 0.1-0.2 0.4l0.4 10.2q0 0.3 0.2 0.4t0.5 0.2h4.2q0.3 0 0.5-0.2t0.2-0.4z m-0.3-20.8l17.1 31.4q0.8 1.4 0 2.8-0.4 0.7-1 1.1t-1.5 0.3h-34.2q-0.8 0-1.5-0.3t-1-1.1q-0.8-1.4 0-2.8l17.1-31.4q0.4-0.7 1.1-1.1t1.4-0.4 1.4 0.4 1.1 1.1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconExclamationTriangle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconExclamationTriangle;
//# sourceMappingURL=IconExclamationTriangle.js.map