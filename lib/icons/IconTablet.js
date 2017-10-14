import * as React from "react";
class IconTablet extends React.Component {
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
                    React.createElement("path", { d: "m21.3 31.4q0-0.5-0.4-1t-1-0.4-1 0.4-0.5 1 0.5 1 1 0.5 1-0.5 0.4-1z m8.6-3.5v-21.5q0-0.3-0.3-0.5t-0.5-0.2h-18.5q-0.3 0-0.5 0.2t-0.2 0.5v21.5q0 0.2 0.2 0.5t0.5 0.2h18.5q0.3 0 0.5-0.2t0.3-0.5z m2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1h-18.5q-1.5 0-2.6-1.1t-1-2.5v-24.3q0-1.4 1.1-2.5t2.5-1h18.5q1.5 0 2.6 1t1 2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTablet.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTablet;
//# sourceMappingURL=IconTablet.js.map