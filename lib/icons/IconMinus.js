import * as React from "react";
class IconMinus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--minus ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-27.2q-0.8 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h27.2q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconMinus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconMinus;
//# sourceMappingURL=IconMinus.js.map