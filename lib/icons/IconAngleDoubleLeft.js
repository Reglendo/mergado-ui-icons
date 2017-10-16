import * as React from "react";
class IconAngleDoubleLeft extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--angle-double-left ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M22 30.7q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L9.2 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.3.2.5t-.2.6L13 21.4l8.8 8.8q.2.2.2.5zm8.6 0q0 .3-.3.5l-1.1 1.1q-.2.3-.5.3t-.5-.3L17.8 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.2-.2.5-.2t.5.2l1.1 1.1q.3.3.3.5t-.3.6l-8.7 8.7 8.7 8.8q.3.2.3.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAngleDoubleLeft.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconAngleDoubleLeft;
//# sourceMappingURL=IconAngleDoubleLeft.js.map