import * as React from "react";
class IconFolderO extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--folder-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.8 29.3V13.6q0-.9-.6-1.5t-1.6-.7H17.9q-.9 0-1.5-.6t-.6-1.5V7.9q0-.9-.6-1.6t-1.6-.6H6.5q-.9 0-1.5.6t-.6 1.6v21.4q0 .9.6 1.5t1.5.6h27.1q.9 0 1.6-.6t.6-1.5zm2.8-15.7v15.7q0 2-1.4 3.5t-3.6 1.5H6.5q-2.1 0-3.5-1.5t-1.5-3.5V7.9q0-2.1 1.5-3.6t3.5-1.4h7.1q2.1 0 3.6 1.4t1.4 3.6v.7h15q2.1 0 3.6 1.4t1.4 3.6z" }))),
            !p.textFirst && textEl));
    }
}
IconFolderO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFolderO;
//# sourceMappingURL=IconFolderO.js.map