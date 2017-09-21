import * as React from "react";
class IconShareSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--share-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m25.4 24.6l7.9-7.9q0.4-0.4 0.4-1t-0.4-1l-7.9-7.8q-0.6-0.7-1.5-0.4-0.9 0.4-0.9 1.4v3.5q-2.7 0-4.8 0.5t-3.6 1.1-2.6 1.8-1.7 2.1-1 2.4-0.5 2.5-0.1 2.5q0 4 3.7 9 0.3 0.3 0.6 0.3 0.2 0 0.3-0.1 0.5-0.2 0.4-0.7-1-7.9 1.4-10.6 1-1.1 2.9-1.7t5-0.5v3.6q0 0.9 0.9 1.3 0.3 0.1 0.5 0.1 0.6 0 1-0.4z m11.9-15.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconShareSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconShareSquare;
//# sourceMappingURL=IconShareSquare.js.map