import * as React from "react";
class IconRotateLeft extends React.Component {
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
                    React.createElement("path", { d: "m37.3 20q0 3.5-1.4 6.7t-3.6 5.4-5.5 3.7-6.7 1.3q-3.8 0-7.3-1.6t-5.8-4.5q-0.2-0.3-0.2-0.5t0.2-0.5l3.1-3.1q0.2-0.2 0.5-0.2 0.4 0.1 0.5 0.3 1.7 2.1 4 3.3t5 1.1q2.4 0 4.5-0.9t3.6-2.4 2.5-3.7 0.9-4.4-0.9-4.4-2.5-3.7-3.6-2.4-4.5-0.9q-2.1 0-4.2 0.8t-3.5 2.2l3 3.1q0.7 0.7 0.3 1.6-0.3 0.8-1.3 0.8h-10q-0.5 0-1-0.4t-0.4-1v-10q0-0.9 0.9-1.3 0.9-0.4 1.5 0.3l2.9 2.9q2.4-2.3 5.5-3.5t6.3-1.2q3.5 0 6.7 1.3t5.5 3.7 3.6 5.4 1.4 6.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconRotateLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconRotateLeft;
//# sourceMappingURL=IconRotateLeft.js.map