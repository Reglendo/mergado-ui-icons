import * as React from "react";
class IconXingSquare extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--xing-square ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.3 17.1q0 0-2.8-5-0.5-0.7-1.2-0.7h-4.1q-0.4 0-0.6 0.2-0.1 0.3 0 0.7l2.8 4.8v0l-4.3 7.7q-0.2 0.3 0 0.6 0.1 0.3 0.5 0.3h4.1q0.7 0 1.1-0.8z m13.9-11.1q-0.1-0.3-0.5-0.3h-4.2q-0.7 0-1.1 0.8l-9.2 16.3q0.1 0 5.9 10.7 0.4 0.8 1.2 0.8h4.1q0.4 0 0.5-0.3 0.2-0.3 0-0.6l-5.8-10.6v-0.1l9.1-16.1q0.2-0.4 0-0.6z m5.1 3.3v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconXingSquare.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconXingSquare;
//# sourceMappingURL=IconXingSquare.js.map