import * as React from "react";
class IconInfoCircle extends React.Component {
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
                    React.createElement("path", { d: "m25.9 30.7v-3.6q0-0.3-0.2-0.5t-0.6-0.2h-2.1v-11.4q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v3.6q0 0.3 0.2 0.5t0.5 0.2h2.2v7.1h-2.2q-0.3 0-0.5 0.2t-0.2 0.5v3.6q0 0.3 0.2 0.5t0.5 0.2h10q0.4 0 0.6-0.2t0.2-0.5z m-2.9-20v-3.6q0-0.3-0.2-0.5t-0.5-0.2h-4.3q-0.3 0-0.5 0.2t-0.2 0.5v3.6q0 0.3 0.2 0.5t0.5 0.2h4.3q0.3 0 0.5-0.2t0.2-0.5z m14.3 9.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconInfoCircle.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconInfoCircle;
//# sourceMappingURL=IconInfoCircle.js.map