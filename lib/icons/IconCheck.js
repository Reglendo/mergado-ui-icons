import * as React from "react";
class IconCheck extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--check ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m37.3 12.6q0 0.9-0.6 1.6l-19.2 19.1q-0.6 0.7-1.5 0.7t-1.6-0.7l-11.1-11.1q-0.6-0.6-0.6-1.5t0.6-1.5l3.1-3q0.6-0.7 1.5-0.7t1.5 0.7l6.6 6.5 14.6-14.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.6 0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCheck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCheck;
//# sourceMappingURL=IconCheck.js.map