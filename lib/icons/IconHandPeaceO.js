import * as React from "react";
class IconHandPeaceO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--hand-peace-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.8 14.4q1.3 0 2.3.6 3.2 1.4 3.2 5v3.9q0 2.2-.5 4.2l-1.9 7.6q-.5 1.9-2 3.1T29.3 40H14.4q-2.3 0-4-1.7t-1.7-4v-9l-5.3-14q-.4-1-.4-2 0-2.4 1.7-4.1t4-1.6q1.8 0 3.3 1t2 2.7l.4.9V5.7q0-2.4 1.7-4t4-1.7 4.1 1.7 1.7 4v5.8q.6-.1 1-.1 1.6 0 2.9.8t1.9 2.2zm-4.9-.1q-.7 0-1.3.4t-.9 1.1L23 19.4l-1.6 3.5h1.2q1.2 0 2.1.7t1.1 1.8l3.4-7.6q.2-.4.2-1 0-1-.7-1.8t-1.8-.7zm5 3q-.5 0-.9.2t-.7.3-.5.7-.4.7-.4.8l-2.9 6.5q-.2.4-.2 1 0 1 .7 1.8t1.8.7q.7 0 1.3-.4t.9-1.1l3.6-7.8q.2-.4.2-.9 0-1.1-.7-1.8t-1.8-.7zm-26-8q0 .5.1 1l5.6 14.5v1.6l2.2-2.5q1-1 2.4-1h4.4l2.4-5.2v-12q0-1.2-.8-2t-2.1-.8-2 .8-.8 2V20h-1.4L11.4 8.3q-.3-.9-1.1-1.4t-1.6-.5q-1.2 0-2 .9t-.8 2zm23.4 27.8q1 0 1.8-.6t1-1.5l1.9-7.6q.4-1.6.4-3.5v-2l-3.1 6.9q-.4.9-1.2 1.4t-1.7.5q-1.2 0-2.1-.8T25.2 28q-1 1.3-2.6 1.3H18v-.7h4.6q1.1 0 1.8-.8t.8-1.7-.7-1.8-1.7-.7h-6.6q-1.1 0-1.8.8l-2.8 3v6.9q0 1.2.8 2t2 .8h14.9z" }))),
            !p.textFirst && textEl));
    }
}
IconHandPeaceO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconHandPeaceO;
//# sourceMappingURL=IconHandPeaceO.js.map