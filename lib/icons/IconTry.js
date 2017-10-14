import * as React from "react";
class IconTry extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-0.3 0-0.5-0.2t-0.2-0.5v-13.7l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.2-0.3-0.6v-2.8q0-0.6 0.5-0.7l5.2-1.6v-2.1l-4.8 1.5q0 0-0.2 0-0.2 0-0.4-0.1-0.3-0.3-0.3-0.6v-2.9q0-0.5 0.5-0.7l5.2-1.6v-5.5q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5v4l8.4-2.6q0.3-0.1 0.6 0.1t0.3 0.6v2.9q0 0.5-0.5 0.7l-8.8 2.7v2l8.4-2.6q0.3-0.1 0.6 0.2t0.3 0.5v2.9q0 0.5-0.5 0.7l-8.8 2.7v10.9q4.2-0.3 7.1-3.4t2.9-7.3q0-0.3 0.2-0.5t0.5-0.2h3.6q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTry.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTry;
//# sourceMappingURL=IconTry.js.map