import * as React from "react";
class IconOpenid extends React.Component {
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
                    React.createElement("path", { d: "M24.2 0v34.3l-6 2.8q-5.1-.4-9.3-2.2t-6.5-4.7T0 24.1q0-3.1 2.2-5.9t6.2-4.5 8.7-2.4v3.8q-4.8.8-7.9 3.3T6 24.1q0 3.4 3.5 6t8.7 3.2V3zm15 13l.8 8.7-11.7-2.6 3.3-1.8q-2.7-1.6-6.3-2.2v-3.9q6.2.8 10.7 3.6z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconOpenid.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconOpenid;
//# sourceMappingURL=IconOpenid.js.map