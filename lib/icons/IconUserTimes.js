import * as React from "react";
class IconUserTimes extends React.Component {
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
                    React.createElement("path", { d: "m13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2z m20.9 6.2l4.8 4.8q0.2 0.2 0.2 0.5 0 0.2-0.2 0.4l-2.6 2.7q-0.2 0.1-0.5 0.1-0.2 0-0.4-0.1l-4.8-4.9-4.9 4.9q-0.2 0.1-0.4 0.1-0.3 0-0.4-0.1l-2.7-2.7q-0.2-0.2-0.2-0.4 0-0.3 0.2-0.5l4.8-4.8-4.8-4.8q-0.2-0.2-0.2-0.5 0-0.2 0.2-0.4l2.6-2.6q0.2-0.2 0.5-0.2 0.2 0 0.4 0.2l4.9 4.8 4.8-4.8q0.2-0.2 0.4-0.2 0.3 0 0.5 0.2l2.6 2.6q0.2 0.2 0.2 0.4 0 0.3-0.2 0.5z m-9.7 0l-3.5 3.5q-0.7 0.7-0.7 1.8 0 1 0.7 1.7l1.6 1.6q-0.4 0.1-0.9 0.1h-16.9q-2.4 0-3.8-1.3t-1.4-3.7q0-1 0.1-2t0.2-2.1 0.6-2.2 0.8-1.8 1.2-1.6 1.7-1.1 2.1-0.3q0.4 0 0.8 0.3 3 2.4 6.2 2.4t6.2-2.4q0.3-0.3 0.7-0.3 0.6 0 1.1 0.1-0.5 0.5-0.8 0.9t-0.2 1.1q0 1.1 0.7 1.8z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconUserTimes.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconUserTimes;
//# sourceMappingURL=IconUserTimes.js.map