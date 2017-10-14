import * as React from "react";
class IconArrowsV extends React.Component {
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
                    React.createElement("path", { d: "M27.2 7.1q0 .6-.4 1t-1 .5h-2.9v22.8h2.9q.6 0 1 .5t.4 1-.4 1l-5.7 5.7q-.4.4-1 .4t-1-.4l-5.7-5.7q-.5-.5-.5-1t.5-1 1-.5h2.8V8.6h-2.8q-.6 0-1-.5t-.5-1 .5-1L19.1.4q.4-.4 1-.4t1 .4l5.7 5.7q.4.5.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconArrowsV.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconArrowsV;
//# sourceMappingURL=IconArrowsV.js.map