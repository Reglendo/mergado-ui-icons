import * as React from "react";
class IconFile extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--file ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M25.9 11.4V.9l.8.6 9.1 9.1q.3.3.6.8H25.9zm-2.9.7q0 .9.6 1.6t1.5.6h12.2v23.6q0 .9-.6 1.5t-1.6.6h-30q-.8 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0H23v12.1z" }))),
            !p.textFirst && textEl));
    }
}
IconFile.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFile;
//# sourceMappingURL=IconFile.js.map