import * as React from "react";
class IconFilter extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--filter ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M35.8 6.6q.4.9-.3 1.5l-11 11.1v16.5q0 1-.9 1.3-.3.1-.5.1-.6 0-1-.4L16.4 31q-.5-.4-.5-1V19.2l-11-11q-.7-.7-.3-1.6.4-.9 1.3-.9h28.6q.9 0 1.3.9z" }))),
            !p.textFirst && textEl));
    }
}
IconFilter.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFilter;
//# sourceMappingURL=IconFilter.js.map