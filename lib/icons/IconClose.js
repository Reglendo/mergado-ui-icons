import * as React from "react";
class IconClose extends React.Component {
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
                    React.createElement("path", { d: "M33.5 29.5q0 .9-.7 1.5l-3 3.1q-.6.6-1.5.6t-1.5-.6l-6.6-6.6-6.5 6.6q-.7.6-1.6.6t-1.5-.6l-3-3.1q-.6-.6-.6-1.5t.6-1.5l6.5-6.6-6.5-6.5q-.6-.7-.6-1.6t.6-1.5l3-3q.6-.6 1.5-.6t1.6.6l6.5 6.6 6.6-6.6q.6-.6 1.5-.6t1.5.6l3.1 3q.6.7.6 1.5t-.6 1.6l-6.6 6.5 6.6 6.6q.6.6.6 1.5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconClose.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconClose;
//# sourceMappingURL=IconClose.js.map