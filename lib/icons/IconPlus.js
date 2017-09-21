import * as React from "react";
class IconPlus extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--plus ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.9 16.4v4.3q0 0.9-0.6 1.5t-1.5 0.7h-9.3v9.2q0 0.9-0.6 1.6t-1.5 0.6h-4.3q-0.9 0-1.5-0.6t-0.7-1.6v-9.2h-9.3q-0.9 0-1.5-0.7t-0.6-1.5v-4.3q0-0.9 0.6-1.5t1.5-0.6h9.3v-9.3q0-0.9 0.7-1.5t1.5-0.6h4.3q0.9 0 1.5 0.6t0.6 1.5v9.3h9.3q0.9 0 1.5 0.6t0.6 1.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconPlus.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconPlus;
//# sourceMappingURL=IconPlus.js.map