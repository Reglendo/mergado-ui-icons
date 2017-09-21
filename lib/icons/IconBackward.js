import * as React from "react";
class IconBackward extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--backward ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m36.1 3.1q0.5-0.4 0.8-0.2t0.2 0.7v32.8q0 0.6-0.2 0.7t-0.8-0.2l-15.8-15.9q-0.2-0.2-0.3-0.4v15.8q0 0.6-0.3 0.7t-0.7-0.2l-15.9-15.9q-0.4-0.4-0.4-1t0.4-1l15.9-15.9q0.4-0.4 0.7-0.2t0.3 0.7v15.8q0.1-0.2 0.3-0.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconBackward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconBackward;
//# sourceMappingURL=IconBackward.js.map