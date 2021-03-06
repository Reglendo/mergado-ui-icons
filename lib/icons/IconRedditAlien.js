import * as React from "react";
class IconRedditAlien extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--reddit-alien ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M40 18.9q0 1.3-.7 2.3t-1.7 1.7q.2 1 .2 2.1 0 3.5-2.3 6.4T29 36.1t-9 1.7-8.9-1.7-6.4-4.7T2.3 25q0-1.1.2-2.1-1.1-.6-1.8-1.6T0 18.9q0-1.8 1.3-3.2t3.1-1.3q1.9 0 3.3 1.4 4.8-3.3 11.5-3.6L21.8.6q0-.3.3-.5t.6-.1l8.2 1.8q.4-.8 1.2-1.3t1.8-.5q1.4 0 2.4 1t.9 2.3-.9 2.4-2.4 1-2.4-1-.9-2.4l-7.5-1.6-2.3 10.5q6.7.2 11.6 3.6 1.3-1.4 3.2-1.4 1.8 0 3.1 1.3t1.3 3.2zM9.3 23.3q0 1.4 1 2.4t2.4 1 2.3-1 1-2.4-1-2.3-2.3-1q-1.4 0-2.4 1t-1 2.3zm18.1 8q.3-.3.3-.6t-.3-.6q-.2-.2-.5-.2t-.6.2q-.9.9-2.7 1.4t-3.6.4-3.6-.4-2.7-1.4q-.2-.2-.5-.2t-.6.2q-.3.2-.3.6t.3.6q1 .9 2.6 1.5t2.8.6 2 .1 2-.1 2.8-.6 2.6-1.6zm-.1-4.6q1.4 0 2.4-1t1-2.4q0-1.3-1-2.3t-2.4-1Q26 20 25 21t-1 2.3 1 2.4 2.3 1z" }))),
            !p.textFirst && textEl));
    }
}
IconRedditAlien.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRedditAlien;
//# sourceMappingURL=IconRedditAlien.js.map