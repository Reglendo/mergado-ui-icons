import * as React from "react";
class IconAngleDoubleDown extends React.Component {
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
                    React.createElement("path", { d: "M31 19.3q0 .3-.2.5L20.4 30.2q-.3.2-.5.2t-.6-.2L8.9 19.8q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.3.5-.3t.5.3l8.8 8.7 8.7-8.7q.3-.3.5-.3t.6.3l1.1 1.1q.2.2.2.5zm0-8.6q0 .3-.2.5L20.4 21.6q-.3.3-.5.3t-.6-.3L8.9 11.2q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.2.5-.2t.5.2l8.8 8.8 8.7-8.8q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconAngleDoubleDown.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconAngleDoubleDown;
//# sourceMappingURL=IconAngleDoubleDown.js.map