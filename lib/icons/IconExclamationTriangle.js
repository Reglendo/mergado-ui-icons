import * as React from "react";
class IconExclamationTriangle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--exclamation-triangle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M22.9 30.7v-4.2q0-.4-.3-.6t-.5-.2h-4.2q-.3 0-.5.2t-.3.6v4.2q0 .3.3.5t.5.2h4.2q.3 0 .5-.2t.3-.5zm-.1-8.4l.4-10.2q0-.3-.2-.4-.3-.3-.5-.3h-5q-.2 0-.5.3-.2.1-.2.4l.4 10.2q0 .3.2.4t.5.2h4.2q.3 0 .5-.2t.2-.4zm-.3-20.8l17.1 31.4q.8 1.4 0 2.8-.4.7-1 1.1t-1.5.3H2.9q-.8 0-1.5-.3t-1-1.1q-.8-1.4 0-2.8L17.5 1.5q.4-.7 1.1-1.1T20 0t1.4.4 1.1 1.1z" }))),
            !p.textFirst && textEl));
    }
}
IconExclamationTriangle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconExclamationTriangle;
//# sourceMappingURL=IconExclamationTriangle.js.map