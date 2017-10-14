import * as React from "react";
class IconBackward extends React.Component {
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
                    React.createElement("path", { d: "M36.1 3.1q.5-.4.8-.2t.2.7v32.8q0 .6-.2.7t-.8-.2L20.3 21q-.2-.2-.3-.4v15.8q0 .6-.3.7t-.7-.2L3.1 21q-.4-.4-.4-1t.4-1L19 3.1q.4-.4.7-.2t.3.7v15.8q.1-.2.3-.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconBackward.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconBackward;
//# sourceMappingURL=IconBackward.js.map