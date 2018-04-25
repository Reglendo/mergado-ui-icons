import * as React from "react";
class IconArchive extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--archive ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M24.3 18.6q0-.6-.4-1t-1-.5h-5.8q-.5 0-1 .5t-.4 1 .4 1 1 .4h5.8q.5 0 1-.4t.4-1zm12.8-4.3v21.4q0 .6-.4 1t-1 .4H4.3q-.6 0-1-.4t-.4-1V14.3q0-.6.4-1t1-.4h31.4q.6 0 1 .4t.4 1zm1.5-10V10q0 .6-.5 1t-1 .4H2.9q-.6 0-1-.4t-.5-1V4.3q0-.6.5-1t1-.4h34.2q.6 0 1 .4t.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconArchive.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconArchive;
//# sourceMappingURL=IconArchive.js.map