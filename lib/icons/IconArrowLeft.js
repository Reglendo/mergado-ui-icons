import * as React from "react";
class IconArrowLeft extends React.Component {
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
                    React.createElement("path", { d: "M36.3 20v2.9q0 1.1-.7 2t-1.9.8H18l6.5 6.6q.9.8.9 2t-.9 2L22.8 38q-.8.8-2 .8-1.1 0-2-.8L4.3 23.4q-.9-.8-.9-2 0-1.1.9-2L18.8 4.9q.8-.9 2-.9t2 .9l1.7 1.6q.9.9.9 2.1t-.9 2L18 17.1h15.7q1.1 0 1.9.9t.7 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowLeft;
//# sourceMappingURL=IconArrowLeft.js.map