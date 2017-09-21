import * as React from "react";
class IconGraduationCap extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--graduation-cap ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.1 18.9l0.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6 0.6-5.7-0.6-4.1-1.7-1.4-2.2l0.3-5.6 10 3.2q0.4 0.1 0.9 0.1t0.8-0.1z m9.2-5.6q0 0.4-0.3 0.5l-19.7 6.2q0 0-0.1 0t-0.2 0l-11.4-3.6q-0.8 0.6-1.3 1.9t-0.6 3.2q1.1 0.6 1.1 1.9 0 1.2-1 1.8l1 7.6q0.1 0.3-0.1 0.5-0.2 0.1-0.4 0.1h-3.4q-0.2 0-0.4-0.1-0.2-0.2-0.1-0.5l1-7.6q-1-0.6-1-1.8 0-1.3 1.1-2 0.2-3.6 1.7-5.8l-5.8-1.8q-0.4-0.1-0.4-0.5t0.4-0.6l19.6-6.1q0.1 0 0.2 0t0.1 0l19.6 6.1q0.4 0.2 0.4 0.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconGraduationCap.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconGraduationCap;
//# sourceMappingURL=IconGraduationCap.js.map