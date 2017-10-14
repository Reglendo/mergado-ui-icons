import * as React from "react";
class IconFortAwesome extends React.Component {
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
                    React.createElement("path", { d: "m15.8 22.5v-5q0-0.4-0.4-0.4h-2.1q-0.4 0-0.4 0.4v5q0 0.4 0.4 0.4h2.1q0.4 0 0.4-0.4z m11.4 0v-5q0-0.4-0.3-0.4h-2.2q-0.3 0-0.3 0.4v5q0 0.4 0.3 0.4h2.2q0.3 0 0.3-0.4z m11.4 0.7v16.8h-14.2v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1v7.1h-14.3v-16.8q0-0.3 0.4-0.3h2.1q0.4 0 0.4 0.3v2.5h2.8v-13.9q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h2.1q0.4 0 0.4 0.4v2.5h2.8v-2.5q0-0.4 0.4-0.4h0.4v-8.7q-0.8-0.5-0.8-1.3 0-0.6 0.5-1t1-0.4 1 0.4 0.4 1q0 0.8-0.7 1.3v0.2h6.1q0.3 0 0.3 0.3v5q0 0.4-0.3 0.4h-6.1v2.8h0.3q0.4 0 0.4 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v2.5h2.9v-2.5q0-0.4 0.3-0.4h2.2q0.3 0 0.3 0.4v13.9h2.9v-2.5q0-0.3 0.3-0.3h2.2q0.3 0 0.3 0.3z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconFortAwesome.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconFortAwesome;
//# sourceMappingURL=IconFortAwesome.js.map