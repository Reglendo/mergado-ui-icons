import * as React from "react";
class IconEllipsisV extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--ellipsis-v ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M24.1 27.9v4.2q0 .9-.7 1.6t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.6v-4.2q0-.9.6-1.6t1.5-.6h4.3q.9 0 1.5.6t.7 1.6zm0-11.5v4.3q0 .9-.7 1.5t-1.5.7h-4.3q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5zm0-11.4v4.3q0 .9-.7 1.5t-1.5.6h-4.3q-.9 0-1.5-.6t-.6-1.5V5q0-.9.6-1.5t1.5-.6h4.3q.9 0 1.5.6t.7 1.5z" }))),
            !p.textFirst && textEl));
    }
}
IconEllipsisV.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEllipsisV;
//# sourceMappingURL=IconEllipsisV.js.map