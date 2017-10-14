import * as React from "react";
class IconAnchor extends React.Component {
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
                    React.createElement("path", { d: "m21.4 5.7q0-0.6-0.4-1t-1-0.4-1 0.4-0.4 1 0.4 1 1 0.4 1-0.4 0.4-1z m18.6 20.7v7.9q0 0.5-0.4 0.7-0.2 0-0.3 0-0.3 0-0.5-0.2l-2.1-2.1q-2.7 3.2-7.1 5.1t-9.6 1.8-9.6-1.8-7.1-5.1l-2.1 2.1q-0.2 0.2-0.5 0.2-0.1 0-0.3 0-0.4-0.2-0.4-0.7v-7.9q0-0.3 0.2-0.5t0.5-0.2h7.9q0.5 0 0.6 0.5 0.2 0.4-0.1 0.7l-2.2 2.3q1.5 2 4.2 3.4t6 1.8v-14.4h-4.2q-0.6 0-1-0.4t-0.5-1v-2.9q0-0.6 0.5-1t1-0.4h4.2v-3.6q-1.2-0.8-2-2.1t-0.8-2.9q0-2.4 1.7-4t4-1.7 4 1.7 1.7 4q0 1.6-0.8 2.9t-2 2v3.7h4.2q0.6 0 1 0.4t0.5 1v2.9q0 0.6-0.5 1t-1 0.4h-4.2v14.4q3.3-0.4 6-1.8t4.2-3.4l-2.2-2.3q-0.3-0.3-0.1-0.7 0.1-0.5 0.6-0.5h7.9q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAnchor.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconAnchor;
//# sourceMappingURL=IconAnchor.js.map