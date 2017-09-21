import * as React from "react";
class IconSpoon extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--spoon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 0.6-0.4 1t-1 0.4h-4.3q-0.6 0-1-0.4t-0.3-1l1-18.4q-2.1-0.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4 3.6-1.8 3.5 1.8 2.7 4.4 0.9 5.6z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconSpoon.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconSpoon;
//# sourceMappingURL=IconSpoon.js.map