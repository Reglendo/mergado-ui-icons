import * as React from "react";
class IconCopy extends React.Component {
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
                    React.createElement("path", { d: "m37.9 8.6q0.9 0 1.5 0.6t0.6 1.5v27.2q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-6.5h-12.2q-0.9 0-1.5-0.6t-0.6-1.5v-15q0-0.9 0.4-2t1.1-1.7l9.1-9.1q0.6-0.6 1.7-1.1t2-0.4h9.3q0.9 0 1.5 0.6t0.6 1.5v7.4q1.5-0.9 2.9-0.9h9.3z m-12.2 4.7l-6.7 6.7h6.7v-6.7z m-14.3-8.5l-6.6 6.6h6.6v-6.6z m4.4 14.4l7.1-7.1v-9.2h-8.6v9.2q0 0.9-0.6 1.6t-1.6 0.6h-9.2v14.3h11.4v-5.7q0-0.9 0.4-2t1.1-1.7z m21.3 17.9v-25.7h-8.5v9.3q0 0.9-0.7 1.5t-1.5 0.7h-9.3v14.2h20z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCopy.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCopy;
//# sourceMappingURL=IconCopy.js.map