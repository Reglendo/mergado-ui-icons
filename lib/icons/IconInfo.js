import * as React from "react";
class IconInfo extends React.Component {
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
                    React.createElement("path", { d: "m27.3 30v2.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h1.5v-8.6h-1.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h8.6q0.6 0 1 0.4t0.4 1v12.9h1.5q0.5 0 1 0.4t0.4 1z m-2.9-25.7v4.3q0 0.6-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-4.3q0-0.6 0.4-1t1-0.4h5.7q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconInfo.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconInfo;
//# sourceMappingURL=IconInfo.js.map