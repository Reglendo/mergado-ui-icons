import * as React from "react";
class IconEject extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--eject ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M3.3 21.9L19.2 6q.4-.4 1-.4t1 .4L37 21.9q.4.4.3.7t-.7.3H3.7q-.5 0-.7-.3t.3-.7zm32.6 12.4H4.5q-.6 0-1.1-.4t-.4-1v-5.8q0-.5.4-1t1.1-.4h31.4q.6 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4z" }))),
            !p.textFirst && textEl));
    }
}
IconEject.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconEject;
//# sourceMappingURL=IconEject.js.map