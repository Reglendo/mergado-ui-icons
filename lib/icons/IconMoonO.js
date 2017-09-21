import * as React from "react";
class IconMoonO extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--moon-o ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.7 29.1q-1.2 0.2-2.5 0.2-4 0-7.5-2t-5.5-5.5-2-7.5q0-4.3 2.3-8-4.5 1.4-7.3 5.1t-2.8 8.6q0 2.9 1.1 5.5t3 4.6 4.6 3 5.5 1.2q3.3 0 6.1-1.4t5-3.8z m4.5-1.9q-2.1 4.5-6.3 7.2t-9.3 2.7q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4-1.4-6.7q0-3.4 1.3-6.5t3.5-5.4 5.2-3.7 6.5-1.5q1-0.1 1.4 0.8 0.4 1-0.4 1.7-1.9 1.7-2.9 4t-1 4.9q0 3.3 1.6 6.1t4.4 4.4 6.1 1.6q2.6 0 5.1-1.1 0.9-0.4 1.6 0.3 0.3 0.3 0.4 0.7t-0.1 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconMoonO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconMoonO;
//# sourceMappingURL=IconMoonO.js.map