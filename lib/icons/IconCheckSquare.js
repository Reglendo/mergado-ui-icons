import * as React from "react";
class IconCheckSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--check-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.3 29l13.7-13.7q0.4-0.4 0.4-1t-0.4-1l-2.3-2.3q-0.4-0.4-1-0.4t-1 0.4l-10.4 10.4-4.7-4.7q-0.4-0.4-1-0.4t-1 0.4l-2.3 2.3q-0.4 0.4-0.4 1t0.4 1l8 8q0.4 0.4 1 0.4t1-0.4z m19-19.7v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCheckSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCheckSquare;
//# sourceMappingURL=IconCheckSquare.js.map