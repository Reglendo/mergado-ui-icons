import * as React from "react";
class IconCrop extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--crop ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M13.9 28.6h13.3V15.3zm-1-1l13.3-13.3H12.9v13.3zm25.7 1.7v4.3q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-5H7.9q-.3 0-.5-.2t-.2-.5V14.3h-5q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h5v-5q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v5h19l5.5-5.5q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5l-5.5 5.5v19h5q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconCrop.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCrop;
//# sourceMappingURL=IconCrop.js.map