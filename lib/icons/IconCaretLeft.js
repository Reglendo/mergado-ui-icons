import * as React from "react";
class IconCaretLeft extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `${this.name} ${this.name}--caret-left ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            React.createElement("svg", { className: `${this.name}__image`, preserveAspectRatio: 'xMidYMid meet', fill: 'currentColor', height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "m26.3 10v20q0 0.6-0.4 1t-1 0.4-1-0.4l-10-10q-0.5-0.4-0.5-1t0.5-1l10-10q0.4-0.4 1-0.4t1 0.4 0.4 1z" }))),
            this.props.text ? (React.createElement("span", { className: `${this.name}__text` }, this.props.text)) : null));
    }
}
IconCaretLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
};
export default IconCaretLeft;
//# sourceMappingURL=IconCaretLeft.js.map