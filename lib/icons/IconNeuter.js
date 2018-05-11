import * as React from "react";
class IconNeuter extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--neuter ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M32.7 12.9q0 4.9-3.3 8.5t-8.1 4.2v13.7q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5V25.6q-4.8-.5-8.1-4.2T7 12.9q0-2.7 1-5t2.8-4.1T14.9 1t5-1 4.9 1T29 3.8t2.7 4.1 1 5zm-12.8 10q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z" }))),
            !p.textFirst && textEl));
    }
}
IconNeuter.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconNeuter;
//# sourceMappingURL=IconNeuter.js.map