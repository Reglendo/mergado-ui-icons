import * as React from "react";
class IconPause extends React.Component {
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
                    React.createElement("path", { d: "m37.3 4.3v31.4q0 0.6-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h11.5q0.5 0 1 0.4t0.4 1z m-20 0v31.4q0 0.6-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-31.4q0-0.6 0.4-1t1-0.4h11.5q0.5 0 1 0.4t0.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPause.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPause;
//# sourceMappingURL=IconPause.js.map