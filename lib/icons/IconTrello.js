import * as React from "react";
class IconTrello extends React.PureComponent {
    shouldComponentUpdate(nextProps) { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon muk-icon--trello ${p.className || ""}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `m-image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", { className: `m-group` },
                    React.createElement("path", { d: "M18.7 30V7.1q0-.3-.2-.5t-.5-.2H7.3q-.3 0-.5.2t-.2.5V30q0 .3.2.5t.5.2H18q.3 0 .5-.2t.2-.5zm15-8.6V7.1q0-.3-.2-.5t-.5-.2H22.3q-.3 0-.5.2t-.2.5v14.3q0 .3.2.5t.5.2H33q.3 0 .5-.2t.2-.5zm3.6-17.1v31.4q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconTrello.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconTrello;
//# sourceMappingURL=IconTrello.js.map