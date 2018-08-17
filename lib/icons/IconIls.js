import * as React from "react";
class IconIls extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--ils ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M26.6 13.9V25q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5V13.9q0-2.5-1.7-4.3t-4.3-1.7H9.5v25.7q0 .3-.2.5t-.5.2H5.2q-.3 0-.5-.2t-.2-.5v-30q0-.3.2-.5t.5-.2h10.4q3 0 5.5 1.4t4.1 4.1 1.4 5.5zm8.6-10.3v19.6q0 3-1.5 5.6t-4 4-5.6 1.5H13.8q-.3 0-.5-.2t-.2-.5V12.1q0-.3.2-.5t.5-.2h3.6q.3 0 .5.2t.2.5v17.2h6q2.5 0 4.3-1.8t1.8-4.3V3.6q0-.3.2-.5t.5-.2h3.6q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconIls.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconIls;
//# sourceMappingURL=IconIls.js.map