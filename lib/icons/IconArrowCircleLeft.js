import * as React from "react";
class IconArrowCircleLeft extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--arrow-circle-left ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31.6 21.4v-2.8q0-.6-.5-1t-1-.5H18.9l4.3-4.2q.4-.4.4-1t-.4-1l-2.1-2q-.4-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l10.1 10.1q.4.4 1 .4t1-.4l2.1-2q.4-.4.4-1t-.4-1l-4.3-4.2h11.2q.6 0 1-.5t.5-1zm5.7-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowCircleLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowCircleLeft;
//# sourceMappingURL=IconArrowCircleLeft.js.map