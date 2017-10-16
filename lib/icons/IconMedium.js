import * as React from "react";
class IconMedium extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--medium ${this.props.addClass} ${this.props.className}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.3 9.4v26.2q0 .5-.3.9t-.8.4q-.3 0-.7-.2L1.1 31.5q-.5-.2-.8-.7t-.3-1V4.3q0-.4.2-.8t.7-.3q.3 0 1 .4l11.4 5.7v.1zm1.5 2.3L26.7 31l-11.9-6V11.7zm25.2.4v23.5q0 .5-.3.9t-.9.3-1-.3l-9.9-4.9zm-.1-2.7l-5.7 9.3q-5.7 9.3-6.7 10.9l-8.7-14.1L26 3.7q.4-.6 1.2-.6.3 0 .6.1l12 6q.1.1.1.2z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconMedium.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
    className: "",
};
export default IconMedium;
//# sourceMappingURL=IconMedium.js.map