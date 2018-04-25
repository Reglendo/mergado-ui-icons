import * as React from "react";
class IconSunO extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sun-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M32.9 20q0-2.6-1.1-5t-2.7-4.1T25 8.2t-5-1.1-5 1.1-4.1 2.7T8.2 15t-1.1 5 1.1 5 2.7 4.1 4.1 2.7 5 1.1 5-1.1 4.1-2.7 2.7-4.1 1.1-5zm6.1 6.2q-.1.3-.4.4l-6.5 2.2v6.8q0 .4-.3.6-.4.2-.7.1l-6.5-2.1-4 5.5q-.2.3-.6.3t-.6-.3l-4-5.5-6.5 2.1q-.3.1-.7-.1-.3-.2-.3-.6v-6.8l-6.5-2.2q-.3-.1-.4-.4-.1-.4.1-.7l4-5.5-4-5.5q-.2-.3-.1-.7.1-.3.4-.4l6.5-2.2V4.4q0-.4.3-.6.4-.2.7-.1l6.5 2.1 4-5.5q.2-.3.6-.3t.6.3l4 5.5 6.5-2.1q.3-.1.7.1.3.2.3.6v6.8l6.5 2.2q.3.1.4.4.1.4-.1.7l-4 5.5 4 5.5q.2.3.1.7z" }))),
            !p.textFirst && textEl));
    }
}
IconSunO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSunO;
//# sourceMappingURL=IconSunO.js.map