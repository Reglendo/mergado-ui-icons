import * as React from "react";
class IconSortDesc extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--sort-desc ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M31.4 24.3q0 .6-.5 1l-10 10q-.4.4-1 .4t-1-.4l-10-10q-.4-.4-.4-1t.4-1 1-.4h20q.6 0 1 .4t.5 1z" }))),
            !p.textFirst && textEl));
    }
}
IconSortDesc.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconSortDesc;
//# sourceMappingURL=IconSortDesc.js.map