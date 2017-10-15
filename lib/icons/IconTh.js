import * as React from "react";
class IconTh extends React.Component {
    constructor() {
        super(...arguments);
        this.name = "muk-icon";
    }
    render() {
        let className = `muk-icon ${this.name}--th ${this.props.addClass}`;
        return (React.createElement("span", { className: className, style: this.props.style, title: this.props.title },
            this.props.text && this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text),
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: this.props.color, stroke: this.props.color, strokeWidth: 0, height: this.props.size, width: this.props.size, viewBox: this.props.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.4 27.9v4.2q0 .9-.6 1.6t-1.5.6H2.1q-.9 0-1.5-.6T0 32.1v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zm0-11.5v4.3q0 .9-.6 1.5t-1.5.7H2.1q-.9 0-1.5-.7T0 20.7v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zm14.3 11.5v4.2q0 .9-.6 1.6t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zM11.4 5v4.3q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 9.3V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zm14.3 11.4v4.3q0 .9-.6 1.5t-1.5.7h-7.2q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 27.9v4.2q0 .9-.6 1.6t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zM25.7 5v4.3q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 16.4v4.3q0 .9-.6 1.5t-1.5.7h-7.2q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 5v4.3q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6T40 5z" }))),
            this.props.text && !this.props.textFirst &&
                React.createElement("span", { className: `muk-icon__text` }, this.props.text)));
    }
}
IconTh.defaultProps = {
    size: 15,
    style: {},
    addClass: "",
    title: "",
    viewBox: "0 0 40 40",
    color: 'currentColor',
    textFirst: false,
};
export default IconTh;
//# sourceMappingURL=IconTh.js.map