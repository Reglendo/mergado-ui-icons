import * as React from "react";
class IconCny extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--cny ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M22 34.3h-3.9q-.3 0-.5-.2t-.2-.5v-7.4H11q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h6.4v-1.9H11q-.3 0-.5-.2t-.2-.5v-2.4q0-.2.2-.5t.5-.2h4.8L8.6 3.9q-.2-.3 0-.7.2-.3.6-.3h4.3q.5 0 .7.4l4.8 9.4q.4.9 1.2 2.8.3-.5.7-1.5t.6-1.3l4.3-9.4q.2-.4.6-.4h4.3q.4 0 .6.3.2.3 0 .7l-7 12.9h4.8q.3 0 .5.2t.3.5v2.4q0 .3-.3.5t-.5.2h-6.4v1.9h6.4q.3 0 .5.2t.3.5v2.3q0 .3-.3.5t-.5.2h-6.4v7.4q0 .3-.2.5t-.5.2z" }))),
            !p.textFirst && textEl));
    }
}
IconCny.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCny;
//# sourceMappingURL=IconCny.js.map