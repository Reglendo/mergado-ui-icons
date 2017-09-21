import * as React from "react";
class IconGgCircle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--gg-circle ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m16 30.2l6.1-6-6.3-6.3-1.9 2 4.2 4.3-2.1 2.1-6.2-6.2 6.2-6.2 0.9 0.9 1.9-2-2.8-2.8-10.1 10.1z m8-0.2l10.1-10.1-10.1-10.1-6.1 6 6.3 6.3 1.9-2-4.2-4.3 2.1-2.1 6.2 6.2-6.2 6.2-0.9-0.9-1.9 2z m16-10q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconGgCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconGgCircle;
//# sourceMappingURL=IconGgCircle.js.map