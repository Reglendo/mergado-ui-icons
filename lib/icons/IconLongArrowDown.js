import * as React from "react";
class IconLongArrowDown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--long-arrow-down ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m28.6 29q0.2 0.4-0.1 0.8l-7.9 8.6q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-7.9-8.6q-0.3-0.4-0.1-0.8 0.2-0.4 0.6-0.4h5v-27.9q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v27.9h5q0.5 0 0.7 0.4z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconLongArrowDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconLongArrowDown;
//# sourceMappingURL=IconLongArrowDown.js.map