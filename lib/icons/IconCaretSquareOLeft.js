import * as React from "react";
class IconCaretSquareOLeft extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--caret-square-o-left ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M25.9 12.9v14.2q0 .6-.5 1t-1 .5q-.4 0-.8-.3l-10-7.1q-.6-.5-.6-1.2t.6-1.2l10-7.1q.4-.3.8-.3.6 0 1 .5t.5 1zm5.7 17.8V9.3q0-.3-.2-.5t-.5-.2H9.4q-.3 0-.5.2t-.2.5v21.4q0 .3.2.5t.5.2h21.5q.2 0 .5-.2t.2-.5zm5.7-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z" }))),
            !p.textFirst && textEl));
    }
}
IconCaretSquareOLeft.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCaretSquareOLeft;
//# sourceMappingURL=IconCaretSquareOLeft.js.map