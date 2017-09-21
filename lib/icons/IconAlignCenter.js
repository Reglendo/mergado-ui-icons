import * as React from "react";
class IconAlignCenter extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--align-center ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m40 30v2.9q0 0.5-0.4 1t-1 0.4h-37.2q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h37.2q0.5 0 1 0.4t0.4 1z m-8.6-8.6v2.9q0 0.6-0.4 1t-1 0.4h-20q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h20q0.6 0 1 0.4t0.4 1z m5.7-8.5v2.8q0 0.6-0.4 1t-1 0.4h-31.4q-0.6 0-1-0.4t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h31.4q0.6 0 1 0.5t0.4 1z m-8.5-8.6v2.8q0 0.6-0.5 1t-1 0.5h-14.2q-0.6 0-1-0.5t-0.5-1v-2.8q0-0.6 0.5-1t1-0.4h14.2q0.6 0 1 0.4t0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconAlignCenter.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconAlignCenter;
//# sourceMappingURL=IconAlignCenter.js.map