import * as React from "react";
class IconEllipsisH extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--ellipsis-h ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M13.1 16.4v4.3q0 .9-.7 1.5t-1.5.7H6.6q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5zm11.4 0v4.3q0 .9-.6 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.7-1.5v-4.3q0-.9.7-1.5t1.5-.6h4.3q.9 0 1.5.6t.6 1.5zm11.4 0v4.3q0 .9-.6 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.6 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconEllipsisH.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEllipsisH;
//# sourceMappingURL=IconEllipsisH.js.map