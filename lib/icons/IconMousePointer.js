import * as React from "react";
class IconMousePointer extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--mouse-pointer ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M32.3 23.3q.7.7.3 1.5-.4.9-1.3.9h-8.5l4.4 10.6q.3.6 0 1.1t-.7.8l-4 1.7q-.5.2-1.1 0t-.7-.8L16.4 29l-7 7q-.4.4-1 .4-.2 0-.5-.1Q7 35.9 7 35V1.4q0-.9.9-1.3.3-.1.5-.1.6 0 1 .4z" }))),
            !p.textFirst && textEl));
    }
}
IconMousePointer.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMousePointer;
//# sourceMappingURL=IconMousePointer.js.map