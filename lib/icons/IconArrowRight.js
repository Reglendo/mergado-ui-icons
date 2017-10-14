import * as React from "react";
class IconArrowRight extends React.Component {
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
                    React.createElement("path", { d: "m36.4 21.4q0 1.2-0.9 2.1l-14.5 14.5q-0.9 0.8-2 0.8-1.2 0-2-0.8l-1.7-1.7q-0.9-0.8-0.9-2t0.9-2l6.5-6.6h-15.7q-1.1 0-1.9-0.8t-0.7-2v-2.9q0-1.2 0.7-2t1.9-0.9h15.7l-6.5-6.5q-0.9-0.8-0.9-2t0.9-2l1.7-1.7q0.8-0.9 2-0.9 1.2 0 2 0.9l14.5 14.5q0.9 0.8 0.9 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowRight.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowRight;
//# sourceMappingURL=IconArrowRight.js.map