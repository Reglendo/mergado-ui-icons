import * as React from "react";
class IconLongArrowLeft extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--long-arrow-left ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m39 17.9v4.2q0 0.3-0.2 0.5t-0.5 0.2h-27.1v4.9q0 0.4-0.5 0.6t-0.7-0.1l-8.4-7.6q-0.2-0.3-0.2-0.5 0-0.3 0.2-0.6l8.4-7.7q0.3-0.3 0.7-0.1 0.4 0.2 0.4 0.6v4.9h27.2q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconLongArrowLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconLongArrowLeft;
//# sourceMappingURL=IconLongArrowLeft.js.map