import * as React from "react";
class IconBars extends React.Component {
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
                    React.createElement("path", { d: "M37.3 30v2.9q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1zm0-11.4v2.8q0 .6-.4 1t-1 .5H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h31.5q.5 0 1 .5t.4 1zm0-11.5V10q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4T3 10V7.1q0-.5.4-1t1-.4h31.5q.5 0 1 .4t.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBars.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBars;
//# sourceMappingURL=IconBars.js.map