import * as React from "react";
class IconToggleOn extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--toggle-on ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m0 20q0-2.5 1-4.8t2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8-1 4.8-2.7 4-3.9 2.6-4.9 1h-14.9q-2.5 0-4.8-1t-4-2.6-2.6-4-1-4.8z m27.3 9.9q2 0 3.9-0.7t3.2-2.2 2.1-3.1 0.8-3.9-0.8-3.9-2.1-3.1-3.2-2.2-3.9-0.7-3.8 0.7-3.2 2.2-2.1 3.1-0.8 3.9 0.8 3.9 2.1 3.1 3.2 2.2 3.8 0.7z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconToggleOn.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconToggleOn;
//# sourceMappingURL=IconToggleOn.js.map