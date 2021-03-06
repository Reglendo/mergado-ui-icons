import * as React from "react";
class IconMinusSquareO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--minus-square-o ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M30.2 17.9v1.4q0 .3-.2.5t-.5.2H10.9q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h18.6q.3 0 .5.2t.2.6zm2.9 10V9.3q0-1.5-1.1-2.5t-2.5-1.1H10.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5zm2.8-18.6v18.6q0 2.6-1.9 4.5t-4.5 1.9H10.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h18.6q2.7 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconMinusSquareO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconMinusSquareO;
//# sourceMappingURL=IconMinusSquareO.js.map