import * as React from "react";
class IconCheckSquareO extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--check-square-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M32.9 20.8v7.1q0 2.6-1.9 4.5t-4.5 1.9H7.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6.5.3.2.4.5.1.4-.2.7l-1.1 1.1q-.2.2-.5.2-.1 0-.2-.1-.5-.1-1-.1H7.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-5.7q0-.3.2-.5l1.4-1.4q.2-.3.5-.3.1 0 .3.1.4.2.4.7zm5.2-11L19.9 28q-.5.6-1.3.6t-1.2-.6l-9.6-9.6q-.6-.5-.6-1.3t.6-1.2l2.4-2.5q.6-.5 1.3-.5t1.3.5l5.8 5.9L33.1 4.8q.5-.5 1.3-.5t1.2.5l2.5 2.5q.5.5.5 1.3t-.5 1.2z" }))),
            !p.textFirst && textEl));
    }
}
IconCheckSquareO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconCheckSquareO;
//# sourceMappingURL=IconCheckSquareO.js.map