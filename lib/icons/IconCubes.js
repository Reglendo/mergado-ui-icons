import * as React from "react";
class IconCubes extends React.Component {
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
                    React.createElement("path", { d: "m11.7 33.4l7-3.5v-5.7l-7 3v6.2z m-1.2-8.3l7.4-3.1-7.4-3.2-7.4 3.2z m19.8 8.3l7-3.5v-5.7l-7 3v6.2z m-1.1-8.3l7.3-3.1-7.3-3.2-7.4 3.2z m-8.2-5.3l7-3v-4.9l-7 3v4.9z m-1.2-6.9l8.1-3.5-8.1-3.4-8 3.5z m19.8 9.4v7.6q0 0.7-0.3 1.2t-0.9 0.9l-8.2 4.1q-0.5 0.2-1 0.2t-1.1-0.2l-8.1-4.1q-0.1 0-0.2-0.1 0 0.1-0.1 0.1l-8.2 4.1q-0.4 0.2-1 0.2t-1-0.2l-8.2-4.1q-0.6-0.3-1-0.9t-0.3-1.2v-7.6q0-0.7 0.4-1.2t1-0.9l7.9-3.4v-7.3q0-0.7 0.4-1.3t1.1-0.8l8.1-3.5q0.4-0.2 0.9-0.2t0.9 0.2l8.2 3.5q0.6 0.2 1 0.8t0.4 1.3v7.3l7.9 3.4q0.7 0.3 1.1 0.9t0.4 1.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCubes.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCubes;
//# sourceMappingURL=IconCubes.js.map