import * as React from "react";
class IconMotorcycle extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--motorcycle ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M39.5 22.4q.2 1.8-.4 3.4t-1.7 2.8-2.7 1.8-3.4.6q-2.7-.2-4.8-2.2t-2.3-4.7q-.2-1.9.5-3.6t2-2.9l-1.2-1.9q-1.6 1.4-2.6 3.4t-.9 4.2q0 .4-.3.8t-.8.3h-5.6q-.4 2.8-2.6 4.7t-5 1.9q-3.2 0-5.4-2.3T0 23.3t2.3-5.4 5.4-2.3q1.3 0 2.6.5l.4-.8q-2.1-1.9-5.2-1.9H4.4q-.5 0-.8-.3t-.3-.8.3-.8.8-.3h2.2q1.3 0 2.5.2t2 .7 1.2.7.9.6H24l-1.5-2.2h-3.8q-.5 0-.9-.4t-.2-.9q.1-.4.4-.6t.7-.3h4.4q.5 0 .9.5l1.2 1.8 1.9-2q.4-.3.8-.3h1.8q.4 0 .7.3t.4.8v2.2q0 .5-.4.8t-.7.3h-3.1l2 3q2.2-1.1 4.7-.7 2.4.5 4.2 2.4t2 4.3zM7.7 28.8q2 0 3.5-1.3t1.9-3.1H7.7q-.6 0-1-.5-.3-.6 0-1.1L9.3 18q-.9-.2-1.6-.2-2.3 0-3.9 1.6t-1.6 3.9 1.6 3.9 3.9 1.6zm24.2 0q2.2 0 3.8-1.6t1.7-3.9-1.7-3.9-3.8-1.6q-1.1 0-2.1.4l3 4.5q.2.4.1.8t-.4.7q-.3.2-.6.2-.6 0-.9-.5l-3-4.5q-1.6 1.7-1.6 3.9 0 2.3 1.6 3.9t3.9 1.6z" }))),
            !p.textFirst && textEl));
    }
}
IconMotorcycle.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMotorcycle;
//# sourceMappingURL=IconMotorcycle.js.map