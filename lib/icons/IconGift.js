import * as React from "react";
class IconGift extends React.PureComponent {
    shouldComponentUpdate() { return false; }
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--gift ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M23.7 30.3v-16h-7.1v16q0 .5.4.8t1 .3h4.3q.6 0 1-.3t.4-.8zM13.5 11.4h4.4l-2.8-3.6q-.6-.7-1.6-.7-.9 0-1.5.7t-.6 1.5.6 1.5 1.5.6zm15.4-2.1q0-.9-.6-1.5t-1.6-.7q-.9 0-1.5.7l-2.8 3.6h4.4q.8 0 1.5-.6t.6-1.5zm8.4 5.7v7.1q0 .4-.2.6t-.5.2h-2.2v9.2q0 .9-.6 1.6t-1.5.6H8q-.9 0-1.5-.6t-.6-1.6v-9.2H3.7q-.3 0-.5-.2t-.2-.6V15q0-.3.2-.5t.5-.2h9.8q-2 0-3.5-1.5T8.5 9.3 10 5.7t3.5-1.4q2.4 0 3.8 1.7l2.8 3.7L23 6q1.4-1.7 3.8-1.7 2 0 3.5 1.4t1.4 3.6-1.4 3.5-3.6 1.5h9.9q.3 0 .5.2t.2.5z" }))),
            !p.textFirst && textEl));
    }
}
IconGift.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconGift;
//# sourceMappingURL=IconGift.js.map