import * as React from "react";
class IconCloud extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--cloud ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39.9 25.3q0 3.3-2.4 5.7t-5.6 2.3h-22.6q-3.8 0-6.6-2.7t-2.7-6.6q0-2.8 1.5-5t3.9-3.4q-0.1-0.6-0.1-0.9 0-4.4 3.1-7.5t7.5-3.1q3.3 0 6 1.8t3.9 4.8q1.4-1.3 3.4-1.3 2.2 0 3.8 1.5t1.5 3.8q0 1.5-0.8 2.8 2.7 0.7 4.4 2.8t1.8 5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCloud.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCloud;
//# sourceMappingURL=IconCloud.js.map