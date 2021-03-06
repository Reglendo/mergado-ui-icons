import * as React from "react";
class IconCut extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cut ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M21.4 20q.6 0 1 .4t.5 1-.5 1-1 .5-1-.5-.4-1 .4-1 1-.4zm6.7 1.4l11.3 8.9q.7.5.6 1.3-.1.7-.8 1.1l-2.8 1.4q-.3.2-.7.2-.4 0-.7-.2l-15.4-8.6-2.4 1.4q-.2.1-.3.2.3 1 .2 2.1-.1 1.7-1.2 3.3t-3 2.8q-2.9 1.8-6.2 1.8-3 0-4.9-1.7-2-1.9-1.8-4.6.2-1.7 1.3-3.3t2.9-2.8q2.9-1.8 6.2-1.8 1.9 0 3.4.6.2-.2.5-.4l2.7-1.7-2.7-1.6q-.3-.2-.5-.5-1.5.7-3.4.7-3.3 0-6.2-1.9-1.8-1.2-2.9-2.7T0 12.1q-.1-1.3.4-2.5t1.4-2.1q1.9-1.8 4.9-1.8 3.3 0 6.2 1.9 1.9 1.2 3 2.7t1.2 3.3q.1 1.1-.2 2.2.1 0 .3.1l2.4 1.5L35 8.8q.3-.2.7-.2.4 0 .7.1l2.8 1.5q.7.3.8 1.1.1.8-.6 1.3zm-15.2-5.8q1.1-.9.5-2.4T11 10.6Q9 9.3 6.7 9.3q-1.6 0-2.5.8-1 .9-.4 2.4t2.3 2.6q2.1 1.3 4.3 1.3 1.7 0 2.5-.8zM11 32.3q1.8-1.2 2.4-2.7t-.5-2.4q-.8-.8-2.5-.8-2.2 0-4.3 1.3-1.8 1.2-2.3 2.7t.4 2.4q.9.8 2.5.8 2.3 0 4.3-1.3zm4-13.7l2.1 1.3v-.3q0-.8.8-1.2l.3-.2-1.8-1.1-.6.6q0 .1-.2.3t-.2.2l-.1.1-.1.1zm5 5l2.1.7 16.5-12.9-2.9-1.4-17.1 9.6v2.5L15 24.3l.2.2.2.1q0 .1.2.3t.3.2l.5.6zm15.7 9.3l2.9-1.5L27 22.3l-4 3.1q0 .1-.3.2z" }))),
            !p.textFirst && textEl));
    }
}
IconCut.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCut;
//# sourceMappingURL=IconCut.js.map