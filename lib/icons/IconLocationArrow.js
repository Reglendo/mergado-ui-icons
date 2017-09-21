import * as React from "react";
class IconLocationArrow extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--location-arrow ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 7.8l-14.3 28.6q-0.4 0.7-1.3 0.7-0.1 0-0.3 0-0.5-0.1-0.8-0.5t-0.3-0.9v-12.8h-12.9q-0.5 0-0.9-0.3t-0.5-0.8 0.1-1 0.7-0.6l28.6-14.3q0.2-0.2 0.6-0.2 0.6 0 1 0.4 0.3 0.4 0.4 0.8t-0.1 0.9z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconLocationArrow.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconLocationArrow;
//# sourceMappingURL=IconLocationArrow.js.map