import * as React from "react";
class IconModx extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--modx ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m31.9 15.8l-13.8-8.6 2.1-3.4h19.1z m-22.9 5.9l-4.1-2.5v-19.2l26.4 16.6z m22.8-3l3.3 2.1v19.2l-11.9-7.5z m-0.8-0.4l-11.2 17.9h-19.1l8-12.8z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconModx.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconModx;
//# sourceMappingURL=IconModx.js.map