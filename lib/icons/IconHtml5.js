import * as React from "react";
class IconHtml5 extends React.Component {
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
                    React.createElement("path", { d: "M29.7 13.3l.4-3.9H10.3l1.1 11.9h13.7l-.5 5.1-4.4 1.2-4.4-1.2-.3-3.1h-3.9l.5 6.2 8.1 2.2h.1l8-2.2 1.1-12.1H15l-.3-4.1h15zM4.5 2.9h31.4L33.1 35l-12.9 3.6L7.4 35z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconHtml5.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconHtml5;
//# sourceMappingURL=IconHtml5.js.map