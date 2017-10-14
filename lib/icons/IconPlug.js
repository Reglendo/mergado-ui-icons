import * as React from "react";
class IconPlug extends React.Component {
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
                    React.createElement("path", { d: "m39.2 10.1q0.8 0.8 0.8 2t-0.8 2.1l-9 8.9 3.4 3.3-3.6 3.6q-3.6 3.6-8.7 4.2t-9.2-2.3l-8.1 8.1h-4v-4l8.1-8.1q-2.8-4.1-2.3-9.2t4.2-8.7l3.6-3.6 3.3 3.4 8.9-9q0.9-0.8 2.1-0.8t2 0.8 0.8 2-0.8 2.1l-8.9 8.9 5.2 5.2 8.9-8.9q0.9-0.8 2.1-0.8t2 0.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPlug.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPlug;
//# sourceMappingURL=IconPlug.js.map