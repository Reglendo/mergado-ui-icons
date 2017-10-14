import * as React from "react";
class IconEye extends React.Component {
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
                    React.createElement("path", { d: "m37.1 21.4q-3.3-5.2-8.5-7.8 1.4 2.3 1.4 5 0 4.1-2.9 7t-7.1 3-7.1-3-2.9-7q0-2.7 1.4-5.1-5.1 2.7-8.5 7.9 2.9 4.6 7.4 7.3t9.7 2.7 9.7-2.7 7.4-7.3z m-16-8.5q0-0.5-0.3-0.8t-0.8-0.3q-2.8 0-4.8 2t-2 4.8q0 0.4 0.3 0.7t0.8 0.3 0.7-0.3 0.4-0.7q0-2 1.3-3.3t3.3-1.4q0.4 0 0.8-0.3t0.3-0.7z m18.9 8.5q0 0.8-0.4 1.6-3.2 5.1-8.4 8.2t-11.2 3.1-11.2-3.1-8.4-8.2q-0.4-0.8-0.4-1.6t0.4-1.5q3.2-5.1 8.4-8.2t11.2-3.1 11.1 3.1 8.5 8.2q0.4 0.8 0.4 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconEye.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconEye;
//# sourceMappingURL=IconEye.js.map