import * as React from "react";
class IconMercury extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--mercury ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M25.5 7.1q3.3 1.6 5.2 4.7t2 6.8q0 4.9-3.3 8.6t-8.1 4.1v3h2.1q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2h-2.1v2.2q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-2.2h-2.1q-.3 0-.5-.2t-.2-.5V35q0-.3.2-.5t.5-.2h2.1v-3q-4.8-.5-8.1-4.1T7 18.6q0-3.8 2-6.8t5.2-4.7Q10.5 4.9 9.1 1 9 .6 9.2.3t.6-.3h1.5q.5 0 .7.4.9 2.4 3.1 3.9t4.8 1.4 4.7-1.4T27.8.4q.1-.4.8-.4h1.3q.4 0 .6.3t.1.7q-1.4 3.9-5.1 6.1zm-5.6 21.5q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z" }))),
            !p.textFirst && textEl));
    }
}
IconMercury.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMercury;
//# sourceMappingURL=IconMercury.js.map