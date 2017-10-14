import * as React from "react";
class IconTrademark extends React.Component {
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
                    React.createElement("path", { d: "m17.4 12.9v2.3q0 0.3-0.2 0.5t-0.5 0.2h-6v16.4q0 0.3-0.2 0.5t-0.4 0.2h-2.8q-0.2 0-0.4-0.2t-0.2-0.5v-16.4h-6.1q-0.2 0-0.4-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h16q0.3 0 0.5 0.2t0.2 0.5z m21.1-0.1l1.5 19.5q0 0.3-0.1 0.5-0.2 0.2-0.5 0.2h-2.7q-0.3 0-0.5-0.2t-0.2-0.4l-0.9-11.9-3.8 8.6q-0.2 0.4-0.6 0.4h-2.5q-0.4 0-0.5-0.4l-3.9-8.7-0.9 12q0 0.2-0.2 0.4t-0.4 0.2h-2.7q-0.3 0-0.5-0.2-0.2-0.2-0.2-0.5l1.6-19.5q0-0.2 0.2-0.4t0.4-0.2h2.9q0.4 0 0.6 0.4l4.5 10.5q0.2 0.5 0.4 1.1 0-0.2 0.2-0.5t0.2-0.6l4.5-10.5q0.1-0.4 0.5-0.4h2.9q0.3 0 0.4 0.2t0.3 0.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTrademark.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTrademark;
//# sourceMappingURL=IconTrademark.js.map