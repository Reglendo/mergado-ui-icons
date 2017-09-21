import * as React from "react";
class IconTrain extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--train ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q0.4 0.3 0.2 0.8t-0.7 0.4h-23.5q-0.5 0-0.7-0.4t0.2-0.8l4.7-4.5q-4-0.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5t7.1-2.1h14.3z m-7.2 30q1.8 0 3.1-1.2t1.2-3.1-1.2-3-3.1-1.3-3 1.3-1.2 3 1.2 3.1 3 1.2z m12.9-12.9v-11.4h-25.7v11.4h25.7z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconTrain.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconTrain;
//# sourceMappingURL=IconTrain.js.map