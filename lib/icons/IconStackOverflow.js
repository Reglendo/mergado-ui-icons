import * as React from "react";
class IconStackOverflow extends React.Component {
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
                    React.createElement("path", { d: "M31.8 36.4h-25V25.7H3.2V40h32.1V25.7h-3.5v10.7zM10.7 24.7l.8-3.5L29 24.9l-.8 3.5zm2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2zm4.5-8l2.3-2.7 13.7 11.4-2.3 2.8zM26.4 0L37 14.3l-2.8 2.2L23.5 2.1zm-16 32.8v-3.5h17.8v3.5H10.4z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconStackOverflow.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconStackOverflow;
//# sourceMappingURL=IconStackOverflow.js.map