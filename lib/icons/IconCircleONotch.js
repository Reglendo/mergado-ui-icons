import * as React from "react";
class IconCircleONotch extends React.Component {
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
                    React.createElement("path", { d: "m39.3 20q0 3.9-1.5 7.5t-4.2 6.1-6.1 4.2-7.5 1.5-7.5-1.5-6.2-4.2-4.1-6.1-1.5-7.5q0-4.8 2.2-8.9t5.9-6.8 8.3-3.4v5.1q-4.9 1-8.1 4.9t-3.3 9.1q0 2.9 1.1 5.5t3.1 4.6 4.6 3 5.5 1.2 5.5-1.2 4.6-3 3-4.6 1.2-5.5q0-5.1-3.3-9.1t-8.1-4.9v-5.1q4.6 0.7 8.3 3.4t5.9 6.8 2.2 8.9z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCircleONotch.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCircleONotch;
//# sourceMappingURL=IconCircleONotch.js.map