import * as React from "react";
class IconComments extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--comments ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.4 17.1q0 3.1-2.1 5.8T23.6 27t-7.9 1.6q-1.9 0-3.9-.4-2.8 2-6.2 2.9-.8.2-1.9.3h-.1q-.3 0-.5-.2t-.2-.4v-.4l.1-.2v-.1l.1-.1.1-.1.1-.1q.1-.1.5-.6t.6-.6.5-.7.6-.8.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5 7.9 1.5 5.7 4.2 2.1 5.7zm8.6 5.8q0 2.6-1.6 5t-4.3 3.9l.4 1q.2.5.6.8t.5.7.6.7.5.5l.1.1.1.1.1.1q.1.1 0 .2l.1.1v.4q0 .3-.3.5t-.5.1q-1.1-.1-1.9-.3-3.4-.9-6.2-2.9-2 .4-3.9.4-6.1 0-10.6-3 1.3.1 2 .1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-.5-3.4 2.9 1.6 4.5 4t1.7 5.2z" }))),
            !p.textFirst && textEl));
    }
}
IconComments.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconComments;
//# sourceMappingURL=IconComments.js.map