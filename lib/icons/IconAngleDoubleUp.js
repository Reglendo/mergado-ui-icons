import * as React from "react";
class IconAngleDoubleUp extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--angle-double-up ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M31 29.3q0 .3-.2.5l-1.1 1.1q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.1q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.3.6-.3t.5.3l10.4 10.4q.2.2.2.5zm0-8.6q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3l-8.7-8.7-8.8 8.7q-.2.3-.5.3t-.5-.3l-1.2-1.1q-.2-.2-.2-.5t.2-.5L19.3 9.8q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAngleDoubleUp.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconAngleDoubleUp;
//# sourceMappingURL=IconAngleDoubleUp.js.map