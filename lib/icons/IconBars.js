import * as React from "react";
class IconBars extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--bars ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M37.3 30v2.9q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1zm0-11.4v2.8q0 .6-.4 1t-1 .5H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h31.5q.5 0 1 .5t.4 1zm0-11.5V10q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4T3 10V7.1q0-.5.4-1t1-.4h31.5q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconBars.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconBars;
//# sourceMappingURL=IconBars.js.map