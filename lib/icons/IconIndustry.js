import * as React from "react";
class IconIndustry extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--industry ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m10 0q0.6 0 1 0.4t0.4 1v19.9l12-9.6q0.4-0.3 0.9-0.3 0.6 0 1 0.5t0.4 1v8.4l12-9.6q0.4-0.3 0.9-0.3 0.5 0 1 0.5t0.4 1v25.7q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-37.2q0-0.6 0.4-1t1-0.4h8.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconIndustry.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconIndustry;
//# sourceMappingURL=IconIndustry.js.map