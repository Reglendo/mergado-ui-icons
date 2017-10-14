import * as React from "react";
class IconPrint extends React.Component {
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
                    React.createElement("path", { d: "m10.1 34.3h20v-5.7h-20v5.7z m0-14.3h20v-8.6h-3.6q-0.9 0-1.5-0.6t-0.6-1.5v-3.6h-14.3v14.3z m25.7 1.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m2.8 0v9.3q0 0.3-0.2 0.5t-0.5 0.2h-5v3.6q0 0.9-0.6 1.5t-1.5 0.6h-21.4q-0.9 0-1.6-0.6t-0.6-1.5v-3.6h-5q-0.3 0-0.5-0.2t-0.2-0.5v-9.3q0-1.7 1.3-3t3-1.3h1.4v-12.1q0-0.9 0.6-1.5t1.6-0.6h15q0.9 0 1.9 0.4t1.7 1.1l3.4 3.4q0.6 0.6 1.1 1.7t0.4 1.9v5.7h1.5q1.7 0 3 1.3t1.2 3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconPrint.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconPrint;
//# sourceMappingURL=IconPrint.js.map