import * as React from "react";
class IconFlask extends React.Component {
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
                    React.createElement("path", { d: "m35.6 32.3q1.2 2 0.5 3.4t-3.2 1.4h-25.7q-2.4 0-3.1-1.4t0.5-3.4l11.2-17.7v-8.9h-1.4q-0.6 0-1-0.4t-0.5-1 0.5-1 1-0.4h11.4q0.6 0 1 0.4t0.4 1-0.4 1-1 0.4h-1.4v8.9z m-17.4-16.2l-6.1 9.6h15.9l-6.1-9.6-0.4-0.7v-9.7h-2.9v9.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFlask.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFlask;
//# sourceMappingURL=IconFlask.js.map