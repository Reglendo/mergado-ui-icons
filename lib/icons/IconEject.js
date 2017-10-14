import * as React from "react";
class IconEject extends React.Component {
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
                    React.createElement("path", { d: "m3.3 21.9l15.9-15.9q0.4-0.4 1-0.4t1 0.4l15.8 15.9q0.4 0.4 0.3 0.7t-0.7 0.3h-32.9q-0.5 0-0.7-0.3t0.3-0.7z m32.6 12.4h-31.4q-0.6 0-1.1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1.1-0.4h31.4q0.6 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEject.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEject;
//# sourceMappingURL=IconEject.js.map