import * as React from "react";
class IconTwitter extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--twitter ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.7 9.1q-1.5 2.2-3.7 3.7.1.3.1 1 0 2.9-.9 5.8t-2.6 5.5-4.1 4.7-5.7 3.3-7.2 1.2q-6.1 0-11.1-3.3.8.1 1.7.1 5 0 9-3-2.4-.1-4.2-1.5t-2.6-3.5q.8.1 1.4.1 1 0 1.9-.3-2.5-.5-4.1-2.5t-1.7-4.6q1.5.8 3.3.9-1.5-1-2.4-2.6T4 10.7q0-2 .9-3.7 2.7 3.4 6.6 5.4t8.3 2.2q-.2-.9-.2-1.7 0-3 2.1-5.1t5.1-2.1q3.2 0 5.3 2.3 2.4-.5 4.6-1.7-.8 2.5-3.2 3.9 2.1-.2 4.2-1.1z" }))),
            !p.textFirst && textEl));
    }
}
IconTwitter.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTwitter;
//# sourceMappingURL=IconTwitter.js.map