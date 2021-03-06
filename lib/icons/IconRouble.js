import * as React from "react";
class IconRouble extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--rouble ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6zm5.3 0q0 4.3-2.9 7T24 22.4h-7.6V25h11.2q.4 0 .6.2t.2.5v2.9q0 .3-.2.5t-.6.2H16.4v4.3q0 .3-.2.5t-.5.2h-3.8q-.3 0-.5-.2t-.2-.5v-4.3h-5q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h5v-2.6h-5q-.3 0-.5-.2t-.2-.6v-3.3q0-.3.2-.5t.5-.2h5v-14q0-.3.2-.5t.5-.2H24q4.4 0 7.2 2.7t2.9 7z" }))),
            !p.textFirst && textEl));
    }
}
IconRouble.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconRouble;
//# sourceMappingURL=IconRouble.js.map