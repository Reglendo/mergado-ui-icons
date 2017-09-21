import * as React from "react";
class IconPlusSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--plus-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.6 21.4v-2.8q0-0.6-0.5-1t-1-0.5h-7.1v-7.1q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v7.1h-7.2q-0.5 0-1 0.5t-0.4 1v2.8q0 0.6 0.4 1t1 0.5h7.2v7.1q0 0.6 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-7.1h7.1q0.6 0 1-0.5t0.5-1z m5.7-12.1v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconPlusSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconPlusSquare;
//# sourceMappingURL=IconPlusSquare.js.map