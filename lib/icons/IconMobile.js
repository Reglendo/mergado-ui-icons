import * as React from "react";
class IconMobile extends React.Component {
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
                    React.createElement("path", { d: "m21.9 31.4q0-0.7-0.6-1.2t-1.2-0.6-1.3 0.6-0.5 1.2 0.5 1.3 1.3 0.5 1.2-0.5 0.6-1.3z m4.6-3.5v-15.8q0-0.2-0.2-0.5t-0.5-0.2h-11.4q-0.3 0-0.5 0.2t-0.3 0.5v15.8q0 0.2 0.3 0.5t0.5 0.2h11.4q0.3 0 0.5-0.2t0.2-0.5z m-4.3-19q0-0.3-0.3-0.3h-3.6q-0.4 0-0.4 0.3t0.4 0.4h3.6q0.3 0 0.3-0.4z m6.4-0.3v22.8q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-22.8q0-1.2 0.8-2t2.1-0.9h11.4q1.1 0 2 0.9t0.8 2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMobile.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconMobile;
//# sourceMappingURL=IconMobile.js.map