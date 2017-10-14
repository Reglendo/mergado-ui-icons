import * as React from "react";
class IconFlagO extends React.Component {
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
                    React.createElement("path", { d: "m36.2 23.2v-13.4q-3.6 2-6.6 2-1.8 0-3.2-0.7-2.2-1.1-4-1.7t-3.9-0.6q-3.7 0-8.7 2.8v13.1q5.3-2.5 9.4-2.5 1.2 0 2.2 0.2t2.2 0.5 1.7 0.7 1.7 0.9l0.7 0.3q0.9 0.4 2.2 0.4 2.6 0 6.3-2z m-29.2-17.1q0 0.7-0.4 1.4t-1 1v27.5q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-27.5q-0.6-0.4-1-1t-0.4-1.4q0-1.2 0.8-2t2-0.8 2 0.8 0.8 2z m32 1.4v16.6q0 0.8-0.7 1.2-0.3 0.1-0.4 0.2-4.8 2.5-8 2.5-2 0-3.5-0.7l-0.6-0.3q-1.4-0.8-2.2-1.1t-1.9-0.6-2.5-0.3q-2.2 0-5.1 0.9t-5 2.3q-0.3 0.2-0.7 0.2-0.4 0-0.7-0.2-0.7-0.4-0.7-1.2v-16.2q0-0.8 0.6-1.2 0.8-0.4 1.8-0.9t2.4-1.1 3.4-1.1 3.3-0.4q2.5 0 4.6 0.6t4.5 1.9q0.9 0.4 2 0.4 2.6 0 6.7-2.4l0.7-0.4q0.7-0.3 1.4 0.1 0.6 0.4 0.6 1.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFlagO.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFlagO;
//# sourceMappingURL=IconFlagO.js.map