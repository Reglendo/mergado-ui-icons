import * as React from "react";
class IconChevronLeft extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--chevron-left ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.1 6.7l-11.8 11.9 11.8 11.8q0.5 0.4 0.5 1t-0.5 1l-3.7 3.7q-0.4 0.5-1 0.5t-1-0.5l-16.5-16.5q-0.5-0.4-0.5-1t0.5-1l16.5-16.6q0.5-0.4 1-0.4t1 0.4l3.7 3.7q0.5 0.4 0.5 1t-0.5 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconChevronLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconChevronLeft;
//# sourceMappingURL=IconChevronLeft.js.map