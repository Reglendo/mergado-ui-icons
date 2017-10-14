import * as React from "react";
class IconCrop extends React.Component {
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
                    React.createElement("path", { d: "m13.9 28.6h13.3v-13.3z m-1-1l13.3-13.3h-13.3v13.3z m25.7 1.7v4.3q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-5h-19.3q-0.3 0-0.5-0.2t-0.2-0.5v-19.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5v-5q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v5h19l5.5-5.5q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.2 0.2 0.5t-0.2 0.5l-5.5 5.5v19h5q0.3 0 0.5 0.2t0.2 0.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconCrop.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconCrop;
//# sourceMappingURL=IconCrop.js.map