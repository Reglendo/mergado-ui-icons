import * as React from "react";
class IconShareSquareO extends React.PureComponent {
    render() {
        const p = this.props;
        const name = "muk-icon";
        const textEl = p.text ? React.createElement("span", { className: `muk-icon__text` }, p.text) : false;
        const className = `muk-icon ${name}--share-square-o ${p.addClass} ${p.className}`;
        return (React.createElement("span", { className: className, style: p.style, title: p.title },
            p.textFirst && textEl,
            React.createElement("svg", { className: `muk-icon__image`, preserveAspectRatio: 'xMidYMid meet', fill: p.color, stroke: p.color, strokeWidth: 0, height: p.size, width: p.size, viewBox: p.viewBox },
                React.createElement("g", null,
                    React.createElement("path", { d: "M32.9 22.1v5.8q0 2.6-1.9 4.5t-4.5 1.9H7.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h5.7q.3 0 .5.2t.2.5q0 .6-.5.7-1.8.6-3 1.3-.2.1-.4.1H7.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-4.8q0-.4.4-.7.6-.3 1.2-.8.3-.4.8-.2.4.2.4.7zM38.2 11l-8.6 8.6q-.4.4-1 .4-.2 0-.5-.1-.9-.4-.9-1.3v-4.3h-3.6q-7.2 0-9.7 2.9-2.7 3.1-1.7 10.6.1.5-.4.7-.2.1-.3.1-.4 0-.6-.3-.2-.3-.4-.7t-.9-1.5-1.1-2.3-.9-2.5-.4-2.7q0-1.1.1-2.1t.3-2 .6-1.9 1.1-1.9 1.5-1.6 2.1-1.4 2.8-1.1 3.6-.6 4.3-.3h3.6V1.4q0-.9.9-1.3.3-.1.5-.1.6 0 1 .4L38.2 9q.4.4.4 1t-.4 1z" }))),
            !p.textFirst && textEl));
    }
}
IconShareSquareO.defaultProps = {
    size: 15,
    viewBox: "0 0 40 40",
    color: 'currentColor',
};
export default IconShareSquareO;
//# sourceMappingURL=IconShareSquareO.js.map