import * as React from "react";
class IconTh extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--th ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M11.4 27.9v4.2q0 .9-.6 1.6t-1.5.6H2.1q-.9 0-1.5-.6T0 32.1v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zm0-11.5v4.3q0 .9-.6 1.5t-1.5.7H2.1q-.9 0-1.5-.7T0 20.7v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zm14.3 11.5v4.2q0 .9-.6 1.6t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zM11.4 5v4.3q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 9.3V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zm14.3 11.4v4.3q0 .9-.6 1.5t-1.5.7h-7.2q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 27.9v4.2q0 .9-.6 1.6t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h7.2q.9 0 1.5.6t.6 1.6zM25.7 5v4.3q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 16.4v4.3q0 .9-.6 1.5t-1.5.7h-7.2q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5zM40 5v4.3q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6T40 5z" }))),
            !p.textFirst && textEl));
    }
}
IconTh.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTh;
//# sourceMappingURL=IconTh.js.map