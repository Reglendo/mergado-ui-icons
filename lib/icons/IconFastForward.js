import * as React from "react";
class IconFastForward extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--fast-forward ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m1 36.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-32.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.1 0.2 0.2 0.4v-15.8q0-0.6 0.3-0.7t0.7 0.2l15.9 15.9q0.2 0.2 0.3 0.4v-15.1q0-0.6 0.4-1t1-0.4h2.9q0.5 0 1 0.4t0.4 1v31.4q0 0.6-0.4 1t-1 0.4h-2.9q-0.6 0-1-0.4t-0.4-1v-15.1q-0.1 0.2-0.3 0.4l-15.9 15.9q-0.4 0.4-0.7 0.2t-0.3-0.7v-15.8q-0.1 0.2-0.2 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconFastForward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconFastForward;
//# sourceMappingURL=IconFastForward.js.map