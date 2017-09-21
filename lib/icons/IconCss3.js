import * as React from "react";
class IconCss3 extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--css3 ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m6.1 2.9h33.6l-5.9 29.7-18 6-15.5-6 1.6-7.9h6.6l-0.7 3.2 9.5 3.6 10.8-3.6 1.5-7.5h-26.9l1.3-6.7h26.9l0.9-4.2h-27z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCss3.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCss3;
//# sourceMappingURL=IconCss3.js.map