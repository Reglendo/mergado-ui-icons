import * as React from "react";
class IconJsfiddle extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--jsfiddle ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M34.9 17.6q2.2.9 3.5 2.8t1.4 4.3q0 3.2-2.3 5.5t-5.6 2.2h-24q-3.3-.2-5.6-2.4T0 24.5q0-2.1 1.1-3.9t2.8-2.9q-.2-.7-.2-1.6 0-2.2 1.6-3.8t3.8-1.5q1.9 0 3.4 1.1 1.4-3 4.3-4.8t6.3-1.8q3.3 0 6 1.5t4.3 4.3 1.6 5.8q0 .1-.1.3t0 .4zM9.1 22.8q0 2.3 1.6 3.7t4.1 1.4q2.6 0 4.6-1.9-.3-.4-.9-1.1t-.9-1q-1.3 1.2-2.8 1.2-1 0-1.8-.6t-.7-1.7q0-1 .7-1.7t1.8-.7q.9 0 1.6.5t1.5 1 1.2 1.5 1.4 1.6 1.5 1.4 1.8 1.1 2.4.4q2.4 0 4-1.4t1.6-3.7q0-2.3-1.6-3.7t-4.1-1.4q-2.7 0-4.6 1.9.2.3.5.7t.7.7.6.7q1.3-1.3 2.7-1.3 1 0 1.8.7t.8 1.6q0 1.1-.7 1.8t-1.9.7q-.8 0-1.6-.4T23 23.7t-1.2-1.5-1.4-1.6-1.5-1.4-1.8-1.1-2.3-.4q-2.4 0-4.1 1.4t-1.6 3.7z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconJsfiddle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconJsfiddle;
//# sourceMappingURL=IconJsfiddle.js.map