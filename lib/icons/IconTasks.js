import * as React from "react";
class IconTasks extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--tasks ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M22.9 31.4h14.2v-2.8H22.9v2.8zM14.3 20h22.8v-2.9H14.3V20zM28.6 8.6h8.5V5.7h-8.5v2.9zM40 27.1v5.8q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1v-5.8q0-.5.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4v5.7q0 .6-.4 1t-1 .5H1.4q-.6 0-1-.5t-.4-1v-5.7q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-11.4V10q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4T0 10V4.3q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconTasks.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTasks;
//# sourceMappingURL=IconTasks.js.map