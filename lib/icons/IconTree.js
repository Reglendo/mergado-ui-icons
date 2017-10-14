import * as React from "react";
class IconTree extends React.Component {
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
                    React.createElement("path", { d: "m36.6 32.9q0 0.5-0.5 1t-1 0.4h-10.3q0.1 0.4 0.2 1.9t0.1 2.5q0 0.5-0.4 0.9t-1 0.4h-7.1q-0.6 0-1-0.4t-0.4-0.9q0-0.9 0.1-2.5t0.2-1.9h-10.4q-0.5 0-1-0.4t-0.4-1 0.4-1l9-9h-5.1q-0.6 0-1-0.5t-0.4-1 0.4-1l9-9h-4.4q-0.6 0-1-0.4t-0.5-1 0.5-1l8.5-8.6q0.5-0.4 1-0.4t1 0.4l8.6 8.6q0.4 0.4 0.4 1t-0.4 1-1 0.4h-4.4l9 9q0.4 0.4 0.4 1t-0.4 1-1 0.5h-5.1l8.9 8.9q0.5 0.5 0.5 1.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTree.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTree;
//# sourceMappingURL=IconTree.js.map