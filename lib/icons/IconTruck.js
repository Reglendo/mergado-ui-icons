import * as React from "react";
class IconTruck extends React.Component {
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
                    React.createElement("path", { d: "m13.9 31.2q0-1.2-0.8-2t-2-0.8-1.9 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m-8.3-11.2h8.3v-5.6h-3.4q-0.3 0-0.5 0.2l-4.2 4.3q-0.2 0.2-0.2 0.4v0.7z m27.8 11.2q0-1.2-0.8-2t-1.9-0.8-2 0.8-0.8 2 0.8 1.9 2 0.8 1.9-0.8 0.8-2z m5.6-23.7v22.3q0 0.3-0.1 0.5t-0.3 0.4-0.3 0.3-0.5 0.1-0.5 0.1-0.6 0-0.5 0q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-8.4q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-1.4q-0.1 0-0.5 0t-0.6 0-0.5-0.1-0.5-0.1-0.3-0.3-0.3-0.4-0.1-0.5q0-0.6 0.4-1t1-0.4v-7q0-0.2 0-0.8t0-0.8 0-0.7 0.2-0.9 0.3-0.6 0.5-0.7l4.3-4.3q0.4-0.4 1.1-0.7t1.3-0.3h3.4v-4.1q0-0.6 0.5-1t0.9-0.4h22.3q0.6 0 1 0.4t0.4 1z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTruck.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTruck;
//# sourceMappingURL=IconTruck.js.map