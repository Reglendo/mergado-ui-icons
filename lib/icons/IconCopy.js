import * as React from "react";
class IconCopy extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--copy ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M37.9 8.6q.9 0 1.5.6t.6 1.5v27.2q0 .9-.6 1.5t-1.5.6H16.4q-.9 0-1.5-.6t-.6-1.5v-6.5H2.1q-.9 0-1.5-.6T0 29.3v-15q0-.9.4-2t1.1-1.7l9.1-9.1q.6-.6 1.7-1.1t2-.4h9.3q.9 0 1.5.6t.6 1.5v7.4q1.5-.9 2.9-.9h9.3zm-12.2 4.7L19 20h6.7v-6.7zM11.4 4.8l-6.6 6.6h6.6V4.8zm4.4 14.4l7.1-7.1V2.9h-8.6v9.2q0 .9-.6 1.6t-1.6.6H2.9v14.3h11.4v-5.7q0-.9.4-2t1.1-1.7zm21.3 17.9V11.4h-8.5v9.3q0 .9-.7 1.5t-1.5.7h-9.3v14.2h20z" }))),
            !p.textFirst && textEl));
    }
}
IconCopy.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCopy;
//# sourceMappingURL=IconCopy.js.map