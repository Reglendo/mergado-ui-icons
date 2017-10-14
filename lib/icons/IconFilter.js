import * as React from "react";
class IconFilter extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m35.8 6.6q0.4 0.9-0.3 1.5l-11 11.1v16.5q0 1-0.9 1.3-0.3 0.1-0.5 0.1-0.6 0-1-0.4l-5.7-5.7q-0.5-0.4-0.5-1v-10.8l-11-11q-0.7-0.7-0.3-1.6 0.4-0.9 1.3-0.9h28.6q0.9 0 1.3 0.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFilter.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFilter;
//# sourceMappingURL=IconFilter.js.map