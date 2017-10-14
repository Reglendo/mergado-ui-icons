import * as React from "react";
class IconPiedPiper extends React.Component {
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
                    React.createElement("path", { d: "m26.3 22.8q0 1.4-0.8 2.4t-2 1q-1 0-1.6-0.3v-6.2q0.6-0.4 1.6-0.4 1.2 0 2 1t0.8 2.5z m-7.6-9.6q0 1.4-0.9 2.5t-2 1q-0.9 0-1.5-0.4v-6.1q0.6-0.4 1.5-0.4 1.2 0 2 1t0.9 2.4z m12.5 9.6q0-3-1.9-5.1t-4.8-2.1q-0.4 0-0.9 0.1-0.5 1.7-1.7 3-1.9 2.1-4.7 2.3v14.2l4.7-1v-4.6q1.1 0.5 2.6 0.5 2.8 0 4.8-2.2t1.9-5.1z m-7.6-9.5q0-3-2-5.1t-4.8-2.1q-1.6 0-3.1 0.8h-4.2v18.7l4.8-0.9v-4.6q1.2 0.4 2.5 0.4 2.8 0 4.8-2.1t2-5.1z m13.7-4v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPiedPiper.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPiedPiper;
//# sourceMappingURL=IconPiedPiper.js.map