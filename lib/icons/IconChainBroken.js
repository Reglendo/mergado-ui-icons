import * as React from "react";
class IconChainBroken extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--chain-broken ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M11.3 28.4l-5.7 5.7q-.2.2-.5.2t-.5-.2q-.2-.2-.2-.5t.2-.5l5.7-5.8q.2-.2.5-.2t.5.2q.2.3.2.6t-.2.5zm3.8.9v7.1q0 .3-.2.5t-.5.2-.6-.2-.2-.5v-7.1q0-.3.2-.5t.6-.2.5.2.2.5zm-5-5q0 .3-.2.5t-.5.2H2.2q-.3 0-.5-.2t-.2-.5.2-.5.5-.2h7.2q.3 0 .5.2t.2.5zm28.2 2.8q0 2.7-1.9 4.6l-3.3 3.2q-1.8 1.9-4.5 1.9T24 34.9l-7.4-7.5q-.5-.5-1-1.2l5.4-.4 6.1 6.1q.6.6 1.5.6t1.5-.6l3.3-3.3q.6-.6.6-1.5t-.6-1.5l-6.1-6.1.4-5.4q.7.5 1.2 1l7.5 7.5q1.9 1.9 1.9 4.5zM24.5 11l-5.3.4-6.1-6.1q-.6-.7-1.5-.7t-1.6.6L6.8 8.5q-.7.6-.7 1.5t.7 1.5l6.1 6.1-.4 5.4q-.8-.5-1.3-.9l-7.5-7.5q-1.8-2-1.8-4.6 0-2.7 1.9-4.5L7 2.2Q8.9.4 11.6.4q2.7 0 4.5 1.9l7.5 7.4q.4.5.9 1.3zm14.1 1.9q0 .3-.2.5t-.5.2h-7.1q-.3 0-.5-.2t-.2-.5.2-.6.5-.2h7.1q.3 0 .5.2t.2.6zM26.5.7v7.2q0 .3-.2.5t-.5.2-.5-.2-.2-.5V.7q0-.3.2-.5t.5-.2.5.2.2.5zm9.1 3.4l-5.7 5.7q-.3.2-.5.2t-.6-.2q-.2-.2-.2-.5t.2-.5l5.8-5.7q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconChainBroken.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconChainBroken;
//# sourceMappingURL=IconChainBroken.js.map