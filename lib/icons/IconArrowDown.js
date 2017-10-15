import * as React from "react";
class IconArrowDown extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--arrow-down ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.5 18.6q0 1.2-.9 2L22.1 35.1q-.9.9-2 .9-1.2 0-2-.9L3.5 20.6q-.8-.8-.8-2t.8-2.1l1.7-1.6q.9-.9 2-.9 1.2 0 2 .9l6.6 6.5V5.7q0-1.1.8-2t2-.8h2.9q1.2 0 2 .8t.9 2v15.7l6.5-6.5q.8-.9 2-.9t2.1.9l1.6 1.6q.9.9.9 2.1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowDown;
//# sourceMappingURL=IconArrowDown.js.map