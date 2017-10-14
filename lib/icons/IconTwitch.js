import * as React from "react";
class IconTwitch extends React.Component {
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
                    React.createElement("path", { d: "M20 9.7v9.7h-3.2V9.7H20zm8.9 0v9.7h-3.3V9.7h3.3zm0 17l5.6-5.7V3.2H7.9v23.4h7.3v4.9l4.8-4.9h8.9zM37.8 0v22.6l-9.7 9.7h-7.3L16 37.1h-4.9v-4.8H2.2V6.5L4.7 0h33.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTwitch.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTwitch;
//# sourceMappingURL=IconTwitch.js.map