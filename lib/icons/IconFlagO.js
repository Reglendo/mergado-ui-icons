import * as React from "react";
class IconFlagO extends React.Component {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--flag-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M36.2 23.2V9.8q-3.6 2-6.6 2-1.8 0-3.2-.7-2.2-1.1-4-1.7t-3.9-.6q-3.7 0-8.7 2.8v13.1q5.3-2.5 9.4-2.5 1.2 0 2.2.2t2.2.5 1.7.7 1.7.9l.7.3q.9.4 2.2.4 2.6 0 6.3-2zM7 6.1q0 .7-.4 1.4t-1 1V36q0 .3-.2.5t-.5.2H3.5q-.3 0-.5-.2t-.2-.5V8.5q-.6-.4-1-1t-.4-1.4q0-1.2.8-2t2-.8 2 .8.8 2zm32 1.4v16.6q0 .8-.7 1.2-.3.1-.4.2-4.8 2.5-8 2.5-2 0-3.5-.7l-.6-.3q-1.4-.8-2.2-1.1t-1.9-.6-2.5-.3q-2.2 0-5.1.9t-5 2.3q-.3.2-.7.2-.4 0-.7-.2Q7 27.8 7 27V10.8q0-.8.6-1.2l1.8-.9q1-.5 2.4-1.1t3.4-1.1 3.3-.4q2.5 0 4.6.6t4.5 1.9q.9.4 2 .4 2.6 0 6.7-2.4l.7-.4q.7-.3 1.4.1.6.4.6 1.2z" }))),
            !p.textFirst && textEl));
    }
}
IconFlagO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconFlagO;
//# sourceMappingURL=IconFlagO.js.map