import * as React from "react";
class IconThLarge extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--th-large ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m18.6 22.9v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z m20 17.2v8.5q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-8.5q0-1.2 0.8-2.1t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2.1z m0-17.2v8.6q0 1.1-0.8 2t-2 0.8h-11.4q-1.2 0-2.1-0.8t-0.8-2v-8.6q0-1.1 0.8-2t2.1-0.8h11.4q1.1 0 2 0.8t0.8 2z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconThLarge.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconThLarge;
//# sourceMappingURL=IconThLarge.js.map